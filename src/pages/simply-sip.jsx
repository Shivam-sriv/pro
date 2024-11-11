import React ,{useState}from "react";
import SIP_Form from "../components/sip-form";
import sunderam from "../assets/images/banklogo/Sundaram_Mutual_Fund.png";
import sbi from "../assets/images/banklogo/sbi.png";
import idfc from "../assets/images/banklogo/IDFC.png";
import Select from 'react-select';
import { Link } from "react-router-dom";
const SimplySIP =()=>
{
    const [sipformShow,setSipformShow] = useState(false);
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
    return(

        <>
        <div className="wrapper">
        <div className="px-lg-5 px-smc-1">
      
      {/* Page Heading */}
      <nav aria-label="breadcrumb">
          <ol className="breadcrumb ps-3">
            <li className="breadcrumb-item"><Link to="home">Home</Link></li>
            <li className="breadcrumb-item active">Simply Sip</li>
          </ol>
        </nav>
     
     <section>
     <div className="row">
                <div className=" col-lg-10 offset-lg-1 pe-5">
                <div className="col-md-7 col-lg-5 pb-4 ">
                        <label className='text-label mb-2'>Select Anchoring (Investment Horizon)</label>
                        <Select className='single-drop ' options={years} />
                      </div>
                  <div className="card shadow-custom bg-light-red">
                  
                    <div className="card-body custom-tab-bg pb-4">
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
                                <td className='pt-4 min-w-35em'><Link to='/dashboard/nav-single'>Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
                                  Regular Growth </Link>
                                </td>
                              </tr>
                              <tr>
                                <td><img src={sbi} alt="" className='img-fluid' /></td>
                                <td className='pt-4'><Link to='/dashboard/nav-single'>SBI Long Term Equity Fund-Regular
                                  Plan-Growth  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td><img src={idfc} alt="" className='img-fluid' /></td>
                                <td className=''><Link to='/dashboard/nav-single'>IDFC Tax Advantage (ELSS)
                                  Fund-Growth-Regular Plan   </Link>
                                </td>
                              </tr>
                              <tr>
                                <td><img src={sunderam} alt="" className='img-fluid' /></td>
                                <td className='pt-4'> <Link to='/dashboard/nav-single'>Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
                                  Regular Growth  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                      </div>
                      <div className="col-12 mt-4  text-lg-end text-center">
                      <Link className="btn-custom text-color" onClick={() => setSipformShow(true)}>Continue</Link>
                      </div>
                    </div>
                  </div>
                  {/* disclaimer */}
                  <div class="text-center pt-4 mb-0" role="alert">
                    <p className="text-disclaimer  fs-13 text-black">*Mutual Fund investments are subject to market risks, please read the scheme related documents carefully before investing.</p>
                  </div>
                </div>
              </div>



     </section>
        
        </div>
        </div>
        <SIP_Form show={sipformShow} setShow={setSipformShow}/>
        </>
    )
}
export default SimplySIP