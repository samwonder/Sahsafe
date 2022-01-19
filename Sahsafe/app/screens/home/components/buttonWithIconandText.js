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

const ButtonWithIconAndText = ({
  buttonTitle,
  onPressButton,
  buttonStyle,
  titleFontColor,
  imageStyle,
  imageName,
  headerText
}) => (

  <TouchableOpacity
    activeOpacity={0.9}
    onPress={() => onPressButton()}
    style={buttonStyle}
  >
    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
      <View style={{
        backgroundColor: 'white', 
        height: 40, width: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
        elevation: 10,
        marginLeft: 10
      }}>
        <Image
          style={imageStyle}
          source={imageName}
          resizeMode='contain'
        />
      </View>
      <View>
        <Text style={{ alignSelf: 'flex-start', fontSize: 17, marginLeft: 10, fontFamily: AppConstant.Fonts.roboto_regular }}>{headerText}</Text>
        <Text style={{ alignSelf: 'flex-start', fontSize: 22,marginLeft: 10, color: titleFontColor, fontFamily: AppConstant.Fonts.roboto_medium }}>{buttonTitle}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ButtonWithIconAndText;
