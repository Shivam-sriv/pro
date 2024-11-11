import React ,{useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Otp_Input from "./otp";
const ChangeMobileNo =({ show, setShow })=> 
{
const [Number ,setNumber]=useState('d-block');
const [Otpfield ,setOtpfield]=useState('d-none');
const otp =()=>
{
setNumber("d-none");
setOtpfield("d-block");
}
return(
<>
<Modal show={show} onHide={() =>
  setShow(false)} size="sm" className="border-red" centered scrollable={true} >   
  <Modal.Header  closeButton >
    <Modal.Title className='fs-5'>Change Mobile Number</Modal.Title>
  </Modal.Header>
  <Modal.Body className="px-4">
    <Form>
      <div className={`text-center ${Number}`}>            
      <Form.Group>
        <Form.Control className="single-drop border-0" type="text" placeholder="Enter New Mobile Number *"/>
      </Form.Group>
      <Form.Group >
        <button type='button' className="otp-btn mt-3 br-15" onClick={otp} >Generate OTP</button>  
      </Form.Group>
      </div>  
      <div className={`mobile-otp text-center ${Otpfield}`}>
      <Form.Group>
        <Otp_Input/>
      </Form.Group>
      <button type="button" className="otp-btn br-15 mt-3 " >Submit</button>
      </div>       
    </Form>
  </Modal.Body>
  <Modal.Footer className='border-0'>
  </Modal.Footer>
</Modal>
</>
)
}
export default ChangeMobileNo