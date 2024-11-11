import React, {useState} from "react";
import Table from 'react-bootstrap/Table';
import idfc from "../assets/images/banklogo/IDFC.png";
import icon from "../assets/images/nfpicon.png";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import NfoInvestNow from "../components/nfo-investnow";

const NofDetail = () => {
  const [nfcoinvestShow,setNfcoinvestShowShow] = useState(false)
  return (
  <>
    <div className="wrapper nfo-detail">
        <div className="report px-lg-5 ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="home">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                NFO Detail
              </li>
            </ol>
          </nav>
        </div>
       
       <section className="nfo-detail pt-3">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-10 col-12">
            <div className="p-4 shadow-custom text-left m-sm-auto">
              <div className="table-responsive">
        <Table >
      <thead className="align-baseline">
      <tr>
      <td className='px-lg-4 wd-7rem'><img src={idfc} alt="" className='img-fluid min-w-3em' /></td>
      <td className='px-lg-4 wd-20rem'>IDFC Tax Advantage (ELSS)
        Fund-Growth-Regular Plan  
      </td>
      <td className=' wd-15rem'>Very High risk - Other - Index</td>
    </tr>
      </thead>
    </Table>
    </div>
    <div className="row justify-content-center">
    <div className="col-md-8 py-4 table-responsive">
    <Table>
      <tbody>
      <tr className="text-label">
      <td className="wd-8rem">Launch date
      </td>
      <td className="wd-11rem">End Date
      </td>
      <td className="wd-11rem">Allotment date
      </td>
      <td>NAV
      </td>
    </tr>
    <tr>
      <td className='pt-3'>19th Aug 2022</td>
      <td className='pt-3'>26th Aug 2022  </td>
      <td className='pt-3'>2nd Sept 2022</td>
      <td className='pt-3'>₹10 </td>
    </tr>
      </tbody>
    </Table>
    </div>
    </div>
    <div className="row justify-content-center pt-2">
    <div className="col-md-3 pb-3">
    <h6 className="py-2 nfo-alert "><img src={icon} alt="" /><span className="ps-4">NFO will close today.</span></h6>
    </div>
    </div>
     
     <div className="nfo-accordion">
     <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Fund house & investment objective</Accordion.Header>
        <Accordion.Body>
         <div className="row text-start">
          <div className="col-md-6 ps-4">
          <img src={idfc} alt="" className='img-fluid' />
            <span className="text-black fw-500 ps-4">  IDFC Tax Advantage (ELSS) Fund-Growth-Regular Plan  </span>
          </div>
         </div>
         <div className="row pb-3 text-start py-4">
                            <div className="col-md-6 border-right ps-4 pb-3">
                              <div className="row">
                                <div className="col-md-6 text-black">
                                  <h6>Rank (Total assets) </h6>
                                </div>
                                <div className="col-md-6">
                                  <h6 className="text-label"> #2 India </h6>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6 text-black">
                                  <h6 className="text-label">Total AUM</h6>
                                </div>
                                <div className="col-md-6">
                                  <h6 className="text-label">700 cr </h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-6 text-black">
                                  <h6 >Date of Incorportion</h6>
                                </div>
                                <div className="col-md-6">
                                  <h6 className="text-label">26th Aug 2022 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 text-justify pb-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                          </div>
                          <div className="col-md-12 text-justify">
                            <p className="text-black fw-500 fs-15 pb-1 mb-0">About IDFC Tax Advantage (ELSS) Fund-Growth-Regular Plan </p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
                          </div>
                          <div className="col-md-12 text-justify">
                            <p className="text-black fw-500 fs-15 pb-1 mb-0">Investment Objective </p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
                          </div>
                          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Minimum Investment Amounts</Accordion.Header>
        <Accordion.Body>
        <div className="row pb-3 text-start py-4">
        <div className="col-md-6 border-right ps-4 pb-3">
                              <div className="row">
                                <div className="col-md-6 col-10 text-black">
                                  <h6>Min. for 1st investment </h6>
                                </div>
                                <div className="col-md-6 col-2">
                                  <h6>  ₹500 </h6>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6 col-10 text-black">
                                  <h6>Min. for 2nd investment</h6>
                                </div>
                                <div className="col-md-6 col-2">
                                  <h6> ₹100</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-6 col-10 text-black">
                                  <h6 className="ps-3">Min. for SIP</h6>
                                </div>
                                <div className="col-md-6 col-2">
                                  <h6> ₹100 </h6>
                                </div>
                              </div>
                            </div>
                            </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Exit Loads & Tax Implications</Accordion.Header>
        <Accordion.Body>
        <div className="row ps-lg-4">
        <div className="col-md-11  text-left ">
          <div className="col-md-12 text-justify pb-2">
            <p className="text-black fw-500 fs-15 mb-0 pb-2">Expence ratio :0.11%</p>
            <p className="mb-0 pb-2">Inclusive of GST</p>
          </div>
          <div className="col-md-12 text-justify pb-2">
            <p className="text-black fw-500 fs-15 mb-0 pb-2">Exit load</p>
             <p className="mb-0 pb-2">Exit load of 1% for investments beyond 10% if redeemed before 12 months</p>
          </div>
          <div className="col-md-12 text-justify pb-2">
            <p className="text-black fw-500 fs-15 mb-0 pb-2">Stamp Duty</p>
             <p className="mb-0 pb-2"> before 12 months</p>
          </div>
          <div className="col-md-12 text-justify pb-2">
            <p className="text-black fw-500 fs-15 mb-0 pb-2">Tax Implication</p>
             <p className="mb-0 pb-2"> long established fact that a reader will be distracted</p>
          </div>
        </div>
      </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
     </div>

  <div className="col-md-12 py-4 d-flex justify-content-between mt-5">
  <button className='btn-custom fs-sm-12'>Add to Cart</button>
  <Link href="javascript:void(0);" onClick={() => setNfcoinvestShowShow(true)} className='btn-custom fs-sm-12' type="button">Invest Now</Link>
</div>
</div>
        </div>
      </div>
      </div>
       </section>
       <NfoInvestNow  show={nfcoinvestShow} setShow={setNfcoinvestShowShow} />
        </div>
  </>

  )
}
export default NofDetail