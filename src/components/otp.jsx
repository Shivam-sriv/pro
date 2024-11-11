import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";

const Otp_Input = ({ OTP, setOTP, sendOtp }) => {
  const renderButton = (buttonProps) => {
    return (
      <button {...buttonProps} className="fs-13 fs-sm-10">
        Didn’t received code? <b> Resend OTP</b>
      </button>
    );
  };

  return (
    <>
      <div className="form-group">
        <label htmlFor="otp" className="pb-2 fw-600">
          Enter OTP
        </label>
        <OTPInput
          className="otp-inp justify-content-lg-center"
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
        />
        <ResendOTP
          onResendClick={sendOtp}
          className="resend-otp pt-2"
          renderButton={renderButton}
        />
      </div>
    </>
  );
};
export default Otp_Input;
