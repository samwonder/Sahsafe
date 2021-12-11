import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import OTPInput from 'react-native-otp';
import CustomButton from '../../components/CustomButton';
export default class App extends React.Component {

  state = {
    otp: ''
  }

  handleOTPChange = (otp) => {
    this.setState({ otp })
  }

  clearOTP = () => {
    this.setState({ otp: undefined })
  }

  autoFill = () => {
    this.setState({ otp: '221198' })
  }

  submitOTP() {
    
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
            buttonStyle={{ color: 'black', height: 50, width: '80%', backgroundColor: '#FF8400', justifyContent: 'center', borderRadius: 5 }}
          // titleFontColor={'#707070'}
          />
          <Button onPress={this.clearOTP} title="Resend OTP in " />
          {/* <Button onPress={this.autoFill} title="Auto fill" /> */}
          {/* <Button style={{ marginTop: 500 }} onPress={this.autoFill} title="Auto fill" /> */}
        </View>
        <View style={styles.subContainer}>
          <CustomButton
            buttonTitle={'Change Mobile Number'}
            onPressButton={() => this.popBack()}
            buttonStyle={{ color: 'black', height: 50, width: '80%', backgroundColor: '#E9E9E9', justifyContent: 'center', borderRadius: 5 }}
            titleFontColor={'#707070'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '80%',
    // backgroundColor: 'red',
    // backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 150
    // justifyContent: 'center',
  },
  subContainer: {
    height: '20%',
    // backgroundColor: 'green',
  },
  text: {
    marginBottom: 15,
    fontSize: 30
  }
});