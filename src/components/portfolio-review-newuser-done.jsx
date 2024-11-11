import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

const PortfolioWait = ({show,setShow})=>{
  
return (
    <>

       <Modal show={show} size="sm" onHide={()=>setShow(false)} centered  className="animate__animated animate__zoomIn animate__fast  ">
        <Modal.Body className="text-center">       
       
        <p className="text-black">
        Please wait for a moment; your portfolio review will be ready within the next 24 working hours.
        </p>
        </Modal.Body>
        <div className="bg-red text-center py-2 order-b">
       <Link to="#" class="text-white font-weight-bold" onClick={()=>setShow(false)}><h4>OK</h4></Link>
       </div>
      </Modal>
    </>
  )
}
export default PortfolioWait;