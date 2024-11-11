import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import success from "../assets/images/others/successfully.png";
const Invest_Lumpsum =({show, setShow })=> {
const [Moi, setMoi] = useState("d-block");
const [Lump, setLump] = useState("d-none");
const [Confirmp, setConfirmp] = useState("d-none");
const [Purchase, setPurchase] = useState("d-none");
const moi = () => {
setLump("d-block")
setMoi("d-none")
}
const lumpsum = () => {
setConfirmp("d-block")
setLump("d-none")
}
const confirmp = () => {
setPurchase("d-block")
setConfirmp("d-none")
}
const edit = () => {
setConfirmp("d-none")
setLump("d-block")
}
const modeofinvest = [
{ value: "Lumpsum", label: "Lumpsum" },
{ value: "SIP", label: "SIP" },
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
return(
<>
<div className="">
  <Modal show={show} onHide={() =>
    setShow(false)} className="animate__animated animate__zoomIn animate__fast invest-red" centered >
    {/* =========Mode of Investment======== */}
    <div className={`${Moi}`}>
      <Modal.Header className="bg-light-red" closeButton >
      </Modal.Header>
      <Modal.Body className="bg-light-red">
        <form>
          <div className='row'>
            <div className='col-md-12'>
              <div className="form-group pmd-textfield pmd-textfield-floating-label">
                <label className="control-label lb " for="email">Mode Of Investment<span className="text-danger">*</span></label>
                <Select className=' bg-c' options={modeofinvest} />
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className='border-0 bg-light-red'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);" onClick={moi} >Continue</a>
      </Modal.Footer>
    </div>
    {/* =========lumpusum======== */}
    <div className={`${Lump}`}>
      <Modal.Header className="bg-light-red" closeButton >
        <Modal.Title className='fs-5'>Investment Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light-red">
        <form>
          <div className="col mb-3 ">
            <label htmlFor="Profile" className='text-label' >Select Profile <span className='text-danger'>*</span></label>
            <Select className='bg-c' options={profile} />
          </div>
        </form>
        <div className='cartitemwith'>
          <div className='row p-4'>
            <div className='col-md-12  red '>SBI Long Term Equity Fund-Regular
              Plan-Growth 
            </div>
          </div>
          <div className="col bg-white py-3 px-4">
            <label htmlFor="Profile" className='fs-14' >Select Folio <span className='text-danger'>*</span></label>
            <Select className='border-pop' options={folio} />
          </div>
          <div className="col mb-3 bg-white pb-4 px-4 lastin">
            <label htmlFor="amount" className='fs-14' >Enter Amount <span className='text-danger'>*</span></label>
            <input type="text" className="form-control border-pop " name="amount" placeholder='Enter Amount' />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className='border-0 bg-light-red'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);" onClick={lumpsum} >Continue</a>
      </Modal.Footer>
    </div>
    {/* =========SIP Cart======== */}
    <div className={`${Confirmp}`}>
      <Modal.Header className="bg-light-red" closeButton >
        <Modal.Title  className='fs-5'>Confirm Purchase</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light-red">
        <div className="col mb-3 border-bottom">
          <h6 className='text-red'>Shivam Shrivastav</h6>
          <p>Mode of Holding :  Single <a href="#" className='p-4 ml-5' onClick={edit}>Edit</a></p>
        </div>
        <p className='text-red'>Axis Long Term Equity Fund-Regular-Growth</p>
        <table className='table'>
          <tr className='text-center'>
            <td >Folio  </td>
            :
            <td >124564</td>
          </tr>
          <tr className='text-center'>
            <td >Amount  </td>
            :
            <td >50,000</td>
          </tr>
        </table>
        <p className='text-center pt-5'><b>Total  :  55,55882</b></p>
      </Modal.Body>
      <Modal.Footer className='border-0 bg-light-red'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);" onClick={confirmp} >Continue</a>
      </Modal.Footer>
    </div>
    {/* =========SIP Confirmation Purchase======== */}
    <div className={`${Purchase}`}>
      <Modal.Header className="bg-light-red" closeButton >
        <Modal.Title  className='fs-5'>Purchase</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light-red">
        <form className='px-2'>
          <p className='text-red'>Investment Total : 5000.00</p>
          <div className="col mb-3 ">
            <label htmlFor="payment" className='text-label' >Select Payment Mode <span className='text-danger'>*</span></label>
            <Select className='bg-c' options={payment} />
          </div>
          <div className="col mb-3 ">
            <label htmlFor="Profile" className='text-label' >Select Bank <span className='text-danger'>*</span></label>
            <Select className='bg-c' options={profile} />
          </div>
          <div className="col mb-3 ">
            <label htmlFor="rtgs" className='text-label' >RTGS/NEFT Code <span className='text-danger'>*</span></label>
            <input type="text" className="form-control bg-c" name="rtgs" placeholder='' />
          </div>
          <div className="col mb-3 ">
            <label htmlFor="date" className='text-label' >Date <span className='text-danger'>*</span></label>
            <input type="date" className="form-control bg-c" name="date" />
          </div>
          <div className="col">
            <input className="input-text " id="immediatePay" type="radio" name="payType" value="Y" />
            <label htmlFor="immediatePay" className="ps-2">Immediate Payment</label>
            <input className=" input-text ms-3" id="emailLink" type="radio" name="payType" value="N" />
            <label htmlFor="emailLink" className="ps-2">Link On Email</label>
          </div>
          <div className="col mt-3">
            <ul className="fs-12 mb-0 lst-none ps-0">
              <li>
                <h6 className="text-red fs-13">Note :-</h6>
              </li>
              <li className="text-gray"> <span className="text-red">*</span>Beneficiary Virtual Account Number <span className="text-black">- (NSEMF2213995012944559)</span></li>
              <li className="text-gray"> <span className="text-red">*</span>Beneficiary Account Name <span className="text-black">- NSE Clearing – New Mutual Fund Platform</span></li>
              <li className="text-gray"><span className="text-red">*</span>IFSC code<span className="text-black">- HDFC0000060</span></li>
              <li className="text-gray"><span className="text-red">*</span>Bank Name<span className="text-black">-  HDFC Bank Ltd</span></li>
              <li className="text-gray"><span className="text-red">*</span>Branch Name<span className="text-black">- Fort, Mumbai</span></li>
            </ul>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className='border-0 bg-light-red'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);"  >Order</a>
      </Modal.Footer>
    </div>
    {/* =========SIP Success======== */}
    {/* 
    <div className={`${Successp}`}>
      <Modal.Body className="bg-light-red">
        <div className="py-0">
          <div className="text-center">
            <img className="img-fluid" src={success} alt="" />
            <h6 className="success-c fw-500 py-3 fs-19 fs-sm-15">Successful Transaction with
              Following Details
            </h6>
          </div>
          <table className="table mx-3 fs-sm-14">
            <tr>
              <td>Unique Number </td>
              <td>:</td>
              <td className='ps-3'>12345678</td>
            </tr>
            <tr>
              <td>Trxn Number </td>
              <td>:</td>
              <td  className='ps-3'>12346195</td>
            </tr>
            <tr>
              <td>Fund</td>
              <td>:</td>
              <td  className='ps-3'>Axis Mutual Fund</td>
            </tr>
            <tr>
              <td>Folio Number </td>
              <td>:</td>
              <td  className='ps-3'>12345678</td>
            </tr>
            <tr>
              <td>Amount   </td>
              <td>:</td>
              <td  className='ps-3'>1,000</td>
            </tr>
            <tr>
              <td>Status   </td>
              <td>:</td>
              <td  className='ps-3'>Successful</td>
            </tr>
            <tr>
              <td>Scheme Name </td>
              <td>:</td>
              <td  className='ps-3'>Axis Arbitrage Fund - Regular Growth</td>
            </tr>
          </table>
          <hr />
          <p className="text-black fs-13 text-center">
            <span className="text-red  fw-500 fs-16">Note:</span>  Authorization link has been sent on your registered mail id and mobile number.The Link shall remain active for the next 48 hours.Kindly authorize.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className='border-0 bg-light-red'>
      </Modal.Footer>
    </div>
    */}
  </Modal>
</div>
</>
)
}
export default Invest_Lumpsum