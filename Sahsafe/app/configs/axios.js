import Axios from "axios";
import * as AppConstant from "@constants";
// import DropDownHolder from "@components/dropDownHolder";
import {
  Alert,  
} from 'react-native';
import * as Actions from '@redux/actions';
const CancelToken = Axios.CancelToken;
export let cancel;

export const axios = Axios.create({
  baseURL: AppConstant.Api.BaseURL,
  timeout: 10000,
  responseType: "json",
  cancelToken: new CancelToken(c => {
    cancel = c;
  })
});

// Request interceptor
axios.interceptors.request.use((config) => {
  console.log("🚀 =========================", AppConstant.Api.ApiToken)
  if(AppConstant.Api.ApiToken)
  {
    config.headers = {
      "Authorization":`${AppConstant.Api.ApiToken}`,
      "Content-Type": "application/json"    
    
    } 
    return config;
  }
  else {
    config.headers = {
      "Content-Type": "application/json"    
    } 
    return config;
  }
}, (error) => {
// console.log("🚀 ~ file: ==================== error", error)
  // DropDownHolder.dropDown.setAlert(AppConstant.Alert.Type.INFO, 'Error', AppConstant.Alert.Messages.NETWORK_ERROR);
  return Promise.reject(error);
});

// Response interceptor
axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
console.log("🚀 ~---------------------axios.interceptors.response.use ~ error", error.response.data)
if(error.response.data.status === 400) {
Alert.alert(error.response.data.messages.message);
} else {
  Alert.alert('Somthing went wrong');

}
  // setTimeout(() => {
  //   // Services.NavigationService.navigate(AppConstant.Navigations.Survey.SURVEY);
  //   if (error.message == AppConstant.Alert.Messages.NETWORK_ERROR) {
  //     // DropDownHolder.dropDown.setAlert(AppConstant.Alert.Type.INFO, 'Error', AppConstant.Alert.Messages.NETWORK_ERROR);
  //   }
  //   else if(error.response && error.response.status && error.response.status == 401)
  //   {
  //     Actions.tokenExpireSignOut();
  //   }
  //   else if (error.response && error.response.status && (error.response.status == 400 || error.response.status == 401)){
  //     // DropDownHolder.dropDown.setAlert(AppConstant.Alert.Type.INFO, 'Error', Object.values(error.response.data.errors[0]));
  //   }
  //   else {
  //     // DropDownHolder.dropDown.setAlert(AppConstant.Alert.Type.INFO, 'Error', "Something went wrong");  
  //   }
  // }, 1000)
  return Promise.reject(error);
});