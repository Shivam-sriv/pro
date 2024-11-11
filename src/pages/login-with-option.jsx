import React from "react";
import { UpperdivOthers, LoginLogo } from "../components/reusable-content";
import { Link } from "react-router-dom";
import google from "../assets/images/logos/google.png";
import { googleSignin } from "../firebase/initiate";

import { notify } from "./toastCreater";
import { useNavigate } from "react-router-dom";
import { loginUserViaSocialId } from "../apisMethods";

function LoginWithOption() {
  const history = useNavigate();

  const HandleGoogleSignIn = async () => {
    const result = await googleSignin();
    if (!result.data) {
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
                  <div className="col-md-7 col-sm-12 ps-lg-4">
                    <LoginLogo />
                    <div className="login-inner-form">
                      <div className="details row p-4">
                        <Link
                          to="/login-with-mobile"
                          className="col-12 login-btn text-white"
                        >
                          Login With Mobile
                        </Link>
                        <Link
                          to="/login-with-email"
                          className="col-12 mt-3 login-btn text-white"
                        >
                          Login With Email ID
                        </Link>
                        <button
                          type="button"
                          className="col-12 mt-3 login-btn bg-white text-black"
                          onClick={HandleGoogleSignIn}
                        >
                          <span className="ms-2">
                            <img src={google} className="img-fluid me-2" />
                          </span>
                          Continue with Google
                        </button>
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
export default LoginWithOption;
