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
  TextInput,
  Alert
} from 'react-native';
import * as Animatable from "react-native-animatable";
import { images } from '../../assets/images';
import IconWithText from '../../components/iconWithText';
import CustomButton from '../../components/CustomButton';
import { connect } from "react-redux";
import * as Actions from "@redux/actions";
import * as Services from "@services";

class GetMobileNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: null,
    };

  }

  async navigateToOTPScreen(phone) {
    if(phone === null) {
      Alert.alert('your mobile number must contain 10 digit :)')
    } else if(phone.toString().length === 10) {
      this.props.toggleLoader(true)
      try {
        this.props.saveMobileNumber(phone)
        let result = await Services.UserServices.RegisterPhoneNumber(phone);
        console.log("🚀 ~ ========================", result)
        this.props.navigation.navigate('OTPScreen',{mobileNumber: phone});
        this.props.toggleLoader(false)
      } catch (error) {
        this.props.toggleLoader(false)
      }
    } else {
      this.props.toggleLoader(false)
      Alert.alert('your mobile number must contain 10 digit :)')
    }
  }

  onTextChanged(text) {
    this.setState({ mobileNumber: text })
  }
  render() {
    // console.log("🚀 ~ file: index.js ", this.props)
    return (
      <View style={{ flex: 1 }}>

        <View style={{ flex: 7, justifyContent: 'center', alignItems: 'center' }}>
          <Animatable.View
            animation="flipInY"
            duration={1000}
            delay={200}
            style={{ height: 300, width: '100%' }}
          >
            <Image
              style={{ height: 300, width: '100%' }}
              source={images.infoFlex}
              resizeMethod={'resize'}
            />
            <Text style={{ fontSize: 30, textAlign: 'center' }}>Share Documents, Securely !!</Text>
          </Animatable.View>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ marginLeft: '4%', fontSize: 18, fontWeight: '700' }}>{'Get Started'}</Text>
          <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'center', alignItems: 'center', height: 60, margin: 15, borderWidth: 1, borderColor: '#A5A5A5' }}>
            <IconWithText
              title='+91 '
              image={images.indianFlag}
            />
            <TextInput
              style={{ width: '75%', height: 40, }}
              keyboardType='numeric'
              onChangeText={(text) => this.onTextChanged(text)}
              placeholder='Mobile number'
              value={this.state.mobileNumber}
              maxLength={10}
              fontWeight={'600'}
              fontSize={16}
            />

          </View>
        </View>
        <View style={{ flex: 1.5, alignItems: 'center', }}>
          <CustomButton
            buttonTitle={'Login'}
            onPressButton={() => this.navigateToOTPScreen(this.state.mobileNumber)}
            buttonStyle={{ color: 'black', height: 50, width: '80%', backgroundColor: '#FF8400', justifyContent: 'center', borderRadius: 5 }}
          />
        </View>
      </View>

    );
  }
}


const mapDispatchToProps = dispatch => ({
  toggleLoader: state => dispatch(Actions.toggleLoader(state)),
  saveMobileNumber: state => dispatch(Actions.saveMobileNumber(state)),
  
});

export default connect(
  null,
  mapDispatchToProps
)(GetMobileNumber);



