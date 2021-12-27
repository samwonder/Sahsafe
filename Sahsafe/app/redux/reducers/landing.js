import * as AppConstant from '@constants';

const initialState = {
  userInfo: {},
  allDocument: {},
  sahspaceCount: null,
  documentList: {},
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
    default:
      return state;
  }
};

