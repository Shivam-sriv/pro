import React from "react";
import happy from "../assets/images/others/happy.png";
function Thankyou () {
return(
    <>
    <div className="wrapper">     
    <div className="px-lg-5 px-smc-1">
    <div className="container-fluid">
    <div className="row justify-content-center">
    <div className="col-8 text-center mb-5">
    <img src={happy} alt="happy-img" className="img-fluid" />
     <h3 className="text-successc fw-500 py-3">Congratulations!!! IIN application has been submitted successfully. </h3>
     <p className="text-black">
        To activate your IIN, you need to approve IIN & FATCA authorization link for all the holder(s) sent
        on respective mail id(s)
    </p>
    </div>
    </div>
    </div>   
    </div>
    </div>    
    </>
)
}



export default Thankyou