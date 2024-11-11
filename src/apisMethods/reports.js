import { apis, request } from "../request";

export const getSipStpSwpReport = async (body) => {
  return await request(apis.post_reportsSipStpSwp, body);
};

export const getTransactionReport = async (body) => {
  return await request(apis.post_getReportTransaction, body);
};

export const getTaxSavingReport = async (body) => {
  return await request(apis.post_getTaxSavingReport, body);
};

export const getDividendReport = async (body) => {
  return await request(apis.post_getDevidendReport, body);
};
