import { request, apis } from "../request";

export const registerOtp = async (body) => {
  return await request(apis.post_registerUserOTP, body);
};

export const verifyMethodOtp = async (body) => {
  return await request(apis.post_verifyOtp, body);
};

export const registrationUser = async (body) => {
  return await request(apis.post_userRegisterViaEmail, body);
};

export const sendResetOtp = async (body) => {
  return await request(apis.post_sendResetOtp, body);
};

export const verifyResetOtp = async (body) => {
  return await request(apis.post_verifyResetOtp, body);
};

export const loginViaEmailAndPass = async (body) => {
  return await request(apis.post_loginWithEmail, body);
};

export const resetPassword = async (body, header) => {
  return await request(apis.post_resetPassword, body, header);
};

export const registerUserViaSocialId = async (body) => {
  return await request(apis.post_registerUserViaSocialId, body);
};

export const loginUserViaSocialId = async (body) => {
  return await request(apis.post_loginViaGoogle, body);
};

export const sendMobileLoginOtp = async (body) => {
  return await request(apis.post_sendMobileLoginOtp, body);
};

export const verifyMobileLoginOtp = async (body) => {
  return await request(apis.post_verfiyMobileLoginOtp, body);
};

export const getUserStatus = async (header) => {
  return await request(apis.get_userStatus, null, header);
};

export const checkPanStatus = async (body, headers) => {
  return await request(apis.post_checkPanStatus, body, headers);
};

export const registerPan = async (body, headers) => {
  return await request(apis.post_registerPan, body, headers);
};

