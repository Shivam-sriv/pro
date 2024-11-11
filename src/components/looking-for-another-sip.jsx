import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Cart_Delete from './delete-confirmation';
// import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
const Looking_for_SIP =()=>
{
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const folio = [
{ value: '1544545454', label: '1544545454' },
{ value: '55588888', label: '55588888' },
];
const date = [
{ value: '1', label: '1' },
{ value: '2', label: '2' },
{ value: '3', label: '3' },
{ value: '4', label: '4' },
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
const mandate = [
{ value: "--select--", label: "--select--" },
];
const amc = [
{ value: "--select--", label: "--select--" },
];
const scheme = [
{ value: "--select--", label: "--select--" },
];
const payment_mode = [
{ value: 'UPI', label: 'UPI' },
{ value: 'Net Banking', label: 'Net Banking' },
{ value: 'RTGS/NEFT', label: 'RTGS/NEFT' },
{ value: 'Debit Mandate', label: 'Debit Mandate' },
];
const bankname = [
{ value: "--select--", label: "--select--" },
];
return(
<>
<a href='javascript:void(0);' className="text-lg-end text-center" onClick={handleShow}>Looking for another scheme?</a>
<Modal show={show} onHide={handleClose} centered size='lg' scrollable={true} >
  <Modal.Header className="bg-light-red" closeButton >
  </Modal.Header>
  <Modal.Body className='bg-light-red px-4'>
    <section className="sip ">
      <form>
        <div className="row">
          <div className='col-md-5 col-lg-5'>
            <div className="form-group ">
              <label for="select-p" className='text-label'>Select Profile<span className="text-danger">*</span></label><br />
              <Select className='bg-c' options={profile} />
            </div>
          </div>
          <div className='col-md-7 col-lg-7'>
            <div className='pt-4 mt-3'>
              <input className=" input-text" id="equity" type="radio" name="asset" value="Equity" />
              <label htmlFor="equity" className="ps-2">Existing Scheme</label>
              <input className="input-text ms-3" id="debt" type="radio" name="asset" value="DEBT" />
              <label htmlFor="debt" className="ps-2">New Scheme</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className='col-md-6 col-lg-4 '>
            <div className="form-group">
              <label for="amc" className='text-label'>Select AMC<span className="text-danger">*</span></label><br />
              <Select className='bg-c' options={amc} />
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className="form-group ">
              <label for="folio" className='text-label'>Select Folio<span className="text-danger">*</span></label><br />
              <Select className='bg-c' options={folio} />
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className="form-group ">
              <label for="Scheme" className='text-label'>Select  Scheme<span className="text-danger">*</span></label><br />
              <Select className='bg-c' options={scheme} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-lg-4'>
            <div className="form-group ">
              <label className="text-label" for="amount">Enter Amount<span className="text-danger">*</span></label>
              <input type="text" className="form-control bg-c" name='amount' placeholder='Enter Amount' />
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className="form-group ">
              <label for="sipdate" className='lb  text-label'>SIP Date<span className="text-danger">*</span></label><br />
              <Select className='bg-c' options={date} />
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className="form-group ">
              <label className="text-label" for="sipf">SIP From<span className="text-danger">*</span></label><br />
            <input type='month' className='bg-c px-2 py-2 form-control'/>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-lg-4'>
            <div className="form-group out">
              <label className="text-label" for="sipend">SIP To<span className="text-danger">*</span></label><br />
              <input type='month' className='bg-c px-2 py-2 form-control'/>
            </div>
          </div>
          <div className='col-md-6 col-lg-3 '>
            <input className="input-text mt-5" id="perpetual" type="checkbox" name="perpetual" value="Y" defaultChecked />
            <input type="hidden" id="perpetual_val" name="perpetual_val" />
            <label htmlFor="perpetual" className="ml-2">
            Perpetual
            <span className="text-danger">*</span>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <a href="javascript:void(0)" className="btn btn-danger float-right my-4" >+ Add</a>
          </div>
        </div>
        <div className="col-md-12 px-0" id="tbt">
          <div className="table-responsive">
            <table className="table custom bg-white mt-5 mb-3">
              <tr>
                <th>Profile</th>
                <th>Scheme Name</th>
                <th>Folio Number</th>
                <th>SIP From</th>
                <th>SIP To</th>
                <th>Amount</th>
                <th></th>
              </tr>
              <tr>
                <td>Profile</td>
                <td>Scheme Name</td>
                <td>Folio Number</td>
                <td>20/10/2021</td>
                <td>20/11/2021</td>
                <td>3500</td>
                <td>
                  <a href='#' data-target="#confirm" data-toggle="modal" >
                    <Cart_Delete/>
                  </a>
                </td>
              </tr>
            </table>
          </div>
          <div className="row">
            <div className='col-md-6 col-lg-5'>
              <div className="form-group ">
                <label for="mandate" className='lb text-label'>Select Mandate<span className="text-danger">*</span></label><br />
                <Select className='bg-c' options={mandate} />
              </div>
              <Link to="/dashboard/bank-and-mandate" className='text-red fs-13 underline'>Create Mandate</Link>
            </div>
          </div>
        </div>
      </form>
    </section>
  </Modal.Body>
  <Modal.Footer className='border-0 bg-light-red'>
    <button data-dismiss="modal" className="btn-custom" type="button">Order Now</button>
  </Modal.Footer>
</Modal>
</>
)
}
export default Looking_for_SIP