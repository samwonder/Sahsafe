import * as Config from "@configs";
import * as AppConstant from "@constants";


const getAllDocuments = async (data) => {
console.log("🚀 ~ file: ============~ getAllDocuments ~ data", data)
    try {   
      const response = await Config.axios.get(AppConstant.Api.Document.GET_ALL_DOCUMENT);
      console.log("🚀 ~ file:============= ~ response", response)
      if (response.status && response.data.results && response.status === 200) {
        console.log("🚀 ~ file: documentServices.js ~ line 11 ~ getAllDocuments ~ data", data)
        return response;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }

  const getSahspaceCountApi = async (data) => {
        try {   
          const response = await Config.axios.get(AppConstant.Api.Document.GET_SAHSPACE_COUNT);
          console.log("🚀 ~ file:============= ~ response", response)
          if (response.status) {
            return response;
          } else {
            return null;
          }
        } catch (error) {
          return null;
        }
      }
  // 
  const getDocmentListApi = async (data) => {
    try {   
      const response = await Config.axios.get(AppConstant.Api.Document.GET_DOCUMENT_LIST);
      console.log("🚀 ~ file:============= ~ response", response)
      if (response.status) {
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
  getSahspaceCountApi,
  getDocmentListApi

}
// https://dev.urja360.com/sahsafe/getAllDocumentTypes

