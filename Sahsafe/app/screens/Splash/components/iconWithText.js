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

const styles = StyleSheet.create({

});

const IconWithText = ({
  title,
  image,
}) => (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
    <Image
      style={{ height: 25, width: 30 }}
      source={image}
      resizeMode='contain'
    />
    <Text>{" " + title}</Text>
  </View>
);

export default IconWithText;
