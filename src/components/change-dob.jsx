import React ,{useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const ChangeDob =({ show, setShow })=> 
{
return(
<>
<Modal show={show} onHide={() =>
  setShow(false)} size="sm" className="border-red" centered scrollable={true} >   
  <Modal.Header  closeButton >
    <Modal.Title className='fs-5'>Change Date Of Birth</Modal.Title>
  </Modal.Header>
  <Modal.Body className="px-4">
    <Form>
      <div className="text-center">
        <Form.Group>
          <Form.Control className="single-drop border-0" type="date" />
        </Form.Group>
        <Form.Group >
          <button type='button' className="otp-btn mt-3 br-15"  >Submit</button>  
        </Form.Group>
      </div>
    </Form>
  </Modal.Body>
  <Modal.Footer className='border-0'>
  </Modal.Footer>
</Modal>
</>
)
}
export default ChangeDob