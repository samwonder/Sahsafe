
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

const Document = {
  'GET_ALL_DOCUMENT': 'getAllDocumentTypes',
  'SEARCH_CLIENT': 'getClientList',
  'GET_SAHSPACE_COUNT': 'getUserSpaceCount',
  'GET_DOCUMENT_LIST': 'getUserSpaceDocList',
  // GetDocumentList
  // https://dev.urja360.com/sahsafe/getUserSpaceDocList
}

export default {
  BaseURL,
  Onboarding,
  Document
}