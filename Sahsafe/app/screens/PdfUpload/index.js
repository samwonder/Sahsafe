/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { images } from '../../assets/images/index'
import * as Animatable from "react-native-animatable";
import * as AppConstant from "@constants";
import MaterialTextInput from '../../components/materialTextInput';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documentName: null,
      firstName: null
    }
  }

  componentDidMount() {

  }

  documentNameAction = (text) => {
    console.log("🚀 ~ file: index.js -=-=-=-=-=-=-=-t", text)
    this.setState({
      documentName: text
    })
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>
        <View style={{ height: '80%', borderRadius: 10 }}>
          <View style={{ height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 19, justifyContent: 'center', margin: 10 }}>{'Document Upload'}</Text>
            <TouchableOpacity
              style={{ height: 30, width: 70, alignItems: 'flex-end', margin: 10 }}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={images.closeIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={{ height: 80, width: '95%', alignItems: 'flex-end', margin: 10, backgroundColor: 'blue' }}></View>
          <View style={{justifyContent: 'center', alignItems: 'center', }}>
          <MaterialTextInput
              label='Your Name'
              onSubmitEditing={() => this.onSubmit()}
              value={this.state.documentName}
              onChangeText={(text) => this.documentNameAction(text)}
            />
          </View>
        </View>

      </View>
    );
  }
}

Splash.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Splash.defaultProps = {
  navigation: {},
};

export default Splash;
