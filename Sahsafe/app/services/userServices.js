import * as Config from "@configs";
import * as AppConstant from "@constants";

const RegisterPhoneNumber = async (data) => {
  try {
    const response = await Config.axios.post(
      AppConstant.Api.Onboarding.REGISTER,
      {
        "mobile_no": data
      }
    );
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log('error: ', error);
    return false;
  }
}

const VerifyOTPNumber = async (data) => {
  console.log("🚀 ~ file: =======================", data)
  try {
    const response = await Config.axios.post(
      AppConstant.Api.Onboarding.VERIFYOTP, data);
    if (response) {
      console.log("🚀 ~ file: VerifyOTPNumber.js ~====================", response.data)
      return response.data;
    }
  } catch (error) {
    console.log('error: ', error);
    return false;
  }
}

const updateUserProfile = async (user) => {
  try {
    const response = await Config.axios.post(
      AppConstant.Api.Onboarding.UPDATE_PROFILE, user);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log('error: ', error);
    return false;
  }
}

export default {
  RegisterPhoneNumber,
  VerifyOTPNumber,
  updateUserProfile
}
