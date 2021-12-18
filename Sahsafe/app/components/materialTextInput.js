import React, { Component } from 'react';
import { View } from 'react-native-animatable';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield-plus';

const MaterialTextInput = (props) => {
  return (
    <View style={{ width: '90%', }}>
      <OutlinedTextField
        label={props.label}
        // keyboardType={props.keyboardType}
        formatText={props.formatText}
        onSubmitEditing={props.onSubmit}
        onChangeText={props.onChangeText}
        // ref={this.fieldRef}
        value={props.value}

      />
    </View>
  );
}

export default MaterialTextInput