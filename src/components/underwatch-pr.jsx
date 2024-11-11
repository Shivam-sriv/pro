import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import sunderam from "../assets/images/banklogo/Sundaram_Mutual_Fund.png";
import sbi from "../assets/images/banklogo/sbi.png";
import idfc from "../assets/images/banklogo/IDFC.png";
import Video_blog from './video-blog';
const UnderwatchConfirm = ({ show, setShow }) => {

  const [Videoblogshow, setVideoblogShow] = useState(false);

  const openInnerModal = () => {
    setVideoblogShow(true);
    setShow(false)
  }

  const closeInnerModal = () => {
    setVideoblogShow(false);
    setShow(true)
  }

  return (
    <>
      <div >
        <Modal className='rounded' show={show} onHide={() =>
          setShow(false)} centered scrollable={true}>

          <Modal.Header closeButton >
            <Modal.Title className='fs-6'>Underwatch</Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-3">
          <h6 className='text-black fs-16'>Schemes Name</h6>
            <div class="col-md-12">
              <div className=' d-flex  shadowcart mb-2 p-3'>
                <div className='align-self-center'><img src={idfc} alt="" className='img-fluid mx-8 ' /></div>
                <div className=' px-2 fs-14'>IDFC Tax Advantage (ELSS)
                  Fund-Growth-Regular Plan 
                </div>

              </div>
              <div className=' d-flex  shadowcart mb-2 p-3'>
                <div className='align-self-center'><img src={sunderam} alt="" className='img-fluid mx-8 ' /></div>
                <div className=' px-2 fs-14'>Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
                  Regular Growth 
                </div>

              </div>
              <div className=' d-flex  shadowcart mb-2 p-3'>
                <div className='align-self-center'><img src={sunderam} alt="" className='img-fluid mx-8 ' /></div>
                <div className=' px-2 fs-14'>Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
                  Regular Growth 
                </div>

              </div>
              <div className=' d-flex  shadowcart mb-2 p-3'>
                <div className='align-self-center'><img src={sbi} alt="" className='img-fluid mx-8 ' /></div>
                <div className='px-2  fs-14'>SBI Long Term Equity Fund-Regular
                  Plan-Growth  
                </div>

              </div>

            </div>


          </Modal.Body>
          <Modal.Footer className='border-0'>
            <p className='fs-10 text-justify'>Though not meeting the criteria of our Algorithm “Prodigy” precisely, the mentioned schemes are there in our watch list nonetheless as our research team is keeping a close eye on their performances.<a href='#' className='b-hover' onClick={openInnerModal}> To know more click here.</a></p>

          </Modal.Footer>


        </Modal>
      </div>



      <Video_blog show={Videoblogshow} setShow={closeInnerModal} />
    </>
  )
}
export default UnderwatchConfirm