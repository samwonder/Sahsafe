import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { images } from '../../../assets/images';
import * as AppConstant from "@constants"
const RadioButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
          onPress={() => props.onPressRadioButton(1)}
        style={props.isSelected ? styles.selectedButton: styles.deselectedButton}
      >
        <View style={styles.subContainer}>
          <Image
            style={styles.iconStyle}
            source={props.isSelected ? images.selected: images.deselected}
            resizeMethod={'resize'}
          />
          <Text style={props.isSelected ? styles.selectedText : styles.deselectedText}>{'Individual'}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
          onPress={() => props.onPressRadioButton(2)}
        style={!props.isSelected ? styles.selectedButton : styles.deselectedButton}
      >
        <View style={styles.subContainer}>
          <Image
            style={styles.iconStyle}
            source={!props.isSelected ? images.selected : images.deselected}
            resizeMethod={'resize'}
          />
          <Text style={props.isSelected ? styles.deselectedText : styles.selectedText}>{'Organisation'}</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  selectedButton: { height: 50, width: '45%', backgroundColor: '#F4F5F7', justifyContent: 'center', borderColor: '#3498DB', borderWidth: 1, borderRadius: 5 },
  selectedText: { alignSelf: 'center', fontSize: 14, marginLeft: 5, fontFamily:AppConstant.Fonts.roboto_medium },
  iconStyle: { height: 20, width: 20 },
  deselectedButton: { height: 50, width: '45%', backgroundColor: '#F4F5F7', justifyContent: 'center', borderColor: '#B4B4B4', borderWidth: 1, borderRadius: 5 },
  deselectedText: { alignSelf: 'center', color: '#B4B4B4', fontSize: 14, marginLeft: 5, fontFamily:AppConstant.Fonts.roboto_medium },
  subContainer: { flexDirection: 'row', marginLeft: 15 }
});

export default RadioButton;