import React ,{useState}from "react";
import { Link } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import success from "../assets/images/banklogo/";
import sunderam from "../assets/images/banklogo/Sundaram_Mutual_Fund.png";
import sbi from "../assets/images/banklogo/sbi.png";
import idfc from "../assets/images/banklogo/IDFC.png";
import Looking_for_SIP from "../components/looking-for-another-sip";
import SIP_Form from "../components/sip-form";
import Looking_for_Lumpsum from "../components/looking-for-another-lumpsum";
import LumpsumForm from "../components/lumpsum-form";
function Tax_Planning () {
  const [sipformShow,setSipformShow] = useState(false);
  const [lumpsumformShow,setLumpsumformShow] = useState(false);
    return(

        <>
        
        <div className="wrapper">
        <div className="px-lg-5 px-smc-1">
      
      {/* Page Heading */}
      <nav aria-label="breadcrumb">
          <ol className="breadcrumb ps-3">
            <li className="breadcrumb-item"><a href="home">Home</a></li>
            <li className="breadcrumb-item active">Tax Planning</li>
          </ol>
        </nav>
     
     <section>
     
     
         
        <Tabs>
        <div className="row justify-content-center pt-4 mb-4">
        <div className="col-md-6  table-responsive ">
        <TabList>
            <Tab>Lumpsum</Tab>
            <Tab>SIP</Tab>
        </TabList>
    </div>
    </div>

        <TabPanel>
        <div className="row">
                <div className="col-xl-10 col-lg-10 offset-lg-1 col-md-12">
                  <div className="card shadow-custom bg-gray">
                   
                    <div className="card-body custom-tab-bg">
                      <div className="col-12">
                        <div className="table-responsive">
                          <table class="table custom text-table-black text-start">
                            <thead>
                              <tr>
                                <th scope="col" colSpan="2" className='text-red text-start'>Recommended Schemes</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><img src={idfc} alt="" className='img-fluid min-w-3em' /></td>
                                <td className=' min-w-35em'><Link to='/dashboard/nav-single' >IDFC Tax Advantage (ELSS)
                                  Fund-Growth-Regular Plan  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td><img src={sunderam} alt="" className='img-fluid' /></td>
                                <td className='pt-4'><a href='!#'>Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
                                  Regular Growth </a>
                                </td>
                              </tr>
                              <tr>
                                <td><img src={sunderam} alt="" className='img-fluid' /></td>
                                <td className='pt-4'><a href='!#'>Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
                                  Regular Growth </a>
                                </td>
                              </tr>
                              <tr>
                                <td><img src={sbi} alt="" className='img-fluid' /></td>
                                <td className='pt-4'><a href='!#'>SBI Long Term Equity Fund-Regular
                                  Plan-Growth  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className='col-md-12 pb-3 fs-sm-10'>
                        <Looking_for_Lumpsum/>
                        </div>
                      </div>
                      <div className="col-12 mt-4 mb-3 text-lg-end text-center">
                      <a className="btn-custom text-color" onClick={() => setLumpsumformShow(true)}>Continue</a>
                       
                      </div>
                    </div>
                  </div>
                  {/* disclaimer */}
                  <div class="text-center pt-4 mb-0" role="alert">
                    <p className="text-disclaimer  fs-13 fs-sm-10 text-black">*Mutual Fund investments are subject to market risks, please read the scheme related documents carefully before investing.</p>
                  </div>
                </div>
              </div>
        </TabPanel>
        <TabPanel>
        <div className="row ">
                <div className=" col-lg-10 offset-lg-1 ">
                  <div className="card shadow-custom bg-light-red">
                  
                    <div className="card-body custom-tab-bg">
                      <div className="col-12">
                        <div className="table-responsive">
                          <table class="table custom text-table-black text-start">
                            <thead>
                              <tr>
                                <th scope="col" colSpan="2" className='text-red text-start'>Recommended Schemes</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><img src={sunderam} alt="" className='img-fluid min-w-3em' /></td>
                                <td className='pt-4 min-w-35em'><a href='!#'>Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
                                  Regular Growth </a>
                                </td>
                              </tr>
                              <tr>
                                <td><img src={sbi} alt="" className='img-fluid' /></td>
                                <td className='pt-4'><a href='!#'>SBI Long Term Equity Fund-Regular
                                  Plan-Growth  </a>
                                </td>
                              </tr>
                              <tr>
                                <td><img src={idfc} alt="" className='img-fluid' /></td>
                                <td className=''><a href='!#'>IDFC Tax Advantage (ELSS)
                                  Fund-Growth-Regular Plan   </a>
                                </td>
                              </tr>
                              <tr>
                                <td><img src={sunderam} alt="" className='img-fluid' /></td>
                                <td className='pt-4'> <a href='!#'>Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
                                  Regular Growth  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className='col-md-12 pb-3 fs-sm-10'>
                        <Looking_for_SIP/>
                        </div>
                      </div>
                      <div className="col-12 mt-4 mb-3 text-lg-end text-center">
                      <a className="btn-custom text-color" onClick={() => setSipformShow(true)}>Continue</a>
                       
                      </div>
                    </div>
                  </div>
                  {/* disclaimer */}
                  <div class="text-center pt-4 mb-0" role="alert">
                    <p className="text-disclaimer  fs-13 text-black">*Mutual Fund investments are subject to market risks, please read the scheme related documents carefully before investing.</p>
                  </div>
                </div>
              </div>
        </TabPanel>
     
    </Tabs>

  </section>
  <SIP_Form show={sipformShow} setShow={setSipformShow}/>
  <LumpsumForm show={lumpsumformShow} setShow={setLumpsumformShow}/>
        </div>
        </div>
        
        </>
    )
}
export default Tax_Planning