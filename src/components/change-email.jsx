import React ,{useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Otp_Input from "./otp";
const ChangeEmail =({ show, setShow })=> 
{
const [Email ,setEmail]=useState('d-block');
const [Otpfield ,setOtpfield]=useState('d-none');
const otp =()=>
{
setEmail("d-none");
setOtpfield("d-block");
}
return(
<>
<Modal show={show} onHide={() =>
  setShow(false)} size="sm" className="border-red" centered scrollable={true} >   
  <Modal.Header  closeButton >
    <Modal.Title className='fs-5'>Change Email ID</Modal.Title>
  </Modal.Header>
  <Modal.Body className="px-2">
    <Form>
      <div className={`text-center  ${Email}`}>            
      <Form.Group>
        <Form.Control className="single-drop border-0" type="text" placeholder="Enter New Email ID *"/>
      </Form.Group>
      <Form.Group >
        <button type='button' className="otp-btn mt-3 br-15" onClick={otp} >Generate OTP</button>  
      </Form.Group>
      </div>  
      <div className={`mobile-otp text-center px-2 ${Otpfield}`}>
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
export default ChangeEmail