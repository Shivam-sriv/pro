import React, {useState} from "react";
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
const AnotherScheme = ({show,setShow})=>{
const data = [
{ value: 'Debit Card', label: 'Debit Card' },
{ value: 'Net Banking', label: 'Net Banking' },
];
return (
<>
<Modal show={show}  onHide={()=>
  setShow(false)} centered  className="animate__animated animate__zoomIn animate__fast">
  <Modal.Header closeButton className="bg-light-red">
    <Modal.Title className="text-red">Looking for another scheme</Modal.Title>
  </Modal.Header>
  <Modal.Body className="bg-light-red">
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Select Scheme</Form.Label>
      <Select  options={data} />
    </Form.Group>
  </Modal.Body>
  <Modal.Footer className="bg-light-red"></Modal.Footer>
</Modal>
</>
)
}
export default AnotherScheme;