
import Environment from './environment';

const BaseURL = Environment.qa;
const ApiToken = "";

const Onboarding = {
  "REGISTER": 'generateOtp',
  'VERIFYOTP': 'verifyOtp',
  'UPDATE_PROFILE': 'updateProfile'
}

const Document = {
  'GET_ALL_DOCUMENT': 'getAllDocumentTypes'
}

export default {
  BaseURL,
  Onboarding,
  Document
}