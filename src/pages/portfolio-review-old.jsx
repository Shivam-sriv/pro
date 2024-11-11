import React ,{useState}from "react";

import Select from 'react-select';
import { Link } from "react-router-dom";
import PortfolioReviewChart from "../components/port-review-chart";
import SwitchPortReview from "../components/switch-form-pr";
import RedemptionConfirm from "../components/redemption-confirm-pr";
const PortfolioReview =()=>
{

  const [switchshow,setSwitchShow] =useState(false);
  const [redemptionshow,setRedemptionShow] =useState(false);
    const profile = [
        { value: 'select', label: 'select' },
        ];
   
    return(

        <>
        <div className="wrapper">
        <div className="px-lg-5 px-2 pe-5">
      
      {/* Page Heading */}
      <nav aria-label="breadcrumb">
          <ol className="breadcrumb ps-3">
            <li className="breadcrumb-item"><Link to="home">Home</Link></li>
            <li className="breadcrumb-item active">Portfolio Review</li>
          </ol>
        </nav>
     
        <section>
        <div className="container p-smc-0">
          <div className="row ">
            <div className="col-lg-12">
              <div id="first">
                <div className="col-lg-5 col-md-8 col-12 ps-3">
                  <label>Select Profile</label>
                  <Select className='single-drop ' options={profile} />
                </div>
                <div className="row py-5 ">
                 
                  <div className="col-md-8 cursor mb-5">
                    <PortfolioReviewChart/>
                   
                  </div>
                  <div className="col-md-4 shadow bg-review br-15  p-3" >
                    <h5 className="text-center text-black py-4 fw-600">Basis of recommendation</h5>
                    <p className="text-justify fs-14   ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          {/* redemption section */}
          <div className="row  mb-5 justify-content-center redemption-section fs-sm-10">
            <div className="col-lg-10 col-md-12 ">
              <div className="shadow-custom p-4 m-0 ">
                <div className="col-md-12 text-end ">
                  <input  type="checkbox" value="Select All" /><span className="ps-2">Select All</span>
                </div>
                <hr />
                <div className="table-responsive">
                  <div className="col-md-12 text-black fw-500 text-start">
                    <div className="d-flex justify-content-between">
                      <div className=" text-label">Source Scheme</div>
                      <div className=" text-end"> <input className="" type="checkbox" /></div>
                    </div>
                  </div>
                  <div className="col-md-12 text-black text-start ">
                    SBI Small Cap Fund Regular Growth
                  </div>
                  <div className="col-md-12 text-start text-label">
                    Target Scheme
                  </div>
                  <div className="col-md-12 text-black text-start ">
                    SBI Equity Savings Fund-Regular Plan-Growth
                  </div>
                </div>
                <hr />
                <div className="table-responsive">
                  <div className="col-md-12 text-black fw-500 text-start">
                    <div className="d-flex justify-content-between">
                      <div className="text-label">Source Scheme</div>
                      <div className="text-end"> <input className="" type="checkbox" /></div>
                    </div>
                  </div>
                  <div className="col-md-12 text-black text-start ">
                    SBI Small Cap Fund Regular Growth
                  </div>
                  <div className="col-md-12 text-start text-label">
                    Target Scheme
                  </div>
                  <div className="col-md-12 text-black text-start ">
                    SBI Equity Savings Fund-Regular Plan-Growth
                  </div>
                </div>
                <hr />
                <div className="table-responsive">
                  <div className="col-md-12 text-black fw-500 text-start">
                    <div className="d-flex justify-content-between">
                      <div className="text-label">Source Scheme</div>
                      <div className="text-end"> <input className="" type="checkbox" /></div>
                    </div>
                  </div>
                  <div className="col-md-12 text-black text-start ">
                    SBI Small Cap Fund Regular Growth
                  </div>
                  <div className="col-md-12 text-start text-label">
                    Target Scheme
                  </div>
                  <div className="col-md-12 text-black text-start ">
                    SBI Equity Savings Fund-Regular Plan-Growth
                  </div>
                </div>
                <div className="col-md-12 py-3 text-end">
                  <a href="javascript:void(0);" className="btn-custom" onClick={() => setSwitchShow(true)}> Next</a>
                </div>
              </div>
            </div>
          </div>
          {/* switch */}
          <div className="row  mb-5 justify-content-center redemption-section fs-sm-10">
            <div className="col-lg-10 col-md-12 ">
              <div className="shadow-custom p-4 m-0 ">
                <div className="col-md-12 text-end ">
                  <input className="" type="checkbox" value="Select All" /><span className="ps-2">Select All</span>
                </div>
                <hr />
                <div className="table-responsive">
                  <div className="col-md-12 text-black fw-500 text-start">
                    <div className="d-flex justify-content-between">
                      <div className="">
                        Kotak Bluechip Fund-Growth
                        (Regular Plan) (Eastwhile Kotak 50 Scheme)
                        (705527/17) 
                      </div>
                      <div className=""> <input className="" type="checkbox" /></div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <div className="">
                        Kotak Bluechip Fund-Growth
                        (Regular Plan) (Eastwhile Kotak 50 Scheme)
                        (705527/17) 
                      </div>
                      <div className=""> <input className="" type="checkbox" /></div>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between">
                      <div className="">
                        Kotak Bluechip Fund-Growth
                        (Regular Plan) (Eastwhile Kotak 50 Scheme)
                        (705527/17) 
                      </div>
                      <div className=""> <input className="" type="checkbox" /></div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="col-md-12 py-3 text-end">
                  <a href="javascript:void(0);" className="btn-custom" onClick={() => setRedemptionShow(true)}>Next</a>
                </div>
              </div>
            </div>
          </div>
          {/* stay invested  */}
          <div className="row  mb-5 justify-content-center redemption-section fs-sm-10">
            <div className="col-lg-10 col-md-12 text-center">
              <div className="shadow-custom p-4 m-0 ">
                <hr />
                <div className="">
                  <div className="col-md-12 text-black fw-500 text-start">
                    <div className="row">
                      <div className="col-md-12 text-black  ">
                        Kotak Bluechip Fund-Growth
                        (Regular Plan) (Eastwhile Kotak 50 Scheme)
                        (705527/17) 
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-12 text-black  ">
                        Kotak Bluechip Fund-Growth
                        (Regular Plan) (Eastwhile Kotak 50 Scheme)
                        (705527/17) 
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-md-12 text-black ">
                        Kotak Bluechip Fund-Growth
                        (Regular Plan) (Eastwhile Kotak 50 Scheme)
                        (705527/17) 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <SwitchPortReview show={switchshow} setShow={setSwitchShow}/>
        <RedemptionConfirm show={redemptionshow} setShow={setRedemptionShow}/>
        </div>
        </div>
       
        </>
    )
}
export default PortfolioReview