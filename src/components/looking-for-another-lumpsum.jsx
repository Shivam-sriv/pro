import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import { FaTrash } from "react-icons/fa";
import Cart_Delete from './delete-confirmation';
// import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
const Looking_for_Lumpsum =()=>
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
<Modal show={show} onHide={handleClose} centered size='lg'  >
  <Modal.Header className="bg-gray" closeButton >
  </Modal.Header>
  <Modal.Body className='bg-gray px-4'>
    <section className="lumpsum ">
      <form>
        <div className='row'>
          <div className='col-md-6'>
            <div className="form-group ">
              <label for="select-profile" className='text-label'>Select Profile<span className="text-danger">*</span></label><br />
              <Select className='bg-c' options={profile} />
            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group ">
              <label for="amc" className='text-label'>Select AMC<span className="text-danger">*</span></label><br />
              <Select className='bg-c' options={amc} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <p className=" mt-4 text-label ms-3">
              Option
              <span className="text-danger">*</span>
            </p>
            <div className=''>
              <input className=" input-text ms-3" id="growth" type="radio" name="growth" value="GROWTH" />
              <label htmlFor="growth" className="ps-2">Growth</label>
              <input className="input-text ms-3" id="dividend" type="radio" name="growth" value="Dividend" />
              <label htmlFor="dividend" className="ps-2">IDCW  </label>
            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group ">
              <label for="select-scheme" className='lb text-label'>Select Scheme<span className="text-danger">*</span></label><br />
              <Select className='bg-c' options={scheme} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className='col-md-6'>
            <div className="form-group ">
              <label className="control-label lb text-label" for="amount">Enter Amount<span className="text-danger">*</span></label>
              <input type="text" className="form-control bg-c" name='amount' placeholder='Enter Amount' />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <a href="javascript:void(0)" className="btn btn-danger float-right my-4" >+ Add</a>
          </div>
        </div>
        <div className="col-md-12 px-0" id="tbt">
          <div className="table-responsive">
            <table className="table custom bg-white mt-5 mb-3">
              <tr>
                <th className="wd-6rem">Profile</th>
                <th className="wd-7rem">Scheme Name</th>
                <th className="wd-6rem">Folio Number</th>
                <th>Amount</th>
                <th></th>
              </tr>
              <tr>
                <td>Profile</td>
                <td>Scheme Name</td>
                <td>Folio Number</td>
                <td>3500</td>
                <td>
                  <Cart_Delete/>
                </td>
              </tr>
            </table>
          </div>
          <div className="row">
            <div className='col-md-5'>
              <div className="form-group ">
                <label htmlFor="payment_mode" className="text-label">
                Select Payment Mode
                <span className="text-danger">*</span>
                </label>
                <br />
                <Select className='bg-c' options={payment_mode} />
              </div>
            </div>
            <div className='col-md-7'>
              <div className="pt-4 mt-3">
                <input className="input-text " id="immediatePay" type="radio" name="payType" value="Y" />
                <label htmlFor="immediatePay" className="ps-2">Immediate Payment</label>
                <input className=" input-text ms-3" id="emailLink" type="radio" name="payType" value="N" />
                <label htmlFor="emailLink" className="ps-2">Link On Email</label>
              </div>
            </div>
            <div className='col-md-5'>
              <div className="form-group ">
                <label for="select-bank" className='lb text-label'>Select Bank<span className="text-danger">*</span></label><br />
                <Select className='bg-c' options={bankname} />
              </div>
            </div>
            <div className="col-md-7">
              <div className="form-group ">
                <label className="control-label lb text-label" for="code">RTGS/NEFT Code<span className="text-danger">*</span></label>
                <input type="text" className="form-control bg-c" name='code' placeholder='' />
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group ">
                <label className="control-label lb text-label" for="date">Date<span className="text-danger">*</span></label>
                <input type="Date" className="form-control bg-c" name='date' placeholder='' />
              </div>
            </div>
            <div className="col-md-12 mt-4">
              <ul className="fs-13 mb-0 lst-none ps-0">
                <li>
                  <h6 className="text-red fs-14">Note :-</h6>
                </li>
                <li className="text-gray"> <span className="text-red">*</span>Beneficiary Virtual Account Number <span className="text-black">- (NSEMF2213995012944559)</span></li>
                <li className="text-gray"> <span className="text-red">*</span>Beneficiary Account Name <span className="text-black">- NSE Clearing – New Mutual Fund Platform</span></li>
                <li className="text-gray"><span className="text-red">*</span>IFSC code<span className="text-black">- HDFC0000060</span></li>
                <li className="text-gray"><span className="text-red">*</span>Bank Name<span className="text-black">-  HDFC Bank Ltd</span></li>
                <li className="text-gray"><span className="text-red">*</span>Branch Name<span className="text-black">- Fort, Mumbai</span></li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </section>
  </Modal.Body>
  <Modal.Footer className='border-0 bg-gray'>
    <button data-dismiss="modal" className="btn-custom" type="button">Order Now</button>
  </Modal.Footer>
</Modal>
</>
)
}
export default Looking_for_Lumpsum