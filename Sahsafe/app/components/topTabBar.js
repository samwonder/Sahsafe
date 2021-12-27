import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import * as AppConstant from "@constants";
import {
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Tab = props => (
  <View style={{
    backgroundColor: 'white'
  }}>
    <TouchableOpacity
      style={props.tabBarLength == 3 ? styles.streamingTab : styles.standingsTab}
      onPress={(hi, hello) => props.onPress(props.title, props.index)} >
      <Text style={[styles.tabTextStyle, props.selectedTab && { color:'#011BFF' }]}>{props.title}</Text>
    </TouchableOpacity>
    {props.selectedTab
      && <View style={styles.selectedTabView} />}
  </View>
);

Tab.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  index: PropTypes.number,
  selectedTab: PropTypes.number,
};

Tab.defaultProps = {
  onPress: () => { },
  title: '',
  index: 0,
  selectedTab: 0,
};

class TopTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };
  }

  onPressTab = (item, index) => {
    this.setState({
      selectedTab: index,
    });
  }



  render() {
    const tabs = this.props.topBarTitle.map((tab, index) => (
      <Tab
        title={tab}
        selectedTab={this.props.currentIndex === index}
        onPress={() => {
          this.onPressTab(tab, index);
          this.props.onTabSelect(tab, index);
        }}
        tabBarLength={this.props.topBarTitle.length}
      />
    ));
    return (
      <View style={styles.container}>
        <ScrollView bounces={false} horizontal={false}>
          <View style={styles.subContainer}>
            {tabs}
          </View>
        </ScrollView>
      </View>
    );
  }
}

TopTabBar.propTypes = {
  adsList: PropTypes.arrayOf(PropTypes.any),
  updateAdClickedEvent: PropTypes.func,
  onTabSelect: PropTypes.func,
};

TopTabBar.defaultProps = {
  adsList: [],
  updateAdClickedEvent: () => { },
  onTabSelect: () => { },
};

export default TopTabBar;

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: wp("100%"),
    backgroundColor: '#EEEEEE',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: wp("100%"),
  },
  standingsTab: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  streamingTab: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  tabTextStyle: {
    textAlign: 'center',
    color: '#707070',
    fontSize: wp('4.5%'),
    paddingHorizontal: wp('5.2%'),
  },
  selectedTabView: {
    flex: 2,
    height: 3,
    // width: "auto",
    backgroundColor:'#011BFF',
  },
});