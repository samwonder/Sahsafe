import * as AppConstant from '@constants';
import * as Actions from "@redux/actions";
import * as Services from "@services";

export const saveUserInfo = (value) => {
  return {
    type: AppConstant.ActionTypes.User.SAVE_USER_INFO,
    payload: {
      data: value
    }
  }
}

export const getAllDocument = (value) => {
console.log("🚀 ~ file: =========action========== ~ getAllDocument ~ value", value, Services)
  return async dispatch => {
    dispatch(Actions.toggleLoader(true));
    try {
      let result = await Services.DocumentServices.getAllDocuments();
      // console.log("🚀 ~ file: landing.js ~ line 20 ~ getAllDocument ~ result", result)
      // AppConstant.Api.ApiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUaGVfY2xhaW0iLCJhdWQiOiJUaGVfQXVkIiwiaWF0IjoxNjQwMjgxNTYyLCJuYmYiOjE2NDAyODE1NzIsImV4cCI6MTY0MDI5NTk2MiwiZGF0YSI6eyJpZCI6IjEiLCJndV9pZCI6ImVqeTJ6b2lsZ3oifX0.iDUUbg-7C0gla17R1CyPj_HKOLnGyxqGTsvJV4Xw4-A';

      dispatch(Actions.toggleLoader(false));
      dispatch({ type: AppConstant.ActionTypes.Common.GET_ALL_DOCUMENT, payload: result.data });
    } catch (error) {
      dispatch(Actions.toggleLoader(false));
    }
  };
};

export const getSahspaceCount = (value) => {
  console.log("🚀 ~ file: =========action========== ~ getAllDocument ~ value", value, Services)
    return async dispatch => {
      dispatch(Actions.toggleLoader(true));
      try {
        let result = await Services.DocumentServices.getSahspaceCountApi();
        // console.log("🚀 ~ file: landing.js ~ line 20 ~ getAllDocument ~ result", result)
        // AppConstant.Api.ApiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUaGVfY2xhaW0iLCJhdWQiOiJUaGVfQXVkIiwiaWF0IjoxNjQwMjgxNTYyLCJuYmYiOjE2NDAyODE1NzIsImV4cCI6MTY0MDI5NTk2MiwiZGF0YSI6eyJpZCI6IjEiLCJndV9pZCI6ImVqeTJ6b2lsZ3oifX0.iDUUbg-7C0gla17R1CyPj_HKOLnGyxqGTsvJV4Xw4-A';
  
        dispatch(Actions.toggleLoader(false));
        dispatch({ type: AppConstant.ActionTypes.Common.GET_SAHSPACE_COUNT, payload: result.data });
      } catch (error) {
        dispatch(Actions.toggleLoader(false));
      }
    };
  };

  export const getDocmentList = (value) => {
    console.log("🚀 ~ file: =========action========== -=-=-=-=-", value)
      return async dispatch => {
        dispatch(Actions.toggleLoader(true));
        try {
          let result = await Services.DocumentServices.getDocmentListApi();
          // console.log("🚀 ~ file: landing.js ~ line 20 ~ getAllDocument ~ result", result)
          // AppConstant.Api.ApiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUaGVfY2xhaW0iLCJhdWQiOiJUaGVfQXVkIiwiaWF0IjoxNjQwMjgxNTYyLCJuYmYiOjE2NDAyODE1NzIsImV4cCI6MTY0MDI5NTk2MiwiZGF0YSI6eyJpZCI6IjEiLCJndV9pZCI6ImVqeTJ6b2lsZ3oifX0.iDUUbg-7C0gla17R1CyPj_HKOLnGyxqGTsvJV4Xw4-A';
    
          dispatch(Actions.toggleLoader(false));
          dispatch({ type: AppConstant.ActionTypes.Common.GET_DOCUMENT_LIST, payload: result.data });
        } catch (error) {
          dispatch(Actions.toggleLoader(false));
        }
      };
    };

  // 