import * as AppConstant from '@constants';

const initialState = {
  userInfo: {},
  allDocument: {},
  sahspaceCount: null,
  documentList: {},
  getSahspaceAllUsers: {},
  editSahspaceDetail: {},
  getSahspaceDetail: {},
  getSahspaceMonth: {},
  getSahspaceYear: {},
  getSahspaceDocumentTypeList: {},
  getSahspaceList: {},
  getUserDetail: {},
  uploadSpaceDocument: {},
  uploadDocument: {},
  getSpaceUploadedDocList: {},
};

export default (state, action) => {
  state = state || initialState
  switch (action.type) {
    case AppConstant.ActionTypes.Common.GET_ALL_DOCUMENT: {
      return {
        ...state,
        allDocument: action.payload.data,
      }
    }
      break;
    case AppConstant.ActionTypes.Common.GET_SAHSPACE_COUNT: {
      return {
        ...state,
        sahspaceCount: action.payload.data,
      }
    }
      break;
    case AppConstant.ActionTypes.Common.GET_DOCUMENT_LIST: {
      return {
        ...state,
        documentList: action.payload.data,
      }
    }
      break;
    case AppConstant.ActionTypes.Common.UPLOAD_DOCUMENT: {
      return {
        ...state,
        uploadDocument: action.payload.data,
      }
    }
      break;
    case AppConstant.ActionTypes.Common.UPLOAD_SAPCE_DOCUMENT: {
      return {
        ...state,
        uploadSpaceDocument: action.payload.data,
      }
    }
      break;
    case AppConstant.ActionTypes.Common.GET_USER_DETAIL: {
      return {
        ...state,
        getUserDetail: action.payload.data,
      }
    }
      break;
    case AppConstant.ActionTypes.Common.GET_SAHSPACE_LIST: {
      return {
        ...state,
        getSahspaceList: action.payload.data,
      }
    }
      break;
    case AppConstant.ActionTypes.Common.GET_SAHSPACE_DOCUMENT_TYPE_LIST: {
      return {
        ...state,
        getSahspaceDocumentTypeList: action.payload.data,
      }
    }
      break;
    case AppConstant.ActionTypes.Common.GET_SAHSPACE_YEAR: {
      return {
        ...state,
        getSahspaceYear: action.payload.data,
      }
    }
      break;
    case AppConstant.ActionTypes.Common.GET_SAHSAPCE_MONTH: {
      return {
        ...state,
        getSahspaceMonth: action.payload.data,
      }
    }
      break;
    case AppConstant.ActionTypes.Common.GET_SAHSPACE_DETAIL: {
      return {
        ...state,
        getSahspaceDetail: action.payload.data,
      }
    }
      break;
    case AppConstant.ActionTypes.Common.EDIT_SAHSPACE_DETAIL: {
      return {
        ...state,
        editSahspaceDetail: action.payload.data,
      }
    }
      break;
    case AppConstant.ActionTypes.Common.GET_SAHSPACE_ALL_USERS: {
      return {
        ...state,
        getSahspaceAllUsers: action.payload.data,
      }
    }
      break;
      case AppConstant.ActionTypes.Common.GET_SPACE_UPLOADED_DOC_LIST: {
        return {
          ...state,
          getSpaceUploadedDocList: action.payload.data,
        }
      }
        break;
    default:
      return state;
  }
};
