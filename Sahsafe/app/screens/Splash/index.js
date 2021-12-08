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


// export let navigatorObject = null;

class Splash extends Component {
  constructor(props) {
    super(props);
    // navigatorObject = props.navigation;
  }

  componentDidMount() {

  }
  sideMenuAction() {
    this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
          <Image
            style={{ height: 300, width: '100%' }}
            source={images.splashIcon}
            resizeMethod={'resize'}
          />
        </View>
        <View style={{ flex: 2,  }}>
          <View style={{ flex: 1,  }}>
            <IconWithText 
              title= 'Made In India'
              image={images.indianFlag}
            />
            <IconWithText 
              title= '100% Safe & Secure'
              image={images.verifiedIcon}
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
