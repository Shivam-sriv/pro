import React, { useState } from "react";
import { UpperdivOthers, LoginLogo } from "../components/reusable-content";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Otp_Input from "../components/otp";
import Tooltip_info from "../components/tooltip";
import { sendResetOtp, verifyResetOtp, resetPassword } from "../apisMethods";
import { notify } from "./toastCreater";
import { Validator, validatorsMethods } from "../validations";
import { useNavigate } from "react-router-dom";

function Forgot_Password() {
  const [Show, setShow] = useState("d-none");
  const [Block, setBlock] = useState("d-block");
  const [Password, setPassword] = useState("d-none");
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const navigate = useNavigate();

  const Otp = () => {
    setShow("d-block");
    setBlock("d-none");
  };
  const Newpass = () => {
    setPassword("d-block");
    setShow("d-none");
  };

  const sendOTPOnEmail = () => {
    sendResetOtp({ email, formpin: false }).then((res) => {
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        notify("success", res.data.msg);
        Otp();
      }
    });
  };

  const verifyEmailOtp = () => {
    verifyResetOtp({
      email,
      otp: OTP,
      formpin: false,
    }).then((res) => {
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        setToken(res.data.data);
        Newpass();
      }
    });
  };

  const changePassword = async () => {
    const validPass = await Validator(
      confirmPassword,
      "confirm Password",
      (a, b) => {
        validatorsMethods.start(a, b).checkConfirmPassword(pass);
      }
    );

    if (validPass.message) {
      notify("warn", validPass.message);
      return;
    }

    resetPassword(
      {
        password: pass,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    ).then((res) => {
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        navigate("/login-with-email");
      }
    });
  };

  return (
    <>
      <div className="login-main position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="login-box position-absolute">
                <div className="row">
                  <div className="col-md-7 col-sm-12 ">
                    <div className="d-flex">
                      <LoginLogo />
                    </div>
                    <div className="login-inner-form ps-lg-4">
                      <div className="details py-3">
                        <form action="#">
                          <div className={`email-box  ${Block}`}>
                            <h5 className="py-3">Recover your password</h5>
                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Registered Email Address *"
                              />
                            </div>
                            <div className="form-group">
                              <button
                                type="button"
                                className="login-btn col-12"
                                onClick={sendOTPOnEmail}
                              >
                                Sent OTP
                              </button>
                            </div>
                          </div>
                          <div className={`otp-box  ${Show}`}>
                            <Otp_Input
                              OTP={OTP}
                              setOTP={setOTP}
                              sendOtp={sendOTPOnEmail}
                            />
                            <div className="form-group">
                              <button
                                type="button"
                                className="login-btn col-12"
                                onClick={verifyEmailOtp}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                          <div className={`pass-box  ${Password}`}>
                            <div className="form-group">
                              <div className="d-flex">
                                <input
                                  type="password"
                                  name="password"
                                  className="form-control"
                                  placeholder="Enter New Password *"
                                  value={pass}
                                  onChange={(e) => setPass(e.target.value)}
                                />
                              </div>
                              <div className="bg-info rounded-circle d-icon">
                                <Tooltip_info />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="">
                                <input
                                  type={passwordType}
                                  name="cpassword"
                                  id="new_pass"
                                  className="form-control"
                                  placeholder="Corfirm New Password *"
                                  value={confirmPassword}
                                  onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                  }
                                />
                              </div>
                              <div
                                className="rounded-circle d-icon"
                                onClick={() =>
                                  passwordType == "password"
                                    ? setPasswordType("text")
                                    : setPasswordType("password")
                                }
                              >
                                {passwordType === "password" ? (
                                  <FaEyeSlash
                                    className="fs-4"
                                    toggle="#password-field"
                                  />
                                ) : (
                                  <FaEye
                                    className="fs-4"
                                    toggle="#password-field"
                                  />
                                )}
                              </div>
                            </div>
                            <div className="form-group">
                              <button
                                type="button"
                                className="login-btn col-12"
                                onClick={changePassword}
                              >
                                Update Password
                              </button>
                            </div>
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
export default Forgot_Password;
