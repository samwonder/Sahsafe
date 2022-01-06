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
import * as AppConstant from "@constants"
const styles = StyleSheet.create({

});

const IconWithText = ({
  buttonTitle,
  onPressButton,
  buttonStyle,
  titleFontColor
}) => (
  <Animatable.View
    animation="fadeInUp"
    duration={1000}
    delay={200}
    style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPressButton()}
      style={buttonStyle}
    >
      <Text style={{ alignSelf: 'center', fontSize: 18, color: titleFontColor,fontFamily : AppConstant.Fonts.roboto_bold, }}>{buttonTitle}</Text>
    </TouchableOpacity>
  </Animatable.View>
);

export default IconWithText;
