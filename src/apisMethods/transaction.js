import { apis, request } from "../request";

export const getAmcList = async (headers) => {
  return await request(apis.get_amcList, null, headers);
};

export const getSchemeList = async (body, headers) => {
  return await request(apis.post_getScheme, body, headers);
};

export const getFolioByAmc = async (body, headers) => {
  return await request(apis.post_getFolioByAmc, body, headers);
};
export const getNSEProductCode = async (body, headers) => {
  return await request(apis.post_getNSEProductCode, body, headers);
};
export const newPurchase = async (body, headers) => {
  return await request(apis.post_newPurchase, body, headers);
};