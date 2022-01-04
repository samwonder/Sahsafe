
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

class SuccessScreen extends Component {
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

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.onClickCell(item)}
      style={styles.item}>
      <View style={{ height: 35, width: 35, justifyContent: 'center', alignItems: 'center', marginTop: 6, borderRadius: 18, backgroundColor: `hsla(${Math.random() * 360}, 100%, 50%, 1)` }}>
        <Text style={{ fontSize: 16, color: 'white' }}>{this.makeRandomColor(item.name)}</Text>
      </View>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1 }}>
        <View style={{ marginLeft: 10, justifyContent: 'center' }}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View style={{ marginLeft: 10, justifyContent: 'space-between', alignItems: 'flex-end', width: '10%', }}>

          <Image
            style={{ height: 25, width: 25, margin: 10 }}
            source={images.rightArrow}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
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
        <View style={{ flex: 1, alignItems: 'center', marginTop: 20, }}>
          <View style={{ width: '96%', height: 50, justifyContent: 'space-between', flexDirection: 'row', padding: 5, borderColor: 'grey', borderWidth: 1 }}>
            <TextInput
              style={{ height: 40, width: '80%', fontSize: 18 }}
              placeholder="Search by Clients"
              onChangeText={text => this.setSearchText(text)}
              value={this.state.searchText}
            />
            <TouchableOpacity
              onPress={() => this.showSearchResult()}
              style={{ height: 30, width: 60, alignItems: 'flex-end', margin: 5 }}
            >
              <Image
                style={{ height: 25, width: 25 }}
                source={images.featureSearch}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10, flex: 1, width: '100%' }}>
            <FlatList
              showsHorizontalScrollIndicator={Boolean(false)}
              ListEmptyComponent={<EmptyScreen />}
              data={this.props.sahspaceList}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
              style={{ flex: 1, width: '100%' }}
            />
          </View>

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
)(SuccessScreen);

// export default SuccessScreen;
// getSahspaceList