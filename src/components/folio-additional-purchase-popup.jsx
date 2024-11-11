import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const Additional_Purchase_Popup = ({show,setShow})=>{
return (
<>
<Modal show={show}  onHide={()=>setShow(false)} scrollable={true}  className="animate__animated animate__zoomIn animate__fast">
  <Modal.Header closeButton>
    <Modal.Title>Addtitional Purchase</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <h5 className='text-red'>Shivam Shrivastav</h5>
    <div className="col-3 bg-light-red text-center rounded">
      <p className='py-1 '>Equity</p>
    </div>
    <p className='fs-13 text-red'>Kotak Bluechip Fund-Growth (Regular Plan) (Eastwhile Kotak 50 Scheme)(705527/17)</p>
    <Form className="portfolio">
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Amount </Form.Label>
        <Form.Control type="text" placeholder="Enter Amount" className="border-0 single-drop" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Select Payment Mode </Form.Label>
        <Form.Select aria-label="Default select example" className="border-0 single-drop">
          <option value="select">Select</option>
          <option value="Net Banking">Net Banking</option>
          <option value="UPI">UPI</option>
          <option value="RTGS/NEFT">RTGS/NEFT</option>
          <option value="Debit Mandate">Debit Mandate</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Select Bank</Form.Label>
        <Form.Select aria-label="Default select example" className="border-0 single-drop">
          <option value="select">Select</option>
          <option value="SBI">SBI</option>
          <option value="ICICI">ICICI</option>
          <option value="BOB">BOB</option>
          <option value="HDFC">HDFC</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>RTGS/NEFT Code</Form.Label>
        <Form.Control type="text" className="border-0 single-drop" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" className="border-0 single-drop" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex" controlId="formBasicRadio">
        <Form.Check
          type="radio"
          label="Immediate Payment"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          className="pe-3"
          />
        <Form.Check
          type="radio"
          label="Link On Email"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
          />
      </Form.Group>
      <div className="col mt-3">
        <ul className="fs-12 mb-0 ps-3 list-unstyled">
          <li>
            <h6 className="text-red fs-13">Note :-</h6>
          </li>
          <li className="text-rtg"> <span className="text-red">*</span>Beneficiary Virtual Account Number <span className="text-black">- (NSEMF2213995012944559)</span></li>
          <li className="text-rtg"> <span className="text-red">*</span>Beneficiary Account Name <span className="text-black">- NSE Clearing – New Mutual Fund Platform</span></li>
          <li className="text-rtg"><span className="text-red">*</span>IFSC code<span className="text-black">- HDFC0000060</span></li>
          <li className="text-rtg"><span className="text-red">*</span>Bank Name<span className="text-black">-  HDFC Bank Ltd</span></li>
          <li className="text-rtg"><span className="text-red">*</span>Branch Name<span className="text-black">- Fort, Mumbai</span></li>
        </ul>
      </div>
    </Form>
  </Modal.Body>
  <Modal.Footer className="border-top-0">
    <Button variant="danger" onClick={()=>setShow(false)}>
    Order
    </Button>
  </Modal.Footer>
</Modal>
</>
)
}
export default Additional_Purchase_Popup;