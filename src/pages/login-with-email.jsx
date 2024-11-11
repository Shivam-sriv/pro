import React, { useState } from "react";
import { Upperdiv, LoginLogo } from "../components/reusable-content";
import { FaArrowLeft, FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { loginViaEmailAndPass } from "../apisMethods";
import { Validator, validatorsMethods } from "../validations";
import { notify } from "./toastCreater";
import { googleSignin } from "../firebase/initiate";
import { loginUserViaSocialId } from "../apisMethods";

function Login_With_Email() {
  let history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const login = async (e) => {
    e.preventDefault();
    const isValidEmail = await Validator(email, "email", (a, b) => {
      validatorsMethods.start(a, b).isRequired().email();
    });

    const isValidPass = await Validator(password, "password", (a, b) => {

      validatorsMethods.start(a, b).isRequired()
      // .checkPassword();
    });

    if (isValidEmail.message) {
      notify("warn", isValidEmail.message);
      return;
    }

    if (isValidPass.message) {
      notify("warn", isValidPass.message);
      return;
    }

    loginViaEmailAndPass({ email, password }).then((res) => {
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        localStorage.setItem("token", res.data.data);
        // localStorage.setItem("user", JSON.stringify(res.data?.data));
        history("/");
        console.log(res.data.data);
      }
    });
  };

  const HandleGoogleSignIn = async () => {
    const result = await googleSignin();
    if (!result.data) {
      // toast.error("google signin issue");
    } else {
      loginUserViaSocialId({
        email: result.data.user.email,
        social_id: result.data.token,
      }).then((res) => {
        if (!res.data) {
          notify("error", res.error.response.data.msg);
        } else {
          localStorage.setItem("token", res.data.data);
          history("/");
        }
      });
    }
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
                        <h5 className="py-3">Login With Email/User ID</h5>
                        <form onSubmit={login}>
                          <div className="form-group">
                            <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Email/User ID *"
                            />
                          </div>
                          <div className="form-group pb-2">
                            <input
                              type={passwordType}
                              name="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="form-control"
                              placeholder="Password *"
                              id="new_pass"
                            />
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
                          <div className="checkbox d-flex justify-content-between">
                            <div>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                value="R"
                              />
                              <label
                                className="form-check-label fs-14 ms-2"
                                htmlFor="rememberMe"
                              >
                                Remember me
                              </label>
                            </div>
                            <Link
                              to="/forgot-password"
                              className="fs-14 text-black"
                            >
                              Forgot Password
                            </Link>
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className=" login-btn  col-12"
                              
                            >
                              Login
                            </button>
                          </div>
                        </form>
                        <p className="fs-14 mt-2">
                          Don't have an account?
                          <Link to="/registration" className="text-black">
                            <b> Register here</b>
                          </Link>
                        </p>
                        <div className="text-justify fst-italic mt-2">
                          <span className="fs-14 text-black">
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
                        text="SignIn"
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
}
export default Login_With_Email;
