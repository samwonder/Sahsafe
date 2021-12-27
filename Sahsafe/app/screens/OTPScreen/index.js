import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import OTPInput from 'react-native-otp';
import CustomButton from '../../components/CustomButton';
import { connect } from "react-redux";
import * as Actions from "@redux/actions";
import * as Services from "@services";

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
        this.props.submitOTPAction(data);
        this.props.navigation.navigate('UserDetail');
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
          <Text style={styles.text}>Enter OTP to Verify Mobile Number</Text>
          <OTPInput
            value={this.state.otp}
            onChange={this.handleOTPChange}
            tintColor="#FB6C6A"
            offTintColor="#BBBCBE"
            otpLength={5}
          />
          <CustomButton
            buttonTitle={'Verify OTP'}
            onPressButton={() => this.submitOTP()}
            buttonStyle={{ color: 'black', height: 50, width: '80%', backgroundColor: '#FF8400', justifyContent: 'center', borderRadius: 5, marginTop: 30 }}
          // titleFontColor={'#707070'}
          />
          <CustomButton
            buttonTitle={`Resend OTP in ${this.state.counter}`}
            onPressButton={() => this.navigateToOTPScreen()}
            buttonStyle={{ color: '#3434D6', justifyContent: 'center',  marginTop: 15 }}
          // titleFontColor={'#707070'}
          />
          {/* <Button style={{ marginTop: 20 }} onPress={this.navigateToOTPScreen} title={`Resend OTP in ${this.state.counter}`} /> */}
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
    fontSize: 30
  }
});

const mapStateToProps = state => ({
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
