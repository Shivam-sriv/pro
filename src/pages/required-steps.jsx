import React, { useState } from "react";
import { FaUsers, FaUniversity, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const RequiredSteps = () => {
  return (
    <>
      <div className="wrapper">
        <div className="px-lg-5 px-2">
          {/* Page Heading */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-3">
              <li className="breadcrumb-item">
                <a href="home">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Required Steps
              </li>
            </ol>
          </nav>
          <section>
            <div className="container-fluid mb-5">
              <div className="row  mb-4 justify-content-center">
                <div
                  className="bg-light-red col-md-8 col-10 mt-4 text-center py-3 rounded"
                  role="alert"
                >
                  <span className="para">
                    Please submit following details and you’ll be set to invest.
                  </span>
                </div>
              </div>
              <div className="row p-4 mb-4">
                <div className="col-md-4 col-12 mb-4">
                  <div className="shadow-theme border-0 px-2">
                    <div className="con-card">
                      <div class="layer"></div>
                      <div className="cont-wrap">
                        <div className="text-center">
                          <FaUser className="fa-4x pt-3" />
                          <h5 className="font-weight-bold pt-2">
                            Personal Details
                          </h5>
                        </div>
                        <p className="doc-text fs-14">
                          Submit here the details needed to get you started. As
                          per the pre-laid norms, submission of holders'
                          personal details, such as his/her name, address, etc.
                          is mandatory for registration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12 mb-4">
                  <div className="shadow-theme border-0 px-2">
                    <div className="con-card">
                      <div class="layer"></div>
                      <div className="cont-wrap">
                        <div className="text-center">
                          <FaUniversity className="fa-4x pt-3" />
                          <h5 className="font-weight-bold pt-2">
                            Bank Details
                          </h5>
                        </div>
                        <p className="doc-text fs-14">
                          Submission of bank details is mandatory for
                          facilitating online transactions & redemption request.
                          These include your bank account number, bank name,
                          IFSC etc. The primary holder is required to upload
                          cheque with name printed or latest bank statement/bank
                          passbook for verification.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12 ">
                  <div className="shadow-theme border-0 px-2">
                    <div className="con-card">
                      <div class="layer"></div>
                      <div className="cont-wrap">
                        <div className="text-center">
                          <FaUsers className="fa-4x pt-3" />

                          <h5 className="font-weight-bold pt-2">Nomination</h5>
                        </div>
                        <p className="doc-text fs-14">
                          Nomination facilitates smooth transmission of units
                          held in a folio in case of unfortunate demise of units
                          holder. It is advisable to make a nomination for all
                          investment folios.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 text-start">
                  <Link to="/kyc-validation" className="btn-custom">
                    Back
                  </Link>
                </div>
                <div className="col-6 text-end">
                  <Link
                    to="/dashboard/required-details-form"
                    className="btn-custom"
                  >
                    Proceed
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default RequiredSteps;
