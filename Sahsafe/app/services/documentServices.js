import * as Config from "@configs";
import * as AppConstant from "@constants";


const getAllDocuments = async (data) => {
    try {   
      const response = await Config.axios.get(AppConstant.Api.Document.GET_ALL_DOCUMENT);
      console.log("🚀 ~ file: documentServices.js ~ line 23 ~ getContests ~ response", response)
      if (response.status && response.data.results && response.status === 200) {
        return response;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }

export default {
  getAllDocuments,

}
// https://dev.urja360.com/sahsafe/getAllDocumentTypes

