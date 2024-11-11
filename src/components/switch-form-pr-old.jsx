import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import SwitchConfirm from './switch-confirm-form';
const SwitchPortReview =({ show, setShow })=> {
    const [confirmShow,setConfirmShow] = useState(false);
   
    const  closeInnerModal = ()=>{
        setConfirmShow(true)
        setShow(false)
    }

return (
<>
<div className="">
  <Modal show={show} onHide={() =>setShow(false)} size="lg" centered >
    
    <div className=' rounded'>
      <Modal.Header  closeButton >
        <Modal.Title className='fs-5'>Switch</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4">
      <div className="">
                <h5 className='text-red'>Shivam Shrivastav</h5>
              </div>
              <div className=" col-3 bg-light-red text-center rounded">
                <p className='py-1 '>Switch</p>
              </div>
    
      <Form >
              <div className="row bg-gray p-3 br-15 bg-c">
                <div className="col-12 mb-3">

                <Form.Group>
                <Form.Label>Source Scheme <span className="text-danger">*</span></Form.Label>
                <Form.Control className="bg-c" type="text" placeholder='SBI Small Cap Fund Regular Growth'  />
               
              </Form.Group>
                </div>
                <div className="col-12 mb-4">

                <Form.Group>
                <Form.Label>Target Scheme  <span className="text-danger">*</span></Form.Label>
                <Form.Control className="bg-c" type="text" placeholder='SBI Equity Savings Fund-Regular Plan-Growth'  />
               
              </Form.Group>
                </div>
                <div className="col-md-6 col-12">

                <Form.Group>
                <div className="d-flex mb-2">
                  <Form.Check type="radio" label="By Amount" name="formHorizontalRadios" id="ByAmount" className="pe-3 fs-sm-14"/>
                  <Form.Check type="radio" label="By Units" name="formHorizontalRadios" id="ByUnits" className="pe-3 fs-sm-14"/>
                  <Form.Check type="radio" label="All Units" name="formHorizontalRadios" id="AllUnits" className="pe-3 fs-sm-14"/>
                </div>
                <p className="mb-0"> <small className="color-small">Min Amount : 1000</small></p>
                      <p> <small className='color-small'>Total Amount : 46470
                        As On : 2022/08/23</small>
                      </p>
              </Form.Group>
                </div>
                
                <div className="col-md-6 col-12">

                <Form.Group>
                <Form.Label>Enter Amount   <span className="text-danger">*</span></Form.Label>
                <Form.Control className="bg-c" type="text" placeholder='Enter Amount'  />
               
              </Form.Group>
                </div>
                </div>   

                <br/>
                <div className="row bg-gray p-3 br-15 bg-c">
                <div className="col-12 mb-3">

                <Form.Group>
                <Form.Label>Source Scheme <span className="text-danger">*</span></Form.Label>
                <Form.Control className="bg-c" type="text" placeholder='SBI Small Cap Fund Regular Growth'  />
               
              </Form.Group>
                </div>
                <div className="col-12 mb-4">

                <Form.Group>
                <Form.Label>Target Scheme  <span className="text-danger">*</span></Form.Label>
                <Form.Control className="bg-c" type="text" placeholder='SBI Equity Savings Fund-Regular Plan-Growth'  />
               
              </Form.Group>
                </div>
                <div className="col-md-6 col-12">

                <Form.Group>
                <div className="d-flex mb-2">
                  <Form.Check type="radio" label="By Amount" name="formHorizontalRadios" id="ByAmount" className="pe-3 fs-sm-14"/>
                  <Form.Check type="radio" label="By Units" name="formHorizontalRadios" id="ByUnits" className="pe-3 fs-sm-14"/>
                  <Form.Check type="radio" label="All Units" name="formHorizontalRadios" id="AllUnits" className="pe-3 fs-sm-14"/>
                </div>
                <p className="mb-0"> <small className="color-small">Min Amount : 1000</small></p>
                      <p> <small className='color-small'>Total Amount : 46470
                        As On : 2022/08/23</small>
                      </p>
              </Form.Group>
                </div>
                
                <div className="col-md-6 col-12">

                <Form.Group>
                <Form.Label>Enter Amount   <span className="text-danger">*</span></Form.Label>
                <Form.Control className="bg-c" type="text" placeholder='Enter Amount'  />
               
              </Form.Group>
                </div>
                </div>         

                       </Form>
      </Modal.Body>
      <Modal.Footer className='border-0'>
        <button className="btn-custom" type="button" closeButton  onClick={closeInnerModal}>Continue</button>
      </Modal.Footer>
    </div>
  </Modal>
<SwitchConfirm show={confirmShow} setShow={setConfirmShow} />

</div>
</>
)
}
export default SwitchPortReview