import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Sip_Popup = ({show,setShow})=>{
return (
<>
<Modal show={show}  onHide={()=>
  setShow(false)} scrollable={true}  className="animate__animated animate__zoomIn animate__fast">
  <Modal.Header closeButton>
    <Modal.Title>SIP</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <h5 className='text-red'>Shivam Shrivastav</h5>
    <div className="col-3 bg-light-red text-center rounded">
      <p className='py-1 '>Equity</p>
    </div>
    <p className='fs-13 text-red'>Kotak Bluechip Fund-Growth (Regular Plan) (Eastwhile Kotak 50 Scheme)(705527/17)</p>
    <Form className="portfolio">
      <Row>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Select Mandate </Form.Label>
          <Form.Select aria-label="Default select example" className="border-0 single-drop">
            <option value="select">Select</option>
            <option value="select">Select</option>
            <option value="select">Select</option>
            <option value="select">Select</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Enter Amount </Form.Label>
          <Form.Control type="text" placeholder="Enter Amount" className="border-0 single-drop" />
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formBasicDate">
          <Form.Label>SIP From </Form.Label>
          <Form.Control type="date" className="border-0 single-drop" />
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formBasicDate">
          <Form.Label>SIP To </Form.Label>
          <Form.Control type="date" className="border-0 single-drop" />
        </Form.Group>
        <Form.Group className="mb-3 d-flex" controlId="formBasicRadio">
          <Form.Check
            label="Perpetual*"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
            className="pe-3"
            />
        </Form.Group>
      </Row>
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
export default Sip_Popup;