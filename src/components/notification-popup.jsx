import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Notification_Popup = ({show,setShow})=>{
return (
    <>

       <Modal show={show}  onHide={()=>setShow(false)} scrollable={true}  className="animate__animated animate__zoomIn animate__fast">
       <Modal.Header closeButton className="bg-gray ">
          <Modal.Title className="text-red fs-5">Change in folio Nos.-HSBC MF</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-gray">
        <p className='fs-13'>
          The folio numbers of HSBC Mutual Fund will be changed to an 8-digit folio number. Accordingly, the existing folio number will be pre-fixed with 1 followed by to make it 'O' / 'O's 8 digits (excluding check digits).
        </p>
        <p className='fs-13'>The change in Folio numbers will be effective from 26 June 2022.</p>
        <h6 className='text-black '> Example 1 </h6>
        <p className='fs-13 mb-0'>
          Old Folio No - 12345 /88
        </p>
        <p className='fs-13 '>New Folio No - 10012345 /88</p>
        <h6 className='text-black '> Example 2 </h6>
        <p className='fs-13 mb-0'>
          Old Folio No - 1234 /99
        </p>
        <p className='fs-13 mb-0'>New Folio No - 10001234 /99</p>
        </Modal.Body>
        <Modal.Footer className=" bg-gray">
          <Button variant="danger" className="btn-custom" onClick={()=>setShow(false)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Notification_Popup;