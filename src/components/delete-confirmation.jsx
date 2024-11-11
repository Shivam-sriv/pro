import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaTrash } from "react-icons/fa";

const Cart_Delete = ({id,deleteData}) => {
const [show, setShow] = useState(false);

const handleClose = () => {
  deleteData(id)
  setShow(false)
}

const handleShow = () => setShow(true);

return (
<>
<a href='#' onClick={handleShow} >
  <FaTrash className='text-red fs-14' />
</a>
<Modal show={show} onHide={()=>setShow(false)} centered size='sm' className='bg-trans' >
  <Modal.Body>
    <p className="text-red fw-500 text-center">
      Are You Sure want to Delete ?
    </p>
    <div className=" order-b d-flex justify-content-around pb-4">
      <div className="">
        <button className='rounded border-dash px-3 py-1 single-drop' onClick={handleClose}>Yes</button>
      </div>
      <div className="">
        <button className='rounded border-dash single-drop px-3 py-1' onClick={()=>setShow(false)}>No</button>
      </div>
    </div>
  </Modal.Body>
</Modal>
</>
)
}
export default Cart_Delete