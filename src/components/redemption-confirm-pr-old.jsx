import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import success from "../assets/images/successfully.png";
const RedemptionConfirm =({ show, setShow })=> {
const [Purchase, setPurchase] = useState("d-block");
const [Confirm, setConfirm] = useState("d-none");
const [Success, setSuccess] = useState("d-none");
const purchase = () => {
setConfirm("d-block")
setPurchase("d-none")
}
const confirm = () => {
setSuccess("d-block")
setConfirm("d-none")
}
return (
<>
<div className="">
  <Modal show={show} onHide={() =>
    setShow(false)}  centetext-red >
    <div className={`rounded ${Purchase}`}>
    <Modal.Header  closeButton >
    </Modal.Header>
    <Modal.Body className="px-3">
      <div className="form-group">
        <h5 className='text-red'>Shivam Shrivastav</h5>
      </div>
      <div className="form-group   text-center ">
        <p className='py-1 col-md-3 bg-light-red rounded'>Redemption</p>
      </div>
      <Form>
        <div className="row mx-1 bg-light-red p-3 bg-c br-15">
          <div className="col-12">
            <Form.Group>
              <p className='fs-13 text-red'>  SBI Small Cap Fund Regular Growth</p>
            </Form.Group>
          </div>
          <div className="col-12 mb-3">
            <Form.Group>
              <div className="d-flex mb-2">
                <Form.Check type="radio" label="By Amount" name="formHorizontalRadios" id="ByAmount" className="pe-3 fs-sm-14"/>
                <Form.Check type="radio" label="By Units" name="formHorizontalRadios" id="ByUnits" className="pe-3 fs-sm-14"/>
                <Form.Check type="radio" label="All Units" name="formHorizontalRadios" id="AllUnits" className="pe-3 fs-sm-14"/>
              </div>
            </Form.Group>
          </div>
          <div className="col-12">
            <Form.Group>
              <Form.Label className='text-black'>Enter Amount   <span className="text-danger">*</span></Form.Label>
              <small className="text-label float-right fs-13">Min Amount : 1000</small>
              <Form.Control className="bg-c" type="text" placeholder='Enter Amount'  />
              <small className='text-label fs-13'>Total Amount : 46470
              As On : 2022/08/23</small>
            </Form.Group>
          </div>
        </div>
      </Form>
    </Modal.Body>
    <Modal.Footer className='border-0'>
      <button className="btn btn-danger " type="button" onClick={purchase}   >Continue</button>
    </Modal.Footer>
</div>
<div className={`rounded ${Confirm}`}>
<Modal.Header  closeButton >
<Modal.Title className='fs-5'>Confirmation Redemption</Modal.Title>
</Modal.Header>
<Modal.Body className="px-4">
<div className="col mb-3 border-bottom">
<h6 className='text-red'>Shivam Shrivastav</h6>
<p>Mode of Holding :  Single </p>
</div>
<div className="col">
<p className="mb-0">Source Scheme</p>
<p className='text-red'>SBI Small Cap Fund Regular Growth</p>
<p className="mb-0">Target Scheme</p>
<p className='text-red'>Axis Long Term Equity Fund-Regular-Growth</p>
</div>
<table className='mx-auto'>
<tr className='text-center'>
<td className='pe-4'>Folio </td>
:
<td className='ps-4'>124564</td>
</tr>
<tr className='text-center'>
<td className='pe-4'>Amount  </td>
:
<td className='ps-4'>50,000</td>
</tr>
</table>
<hr />
<p className='text-center pt-1'><b>Total  :  55,55882</b></p>
</Modal.Body>
<Modal.Footer className='border-0'>
<button className="btn btn-danger" type="button" onClick={confirm}   >Order</button>
</Modal.Footer>
</div>
<div className={`rounded ${Success}`}>
<Modal.Body className="px-4">
<div className="text-center">
<img className="img-fluid" src={success} alt="" />
<h6 className="text-successc fw-500 py-3 fs-19">Successful Transaction with
Following Details
</h6>
</div>
<div className="row px-2 fs-13">
<div className="col-md-4 col-5 text-start text-black">Unique Number </div>
<div className="col-md-1 col-1">:</div>
<div className="col-md-7 col-6 text-start">12345678</div>
</div>
<div className="row px-2 fs-13">
<div className="col-md-4  col-5 text-start text-black">Trxn Number </div>
<div className="col-md-1 col-1">:</div>
<div className="col-md-7 col-6 text-start">12346195</div>
</div>
<div className="row px-2 fs-13">
<div className="col-md-4  col-5 text-start text-black">Source Scheme</div>
<div className="col-md-1 col-1">:</div>
<div className="col-md-7 col-6 text-start">  SBI Small Cap Fund Regular Growth</div>
</div>
<div className="row px-2 fs-13">
<div className="col-md-4  col-5 text-start text-black">Folio Number </div>
<div className="col-md-1 col-1">:</div>
<div className="col-md-7  col-6 text-start">12345678</div>
</div>
<div className="row px-2 fs-13">
<div className="col-md-4  col-5 text-start text-black">Amount   </div>
<div className="col-md-1 col-1">:</div>
<div className="col-md-7 col-6 text-start">1,000</div>
</div>
<div className="row px-2 fs-13">
<div className="col-md-4  col-5 text-start text-black">Status   </div>
<div className="col-md-1 col-1">:</div>
<div className="col-md-7  col-6 text-start">Successful</div>
</div>
<hr />
<div className="text-center">
<p className="text-black fs-13">
<span className="red text-start fw-500 ">Note:</span>  Authorization link has been sent on your registered mail id and mobile number.The Link shall remain active for the next 48 hours.Kindly authorize.
</p>
</div>
</Modal.Body>
</div>
</Modal>
</div>
</>
)
}
export default RedemptionConfirm