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
  title,
  image,
  margin_top
}) => (
    <Animatable.View 
    animation="bounceInUp"
    duration={1000}
    delay={200}
    style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: margin_top }}>
    <Image
      style={{ height: 25, width: 30 }}
      source={image}
      resizeMode='contain'
    />
    <Text style={{fontWeight: '600'}}>{" " + title}</Text>
  </Animatable.View>
);

export default IconWithText;
