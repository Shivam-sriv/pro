import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import success from "../assets/images/others/successfully.png";
const Invest_Sip =({show, setShow })=> {
const [Moi, setMoi] = useState("block");
const [SIP, setSIP] = useState("d-none");
const [Cart, setCart] = useState("d-none");
const [Confirmp, setConfirmp] = useState("d-none");
const [Successp, setSuccessp] = useState("d-none");
const moi = () => {
setSIP("d-block")
setMoi("d-none")
}
const sip = () => {
setCart("d-block")
setSIP("d-none")
}
const cart = () => {
setCart("d-block")
setSIP("d-none")
}
const confirmp = () => {
setConfirmp("d-block")
setCart("d-none")
}
const edit = () => {
setConfirmp("d-none")
setCart("d-block")
}
const successp = () => {
setConfirmp("d-none")
setSuccessp("d-block")
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
    setShow(false)}   className="animate__animated animate__zoomIn animate__fast invest-gray" centered >
    <div className={`${Moi}`}>
      <Modal.Header className="bg-gray" closeButton >
      </Modal.Header>
      <Modal.Body className="bg-gray">
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
      <Modal.Footer className='border-0 bg-gray'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);" onClick={moi} >Continue</a>
      </Modal.Footer>
    </div>
    {/* =========SIP======== */}
    <div className={`${SIP}`}>
      <Modal.Header className="bg-gray" closeButton >
        <Modal.Title className='fs-5'>SIP</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-gray">
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
            <a href="/prodigyprodesign/dashboard/bank-and-mandate" className="text-red fs-13">Create Mandate</a>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className='border-0 bg-gray'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);" onClick={cart} >Continue</a>
      </Modal.Footer>
    </div>
    {/* =========SIP Cart======== */}
    <div className={`${Cart}`}>
      <Modal.Header className="bg-gray" closeButton >
        <Modal.Title  className='fs-5'>SIP Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-gray">
        <div className='cartitemwith bg-light-red'>
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
            <p className=' text-gray fs-sm-10'>01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,<br/>21,22,23,24,25,26.27,28</p>
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
      <Modal.Footer className='border-0 bg-gray'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);" onClick={confirmp} >Continue</a>
      </Modal.Footer>
    </div>
    {/* =========SIP Confirmation Purchase======== */}
    <div className={`${Confirmp}`}>
      <Modal.Header className="bg-gray" closeButton >
        <Modal.Title  className='fs-5'>SIP Confirmation Purchase</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-gray">
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
      <Modal.Footer className='border-0 bg-gray'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);" onClick={successp} >Order</a>
      </Modal.Footer>
    </div>
    {/* =========SIP Success======== */}
    <div className={`${Successp}`}>
      <Modal.Body className="bg-gray">
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
      <Modal.Footer className='border-0 bg-gray'>
      </Modal.Footer>
    </div>
  </Modal>
</div>
</>
)
}
export default Invest_Sip