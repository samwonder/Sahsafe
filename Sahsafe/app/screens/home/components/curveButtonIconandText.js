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
import { images } from '../../../assets/images';
import * as AppConstant from "@constants";
const styles = StyleSheet.create({

});

const CurveButtonIconandText = ({
  onPressButton,
  buttonStyle,
  imageStyle,
  imageName,
  headerText,
  titleFontColor
}) => (

  <TouchableOpacity
    activeOpacity={0.9}
    onPress={() => onPressButton()}
    style={buttonStyle}
  >
    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center',justifyContent: 'center', }}>
      <View style={{
        height: 25, width: 25, borderRadius: 5, justifyContent: 'center', alignItems: 'center',
      }}>
        <Image
          style={imageStyle}
          source={imageName}
          resizeMode='contain'
        />
      </View>
      <Text style={{ alignSelf: 'center', fontSize: 17, marginLeft: 10, color: titleFontColor, fontFamily: AppConstant.Fonts.roboto_regular }}>{headerText}</Text>
    </View>
  </TouchableOpacity>
);

export default CurveButtonIconandText;
