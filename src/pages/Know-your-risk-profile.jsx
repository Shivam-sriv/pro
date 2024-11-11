import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { Link } from 'react-router-dom';
import riskp from "../assets/images/others/risk-profile-vector.png";
const KnowYourRiskProfile =()=> 
{
    
        return(
            <>
          
      
        
        <div className="wrapper"> 
        <div className="px-lg-5 px-smc-1">
      
 {/* Page Heading */}
 <nav aria-label="breadcrumb ">
            <ol className="breadcrumb-nav d-flex ">
              <li className="breadcrumb-item"><a href="home">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Know Your Risk Profile</li>
            </ol>
          </nav>

<section>


<div className='px-lg-5'>
          <div className="row p-lg-5 p-sm-3 bg-c bg-light-red py-3">
            <div className='col-md-6'>
              <form className="text-start">
                <div className=" risk-shadow mb-3 fs-sm-10">
                  <p className="mb-2 fw-bold">1. I seek above average returns from my investments</p>
                  <div className="d-flex justify-content-between">
                    <label>
                    <input type="radio" className="" name="optradio1" value="Aggressive" /> Agree
                    </label>
                    <label>
                    <input type="radio" className="" name="optradio1" value="Moderate" /> Somewhat Agree
                    </label>
                    <label>
                    <input type="radio" className="" name="optradio1" value="Conservative" /> Disagree
                    </label>
                  </div>
                 
                </div>
                <div className="col-12 mb-4 risk-shadow fs-sm-10">
                  <p className="mb-2 fw-bold " >2. I am patient with my investments and can bear short term volatility in my portfolio</p>
                  <div className="d-flex justify-content-between">
                    <label>
                    <input type="radio" className="" name="optradio1" value="Aggressive" /> Agree
                    </label>
                    <label>
                    <input type="radio" className="" name="optradio1" value="Moderate" /> Somewhat Agree
                    </label>
                    <label>
                    <input type="radio" className="" name="optradio1" value="Conservative" /> Disagree
                    </label>
                  </div>
                </div>
                <div className="col-12 mb-4 risk-shadow fs-sm-10">
                  <p className="mb-2 fw-bold ">3. I have regular and stable source of income</p>
                  <div className="d-flex justify-content-between">
                    <label>
                    <input type="radio" className="" name="optradio1" value="Aggressive" /> Agree
                    </label>
                    <label>
                    <input type="radio" className="" name="optradio1" value="Moderate" /> Somewhat Agree
                    </label>
                    <label>
                    <input type="radio" className="" name="optradio1" value="Conservative" /> Disagree
                    </label>
                  </div>
                </div>
                <div className="col-12 mb-4 risk-shadow fs-sm-10">
                  <p className="mb-2 fw-bold " >4. My outstanding debt/loan is low or that has been provisioned for</p>
                  <div className="d-flex justify-content-between">
                    <label>
                    <input type="radio" className="" name="optradio1" value="Aggressive" /> Agree
                    </label>
                    <label>
                    <input type="radio" className="" name="optradio1" value="Moderate" /> Somewhat Agree
                    </label>
                    <label>
                    <input type="radio" className="" name="optradio1" value="Conservative" /> Disagree
                    </label>
                  </div>
                </div>
                <div className="text-lg-end text-center pb-5">
                  <a href="#" className="btn-custom col-3">Submit</a>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className='col-md-12 text-center'>
                <img src={riskp} alt="" className='img-fluid mb-3'/>
              </div>
              
                  <div className="col-md-12 text-center" >                                  
                    <div className='speedo' style={{
                    width: "100%",
                    height: "220px",
                    }}>
                    <ReactSpeedometer
                    maxValue={150}
                    value={70}
                    currentValueText="Risk Profile"
                    customSegmentLabels={[
                    {
                    text: "CONSERVATIVE",
                    position: "INSIDE",
                    color: "#fff",
                    },
                    {
                    text: "MODERATE",
                    position: "INSIDE",
                    color: "#fff",
                    },
                    {
                    text: "AGGRESSIVE",
                    position: "INSIDE",
                    color: "#fff",
                    },
                    ]}
                    segmentColors={[
                    "#32bb29",
                    "#ffda4d",
                    "#fd0034",   
                    ]}
                    segments={3}
                    endColor="blue"
                    width={400}
                    height={400}
                    needleTransitionDuration={2000}
                    />
                  </div>
                  <h5 className='text-center py-4  fs-sm-13'>Your Risk Profile : Moderate</h5>
                </div>
             
           
            
          </div>
        </div>
        <div className="row">
          <div className="col-6 mt-4 mb-3 text-start">
            <Link className="btn-custom shadow-sm" to="/dashboard/get-right-scheme" >
            Back</Link>
          </div>
          <div className="col-6 mt-4 mb-3 text-end">
            <Link className="btn-custom" to="javascript:void(0);">Continue</Link>
          </div>
        </div>
      </div>

</section>
</div>
</div>
</>
        )
}
export default KnowYourRiskProfile