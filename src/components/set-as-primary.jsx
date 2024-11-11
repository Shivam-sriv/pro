import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
const SetAsPrimary = () => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
return (
<>
<a href="#" className="text-red text-xs ps-2" onClick={handleShow}>
Set as Primary
</a>
<Modal
  show={show}
  onHide={handleClose}
  centered
  size="sm"
  className="bg-trans"
  >
  <Modal.Body>
    <p className=" fw-500 text-center">
      Are You Sure want to set as primary Bank ?
    </p>
    <div className=" order-b d-flex justify-content-around pb-4">
      <div className="">
        <button
          className="rounded border-dash px-3 py-1 single-drop"
          onClick={handleClose}
          >
        Yes
        </button>
      </div>
      <div className="">
        <button className="rounded border-dash single-drop px-3 py-1">
        No
        </button>
      </div>
    </div>
  </Modal.Body>
</Modal>
</>
);
};
export default SetAsPrimary;