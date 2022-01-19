import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as AppConstant from '@constants';

import CustomModal from '@components/customModal';
import Loader from '@components/loader';


export class AppLoader extends Component {
  render() {
    return (
      <CustomModal isVisible={this.props.isLoading}>
        <View style={styles.container} >
          <Loader style={styles.loaderStyle} />
        </View>
      </CustomModal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: AppConstant.Colors.white,
    opacity: 0.3,
  },
  loaderStyle: {
    zIndex: 1
  }
})

const mapStateToProps = (state) => ({
  isLoading: state.common.isLoading
});

export default connect(mapStateToProps, null)(AppLoader)