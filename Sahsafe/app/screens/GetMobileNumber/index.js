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
  TouchableOpacity
} from 'react-native';
import * as Animatable from "react-native-animatable";
import { images } from '../../assets/images';
import IconWithText from '../../components/iconWithText';
import CustomButton from '../../components/CustomButton';

class GetMobileNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myNumber: null,
    };

  }

  componentDidMount() {

  }
  sideMenuAction() {
    console.log('===============');
    this.props.navigation.navigate('DrawerOpen');
  }
  popBack() {
    this.props.navigation.navigate('OTPScreen');
    // const { goBack } = this.props.navigation;
    // goBack(null);
  }
  onTextChanged(text) {
    // code to remove non-numeric characters from text
    this.setState({ myNumber: text })
  }
  render() {
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
              value={this.state.myNumber}
              maxLength={10}
              fontWeight={'600'}
              fontSize={16}
            />

          </View>
        </View>
        <View style={{ flex: 1.5, alignItems: 'center', }}>
          <CustomButton
            buttonTitle={'Login'}
            onPressButton={() => this.popBack()}
            buttonStyle={{ color: 'black', height: 50, width: '80%', backgroundColor: '#FF8400', justifyContent: 'center', borderRadius: 5 }}
          />
        </View>
      </View>

    );
  }
}



export default GetMobileNumber;

