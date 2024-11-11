import React from "react";
import google from "../assets/images/logos/google.png";
import cback from "../assets/images/login/call.png";
import logo from "../assets/images/logos/logo-login.png";
import { Link } from "react-router-dom";
// SignUp,SignIn upper div
export function Upperdiv({ HandleGoogleSignIn, text }) {
  return (
    <>
      <h4 className="text-white fw-bold">Prodigy Pro*</h4>
      <p className="text-white fs-15 py-3">
        Having trouble signing in? We’re here to help. Just hit the button
        below.
      </p>
      <div className="col-md-12">
        <Link
          to="https://bfccapital.com/request-a-callback"
          className="login-btn bg-white text-black  fs-12"
          target="_blank"
        >
          <img src={cback} alt="" className="pe-2 img-fluid cback " />
          <b>Request Call Back</b>
        </Link>
      </div>{" "}
      <br />
      <br />
      <div className="col-md-12">
        <button
          onClick={HandleGoogleSignIn}
          className="login-btn bg-white text-black  fs-12"
        >
          <img src={google} alt="" className="pr-2" />
          <b> {text} With Google</b>
        </button>
      </div>
      <br />
      <br />
    </>
  );
}
export function UpperdivOthers() {
  return (
    <>
      <h4 className="text-white fw-bold">Prodigy Pro*</h4>
      <p className="text-white fs-15 py-3">
        Having trouble signing in? We’re here to help. Just hit the button
        below.{" "}
      </p>
      <Link
        to="https://bfccapital.com/request-a-callback"
        className="login-btn bg-white text-black  fs-12"
        target="_blank"
      >
        <img src={cback} alt="" className="pe-2 img-fluid cback" />
        <b>Request Call Back</b>
      </Link>
    </>
  );
}
// Top header logo for login/signup module
export function LoginLogo() {
  return (
    <>
      <div className="logo-container brand-logo">
        <Link to="https://bfccapital.com/" target="_blank">
          <div className="brand-logo">
            <img src={logo} alt="logo" className="img-fluid logo-login" />
          </div>
        </Link>
      </div>
    </>
  );
}
