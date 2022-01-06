/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { images } from '../assets/images';
import { NavBarHeight, isIOS, isIphoneX } from '../utils/platformSpecific';
import colors from '../theme/colors';
import * as AppConstant from "@constants"
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: isIOS ? (isIphoneX ? 84 : 64) : 64,
    // alignSelf: 'stretch',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  headerView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 60, 
    backgroundColor: 'green'
  },
  titleText: {
    color: colors.appRedColor,
    fontSize: 20,
    textAlign: 'center',
    fontFamily:AppConstant.Fonts.roboto_bold
  },
  leftView: {
    flex: 1,
    width: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // paddingLeft: 10,
    // backgroundColor: 'green'
  },
  navImage: {
    width: 25,
    height: 30,
  },
  rightView: {
    flex: 0.25,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  rightInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 2,
  },
  walletAmountText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    fontFamily:AppConstant.Fonts.roboto_regular
  },
  rightInfoIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});

const NavBar = ({
  title,
  showBackButton,
  backButtonImage,
  backButtonAction,
  showRightButton,
  rightButtonImage,
  rightButtonAction,
  hideRightView,
}) => (
  <View style={styles.container}>
      
        <TouchableOpacity
          onPress={() => backButtonAction()}
          style={{ height: isIOS ? (isIphoneX ? 84 : 64) : 64, width: 150, alignItems: 'center', flexDirection: 'row' }}
        >
          <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center',}}>
          <Image
            style={{ height: 30, width: 40, marginLeft: 10 }}
            source={images.backIcon}
          />
          <Text style={{ fontSize: 18, textAlign: 'center',  fontFamily: AppConstant.Fonts.roboto_regular}}>{'  ShaSafe'}</Text>
          </View>
        </TouchableOpacity>
       
  </View>
);

NavBar.propTypes = {
  title: PropTypes.string,
  leftView: PropTypes.element,
  rightView: PropTypes.element,
  showBackButton: PropTypes.bool,
  showRightButton: PropTypes.bool,
  backButtonImage: PropTypes.any,
  backButtonAction: PropTypes.func,
  rightButtonImage: PropTypes.any,
  rightButtonAction: PropTypes.func,
  hideRightView: PropTypes.bool,
};

NavBar.defaultProps = {
  title: '',
  leftView: null,
  rightView: null,
  showBackButton: false,
  showRightButton: false,
  backButtonImage: null,
  backButtonAction: () => { },
  rightButtonImage: null,
  rightButtonAction: () => { },
  hideRightView: false,
};
export default NavBar;
