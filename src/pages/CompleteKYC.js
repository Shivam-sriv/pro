import React, { useState } from "react";
import logo from "../assets/images/logos/logo-login.png";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { Validator, validatorsMethods } from "../validations";
import { notify } from "./toastCreater";

import { registerPan } from "../apisMethods";
import Loader from "./Loader";

const KYCValidation = () => {
  const location = useLocation();
  const [user, setUser] = useState({
    mobile: "",
    email: "",
    pan: location.state,
    name: "",
    message: "",
  });
  const [loader, setLoader] = useState("none");

  const openNSELink = async () => {
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    const isPan = await Validator(user.pan, "pan", (a, b) => {
      validatorsMethods.start(a, b).isRequired().checkPan();
    });

    const isEmail = await Validator(user.email, "email", (a, b) => {
      validatorsMethods.start(a, b).isRequired().email();
    });

    const isMobile = await Validator(user.mobile, "mobile", (a, b) => {
      validatorsMethods.start(a, b).isRequired().checkMobileNumber();
    });

    const name = await Validator(user.name, "name", (a, b) => {
      validatorsMethods.start(a, b).isRequired().strMax(200);
    });

    if (isPan.message) {
      notify("warn", "Pan " + isPan.message);
      return;
    }

    if (name.message) {
      notify("warn", "Name " + name.message);
      return;
    }

    if (isEmail.message) {
      notify("warn", "Email " + isEmail.message);
      return;
    }

    if (isMobile.message) {
      notify("warn", "Mobile " + isMobile.message);
      return;
    }

    setLoader("block");

    registerPan(
      {
        pan: user.pan,
        investor_email: user.email,
        investor_mobile_no: user.mobile,
        euin_name: user.name,
      },
      headers
    ).then((res) => {
      setLoader("none");
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        window.open(res.data.data.data.link, "_blank");
      }
    });
  };

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="kyc-main bg-gray py-5 overflow-hidden">
        <section>
          <div className="row  justify-content-center">
            <div className="col-md-8 shadow-custom pb-4 mtc-6">
              <div className="brand-logo kyc-logo">
                <img src={logo} className="img-fluid " />
              </div>
              <Loader loader={loader} />

              <div className="col-12 mt-5 px-5 kyc">
                <h3>KYC (Know Your Client)</h3>
                <span className="para text-start">
                  <h5 className="text-red fw-500">Note:</h5>
                  <ul>
                    <li>
                      As per regulatory provisions, KYC is a one time mandatory
                      process of identifying and verifying a client's identity
                      and his/her related details before start investing. For
                      more detail <a href="">Click Here</a>
                    </li>
                    <li>
                      Kyc Updation is required everytime in case of change in
                      address, contact details, Marital Status & Tax.
                      Residential Status.
                    </li>
                    <li>
                      While completing KYC process "Kotak Mutual Fund' acts as a
                      facilitator".
                    </li>
                    <li className="lst-none pt-2">
                      <h6 className="text-left text-red fw-500">
                        Points to be kept in mind when submitting KYC:
                      </h6>
                    </li>
                    <li>
                      Aadhaar Linked Mobile Number should be active for
                      authentication.
                    </li>
                    <li>
                      This process is only for First Time Kyc User, and should
                      be completed in one go. To check KYC status
                      <a href=" #" target="_blank">
                        Click Here
                      </a>
                    </li>
                    <li>
                      For registering through the Non-Aadhaar option, the User
                      needs to upload an Aadhaar’s masked copy. Also, the last 4
                      digits of the Aadhaar need to be mentioned in Document
                      Number column to avoid rejection
                    </li>
                  </ul>
                </span>
                <div className="col-6 offset-3 py-5">
                  <Form>
                    <Form.Group className="mb-3">
                      <span className="has-float-label mb-4">
                        <input
                          className="form-control"
                          name="pan"
                          id="pan2"
                          type="text"
                          placeholder=" "
                          value={user.pan}
                          disabled={true}
                        />
                        <label for="pan" className="text-label">
                          Enter PAN <span className="text-danger">*</span>
                        </label>
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <span className="has-float-label mb-4">
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder=" "
                          name="name"
                          value={user.name}
                          onChange={changeHandler}
                        />
                        <label for="name" className="text-label">
                          Enter Name
                          <span className="text-danger">*</span>
                        </label>
                      </span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <span className="has-float-label mb-4">
                        <input
                          className="form-control"
                          id="email"
                          type="text"
                          placeholder=" "
                          name="email"
                          value={user.email}
                          onChange={changeHandler}
                        />
                        <label for="email" className="text-label">
                          Enter Email <span className="text-danger">*</span>
                        </label>
                      </span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <span className="has-float-label mb-4">
                        <input
                          className="form-control"
                          id="mobileNo"
                          type="text"
                          maxLength="10"
                          placeholder=" "
                          name="mobile"
                          value={user.mobile}
                          onChange={changeHandler}
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                        />
                        <label for="mobileNo" className="text-label">
                          Enter Mobile Number
                          <span className="text-danger">*</span>
                        </label>
                      </span>
                    </Form.Group>
                  </Form>
                </div>
                <div className="mt-4 d-flex">
                  <div className="col-6 text-start">
                    <button className="btn-custom">Back</button>
                  </div>
                  <div className="col-6 text-end">
                    <button className="btn-custom" onClick={openNSELink}>
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default KYCValidation;
