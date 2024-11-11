import React,{useState} from "react";
import { Link } from "react-router-dom";
import opps from "../assets/images/oops-r.png"
import Otp_Input from "../components/otp";
import PortfolioWait from "../components/portfolio-review-newuser-done";

const PortfolioNewuser =()=>
{
    const [porfoliowaitshow, setporfoliowaitShow] = useState(false);
    const [Number ,setNumber]=useState('d-block');
    const [Otpfield ,setOtpfield]=useState('d-none');
    const otp =()=>
    {
    setNumber("d-none");
    setOtpfield("d-block");
    }
       
    return(

        <>
        <div className="wrapper portfolio-review">
        <div className="px-lg-5 px-2 pe-5">
      
      {/* Page Heading */}
      <nav aria-label="breadcrumb">
          <ol className="breadcrumb ps-3">
            <li className="breadcrumb-item"><Link to="home">Home</Link></li>
            <li className="breadcrumb-item active">Portfolio Review New User</li>
          </ol>
        </nav>
     
        <section className="my-5">

        <div className="container p-smc-0">
         <div className="row justify-content-center">
            <div className="col-md-6 text-center">
                 
<img src={opps} alt="" className="img-fluid"/>
<p className="fs-sm-10"><b>It Seems that you do not have any investments with us. No worries! Please click on”generate OTP” to enable us to view your investments.</b></p>
                
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-6">
                    <div className={`text-center ${Number}`}>   
                    <span className="has-float-label">
                            <input
                              className="form-control"
                              id="pan"
                              type="text"
                              maxLength="10"
                              placeholder=" "
                              name="pan"
                             
                            />
                            <label for="pan" className="text-label">
                              Enter PAN <span className="text-danger">*</span>
                            </label>
                          </span>

                          <button type="button" class="otp-btn mt-5 br-15" onClick={otp}>Generate OTP</button>

</div>

                          <div className={`mobile-otp text-center ${Otpfield}`}>
    <p className="text-red fs-10">An OTP has been sent to your registered Mobile Number & Email ID</p>
 <Otp_Input/>
    
      <button type="button" className="otp-btn br-15 mt-3 "onClick={() => setporfoliowaitShow(true)} >Submit</button>
      </div> 
                    </div>
                </div>
                       
            </div>
         </div>
         
         
        </div>
      </section>
     
      <PortfolioWait show={porfoliowaitshow} setShow={setporfoliowaitShow }/>
        </div>
        </div>
       
        </>
    )
}
export default PortfolioNewuser