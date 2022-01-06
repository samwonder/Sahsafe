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
  return async dispatch => {
    dispatch(Actions.toggleLoader(true));
    try {
      let result = await Services.DocumentServices.getAllDocuments();

      dispatch(Actions.toggleLoader(false));
      dispatch({ type: AppConstant.ActionTypes.Common.GET_ALL_DOCUMENT, payload: result.data });
    } catch (error) {
      dispatch(Actions.toggleLoader(false));
    }
  };
};

export const getSahspaceCount = (value) => {
  return async dispatch => {
    dispatch(Actions.toggleLoader(true));
    try {
      let result = await Services.DocumentServices.getSahspaceCountApi();

      dispatch(Actions.toggleLoader(false));
      dispatch({ type: AppConstant.ActionTypes.Common.GET_SAHSPACE_COUNT, payload: result.data });
    } catch (error) {
      dispatch(Actions.toggleLoader(false));
    }
  };
};

export const getDocmentList = (value) => {
  console.log("🚀 ~ file: ========= -=-=-=-=-", value)
  return async dispatch => {
    dispatch(Actions.toggleLoader(true));
    try {
      let result = await Services.DocumentServices.getDocmentListApi(value);
      dispatch(Actions.toggleLoader(false));
      dispatch({ type: AppConstant.ActionTypes.Common.GET_DOCUMENT_LIST, payload: result.data });
    } catch (error) {
      dispatch(Actions.toggleLoader(false));
    }
  };
};

export const uploadDocuement = (value) => {
  console.log("🚀 ~ file: =========action========== -=-=-=-=-", value)
  return async dispatch => {
    dispatch(Actions.toggleLoader(true));
    try {
      let result = await Services.DocumentServices.uploadDocuementApi();
      dispatch(Actions.toggleLoader(false));
      dispatch({ type: AppConstant.ActionTypes.Common.UPLOAD_DOCUMENT, payload: result.data });
    } catch (error) {
      dispatch(Actions.toggleLoader(false));
    }
  };
};
export const uploadSpaceDocument = (value) => {
  console.log("🚀 ~ file: =========action========== -=-=-=-=-", value)
  return async dispatch => {
    dispatch(Actions.toggleLoader(true));
    try {
      let result = await Services.DocumentServices.uploadSpaceDocumentApi(value);
      dispatch(Actions.toggleLoader(false));
      dispatch({ type: AppConstant.ActionTypes.Common.UPLOAD_SPACE_DOCUMENT, payload: result.data });
    } catch (error) {
      dispatch(Actions.toggleLoader(false));
    }
  };
};
export const getuserdetail = (value) => {
  console.log("🚀 ~ file: =========action========== -=-=-=-=-", value)
  return async dispatch => {
    dispatch(Actions.toggleLoader(true));
    try {
      let result = await Services.DocumentServices.getuserdetailApi();
      dispatch(Actions.toggleLoader(false));
      dispatch({ type: AppConstant.ActionTypes.Common.GET_DOCUMENT_LIST, payload: result.data });
    } catch (error) {
      dispatch(Actions.toggleLoader(false));
    }
  };
};
export const getSahspaceList = (value) => {
  console.log("🚀 ~ file: =========action========== -=-=-=-=-", value)
  return async dispatch => {
    dispatch(Actions.toggleLoader(true));
    try {
      let result = await Services.DocumentServices.getSahspaceListApi();
      dispatch(Actions.toggleLoader(false));
      dispatch({ type: AppConstant.ActionTypes.Common.GET_SAHSPACE_LIST, payload: result.data });
    } catch (error) {
      dispatch(Actions.toggleLoader(false));
    }
  };
};
export const getSahspaceDocumentTypeList = (value, fileType) => {
  // console.log("🚀 ~ file: =========action========== -=-=-=-=-", value)
  return async dispatch => {
    dispatch(Actions.toggleLoader(true));
    try {
      let result = await Services.DocumentServices.getSahspaceDocumentTypeListApi(value, fileType);
      dispatch(Actions.toggleLoader(false));
      dispatch({ type: AppConstant.ActionTypes.Common.GET_SAHSPACE_DOCUMENT_TYPE_LIST, payload: result.data });
    } catch (error) {
      dispatch(Actions.toggleLoader(false));
    }
  };
};
export const getSpaceYear= (value) => {
  console.log("🚀 ~ file: =========action========== -=-=-=-=-", value)
  return async dispatch => {
    dispatch(Actions.toggleLoader(true));
    try {
      let result = await Services.DocumentServices.getSpaceYearApi(value);
      dispatch(Actions.toggleLoader(false));
      dispatch({ type: AppConstant.ActionTypes.Common.GET_SAHSPACE_YEAR, payload: result.data });
    } catch (error) {
      dispatch(Actions.toggleLoader(false));
    }
  };
};
export const getSpaceMonth = (value, year) => {
  console.log("🚀 ~ file: =========action========== -=-=-=-=-", value)
  return async dispatch => {
    dispatch(Actions.toggleLoader(true));
    try {
      let result = await Services.DocumentServices.getSpaceMonthApi(value, year);
      dispatch(Actions.toggleLoader(false));
      dispatch({ type: AppConstant.ActionTypes.Common.GET_SAHSAPCE_MONTH, payload: result.data });
    } catch (error) {
      dispatch(Actions.toggleLoader(false));
    }
  };
};
export const getSahspacedetail = (value) => {
  // console.log("🚀 ~ file: =========action========== -=-=-=-=-", value)
  return async dispatch => {
    dispatch(Actions.toggleLoader(true));
    try {
      let result = await Services.DocumentServices.getSahspacedetailApi(value);
      dispatch(Actions.toggleLoader(false));
      dispatch({ type: AppConstant.ActionTypes.Common.GET_SAHSPACE_DETAIL, payload: result.data });
    } catch (error) {
      dispatch(Actions.toggleLoader(false));
    }
  };
};
export const editSahspacedetail = (value) => {
  console.log("🚀 ~ file: =========action========== -=-=-=-=-", value)
  return async dispatch => {
    dispatch(Actions.toggleLoader(true));
    try {
      let result = await Services.DocumentServices.editSahspacedetailApi();
      dispatch(Actions.toggleLoader(false));
      dispatch({ type: AppConstant.ActionTypes.Common.GET_DOCUMENT_LIST, payload: result.data });
    } catch (error) {
      dispatch(Actions.toggleLoader(false));
    }
  };
};
export const getSahspaceallUsers = (value) => {
  // console.log("🚀 ~ file: =========action========== -=-=-=-=-", value)
  return async dispatch => {
    dispatch(Actions.toggleLoader(true));
    try {
      let result = await Services.DocumentServices.getSahspaceallUsersApi(value);
      dispatch(Actions.toggleLoader(false));
      dispatch({ type: AppConstant.ActionTypes.Common.GET_SAHSPACE_ALL_USERS, payload: result.data });
    } catch (error) {
      dispatch(Actions.toggleLoader(false));
    }
  };
};

export const getSpaceUploadedDocList = (value) => {
  // console.log("🚀 ~ file: =========action========== -=-=-=-=-", value)
  return async dispatch => {
    dispatch(Actions.toggleLoader(true));
    try {
      let result = await Services.DocumentServices.getSpaceUploadedDocListApi(value);
      dispatch(Actions.toggleLoader(false));
      dispatch({ type: AppConstant.ActionTypes.Common.GET_SPACE_UPLOADED_DOC_LIST, payload: result.data });
    } catch (error) {
      dispatch(Actions.toggleLoader(false));
    }
  };
};

