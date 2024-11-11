import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import success from "../assets/images/others/successfully.png";
const TransactSuccess = ({ show, setShow }) => {
  return (
    <>
      <div className="">
        <Modal
          show={show}
          onHide={() => setShow(false)}
          size="lg"
          className="invest-gray "
          centered
        >
          <Modal.Body closeButton className="px-4 text-center">
            <img className="img-fluid wd-150" src={success} alt="" />
            <h3 className="success-c font-weight-500 py-3">
              Successful Transaction with Following Details
            </h3>
            <div className="row">
              <div className="col-md-5 border-right">
                <table className="table mx-3 text-start fs-15 fs-sm-14">
                  <tr>
                    <td>Unique Number </td>
                    <td>:</td>
                    <td className="ps-3">12345678</td>
                  </tr>
                  <tr>
                    <td>Trxn Number </td>
                    <td>:</td>
                    <td className="ps-3">12346195</td>
                  </tr>

                  <tr>
                    <td>Amount </td>
                    <td>:</td>
                    <td className="ps-3">1,000</td>
                  </tr>
                  <tr>
                    <td>Status </td>
                    <td>:</td>
                    <td className="ps-3">Successful</td>
                  </tr>
                </table>
              </div>
              <div className="col-md-7">
                <table className="table mx-3 text-start fs-15 fs-sm-14">
                  <tr>
                    <td>Folio Number </td>
                    <td>:</td>
                    <td className="ps-3">12345678</td>
                  </tr>
                  <tr>
                    <td>Fund</td>
                    <td>:</td>
                    <td className="ps-3">Axis Mutual Fund</td>
                  </tr>
                  <tr>
                    <td>Folio Number </td>
                    <td>:</td>
                    <td className="ps-3">12345678</td>
                  </tr>

                  <tr>
                    <td>Scheme Name </td>
                    <td>:</td>
                    <td className="ps-3">
                      Axis Arbitrage Fund - Regular Growth
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <hr />
            <div className="py-2">
              <p className="text-black fs-13">
                <span className="text-red text-left fw-500 fs-16">Note:</span>{" "}
                Payment link has been sent on your registered mail id and mobile
                number.The Link shall remain active for the next 48 hours.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer className="border-0"></Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export default TransactSuccess;
