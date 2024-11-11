import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const QuickInvest =({ show, setShow })=> {
return (
<>
<Modal show={show} onHide={() =>
  setShow(false)} size="lg" className="invest-gray" scrollable={true} centered >
  <Modal.Header  closeButton className='border-0' >
    <Modal.Title className='quik-t'>Quick Invest</Modal.Title>
  </Modal.Header>
  <Modal.Body className="px-4">
    <Form>
      <div className='row mb-2'>
        <div className='col-lg-4 col-md-6'>
          <Form.Group>
            <Form.Label>Select Profile <span className="text-danger">*</span></Form.Label>
            <Form.Select className="bg-c">
              <option>select</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className='col-lg-4 col-md-6'>
          <Form.Group>
            <Form.Label>Select AMC <span className="text-danger">*</span></Form.Label>
            <Form.Select className="bg-c">
              <option>select</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className='col-lg-4 col-md-6'>
          <Form.Group className=" " controlId="formBasicRadio">
            <Form.Label>Asset Class  <span className="text-danger">*</span></Form.Label>
            <div className="d-flex">
              <Form.Check type="radio" label="Equity" name="formHorizontalRadios" id="equity" className="pe-3"/>
              <Form.Check type="radio" label="Debt" name="formHorizontalRadios" id="debt" className="pe-3"/>
            </div>
          </Form.Group>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4 col-md-6'>
          <Form.Group className=" " controlId="formBasicRadio">
            <Form.Label> Option   <span className="text-danger">*</span></Form.Label>
            <div className="d-flex">
              <Form.Check type="radio" label="Growth" name="formHorizontalRadios" id="Growth" className="pe-3"/>
              <Form.Check type="radio" label="IDCW" name="formHorizontalRadios" id="IDCW" className="pe-3"/>
            </div>
          </Form.Group>
        </div>
        <div className='col-lg-4 col-md-6'>
          <Form.Group>
            <Form.Label>Select Scheme <span className="text-danger">*</span></Form.Label>
            <Form.Select className="bg-c">
              <option>select</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className='col-lg-4 col-md-6'>
          <Form.Group>
            <Form.Label>Enter Amount <span className="text-danger">*</span></Form.Label>
            <Form.Control className="bg-c" type="text" placeholder="Enter Amount"/>
          </Form.Group>
        </div>
      </div>
      <div className="col-md-12 px-0">
        <div className="row mb-2">
          <div className='col-md-5'>
            <Form.Group>
              <Form.Label>Select Payment Mode  <span className="text-danger">*</span></Form.Label>
              <Form.Select className="bg-c">
                <option>select</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className='col-md-7 px-smc-0'>
            <Form.Group className="pt-lg-4 mt-3 d-flex" controlId="formBasicRadio">
              <Form.Check type="radio" label="Immediate Payment" name="formHorizontalRadios" id="ImmediatePayment" className="pe-3"/>
              <Form.Check type="radio" label="Link On Email" name="formHorizontalRadios" id="LinkOnEmail" className="pe-3"/>
            </Form.Group>
          </div>
        </div>
        <div className="row mb-2">
          <div className='col-md-5'>
            <Form.Group>
              <Form.Label>Select Bank  <span className="text-danger">*</span></Form.Label>
              <Form.Select className="bg-c">
                <option>select</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="col-md-7">
            <Form.Group>
              <Form.Label>RTGS/NEFT Code <span className="text-danger">*</span></Form.Label>
              <Form.Control className="bg-c" type="text" placeholder="Enter Amount"/>
            </Form.Group>
          </div>
        </div>
        <div className="col-md-5">
          <Form.Group>
            <Form.Label>Date <span className="text-danger">*</span></Form.Label>
            <Form.Control className="bg-c" type="date" placeholder="Enter Amount"/>
          </Form.Group>
        </div>
        <div className="col-md-12 mt-4">
          <ul className="fs-13 mb-0  ps-0 lst-none">
            <li>
              <h6 className="text-red fs-14">Note :-</h6>
            </li>
            <li className="text-label"> <span className="text-red">*</span>Beneficiary Virtual Account Number <span className="text-black">- (NSEMF2213995012944559)</span></li>
            <li className="text-label"> <span className="text-red">*</span>Beneficiary Account Name <span className="text-black">- NSE Clearing – New Mutual Fund Platform</span></li>
            <li className="text-label"><span className="text-red">*</span>IFSC code<span className="text-black">- HDFC0000060</span></li>
            <li className="text-label"><span className="text-red">*</span>Bank Name<span className="text-black">-  HDFC Bank Ltd</span></li>
            <li className="text-label"><span className="text-red">*</span>Branch Name<span className="text-black">- Fort, Mumbai</span></li>
          </ul>
        </div>
      </div>
    </Form>
  </Modal.Body>
  <Modal.Footer className='border-0'>
    <button className="btn-custom" type="button">Invest Now</button>
  </Modal.Footer>
</Modal>
</>
)
}
export default QuickInvest