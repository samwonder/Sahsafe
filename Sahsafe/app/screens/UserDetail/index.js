import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import MaterialTextInput from '../../components/materialTextInput';
import CustomText from '../../components/CustomText';
import RadioButton from './component/radioButton';
import CustomButton from '../../components/CustomButton';
import { connect } from "react-redux";
import * as Actions from "@redux/actions";
import * as Services from "@services";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as AppConstant from "@constants"
class UpdateProfile extends React.Component {

  state = {
    otp: '',
    isSelected: true,
    firstName: '',
    email: '',
    organizationType: 1,
  }

  handleOTPChange = (otp) => {
    this.setState({ otp })
  }

  clearOTP = () => {
    this.setState({ otp: undefined })
  }

  autoFill = () => {
    // this.setState({ otp: '221198' })
  }

  submitOTP() {

  }
  onPressRadioButton(id) {
    if (id === 1) {
      this.setState({
        isSelected: true,
        organizationType: id
      })
    } else {
      this.setState({
        isSelected: false,
        organizationType: id
      })
    }
  }

  onSubmit = (props) => {
    console.log("🚀 ~ file: index.js ~ line 51 ~ UpdateProfile ~ props", props)

  };

  firstNameAction = (text) => {
    console.log("🚀 ~ file: index.js -=-=-=-=-=-=-=-t", text)
    this.setState({
      firstName: text
    })
  };
  emailAction = (text) => {
    console.log("🚀 ~ file: index.js ~ -=-=-=-=-=-=-=", text)
    this.setState({
      email: text
    })
  };

  isEmailValid(emailAdress) {
    var EMAIL_REGEXP = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$', 'i');
    return EMAIL_REGEXP.test(emailAdress)
  }

  async onSubmitProfile() {
    if (!this.isEmailValid(this.state.email)) {
      Alert.alert('Please enter valid email')
    } else if (this.state.firstName.length <= 2) {
      Alert.alert('Please enter proper name')
    } else {
      let user = {
        "user_type": this.state.organizationType,
        "name": this.state.firstName,
        "email": this.state.email
      }
      try {
        let result = await Services.UserServices.updateUserProfile(user);
        console.log("🚀 ~ file: index.js ~ line 63 ~ ===============", result)
        this.props.navigation.navigate('WelcomeScreen')
      } catch (error) {

      }
    }

  }

  async componentDidMount() {

  }
  render() {
    return (
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1,}}
          enableOnAndroid={true}
        >

          <View style={styles.container}>
            <CustomText
              textStyle={{ fontSize: 30, fontFamily:AppConstant.Fonts.roboto_medium, marginLeft: 15 }}
              text={'Welcome to Sahsafe'} />
            <CustomText
              textStyle={{ fontSize: 16, marginLeft: 15 }}
              text={'Platform to share your Document Securely'} />
            <View style={{ marginTop: 50, }}>

              <CustomText
                textStyle={{ fontSize: 16, fontFamily:AppConstant.Fonts.roboto_bold, marginLeft: 15 }}
                text={'Registration'} />
            </View>

            <View style={{ flex: 1, marginTop: 30, alignItems: 'center' }}>

              <RadioButton
                onPressRadioButton={(id) => this.onPressRadioButton(id)}
                isSelected={this.state.isSelected}
              />
              <MaterialTextInput
                label='Your Name'
                onSubmitEditing={() => this.onSubmit()}
                value={this.state.firstName}
                onChangeText={(text) => this.firstNameAction(text)}
              />
              <MaterialTextInput
                label='Email'
                onSubmitEditing={(text) => this.onSubmit(text)}
                onChangeText={(text) => this.emailAction(text)}
                value={this.state.email}
              />
            </View>
          </View>
          <View style={styles.subContainer}>
            <CustomButton
              buttonTitle={'Continue'}
              onPressButton={() => this.onSubmitProfile()}
              buttonStyle={{ color: 'black', height: 50, width: '80%', backgroundColor: '#FF8400', justifyContent: 'center', borderRadius: 5 }}
              titleFontColor={'white'}
            />
        </View>
        </KeyboardAwareScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '85%',
    // backgroundColor: 'red',
    // backgroundColor: '#fff',
    paddingTop: 50
  },
  // alignItems: 'center',
  // justifyContent: 'center',
  subContainer: {
    height: 100,
    // backgroundColor: 'green',
  },
  text: {
    marginBottom: 15,
    fontSize: 30
  }
});

const mapStateToProps = state => ({
  mobileNumber: state.common.mobileNumber,
});

const mapDispatchToProps = dispatch => ({
  toggleLoader: state => dispatch(Actions.toggleLoader(state)),
  submitOTPAction: state => dispatch(Actions.submitOTP(state)),
  // updateUserProfile

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfile);