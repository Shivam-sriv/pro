import { request, apis } from "../request";

export const createProfile = async (body, headers) => {
  return await request(apis.post_createProfile, body, headers);
};

export const pincode = async (body, headers) => {
  return await request(apis.post_pincode, body, headers);
};
export const incomeRange = async (headers) => {
  return await request(apis.get_incomerange, null, headers);
};

export const relationApi = async (headers) => {
  return await request(apis.get_relation, null, headers);
};

export const occupationApi = async (headers) => {
  return await request(apis.get_occupation, null, headers);
};

export const createFatca = async (body, headers) => {
  return await request(apis.post_iinCreateFatca, body, headers);
};

export const getIIn = async (body, headers) => {
  return await request(apis.post_getIIn, body, headers);
};

export const addNomini = async (body, headers) => {
  return await request(apis.post_addNomini, body, headers);
};
export const getIfscDetails = async (body, headers) => {
  return await request(apis.post_getIfscDetails, body, headers);
};
export const addBankDetail = async (body, headers) => {
  return await request(apis.post_addBankDetails, body, headers);
};
export const addHolder = async (body, headers) => {
  return await request(apis.post_createPrifileJointHolder, body, headers);
};
export const getNominees = async (body, headers) => {
  return await request(apis.post_getNominees, body, headers);
};
export const deleteNominees = async (body, headers) => {
  return await request(apis.post_deleteNominees, body, headers);
};
export const updateNominees = async (body, headers) => {
  return await request(apis.post_updateNominees, body, headers);
};
export const createIINnse = async (body, headers) => {
  return await request(apis.post_create_iin_nse, body, headers);
};
export const bankListApi = async (headers) => {
  return await request(apis.get_bankList, null, headers);
};
export const uploadProofs = async (body, headers) => {
  return await request(apis.post_uploadBankBirthProof, body, headers);
};

