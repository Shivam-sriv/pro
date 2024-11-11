import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const Redemtion_Popup = ({show,setShow})=>{
return (
<>
<Modal show={show}  onHide={()=>
  setShow(false)} scrollable={true}  className="animate__animated animate__zoomIn animate__fast">
  <Modal.Header closeButton>
    <Modal.Title>Redemption</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <h5 className='text-red'>Shivam Shrivastav</h5>
    <div className="col-3 bg-light-red text-center rounded">
      <p className='py-1 '>Equity</p>
    </div>
    <p className='fs-13 text-red'>Kotak Bluechip Fund-Growth (Regular Plan) (Eastwhile Kotak 50 Scheme)(705527/17)</p>
    <Form className="portfolio">
      <Form.Group className="mb-4" controlId="formBasicDate">
        <Form.Label>Select Scheme </Form.Label>
        <Form.Select aria-label="Default select example" className="border-0 single-drop">
          <option value="select">Select</option>
          <option value="select">Select</option>
          <option value="select">Select</option>
          <option value="select">Select</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 d-flex" controlId="formBasicRadio">
        <Form.Check
          type="radio"
          label="By Amount"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          className="pe-3"
          />
        <Form.Check
          type="radio"
          label="By Units"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
          className="pe-3"
          />
        <Form.Check
          type="radio"
          label="All Units"
          name="formHorizontalRadios"
          id="formHorizontalRadios4"
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className="d-flex justify-content-between">Enter Amount
          <small className="color-small"> Min Amount : 1000</small>
        </Form.Label>
        <Form.Control type="text" placeholder="Enter Amount" className="border-0 single-drop" />
        <Form.Text className="text-muted">
          Total Amount : 46470 As On : 2022/08/23
        </Form.Text>
      </Form.Group>
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
export default Redemtion_Popup;