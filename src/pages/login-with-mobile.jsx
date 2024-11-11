import React, { useState } from "react";
import { UpperdivOthers, LoginLogo } from "../components/reusable-content";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Otp_Input from "../components/otp";
import { sendMobileLoginOtp, verifyMobileLoginOtp } from "../apisMethods";
import { notify } from "./toastCreater";

function Login_With_Mobile() {
  let history = useNavigate();
  const [Show, setShow] = useState("d-none");
  const [Block, setBlock] = useState("d-block");
  const [mobile, setMobile] = useState("");
  const [OTP, setOTP] = useState("");

  const Otp = () => {
    setShow("d-block");
    setBlock("d-none");
  };

  const sendOtpOnMobile = (e) => {
    e.preventDefault()
    if (mobile.length !== 10) {
      notify("warn", "mobile number should be of 10 digits");
      return;
    }

    sendMobileLoginOtp({
      number: mobile,
    }).then((res) => {
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        notify("success", "An OTP has been sent to your registered mobile");
        Otp();
      }
    });
  };

  const verifyOtp = () => {
    if (OTP.length !== 6) {
      notify("warn", "OTP number should be of 6 digits");
      return;
    }

    verifyMobileLoginOtp({
      number: mobile,
      otp: OTP,
    }).then((res) => {
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        localStorage.setItem("token", res.data.data);
        history("/");
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
                  <div className="col-md-7 col-sm-12 ">
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
                      <div className={`details m-4  ${Block}`} id="mobile-no">
                        <h5 className="py-3">Login With Mobile OTP</h5>
                        
                        <form onSubmit={sendOtpOnMobile}>
                          <div className="form-group no-input">
                            <input
                              type="text"
                              name="mobile"
                              value={mobile}
                              onChange={(e) => {
                              
                               if(!isNaN(Number(e.target.value)) || e.target.value == ""){
                                setMobile(e.target.value)
                               }
                             
                              }}
                              // onKeyPress={(event) => {
                              //   if (!/[0-9]/.test(event.key)) {
                              //     event.preventDefault();
                              //   }
                              // }}
                              className="input-text form-control"
                              placeholder="Enter Your Mobile Number *"
                            />
                          </div>
                          <div className="form-group mt-3">
                            <button
                              className="login-btn col-12"
                            >
                              Get OTP
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className={`details m-4 ${Show}`} id="Otp">
                        <form action="#" method="Post">
                          <Otp_Input
                            OTP={OTP}
                            setOTP={setOTP}
                            sendOtp={sendOtpOnMobile}
                          />
                          <div className="form-group">
                            <button
                              type="button"
                              className="login-btn col-12"
                              onClick={verifyOtp}
                            >
                              Login
                            </button>
                          </div>
                        </form>
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
export default Login_With_Mobile;
