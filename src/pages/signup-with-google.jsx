import React, { useState } from "react";
import { UpperdivOthers, LoginLogo } from "../components/reusable-content";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Otp_Input from "../components/otp";
import OTPInput from "otp-input-react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  registerOtp,
  verifyMethodOtp,
  registerUserViaSocialId,
} from "../apisMethods";

import { notify } from "./toastCreater";

function SignUp_With_Google() {
  let history = useNavigate();
  const [Show, setShow] = useState("d-none");
  const [Block, setBlock] = useState("d-block");
  const [Pinc, setPinc] = useState("d-none");
  const [pinValue, setPinValue] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [mobile, setMobile] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [otp, setOtp] = useState("");

  const Otp = () => {
    setShow("d-block");
    setBlock("d-none");
  };

  const pin = () => {
    setPinc("d-block");
    setShow("d-none");
  };

  const handleCaptcha = (value) => {
    if (value) {
      setCaptcha(value);
    }
  };

  const sendOtpOnEmail = () => {
    let timeObj = JSON.parse(localStorage.getItem("resendOtpTime"));

    if (!timeObj?.time) {
      timeObj = { count: -1, time: new Date().getTime() };
    }

    if (mobile.length !== 10) {
      notify("warn", "Enter valid mobile number");
      return;
    }

    if (!captcha) {
      setCaptchaError("Captcha is mandatory");
      return;
    }

    if (timeObj.time - new Date().getTime() <= 0) {
      if (timeObj.count + 1 == 3) {
        localStorage.setItem(
          "resendOtpTime",
          JSON.stringify({
            time: new Date().getTime() + 60000 * 2,
            count: -1,
          })
        );
      } else {
        localStorage.setItem(
          "resendOtpTime",
          JSON.stringify({
            time: new Date().getTime(),
            count: timeObj.count + 1,
          })
        );
      }

      const googleCredential = JSON.parse(
        localStorage.getItem("googleCredential")
      );

      registerOtp({ mobile, email: googleCredential.user.email }).then(
        (res) => {
          if (!res.data) {
            notify("error", res.error.response.data.msg);
          } else {
            notify("success", res.data.msg);
            Otp();
          }
        }
      );
    }
  };
  const verifyOTP = () => {
    const googleCredential = JSON.parse(
      localStorage.getItem("googleCredential")
    );

    verifyMethodOtp({ otp, email: googleCredential.user.email }).then((res) => {
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        notify("success", res.data.msg);
        pin();
      }
    });
  };

  const setMpin = () => {
    const googleCredential = JSON.parse(
      localStorage.getItem("googleCredential")
    );

    if (
      confirmPin !== pinValue ||
      confirmPin.length < 4 ||
      pinValue.length < 4
    ) {
      notify("warn", "pin are not valid");
      return;
    }

    registerUserViaSocialId({
      email: googleCredential.user.email,
      name: googleCredential.user.displayName,
      social_id: googleCredential.token,
      mobile,
      mpin: pinValue,
    }).then((res) => {
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        notify("success", res.data.msg);
        localStorage.setItem("token", res.data.data);
        history("/kyc-validation");
      }
    });
  };

  return (
    <>
      <div className="login-main position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="login-box1 position-absolute">
                <div className="row">
                  <div className="col-md-7 col-sm-12 py-4">
                    <div className="d-flex">
                      <button
                        class="btn btn-light back-btn"
                        onClick={() => history(-1)}
                      >
                        <FaArrowLeft />
                      </button>
                      <LoginLogo />
                    </div>
                    <div className="login-inner-form ps-lg-4">
                      <div className="details">
                        <div className={`${Block}`} id="login-g">
                          <h5 className="py-3">Sign Up With Google</h5>
                          <form action="#">
                            <div className="form-group">
                              <input
                                type="text"
                                name="number"
                                className="form-control"
                                placeholder="Mobile Number *"
                                value={mobile}
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                                onChange={(e) => setMobile(e.target.value)}
                              />
                            </div>

                            <div className="form-group">
                              <ReCAPTCHA
                                sitekey="6Leqnj4lAAAAAOV-_63P0wEIRctkYThuGqlcFMDX"
                                onChange={handleCaptcha}
                              />
                              <small className="text-danger pull-left">
                                {captchaError}
                              </small>
                            </div>
                            <div className="form-group">
                              <button
                                type="button"
                                className="login-btn col-12"
                                onClick={sendOtpOnEmail}
                              >
                                Send OTP
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className={`${Show}`} id="g-otp">
                          <form>
                            <Otp_Input
                              OTP={otp}
                              setOTP={setOtp}
                              sendOtp={sendOtpOnEmail}
                            />

                            <div className="form-group">
                              <button
                                type="button"
                                className="login-btn col-12"
                                onClick={verifyOTP}
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className={`${Pinc}`} id="g-pin">
                          <form>
                            <div className="form-group">
                              <label htmlFor="otp" className="pb-2">
                                Set Pin
                              </label>
                              <OTPInput
                                className="pl-4 otp-inp justify-content-center"
                                value={pinValue}
                                onChange={setPinValue}
                                autoFocus
                                OTPLength={4}
                                otpType="number"
                                disabled={false}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="otp" className="pb-2">
                                Confirm Pin
                              </label>
                              <OTPInput
                                className="pl-4 otp-inp justify-content-center"
                                value={confirmPin}
                                onChange={setConfirmPin}
                                autoFocus
                                OTPLength={4}
                                otpType="number"
                                disabled={false}
                              />
                            </div>
                            <div className="form-group">
                              <button
                                type="button"
                                className="login-btn col-12"
                                onClick={setMpin}
                              >
                                Next
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 align-self-center d-none d-lg-block">
                    <div className="upper-div">
                      <UpperdivOthers />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp_With_Google;
