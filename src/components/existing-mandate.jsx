import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
const ExistingMandate = ({show,setShow}) =>{
return (
<>
<Modal show={show} size={"lg"}  onHide={()=>
  setShow(false)}  className="animate__animated animate__zoomIn animate__fast" centered>
  <Modal.Header closeButton>
    <Modal.Title>Existing Mandate</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Table>
      <thead>
        <tr className="text-center text-red">
          <th>UMRN No.</th>
          <th>Amount</th>
          <th>From</th>
          <th>To</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center">
          <td>KKBK7011503220004544</td>
          <td>1000000</td>
          <td>15-MAR-2022</td>
          <td>31-DEC-2099</td>
        </tr>
      </tbody>
    </Table>
  </Modal.Body>
</Modal>
</>
)
}
export default ExistingMandate