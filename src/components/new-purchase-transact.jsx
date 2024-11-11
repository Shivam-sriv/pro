import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Cart_Delete from "./delete-confirmation";
import Form from "react-bootstrap/Form";
import TransactSuccess from "./transact-success";
import { getNSEProductCode, getSchemeList, newPurchase, userProfileIIN } from "../apisMethods";

const NewPurchaseTransact = ({ show, setShow, amcList, userProfileData }) => {
  const [confirmShow, setConfirmShow] = useState(false);
  const [assetClass, setAssetClass] = useState(1);
  const [option, setOption] = useState(1);
  const [amc, setAmc] = useState('');
  const [tempAmc, setTempAmc] = useState({});
  const [schemeList, setSchemeList] = useState([]);
  const [scheme, setScheme] = useState("");
  const [profileName, setProfileName] = useState('');
  const [tempProfileName, setTempProfileName] = useState({});
  const [headers, setHeaders] = useState('');
  const [amount, setAmount] = useState();
  const [newPurchaseDetails, setNewPurchaseDetails] = useState([]);
  const [paymentMode, setPaymentMode] = useState('');
  const [hideRTGS, setHideRTGS] = useState('');
  const [hideMandate, setHideMandate] = useState('');
  const [hideImidiatePayment, setHideImidiatePayment] = useState('');
  const [imediateOrEmail, setImediateOrEmail] = useState(1);
  const [userDetailsLocal, setUserDetailsLocal] = useState({});
  const [iins, setIins] = useState({});
  const [productCodeArray, setProductCodeArray] = useState([]);

  const orderNowHandle = () => {


    let reqData = {
      email: userDetailsLocal.email,
      tax_status: iins.tax_status,
      sub_trxn_type: "N",
      trxn_acceptance: "ALL",
      payment_mode: paymentMode,
      instrm_amount: amount,
      debit_amount_type: "",
      Return_paymnt_flag: "Y",
      Client_callback_url: "API URL",
      ach_exist: "Y",
      amc: tempAmc.amcName,
      product_code: productCodeArray[0].PRODUCT_CODE,
      reinvest: "Z",
      amount: amount,
      input_ref_no: "",
      perpetual_flag: "N",
      insurance_enabled: "N",
      instrm_date: "",
      rtgs_code: "",
      umrn: "",
      folio: "",
      iin: iins.iin,
      accountNo: "2245184705",
      bank_code: "162",
      ifsc_code: "KKBK0005197",
      branch: "ALAMBAGH LUCKNOW",
      holder_name: "Chitranshu Srivastava"
    }
    console.log("reqData",reqData);
    newPurchase(reqData, headers).then(res => {
      if (!res.data) {

      } else {
        setConfirmShow(true);
        setShow(false);
      }
    })

  };

  const amcChangeHandler = (e) => {
    console.log("amcc", e.target.value);
    let reqData = JSON.parse(e.target.value)
    console.log("selected Amc", reqData);
    setAmc(e.target.value)
    setTempAmc(reqData)
  }
  const profileChangeHandler = (e) => {
    console.log("aaaaa", amc);
    let reqData = JSON.parse(e.target.value)
    console.log("profileName", reqData);
    setProfileName(e.target.value)
    setTempProfileName(reqData)
    userProfileIIN(reqData, headers).then(res => {
      console.log(res.data?.data);
      setIins({ iin: res.data?.data?.customer_id, tax_status: res.data?.data?.tax_status_code })
    })
  }

  const findScheme = () => {
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    console.log("amc", tempAmc);
    const reqBody = {
      amc_code: Number(tempAmc.amcCode),
      asset_code: Number(assetClass),
      opt_code: Number(option),
      rta: tempAmc.rta,
      rtamccode: tempAmc.rtaAmcCode,
    };

    if (assetClass && tempAmc && option) {
      getSchemeList(reqBody, headers).then((res) => {
        if (!res.data) {
          console.log(res.error);
        } else {
          setSchemeList(res.data?.data);
          console.log("setSchemeList", res.data.data);
        }
      });
    }
  };

  const amountChangeHandler = (e) => {
    console.log(e.target.value);
    setAmount(e.target.value)
  }
  useEffect(() => {
    let token = localStorage.getItem("token");
    const header = { headers: { Authorization: `Bearer ${token}` } };
    const userdata = JSON.parse(localStorage.getItem("user"));
    setUserDetailsLocal(userdata)
    setHeaders(header)
    if (amcList.length > 0) {
      findScheme();
    }
  }, [assetClass, option, tempAmc, amcList]);

  const addNewPurchase = () => {
    setNewPurchaseDetails([...newPurchaseDetails, { profileName: tempProfileName.name, amcName: tempAmc.amcName, amount }])
    // console.log
  }

  const deleteData = (i) => {
    newPurchaseDetails.splice(i, 1);
    setNewPurchaseDetails([...newPurchaseDetails]);
  };

  const changePaymentModeHandler = (e) => {
    console.log(e.target.value);
    let value = e.target.value
    setPaymentMode(e.target.value)
    if (value === "OL" || value === "UPI") {
      setHideRTGS('d-none')
      setHideMandate('d-none')
      setHideImidiatePayment('')
    } else if (value === "TR") {
      setHideRTGS('')
      setHideMandate('d-none')
      setHideImidiatePayment('d-none')
    } else if (value === "M") {
      setHideMandate('')
      setHideRTGS('d-none')
      setHideImidiatePayment('d-none')
    }
  }

  const changBankHandler = (e) => {
    console.log(e.target.value);
    
  }
  const changeSchemeHandler = (e) => {
    console.log(e.target.value);
    setScheme(e.target.value)
    let reqData = {
      rta: tempAmc.rta,
      productCode: e.target.value,
      RTAamcCode: tempAmc.rtaAmcCode
    }
    console.log(reqData);
    getNSEProductCode(reqData, headers).then(res => {
      console.log(res.data?.data);
      setProductCodeArray(res.data?.data)

    })
  }
  return (
    <>
      <div className="">
        <Modal
          show={show}
          onHide={() => setShow(false)}
          size="lg"
          className="invest-gray"
          centered
          scrollable={true}
        >
          <Modal.Header closeButton>
            <Modal.Title className="fs-5">New Purchase</Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-4">
            <Form>
              <div className="row mb-2">
                <div className="col-lg-4 col-md-6">
                  <Form.Group>
                    <Form.Label>
                      Select Profile <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select className="bg-c"
                      value={profileName}
                      onChange={profileChangeHandler}>
                      <option value="">Select Profile</option>
                      {userProfileData.length > 0 ? userProfileData.map((el) => (
                        <option value={JSON.stringify({ name: el.NAME, pan: el.PAN, gpan: el.GUARD_PAN, jtname1: el.JOINT_NAME1, jtname2: el.JOINT_NAME2, nominee: el.NOM_NAME })} key={el.PAN}>
                          {`${el.NAME} | ${el.JOINT_NAME1}`}
                        </option>
                      )) : null}
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
                      value={amc}
                      onChange={amcChangeHandler}
                    >
                      {amcList.map((el) => (
                        <option value={JSON.stringify({ amcName: el.s_name, amcCode: el.amc_code, rtaAmcCode: el.rtamccode, rta: el.rta })} key={el.s_name}>
                          {el.s_name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Form.Group className=" " controlId="formBasicRadio">
                    <Form.Label>
                      Asset Class <span className="text-danger">*</span>
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Check
                        type="radio"
                        label="Equity"
                        name="formHorizontalRadios1"
                        id="equity"
                        className="pe-3"
                        value={1}
                        checked={assetClass == 1}
                        onChange={(e) => setAssetClass(e.target.value)}
                      />
                      <Form.Check
                        type="radio"
                        label="Debt"
                        name="formHorizontalRadios1"
                        id="debt"
                        className="pe-3"
                        value={3}
                        checked={assetClass == 3}
                        onChange={(e) => setAssetClass(e.target.value)}
                      />
                    </div>
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <Form.Group className=" " controlId="formBasicRadio">
                    <Form.Label>
                      Option <span className="text-danger">*</span>
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Check
                        type="radio"
                        label="Growth"
                        name="formHorizontalRadios"
                        id="Growth"
                        className="pe-3"
                        value={1}
                        checked={option == 1}
                        onChange={(e) => setOption(e.target.value)}
                      />
                      <Form.Check
                        type="radio"
                        label="IDCW"
                        name="formHorizontalRadios"
                        id="IDCW"
                        className="pe-3"
                        value={2}
                        checked={option == 2}
                        onChange={(e) => setOption(e.target.value)}
                      />
                    </div>
                  </Form.Group>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Form.Group>
                    <Form.Label>
                      Select Scheme <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      className="bg-c"
                      value={scheme}
                      onChange={changeSchemeHandler}
                    >
                      {/* <option value="">select scheme</option> */}

                      {schemeList.map((el) => {
                        return (
                          <option value={el.cams_code} key={el.s_name}>
                            {el.s_name}
                          </option>
                        );
                      })}
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
                      value={amount}
                      onChange={amountChangeHandler}
                      placeholder="Enter Amount"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-12 " onClick={addNewPurchase}>
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
                      <th className="wd-7rem">Profile</th>
                      <th className="wd-7rem">Scheme Name</th>
                      <th className="wd-7rem">Folio Number</th>
                      <th>Amount</th>
                      <th></th>
                    </tr>
                    {
                      newPurchaseDetails.length > 0 ? newPurchaseDetails.map((item, i) => {
                        return <tr>
                          <td>{item.profileName}</td>
                          <td>{item.amcName}</td>
                          <td>{ }</td>
                          <td>{item.amount}</td>
                          <td>
                            <Cart_Delete id={i} deleteData={deleteData} />
                          </td>
                        </tr>
                      }) : null
                    }

                  </table>
                </div>
                <div className="row mb-2">
                  <div className="col-md-5">
                    <Form.Group>
                      <Form.Label>
                        Select Payment Mode
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select className="bg-c" onChange={changePaymentModeHandler}>
                        <option value="select">select</option>
                        <option value={"OL"}>Net Banking</option>
                        <option value={"UPI"}>UPI</option>
                        <option value={"TR"}>RTGS/NEFT</option>
                        <option value={"M"}>Debit Mandate</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className={`col-md-7 ${hideImidiatePayment}`}>
                    <Form.Group
                      className="pt-lg-4 mt-lg-3 d-flex"
                      controlId="formBasicRadio"
                    >
                      <Form.Check
                        type="radio"
                        label="Immediate Payment"
                        name="formHorizont"
                        id="ImmediatePayment"
                        className="pe-3 fs-sm-14"
                        value={1}
                        checked={imediateOrEmail == 1}
                        onChange={(e) => setImediateOrEmail(e.target.value)}
                      />
                      <Form.Check
                        type="radio"
                        label="Link On Email"
                        name="formHorizont"
                        id="Link On Email"
                        className="pe-3 fs-sm-14"
                        value={2}
                        checked={imediateOrEmail == 2}
                        onChange={(e) => setImediateOrEmail(e.target.value)}
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
                      <Form.Select className="bg-c" onChange={changBankHandler}>
                        <option>select</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className={`col-md-5 ${hideMandate}`}>
                    <Form.Group>
                      <Form.Label>
                        Select Mandate <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select className="bg-c">
                        <option>select</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className={`col-md-5 ${hideRTGS}`} >
                    <Form.Group>
                      <Form.Label>
                        RTGS/NEFT Code <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        className="bg-c"
                        type="text"
                        placeholder="Enter Code"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className={`col-md-5 ${hideRTGS}`}>
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
                  <ul className="fs-13 mb-0  ps-0 lst-none">
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
            <button
              className="btn-custom"
              type="button"
              onClick={orderNowHandle}
            >
              Order Now
            </button>
          </Modal.Footer>
        </Modal>
      </div>
      <TransactSuccess show={confirmShow} setShow={setConfirmShow} />
    </>
  );
};
export default NewPurchaseTransact;
