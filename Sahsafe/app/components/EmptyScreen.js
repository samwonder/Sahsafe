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

const EmptyScreen = ({
    title
}) => (
    <View style={{ flex: 1, height: 300, justifyContent: 'center', alignItems: 'center', }}>
        <Animatable.View
            animation="fadeInUp"
            duration={1000}
            delay={200}
            style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ alignSelf: 'center', fontSize: 18, color: 'grey',fontFamily:AppConstant.Fonts.roboto_medium }}>{'No Document Found'}</Text>
        </Animatable.View>
    </View>
);

export default EmptyScreen;
