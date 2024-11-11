import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import cancel from "../assets/images/others/cancel.png";
import { Link } from "react-router-dom";

const TransactFailed = ({show,setShow})=>{
  
return (
    <>

       <Modal show={show}  onHide={()=>setShow(false)} centered  className="animate__animated animate__zoomIn animate__fast  ">
        <Modal.Body className="text-center">
       <img src={cancel} />
       <h3 class="text-red fw-500 py-3"> Transaction Failed!</h3>
       <p class="text-black">  Please try again after some time</p>
        </Modal.Body>
        <div className="bg-red text-center py-2 order-b">
       <Link to="#" class="text-white fw-bold" onClick={()=>setShow(false)}><h4>Try Again</h4></Link>
       </div>
      </Modal>
    </>
  )
}
export default TransactFailed;