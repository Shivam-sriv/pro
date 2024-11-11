import React, { useEffect, useState } from "react";
import logo from "../assets/images/logos/logo-login.png";
import kycp from "../assets/images/others/kyc.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Form from "react-bootstrap/Form";
import { useNavigate, useLocation } from "react-router-dom";
import { Validator, validatorsMethods } from "../validations";
import { notify } from "./toastCreater";

import {
  checkPanStatus,
  getUserStatus,
  registerPan,
  getIIn,
  createProfile,
} from "../apisMethods";
import Loader from "./Loader";
import IINDetails from "../components/iin-details";

const _kycUnderProcess = "Hey, your KYC is under Process.";
const _kycNotCompliant =
  "Hey, you are not KYC compliant As per government norms kindly proceed to complete your KYC process";
const _kycSuccessMessage = "Hey, you are KYC compliant.";

const _2ndholderNotCompliant =
  "The KYC of 2nd holder is not complied.Complete your Holder 's KYC, or Continue with KYC complied Holder(s)";
const secondHolderKycDoneThirdHolderNotDone =
  " The KYC of 3rd holder is not complied.Complete your Holder 's KYC, or Continue with KYC complied Holder(s)";

const _2ndHolderKYCNotDone3rdHolderDone =
  "The KYC of 2nd holder is not complied.Complete your Holder 's KYC, or Continue with KYC complied Holder(s)";

const _2ndHolderThirdHolderNotDone =
  "The KYC of Joint holder 's are not complied. Complete your Joint Holder's KYC, or Continue with Single Holding. ";

const secondHolderNotSameAsPrimary =
  "Second Holder's PAN should not be same as Primary Holder's PAN";

const secondHolderNotSameAsThird =
  "Second Holder's PAN should not be same as Third Holder's PAN";

const thirdHolderNotSameAsPrimary =
  "Third Holder's PAN should not be same as Primary Holder's PAN";

const thirdHolderNotSameAsSecond =
  "Third Holder's PAN should not be same as Second Holder's PAN";

const KYCValidation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //profile state

  const [taxStatus, setTaxStatus] = useState("");
  const [holdingNature, setHoldingNature] = useState("");
  const [primaryPanHolder, setPrimaryPanHolder] = useState("");
  const [secondPanHolder, setSecondPanHolder] = useState("");
  const [thirdPanHolder, setThirdPanHolder] = useState("");
  const [minorInvestorName, setMinorInvestorName] = useState("");
  const [guardianPan, setGuardianPan] = useState("");

  //profile screen

  // const [showTaxStatus, setShowTaxStatus] = useState("d-block");
  // const [showHoldingNature, setShowHoldingNature] = useState("d-block");
  const [showPrimaryPanHolder, setShowPrimaryPanHolder] = useState("d-none");
  const [showSecondPanHolder, setShowSecondPanHolder] = useState("d-none");
  const [showThirdPanHolder, setShowThirdPanHolder] = useState("d-none");
  const [showMinorInvestorName, setShowMinorInvestorName] = useState("d-none");
  const [showGuardianPan, setShowGuardianPan] = useState("d-none");

  //error message

  const [taxStatusMsg, setTaxStatusMsg] = useState("");
  const [holdingNatureMsg, setHoldingNatureMsg] = useState("");
  const [primaryPanHolderMsg, setPrimaryPanHolderMsg] = useState("");
  const [secondPanHolderMsg, setSecondPanHolderMsg] = useState("");
  const [thirdPanHolderMsg, setThirdPanHolderMsg] = useState("");
  const [minorInvestorNameMsg, setMinorInvestorNameMsg] = useState("");
  const [guardianPanMsg, setGuardianPanMsg] = useState("");

  //loader
  const [loader, setLoader] = useState("none");

  //note
  const [note, setNote] = useState("");

  useEffect(() => {
    //redirecting
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.pan == "Not Found") {
      navigate("/kyc-validation");
    }
  }, []);

  //showing toggles
  const [showIInCreation, setShowIIncreation] = useState("d-none");
  const [showRegister, setShowRegister] = useState("d-none");
  const [iinList, setIInList] = useState([]);

  //registration Pan on NSE States

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  //message

  const [message, setMessage] = useState("");

  const changeTaxStatus = (e) => {
    const value = e.target.value;
    setTaxStatus(value);
    setNote("");
    if (value == "02") {
      setShowMinorInvestorName("d-block");
      setShowGuardianPan("d-block");
      setHoldingNature("SI");
      setShowPrimaryPanHolder("d-none");
      setShowSecondPanHolder("d-none");
      setShowThirdPanHolder("d-none");
      //reset state
      setSecondPanHolder("");
      setThirdPanHolder("");
      //reset msg
      setPrimaryPanHolderMsg("");
      setSecondPanHolderMsg("");
      setThirdPanHolderMsg("");
    } else {
      setShowMinorInvestorName("d-none");
      setShowGuardianPan("d-none");
      setShowSecondPanHolder("d-none");
      setShowThirdPanHolder("d-none");
      setMinorInvestorName("");
      //reset state
      setGuardianPan("");
      setHoldingNature("");
      setSecondPanHolder("");
      setThirdPanHolder("");
      //reset msg
      setGuardianPanMsg("");
      setHoldingNatureMsg("");
    }
  };

  const resetState = () => {};

  const changeHoldingNature = (event) => {
    const e = event.target.value;
    console.log(e);
    setHoldingNature(e);
    setNote("");

    if (e == "AS") {
      setShowPrimaryPanHolder("d-block");
      setShowSecondPanHolder("d-block");
      setShowThirdPanHolder("d-block");
      // setPrimaryPanHolder("");
      setSecondPanHolder("");
      setThirdPanHolder("");
      setPrimaryPanHolderMsg("");
      setSecondPanHolderMsg("");
      setThirdPanHolderMsg("");
    } else if (e == "SI") {
      setShowPrimaryPanHolder("d-block");
      setShowSecondPanHolder("d-none");
      setShowThirdPanHolder("d-none");
      // setPrimaryPanHolder("");
      setSecondPanHolder("");
      setThirdPanHolder("");
      setPrimaryPanHolderMsg("");
      setSecondPanHolderMsg("");
      setThirdPanHolderMsg("");
    }
  };

  const changeInvName = (e) => {
    if (checkName(e.target.value)) {
      setMinorInvestorName(e.target.value);
    }
  };

  const changeRegisName = (e) => {
    if (checkName(e.target.value)) {
      setName(e.target.value);
    }
  };

  const checkName = (value) => {
    var regex = /^[a-zA-Z ]*$/;
    return regex.test(value);
  };

  const checkPan = (value) => {
    let regExpe =
      /^([A-Z]){3}(C|P|H|F|A|T|B|L|J|G){1}([A-Z]){1}([0-9]){4}([A-Z]){1}?$/;
    return regExpe.test(value);
  };

  const getPanStatus = async (value) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    return checkPanStatus({ pan: value, email: user.email }, headers).then(
      (res) => {
        if (!res.data) {
          notify("error", res.error.response.data.msg);
          return null;
        } else {
          return res.data;
        }
      }
    );
  };

  const getPanMessage = async (value) => {
    setLoader("block");
    const res = await getPanStatus(value);
    setLoader("none");
    if (res) {
      if (res.IsEKYCVerified === "Y") {
        return _kycSuccessMessage;
      } else if (res.IsEKYCVerified === "N" && res.IsKYCUnderprocess === "Y") {
        return _kycUnderProcess;
      } else {
        return _kycNotCompliant;
      }
    }
  };

  const changeGuardian = async (e) => {
    const value = e.target.value;
    setGuardianPan(value);
    if (checkPan(value)) {
      const result = await getPanMessage(value);
      setGuardianPanMsg(result);
    } else if (value == "") {
      setGuardianPanMsg("");
    } else {
      setGuardianPanMsg("invalid pan");
    }
  };

  const primaryMessanger = (value) => {
    if (value == secondPanHolder) {
      setPrimaryPanHolderMsg(
        "Primary Holder's PAN should not be same as Second Holder's PAN"
      );
      return false;
    } else if (value == thirdPanHolder) {
      setPrimaryPanHolderMsg(
        "Primary Holder's PAN should not be same as Third Holder's PAN"
      );
      return false;
    }
    return true;
  };

  const changePrimaryHolder = async (e) => {
    const value = e.target.value;
    setPrimaryPanHolder(value);

    if (checkPan(value)) {
      if (primaryMessanger(value)) {
        const result = await getPanMessage(value);
        setIInList([]);
        setMessage("");
        if (result == _kycSuccessMessage) {
          setLoader("block");
          // await addPanToProfile(value);
          await getIInList(value, result);
          setLoader("none");
        } else if (result == _kycNotCompliant) {
          setMessage(result);
          setShowRegister("d-block");
          setShowIIncreation("d-none");
        }
        setPrimaryPanHolderMsg(result);
      }
    } else if (value == "") {
      setPrimaryPanHolderMsg("");
    } else {
      setPrimaryPanHolderMsg("invalid pan");
    }
  };

  const headersAndMore = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    return { user, token, headers };
  };

  const addPanToProfile = async (value) => {
    const { headers, user } = headersAndMore();
    try {
      await createProfile(
        {
          email: user.email,
          pan: value,
        },
        headers
      );
    } catch (err) {
      console.log("error comes");
    }
  };

  const getIInList = async (value, result) => {
    const { headers } = headersAndMore();
    console.log("get iin list");
    const iinres = await getIIn({ pan: value }, headers);

    if (!iinres.data) {
      notify("error", iinres.error.response.data.msg);
    } else {
      if (iinres.data.success) {
        console.log("run first second");
        setIInList(iinres.data.data);
        setShowIIncreation("d-none");
        setShowRegister("d-none");
      } else {
        setShowIIncreation("d-block");
        setShowRegister("d-none");
        setMessage(result);
      }
    }
  };

  const findUserStatus = async () => {
    const { headers } = headersAndMore();

    const userStatus = await getUserStatus(headers);
    if (!userStatus.data) {
      notify("error", userStatus.error.response.data.msg);
      return null;
    } else {
      return userStatus.data.data;
    }
  };

  const secondMessenger = (value) => {
    if (value == primaryPanHolder) {
      setSecondPanHolderMsg(secondHolderNotSameAsPrimary);
      return false;
    } else if (value == thirdPanHolder) {
      setSecondPanHolderMsg(secondHolderNotSameAsThird);
      return false;
    }
    return true;
  };

  const setNoteForSecond = (message) => {
    if (
      message == _kycSuccessMessage &&
      thirdPanHolderMsg === _kycNotCompliant
    ) {
      setNote(secondHolderKycDoneThirdHolderNotDone);
    } else if (
      message === _kycNotCompliant &&
      thirdPanHolderMsg === _kycSuccessMessage
    ) {
      setNote(_2ndHolderKYCNotDone3rdHolderDone);
    } else if (
      message == _kycNotCompliant &&
      thirdPanHolderMsg === _kycNotCompliant
    ) {
      setNote(_2ndHolderThirdHolderNotDone);
    } else if (message === _kycNotCompliant) {
      setNote(_2ndholderNotCompliant);
    } else {
      setNote("");
    }
  };

  const changeSecondPanHolder = async (e) => {
    const value = e.target.value;
    setSecondPanHolder(value);
    if (checkPan(value)) {
      if (secondMessenger(value)) {
        const result = await getPanMessage(value);
        setNoteForSecond(result);
        setSecondPanHolderMsg(result);
      }
    } else if (value == "") {
      setSecondPanHolderMsg("");
    } else {
      setSecondPanHolderMsg("invalid pan");
    }
  };

  const thirdMessenger = (value) => {
    if (value == primaryPanHolder) {
      setThirdPanHolderMsg(thirdHolderNotSameAsPrimary);
      return false;
    } else if (value == secondPanHolder) {
      setThirdPanHolderMsg(thirdHolderNotSameAsSecond);
      return false;
    }
    return true;
  };

  const setNoteForThird = async (message) => {
    if (
      message == _kycSuccessMessage &&
      secondPanHolderMsg === _kycNotCompliant
    ) {
      setNote(_2ndholderNotCompliant);
    } else if (
      message === _kycNotCompliant &&
      secondPanHolderMsg === _kycSuccessMessage
    ) {
      setNote(secondHolderKycDoneThirdHolderNotDone);
    } else if (
      message == _kycNotCompliant &&
      secondPanHolderMsg === _kycNotCompliant
    ) {
      setNote(_2ndHolderThirdHolderNotDone);
    } else if (message === _kycNotCompliant) {
      setNote(secondHolderKycDoneThirdHolderNotDone);
    } else {
      setNote("");
    }
  };

  const changeThirdPanHolder = async (e) => {
    const value = e.target.value;
    setThirdPanHolder(value);
    if (checkPan(value)) {
      if (thirdMessenger(value)) {
        const result = await getPanMessage(value);
        setNoteForThird(result);
        setThirdPanHolderMsg(result);
      }
    } else if (value == "") {
      setThirdPanHolderMsg("");
    } else {
      setThirdPanHolderMsg("invalid pan");
    }
  };

  const openNSELink = async () => {
    const { headers } = headersAndMore();

    const isEmail = await Validator(email, "email", (a, b) => {
      validatorsMethods.start(a, b).isRequired().email();
    });

    console.log(mobile.length);

    if (isEmail?.message || !name || !mobile || mobile.length !== 10) {
      notify("warn", "All Field are mandatory");
      return;
    }

    setLoader("block");

    registerPan(
      {
        pan: primaryPanHolder,
        investor_email: email,
        investor_mobile_no: mobile,
        euin_name: name,
      },
      headers
    ).then((res) => {
      setLoader("none");
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        window.open(res.data.data.data.link, "_blank");
      }
    });
  };

  const submitProfile = () => {
    if (showGuardianPan == "d-block" && showMinorInvestorName == "d-block") {
      const error = { guard: false, name: false };

      // if (guardianPan == "") {
      //   setGuardianPanMsg("mandatory field");
      //   error.guard = true;
      // } else if (!checkPan(guardianPan)) {
      //   setGuardianPanMsg("invalid pan");
      //   error.guard = true;
      // } else if (guardianPanMsg != _kycSuccessMessage) {
      //   error.guard = true;
      // }

      if (!minorInvestorName) {
        setMinorInvestorNameMsg("mandatory field");
        error.name = true;
      } else {
        setMinorInvestorNameMsg("");
      }

      if (!error.guard && !error.name) {
        localStorage.setItem(
          "profileCreation",
          JSON.stringify({
            taxStatus: taxStatus.value,
            holdingNature: holdingNature.value,
            minorInvestorName,
            guardianPan,
          })
        );
        navigate("/dashboard/required-steps");
        return;
      }
    }

    if (showSecondPanHolder == "d-none" && showThirdPanHolder == "d-none") {
      let error = false;

      if (primaryPanHolder == "") {
        setPrimaryPanHolderMsg("mandatory field");
        error = true;
      } else if (!checkPan(primaryPanHolder)) {
        setPrimaryPanHolderMsg("invalid pan");
        error = true;
      } else if (primaryPanHolderMsg != _kycSuccessMessage) {
        error = true;
      }

      if (!error) {
        localStorage.setItem(
          "profileCreation",
          JSON.stringify({
            taxStatus: taxStatus.value,
            holdingNature: holdingNature.value,
            primaryPanHolder,
          })
        );
        navigate("/dashboard/required-steps");
      }
    }

    if (showSecondPanHolder == "d-block" && showThirdPanHolder == "d-block") {
      const errors = { primary: false, second: false, third: false };

      // if (primaryPanHolder == "") {
      //   setPrimaryPanHolderMsg("mandatory field");
      //   errors.primary = true;
      // } else if (!checkPan(primaryPanHolder)) {
      //   setPrimaryPanHolderMsg("invalid pan");
      //   errors.primary = true;
      // } else if (primaryPanHolderMsg != _kycSuccessMessage) {
      //   errors.primary = true;
      // }

      if (secondPanHolder == "") {
        setSecondPanHolderMsg("mandatory field");
        errors.second = true;
      } else if (!checkPan(secondPanHolder)) {
        setSecondPanHolderMsg("invalid pan");
        errors.second = true;
      } else if (
        secondPanHolderMsg == secondHolderNotSameAsPrimary ||
        secondPanHolderMsg == secondHolderNotSameAsThird
      ) {
        errors.second = true;
      }

      if (thirdPanHolder == "") {
        setThirdPanHolderMsg("");
      } else if (!checkPan(thirdPanHolder)) {
        setThirdPanHolderMsg("invalid pan");
        errors.third = true;
      } else if (
        thirdPanHolderMsg == thirdHolderNotSameAsPrimary ||
        thirdPanHolderMsg == thirdHolderNotSameAsSecond
      ) {
        errors.third = true;
      }

      if (!errors.primary && !errors.second && !errors.third) {
        const saveObject = {
          taxStatus: taxStatus.value,
          holdingNature: holdingNature.value,
          primaryPanHolder,
          secondPanHolder,
          thirdPanHolder,
        };

        if (secondPanHolderMsg != _kycSuccessMessage) {
          delete saveObject.secondPanHolder;
        }

        if (thirdPanHolder != _kycSuccessMessage) {
          delete saveObject.thirdPanHolder;
        }

        localStorage.setItem("profileCreation", JSON.stringify(saveObject));
        navigate("/dashboard/required-steps");
      }
    }
  };

  return (
    <>
      <div className="kyc-main bg-gray py-5 overflow-hidden">
        <section>
          <div className="row  justify-content-center">
            <div className="col-md-8 shadow-custom pb-4 mtc-6">
              <div className="brand-logo kyc-logo">
                <img src={logo} className="img-fluid " />
              </div>
              <div className="row px-3">
                <div className="col-md-6">
                  <Loader loader={loader} />
                  <p className="kyc-p">
                    We are eager to get you going. Let’s start by checking if
                    you are KYC compliant. Just fill in your PAN in the box
                    below
                  </p>
                  <div className="align-self-center">
                    <form>
                      <div className="row">
                        <div className="col-6">
                          <span className="has-float-label">
                            <input
                              className="form-control"
                              id="pan"
                              type="text"
                              maxLength="10"
                              placeholder=" "
                              name="pan"
                              onChange={changePrimaryHolder}
                              value={primaryPanHolder}
                            />
                            <label for="pan" className="text-label">
                              Enter PAN <span className="text-danger">*</span>
                            </label>
                          </span>
                          <span className=" ">{primaryPanHolderMsg}</span>
                        </div>
                        <div className="col-6">
                          <button type="button" className="btn-custom">
                            check now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* iin details */}
                  <div
                    className={` row ${
                      iinList.length > 0 ? "d-block" : "d-none"
                    }`}
                  >
                    <div className="bg-gray br-15 p-3 mt-4">
                      <IINDetails iinList={iinList} />
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate("/")}
                      className="btn-custom  col-4 mt-3"
                    >
                      Proceed
                    </button>
                  </div>
                  {/* iin details */}
                </div>
                <div className="col-md-6 d-none-m">
                  <img className="img-fluid" src={kycp} />
                </div>
              </div>

              <div
                className="bg-light-red py-2 rounded px-3 mt-4"
                role="alert"
                style={{ display: message ? "" : "none" }}
              >
                <span className=" ">{message}</span>
              </div>
              <div className={`col-6 offset-3 py-5 ${showIInCreation}`}>
                <Form>
                  <Form.Group className="mb-3">
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
                      <InputLabel
                        className="text-label"
                        id="demo-simple-select-filled-label"
                      >
                        Select Tax Status <span className="text-red">*</span>
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label1"
                        id="demo-simple-select-filled"
                        name="taxStatus"
                        onChange={changeTaxStatus}
                        value={taxStatus}
                      >
                        <MenuItem value="02">On Behalf of Minor</MenuItem>
                        <MenuItem value="01">Resident Individual</MenuItem>
                        <MenuItem value="21">NRI - Repatriable (NRE)</MenuItem>
                        <MenuItem value="11">NRI Through NRO A/c</MenuItem>
                      </Select>
                    </FormControl>
                    <p className="text-danger text-start fs-13 mb-0">
                      {taxStatusMsg}
                    </p>
                  </Form.Group>

                  <Form.Group className={`mb-3`}>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
                      <InputLabel
                        className="text-label"
                        id="demo-simple-select-filled-label"
                      >
                        Select Holding Nature
                        <span className="text-red">*</span>
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label2"
                        id="demo-simple-select-filled"
                        name="holdingNature"
                        value={holdingNature}
                        onChange={changeHoldingNature}
                        disabled={taxStatus === "02"}
                      >
                        <MenuItem value="SI">Single</MenuItem>
                        <MenuItem value="AS">Anyone / Survivor</MenuItem>
                      </Select>
                    </FormControl>
                    <p className="text-danger text-start fs-13 mb-0">
                      {holdingNatureMsg}
                    </p>
                  </Form.Group>

                  <Form.Group className={`mb-3 ${showSecondPanHolder}`}>
                    <span className="has-float-label">
                      <input
                        className="form-control"
                        id="holder-1-pan"
                        name="secondPanHolder"
                        type="text"
                        placeholder="Enter PAN *"
                        maxLength={10}
                        value={secondPanHolder}
                        onChange={changeSecondPanHolder}
                      />
                      <label for="holder-1-pan" className="text-label">
                        Second Holder's PAN<span className="text-red">*</span>
                      </label>
                    </span>
                    <div className="row">
                      <div className="col-12">
                        <p className={`text-start fs-13 mb-0`}>
                          {secondPanHolderMsg}
                        </p>
                      </div>
                    </div>
                  </Form.Group>

                  <Form.Group className={`mb-3 ${showThirdPanHolder}`}>
                    <span className="has-float-label">
                      <input
                        className="form-control "
                        id="holder-2-pan"
                        name="thirdPanHolder"
                        type="text"
                        placeholder="Enter PAN *"
                        maxLength={10}
                        onChange={changeThirdPanHolder}
                        value={thirdPanHolder}
                      />
                      <label for="holder-2-pan" className="text-label">
                        Third Holder's PAN <span className="text-red">*</span>
                      </label>
                    </span>
                    <div className="row">
                      <div className="col-12">
                        <p className={`text-start fs-13 mb-0`}>
                          {thirdPanHolderMsg}
                        </p>
                      </div>
                    </div>
                  </Form.Group>

                  <Form.Group className={`mb-3 ${showMinorInvestorName}`}>
                    <span className="has-float-label">
                      <input
                        className="form-control"
                        id="minor"
                        name="minorInvestorName"
                        type="text"
                        value={minorInvestorName}
                        onChange={changeInvName}
                        placeholder="Enter Name *"
                      />
                      <label for="minor" className="text-label">
                        Minor Investor Name<span className="text-red">*</span>
                      </label>
                    </span>

                    <p className="text-danger text-start fs-13 mb-0">
                      {minorInvestorNameMsg}
                    </p>
                  </Form.Group>

                  <Form.Group className={`mb-3 ${showGuardianPan}`}>
                    <span className="has-float-label">
                      <input
                        className="form-control"
                        id="gpan"
                        name="guadianPan"
                        type="text"
                        placeholder="Enter Name *"
                        maxLength={10}
                        value={primaryPanHolder}
                        disabled={true}
                      />
                      <label for="gpan" className="text-label">
                        Guardian PAN <span className="text-red">*</span>
                      </label>
                    </span>
                    <p className="text-danger text-start fs-13 mb-0">
                      {guardianPanMsg}
                    </p>
                  </Form.Group>

                  <Form.Group
                    className={`mb-3 ${
                      taxStatus == "02" ? "d-block" : "d-none"
                    }`}
                  >
                    <div className="text-justify py-4">
                      <h6 className="fw-bold text-red"> Note: </h6>
                      <p className="fw-bold text-black">
                        {" "}
                        Please Be ready with these documents before creation of
                        Minor's profile to mention the bank account details and
                        upload the bank & birth proof-{" "}
                      </p>
                      <p className="">
                        1. Bank Account should be in the name of Minor, it can
                        either be Jointly or under the guardianship of the same
                        person as you have selected in profile.
                      </p>
                      <p className="">
                        2. Guardian name must be there in the birth proof.
                      </p>
                    </div>
                  </Form.Group>

                  {note ? (
                    <div className="text-justify py-4 pt-3">
                      <h6 className="fw-bold text-red"> Note: </h6>
                      <p className="fw-bold text-black">{note}</p>
                    </div>
                  ) : (
                    ""
                  )}

                  <Form.Group>
                    <button
                      type="button"
                      className="btn-custom float-right"
                      onClick={submitProfile}
                    >
                      Proceed
                    </button>
                  </Form.Group>
                </Form>
              </div>
              {/* kyc  */}

              <div className={`col-12 mt-5 px-5 kyc ${showRegister}`}>
                <h3>KYC (Know Your Client)</h3>
                <span className="para text-start">
                  <h5 className="text-red fw-500">Note:</h5>
                  <ul>
                    <li>
                      As per regulatory provisions, KYC is a one time mandatory
                      process of identifying and verifying a client's identity
                      and his/her related details before start investing. For
                      more detail <a href="">Click Here</a>
                    </li>
                    <li>
                      Kyc Updation is required everytime in case of change in
                      address, contact details, Marital Status & Tax.
                      Residential Status.
                    </li>
                    <li>
                      While completing KYC process "Kotak Mutual Fund' acts as a
                      facilitator".
                    </li>
                    <li className="lst-none pt-2">
                      <h6 className="text-left text-red fw-500">
                        Points to be kept in mind when submitting KYC:
                      </h6>
                    </li>
                    <li>
                      Aadhaar Linked Mobile Number should be active for
                      authentication.
                    </li>
                    <li>
                      This process is only for First Time Kyc User, and should
                      be completed in one go. To check KYC status
                      <a href=" #" target="_blank">
                        Click Here
                      </a>
                    </li>
                    <li>
                      For registering through the Non-Aadhaar option, the User
                      needs to upload an Aadhaar’s masked copy. Also, the last 4
                      digits of the Aadhaar need to be mentioned in Document
                      Number column to avoid rejection
                    </li>
                  </ul>
                </span>
                <div className="col-6 offset-3 py-5">
                  <Form>
                    <Form.Group className="mb-3">
                      <span className="has-float-label mb-4">
                        <input
                          className="form-control"
                          name="pan"
                          id="pan2"
                          type="text"
                          value={primaryPanHolder}
                          disabled={true}
                          placeholder=" "
                        />
                        <label for="pan" className="text-label">
                          Enter PAN <span className="text-danger">*</span>
                        </label>
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <span className="has-float-label mb-4">
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder=" "
                          name="name"
                          value={name}
                          onChange={changeRegisName}
                        />
                        <label for="name" className="text-label">
                          Enter Name
                          <span className="text-danger">*</span>
                        </label>
                      </span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <span className="has-float-label mb-4">
                        <input
                          className="form-control"
                          id="email"
                          type="text"
                          placeholder=" "
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label for="email" className="text-label">
                          Enter Email <span className="text-danger">*</span>
                        </label>
                      </span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <span className="has-float-label mb-4">
                        <input
                          className="form-control"
                          id="mobileNo"
                          type="text"
                          maxLength="10"
                          placeholder=" "
                          name="mobile"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                        />
                        <label for="mobileNo" className="text-label">
                          Enter Mobile Number
                          <span className="text-danger">*</span>
                        </label>
                      </span>
                    </Form.Group>
                  </Form>
                </div>
                <div className="mt-4 d-flex">
                  <div className="col-6 text-start">
                    <button className="btn-custom">Back</button>
                  </div>
                  <div className="col-6 text-end" onClick={openNSELink}>
                    <button className="btn-custom">Proceed</button>
                  </div>
                </div>
              </div>
              {/* {link} */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default KYCValidation;
