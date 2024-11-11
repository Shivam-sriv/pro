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
function NfoLive () {
  const [sipformShow,setSipformShow] = useState(false);
  const [lumpsumformShow,setLumpsumformShow] = useState(false);
    return(

        <>
        
        <div className="wrapper nfo-live-s">
        <div className="px-lg-5 px-3 pe-5">
      
      {/* Page Heading */}
      <nav aria-label="breadcrumb">
          <ol className="breadcrumb ps-3">
            <li className="breadcrumb-item"><a href="home">Home</a></li>
            <li className="breadcrumb-item active">NFO Live</li>
          </ol>
        </nav>
     
     <section>
     
     
         
        <Tabs>
        <div className="row justify-content-center pt-4 mb-4">
        <div className="col-md-6">
        <TabList>
            <Tab>Equity</Tab>
            <Tab>Debt</Tab>
        </TabList>
    </div>
    </div>

        <TabPanel>
        <div className="row justify-content-center">
                <div className="col-xl-9 col-lg-9 col-md-12">
                  <div className="card shadow-custom border-0">
                    <div className="card-body custom-tab-bg">
                      <div className="col-12">
                        <div className="table-responsive">
                          <table class="table custom text-table-black text-start">
                            <tbody>
                              <tr>
                                <td className="wd-6rem"><img src={idfc} alt="" className='img-fluid min-w-3em' /></td>
                                <td className='wd-15rem'><Link to='/dashboard/nfo-detail'className="dividend-popup" >IDFC Tax Advantage (ELSS)
                                  Fund-Growth-Regular Plan  </Link>
                                </td>
                                <td><a href="#" class="btn-invest"> Invest</a></td>
                              </tr>
                              <tr>
                                <td><img src={sunderam} alt="" className='img-fluid' /></td>
                                <td className='pt-4'><Link to='/dashboard/nfo-detail' className="dividend-popup">Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
                                  Regular Growth </Link>
                                </td>
                                <td><a href="#" class="btn-invest"> Invest</a></td>
                              </tr>
                              <tr>
                                <td><img src={sunderam} alt="" className='img-fluid' /></td>
                                <td className='pt-4'><Link to='/dashboard/nfo-detail' className="dividend-popup">Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
                                  Regular Growth </Link>
                                </td>
                                <td><a href="#" class="btn-invest"> Invest</a></td>
                              </tr>
                              <tr>
                                <td><img src={sbi} alt="" className='img-fluid' /></td>
                                <td className='pt-4'><Link to='/dashboard/nfo-detail' className="dividend-popup">SBI Long Term Equity Fund-Regular
                                  Plan-Growth  </Link>
                                </td>
                                <td><a href="#" class="btn-invest text-white"> Invest</a></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </TabPanel>
        <TabPanel>
        <div className="row justify-content-center">
                <div className=" col-lg-9">
                  <div className="card shadow-custom border-0">
                  
                    <div className="card-body custom-tab-bg">
                      <div className="col-12">
                        <div className="table-responsive">
                          <table class="table custom text-table-black text-start">
                            <tbody>
                              <tr>
                                <td className="wd-6rem"><img src={sunderam} alt="" className='img-fluid min-w-3em' /></td>
                                <td className='pt-4 wd-15rem'><Link to='!#' className="dividend-popup">Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
                                  Regular Growth </Link>
                                </td>
                                <td><Link to="#" class="btn-invest"> Invest</Link></td>
                              </tr>
                              <tr>
                                <td><img src={sbi} alt="" className='img-fluid' /></td>
                                <td className='pt-4'><Link to='!#' className="dividend-popup">SBI Long Term Equity Fund-Regular
                                  Plan-Growth  </Link>
                                </td>
                                <td><Link to="#" class="btn-invest"> Invest</Link></td>
                              </tr>
                              <tr>
                                <td><img src={idfc} alt="" className='img-fluid' /></td>
                                <td className=''><Link to='!#' className="dividend-popup">IDFC Tax Advantage (ELSS)
                                  Fund-Growth-Regular Plan   </Link>
                                </td>
                                <td><Link to="#" class="btn-invest"> Invest</Link></td>
                              </tr>
                              <tr>
                                <td><img src={sunderam} alt="" className='img-fluid' /></td>
                                <td className='pt-4'> <Link to='!#' className="dividend-popup">Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
                                  Regular Growth  </Link>
                                </td>
                                <td><Link href="#" class="btn-invest"> Invest</Link></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
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
export default NfoLive