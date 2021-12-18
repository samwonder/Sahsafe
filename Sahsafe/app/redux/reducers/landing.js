import * as AppConstant from '@constants';

const initialState = {
  userInfo: {},
};

export default (state, action) => {
  state = state || initialState
  switch (action.type) {
    case AppConstant.ActionTypes.User.SAVE_USER_INFO: {
      return {
        ...state,
        userInfo: action.payload.data,
      }
    }
      break;
    case AppConstant.ActionTypes.Common.INITIATE_ONBOARDING: {
      return {
        ...initialState
      }
    }
      break;
    default:
      return state;
  }
};

