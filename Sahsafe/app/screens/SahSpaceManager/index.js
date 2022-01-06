
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
  TouchableOpacity,
  FlatList, StyleSheet, Alert
} from 'react-native';
import { connect } from "react-redux";
import * as Actions from "@redux/actions";
import * as Services from "@services";
import { images } from '../../assets/images/index'
import * as Animatable from "react-native-animatable";
import * as AppConstant from "@constants";
import CustomButton from '../../components/CustomButton';
import EmptyScreen from '../../components/EmptyScreen'
import NavigationBar from '../../components/NavigationBar';
import CustomText from '../../components/CustomText';

class SahspaceManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: null
    }
  }

  async componentDidMount() {
    await this.props.getSahspaceList();
    // console.log('==============', this.props.sahspaceList);
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
  makeRandomColor = (myStr) => {
    // var myStr = "John P White";
    var matches = myStr.match(/\b(\w)/g);
    console.log(matches.join(''));
    return matches.join('');
  }
  onClickCell(item) {
    console.log("🚀 ~ file: index.js ~ line 54 ~ SuccessScreen ~ onClickCell ~ item", item)
    this.props.navigation.navigate('IndustriesDetail', { sahspaceUser: item })
  }

  
  showSearchResult() {
    Alert.alert('Work in Progress..')
  }

  popBack() {
    const { goBack } = this.props.navigation;
    goBack(null);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <NavigationBar
          showBackButton={Boolean(true)}
          backButtonImage={images.featureSearch}
          backButtonAction={() => this.popBack()}
        />
        <View style={{ flex: 1, alignItems: 'center', }}>

          <FlatList
            showsHorizontalScrollIndicator={Boolean(false)}
            ListEmptyComponent={<EmptyScreen />}
            numColumns={3}
            data={this.props.sahspaceList}
            keyExtractor={item => item.id}
            style={{ flex: 1, width: '100%' }}
            renderItem = {({ item, index }) => (
              <View style={{ width: '30%', height: 110, margin: '1%', }}>
                <TouchableOpacity
                  onPress={() =>  this.props.navigation.navigate('DocumentTypeFolder', { sahspaceUser: item })}
                  style={{ height: 80, backgroundColor: '#F4F8FF', margin: '1%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    style={{ height: 70, width: 70 }}
                    source={images.folderIcon}
                  />
                </TouchableOpacity>
                <CustomText
                  textStyle={{ fontSize: 14, color: 'black', fontFamily:AppConstant.Fonts.roboto_medium, textAlign: 'center' }}
                  text={item.name} />
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    // padding: 10,
    fontSize: 18,
    height: 44,
  },
  item: {
    height: 50,
    width: '100%',
    borderColor: '#E2E2E2',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5
  },
  title: {
    fontSize: 16,
  },
})

const mapStateToProps = state => ({
  submitOTPResponse: state.common.submitOTPResponse,
  sahspaceList: state.landing.getSahspaceList,
});

const mapDispatchToProps = dispatch => ({
  toggleLoader: state => dispatch(Actions.toggleLoader(state)),
  getSahspaceList: state => dispatch(Actions.getSahspaceList(state)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SahspaceManager);

// export default SahspaceManager;
// getSahspaceList