/* eslint react/forbid-prop-types: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from "react-native-animatable";

const styles = StyleSheet.create({

});

const IconWithText = ({
  buttonTitle,
  onPressButton,
  buttonStyle
}) => (
  <Animatable.View
    animation="bounceInUp"
    duration={1000}
    delay={200}
    style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPressButton()}
      style={buttonStyle}
    >
      <Text style={{ alignSelf: 'center', fontSize: 18 }}>{buttonTitle}</Text>
    </TouchableOpacity>
  </Animatable.View>
);

export default IconWithText;
