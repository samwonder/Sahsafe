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
  ScrollView
} from 'react-native';
const { width, height } = Dimensions.get("window");
import { images } from '../../assets/images/index'
import * as Animatable from "react-native-animatable";
import * as AppConstant from "@constants";
import MaterialTextInput from '../../components/materialTextInput';
import SelectDropdown from 'react-native-select-dropdown'
import CustomButton from '../../components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const countries = ["Egypt", "Canada", "Australia", "Ireland"]
var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documentName: null,
      firstName: null,
      description: null,
      months: monthList,
      years: {},
      selectedMonth: null,
      selectedYear: null,
    }
  }

  componentDidMount() {
    this.generateArrayOfYears()
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

  render() {
    return (
      <View style={{ height: height, backgroundColor: 'white', borderRadius: 15 }}>
        <KeyboardAwareScrollView>
          <View style={{ height: '100%', borderRadius: 10 }}>
            <View style={{ height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomColor: '#DEDEDE', borderBottomWidth: 1 }}>
              <Text style={{ fontSize: 19, justifyContent: 'center', margin: 10 }}>{'Document Upload'}</Text>
              <TouchableOpacity
                onPress={() => this.props.onPressButton()}
                style={{ height: 30, width: 70, alignItems: 'flex-end', margin: 10 }}
              >
                <Image
                  style={{ height: 20, width: 20 }}
                  source={images.closeIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={{ height: 80, width: '95%', alignItems: 'flex-end', margin: 10, backgroundColor: 'blue' }}></View>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <MaterialTextInput
                label='Document Name'
                onSubmitEditing={() => this.onSubmit()}
                value={this.state.documentName}
                onChangeText={(text) => this.documentNameAction(text)}
              />

              <SelectDropdown
                data={countries}
                // defaultValueByIndex={1}
                // defaultValue={'Egypt'}
                onSelect={(selectedItem, index) => {
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
                  // return (
                  //   <FontAwesome
                  //     name={isOpened ? "chevron-up" : "chevron-down"}
                  //     color={"#8D8D8D"}
                  //     size={18}
                  //   />
                  // );
                }}
                dropdownIconPosition={"right"}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />

              <View style={{ flexDirection: 'row' }}>
                <SelectDropdown
                  data={this.state.years}
                  defaultValue={this.state.years[0]}
                  
                  onSelect={(selectedItem, index) => {
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
                    // return (
                    //   <FontAwesome
                    //     name={isOpened ? "chevron-up" : "chevron-down"}
                    //     color={"#8D8D8D"}
                    //     size={18}
                    //   />
                    // );
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
                    // return (
                    //   <FontAwesome
                    //     name={isOpened ? "chevron-up" : "chevron-down"}
                    //     color={"#8D8D8D"}
                    //     size={18}
                    //   />
                    // );
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
                  style={{ height: 100, borderColor: '#8D8D8D', borderWidth: 1, borderRadius: 2 }}
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
                  onPressButton={() => this.props.uploadFileAction()}
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
  headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
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
  dropdown1BtnTxtStyle: { color: "#8D8D8D", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#8D8D8D", textAlign: "left" },

  dropdown2BtnStyle: {
    width: "90%",
    height: 50,
    backgroundColor: "#8D8D8D",
    borderRadius: 2,
  },
  dropdown2BtnTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown2DropdownStyle: { backgroundColor: "#8D8D8D" },
  dropdown2RowStyle: { backgroundColor: "#8D8D8D", borderBottomColor: "#C5C5C5" },
  dropdown2RowTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
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
    fontWeight: "bold",
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
    fontWeight: "bold",
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
});

Splash.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Splash.defaultProps = {
  navigation: {},
};

export default Splash;
