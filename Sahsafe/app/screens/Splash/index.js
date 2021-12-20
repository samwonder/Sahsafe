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
  Dimensions,
  TouchableOpacity
} from 'react-native';

import IconWithText from './components/iconWithText';
import { images } from '../../assets/images/index'
import * as Animatable from "react-native-animatable";
import * as AppConstant from "@constants";

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      // if (AppConstant.Api.ApiToken) {
      //   this.props.navigation.navigate('HomeScreen');
      // } else {
        this.props.navigation.navigate('GetMobileNumber');
      // }
    }, 3000)
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
          <Animatable.View
            animation="flipInY"
            duration={1000}
            delay={200}
            style={{ height: 300, width: '100%' }}
          >
            <Image
              style={{ height: 300, width: '100%' }}
              source={images.splashIcon}
              resizeMethod={'resize'}
            />
          </Animatable.View>
        </View>
        <View style={{ flex: 2, }}>
          <View style={{ flex: 1, }}>
            <IconWithText
              title='Made In India'
              image={images.indianFlag}
              margin_top={10}
            />
            <IconWithText
              title='100% Safe & Secure'
              image={images.verifiedIcon}
              margin_top={10}
            />
          </View>
        </View>
      </View>
    );
  }
}

Splash.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Splash.defaultProps = {
  navigation: {},
};

export default Splash;
