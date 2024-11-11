import React, { useState } from "react";
import { UpperdivOthers, LoginLogo } from "../components/reusable-content";
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate} from 'react-router-dom';
import Otp_Input from "../components/otp";
import OTPInput from "otp-input-react";
function Forgot_Pin() {
let history = useNavigate();
const [Show, setShow] = useState("d-none");
const [Block, setBlock] = useState("d-block");
const [Pinc, setPinc] = useState("d-none");
const [Pin, setPin] = useState("");
const [Confirm, setConfirm] = useState("");
const Otp = () => {
setShow("d-block")
setBlock("d-none")
}
const pin = () => {
setPinc("d-block")
setShow("d-none")
}
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
                <button class="btn btn-light back-btn" onClick={() =>
                  history(-1)} >
                  <FaArrowLeft />
                </button>
                <LoginLogo />
              </div>
              <div className="login-inner-form ps-lg-4">
                <div className="details">
                  <div className={`${Block}`} id='login-g'>
                    <h5 className='py-3'>Recover your Pin</h5>
                    <form action="#">
                      <div className="form-group">
                        <input type="email" name="email" className="form-control" placeholder="Enter Registered Email Address *" />
                      </div>
                      <div className="form-group">
                        <button  type="button" className="login-btn col-12" onClick={Otp}>Send OTP</button>
                      </div>
                    </form>
                  </div>
                  <div className={`${Show}`} id='g-otp'>
                    <form>
                      <Otp_Input/>
                      <div className="form-group">
                        <button type="button"  className="login-btn col-12" onClick={pin}>Submit</button>
                      </div>
                    </form>
                  </div>
                  <div className={`${Pinc}`} id="g-pin">
                    <form>
                      <div className="form-group">
                        <label htmlFor='otp' className='pb-2'>Set Pin</label>
                        <OTPInput className="pl-4 otp-inp justify-content-center" value={Pin} onChange={setPin} autoFocus OTPLength={4} otpType="number" disabled={false}  />
                      </div>
                      <div className="form-group">
                        <label htmlFor='otp' className='pb-2'>Confirm Pin</label>
                        <OTPInput className="pl-4 otp-inp justify-content-center" value={Confirm} onChange={setConfirm} autoFocus OTPLength={4} otpType="number" disabled={false}  />
                      </div>
                      <div className="form-group">
                        <button type="button" className="login-btn col-12">Next</button>
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
export default Forgot_Pin;