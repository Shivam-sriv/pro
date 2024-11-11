import React, { useEffect, useState } from "react";
import { Upperdiv, LoginLogo } from "../components/reusable-content";
import google from "../assets/images/logos/google.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Otp_Input from "../components/otp";
import { FaEyeSlash, FaArrowLeft, FaEye } from "react-icons/fa";
import Terms_and_Conditions from "../components/term-and-conditions";
import Tooltip_info from "../components/tooltip";
import { validatorsMethods, Validator } from "../validations";
import { registerOtp, verifyMethodOtp, registrationUser } from "../apisMethods";
import { googleSignin } from "../firebase/initiate";
import { notify } from "./toastCreater";
import ReCAPTCHA from "react-google-recaptcha";

const initialFormState = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  confirm_password: "",
  termCondition: 0,
  captcha: "",
};

const initialFormErrorState = { ...initialFormState };

const Registration = () => {
  let history = useNavigate();
  const location = useLocation();
  const [Show, setShow] = useState("d-none");
  const [Block, setBlock] = useState("d-block");
  const [Position, setPosition] = useState("position-relative");
  const [formData, setFormData] = useState(initialFormState);
  const [formError, setFormError] = useState(initialFormErrorState);
  const [OTP, setOTP] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const getCaptcha = () => {
    return (
      <div className="form-group">
        <ReCAPTCHA
          sitekey="6Leqnj4lAAAAAOV-_63P0wEIRctkYThuGqlcFMDX"
          onChange={onChange}
          className="mt-3"
        />
      </div>
    );
  };

  useEffect(() => {}, [location]);

  const Otp = () => {
    setShow("d-block");
    setBlock("d-none");
    setPosition("position-absolute");
  };
  const HandleGoogleSignIn = async () => {
    const result = await googleSignin();
    if (!result.data) {
      // notify("error", "google signin issue");
    } else {
      localStorage.setItem("googleCredential", JSON.stringify(result.data));
      history("/signup-with-google");
    }
  };

  const handleOtp = async () => {
    const name = await Validator(formData.name, "name", (a, b) => {
      validatorsMethods.start(a, b).isRequired().strMax(50);
    });

    const email = await Validator(formData.email, "email", (a, b) => {
      validatorsMethods.start(a, b).isRequired().email();
    });

    const mobile = await Validator(formData.mobile, "mobile", (a, b) => {
      validatorsMethods
        .start(a, b)
        .checkMobileNumber()
        .isRequired()
        .strMin(10)
        .strMax(10);
    });

    const password = await Validator(formData.password, "password", (a, b) => {
      validatorsMethods.start(a, b).isRequired().checkPassword();
    });

    const confirmPassword = await Validator(
      formData.confirm_password,
      "confirm_password",
      (a, b) => {
        validatorsMethods
          .start(a, b)
          .isRequired()
          .checkConfirmPassword(formData.password);
      }
    );

    if (
      name.message ||
      email.message ||
      mobile.message ||
      password.message ||
      confirmPassword.message ||
      !formData.captcha ||
      !formData.termCondition
    ) {
      setFormError({
        [name.field]: name.message,
        [email.field]: email.message,
        [mobile.field]: mobile.message,
        [password.field]: password.message,
        [confirmPassword.field]: confirmPassword.message,
        ["captcha"]: formData.captcha ? "" : "Please Select Captcha",
        ["termCondition"]: formData.termCondition
          ? ""
          : "Please allow Terms & Conditions to continue.",
      });
      return;
    }

    sendOtp();
  };

  const sendOtp = () => {
    registerOtp({ ...formData, mobile: Number(formData.mobile) }).then(
      (res) => {
        if (!res.data) {
          notify("error", res.error.response.data.msg);
        } else {
          notify("success", "An OTP has been sent to your email");
          Otp();
        }
      }
    );
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const verifyOtp = async () => {
    const response = await verifyMethodOtp({
      email: formData.email,
      mobile: formData.mobile,
      otp: Number(OTP),
    });

    if (!response.data) {
      notify("error", response.error.response.data.msg);
    } else {
      const res = await registrationUser(formData);
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        notify("success", res.data.msg);
        console.log(res.data.data);
        localStorage.setItem("token", res.data.data);
        history("/kyc-validation");
      }
    }
  };

  const onChange = (value) => {
    console.log(value);
    setFormData({ ...formData, captcha: value });
  };

  return (
    <>
      <div className="login-main ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className={`login-box  ${Position}`}>
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
                      <div className="details">
                        <form id="create" className={`${Block}`}>
                          <h5 className="py-3">Create an account</h5>
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={changeHandler}
                              id="regfullname"
                              className="form-control"
                              placeholder="Full Name *"
                            />
                          </div>
                          <small className="text-danger pull-left">
                            {formError.name}
                          </small>
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={changeHandler}
                              className="form-control"
                              placeholder="Email Address *"
                            />
                            <small className="text-danger pull-left">
                              {formError.email}
                            </small>
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              name="mobile"
                              onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}
                              value={formData.mobile}
                              onChange={changeHandler}
                              className="form-control"
                              placeholder="Mobile Number *"
                              minLength="10"
                              maxLength="10"
                            />
                            <small className="text-danger pull-left">
                              {formError.mobile}
                            </small>
                          </div>
                          <div className="form-group">
                            <div className="">
                              <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={changeHandler}
                                class="form-control"
                                placeholder="Password *"
                              />
                              <small className="text-danger pull-left">
                                {formError.password}
                              </small>
                            </div>
                            <div className="bg-info rounded-circle d-icon">
                              <Tooltip_info />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="">
                              <input
                                type={passwordType}
                                name="confirm_password"
                                value={formData.confirm_password}
                                onChange={changeHandler}
                                id="new_pass"
                                className="form-control"
                                placeholder="Confirm Password *"
                              />
                              <small className="text-danger pull-left">
                                {formError.confirm_password}
                              </small>
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

                          {getCaptcha()}
                          <div className="form-group">
                            <small className="text-danger pull-left">
                              {formError.captcha}
                            </small>
                          </div>
                          <div className="checkbox ">
                            <div className="form-group text-start">
                              <input
                                className=""
                                value={formData.termCondition}
                                name="termCondition"
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    termCondition: Number(e.target.value)
                                      ? 0
                                      : 1,
                                  })
                                }
                                type="checkbox"
                                defaultValue
                                id="rememberMe"
                              />
                              <label
                                className="ps-2 fs-14"
                                htmlFor="rememberMe"
                              >
                                I agree to the
                                <Terms_and_Conditions />
                              </label>
                              <br></br>
                              <small className="text-danger pull-left">
                                {formError.termCondition
                                  ? formError.termCondition
                                  : ""}
                              </small>
                            </div>
                          </div>
                          <div className="form-group">
                            <button
                              type="button"
                              className="login-btn col-12"
                              onClick={handleOtp}
                            >
                              GENERATE OTP
                            </button>
                          </div>
                          <div className="form-group d-lg-none">
                            <button
                              className="login-btn bg-white text-black  fs-14"
                              type="button"
                              onClick={HandleGoogleSignIn}
                            >
                              <img src={google} alt="" className="pe-2" />
                              Sign Up With Google<span></span>
                            </button>
                          </div>
                        </form>
                        <form className={`register ${Show}`}>
                          <Otp_Input
                            OTP={OTP}
                            setOTP={setOTP}
                            sendOtp={sendOtp}
                          />
                          <div className="form-group">
                            <button
                              type="button"
                              className="login-btn col-12"
                              onClick={verifyOtp}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                        <p className="pt-3 fs-14">
                          <Link to="/" className="text-black underline">
                            Skip Registration
                          </Link>{" "}
                          <br />
                          <b className="text-red">OR</b> <br /> Already
                          Registered?
                          <Link to="/login-with-email" className="">
                            <b> Login here</b>
                          </Link>
                        </p>
                        <div className="text-left mt-2">
                          <span className="text-sm font-italic ">
                            *Here you can monitor your MF Portfolio, Execute
                            Transactions and select a suitable Mutual Fund
                            scheme for yourself.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 align-self-center d-none d-lg-block">
                    <div className="upper-div">
                      <Upperdiv
                        HandleGoogleSignIn={HandleGoogleSignIn}
                        text="SignUp"
                      />
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
};
export default Registration;
