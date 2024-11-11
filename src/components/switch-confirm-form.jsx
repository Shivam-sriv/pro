import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import success from "../assets/images/successfully.png";
const SwitchConfirm =({ show, setShow })=> {
    const [Confirm, setConfirm] = useState("d-block");
const [Success, setSuccess] = useState("d-none");
    const confirm = () => {
        setSuccess("d-block")
        setConfirm("d-none")
        }
        

return (
<>
<div className="">
  <Modal show={show} onHide={() =>setShow(false)} scrollable={true} centetext-red >
    
    <div className={`rounded ${Confirm}`}>
      <Modal.Header  closeButton >
        <Modal.Title className='fs-5'>Confirmation Switch</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4">
   
              <div className="col mb-3 border-bottom">
                <h6 className='text-red'>Shivam Shrivastav</h6>
                <p>Mode of Holding :  Single </p>
              </div>
              <div className="col">
                <p className="mb-0">Source Scheme</p>
                <p className='text-red'>SBI Small Cap Fund Regular Growth</p>
                <p className="mb-0">Target Scheme</p>
                <p className='text-red'>Axis Long Term Equity Fund-Regular-Growth</p>
              </div>
              <table className='mx-auto'>
                <tr className='text-center'>
                  <td className='pe-4'>Folio </td>
                  :
                  <td className='ps-4'>124564</td>
                </tr>
                <tr className='text-center'>
                  <td className='pe-4'>Amount  </td>
                  :
                  <td className='ps-4'>50,000</td>
                </tr>
              </table>
              <hr />
              <p className='text-center pt-1'><b>Total  :  55,55882</b></p>
           
    
   
      </Modal.Body>
      <Modal.Footer className='border-0'>
        <button className="btn btn-danger" type="button" onClick={confirm}   >Order</button>
      </Modal.Footer>
    </div>
    <div className={`rounded ${Success}`}>
     
      <Modal.Body className="px-4">
   
              <div className="text-center">
                <img className="img-fluid" src={success} alt="" />
                <h6 className="text-successc fw-500 py-3 fs-19">Successful Transaction with
                  Following Details
                </h6>
              </div>
              <div className="row px-2 fs-13">
                <div className="col-md-4 col-5 text-start text-black">Unique Number </div>
                <div className="col-md-1 col-1">:</div>
                <div className="col-md-7 col-6 text-start">12345678</div>
              </div>
              <div className="row px-2 fs-13">
                <div className="col-md-4  col-5 text-start text-black">Trxn Number </div>
                <div className="col-md-1 col-1">:</div>
                <div className="col-md-7 col-6 text-start">12346195</div>
              </div>
              <div className="row px-2 fs-13">
                <div className="col-md-4  col-5 text-start text-black">Source Scheme</div>
                <div className="col-md-1 col-1">:</div>
                <div className="col-md-7 col-6 text-start">  SBI Small Cap Fund Regular Growth</div>
              </div>
              <div className="row px-2 fs-13">
                <div className="col-md-4  col-5 text-start text-black">Target Scheme</div>
                <div className="col-md-1 col-1">:</div>
                <div className="col-md-7 col-6 text-start">  SBI Small Cap Fund Regular Growth</div>
              </div>
              <div className="row px-2 fs-13">
                <div className="col-md-4  col-5 text-start text-black">Folio Number </div>
                <div className="col-md-1 col-1">:</div>
                <div className="col-md-7  col-6 text-start">12345678</div>
              </div>
              <div className="row px-2 fs-13">
                <div className="col-md-4  col-5 text-start text-black">Amount   </div>
                <div className="col-md-1 col-1">:</div>
                <div className="col-md-7 col-6 text-start">1,000</div>
              </div>
              <div className="row px-2 fs-13">
                <div className="col-md-4  col-5 text-start text-black">Status   </div>
                <div className="col-md-1 col-1">:</div>
                <div className="col-md-7  col-6 text-start">Successful</div>
              </div>
              <hr />
              <div className="text-center">
                <p className="text-black fs-13">
                  <span className="red text-start fw-500 ">Note:</span>  Authorization link has been sent on your registered mail id and mobile number.The Link shall remain active for the next 48 hours.Kindly authorize.
                </p>
              </div>
           
           
    
   
      </Modal.Body>
     
    </div>
  </Modal>

 
</div>
</>
)
}
export default SwitchConfirm