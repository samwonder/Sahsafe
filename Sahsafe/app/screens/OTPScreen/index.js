import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import OTPInput from 'react-native-otp';
import CustomButton from '../../components/CustomButton';
import { connect } from "react-redux";
import * as Actions from "@redux/actions";
import * as Services from "@services";
import * as AppConstant from "@constants";

class OTPScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: null,
      otp: '',
      timer: null,
      counter: 30
    };

  }


  componentDidMount() {
    console.log("🚀 ~ file: index.js ~ line 23 =======t", this.props)
    this.startTimer()
  }
  startTimer() {
    let timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  tick = () => {
    if (this.state.counter === 0) {
      clearInterval(this.state.timer);
    } else {

      this.setState({
        counter: this.state.counter - 1
      });
    }
  }

  handleOTPChange = (otp) => {
    this.setState({ otp })
  }

  clearOTP = () => {
    this.startTimer()
    this.setState({ otp: undefined, counter: 10 })
  }

  autoFill = () => {
    // this.setState({ otp: '221198' })
  }

  async submitOTP() {
    // UserDetail VerifyOTPNumber
    if (this.state.otp.toString().length !== 5) {
      Alert.alert('Please enter valid OTP')
    } else if (this.state.otp === null) {
      Alert.alert('OTP field should not be blank')
    } else {
      try {
        let data = {
          "mobile_no": this.props.mobileNumber.mobile_no,
          "otp_code": this.state.otp
        }
        await this.props.submitOTPAction(data);
        let result = await this.props.submitOTPResponse;
        console.log("🚀 ~ file: -=-=-=-=-=-=-=-=-submitOTPResponse", result)
        if (result.status === 0) {
          this.props.navigation.navigate('UserDetail');
        } else if (result.sahspace_count === 0) {
          this.props.navigation.navigate('WelcomeScreen');
        } else {
          this.props.navigation.navigate('HomeScreen');
        }
      } catch (error) {
        console.log("🚀 ~ file: index.js ~ ===============", error)
        this.props.toggleLoader(false)
      }
    }
  }
  popBack() {
    const { goBack } = this.props.navigation;
    goBack(null);
  }

  async navigateToOTPScreen(phone) {
    if (phone === null) {
      Alert.alert('Somthing went wrong, Please check your mobile number')
    } else if (phone.toString().length === 10) {
      this.props.toggleLoader(true)
      try {
        this.setState({
          counter: 30
        })
        let result = await Services.UserServices.RegisterPhoneNumber(this.props.mobileNumber.mobile_no);
        console.log("🚀 ~ file: index.js ~ line 43 ~ ============", result)
        this.props.toggleLoader(false)
      } catch (error) {
        this.props.toggleLoader(false)
      }
    } else {
      this.props.toggleLoader(false)
      Alert.alert('Somthing went wrong, Please check your mobile number')
    }
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>Enter <Text style={{color: '#3434D6', fontFamily: AppConstant.Fonts.roboto_bold}}>OTP</Text> to Verify Mobile Number</Text>
          <OTPInput
            value={this.state.otp}
            onChange={this.handleOTPChange}
            tintColor="#FB6C6A"
            offTintColor="#0055ff"
            otpLength={5}
          />
          <CustomButton
            buttonTitle={'Verify OTP'}
            onPressButton={() => this.submitOTP()}
            buttonStyle={{ color: 'black', height: 50, width: '80%', backgroundColor: '#FF8400', justifyContent: 'center', borderRadius: 5, marginTop: 30,  }}
            titleFontColor={'#FFFFFF'}
          />
          <TouchableOpacity  onPress={() => this.navigateToOTPScreen(this.props.mobileNumber.mobile_no)}>
            <Text style={{ color: '#000000', fontSize: 16, fontFamily: AppConstant.Fonts.roboto_medium }}>
              {'Resend OTP in'}
              <Text style={{ color: '#3434D6', fontSize: 17, fontFamily: AppConstant.Fonts.roboto_medium }}>{` ${this.state.counter} sec`}</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <CustomButton
            buttonTitle={'Change Mobile Number'}
            onPressButton={() => this.popBack()}
            buttonStyle={{ color: 'black', height: 50, width: '80%', backgroundColor: '#E9E9E9', justifyContent: 'center', borderRadius: 5, marginTop: 15 }}
            titleFontColor={'#707070'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '85%',
    alignItems: 'center',
    paddingTop: '20%'
  },
  subContainer: {
    height: '15%',
  },
  text: {
    marginBottom: 15,
    fontSize: 30,
    fontFamily: AppConstant.Fonts.roboto_medium,
    paddingHorizontal: 30
  }
});

const mapStateToProps = state => ({
  submitOTPResponse: state.common.submitOTPResponse,
  mobileNumber: state.common.mobileNumber,
});

const mapDispatchToProps = dispatch => ({
  toggleLoader: state => dispatch(Actions.toggleLoader(state)),
  submitOTPAction: state => dispatch(Actions.submitOTP(state)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OTPScreen);
