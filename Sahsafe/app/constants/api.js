
import Environment from './environment';

const BaseURL = Environment.qa;
const ApiToken = "";

const Onboarding = {
  "REGISTER": 'generateOtp',
  'VERIFYOTP': 'verifyOtp',
  'UPDATE_PROFILE': 'updateProfile',
  'CREATE_CLIENT': 'createClient',
  'CREATE_SAHSPACE': 'createSahspace'
}
// https://dev.urja360.com/sahsafe/getUserSpaceCount
const Document = {
  'GET_ALL_DOCUMENT': 'getAllDocumentTypes',
  'SEARCH_CLIENT': 'getClientList',
  'GET_SAHSPACE_COUNT': 'getUserSpaceCount',
  'GET_DOCUMENT_LIST': 'getUserSpaceDocList',
  'UPLOAD_DOCUMENT': 'document/upload',
  'UPLOAD_SPACE_DOCUMENT': 'uploadSpaceDocument',
  'GET_USER_DETAIL': 'getUserDetail',
  'GET_SAHSPACE_LIST': 'getSahspaceList',
  'GET_SAHSPACE_DOCUMENT_TYPE_LIST': 'getSahspaceDocList',
  'GET_SAHSPACE_YEAR': 'getSpaceYear',
  'GET_SAHSAPCE_MONTH': 'getSpaceMonth',
  'GET_SAHSPACE_DETAIL': 'getSahspaceDetail',
  'EDIT_SAHSPACE_DETAIL': 'editSahspaceDetail',
  'GET_SAHSPACE_ALL_USERS': 'getSpaceUsers',
  'GET_SPACE_UPLOADED_DOC_LIST':'getSpaceUploadedDocList'
}

export default {
  BaseURL,
  Onboarding,
  Document,
  ApiToken
}