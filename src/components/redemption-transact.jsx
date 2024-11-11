import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Cart_Delete from "./delete-confirmation";
import Form from "react-bootstrap/Form";
import { getFolioByAmc } from "../apisMethods";
import { notify } from "../pages/toastCreater";

const RedemptionTransact = ({ show, setShow, amcList,userProfileData }) => {
  const [profile, setProfile] = useState("");
  const [amc, setAmc] = useState("");
  const [folio, setFolio] = useState(""); 
  const [folioList, setFolioList] = useState([]);
  const [folioLoading, setFolioLoading] = useState(false);
  const [redemptionType, setRedemptionType] = useState("Amount");
  const [scheme, setScheme] = useState("");
  const [amount, setAmount] = useState("");
  const [orderList, setOrderList] = useState([]);

  const amcChangeHandler = (e) => {
    // console.log(e.target.options[e.target.selectedIndex].innerHTML);
    const value = e.target.value;
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    setAmc(value);

    if (value) {
      setFolioLoading(true);
      getFolioByAmc(
        { pan: "AHNPG8965C", amc_code: Number(value.split("_")[0]) },
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
      setFolio("");
    }
  };

  const addTransact = () => {
    if (!profile || !amc || !folio || !redemptionType || !scheme || !amount) {
      notify("warn", "All Fields are Mandatory");
      return;
    }
    setOrderList([
      ...orderList,
      { profile, amc, folio, redemptionType, scheme, amount },
    ]);
  };

  const deleteData = (i) => {
    orderList.splice(i, 1);
    setOrderList([...orderList]);
  };

  const amountHandler = (e) => {
    const value = e.target.value;
    if ((Number(value) != NaN && Number(value) > 0) || value == "") {
      setAmount(value);
    }
  };

  return (
    <>
      <div className="">
        <Modal
          show={show}
          onHide={() => setShow(false)}
          size="lg"
          className="invest-gray "
          centered
          scrollable={true}
        >
          <Modal.Header closeButton>
            <Modal.Title className="fs-5">Redemption</Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-4">
            <Form>
              <div className="row mb-2">
                <div className="col-lg-4 col-md-6">
                  <Form.Group>
                    <Form.Label>
                      Select Profile <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select className="bg-c" value={profile}
                     onChange={(e) => setProfile(e.target.value)}>
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
                        <option
                          value={el.amc_code + "_" + el.fund}
                          key={el.amc_code}
                        >
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
                      <option value="">select folio</option>
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
                      Select Scheme <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      className="bg-c"
                      value={scheme}
                      onChange={(e) => setScheme(e.target.value)}
                    >
                      <option value={""}>Select Scheme</option>
                      <option value={"raj"}>Rajkumar special scheme</option>
                      <option value={"vivek"}>Vivek sir special scheme</option>
                      <option value={"chitranshu"}>
                        Chitranshu sir special scheme
                      </option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-7">
                  <Form.Group className=" " controlId="formBasicRadio">
                    <Form.Label>
                      {" "}
                      Redemption Type <span className="text-danger">*</span>
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Check
                        type="radio"
                        label="By Amount"
                        name="formHorizontalRadios"
                        id="ByAmount"
                        value={"Amount"}
                        onChange={(e) => setRedemptionType(e.target.value)}
                        checked={redemptionType == "Amount"}
                        className="pe-lg-3 pe-2 fs-sm-14"
                      />
                      <Form.Check
                        type="radio"
                        label="By Units"
                        value={"Unit"}
                        onChange={(e) => setRedemptionType(e.target.value)}
                        checked={redemptionType == "Unit"}
                        name="formHorizontalRadios"
                        id="ByUnits"
                        className="pe-lg-3 pe-2 fs-sm-14"
                      />
                      <Form.Check
                        type="radio"
                        label="All Units"
                        name="formHorizontalRadios"
                        value={"Y"}
                        onChange={(e) => setRedemptionType(e.target.value)}
                        checked={redemptionType == "Y"}
                        id="AllUnits"
                        className="pe-lg-3 pe-2 fs-sm-14"
                      />
                    </div>
                  </Form.Group>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-5">
                  <Form.Group>
                    <Form.Label>
                      Enter{" "}
                      {redemptionType == "Y" ? "All Units" : redemptionType}
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      className="bg-c"
                      type="text"
                      placeholder={
                        redemptionType == "Y" ? "All Units" : redemptionType
                      }
                      value={amount}
                      onChange={amountHandler}
                    />
                    <small className="text-label float-right">
                      Min Amount : 1000
                    </small>
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-12 " onClick={addTransact}>
                <a
                  href="javascript:void(0)"
                  className="btn btn-danger  my-4 float-right"
                >
                  + Add
                </a>
              </div>
              <div className="col-md-12 px-0" id="tbt">
                <div className="table-responsive w-100">
                  <table className="table custom bg-white mt-5 mb-3">
                    <tr>
                      <th>Profile</th>
                      <th className="wd-7rem">Scheme Name</th>
                      <th className="wd-7rem">Folio Number</th>
                      <th className="wd-7rem">Redemption Type</th>
                      <th>Amount</th>
                      <th></th>
                    </tr>
                    {orderList.map((el, i) => {
                      return (
                        <tr key={i}>
                          <td>{el.profile}</td>
                          <td>{el.scheme}</td>
                          <td>{el.folio}</td>
                          <td>
                            {el.redemptionType === "Y"
                              ? "All Units"
                              : el.redemptionType}
                          </td>
                          <td>{el.amount}</td>
                          <td>
                            <Cart_Delete id={i} deleteData={deleteData} />
                          </td>
                        </tr>
                      );
                    })}
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
export default RedemptionTransact;
