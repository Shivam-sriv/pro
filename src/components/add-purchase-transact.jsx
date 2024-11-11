import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Cart_Delete from "./delete-confirmation";
import Form from "react-bootstrap/Form";
import { getFolioByAmc } from "../apisMethods";

import { notify } from "../pages/toastCreater";

const AddPurchaseTransact = ({ show, setShow, amcList,userProfileData }) => {
  const [amc, setAmc] = useState("");
  const [folio, setFolio] = useState("");
  const [folioList, setFolioList] = useState([]);
  const [folioLoading, setFolioLoading] = useState(false);
  const [assetClass, setAssetClass] = useState(1);
  const [option, setOption] = useState(1);
  const [profileName, setProfileName] = useState('');

  const amcChangeHandler = (e) => {
    // console.log(e.target.options[e.target.selectedIndex].innerHTML);
    const value = e.target.value;
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    setAmc(value);

    if (value) {
      setFolioLoading(true);
      getFolioByAmc(
        { pan: "AHNPG8965C", amc_code: Number(value) },
        headers
      ).then((res) => {
        if (!res.data) {
          notify("error", res.error.response.data.msg);
          setFolioLoading(false);
        } else {
          setFolioList(res.data.data);
          setFolioLoading(false);
        }
      });
    } else {
      setFolioList([]);
    }
  };

  return (
    <>
      <div className="">
        <Modal
          show={show}
          scrollable={true}
          onHide={() => setShow(false)}
          size="lg"
          className="invest-gray "
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="fs-5">Additional Purchase</Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-4">
            <Form>
              <div className="row mb-2">
                <div className="col-md-5">
                  <Form.Group>
                    <Form.Label>
                      Select Profile <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select className="bg-c" value={profileName}
                     onChange={(e) => setProfileName(e.target.value)}>
                    <option value="">Select Profile</option>
                      {userProfileData.length > 0 ? userProfileData.map((el) => (
                        <option value={el.PAN} key={el.PAN}>
                          {el.NAME}
                        </option>
                      )):null}
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-7">
                  <Form.Group
                    className="pt-lg-4 mt-lg-3 d-flex"
                    controlId="formBasicRadio"
                  >
                    <Form.Check
                      type="radio"
                      label="Existing Scheme"
                      name="formHorizontalRadios"
                      id="equity"
                      className="pe-3 fs-sm-15"
                    />
                    <Form.Check
                      type="radio"
                      label="New Scheme"
                      name="formHorizontalRadios"
                      id="debt"
                      className="pe-3 fs-sm-15"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-5">
                  <Form.Group>
                    <Form.Label>
                      Select AMC <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      className="bg-c"
                      placeholder="Select AMC"
                      value={amc}
                      onChange={amcChangeHandler}
                    >
                      <option value="">Select AMC</option>
                      {amcList.map((el) => (
                        <option value={el.amc_code} key={el.amc_code}>
                          {el.fund}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-3">
                  <Form.Group className=" " controlId="formBasicRadio">
                    <Form.Label>
                      Asset Class <span className="text-danger">*</span>
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Check
                        type="radio"
                        label="Equity"
                        value={1}
                        checked={assetClass == 1}
                        onChange={(e) => setAssetClass(e.target.value)}
                        name="formHorizontalRadios1"
                        id="equity"
                        className="pe-3"
                      />
                      <Form.Check
                        type="radio"
                        label="Debt"
                        value={3}
                        checked={assetClass == 3}
                        onChange={(e) => setAssetClass(e.target.value)}
                        name="formHorizontalRadios1"
                        id="debt"
                        className="pe-3"
                      />
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-3">
                  <Form.Group className=" " controlId="formBasicRadio">
                    <Form.Label>
                      Option <span className="text-danger">*</span>
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Check
                        type="radio"
                        label="Growth"
                        name="formHorizontalRadios2"
                        id="Growth"
                        value={1}
                        checked={option == 1}
                        onChange={(e) => setOption(e.target.value)}
                        className="pe-3"
                      />
                      <Form.Check
                        type="radio"
                        label="IDCW"
                        name="formHorizontalRadios2"
                        value={2}
                        checked={option == 2}
                        onChange={(e) => setOption(e.target.value)}
                        id="IDCW"
                        className="pe-3"
                      />
                    </div>
                  </Form.Group>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-lg-4 col-md-6">
                  <Form.Group>
                    <Form.Label>
                      Select Folio <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      className="bg-c"
                      value={folio}
                      onChange={(e) => setFolio(e.target.value)}
                      disabled={folioLoading}
                    >
                      <option>select folio</option>
                      {folioList.map((el) => (
                        <option value={el.folio} key={el.folio}>
                          {el.folio}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Form.Group>
                    <Form.Label>
                      Select Scheme <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select className="bg-c">
                      <option>select</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Form.Group>
                    <Form.Label>
                      Enter Amount <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      className="bg-c"
                      type="text"
                      placeholder="Enter Amount"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-12 ">
                <a
                  href="javascript:void(0)"
                  className="btn btn-danger float-right my-4"
                >
                  + Add
                </a>
              </div>
              <div className="col-md-12 px-0">
                <div className="table-responsive w-100">
                  <table className="table custom bg-white mt-5 mb-3">
                    <tr>
                      <th className="wd-7rem">Profile</th>
                      <th className="wd-7rem">Scheme Name</th>
                      <th className="wd-7rem">Folio Number</th>
                      <th>Amount</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>Profile</td>
                      <td>Scheme Name</td>
                      <td>Folio Number</td>
                      <td>3500</td>
                      <td>
                        <Cart_Delete />
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="row mb-2">
                  <div className="col-md-5">
                    <Form.Group>
                      <Form.Label>
                        Select Payment Mode
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select className="bg-c">
                        <option value="select">select</option>
                        <option>Net Banking</option>
                        <option>UPI</option>
                        <option>RTGS/NEFT</option>
                        <option>Debit Mandate</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col-md-7">
                    <Form.Group
                      className="pt-lg-4 mt-lg-3 d-flex"
                      controlId="formBasicRadio"
                    >
                      <Form.Check
                        type="radio"
                        label="Immediate Payment"
                        name="formHorizontalRadios"
                        id="ImmediatePayment"
                        className="pe-3 fs-sm-15"
                      />
                      <Form.Check
                        type="radio"
                        label="Link On Email"
                        name="formHorizontalRadios"
                        id="LinkOnEmail"
                        className="pe-3 fs-sm-14"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-5">
                    <Form.Group>
                      <Form.Label>
                        Select Bank <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select className="bg-c">
                        <option>select</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col-md-7">
                    <Form.Group>
                      <Form.Label>
                        RTGS/NEFT Code <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        className="bg-c"
                        type="text"
                        placeholder="Enter Amount"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-5">
                  <Form.Group>
                    <Form.Label>
                      Date <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      className="bg-c"
                      type="date"
                      placeholder="Enter Amount"
                    />
                  </Form.Group>
                </div>
                <div className="col-md-12 mt-4">
                  <ul className="fs-13 mb-0 ps-0 lst-none">
                    <li>
                      <h6 className="text-red fs-14">Note :-</h6>
                    </li>
                    <li className="text-label">
                      <span className="text-red">*</span>Beneficiary Virtual
                      Account Number
                      <span className="text-black">
                        - (NSEMF2213995012944559)
                      </span>
                    </li>
                    <li className="text-label">
                      <span className="text-red">*</span>Beneficiary Account
                      Name
                      <span className="text-black">
                        - NSE Clearing – New Mutual Fund Platform
                      </span>
                    </li>
                    <li className="text-label">
                      <span className="text-red">*</span>IFSC code
                      <span className="text-black">- HDFC0000060</span>
                    </li>
                    <li className="text-label">
                      <span className="text-red">*</span>Bank Name
                      <span className="text-black">- HDFC Bank Ltd</span>
                    </li>
                    <li className="text-label">
                      <span className="text-red">*</span>Branch Name
                      <span className="text-black">- Fort, Mumbai</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <button className="btn-custom" type="button">
              Order Now
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export default AddPurchaseTransact;
