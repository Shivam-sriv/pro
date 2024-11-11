import React, { useState } from "react";
import { UpperdivOthers, LoginLogo } from "../components/reusable-content";
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate,Link } from 'react-router-dom';
import OTPInput, { ResendOTP } from "otp-input-react";
import profileimg from "../assets/images/Ellipse.png" 
function Login_With_Google() {
const [Pin, setPin] = useState("");
let history = useNavigate();
return (
<>
<div className="login-main position-relative">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="login-box1 position-absolute">
          <div className="row">
            <div className="col-md-7 col-sm-12 ">
              <div className="float-left">
                <button class="btn btn-light back-btn" onClick={() =>
                  history(-1)} >
                  <FaArrowLeft />
                </button>
              </div>
              <div className="login-inner-form ps-lg-4">
                <div className="details">
                  <div id="g-pin" className=''>
                    <div className=''>
                      <img src={profileimg} alt='' className='img-fluid mx-8'/> 
                      <h6 className='mb-0 text-black font-weight-600'>Hi, Shivam Srivastav</h6>
                      <p>shivam.bfcmail.com</p>
                    </div>
                    <form className="mb-4">
                      <div>
                        <label htmlFor='otp' className='pb-2 me-3'>Enter 4-digit security PIN</label>
                        <OTPInput className="otp-inp justify-content-center" value={Pin} onChange={setPin} autoFocus OTPLength={4} otpType="number" disabled={false}  />
                      </div>
                      <div className="mb-2">
                        <Link to="/forgot-pin" className='fs-13 text-black ps-5 ms-5'>
                        Forgot Pin</Link>
                      </div>
                      <div className="form-group">
                        <button type="submit" className=" login-btn  col-12" >Confirm</button>
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
export default Login_With_Google;