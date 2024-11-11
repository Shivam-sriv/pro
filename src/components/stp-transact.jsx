import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Cart_Delete from "./delete-confirmation";
import Form from "react-bootstrap/Form";

import { notify } from "../pages/toastCreater";
import { getFolioByAmc } from "../apisMethods";

const STPTransact = ({ show, setShow, amcList,userProfileData }) => {
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
    console.log(value);
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
          onHide={() => setShow(false)}
          size="lg"
          scrollable={true}
          className="invest-gray rounded"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="fs-5">STP</Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-4">
            <Form>
              <div className="row mb-2">
                <div className="col-lg-4 col-md-6">
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
                <div className="col-lg-4 col-md-6">
                  <Form.Group>
                    <Form.Label>
                      Select AMC <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      className="bg-c"
                      placeholder="Select AMC"
                      onChange={amcChangeHandler}
                      value={amc}
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
              </div>
              <div className="row mb-2">
                <div className="col-md-5">
                  <Form.Group>
                    <Form.Label>
                      Select Source Scheme{" "}
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select className="bg-c">
                      <option>select</option>
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
                      {" "}
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
                      Select Target Scheme{" "}
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select className="bg-c">
                      <option>select</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Form.Group>
                    <Form.Label>
                      STP From <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control className="bg-c" type="month" />
                  </Form.Group>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Form.Group>
                    <Form.Label>
                      STP To <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control className="bg-c" type="month" />
                  </Form.Group>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-lg-4 col-md-6">
                  <Form.Group>
                    <Form.Label>
                      Select Frequency <span className="text-danger">*</span>
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
                    <small className="text-label float-right">
                      Min Amount : 1000
                    </small>
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
              <div className="col-md-12 px-0" id="tbt">
                <div className="table-responsive w-100">
                  <table className="table custom table-responsive bg-white mt-5 mb-3">
                    <tr>
                      <th>Profile</th>
                      <th className="wd-7rem"> Source Scheme</th>
                      <th className="wd-7rem"> Folio Number</th>
                      <th className="wd-7rem">Target Scheme</th>
                      <th className="wd-7rem">STP From</th>
                      <th className="wd-7rem">STP To</th>
                      <th className="wd-7rem">Frequency</th>
                      <th>Amount</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>Profile</td>
                      <td>Source Scheme </td>
                      <td>Folio number</td>
                      <td>Target Scheme</td>
                      <td>5/2/22</td>
                      <td>10/3/22</td>
                      <td>Frequency</td>
                      <td>6000</td>
                      <td>
                        <Cart_Delete />
                      </td>
                    </tr>
                  </table>
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
export default STPTransact;
