import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
  BackHandler
} from 'react-native';
import { images } from '../../assets/images/index'
import CustomButton from '../../components/CustomButton';
import ButtonWithIconAndText from './components/buttonWithIconandText';
import PDFScreen from '../PdfUpload';
export let navigatorObject = null;
import * as Animatable from "react-native-animatable";
import { connect } from "react-redux";
import * as Actions from "@redux/actions";
import * as Services from "@services";
import DocumentPickerScreen from '../../components/DocumentPicker';
import * as AppConstant from "@constants";
import moment from 'moment'
import { AndroidBackHandler } from '../../components/HandleBack'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topView: false,
      selectedButton: false,
      months: {},
      pickerResult: null,
    }
  }

  componentDidMount() {
    this.generateArrayOfYears()
    this.didFocusSubscription = this.props.navigation.addListener(
      'focus',
      payload => {
        this.selectedButton('recieved');
      }
    );
  }

  componentWillUnmount() {
    this.didFocusSubscription && this.didFocusSubscription()
  }

  backpress = () => {
    console.log("HOME Back press")
    BackHandler.exitApp();
    return true;
  }

  generateArrayOfYears() {
    var max = new Date().getFullYear()
    var min = max - 9
    var years = []

    for (var i = max; i >= min; i--) {
      years.push(i)
    }
    return years
  }


  popBack() {
    const { goBack } = this.props.navigation;
    goBack(null);
  }

  async increaseHeight(param) {
    if (this.state.topView && param) {
      Alert.alert(
        "Message",
        "Are you sure you want to Discard Upload",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK", onPress: () => this.setState({
              topView: !this.state.topView
            })
          }
        ]
      );
    } else {
      this.setState({
        topView: !this.state.topView
      })
    }
  }

  headerButtonAction() {

  }



  async selectedButton(value) {
    console.log("🚀 ~ file: index.js ~ line 85 ~ Home ~ selectedButton ~ value", value)
    if (value === 'sent') {
      this.setState({
        selectedButton: true,
      }, () => {
        this.callAPi(value)
      })
    } else {
      this.setState({
        selectedButton: false,
      }, () => {
        this.callAPi("")
      })
    }
  }

  async callAPi(value) {
    await this.props.getDocmentList(value);
    await this.props.getSahspaceCount();
  }

  async uploadFileAction(data) {
    console.log("🚀 ~ file: index.js ~ ================home============ data", data)
    this.props.toggleLoader(true)
    try {
      let result = await Services.DocumentServices.uploadSpaceDocumentApi(data);
      console.log("🚀 ~ ========================", result.data)
      this.props.toggleLoader(false)
      this.setState({
        topView: false,
      }, () => {
        this.props.navigation.navigate('SuccessScreen')
      })
    } catch (error) {
      this.props.toggleLoader(false)
    }
  }

  handleError(err) {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled')
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn('multiple pickers were opened, only the last will be considered')
    } else {
      throw err
    }
  }
  uploadSuccessData(data) {
    console.log("date00000000000000000000000000", data)
    this.setState({
      pickerResult: data,
    }, () =>
      this.increaseHeight(1))
    // console.log("date00000000000000000000000000"))
  }
  handleIcons(extension) {
    let image = "";
    if (extension === 'xlsx') {
      return images.xlIcon;
    } else if (extension === 'csv') {
      return images.docIcon;
    } else if (extension === 'pdf') {
      return images.pdfIcon;
    } else if (extension === 'jpg' || extension === 'png') {
      return images.imageIcon;
    }
    // docIcon,
    // xlIcon,
    // imageIcon

  }

  render() {
    // const { count } = this.props.sahspaceCount
    return (
      <AndroidBackHandler onBackPress={this.backpress}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ height: 220 }}>
            <View style={{ flex: 1 }} >
              <View style={{ flex: 1 }} />
              <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', margin: 5 }}>
                <Text style={{ fontSize: 19, alignSelf: 'center', marginHorizontal: 5, fontFamily: AppConstant.Fonts.roboto_medium }}>
                  {`Hello, ${this.props.userDetail.name}`}
                </Text>
                <TouchableOpacity
                  // onPress={() => this.props.navigation.navigate('SearchScreen')}
                  style={{ height: 30, width: 70, alignItems: 'flex-end', marginRight: 5 }}
                >
                  <Image
                    style={{ height: 25, width: 25 }}
                    source={images.featureSearch}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 2, }} >
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <ButtonWithIconAndText
                  buttonTitle={this.props.sahspaceCount && this.props.sahspaceCount.count ? this.props.sahspaceCount.count : 0}
                  headerText={'Sahspace'}
                  onPressButton={() => this.props.navigation.navigate('SearchScreen')}
                  buttonStyle={{ height: '80%', width: '47%', margin: '2%', borderRadius: 5, backgroundColor: '#E1EFFE', justifyContent: 'center', alignItems: 'center', }}
                  titleFontColor={'#002956'}
                  imageStyle={{ height: 25, width: 25 }}
                  imageName={images.shareIcon}

                />
                <ButtonWithIconAndText
                  buttonTitle={this.props.sahspaceCount && this.props.sahspaceCount.count ? this.props.sahspaceCount.count : 0}
                  headerText={'Safe Manager'}
                  onPressButton={() => this.props.navigation.navigate('SahspaceManager')}
                  buttonStyle={{ height: '80%', width: '45%', margin: '2%', borderRadius: 5, backgroundColor: '#FFF3EC', justifyContent: 'center', alignItems: 'center', }}
                  titleFontColor={'#8E4C00'}
                  imageStyle={{ height: 25, width: 25 }}
                  imageName={images.featureFolder}
                />
              </View>
              <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <CustomButton
                  buttonTitle={'Recent Received'}
                  onPressButton={() => this.selectedButton('recieved')}
                  buttonStyle={[{ color: 'white', height: 45, width: 150, justifyContent: 'center' }, !this.state.selectedButton && { borderBottomColor: 'grey', borderBottomWidth: 3 }]}
                  titleFontColor={this.state.selectedButton ? '#6A6A6A' : 'black'}
                />
                <CustomButton
                  buttonTitle={'Recent Sent'}
                  onPressButton={() => this.selectedButton('sent')}
                  buttonStyle={[{ color: 'white', height: 45, width: 120, justifyContent: 'center', },
                  this.state.selectedButton && { borderBottomColor: 'grey', borderBottomWidth: 3 }]}
                  titleFontColor={!this.state.selectedButton ? '#6A6A6A' : 'black'}
                />

              </View>
            </View>
          </View>
          <View style={{ flex: 7.5, backgroundColor: '#FFFFFF' }} >
            <FlatList
              showsHorizontalScrollIndicator={Boolean(false)}
              data={this.props.documentList}
              renderItem={({ item }) =>
                <View style={{ margin: 5, borderColor: '#DEDEDE', borderWidth: 1, borderRadius: 5 }}>
                  {/* {console.log("🚀 ~ file: index.js ~ line 223 ~ Home ~ render ~ item", item)} */}
                  <View style={{ flexDirection: 'row', }}>
                    <View style={{ width: '25%' }} >
                      <View style={{ flex: 1, backgroundColor: '#FFE6E2', justifyContent: 'center', alignItems: 'center', margin: 10, borderRadius: 5 }}>
                        <Image
                          style={{ height: '100%', width: '100%' }}
                          source={this.handleIcons(item.extension)}
                        />
                      </View>
                    </View>
                    <View style={{ width: '75%', justifyContent: 'center' }} >
                      <Text style={styles.item}>{item.doc_name}</Text>
                      <Text style={{ color: '#3072F3', fontSize: 16, fontFamily: AppConstant.Fonts.roboto_medium }}>{item.name}
                        <Text style={{ color: '#000000', fontSize: 15, fontFamily: AppConstant.Fonts.roboto_medium }}>{' > ' + item.document_name + ' > ' + item.year + ' > ' + item.month}</Text>
                      </Text>
                      <View style={{ height: 1, backgroundColor: '#DEDEDE', marginVertical: 5, }}></View>
                      <View style={{ flexDirection: 'row', width: '99%' }}>
                        <Text style={{ fontSize: 12, fontFamily: AppConstant.Fonts.roboto_bold }}>{item.user_name}</Text>
                        <View style={{ height: 15, width: 1, backgroundColor: '#DEDEDE', marginHorizontal: 5 }}></View>
                        <Text style={{ fontSize: 12, fontFamily: AppConstant.Fonts.roboto_regular }}>{moment(item.created_at).format('DD MMM YYYY')}</Text>
                        <View style={{ height: 15, width: 1, backgroundColor: '#DEDEDE', marginHorizontal: 5 }}></View>
                        <Text style={{ fontSize: 12, fontFamily: AppConstant.Fonts.roboto_regular }}>{moment(item.created_at).format('HH.mm A')}</Text>
                      </View>
                    </View>
                  </View>
                </View>}
            />
          </View>

          <View style={{ height: this.state.topView ? '100%' : 70, width: '100%', backgroundColor: this.state.topView ? '#000000C2' : 'transparent', position: 'absolute', left: 0, right: 0, bottom: 0, }}>
            {this.state.topView
              ? <View style={{ height: '80%', width: '100%', marginTop: '25%', borderRadius: 50 }}>
                <Animatable.View
                  animation="fadeInUp"
                  duration={1000}
                  delay={200}
                  style={{ height: '100%', width: '100%', borderRadius: 50 }}>
                  <PDFScreen
                    fileDetail={this.state.pickerResult}
                    onPressButton={(value) => this.increaseHeight(value)}
                    uploadFileAction={(data) => this.uploadFileAction(data)}
                  />
                </Animatable.View>
              </View>
              :
              // <CustomButton
              //   buttonTitle={'+ Share File'}
              //   onPressButton={() => this.increaseHeight(1)}
              //   buttonStyle={{ color: 'white', height: 45, width: '40%', backgroundColor: '#FF8400', justifyContent: 'center', borderRadius: 25 }}
              //   titleFontColor={'white'}
              // />
              <View style={{ height: 50, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ color: 'white', height: 45, width: '40%', backgroundColor: '#FF8400', justifyContent: 'center', borderRadius: 25 }}>
                  <DocumentPickerScreen
                    handleSuccessUpload={(data) => this.uploadSuccessData(data)} handleError={() => this.handleError()} />
                </View>
              </View>
            }
          </View>

        </View>
      </AndroidBackHandler>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    marginVertical: 5,
    fontSize: 18,
    fontFamily: AppConstant.Fonts.roboto_bold
    // height: 44,
  },
});

Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Home.defaultProps = {
  navigation: {},
};
const mapStateToProps = state => ({
  mobileNumber: state.common.mobileNumber,
  userDetail: state.common.submitOTPResponse,
  documentList: state.landing.documentList,
  sahspaceCount: state.landing.sahspaceCount
});
const mapDispatchToProps = dispatch => ({
  toggleLoader: state => dispatch(Actions.toggleLoader(state)),
  getAllDocument: state => dispatch(Actions.getAllDocument(state)),
  getSahspaceCount: state => dispatch(Actions.getSahspaceCount(state)),
  getDocmentList: state => dispatch(Actions.getDocmentList(state)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

