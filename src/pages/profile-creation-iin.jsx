import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { checkPanStatus } from "../apisMethods";
import { notify } from "./toastCreater";
import Loader from "./Loader";

const taxstatus = [
  { value: "02", label: "On Behalf Of Minor" },
  { value: "01", label: "Resident Individual" },
  { value: "21", label: " NRI - Repatriable (NRE)" },
  { value: "11", label: " NRI Through NRO A/c" },
];
const holding = [
  { value: "SI", label: "Single Holding " },
  { value: "AS", label: "Anyone / Survivor" },
];

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

const ProfileCreation = () => {
  //profile state

  const [taxStatus, setTaxStatus] = useState("");
  const [holdingNature, setHoldingNature] = useState("");
  const [primaryPanHolder, setPrimaryPanHolder] = useState("");
  const [secondPanHolder, setSecondPanHolder] = useState("");
  const [thirdPanHolder, setThirdPanHolder] = useState("");
  const [minorInvestorName, setMinorInvestorName] = useState("");
  const [guardianPan, setGuardianPan] = useState("");

  //profile screen

  const [showTaxStatus, setShowTaxStatus] = useState("d-block");
  const [showHoldingNature, setShowHoldingNature] = useState("d-block");
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

  //navigate
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.pan == "Not Found") {
      navigate("/kyc-validation");
    }
  }, []);

  const changeTaxStatus = (e) => {
    const value = e.value;
    setTaxStatus(e);

    if (value == "02") {
      setShowMinorInvestorName("d-block");
      setShowGuardianPan("d-block");
      setHoldingNature(holding[0]);
      setShowPrimaryPanHolder("d-none");
      setShowSecondPanHolder("d-none");
      setShowThirdPanHolder("d-none");
      //reset state
      setPrimaryPanHolder("");
      setSecondPanHolder("");
      setThirdPanHolder("");
      //reset msg
      setPrimaryPanHolderMsg("");
      setSecondPanHolderMsg("");
      setThirdPanHolderMsg("");
    } else {
      setShowMinorInvestorName("d-none");
      setShowGuardianPan("d-none");
      setMinorInvestorName("");
      //reset state
      setGuardianPan("");
      setHoldingNature("");
      //reset msg
      setGuardianPanMsg("");
      setHoldingNatureMsg("");
    }
  };

  const changeHoldingNature = (e) => {
    setHoldingNature(e);
    if (e.value == "AS") {
      setShowPrimaryPanHolder("d-block");
      setShowSecondPanHolder("d-block");
      setShowThirdPanHolder("d-block");
      setPrimaryPanHolder("");
      setSecondPanHolder("");
      setThirdPanHolder("");
      setPrimaryPanHolderMsg("");
      setSecondPanHolderMsg("");
      setThirdPanHolderMsg("");
    } else if (e.value == "SI") {
      setShowPrimaryPanHolder("d-block");
      setShowSecondPanHolder("d-none");
      setShowThirdPanHolder("d-none");
      setPrimaryPanHolder("");
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
        setPrimaryPanHolderMsg(result);
      }
    } else if (value == "") {
      setPrimaryPanHolderMsg("");
    } else {
      setPrimaryPanHolderMsg("invalid pan");
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

  const submitProfile = () => {
    if (showGuardianPan == "d-block" && showMinorInvestorName == "d-block") {
      const error = { guard: false, name: false };

      if (guardianPan == "") {
        setGuardianPanMsg("mandatory field");
        error.guard = true;
      } else if (!checkPan(guardianPan)) {
        setGuardianPanMsg("invalid pan");
        error.guard = true;
      } else if (guardianPanMsg != _kycSuccessMessage) {
        error.guard = true;
      }

      if (!minorInvestorName) {
        setMinorInvestorNameMsg("mandatory field");
        error.name = true;
      } else {
        setMinorInvestorNameMsg("");
      }

      if (!error.guard && !error.name) {
        localStorage.setItem(
          "kycValidation",
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

    if (
      showPrimaryPanHolder == "d-block" &&
      showSecondPanHolder == "d-none" &&
      showThirdPanHolder == "d-none"
    ) {
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
          "kycValidation",
          JSON.stringify({
            taxStatus: taxStatus.value,
            holdingNature: holdingNature.value,
            primaryPanHolder,
          })
        );
        navigate("/dashboard/required-steps");
      }
    }

    if (
      showPrimaryPanHolder == "d-block" &&
      showSecondPanHolder == "d-block" &&
      showThirdPanHolder == "d-block"
    ) {
      const errors = { primary: false, second: false, third: false };

      if (primaryPanHolder == "") {
        setPrimaryPanHolderMsg("mandatory field");
        errors.primary = true;
      } else if (!checkPan(primaryPanHolder)) {
        setPrimaryPanHolderMsg("invalid pan");
        errors.primary = true;
      } else if (primaryPanHolderMsg != _kycSuccessMessage) {
        errors.primary = true;
      }

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

        localStorage.setItem("kycValidation", JSON.stringify(saveObject));
        navigate("/dashboard/required-steps");
      }
    }
  };

  // IYFPS6462H;
  return (
    <>
      <Loader loader={loader} />
      <div className="wrapper">
        <div className=" px-lg-5">
          {/* Page Heading */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-4">
              <li className="breadcrumb-item">
                <a href="home">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Profile Creation
              </li>
            </ol>
          </nav>
          <section>
            <div className="container mb-5">
              <div className="row justify-content-center ">
                <div className="col-md-10 col-12">
                  <div className="shadowc bg-gray br-50">
                    <div className="row justify-content-center">
                      <div className="col-md-6 col-10 py-5 text-start">
                        <div className={`form-group ${showTaxStatus}`}>
                          <label for="tax" className="text-label">
                            {" "}
                            Select Tax Status{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Select
                            className="bg-c"
                            options={taxstatus}
                            value={taxStatus}
                            onChange={changeTaxStatus}
                            placeholder="select tax status"
                          />
                        </div>
                        <div className={`form-group ${showHoldingNature}`}>
                          <label for="holding" className="text-label">
                            {" "}
                            Select Holding Nature{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Select
                            className="bg-c"
                            options={taxStatus ? holding : []}
                            onChange={changeHoldingNature}
                            value={holdingNature}
                            isDisabled={taxStatus.value == "02"}
                            placeholder="select holding nature"
                          />
                        </div>
                        <div className={`form-group ${showPrimaryPanHolder}`}>
                          <label for="primary_pan" className="text-label">
                            {" "}
                            Primary Holder's Pan
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control  panNo bg-c"
                            id="primary_pan"
                            name="primary_pan"
                            maxLength={"10"}
                            type="text"
                            placeholder=""
                            value={primaryPanHolder}
                            onChange={changePrimaryHolder}
                          />
                          <p
                            className={`text-start fs-13 mb-0 ${
                              primaryPanHolderMsg == _kycSuccessMessage
                                ? "text-success"
                                : "text-danger"
                            }`}
                          >
                            {primaryPanHolderMsg + " "}
                            {primaryPanHolderMsg == _kycNotCompliant ? (
                              <Link to="/complete-kyc" state={primaryPanHolder}>
                                Complete Kyc
                              </Link>
                            ) : (
                              ""
                            )}
                          </p>
                        </div>
                        <div className={`form-group ${showSecondPanHolder}`}>
                          <label for="holder-1-pan" className="text-label">
                            {" "}
                            Second Holder's PAN
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control  panNo bg-c"
                            id="holder-1-pan"
                            name="pan_holder_1"
                            maxLength={"10"}
                            type="text"
                            placeholder=""
                            value={secondPanHolder}
                            onChange={changeSecondPanHolder}
                          />
                          <p
                            className={`text-start fs-13 mb-0 ${
                              secondPanHolderMsg == _kycSuccessMessage
                                ? "text-success"
                                : "text-danger"
                            }`}
                          >
                            {secondPanHolderMsg + " "}
                            {secondPanHolderMsg == _kycNotCompliant ? (
                              <Link to="/complete-kyc" state={secondPanHolder}>
                                Complete Kyc
                              </Link>
                            ) : (
                              ""
                            )}
                          </p>
                        </div>
                        <div className={`form-group ${showThirdPanHolder}`}>
                          <label for="holder-2-pan" className="text-label">
                            {" "}
                            Third Holder's PAN{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control  panNo bg-c"
                            id="holder-2-pan"
                            name="pan_holder_2"
                            maxLength={"10"}
                            type="text"
                            placeholder=""
                            value={thirdPanHolder}
                            onChange={changeThirdPanHolder}
                          />
                          <p
                            className={`text-start fs-13 mb-0 ${
                              thirdPanHolderMsg == _kycSuccessMessage
                                ? "text-success"
                                : "text-danger"
                            }`}
                          >
                            {thirdPanHolderMsg + " "}
                            {thirdPanHolderMsg == _kycNotCompliant ? (
                              <Link to="/complete-kyc" state={thirdPanHolder}>
                                Complete Kyc
                              </Link>
                            ) : (
                              ""
                            )}
                          </p>
                        </div>
                        <div className={`form-group ${showMinorInvestorName}`}>
                          <label for="investor_name" className="text-label">
                            Minor Investor Name
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control  bg-c"
                            id="investor_name"
                            name="investor_name"
                            type="text"
                            placeholder=""
                            value={minorInvestorName}
                            onChange={changeInvName}
                          />
                          <p className="text-danger text-start fs-13 mb-0">
                            {minorInvestorNameMsg}
                          </p>
                        </div>
                        <div className={`form-group ${showGuardianPan}`}>
                          <label for="guardian_pan" className="text-label">
                            Guardian PAN <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control  panNo bg-c"
                            id="guardian_pan"
                            name="guardian_pan"
                            maxLength={"10"}
                            type="text"
                            placeholder=""
                            value={guardianPan}
                            onChange={changeGuardian}
                          />
                          <p
                            className={`text-start fs-13 mb-0 ${
                              guardianPanMsg == _kycSuccessMessage
                                ? "text-success"
                                : "text-danger"
                            }`}
                          >
                            {guardianPanMsg + " "}
                            {guardianPanMsg == _kycNotCompliant ? (
                              <Link to="/complete-kyc" state={guardianPan}>
                                Complete Kyc
                              </Link>
                            ) : (
                              ""
                            )}
                          </p>
                        </div>

                        <div
                          className={`form-group text-justify ${
                            taxStatus.value == "02" ? "d-block" : "d-none"
                          }`}
                        >
                          <h6 className="fw-bold text-red"> Note: </h6>
                          <p className="fw-bold text-black">
                            {" "}
                            Please Be ready with these documents before creation
                            of Minor's profile to mention the bank account
                            details and upload the bank & birth proof-{" "}
                          </p>
                          <p className="">
                            1. Bank Account should be in the name of Minor, it
                            can either be Jointly or under the guardianship of
                            the same person as you have selected in profile.
                          </p>
                          <p className="">
                            2. Guardian name must be there in the birth proof.
                          </p>
                        </div>

                        <div
                          className={`form-group text-justify ${
                            note ? "d-block" : "d-none"
                          }`}
                        >
                          <h6 className="fw-bold text-red"> Note: </h6>
                          <p className="fw-bold text-black">{note}</p>
                        </div>

                        <div
                          className={`form-group text-end ${
                            taxStatus && holdingNature ? "d-block" : "d-none"
                          }`}
                        >
                          <button class="btn-custom" onClick={submitProfile}>
                            Proceed{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default ProfileCreation;
