import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Cart_Delete from "./delete-confirmation";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import SWW from "./something-went-wrong";
import { getFolioByAmc, userProfileIIN } from "../apisMethods";
import { notify } from "../pages/toastCreater";

const SIPTransact = ({ show, setShow, amcList, userProfileData }) => {
  const [confirmShow, setConfirmShow] = useState(false);

  const [amc, setAmc] = useState("");
  const [folio, setFolio] = useState("");
  const [folioList, setFolioList] = useState([]);
  const [folioLoading, setFolioLoading] = useState(false);
  const [schemeType, setSchemetype] = useState("Y");
  const [headers, setHeaders] = useState('');
  const [userDetails, setUserDetails] = useState({});
  const [profileName, setProfileName] = useState('');

  useEffect(()=>{
    let token = localStorage.getItem("token");
    const header = { headers: { Authorization: `Bearer ${token}` } };
    setHeaders(header)
    const userdata = JSON.parse(localStorage.getItem("user"));
    setUserDetails(userdata)

  },[])

  const profileChangeHandler = (e) => {
    let reqData = JSON.parse(e.target.value)
    console.log(reqData);
    setProfileName(e.target.value)
    userProfileIIN(reqData, headers).then(res => {
      console.log(res.data);
    })
  }
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

  const closeInnerModal = () => {
    setConfirmShow(true);
    setShow(false);
  };
  return (
    <>
      <div className="">
        <Modal
          show={show}
          size="lg"
          onHide={() => setShow(false)}
          className="invest-gray"
          scrollable={true}
          centered
        >
          <Modal.Header className="" closeButton>
            <Modal.Title className="fs-5">SIP</Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-4">
            <Form>
              <div className="row mb-2">
                <div className="col-md-5">
                  <Form.Group>
                    <Form.Label>
                      Select Profile <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select className="bg-c"
                      value={profileName}
                      onChange={profileChangeHandler}>
                      <option value="">Select Profile</option>
                      {userProfileData.length > 0 ? userProfileData.map((el) => (
                        <option value={JSON.stringify({ pan: el.PAN, gpan: el.GPAN, jtname1: el.JOINT_NAME1 })} key={el.PAN}>
                          {`${el.NAME} | ${el.JOINT_NAME1}`}
                        </option>
                      )) : null}
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
                      value={"Y"}
                      onChange={(e) => setSchemetype(e.target.value)}
                      checked={schemeType == "Y"}
                      id="equity"
                      className="pe-3 fs-sm-14"
                    />
                    <Form.Check
                      type="radio"
                      label="New Scheme"
                      name="formHorizontalRadios"
                      value={"N"}
                      onChange={(e) => setSchemetype(e.target.value)}
                      checked={schemeType == "N"}
                      id="debt"
                      className="pe-3 fs-sm-14"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-lg-4 col-md-6">
                  <Form.Group>
                    <Form.Label>
                      Select AMC <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      className="bg-c"
                      onChange={amcChangeHandler}
                      value={amc}
                    >
                      <option value="">Select AMC</option>
                      {amcList.map((el) => (
                        <option value={el.amc_code} key={el.amc_code}>
                          {el.s_name 
                          }
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
                      <option>select</option>
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
                    <Form.Select className="bg-c" disabled={schemeType == "N"}>
                      <option>select folio</option>
                      <option>rajkumar scheme</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="row ">
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
                <div className="col-lg-4 col-md-6">
                  <Form.Group>
                    <Form.Label>
                      SIP Date <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select className="bg-c">
                      <option>select</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Form.Group>
                    <Form.Label>
                      SIP From <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control className="bg-c" type="month" />
                  </Form.Group>
                </div>
              </div>
              <div className="row align-items-stretch">
                <div className="col-lg-4 col-md-6">
                  <Form.Group>
                    <Form.Label>
                      SIP To<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control className="bg-c" type="month" />
                  </Form.Group>
                </div>
                <div className="col-md-3 align-self-center">
                  <Form.Group className="d-flex mt-4">
                    <Form.Check
                      label="Perpetual"
                      name="formHorizontalRadios1"
                      id="debt"
                      className="pe-3"
                    />
                    <spna className="text-danger">*</spna>
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
                  <table className="table custom bg-white mt-5 mb-3">
                    <tr>
                      <th>Profile</th>
                      <th className="wd-7rem">Scheme Name</th>
                      <th className="wd-7rem">Folio Number</th>
                      <th className="wd-7rem">SIP From</th>
                      <th className="wd-7rem">SIP To</th>
                      <th>Amount</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>Profile</td>
                      <td>Scheme Name</td>
                      <td>Folio Number</td>
                      <td>20/10/2021</td>
                      <td>20/11/2021</td>
                      <td>3500</td>
                      <td>
                        <Cart_Delete />
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <Form.Group>
                      <Form.Label>
                        Select Mandate <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select className="bg-c">
                        <option>select</option>
                      </Form.Select>
                    </Form.Group>
                    <Link
                      to="/dashboard/bank-and-mandate"
                      className="text-red fs-13"
                    >
                      Create Mandate
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <button
              className="btn-custom"
              type="button"
              onClick={closeInnerModal}
            >
              Order Now
            </button>
          </Modal.Footer>
        </Modal>
      </div>
      <SWW show={confirmShow} setShow={setConfirmShow} />
    </>
  );
};
export default SIPTransact;
