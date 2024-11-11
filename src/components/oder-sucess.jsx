import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import OderSuccess from "../../src/assets/images/successfully.png"
import { Link } from "react-router-dom";
const OderSucess = ({show,setShow})=>{
return (
<>
<Modal show={show}  onHide={()=>
  setShow(false)} centered  className="animate__animated animate__zoomIn animate__fast  ">
  <Modal.Body className="text-center">
    <img src={OderSuccess} />
    <h3 class="text-successc font-weight-500 py-3"> Order Placed</h3>
    <p class="text-black">Units will be alloted subject to realization of funds in AMC's account.</p>
  </Modal.Body>
  <div className="bg-red text-center py-2 order-b">
    <Link to="#" class="text-white fw-bold" onClick={()=>
    setShow(false)}>
    <h4>OK</h4>
    </Link>
  </div>
</Modal>
</>
)
}
export default OderSucess;