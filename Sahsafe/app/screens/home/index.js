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
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  Alert
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topView: false,
      selectedButton: false,
    }
  }

  async componentDidMount() {
    // AppConstant.Api.ApiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUaGVfY2xhaW0iLCJhdWQiOiJUaGVfQXVkIiwiaWF0IjoxNjQwMjgxNTYyLCJuYmYiOjE2NDAyODE1NzIsImV4cCI6MTY0MDI5NTk2MiwiZGF0YSI6eyJpZCI6IjEiLCJndV9pZCI6ImVqeTJ6b2lsZ3oifX0.iDUUbg-7C0gla17R1CyPj_HKOLnGyxqGTsvJV4Xw4-A';
    // await this.props.getAllDocument();getSahspaceCount
    // await this.props.getSahspaceCount();getDocmentList
    // await this.props.getDocmentList();

  }

  popBack() {
    const { goBack } = this.props.navigation;
    goBack(null);
  }

  async increaseHeight(param) {

    if (this.state.topView) {
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



  selectedButton() {
    this.setState({
      selectedButton: !this.state.selectedButton,
    })
  }

  uploadFileAction() {
    this.setState({
      topView: false,
    }, () => {
      this.props.navigation.navigate('SuccessScreen')
    })
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

  render() {
    // const { name, email } = this.props.userDetail
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ height: 220 }}>
          <View style={{ flex: 1 }} >
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', margin: 5 }}>
              <Text style={{ fontSize: 19, alignSelf: 'center', marginHorizontal: 5, }}>{`Hello, ${'name'}`}</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SearchScreen')}
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
                buttonTitle={'56'}
                headerText={'Sahspace'}
                onPressButton={() => this.headerButtonAction()}
                buttonStyle={{ height: '80%', width: '47%', margin: '2%', borderRadius: 5, backgroundColor: '#E1EFFE', justifyContent: 'center', alignItems: 'center', }}
                titleFontColor={'#002956'}
                imageStyle={{ height: 25, width: 25 }}
                imageName={images.shareIcon}

              />
              <ButtonWithIconAndText
                buttonTitle={'88'}
                headerText={'Safe Manager'}
                onPressButton={() => this.headerButtonAction()}
                buttonStyle={{ height: '80%', width: '45%', margin: '2%', borderRadius: 5, backgroundColor: '#FFF3EC', justifyContent: 'center', alignItems: 'center', }}
                titleFontColor={'#8E4C00'}
                imageStyle={{ height: 25, width: 25 }}
                imageName={images.featureFolder}
              />
            </View>
            <View style={{ flexDirection: 'row', }}>
              <CustomButton
                buttonTitle={'Recent Received'}
                onPressButton={() => this.selectedButton(this.state.mobileNumber)}
                buttonStyle={[{ color: 'white', height: 45, width: 150, justifyContent: 'center' }, !this.state.selectedButton && { borderBottomColor: 'grey', borderBottomWidth: 3 }]}
                titleFontColor={'black'}
              />
              <CustomButton
                buttonTitle={'Recent Sent'}
                onPressButton={() => this.selectedButton(this.state.mobileNumber)}
                buttonStyle={[{ color: 'white', height: 45, width: 120, justifyContent: 'center', }, this.state.selectedButton && { borderBottomColor: 'grey', borderBottomWidth: 3 }]}
                titleFontColor={'black'}
              />

            </View>
          </View>
        </View>
        <View style={{ flex: 7.5, backgroundColor: '#FFFFFF' }} >
          <FlatList
            data={[
              { key: 'Devin' },
              { key: 'Dan' },
              { key: 'Dominic' },
              { key: 'Jacksonh' },
              { key: 'James' },
              { key: 'Joel' },
              { key: 'John' },
              { key: 'Jillian' },
              { key: 'Jimmy' },
              { key: 'Julie' },
            ]}
            renderItem={({ item }) => <View style={{ height: 90, margin: 10, borderColor: '#DEDEDE', borderWidth: 1, borderRadius: 5 }}>
              <View style={{ flexDirection: 'row', height: 90 }}>
                <View style={{ width: '25%' }} >
                  <View style={{ flex: 1, backgroundColor: '#FFE6E2', justifyContent: 'center', alignItems: 'center', margin: 10, borderRadius: 5 }}>
                    <Image
                      style={{ height: 40, width: 50 }}
                      source={images.pdfIcon}
                    />
                  </View>
                </View>
                <View style={{ width: '75%', }} >
                  <Text style={styles.item}>{item.key}</Text>
                  <Text >{item.key}</Text>
                  <View style={{ height: 1, backgroundColor: '#DEDEDE', marginVertical: 5 }}></View>
                  <View style={{ flexDirection: 'row', }}>
                    <Text >{item.key}</Text>
                    <View style={{ height: 15, width: 1, backgroundColor: '#DEDEDE', marginHorizontal: 5 }}></View>
                    <Text >{item.key}</Text>

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
                  onPressButton={() => this.increaseHeight(this.state.mobileNumber)}
                  uploadFileAction={() => this.uploadFileAction()}
                />
              </Animatable.View>
            </View>
            : <CustomButton
              buttonTitle={'+ Share File'}
              onPressButton={() => this.increaseHeight(1)}
              buttonStyle={{ color: 'white', height: 45, width: '40%', backgroundColor: '#FF8400', justifyContent: 'center', borderRadius: 25 }}
              titleFontColor={'white'}
            />}
        </View>
        {/* <View style={{height: 300, width: '100%', backgroundColor: 'red'}}>
          <DocumentPickerScreen handleError={() => this.handleError()}/>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    marginTop: 10,
    fontSize: 18,
    // height: 44,
  },
});

Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Home.defaultProps = {
  navigation: {},
};
const mapStateToProps = state => (console.log('=========', state), {
  mobileNumber: state.common.mobileNumber,
  userDetail: state.common.submitOTPResponse,
  allDocument: state.landing.allDocument
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

