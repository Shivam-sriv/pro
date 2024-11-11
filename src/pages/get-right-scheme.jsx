import React, { useState } from 'react';
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaInfo } from 'react-icons/fa';
import Select from 'react-select';
import sunderam from "../assets/images/banklogo/Sundaram_Mutual_Fund.png";
import sbi from "../assets/images/banklogo/sbi.png";
import idfc from "../assets/images/banklogo/IDFC.png";
import LumpsumForm from '../components/lumpsum-form';


const GetRightScheme =()=> {
  const [lumpsumformShow,setLumpsumformShow] = useState(false);
const years = [
{ value: '1 Years', label: '1 Years' },
{ value: '2 Years', label: '2 Years' },
{ value: '3 Years', label: '3 Years' },
{ value: '4 Years', label: '4 Years' },
{ value: '5 Years', label: '5 Years' },
{ value: '6 Years', label: '6 Years' },
{ value: '7 Years', label: '7 Years' },
{ value: '8 Years', label: '8 Years' },
{ value: '9 Years', label: '9 Years' },
{ value: '10 Years', label: '10 Years' },
{ value: '11 Years', label: '11 Years' },
{ value: '12 Years', label: '12 Years' },
{ value: '13 Years', label: '13 Years' },
{ value: '14 Years', label: '14 Years' },
{ value: '15 Years', label: '15 Years' },
{ value: '16 Years', label: '16 Years' },
{ value: '17 Years', label: '17 Years' },
{ value: '18 Years', label: '18 Years' },
{ value: '19 Years', label: '19 Years' },
{ value: '20 Years', label: '20 Years' }
];
const risk = [
{ value: "Conservative", label: "Conservative" },
{ value: "Moderate", label: "Moderate" },
{ value: "Aggressive", label: "Aggressive" },
];
const folio = [
{ value: '1544545454', label: '1544545454' },
{ value: '55588888', label: '55588888' },
];
const profile = [
{ value: 'select', label: 'select' },
];
const payment = [
{ value: 'UPI', label: 'UPI' },
{ value: 'Net Banking', label: 'Net Banking' },
{ value: 'RTGS/NEFT', label: 'RTGS/NEFT' },
{ value: 'Debit Mandate', label: 'Debit Mandate' },
];
return (
<>


<div className="wrapper get-scheme">
        <div className="px-lg-5 px-smc-1">
      
      {/* Page Heading */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ps-3">
            <li className="breadcrumb-item"><a href="home">Home</a></li>           
            <li className="breadcrumb-item active" aria-current="page">Get Right Scheme</li>
          </ol>
        </nav>
        <div className="row px-lg-4 pt-4">
          {/* Area Chart */}
          <div className="col-xl-12 col-lg-12 mt-2 pe-4">
            <div className="card shadowc bg-gray mb-4 p-1 br-38">
              <div className="card-body pe-3">
                <div className='row align-items-stretch'>
                  <div className="col-lg-4 col-md-6  mb-4">
                    <label><span className="text-black fs-sm-14"> Select Your Investment Horizon in Years </span></label>
                    <Select className='bg-c mt-1' options={years} />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <label><span className="text-black fs-sm-14"> Select Your Risk Profile </span></label>
                    <Select className='bg-c mt-1' options={risk} />
                  </div>
                  <div className="col-lg-2 col-md-3 align-self-center mt-2">
                    <Link to="/dashboard/know-your-risk-profile"  >Know Your Risk Profile</Link>
                  </div>
                  <div className="col-lg-2 col-md-4 align-self-center mt-3 mb-3">
                    <a className="btn-custom" >Continue</a>
                  </div>
                </div>
               
                    <Tabs>
        <div className="row justify-content-center mt-4">
        <div className="col-md-4 mb-4">
        <TabList>
            <Tab>Equity</Tab>
            <Tab>Debt</Tab>
        </TabList>
    </div>
    </div>

       
        <div className="row">
                <div className="col-xl-10 col-lg-10 offset-lg-1 col-md-12">  
                   
                    <div className="card shadowc br-50">
                      <div className="border-bottom py-4 px-5 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 fw-bold text-red">Product Basket</h6>
                        <TabPanel>
                        <div className="bg-info rounded-circle px-2 py-1" >
            <FaInfo data-tooltip-id="app-title" className="text-white"/>                     
                    </div>                   
                    <ReactTooltip id="app-title" place="top" effect="solid" className='px-1' >
                    <div className="fs-13">

                            Suitable for those <br/> investors who wish <br/>to generate higher <br/>tax adjusted returns.
                        
                          </div>
                        </ReactTooltip>
                        </TabPanel>
                        <TabPanel>
                        <div className="bg-info rounded-circle px-2 py-1" >
            <FaInfo data-tooltip-id="app-title" className="text-white"/>                     
                    </div>                   
                    <ReactTooltip id="app-title" place="top" effect="solid" className='px-1' >
                    <div className="fs-13">

                    2.Suitable for those <br/> investors who wish <br/>to generate higher <br/>tax adjusted returns.
                        
                          </div>
                        </ReactTooltip>
                        </TabPanel>
                       
                      </div>
                      <div className="card-body" >
                        <div className="col-12 px-lg-4 table-responsive" >
                          <table class="table custom text-table-black">
                            <thead>
                              <tr>
                                <th scope="col" colSpan="2">Recommended Schemes</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className='text-black'>
                                <td className='wd-5rem'><img src={idfc} alt="" className='img-fluid min-w-3em' /></td>
                                <td className='wd-15rem'><a href='!#'>IDFC Tax Advantage (ELSS)
                                  Fund-Growth-Regular Plan  </a>
                                </td>
                              </tr>
                              <tr>
                                <td><img src={sunderam} alt="" className='img-fluid' /></td>
                                <td><a href='!#'>Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
                                  Regular Growth </a>
                                </td>
                              </tr>
                              <tr>
                                <td><img src={sunderam} alt="" className='img-fluid' /></td>
                                <td ><a href='!#'>Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
                                  Regular Growth </a>
                                </td>
                              </tr>
                              <tr>
                                <td><img src={sbi} alt="" className='img-fluid' /></td>
                                <td><a href='!#'>SBI Long Term Equity Fund-Regular
                                  Plan-Growth  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-12 mt-4 text-lg-end text-center mb-3">
                        <a className="btn-custom text-color" onClick={() => setLumpsumformShow(true)}>Continue</a>
                        </div>
                      </div>
                    </div>
                    </div>
                    </div>
                   
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    {/* End of Main Content */}
   
    <div class="px-2" role="alert">
      <p className="text-disclaimer text-black text-center fs-13 fs-sm-10">*Mutual Fund investments are subject to market risks, please read the scheme related documents carefully before investing.</p>
    </div>
    
    <LumpsumForm show={lumpsumformShow} setShow={setLumpsumformShow}/>
</>
)
}
export default GetRightScheme