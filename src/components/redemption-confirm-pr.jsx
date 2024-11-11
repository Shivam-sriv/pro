import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import success from "../assets/images/successfully.png";
import { FaTrash } from "react-icons/fa";
import Video_blog from './video-blog';
const RedemptionConfirm = ({ show, setShow }) => {


  const [Videoblogshow, setVideoblogShow] = useState(false);
  const [Purchase, setPurchase] = useState("d-block");
  const [Confirm, setConfirm] = useState("d-none");
  const [Success, setSuccess] = useState("d-none");

  const purchase = () => {
    setConfirm("d-block")
    setPurchase("d-none")
  }
  const confirm = () => {
    setSuccess("d-block")
    setConfirm("d-none")
  }

  const openInnerModal = () =>{
    setVideoblogShow(true);
    setShow(false)
  }

  const closeInnerModal = ()=>{
    setVideoblogShow(false);
    setShow(true)
  }

  return (
    <>
      <div >
        <Modal show={show} onHide={() =>
          setShow(false)} centered >
          <div className={` rounded ${Purchase}`}>
            <Modal.Header closeButton >
              <Modal.Title className='fs-6'>Redemption</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-3">


              <Form>
                <div className="row mx-1   bg-c br-15">
                  <div className="col-12 bg-gray bg-gray-raduis px-3 pt-3 ">
                    <div className="row">
                      <div className="col-11">
                        <Form.Group>
                          <p className=' text-red '> Axis Arbitrage Fund-Regular
                            Growth | 95654558</p>
                        </Form.Group>
                      </div>
                      <div className="col-1 px-0">
                        <span className='delbtn'>
                          <FaTrash className='fs-13 text-red' />
                        </span>
                      </div>
                    </div>

                  </div>
                  <div className="col-12  px-3 pt-3">
                    <Form.Group>
                      <div className="d-flex mb-2 justify-content-center">
                        <Form.Check type="radio" label="By Amount" name="formHorizontalRadios" id="ByAmount" className="pe-3 fs-sm-12" />
                        <Form.Check type="radio" label="By Units" name="formHorizontalRadios" id="ByUnits" className="pe-3 fs-sm-12" />
                        <Form.Check type="radio" label="All Units" name="formHorizontalRadios" id="AllUnits" className="pe-3 fs-sm-12" checked />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-12 mb-3">
                    <Form.Group>
                      <Form.Label className='text-black'>Enter Amount   <span className="text-danger">*</span></Form.Label>
                      <Form.Control className="bg-c-b" type="text" placeholder='Enter Amount' />

                    </Form.Group>
                  </div>
                </div>
              </Form>
              <Form className='mt-4'>
                <div className="row mx-1   bg-c br-15 ">
                  <div className="col-12 bg-gray bg-gray-raduis px-3 pt-3 ">
                    <div className="row">
                      <div className="col-11">
                        <Form.Group>
                          <p className=' text-red '> Axis Arbitrage Fund-Regular
                            Growth | 95654558</p>
                        </Form.Group>
                      </div>
                      <div className="col-1 px-0">
                        <span className='delbtn'>
                          <FaTrash className='fs-13 text-red' />
                        </span>
                      </div>
                    </div>

                  </div>
                  <div className="col-12  px-3 pt-3">
                    <Form.Group>
                      <div className="d-flex mb-2 justify-content-center">
                        <Form.Check type="radio" label="By Amount" name="formHorizontalRadios" id="ByAmount" className="pe-3 fs-sm-12" />
                        <Form.Check type="radio" label="By Units" name="formHorizontalRadios" id="ByUnits" className="pe-3 fs-sm-12" />
                        <Form.Check type="radio" label="All Units" name="formHorizontalRadios" id="AllUnits" className="pe-3 fs-sm-12" checked />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-12 mb-3">
                    <Form.Group>
                      <Form.Label className='text-black'>Enter Amount   <span className="text-danger">*</span></Form.Label>
                      <Form.Control className="bg-c-b" type="text" placeholder='Enter Amount' />

                    </Form.Group>
                  </div>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer className='border-0'>
              <p className='fs-10 text-justify'>Populated schemes do not meet the criteria laid out by our in house theory called “Reverse Pyramid”. Since there are no alternate scheme in the same fund house, we are suggesting Redemption.<a href='#' className='b-hover' onClick={openInnerModal}> To know more click here.</a></p>
              <button className="btn btn-danger " type="button" onClick={purchase}   >Continue</button>
            </Modal.Footer>
          </div>
          <div className={`rounded ${Confirm}`}>
            <Modal.Header closeButton >
              <Modal.Title className='fs-6'>Confirmation Redemption</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4">
              <div className="col mb-3 border-bottom">
                <h6 className='text-red'>Shivam Shrivastav</h6>
              </div>
              <div className="col">
                <p className='text-red fs-13'>Axis Long Term Equity Fund-Regular-Growth</p>
              </div>
              <table className='mx-auto'>
                <tr className='text-center fs-13'>
                  <td className='pe-4'>Folio </td>
                  :
                  <td className='ps-4'>124564</td>
                </tr>
                <tr className='text-center fs-13'>
                  <td className='pe-4'>Amount/Unit  </td>
                  :
                  <td className='ps-4'>50,000</td>
                </tr>

              </table>
              <div className="col border-top mt-4">
                <p className='text-red fs-13'>Axis Long Term Equity Fund-Regular-Growth</p>
              </div>
              <table className='mx-auto'>
                <tr className='text-center fs-13'>
                  <td className='pe-4'>Folio </td>
                  :
                  <td className='ps-4'>124564</td>
                </tr>
                <tr className='text-center fs-13'>
                  <td className='pe-4'>Amount/Unit  </td>
                  :
                  <td className='ps-4'>50,000</td>
                </tr>

              </table>

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
                  <span className="red text-start fw-600 ">Note:</span>  Payment Link has been sent on your registered email ID and mobile number for security reasons. The link will remain active for the next 48 hours. Click on the link to authorize this transaction.
                </p>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </div>



      <Video_blog show={Videoblogshow} setShow={closeInnerModal} />
    </>
  )
}
export default RedemptionConfirm