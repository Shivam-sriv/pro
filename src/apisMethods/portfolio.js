import { apis, request } from "../request";

export const familySnapshot = async (body, headers) => {
    return await request(apis.post_familySnapshot, body, headers);
  };
  export const familyWisePortfolio = async (body, headers) => {
    return await request(apis.post_familyWisePortfolio, body, headers);
  };
  export const detailedPortfolio = async (body, headers) => {
    return await request(apis.post_detailedPortfolio, body, headers);
  };
  export const transactionDetail = async (body, headers) => {
    return await request(apis.post_transactionDetail, body, headers);
  };
  export const personalDetail = async (body, headers) => {
    return await request(apis.post_personalDetail, body, headers);
  };
  export const userProfile = async (body, headers) => {
    return await request(apis.post_userProfile, body, headers);
  };
  export const userProfileIIN = async (body, headers) => {
    return await request(apis.post_userProfileIIN, body, headers);
  };