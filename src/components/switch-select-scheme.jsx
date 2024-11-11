import { Checkbox } from "@mui/material";
import React, {useState} from "react";
import { ModalFooter } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
const Select_Scheme = ({show,setShow})=>{
  
return (
    <>

       <Modal show={show}  onHide={setShow} centered  className="animate__animated animate__zoomIn animate__fast  " size="lg">
     
        <Modal.Body className="text-start">      
      <table className="table align-middle">
<thead>
    <tr className="text-red">
        <th>Scheme Name  </th>
        <th>Investment Horizon</th>
        <th>Average Return</th>
        <th></th>

                                                                           
    </tr>
</thead>
<tbody>
    <tr>
        <td>Axis Arbitrage Fund-Regular</td>
        <td>7 Years</td>
        <td>10%</td>
        <td> <Form.Check type="radio"  name="formHorizontalRadios"  className="pe-3 fs-sm-14" /></td>
    </tr>
    <tr>
        <td>Axis Arbitrage Fund-Regular</td>
        <td>7 Years</td>
        <td>10%</td>
        <td> <Form.Check type="radio"  name="formHorizontalRadios"  className="pe-3 fs-sm-14" /></td>
    </tr>
    <tr>
        <td>Axis Arbitrage Fund-Regular</td>
        <td>7 Years</td>
        <td>10%</td>
        <td> <Form.Check type="radio"  name="formHorizontalRadios"  className="pe-3 fs-sm-14" /></td>
    </tr>
</tbody>
      </table>
       
        </Modal.Body>
        <Modal.Footer className="border-0">
        <button className="btn btn-danger " type="button"   onClick={setShow} >OK</button>
       
        </Modal.Footer>
       
      </Modal>
    </>
  )
}
export default Select_Scheme;