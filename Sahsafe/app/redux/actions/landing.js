import * as AppConstant from '@constants';

export const saveUserInfo = (value) => {
  return {
    type: AppConstant.ActionTypes.User.SAVE_USER_INFO,
    payload: {
      data: value
    }
  }
}