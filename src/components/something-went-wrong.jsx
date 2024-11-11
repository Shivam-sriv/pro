import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Opps from "../assets/images/others/oops.png";
import { Link } from "react-router-dom";

const SWW = ({show,setShow})=>{
  
return (
    <>

       <Modal show={show}  onHide={()=>setShow(false)} centered  className="animate__animated animate__zoomIn animate__fast  ">
        <Modal.Body className="text-center">
       <img src={Opps} />
       <h3 class="text-black fw-500 py-3"> Something went wrong</h3>
       <p class="text-black">Please try again after sometime.</p>
        </Modal.Body>
        <div className="bg-red text-center py-2 order-b">
       <Link to="#" class="text-white fw-bold" onClick={()=>setShow(false)}><h4>OK</h4></Link>
       </div>
      </Modal>
    </>
  )
}
export default SWW;