
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
  TextInput,
  TouchableOpacity
} from 'react-native';

import { images } from '../../assets/images/index'
import * as Animatable from "react-native-animatable";
import * as AppConstant from "@constants";
import CustomButton from '../../components/CustomButton';

class SuccessScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: null
    }
  }

  componentDidMount() {

  }
  navigateBack() {
    const { goBack } = this.props.navigation;
    goBack(null);
  }
  setSearchText(text) {
    this.setState({
      searchText: text
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ height: 50, marginTop: 50, width: '100%', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
          <TouchableOpacity
            onPress={() => this.navigateBack()}
            style={{ height: 50, width: 120, flexDirection: 'row' }}
          >
            <Image
              style={{ height: 30, width: 40, marginLeft: 10 }}
              source={images.backIcon}
            />
            <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 5 }}>{'  ShaSafe'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
          <View style={{ width: '96%', height: 50, justifyContent: 'space-between', flexDirection: 'row', padding: 5, borderColor: 'grey', borderWidth: 1 }}>
            {/* <Text style={{ fontSize: 19, justifyContent: 'center', marginTop: 5 }}>{'Hello, Rohit Ghorawat'}</Text>÷ */}
            <TextInput
              style={{ height: 40, width: '80%', fontSize: 18}}
              placeholder="Search by Clients"
              onChangeText={text => this.setSearchText(text)}
              value={this.state.searchText}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SearchScreen')}
              style={{ height: 30, width: 60, alignItems: 'flex-end', margin: 5 }}
            >
              <Image
                style={{ height: 25, width: 25 }}
                source={images.featureSearch}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

SuccessScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

SuccessScreen.defaultProps = {
  navigation: {},
};

export default SuccessScreen;
