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
import NavigationBar from '../../components/NavigationBar';
import CustomTopBar from '@components/topTabBar';
import InfoScreen from './components/infoScreen';
import TeamScreen from './components/teamScreen';
import { connect } from "react-redux";
import * as Actions from "@redux/actions";
import * as Services from "@services";
const tabbar = ['Info', 'Team', 'Documents']

class IndustriesDetail extends Component {
  constructor(props) {
    super(props);
    this.state ={
      currentTab: 'Info',
      currentTabIndex: 1
    }
  }

  componentDidMount() {
    // setTimeout(() => {
    //   // if (AppConstant.Api.ApiToken) {
    //   //   this.props.navigation.navigate('HomeScreen');
    //   // } else {
    //     this.props.navigation.navigate('GetMobileNumber');
    //   // }
    // }, 3000)
  }
  
  popBack() {
    const { goBack } = this.props.navigation;
    goBack(null);
  }

  onTabSelect(data, index) {
    this.setState({
      currentTab: data,
      currentTabIndex: index
    });
    // this.myContestFilter(data);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar
          showBackButton={Boolean(true)}
          backButtonImage={images.featureSearch}
          backButtonAction={() => this.popBack()}
        />
          <View style={{backgroundColor: 'transparent'}}>
            <CustomTopBar
              topBarTitle={tabbar}
              currentIndex={this.state.currentTabIndex}
              onTabSelect={(data, index) => this.onTabSelect(data, index)}
            />
          </View>
            {this.state.currentTabIndex === 0 && <InfoScreen  userDetail={this.props.userDetail} />}
            {this.state.currentTabIndex === 1 && <TeamScreen />}
      </View>
    );
  }
}


const mapStateToProps = state => ({
  mobileNumber: state.common.mobileNumber,
  userDetail: state.common.submitOTPResponse,
  allDocument: state.landing.allDocument
});
const mapDispatchToProps = dispatch => ({
  toggleLoader: state => dispatch(Actions.toggleLoader(state)),
  getAllDocument: state => dispatch(Actions.getAllDocument(state)),


});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndustriesDetail);
