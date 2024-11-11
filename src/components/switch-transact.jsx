import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Cart_Delete from "./delete-confirmation";
import Form from "react-bootstrap/Form";
import { notify } from "../pages/toastCreater";
import { getFolioByAmc } from "../apisMethods";

const SwitchTransact = ({ show, setShow, amcList,userProfileData }) => {
  const [amc, setAmc] = useState("");
  const [folio, setFolio] = useState("");
  const [folioList, setFolioList] = useState([]);
  const [folioLoading, setFolioLoading] = useState(false);
  const [profile, setProfile] = useState("")
  const [scheme, setScheme] = useState("")
  const [assetClass, setAssetClass] = useState("Equity")
  const [switchType, setSwitchType] = useState("Amount")
  const [option, setOption] = useState("Growth")
  const [targetScheme, setTargetScheme] = useState("")
  const [amount , setAmount] = useState()
  const [switchList, setSwitchList] = useState([])



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

  const addSwitch = () =>{
    if (!profile || !amc || !folio || !targetScheme || !switchType || !scheme || !amount) {
      notify("warn", "All Fields are Mandatory");
      return;
    }
    setSwitchList([...switchList, {amc, folio, profile, scheme, targetScheme, amount, switchType}])
    
  }
  const deleteData = (i) => {
    switchList.splice(i, 1);
    setSwitchList([...switchList]);
  };

  return (
    <>
      <div className="">
        <Modal
          show={show}
          onHide={() => setShow(false)}
          size="lg"
          className="invest-gray "
          scrollable={true}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="fs-5">Switch</Modal.Title>
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
                      <option>Select folio</option>
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
                    <Form.Select className="bg-c" value={scheme} onChange={(e) => setScheme(e.target.value)}>
                      <option value={""}>Select</option>
                      <option value={"Nippom India"}>Nippom India</option>
                      <option value={"Axis Bluchip"}>Axis Bluchip</option>
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
                        name="assetClass"
                        value={"Equity"}
                        id="equity"
                        checked={assetClass == "Equity"}
                        onChange={(e) => setAssetClass(e.target.value)}
                        className="pe-3"
                      />
                      <Form.Check
                        type="radio"
                        label="Debt"
                        name="assetClass"
                        checked={assetClass == "Debt"}
                        onChange={(e) => setAssetClass(e.target.value)}
                        value={"Debt"}
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
                        name="options"
                        value={"Growth"}
                        onChange={(e) => setOption(e.target.value)}
                        checked={option == "Growth"}
                        id="Growth"
                        className="pe-3"
                      />
                      <Form.Check
                        type="radio"
                        label="IDCW"
                        name="options"
                        value={"IDCW"}
                        onChange={(e) => setOption(e.target.value)}
                        checked={option == "IDCW"}
                        id="IDCW"
                        className="pe-3"
                      />
                    </div>
                  </Form.Group>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-5">
                  <Form.Group>
                    <Form.Label>
                      Select Target Scheme{" "}
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select className="bg-c" value={targetScheme} onChange={(e)=>setTargetScheme(e.target.value)}>
                      <option value={""}>Select Target Scheme</option>
                      <option value={"Nippom India"}>Nippom India</option>
                      <option value={"Axis Bluchip"}>Axis Bluchip</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-7">
                  <Form.Group className=" " controlId="formBasicRadio">
                    <Form.Label>
                      {" "}
                      Switch Type <span className="text-danger">*</span>
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Check
                        type="radio"
                        label="By Amount"
                        name="switchType"
                        value={"Amount"}
                        onChange={(e) => setSwitchType(e.target.value)}
                        checked={switchType == "Amount"}
                        id="ByAmount"
                        className="pe-3 fs-sm-14"
                      />
                      <Form.Check
                        type="radio"
                        label="By Units"
                        name="switchType"
                        id="ByUnits"
                        className="pe-3 fs-sm-14"
                        value={"Unit"}
                        onChange={(e) => setSwitchType(e.target.value)}
                        checked={switchType == "Unit"}
                      />
                      <Form.Check
                        type="radio"
                        label="All Units"
                        name="switchType"
                        id="AllUnits"
                        value={"Y"}
                        onChange={(e) => setSwitchType(e.target.value)}
                        checked={switchType == "Y"}
                        className="pe-3 fs-sm-14"
                      />
                    </div>
                  </Form.Group>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-5">
                  <Form.Group>
                    <Form.Label>
                      Enter Amount <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      className="bg-c"
                      type="text"
                      placeholder="Enter Amount"
                      value={amount}
                      onChange={(e)=>{
                        let value = e.target.value
                        console.log(Number(value) != NaN);
                        if(Number(value) != NaN && Number(value) >0){
                          setAmount(value)
                        }else{
                          setAmount()
                        }
                      }}
                    />
                    <small className="text-label float-right">
                      Min Amount : 1000
                    </small>
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-12 "  onClick={addSwitch}>
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
                      <th className="wd-7rem">Target Scheme</th>
                      <th className="wd-7rem">Switch Type</th>
                      <th className="wd-7rem">Amount/Unit</th>
                      <th className="wd-7rem"></th>
                    </tr>
                  {switchList && switchList.map((item, i)=>{
                  return ( <tr>
                      <td>{item.profile}</td>
                      <td>{item.scheme}</td>
                      <td>{item.folio}</td>
                      <td>{item.scheme}</td>
                      <td>{item.switchType}</td>
                      <td>{item.amount}</td>
                      <td>
                        <Cart_Delete id={i} deleteData={deleteData}/>
                      </td>
                    </tr>)
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
export default SwitchTransact;
