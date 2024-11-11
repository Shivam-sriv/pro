import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import OderSuccess from "../../src/assets/images/successfully.png"
import { Link } from "react-router-dom";

const Thanku = ({show,setShow})=>{
  
return (
    <>

       <Modal show={show}  onHide={()=>setShow(false)} centered  className="animate__animated animate__zoomIn animate__fast  ">
        <Modal.Body className="text-center">
       
        <h3 className="text-successc fw-500 py-3"> Thankyou !!!</h3>
        <p className="text-black">
          We have received your query, we will get back to you shortly.
        </p>
        </Modal.Body>
        <div className="bg-red text-center py-2 order-b">
       <Link to="#" class="text-white font-weight-bold" onClick={()=>setShow(false)}><h4>OK</h4></Link>
       </div>
      </Modal>
    </>
  )
}
export default Thanku;