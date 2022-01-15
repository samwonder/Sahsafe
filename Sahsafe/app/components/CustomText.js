import React, { Component } from 'react';
import { View, Text } from 'react-native';


const CustomText = (props) => {
    return (
        <View>
            <Text numberOfLines={2} style={props.textStyle}>{props.text}</Text>
        </View>
    );
}
export default CustomText

