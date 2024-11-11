import React, { useState } from "react";

const IINDetails = ({ iinList }) => {
  const taxstatus = {
    "01": "Resident Individual",
    21: "NRI - Repatriable (NRE)",
    11: "NRI Through NRO A/c",
  };

  return (
    <>
      <div className="row fs-14 text-start">
        {iinList.map((el) => {
          return (
            <>
              <div className="col-12">
                <div className="text-red text-start pb-3">
                  {el.INVESTOR_NAME}
                </div>
                <div className="row">
                  <div className="col-5">IIN</div>
                  <div className="col-1 px-0">:</div>
                  <div className="col-6">{el.CUSTOMER_ID}</div>
                </div>
                <div className="row">
                  <div className="col-md-5">Tax Status</div>
                  <div className="col-md-1 px-0">:</div>
                  <div className="col-md-6">
                    {taxstatus[el.TAX_STATUS_CODE]}
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">Holding</div>
                  <div className="col-1 px-0">:</div>
                  <div className="col-6">{el.HOLD_N_CODE}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default IINDetails;
