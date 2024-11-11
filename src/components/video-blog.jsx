import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import OderSuccess from "../../src/assets/images/successfully.png"
import { Link } from "react-router-dom";
import { FaVideo} from "react-icons/fa";
import { TbBrandBlogger } from "react-icons/tb";
const Video_blog = ({show,setShow})=>{
  
return (
    <>

       <Modal show={show}  onHide={setShow} centered  className="animate__animated animate__zoomIn animate__fast  ">
       <Modal.Header className='py-0'  >
    <div className="form-group">
    <p className="text-black fs-13">
  <b> simply dummy text of the printing and typesetting industry</b> 
        </p>
      </div>
    </Modal.Header>
        <Modal.Body className="text-start">      
       <div>
        <span><FaVideo className="text-red"/></span> <span className="fs-13"><b>Video - </b> <a href="#" className="text-decoration-underline">https://youtu.be/hK779_CL12k?si=QHvxoC-I87KEDzPC</a></span>
       </div>
       <div>
        <span><TbBrandBlogger className="text-red"/></span> <span className="fs-13"><b>Blog - </b> <a href="#" className="text-decoration-underline">https://bfccapital.com/blog/why-is-knowing-your-investment-horizon-necessary-before-investing-in-mutual-funds/</a></span>
       </div>
       
        </Modal.Body>
        <div className="bg-red text-center py-2 order-b">
       <Link to="#" class="text-white font-weight-bold" onClick={setShow}><h4>OK</h4></Link>
       </div>
      </Modal>
    </>
  )
}
export default Video_blog;