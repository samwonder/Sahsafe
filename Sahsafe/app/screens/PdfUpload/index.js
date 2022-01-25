/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  Alert
} from 'react-native';
const { width, height } = Dimensions.get("window");
import { images } from '../../assets/images/index'
import * as Animatable from "react-native-animatable";
import * as AppConstant from "@constants";
import MaterialTextInput from '../../components/materialTextInput';
import SelectDropdown from 'react-native-select-dropdown'
import CustomButton from '../../components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from "react-redux";
import * as Actions from "@redux/actions";
import * as Services from "@services";
import moment from 'moment'

const countries = ["Egypt", "Canada", "Australia", "Ireland"]
var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class PDFUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documentName: '',
      firstName: '',
      description: '',
      months: monthList,
      years: {},
      selectedMonth: '',
      selectedYear: '',
      sahspaceList: [],
      sahspaceSelectedList: [],
      selectedSahspace: '',
      selectedSahspaceDoc: '',
      selectedSahspaceDocId: '',
      sahspace_unique_id: '',
      isFileView: true 
    }
  }
  // this.setState({
  //   selectedSahspaceDoc: selectedItem
  // })
  async componentDidMount() {
    this.generateArrayOfYears();
    await this.props.getSahspaceList();
    console.log("🚀 ~ file: ---------", this.props.sahspaceList)
    this.getsahspaceListDetail();

  }

  getsahspaceListDetail() {
    let originArray = [];
    for (var i = 0; i < this.props.sahspaceList.length; i++) {
      originArray.push(this.props.sahspaceList[i].name)
    }
    console.log("🚀 ~ file: index.js ~ ---------originArray", originArray)
    this.setState({
      sahspaceList: originArray,
      selectedSahspace: originArray[0]
    },() => {
      this.sahspaceListItemSelected(originArray[0],0)
    })
  }

  generateArrayOfYears() {
    var max = new Date().getFullYear()
    var min = max - 10
    var yr = []

    for (var i = max + 1; i >= min; i--) {
      yr.push(i)
    }
    this.setState({
      years: yr,
      selectedYear: yr[0],
      selectedMonth: monthList[0]
    })
    return yr
  }


  documentNameAction = (text) => {
    console.log("🚀 ~ file: index.js -=-=-=-=-=-=-=-t", text)
    this.setState({
      documentName: text
    })
  };
  setDescription(text) {
    this.setState({
      description: text
    })

  }
  async sahspaceListItemSelected(selectedItem, index) {
    await this.props.getSahspaceDocumentTypeList(this.props.sahspaceList[index].sahspace_unique_id);
    this.setState({
      selectedSahspace: selectedItem,
      sahspace_unique_id: this.props.sahspaceList[index].sahspace_unique_id
    })
    console.log(selectedItem, index, this.props.sahspaceDocumentTypeList);
    this.getSahspaceListItemSelected()
  }
  getSahspaceListItemSelected() {
    let originArray = [];
    for (var i = 0; i < this.props.sahspaceDocumentTypeList.length; i++) {
      originArray.push(this.props.sahspaceDocumentTypeList[i].name)
    }
    this.setState({
      sahspaceSelectedList: originArray,
      selectedSahspaceDoc: originArray[0],
      selectedSahspaceDocId : this.props.sahspaceDocumentTypeList[0].document_type_id
    })
  }

  handleIcons(extension) {
    let image = "";
    let type = extension.split("/").pop()
    if(type ==='xlsx') {
      return images.xlIcon;
    } else if(type === 'csv'){
      return images.docIcon;
    } else if(type === 'pdf'){
      return images.pdfIcon;
    } else if (type === 'jpg' || type === 'png' || type === 'jpeg') {
      return images.imageIcon;
    }
    // docIcon,
    // xlIcon,
    // imageIcon
    
  }

  onDeleteFile() {
    Alert.alert(
      "Message",
      "Are you sure you want to remove document?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            this.setState({
              isFileView: false
            })
            this.props.onPressButton()
          }
        }
      ]
    );
  }

loaderFunction(state) {
    this.props.toggleLoader(state)
}

 async uploadFile() {
    // if (this.state.documentName.length === 0) {
    //   Alert.alert('Please enter a document name.')
    // } else if (this.state.selectedSahspace.length === 0) {
    //   Alert.alert('Please select a sahspace.')
    // } else if (this.state.selectedSahspaceDoc.length === 0) {
    //   Alert.alert('Please select a sahspace document.')
    // } else if (this.state.selectedYear.length === 0) {
    //   Alert.alert('Please select a year.')
    // } else if (this.state.selectedMonth.length === 0) {
    //   Alert.alert('Please select a month.')
    // } else if (this.state.description.length === 0) {
    //   Alert.alert('Please enter a description.')
    // } else {
    if (!this.state.isFileView) {
      Alert.alert('Please select a document to upload.')
    } else {
      this.loaderFunction(true)
      let result = await Services.DocumentServices.uploadDocuementApi(this.props.fileDetail);
    //  console.log("API result", result.data.file_id)
      let data = {
        "sahspace_unique_id": this.state.sahspace_unique_id,
        "document_type_id": this.state.selectedSahspaceDocId.length == 0 ? 1 : this.state.selectedSahspaceDocId,
        "document_name": this.state.documentName.length == 0 ? "Test" : this.state.documentName,
        "year": this.state.selectedYear,
        "month": this.state.selectedMonth.toLowerCase(),
        "description": this.state.documentName.length == 0 ? "Test Description" : this.state.description,
        "file_id": result && result.data ? result.data.file_id : "1"
      }
      //console.log("🚀 ~ file: index.js ~================>>>>>>>>>>>>>>", data, this.state.selectedSahspaceDoc)
      this.loaderFunction(false)
      this.props.uploadFileAction(data)
    }
  }
  render() {
    return (
      <View style={{ height: height, backgroundColor: 'white', borderRadius: 15 }}>
        <KeyboardAwareScrollView>
          <View style={{ height: '100%', borderRadius: 10 }}>
            <View style={{ height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomColor: '#DEDEDE', borderBottomWidth: 1 }}>
              <Text style={{ fontSize: 19, justifyContent: 'center', margin: 10 ,fontFamily:AppConstant.Fonts.roboto_medium}}>{'Document Upload'}</Text>
              <TouchableOpacity
                onPress={() => this.props.onPressButton(1)}
                style={{ height: 30, width: 70, alignItems: 'flex-end', margin: 10 }}
              >
                <Image
                  style={{ height: 20, width: 20 }}
                  source={images.closeIcon}
                />
              </TouchableOpacity>
            </View>

            {/* <View style={{ height: 80, width: '95%', alignItems: 'flex-end', margin: 10,}}> */}
            {this.state.isFileView && ( <View style={{ height: 110, marginHorizontal: 10,marginTop:10, borderColor: '#DEDEDE', borderWidth: 1, borderRadius: 5 }}>
             <View style={{ flexDirection: 'row', height: 110 }}>
                <View style={{ width: '25%' }} >
                  <View style={{ flex: 1, backgroundColor: '#FFE6E2', justifyContent: 'center', alignItems: 'center', margin: 10, borderRadius: 5 }}>
                    <Image
                      style={{ height: 40, width: 50 }}
                      source={this.handleIcons(this.props.fileDetail.type)}
                    />
                  </View>
                </View>
                {console.log("this.props.fileDetail" , this.props.fileDetail)}
                <View style={{ width: '60%', justifyContent: "center" }} >
                  <Text style={styles.txtFileDesc} numberOfLines={1}>{this.props.fileDetail.name}</Text>
                  <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.txtFileDateTime}>{moment().format('DD MMM YYYY')}</Text>
                    <View style={{ height: 15, width: 1, backgroundColor: '#DEDEDE', marginHorizontal: 5, alignSelf: "center" }}></View>
                    <Text style={styles.txtFileDateTime}>{moment().format('HH.mm')}</Text>
                  </View>
                </View>
                <View style={{ width: '15%' }} >
                  <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => this.onDeleteFile()}>
                    <Image
                      style={{ height: 30, width: 20 }}
                      source={images.deleteIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>)}
            {/* </View> */}
            <View style={{ justifyContent: 'center', alignItems: 'center',marginTop:10 }}>
              <MaterialTextInput
                label='Document Name'
                onSubmitEditing={() => this.onSubmit()}
                value={this.state.documentName}
                onChangeText={(text) => this.documentNameAction(text)}
              />

              <SelectDropdown
                data={this.state.sahspaceList}
                // defaultValueByIndex={1}
                defaultValue={this.state.sahspaceList[0]}
                onSelect={(selectedItem, index) => {
                  this.sahspaceListItemSelected(selectedItem, index)
                  console.log(selectedItem, index);
                }}
                defaultButtonText={"Sahspace"}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {

                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={(isOpened) => {
                  return (
                    <Image
                      style={{ height: 20, width: 20 }}
                      source={images.downArrow}
                    />
                  );
                }}
                dropdownIconPosition={"right"}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
              <View style={{ marginTop: 7 }}>
                <SelectDropdown
                  data={this.state.sahspaceSelectedList}

                  onSelect={(selectedItem, index) => {
                    this.setState({
                      selectedSahspaceDoc: selectedItem,
                      selectedSahspaceDocId : this.props.sahspaceDocumentTypeList[index].document_type_id
                    })
                    console.log(selectedItem, index);
                  }}
                  defaultButtonText={"GST Return"}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {

                    return item;
                  }}
                  buttonStyle={styles.dropdown1BtnStyle}
                  buttonTextStyle={styles.dropdown1BtnTxtStyle}
                  renderDropdownIcon={(isOpened) => {
                    return (
                      <Image
                        style={{ height: 20, width: 20 }}
                        source={images.downArrow}
                      />
                    );
                  }}
                  dropdownIconPosition={"right"}
                  dropdownStyle={styles.dropdown1DropdownStyle}
                  rowStyle={styles.dropdown1RowStyle}
                  rowTextStyle={styles.dropdown1RowTxtStyle}
                />
              </View>

              <View style={{ flexDirection: 'row' }}>
                <SelectDropdown
                  data={this.state.years}
                  defaultValue={this.state.years[0]}

                  onSelect={(selectedItem, index) => {
                    this.setState({
                      selectedYear: selectedItem
                    })
                    console.log(selectedItem, index);
                  }}
                  defaultButtonText={"Year"}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                  buttonStyle={styles.dropdown4BtnStyle}
                  buttonTextStyle={styles.dropdown4BtnTxtStyle}
                  renderDropdownIcon={(isOpened) => {
                    return (
                      <Image
                        style={{ height: 20, width: 20 }}
                        source={images.downArrow}
                      />
                    );
                  }}
                  dropdownIconPosition={"right"}
                  dropdownStyle={styles.dropdown4DropdownStyle}
                  rowStyle={styles.dropdown4RowStyle}
                  rowTextStyle={styles.dropdown4RowTxtStyle}
                />
                <SelectDropdown
                  data={this.state.months}
                  defaultValue={this.state.months[0]}
                  onSelect={(selectedItem, index) => {
                    this.setState({
                      selectedMonth: selectedItem
                    })
                    console.log(selectedItem, index);
                  }}
                  defaultButtonText={"Month"}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                  buttonStyle={styles.dropdown4BtnStyle}
                  buttonTextStyle={styles.dropdown4BtnTxtStyle}
                  renderDropdownIcon={(isOpened) => {
                    return (
                      <Image
                        style={{ height: 20, width: 20 }}
                        source={images.downArrow}
                      />
                    );
                  }}
                  dropdownIconPosition={"right"}
                  dropdownStyle={styles.dropdown4DropdownStyle}
                  rowStyle={styles.dropdown4RowStyle}
                  rowTextStyle={styles.dropdown4RowTxtStyle}
                />
              </View>

              <View style={{ height: 150, width: '90%', }}>
                <Text style={{ fontSize: 19, justifyContent: 'center', marginVertical: 10 }}>{'Description'}</Text>
                <TextInput
                  style={{ height: 100, borderColor: '#8D8D8D', borderWidth: 1, borderRadius: 2, padding: 5, fontFamily:AppConstant.Fonts.roboto_medium }}
                  placeholder="Type here to translate!"
                  onChangeText={text => this.setDescription(text)}
                  multiline={true}
                  value={this.state.description}
                // defaultValue={'text'}
                />
              </View>
              <View style={{ marginVertical: 20 }}>
                <CustomButton
                  buttonTitle={'Upload File'}
                  onPressButton={() => this.uploadFile()}
                  buttonStyle={{ color: 'white', height: 45, width: '80%', backgroundColor: '#FF8400', justifyContent: 'center', borderRadius: 25 }}
                  titleFontColor={'white'}
                />
              </View>
            </View>

          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    width,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  headerTitle: { color: "#000", fontFamily:AppConstant.Fonts.roboto_bold, fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#000" },
  viewContainer: { flex: 1, width, backgroundColor: "#FFF" },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "10%",
  },

  dropdown1BtnStyle: {
    // marginLeft: '5%',
    width: "90%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#8D8D8D",
  },
  dropdown1BtnTxtStyle: { color: "black", textAlign: "left" ,fontFamily:AppConstant.Fonts.roboto_regular},
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#8D8D8D", textAlign: "left" ,fontFamily:AppConstant.Fonts.roboto_medium},

  dropdown2BtnStyle: {
    width: "90%",
    height: 50,
    backgroundColor: "#8D8D8D",
    borderRadius: 2,
  },
  dropdown2BtnTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontFamily:AppConstant.Fonts.roboto_bold,
  },
  dropdown2DropdownStyle: { backgroundColor: "#8D8D8D" },
  dropdown2RowStyle: { backgroundColor: "#8D8D8D", borderBottomColor: "#C5C5C5" },
  dropdown2RowTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontFamily:AppConstant.Fonts.roboto_bold,
  },

  dropdown3BtnStyle: {
    width: "90%",
    height: 50,
    backgroundColor: "#FFF",
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#8D8D8D",
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3BtnTxt: {
    color: "#8D8D8D",
    textAlign: "center",
    fontFamily:AppConstant.Fonts.roboto_bold,
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: { backgroundColor: "slategray" },
  dropdown3RowStyle: {
    backgroundColor: "slategray",
    borderBottomColor: "#8D8D8D",
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdownRowImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3RowTxt: {
    color: "#F1F1F1",
    textAlign: "center",
    fontFamily:AppConstant.Fonts.roboto_bold,
    fontSize: 24,
    marginHorizontal: 12,
  },

  dropdown4BtnStyle: {
    width: "42.5%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#8D8D8D",
    margin: 10
  },
  dropdown4BtnTxtStyle: {
    color: "black",
    textAlign: "left"
  },
  dropdown4DropdownStyle: {
    backgroundColor: "#EFEFEF"
  },
  dropdown4RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown4RowTxtStyle: { color: "#8D8D8D", textAlign: "left" },
  txtFileDesc: {
    fontSize: 16,
    fontFamily:AppConstant.Fonts.roboto_regular
  },
  txtFileDateTime: {
    fontSize: 13,
    fontFamily:AppConstant.Fonts.roboto_regular
  },
});

const mapStateToProps = state => ({
  submitOTPResponse: state.common.submitOTPResponse,
  sahspaceList: state.landing.getSahspaceList,
  sahspaceDocumentTypeList: state.landing.getSahspaceDocumentTypeList
});

const mapDispatchToProps = dispatch => ({
  toggleLoader: state => dispatch(Actions.toggleLoader(state)),
  getSahspaceList: state => dispatch(Actions.getSahspaceList(state)),
  getSahspaceDocumentTypeList: state => dispatch(Actions.getSahspaceDocumentTypeList(state)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PDFUpload);
