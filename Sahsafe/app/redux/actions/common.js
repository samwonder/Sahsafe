import * as AppConstant from '@constants';
import * as Services from "@services";
import * as Actions from "@redux/actions";

export const toggleLoader = (value) => {
  return {
    type: AppConstant.ActionTypes.Common.IS_LOADING,
    payload: {
      data: value
    }
  }
}

export const saveMobileNumber = (value) => {
  let data = {
    "mobile_no": value
  }
  return async dispatch => {
    try {
     await dispatch({ type: AppConstant.ActionTypes.Common.SAVE_MOBILE_NUMBER, payload: data });
    } catch (error) {
    }
  };
};

export const submitOTP = (value) => {
  return async dispatch => {
    dispatch(Actions.toggleLoader(true));
    try {
      let result = await Services.UserServices.VerifyOTPNumber(value);
      AppConstant.Api.ApiToken = result.data.token;

      dispatch(Actions.toggleLoader(false));
      await dispatch({ type: AppConstant.ActionTypes.Common.SUBMIT_OTP, payload: result.data });
    } catch (error) {
      dispatch(Actions.toggleLoader(false));
    }
  };
};