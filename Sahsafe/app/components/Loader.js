import React from 'react';
import * as AppConstant from '@constants';
import Spinner from 'react-native-spinkit';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default (props) => {
  return (
    <Spinner
      style={props.style}
      isVisible={props.isVisible}
      size={props.size || wp('10%')}
      type={'Wave'}
      color={props.color || '#3072F3'}
    />
  )
}
