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

import { images } from '../../assets/images/index'
import * as Animatable from "react-native-animatable";
import * as AppConstant from "@constants";
import CustomButton from '../../components/CustomButton';

class SuccessScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
   
  }
  navigateBack() {
    const { goBack } = this.props.navigation;
    goBack(null);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>

        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
          <Animatable.View
            animation="bounceIn"
            duration={1000}
            delay={500}
          >
            <Image
              style={{ height: 120, width: 120 }}
              source={images.successIcon}
              resizeMethod={'resize'}
            />
          </Animatable.View>
          <Animatable.View
            animation="bounceIn"
            duration={1000}
            delay={1000}
          >
            <Text style={{ fontSize: 22, textAlign: 'center', fontFamily:AppConstant.Fonts.roboto_medium }}>{'You Have Successfully Added Document'}</Text>
          </Animatable.View>
        </View>
        <View style={{ height: 80, position: 'absolute', marginTop: 50 }}>
          <TouchableOpacity
            onPress={() => this.navigateBack()}
            style={{ height: 80, width: 80, }}
          >
            <Image
              style={{ height: 50, width: 50, marginLeft: 10 }}
              source={images.backIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SuccessScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

SuccessScreen.defaultProps = {
  navigation: {},
};

export default SuccessScreen;
