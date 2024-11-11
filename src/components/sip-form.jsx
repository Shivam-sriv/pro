import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import success from "../assets/images/others/successfully.png";
import sunderam from "../assets/images/banklogo/Sundaram_Mutual_Fund.png";
import sbi from "../assets/images/banklogo/sbi.png";
import idfc from "../assets/images/banklogo/IDFC.png";
import Cart_Delete from './delete-confirmation';
const SIP_Form =({ show, setShow })=> {
const [Cart, setCart] = useState("d-block");
const [SIP, setSIP] = useState("d-none");
const [Sipcart, setSipcart] = useState("d-none");
const [Confirmp, setConfirmp] = useState("d-none");
const [Successp, setSuccessp] = useState("d-none");
const [Detail, setDetail] = useState("d-none");
const cart = () => {
setSIP("d-block")
setCart("d-none")
}
const sip = () => {
setDetail("d-block")
setSIP("d-none")
}
const detail =()=>
{
setSipcart("d-block")
setDetail("d-none")
}
const sipcart = () => {
setConfirmp("d-block")
setSipcart("d-none")
}
const confirmp = () => {
setSuccessp("d-block")
setConfirmp("d-none")
}
const edit = () => {
setConfirmp("d-none")
setSipcart("d-block")
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
const selectperiod = [
{ value: '12', label: '12' },
{ value: '24', label: '24' },
{ value: '36', label: '36' },
{ value: '48', label: '48' },
{ value: '60', label: '60' },
{ value: '72', label: '72' },
{ value: '84', label: '84' },
{ value: '96', label: '96' },
{ value: '108', label: '108' },
{ value: '120', label: '120' },
];
return(
<>
<div className="">
  <Modal show={show} onHide={() =>
    setShow(false)}  className="animate__animated animate__zoomIn animate__fast invest-sip" centered >
    {/* =========Mode of Investment======== */}
    <div className={`${Cart}`}>
      <Modal.Header className="bg-light-red" closeButton >
        <Modal.Title className='fs-5'>My Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light-red">
        <h6 className='text-black fs-16'>Schemes Name</h6>
        <div class="col-md-12">
          <div className=' d-flex justify-content-between shadowcart mb-2 p-3'>
            <div className=''><img src={idfc} alt="" className='img-fluid' /></div>
            <div className='text-center px-2'><a href='!#'>IDFC Tax Advantage (ELSS)
              Fund-Growth-Regular Plan </a>
            </div>
            <div className=' '>
              <Cart_Delete/>
            </div>
          </div>
          <div className=' d-flex justify-content-between shadowcart mb-2 p-3'>
            <div className=''><img src={sunderam} alt="" className='img-fluid' /></div>
            <div className='text-center px-2'><a href='!#'>Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
              Regular Growth </a>
            </div>
            <div className=''>
              <Cart_Delete/>
            </div>
          </div>
          <div className=' d-flex justify-content-between shadowcart mb-2 p-3'>
            <div className=''><img src={sunderam} alt="" className='img-fluid' /></div>
            <div className='text-center px-2'><a href='!#'>Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
              Regular Growth </a>
            </div>
            <div className=''>
              <Cart_Delete/>
            </div>
          </div>
          <div className=' d-flex justify-content-between shadowcart mb-2 p-3'>
            <div className=''><img src={sbi} alt="" className='img-fluid' /></div>
            <div className='text-center px-2'><a href='!#'>SBI Long Term Equity Fund-Regular
              Plan-Growth  </a>
            </div>
            <div className=' '>
              <Cart_Delete/>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className='border-0 bg-light-red'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);" onClick={cart} >Continue</a>
      </Modal.Footer>
    </div>
    {/* =========SIP======== */}
    <div className={`${SIP}`}>
      <Modal.Header className="bg-light-red" closeButton >
        <Modal.Title className='fs-5'>SIP</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light-red">
        <form>
          <div className="col mb-3 ">
            <label htmlFor="Profile" className='text-label' >Select Profile <span className='text-danger'>*</span></label>
            <Select className='bg-c' options={profile} />
          </div>
          <div className="col mb-3 ">
            <label htmlFor="Profile" className='text-label' >Select Mandate <span className='text-danger'>*</span></label>
            <Select className='bg-c' options={profile} />
          </div>
          <div className="col mb-3 ">
            <Link to="/dashboard/bank-and-mandate" className='text-red fs-13'>Create Mandate</Link>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className='border-0 bg-light-red'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);" onClick={sip} >Continue</a>
      </Modal.Footer>
    </div>
    {/* =========investment details======== */}
    <div className={`${Detail}`}>
      <Modal.Header className="bg-light-red" closeButton >
        <Modal.Title className='fs-5'>Investment Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light-red">
        <div className="col-md-12">
          <p><span className='text-red fw-500'>New Folio :</span>  ‘First Installment shall be deducted on current date & subsequent installments shall be deducted on selected SIP date.’
            <br/> <br/><span className='text-red fw-500'>Existing Folio : </span>  ‘Your SIP installments shall be deducted on the selected SIP date.’
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className='border-0 bg-light-red'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);" onClick={detail} >OK</a>
      </Modal.Footer>
    </div>
    {/* =========SIP Cart======== */}
    <div className={`${Sipcart}`}>
      <Modal.Header className="bg-light-red" closeButton >
        <Modal.Title  className='fs-5'>SIP Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light-red">
        <div className='cartitemwith bg-gray'>
          <div className='row p-4'>
            <div className='col-md-12  red '>SBI Long Term Equity Fund-Regular
              Plan-Growth
            </div>
          </div>
          <div className="col bg-white py-1 px-4">
            <label htmlFor="Profile" className='fs-14' >Select Folio <span className='text-danger'>*</span></label>
            <Select className='border-pop' options={folio} />
          </div>
          <div className="col  bg-white pb-1 px-4">
            <label htmlFor="amount" className='fs-14' >Enter Amount <span className='text-danger'>*</span></label>
            <input type="text" className="form-control border-pop" name="amount" placeholder='Enter Amount' />
          </div>
          <div className="col bg-white py-1 px-4">
            <label htmlFor="date" className='fs-14' >Select Date <span className='text-danger'>*</span></label>
            <input type="date" className='form-control border-pop'/>
          </div>
          <div className="col bg-white py-1 px-4">
            <label htmlFor="date" className='fs-14' >Select Period (Months) <span className='text-danger'>*</span></label>
            <Select className='border-pop' options={selectperiod} />
          </div>
          <div className="col bg-white py-1 px-4">
            <label htmlFor="date" className='fs-14' >Dates Available </label>
            <p className='text-gray fs-sm-10'>01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,<br/>21,22,23,24,25,26.27,28</p>
          </div>
          <div className='col p-2'>
            <input className="input-text " id="perpetual" type="checkbox" name="perpetual" value="Y" defaultChecked />
            <input type="hidden" id="perpetual_val" name="perpetual_val" />
            <label htmlFor="perpetual" className="ms-2">
              Perpetual
              <spna className="text-danger">*</spna>
            </label>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className='border-0 bg-light-red'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);" onClick={sipcart} >Continue</a>
      </Modal.Footer>
    </div>
    {/* =========SIP Confirmation Purchase======== */}
    <div className={`${Confirmp}`}>
      <Modal.Header className="bg-light-red" closeButton >
        <Modal.Title  className='fs-5'>SIP Confirmation Purchase</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light-red">
        <div className="col mb-3 border-bottom">
          <h6 className='text-red'>Shivam Shrivastav</h6>
          <p>Mode of Holding :  Single <a href="#" className='p-4 ml-5' onClick={edit}>Edit</a></p>
        </div>
        <p className='text-red'>Axis Long Term Equity Fund-Regular-Growth</p>
        <table className='table'>
          <tr className='text-center'>
            <td>Folio </td>
            <td> :</td>
            <td >124564</td>
          </tr>
          <tr className='text-center'>
            <td>Amount  </td>
            <td> :</td>
            <td >50,000</td>
          </tr>
          <tr className='text-center'>
            <td >SIP From  </td>
            <td> :</td>
            <td >11-sep-2022</td>
          </tr>
          <tr className='text-center'>
            <td >SIP To </td>
            <td>   :</td>
            <td>31-dec-2099</td>
          </tr>
          <tr className='text-center'>
            <td>SIP Date </td>
            <td> :</td>
            <td>11</td>
          </tr>
        </table>
        <p className='text-center pt-5'><b>Total  :  55,55882</b></p>
      </Modal.Body>
      <Modal.Footer className='border-0 bg-light-red'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);" onClick={confirmp} >Order</a>
      </Modal.Footer>
    </div>
    {/* =========SIP Success======== */}
    <div className={`${Successp}`}>
      <Modal.Body className="bg-light-red br-15">
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
  </Modal>
</div>
</>
)
}
export default SIP_Form