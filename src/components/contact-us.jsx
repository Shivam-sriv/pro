import React ,{useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import Thanku from "./thanku";
const ContactUs =({ show, setShow })=> 
{
const [confirmShow,setConfirmShow] = useState(false);
const  closeInnerModal = ()=>{
setConfirmShow(true)
setShow(false)
}
const query = [
{ value: "--Select Query--", label: "--Select Query--" },
{ value: "SIP/SWP/STP Cancellation", label: "SIP/SWP/STP Cancellation" },
{ value: "Mandate Physical", label: "Mandate Physical" },
{ value: "IIN Related Query", label: "IIN Related Query" },
{ value: "Non-Individual KYC", label: "Non-Individual KYC" },
{ value: "E-Kyc Registration", label: "E-Kyc Registration" },
{ value: "Difference in Portfolio Valuation", label: "Difference in Portfolio Valuation" },
{ value: "Non-Individual One time registration", label: "Non-Individual One time registration" },
{ value: "Capital gain statement", label: "Capital gain statement" },
{ value: "Other", label: "Other" },
];
return(
<>
<Modal show={show} onHide={() =>
  setShow(false)} className="border-red" centered  >   
  <Modal.Header  closeButton >
    <Modal.Title className="fs-5">Please send us your query or feedback</Modal.Title>
  </Modal.Header>
  <Modal.Body className="px-4">
    <Form>
      <div className="">
        <Form.Group className="mb-2">
          <Form.Label>Email id<span className="text-danger">*</span></Form.Label>
          <Form.Control className="single-drop border-0" type="text" placeholder="Enter Exiting Password" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label> Mobile Number <span className="text-danger">*</span></Form.Label>
          <Form.Control className="single-drop border-0" type="text" placeholder="Enter New Password" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>   Query  <span className="text-danger">*</span></Form.Label>
          <Select className='p-q single-drop ' options={query} placeholder="Choose Query"/>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>   Query Message  <span className="text-danger">*</span></Form.Label>
          <Form.Control as="textarea" className="single-drop border-0" type="text" placeholder="Please Mention Your Query ! " />
        </Form.Group>
        <Form.Group >
          <button type='button' className="otp-btn mt-3 br-15 float-right" onClick={closeInnerModal} >Submit</button>  
        </Form.Group>
      </div>
    </Form>
  </Modal.Body>
  <Modal.Footer className='border-0'>
  </Modal.Footer>
</Modal>
<Thanku show={confirmShow} setShow={setConfirmShow} />
</>
)
}
export default ContactUs