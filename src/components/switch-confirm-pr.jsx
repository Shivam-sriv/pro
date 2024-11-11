import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import success from "../assets/images/successfully.png";
import { FaTrash } from "react-icons/fa";
import Video_blog from './video-blog';
import Select_Scheme from './switch-select-scheme';
const SwitchConfirm = ({ show, setShow }) => {


    const [Videoblogshow, setVideoblogShow] = useState(false);
    const [selectschemeshow, setSelectschemeShow] = useState(false);

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
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];


    const innerModal = () => {
        setVideoblogShow(true)
        setShow(false)
    }

    const closeModal = () => {
        setVideoblogShow(false);
        setShow(true)
    }

    const openSchemeModal = ()=> {
        setSelectschemeShow(true)
        setShow(false)
    }

    const closeSchemeModal = ()=> {
        setSelectschemeShow(false)
        setShow(true)
    }

    return (
        <>
            <div >
                <Modal show={show} onHide={() =>
                    setShow(false)} centered >
                    <div className={` rounded  ${Purchase}`}>
                        <Modal.Header closeButton >
                            <Modal.Title className='fs-6'>Switch</Modal.Title>
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
                                    <div className="col-12 mb-3">
                                        <Form.Group>
                                            <Form.Label className='text-black'>Select Target Scheme  <span className="text-danger">*</span></Form.Label>
                                            <Form.Control className="bg-c-b fs-13" type="text" placeholder='Select Target Scheme' onClick={openSchemeModal} />


                                        </Form.Group>
                                    </div>
                                    <div className="col-12  px-3 pt-1">
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
                                            <Form.Control className="bg-c-b fs-13" type="text" placeholder='Enter Amount' />

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
                                    <div className="col-12 mb-3">
                                        <Form.Group>
                                            <Form.Label className='text-black'>Select Target Scheme  <span className="text-danger">*</span></Form.Label>
                                            <Form.Control className="bg-c-b fs-13" type="text" placeholder='Select Target Scheme' onClick={openSchemeModal} />


                                        </Form.Group>
                                    </div>
                                    <div className="col-12  px-3 py-1">
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
                                            <Form.Control className="bg-c-b fs-13" type="text" placeholder='Enter Amount' />

                                        </Form.Group>
                                    </div>
                                </div>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer className='border-0'>
                            <p className='fs-10 text-justify'>The populated schemes are not performing as expected. Since there are other schemes in the same fund house performing well, we are recommending to switch to them provided the investment horizon and average returns meet your expectations. There may be multiple options out of which you can pick one best suited to you.<a href='#' className='b-hover' onClick={innerModal}> Click here to read more.</a></p>
                            <button className="btn btn-danger " type="button" onClick={purchase}   >Continue</button>
                        </Modal.Footer>
                    </div>
                    <div className={`rounded ${Confirm}`}>
                        <Modal.Header closeButton >
                            <Modal.Title className='fs-6'>Confirmation Switch</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="px-4">
                            <div className="col mb-3 border-bottom">
                                <h6 className='text-red'>Shivam Shrivastav</h6>
                            </div>
                            <div className="col">
                                <p className='source-btn'>Source</p>
                                <p className='text-red fs-13'>Axis Long Term Equity Fund-Regular-Growth</p>
                            </div>
                            <div className="col">
                            <p className='source-btn'>Target</p>
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
                           
                            <div className="col border-top mt-3">
                                <p className='source-btn mt-3'>Source</p>
                                <p className='text-red fs-13'>Axis Long Term Equity Fund-Regular-Growth</p>
                            </div>
                            <div className="col">
                            <p className='source-btn'>Target</p>
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

            <Select_Scheme show={selectschemeshow} setShow={closeSchemeModal} />

            <Video_blog show={Videoblogshow} setShow={closeModal} />
        </>
    )
}
export default SwitchConfirm