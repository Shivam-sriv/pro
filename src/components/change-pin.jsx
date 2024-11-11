import React ,{useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import OTPInput from "otp-input-react";
const ChangePin =({ show, setShow })=> 
{
const [Pin, setPin] = useState("");
const [Confirm, setConfirm] = useState("");
const [New, setNew] = useState("");
return(
<>
<Modal show={show} onHide={() =>
  setShow(false)} className="border-red" size="sm" centered scrollable={true} >   
  <Modal.Header  closeButton >
    <Modal.Title>Change Pin</Modal.Title>
  </Modal.Header>
  <Modal.Body className="px-4 ">
    <Form>
    <form>
      <div className=" text-center">
        <Form.Group className="mb-3">
          <Form.Label>Exiting Pin<span className="text-red">*</span></Form.Label>
          <OTPInput className="ps-4 otp-inp justify-content-center" value={Pin} onChange={setPin} autoFocus OTPLength={4} otpType="number" disabled={false}  />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-black">Set New Pin<span className="text-danger">*</span></Form.Label>
          <OTPInput className="ps-4 otp-inp justify-content-center" value={Confirm} onChange={setConfirm} autoFocus OTPLength={4} otpType="number" disabled={false}  />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-black">Confirm New Pin<span className="text-danger">*</span></Form.Label>
          <OTPInput className="ps-4 otp-inp justify-content-center" value={New} onChange={setNew} autoFocus OTPLength={4} otpType="number" disabled={false}  />
        </Form.Group>
        <Form.Group className="text-center pt-4">
          <button type="button" className="otp-btn br-15" >Submit</button>
        </Form.Group>
      </div>
    </form>
    </Form>
  </Modal.Body>
  <Modal.Footer className='border-0'>
  </Modal.Footer>
</Modal>
</>
)
}
export default ChangePin