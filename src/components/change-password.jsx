import React ,{useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FaEyeSlash, FaInfo } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const ChangePassword =({ show, setShow })=> 
{
return(
<>
<Modal show={show} onHide={() =>
  setShow(false)} className="border-red" centered scrollable={true} >   
  <Modal.Header  closeButton >
    <Modal.Title>Change Password</Modal.Title>
  </Modal.Header>
  <Modal.Body className="px-4">
    <Form>
      <div className="">
        <Form.Group className="mb-2">
          <Form.Label> Exiting Password <span className="text-danger">*</span></Form.Label>
          <Form.Control className="single-drop border-0" type="text" placeholder="Enter Exiting Password" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>  New Password <span className="text-danger">*</span></Form.Label>
          <Form.Control className="single-drop border-0" type="text" placeholder="Enter New Password" />
          <div className="bg-info rounded-circle d-icon text-center" >
            <FaInfo data-tooltip-id="app-title" className="text-white"/>                     
                    </div>                   
                    <ReactTooltip id="app-title" place="top" effect="solid" className='px-1' >
                    <div className="fs-10">
                          The password <br/> should   Alpha-  <br/>numeric with  <br/> atleast  1 Capital <br/> & 1 Special <br/> character 
                          </div>
                        </ReactTooltip>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>   Confirm Password  <span className="text-danger">*</span></Form.Label>
          <Form.Control className="single-drop border-0" type="text" placeholder="Enter Confirm Password" />
          <div className="rounded-circle d-icon" >
            <FaEyeSlash className="fs-4" toggle="#password-field" />
          </div>
        </Form.Group>
        <Form.Group >
          <button type='button' className="otp-btn mt-3 br-15 float-right"  >Submit</button>  
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
export default ChangePassword