import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Thanku from "./thanku";
const RequestACall = ({ show, setShow }) => {
const [confirmShow, setConfirmShow] = useState(false);
const closeInnerModal = () => {
setConfirmShow(true);
setShow(false);
};
return (
<>
<Modal
  show={show}
  onHide={() =>
  setShow(false)}
  className="border-red"
  centered
  >
  <Modal.Header closeButton>
    <Modal.Title className="fs-5">Request a call back</Modal.Title>
  </Modal.Header>
  <Modal.Body className="px-4">
    <Form>
      <div className="">
        <Form.Group className="mb-2">
          <Form.Label>
            Your Name<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            className="single-drop border-0"
            type="text"
            placeholder="Enter Your Name"
            />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>
            Your Email <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            className="single-drop border-0"
            type="text"
            placeholder="Enter Your Email"
            />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>
            Contact Number <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            className="single-drop border-0"
            type="text"
            placeholder="Enter Your Number"
            />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>
            Description <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            className="single-drop border-0"
            type="text"
            placeholder="Please Mention Your Query ! "
            />
        </Form.Group>
        <Form.Group>
          <button
            type="button"
            className="otp-btn mt-3 br-15 float-right"
            onClick={closeInnerModal}
            >
          Submit
          </button>
        </Form.Group>
      </div>
    </Form>
  </Modal.Body>
  <Modal.Footer className="border-0"></Modal.Footer>
</Modal>
<Thanku show={confirmShow} setShow={setConfirmShow} />
</>
);
};
export default RequestACall;