import * as AppConstant from '@constants';


const initialState = {
  isLoading: false,
  mobileNumber: null,
  isRefreshing: false,
  submitOTPResponse: null,
};


export default (state, action) => {
  state = state || initialState
  switch (action.type) {
    case AppConstant.ActionTypes.Common.IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload.data
      }
    }
      break;

    case AppConstant.ActionTypes.Common.SAVE_MOBILE_NUMBER: {
      return {
        ...state,
        mobileNumber: action.payload
      }
    }
      break;
      case AppConstant.ActionTypes.Common.SUBMIT_OTP: {
        return {
          ...state,
          submitOTPResponse: action.payload
        }
      }
        break;
    case AppConstant.ActionTypes.Common.IS_REFRESHING: {
      return {
        ...state,
        isRefreshing: action.payload
      }
    }
      break;
    default:
      return state;
  }
};
