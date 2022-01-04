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
    this.state = {
      currentTab: 'Info',
      currentTabIndex: 0,
      sahspaceUser: props.route.params && props.route.params.sahspaceUser
    }
  }

  async componentDidMount() {

    await this.props.getSahspacedetail(this.state.sahspaceUser.sahspace_unique_id);
    await this.props.getSahspaceallUsers(this.state.sahspaceUser.sahspace_unique_id);
    // await this.props.getSahspaceDocumentTypeList(this.state.sahspaceUser.sahspace_unique_id, );

  }
  // sahspaceAllUsers
  popBack() {
    const { goBack } = this.props.navigation;
    goBack(null);
  }

  onTabSelect(data, index) {
    if(index === 2) {
      this.props.navigation.navigate('DocumentTypeFolder', {sahspaceUser: this.state.sahspaceUser})
      // DocumentTypeFolder
    } else {
      this.setState({
        currentTab: data,
        currentTabIndex: index
      });
    }
    // this.myContestFilter(data);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', }}>
        <NavigationBar
          showBackButton={Boolean(true)}
          backButtonImage={images.featureSearch}
          backButtonAction={() => this.popBack()}
        />
        <View style={{ backgroundColor: 'transparent', marginTop: 20 }}>
          <CustomTopBar
            topBarTitle={tabbar}
            currentIndex={this.state.currentTabIndex}
            onTabSelect={(data, index) => this.onTabSelect(data, index)}
          />
        </View>
        {this.state.currentTabIndex === 0 && <InfoScreen userDetail={this.props.sahspaceDetail} />}
        {this.state.currentTabIndex === 1 && <TeamScreen sahspaceAllUsers={this.props.sahspaceAllUsers}/>}
      </View>
    );
  }
}


const mapStateToProps = state => ({
  mobileNumber: state.common.mobileNumber,
  userDetail: state.common.submitOTPResponse,
  sahspaceDetail: state.landing.getSahspaceDetail,
  sahspaceAllUsers: state.landing.getSahspaceAllUsers,
  sahspaceDocumentTypeList: state.landing.getSahspaceDocumentTypeList 
});
const mapDispatchToProps = dispatch => ({
  toggleLoader: state => dispatch(Actions.toggleLoader(state)),
  getSahspacedetail: state => dispatch(Actions.getSahspacedetail(state)),
  getSahspaceallUsers: state => dispatch(Actions.getSahspaceallUsers(state)),
  getSahspaceDocumentTypeList: state => dispatch(Actions.getSahspaceDocumentTypeList(state)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndustriesDetail);
