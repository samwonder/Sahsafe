import * as Config from "@configs";
import * as AppConstant from "@constants";


const getAllDocuments = async (data) => {
  try {
    const response = await Config.axios.post(AppConstant.Api.Document.GET_ALL_DOCUMENT);
    if (response.status) {
      return response;
    }
  } catch (error) {
    return null;
  }
}

const getSahspaceCountApi = async (data) => {
  try {
    const response = await Config.axios.post(AppConstant.Api.Document.GET_SAHSPACE_COUNT);
    if (response.status) {
      return response;
    }

  } catch (error) {
    return null;
  }
}
// 
const getDocmentListApi = async (data) => {
  try {
    if (data) {
      let response = await Config.axios.post(AppConstant.Api.Document.GET_DOCUMENT_LIST, { 'sent': '1' });
      if (response.status) {
        return response;
      }
    } else {
      let response = await Config.axios.post(AppConstant.Api.Document.GET_DOCUMENT_LIST);
      if (response.status) {
        return response;
      }
    }
  } catch (error) {
    return null;
  }
}

const uploadDocuementApi = async (data) => {
  try {
    const formData = new FormData();
    formData.append("file", data);
    const response = await Config.axios.post(AppConstant.Api.Document.UPLOAD_DOCUMENT,formData);
    if (response.status) {
      return response;
    }
  } catch (error) {
    return null;
  }
}
const uploadSpaceDocumentApi = async (data) => {
  try {
    const response = await Config.axios.post(AppConstant.Api.Document.UPLOAD_SPACE_DOCUMENT, data);
    //console.log("response-----------------",response.data,data)
    if (response.status) {
      return response;
    }
  } catch (error) {
    return null;
  }
}
const getuserdetailApi = async (data) => {
  try {
    const response = await Config.axios.post(AppConstant.Api.Document.GET_USER_DETAIL);
    if (response.status) {
      return response;
    }
  } catch (error) {
    return null;
  }
}
const getSahspaceListApi = async (data) => {
  // console.log("🚀 ~ file: =============~ data", data)
  try {
    const response = await Config.axios.post(AppConstant.Api.Document.GET_SAHSPACE_LIST);
    // console.log("🚀 ~ file:============= ~ response", response.data)
    if (response.status) {
      return response;
    }
  } catch (error) {
    return null;
  }
}
const getSahspaceDocumentTypeListApi = async (data, fileType) => {
  let clientId = {
    "sahspace_unique_id": data,
  }
  if (fileType === 'send') {
    clientId.send = '1'
  }
  try {
    const response = await Config.axios.post(AppConstant.Api.Document.GET_SAHSPACE_DOCUMENT_TYPE_LIST, clientId);
    if (response.status) {
      return response;
    }
  } catch (error) {
    return null;
  }
}
const getSpaceYearApi = async (data) => {
console.log("🚀 ~ ==------------~ data", data)
  let clientId = {
    "sahspace_unique_id": data,
    "document_type_id": 1
  }
  try {
    const response = await Config.axios.post(AppConstant.Api.Document.GET_SAHSPACE_YEAR, clientId);
    console.log("🚀 ~ file:============= ~ response", response)
    if (response.status) {
      return response;
    }
  } catch (error) {
    return null;
  }
}
const getSpaceMonthApi = async (data, year) => {
console.log("🚀 ~ file: documentServices.js ~ line 121 ~ getSpaceMonthApi ~ data, year", data, year)
  let clientId = {
    "sahspace_unique_id": data,
    "document_type_id": 1,
    'year': year.year
  }
  try {
    const response = await Config.axios.post(AppConstant.Api.Document.GET_SAHSAPCE_MONTH, clientId);
    console.log("🚀 ~ file:============= ~ response", response)
    if (response.status) {
      return response;
    }
  } catch (error) {
    return null;
  }
}
const getSahspacedetailApi = async (data) => {
  // console.log("🚀 ~ file: client id ------------------ ~ data", data)
  let clientId = {
    "sahspace_unique_id": data
  }
  try {
    // console.log("🚀 ~ file: ----------------- ~ data", data)
    const response = await Config.axios.post(AppConstant.Api.Document.GET_SAHSPACE_DETAIL, clientId);
    // console.log("🚀 ~ file:============= ~ response", response.data)
    if (response.status) {
      return response;
    }
  } catch (error) {
    return null;
  }
}
const editSahspacedetailApi = async (data) => {
  try {
    const response = await Config.axios.post(AppConstant.Api.Document.EDIT_SAHSPACE_DETAIL);
    console.log("🚀 ~ file:============= ~ response", response)
    if (response.status) {
      return response;
    }
  } catch (error) {
    return null;
  }
}

const getSahspaceallUsersApi = async (data) => {
  // console.log("🚀 ~ file:========121212132====---==--==--== ~ data", data)
  let clientId = {
    "sahspace_unique_id": data
  }
  try {

    const response = await Config.axios.post(AppConstant.Api.Document.GET_SAHSPACE_ALL_USERS, clientId);
    // console.log("🚀 ~ file:============= ~ response", response.data)
    if (response.status) {
      return response;
    }
  } catch (error) {
    return null;
  }
}
const getSpaceUploadedDocListApi = async (data) => {
  console.log("🚀 ~ file:========121212132====---==--==--== ~ data", data)

  try {
    const response = await Config.axios.post(AppConstant.Api.Document.GET_SAHSPACE_ALL_USERS, data);
    console.log("🚀 ~ file:============= ~ response", response.data)
    if (response.status) {
      return response;
    }
  } catch (error) {
    return null;
  }
}
export default {
  getAllDocuments,
  getSahspaceCountApi,
  getDocmentListApi,
  uploadDocuementApi,
  uploadSpaceDocumentApi,
  getuserdetailApi,
  getSahspaceListApi,
  getSahspaceDocumentTypeListApi,
  getSpaceYearApi,
  getSpaceMonthApi,
  getSahspacedetailApi,
  editSahspacedetailApi,
  getSahspaceallUsersApi,
  getSpaceUploadedDocListApi
}

// 'GET_SPACE_UPLOADED_DOC_LIST':'getSpaceUploadedDocList'
