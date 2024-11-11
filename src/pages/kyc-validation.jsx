import React, { useEffect, useState } from "react";
import logo from "../assets/images/logos/logo-login.png";
import kycp from "../assets/images/others/kyc.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useLocation } from "react-router-dom";
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

const iinCreationInitialState = {
  taxStatus: "",
  holdingNature: "",
  secondPanHolder: "",
  thirdPanHolder: "",
  minorInvestorName: "",
  guadianPan: "",
};

const iinCreationScreenInit = {
  taxStatus: "block",
  holdingNature: "block",
  secondPanHolder: "none",
  thirdPanHolder: "none",
  minorInvestorName: "none",
  guadianPan: "none",
};

const iinCreationInitError = {
  taxStatus: false,
  holdingNature: false,
  secondPanHolder: false,
  thirdPanHolder: false,
  minorInvestorName: false,
  guadianPan: false,
};

const KYCValidation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [pan, setPan] = useState("");
  const [user, setUser] = useState({
    mobile: "",
    email: "",
    pan: "",
    name: "",
    message: "",
  });
  const [loader, setLoader] = useState("none");
  const [screens, setScreens] = useState({
    iinCreation: "none",
    registerPan: "none",
    message: "none",
  });
  const [underProcess, setUnderprocess] = useState(false);

  const [iinCreationState, setIInCreationState] = useState(
    iinCreationInitialState
  );

  const [iinCreationScreen, setIInCreationScreen] = useState({
    ...iinCreationScreenInit,
  });

  const [isPanKycDone, setIsPanKycDone] = useState({
    guadianPan: false,
    secondPanHolder: false,
    thirdPanHolder: false,
  });

  const [iinCreationError, setIInCreationError] = useState({
    ...iinCreationInitError,
  });

  const [iinCreationMsg, setIInCreationMsg] = useState({
    ...iinCreationInitialState,
  });

  const [iinList, setIInList] = useState([]);

  const [note, setNote] = useState("");

  useEffect(() => {
    const state = location.state;
    if (state != null) {
      console.log(iinCreationState);
      setPan(state.pan);
      setUser(state.user);
      setScreens(state.screens);
      setUnderprocess(state.underProcess);
      setIInCreationState(state.iinCreationState);
      setIInCreationScreen(state.iinCreationScreen);
      setIsPanKycDone(state.isPanKycDone);
      setNote(state.note);
      setIInCreationError(state.iinCreationError);
      for (let key in state.iinCreationMsg) {
        if (state.iinCreationMsg[key] === "mandatory field") {
          state.iinCreationMsg[key] = "";
        }
      }
      setIInCreationMsg(state.iinCreationMsg);
    }
  }, []);

  const checkPanNumber = async () => {
    setIInCreationError({ ...iinCreationInitError });
    setIInCreationState({ ...iinCreationInitialState });
    setIInCreationScreen({ ...iinCreationScreenInit });
    setIInCreationMsg({ ...iinCreationInitialState });
    setIsPanKycDone({
      guadianPan: false,
      secondPanHolder: false,
      thirdPanHolder: false,
    });
    setNote("");
    setIInList([]);

    const isPan = await Validator(pan, "pan", (a, b) => {
      validatorsMethods.start(a, b).isRequired().checkPan();
    });

    if (isPan.message) {
      notify("warn", "Pan " + isPan.message);
      return;
    }

    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    getUserStatus(headers).then((res) => {
      setLoader("block");
      if (!res.data) {
        console.log(res.error);
        notify("error", res.error.response.data.msg);
        setLoader("none");
      } else {
        checkPanStatus({ pan, email: res.data.data.email }, headers).then(
          (panRes) => {
            if (!panRes.data) {
              notify("error", panRes.error.response.data.msg);
              setLoader("none");
            } else {
              console.log(panRes.data);
              if (
                panRes.data.IsEKYCVerified === "N" &&
                panRes.data.IsKYCUnderprocess === "N"
              ) {
                setScreens({
                  iinCreation: "none",
                  registerPan: "block",
                  message: "block",
                });
                setUser({
                  ...user,
                  pan,
                  message: _kycNotCompliant,
                  email: res.data.data.email,
                  name: res.data.data.displayName,
                  mobile: res.data.data.mobile,
                });
                setLoader("none");
              } else if (
                panRes.data.IsEKYCVerified === "N" &&
                panRes.data.IsKYCUnderprocess === "Y"
              ) {
                setScreens({
                  iinCreation: "none",
                  registerPan: "none",
                  message: "block",
                });
                setUser({
                  message: _kycUnderProcess,
                  email: res.data.data.email,
                  name: res.data.data.displayName,
                  mobile: res.data.data.mobile,
                });
                setLoader("none");
                setUnderprocess(true);
              } else if (
                panRes.data.IsEKYCVerified === "Y" &&
                panRes.data.IsKYCUnderprocess === "N"
              ) {
                createProfile(
                  {
                    email: res.data.data.email,
                    pan,
                  },
                  headers
                ).then((res) => {
                  console.log(res.data);
                });
                getIIn({ pan }, headers).then((iinres) => {
                  if (!iinres.data) {
                    setScreens({
                      registerPan: "none",
                      iinCreation: "block",
                      message: "block",
                    });
                    setUser({
                      ...user,
                      pan,
                      message: _kycSuccessMessage,
                      email: res.data.data.email,
                      name: res.data.data.displayName,
                      mobile: res.data.data.mobile,
                    });
                    setLoader("none");
                  } else {
                    if (iinres.data.success) {
                      setScreens({
                        registerPan: "none",
                        iinCreation: "none",
                        message: "none",
                      });
                      setIInList(iinres.data.data);
                      setLoader("none");
                    } else {
                      setScreens({
                        registerPan: "none",
                        iinCreation: "block",
                        message: "block",
                      });
                      setUser({
                        ...user,
                        pan,
                        message: _kycSuccessMessage,
                        email: res.data.data.email,
                        name: res.data.data.displayName,
                        mobile: res.data.data.mobile,
                      });
                      setLoader("none");
                    }
                  }
                });
              }
            }
          }
        );
      }
    });
  };

  const openNSELink = async () => {
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    const isEmail = await Validator(user.email, "email", (a, b) => {
      validatorsMethods.start(a, b).isRequired().email();
    });

    const isMobile = await Validator(user.mobile, "mobile", (a, b) => {
      validatorsMethods.start(a, b).isRequired().checkMobileNumber();
    });

    const name = await Validator(user.name, "name", (a, b) => {
      validatorsMethods.start(a, b).isRequired().strMax(200);
    });

    if (name.message) {
      notify("warn", "Name " + name.message);
      return;
    } else if (!checkName(user.name)) {
      notify("warn", "Invalid Name");
      return;
    }
    if (isEmail.message) {
      notify("warn", "Email " + isEmail.message);
      return;
    }

    if (isMobile.message) {
      notify("warn", "Mobile " + isMobile.message);
      return;
    }

    setLoader("block");

    registerPan(
      {
        pan: user.pan,
        investor_email: user.email,
        investor_mobile_no: user.mobile,
        euin_name: user.name,
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

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const panStatusApiCaller = async (pan, headers) => {
    const res = await checkPanStatus({ pan, email: user.email }, headers);
    if (!res.data) {
      notify("error", res.error.res.data.msg);
      return null;
    } else {
      return res.data;
    }
  };

  const panStatus = async (value, message) => {
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    if (checkPan(value)) {
      setLoader("block");
      const res = await panStatusApiCaller(value, headers);
      setLoader("none");
      if (res.IsEKYCVerified === "Y") {
        return _kycSuccessMessage;
      } else if (res.IsEKYCVerified === "N" && res.IsKYCUnderprocess === "Y") {
        return _kycUnderProcess;
      } else {
        return _kycNotCompliant;
      }
    } else {
      return `invalid pan`;
    }
  };

  const checkName = (value) => {
    var regex = /^[a-zA-Z ]*$/;
    return regex.test(value);
  };

  const iinCreationChangeHandler = async (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name == "minorInvestorName" && !checkName(value)) {
      setIInCreationMsg({
        ...iinCreationMsg,
        minorInvestorName: "invalid name",
      });
      setIInCreationError({ ...iinCreationError, minorInvestorName: true });
    } else if (name == "minorInvestorName" && checkName(value)) {
      setIInCreationMsg({
        ...iinCreationMsg,
        minorInvestorName: "",
      });
      setIInCreationError({ ...iinCreationError, minorInvestorName: false });
    }

    if (name == "secondPanHolder" && value.length == 0) {
      setIInCreationMsg({
        ...iinCreationMsg,
        secondPanHolder: "",
      });
      setNote("");
      value = value.toUpperCase();
    }

    if (name == "secondPanHolder" && value.length < 10 && value.length > 0) {
      setIInCreationMsg({
        ...iinCreationMsg,
        secondPanHolder: "invalid pan",
      });
      value = value.toUpperCase();
      setNote("");
    }

    if (name == "thirdPanHolder" && value.length == 0) {
      setIInCreationMsg({
        ...iinCreationMsg,
        thirdPanHolder: "",
      });
      value = value.toUpperCase();
      setNote("");
    }

    if (name == "thirdPanHolder" && value.length < 10 && value.length > 0) {
      setIInCreationMsg({ ...iinCreationMsg, thirdPanHolder: "invalid pan" });
      value = value.toUpperCase();
      setNote("");
    }

    if (name == "guadianPan" && value.length == 0) {
      setIInCreationMsg({
        ...iinCreationMsg,
        guadianPan: "",
      });
      value = value.toUpperCase();
      setNote("");
    }

    if (name == "guadianPan" && value.length < 10 && value.length > 0) {
      setIInCreationMsg({ ...iinCreationMsg, guadianPan: "invalid pan" });
      setNote("");
      value = value.toUpperCase();
    }

    if (name === "secondPanHolder" && value.length >= 10) {
      setIInCreationState({
        ...iinCreationState,
        [name]: value.toUpperCase(),
      });

      if (value === pan) {
        setIInCreationMsg({
          ...iinCreationMsg,
          secondPanHolder:
            "Second Holder's PAN should not be same as primary Holder's PAN",
        });

        setIInCreationError({ ...iinCreationError, secondPanHolder: true });
        return;
      } else if (value === iinCreationState.thirdPanHolder) {
        setIInCreationMsg({
          ...iinCreationMsg,
          secondPanHolder:
            "Second Holder's Pan should not be same as Third Holder's pan",
        });
        setIInCreationError({ ...iinCreationError, secondPanHolder: true });
        return;
      }
      const message = await panStatus(value.toUpperCase(), "Second Holder");
      setIInCreationError({ ...iinCreationError, secondPanHolder: false });

      if (
        message == _kycSuccessMessage &&
        iinCreationMsg.thirdPanHolder === _kycNotCompliant
      ) {
        setNote(secondHolderKycDoneThirdHolderNotDone);
        setIsPanKycDone({
          ...isPanKycDone,
          thirdPanHolder: false,
          secondPanHolder: true,
        });
      } else if (
        message === _kycNotCompliant &&
        iinCreationMsg.thirdPanHolder === _kycSuccessMessage
      ) {
        setNote(_2ndHolderKYCNotDone3rdHolderDone);
        setIsPanKycDone({
          ...isPanKycDone,
          thirdPanHolder: true,
          secondPanHolder: false,
        });
      } else if (
        message == _kycNotCompliant &&
        iinCreationMsg.thirdPanHolder === _kycNotCompliant
      ) {
        setNote(_2ndHolderThirdHolderNotDone);
        setIsPanKycDone({
          ...isPanKycDone,
          thirdPanHolder: false,
          secondPanHolder: false,
        });
      } else if (message === _kycNotCompliant) {
        setNote(_2ndholderNotCompliant);
        setIsPanKycDone({
          ...isPanKycDone,
          secondPanHolder: false,
        });
      } else if (message === "invalid pan") {
        setIsPanKycDone({
          ...isPanKycDone,
          secondPanHolder: false,
        });
      } else {
        setNote("");
        setIsPanKycDone({
          ...isPanKycDone,
          secondPanHolder: true,
        });
      }
      console.log(message);

      setIInCreationMsg({ ...iinCreationMsg, secondPanHolder: message });
      return;
    }

    if (name === "thirdPanHolder" && value.length >= 10) {
      setIInCreationState({
        ...iinCreationState,
        [name]: value.toUpperCase(),
      });

      if (value === pan) {
        setIInCreationMsg({
          ...iinCreationMsg,
          thirdPanHolder:
            "Third Holder's PAN should not be same as primary Holder's PAN",
        });
        setIInCreationError({
          ...iinCreationError,
          thirdPanHolder: true,
        });
        return;
      } else if (value === iinCreationState.secondPanHolder) {
        setIInCreationMsg({
          ...iinCreationMsg,
          thirdPanHolder:
            "Third Holder Pan should not be same as Second Holder's pan",
        });
        setIInCreationError({
          ...iinCreationError,
          thirdPanHolder: true,
        });
        return;
      }

      const message = await panStatus(value.toUpperCase(), "Third Holder");

      setIInCreationError({
        ...iinCreationError,
        thirdPanHolder: false,
      });

      if (
        message == _kycSuccessMessage &&
        iinCreationMsg.secondPanHolder === _kycNotCompliant
      ) {
        setNote(_2ndholderNotCompliant);
        setIsPanKycDone({
          ...isPanKycDone,
          thirdPanHolder: true,
          secondPanHolder: false,
        });
      } else if (
        message === _kycNotCompliant &&
        iinCreationMsg.secondPanHolder === _kycSuccessMessage
      ) {
        setNote(secondHolderKycDoneThirdHolderNotDone);
        setIsPanKycDone({
          ...isPanKycDone,
          thirdPanHolder: false,
          secondPanHolder: true,
        });
      } else if (
        message == _kycNotCompliant &&
        iinCreationMsg.secondPanHolder === _kycNotCompliant
      ) {
        setNote(_2ndHolderThirdHolderNotDone);
        setIsPanKycDone({
          ...isPanKycDone,
          thirdPanHolder: false,
          secondPanHolder: false,
        });
      } else if (message === _kycNotCompliant) {
        console.log("0iam running");
        setNote(secondHolderKycDoneThirdHolderNotDone);
        setIsPanKycDone({
          ...isPanKycDone,
          thirdPanHolder: false,
        });
      } else if (message === "invalid pan") {
        setIsPanKycDone({
          ...isPanKycDone,
          thirdPanHolder: false,
        });
      } else {
        setNote("");
        setIsPanKycDone({
          ...isPanKycDone,
          thirdPanHolder: true,
        });
      }

      setIInCreationMsg({ ...iinCreationMsg, thirdPanHolder: message });
      return;
    }

    if (name === "guadianPan" && value.length >= 10) {
      setIInCreationState({
        ...iinCreationState,
        [name]: value.toUpperCase(),
      });

      const message = await panStatus(value.toUpperCase(), "guadian Pan");

      if (message == _kycSuccessMessage) {
        setIsPanKycDone({ ...isPanKycDone, guadianPan: true });
        setIInCreationError({ ...iinCreationError, guadianPan: false });
      } else if (message == _kycUnderProcess) {
        setIsPanKycDone({ ...isPanKycDone, guadianPan: false });
        setIInCreationError({ ...iinCreationError, guadianPan: true });
      } else {
        setIsPanKycDone({ ...isPanKycDone, guadianPan: false });
        setIInCreationError({ ...iinCreationError, guadianPan: true });
      }

      setIInCreationMsg({
        ...iinCreationMsg,
        guadianPan: message,
      });
      return;
    }

    if (name == "taxStatus" && value === "02") {
      setIInCreationScreen({
        ...iinCreationScreen,
        secondPanHolder: "none",
        thirdPanHolder: "none",
        minorInvestorName: "block",
        guadianPan: "block",
      });
      setIInCreationState({
        ...iinCreationState,
        [name]: value,
        ["holdingNature"]: "SI",
        ["guadianPan"]: pan,
      });
      setIInCreationMsg({ ...iinCreationInitialState });
      setNote("");

      return;
    } else if (name == "taxStatus") {
      setIInCreationScreen({
        ...iinCreationScreen,
        secondPanHolder: "none",
        thirdPanHolder: "none",
        minorInvestorName: "none",
        guadianPan: "none",
      });
      setIInCreationState({
        ...iinCreationInitialState,
        [name]: value,
        ["holdingNature"]: "",
      });

      setIInCreationMsg({ ...iinCreationInitialState });
      setNote("");

      return;
    }

    if (name == "holdingNature" && value === "SI") {
      setIInCreationScreen({
        ...iinCreationScreen,
        secondPanHolder: "none",
        thirdPanHolder: "none",
        minorInvestorName: "none",
        guadianPan: "none",
      });
      setIInCreationMsg({ ...iinCreationInitialState });
      setNote("");
      setIInCreationState({
        ...iinCreationInitialState,
        [name]: value,
        taxStatus: iinCreationState.taxStatus,
      });
      return;
    } else if (name == "holdingNature" && value === "AS") {
      setIInCreationScreen({
        ...iinCreationScreen,
        secondPanHolder: "block",
        thirdPanHolder: "block",
        minorInvestorName: "none",
        guadianPan: "none",
      });
      setIInCreationMsg({ ...iinCreationInitialState });
      setNote("");
      setIInCreationState({
        ...iinCreationInitialState,
        [name]: value,
        taxStatus: iinCreationState.taxStatus,
      });
      return;
    }

    setIInCreationState({
      ...iinCreationState,
      [name]: value,
    });
  };

  const goToDashBoard = (e) => {
    navigate("/");
  };

  const checkPan = (value) => {
    let regExpe =
      /^([A-Z]){3}(C|P|H|F|A|T|B|L|J|G){1}([A-Z]){1}([0-9]){4}([A-Z]){1}?$/;

    if (!regExpe.test(value)) {
      return false;
    }
    return true;
  };

  const submitIIncreation = (e) => {
    const requiredFields = {};
    const panFields = {};

    for (let key in iinCreationScreen) {
      if (iinCreationScreen[key] == "block") {
        if (
          key == "taxStatus" ||
          key == "holdingNature" ||
          key == "minorInvestorName"
        ) {
          requiredFields[key] = iinCreationState[key];
        } else {
          panFields[key] = iinCreationState[key];
        }
      }
    }

    let errorsRequired = {};

    for (let key in requiredFields) {
      if (!requiredFields[key]) {
        errorsRequired[key] = "mandatory field";
      } else if (requiredFields[key] && iinCreationError[key]) {
        errorsRequired[key] = iinCreationMsg[key];
      } else {
        errorsRequired[key] = "";
      }
    }

    for (let key in panFields) {
      if (key == "thirdPanHolder" && panFields[key] == "") {
        errorsRequired[key] = "";
      } else if (!checkPan(panFields[key])) {
        errorsRequired[key] = iinCreationMsg[key];
      } else if (iinCreationError[key]) {
        errorsRequired[key] = iinCreationMsg[key];
      }
    }

    // for (let key in errorsRequired) {
    //   let msg = "";
    //   key
    //     .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    //     .split(" ")
    //     .forEach((el) => {
    //       msg += el + " ";
    //     });

    //   errorsRequired[key] =
    //     msg[0].toUpperCase() +
    //     msg.slice(1, msg.length - 1) +
    //     " " +
    //     errorsRequired[key];
    // }

    if (errorsRequired["guadianPan"] == "") {
      errorsRequired["guadianPan"] = "mandatory field";
    }

    if (errorsRequired["secondPanHolder"] == "") {
      errorsRequired["secondPanHolder"] = "mandatory field";
    }

    if (errorsRequired["thirdPanHolder"] == "") {
      delete errorsRequired["thirdPanHolder"];
    }

    // if (errorsRequired["thirdPanHolder"] === "invalid pan") {
    //   errorsRequired["thirdPanHolder"] = "invalid pan";
    // }

    setIInCreationMsg({ ...iinCreationMsg, ...errorsRequired });

    let hasError = true;

    for (let key in errorsRequired) {
      if (errorsRequired[key]) hasError = false;
    }

    if (hasError) {
      let state = { ...iinCreationState };

      if (!isPanKycDone.secondPanHolder) {
        delete state["secondPanHolder"];
      }

      if (!isPanKycDone.thirdPanHolder) {
        delete state["thirdPanHolder"];
      }
      console.log(pan);
      localStorage.setItem("kycValidation", JSON.stringify({ ...state, pan }));

      navigate("/required-steps-front", {
        state: {
          pan,
          user,
          screens,
          underProcess,
          iinCreationState,
          iinCreationScreen,
          isPanKycDone,
          note,
          iinCreationMsg,
          iinCreationError,
        },
      });
    }
  };

  const borderError = "2px solid #f06d70 !important";

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
                              value={pan}
                              onChange={(e) => setPan(e.target.value)}
                            />
                            <label for="pan" className="text-label">
                              Enter PAN <span className="text-danger">*</span>
                            </label>
                          </span>
                        </div>
                        <div
                          className="col-6"
                          onClick={
                            underProcess ? goToDashBoard : checkPanNumber
                          }
                        >
                          <button type="button" className="btn-custom">
                            {underProcess ? "dashboard" : "check now"}
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
                style={{ display: screens.message }}
                className="bg-light-red py-2 rounded px-3"
                role="alert"
              >
                <span className=" ">{user.message}</span>
              </div>
              <div
                className="col-6 offset-3 py-5"
                style={{ display: screens.iinCreation }}
              >
                <Form>
                  <Form.Group
                    className="mb-3"
                    style={{ display: iinCreationScreen.taxStatus }}
                  >
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
                        value={iinCreationState.taxStatus}
                        onChange={iinCreationChangeHandler}
                      >
                        <MenuItem value="02">On Behalf of Minor</MenuItem>
                        <MenuItem value="01">Resident Individual</MenuItem>
                        <MenuItem value="21">NRI - Repatriable (NRE)</MenuItem>
                        <MenuItem value="11">NRI Through NRO A/c</MenuItem>
                      </Select>
                    </FormControl>
                    <p className="text-danger text-start fs-13 mb-0">
                      {iinCreationMsg.taxStatus}
                    </p>
                  </Form.Group>

                  <Form.Group
                    className={`mb-3 ${
                      iinCreationState.taxStatus ? "d-block" : "d-none"
                    } `}
                  >
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
                        value={iinCreationState.holdingNature}
                        onChange={iinCreationChangeHandler}
                        disabled={iinCreationState.taxStatus === "02"}
                      >
                        <MenuItem value="SI">Single</MenuItem>
                        <MenuItem value="AS">Anyone / Survivor</MenuItem>
                      </Select>
                    </FormControl>
                    <p className="text-danger text-start fs-13 mb-0">
                      {iinCreationMsg.holdingNature}
                    </p>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    style={{ display: iinCreationScreen.secondPanHolder }}
                  >
                    <span className="has-float-label">
                      <input
                        className="form-control"
                        id="holder-1-pan"
                        name="secondPanHolder"
                        type="text"
                        placeholder="Enter PAN *"
                        value={iinCreationState.secondPanHolder}
                        onChange={iinCreationChangeHandler}
                        maxLength={10}
                      />
                      <label for="holder-1-pan" className="text-label">
                        Second Holder's PAN<span className="text-red">*</span>
                      </label>
                    </span>
                    <div className="row">
                      <div className="col-12">
                        <p
                          className={`text-start fs-13 mb-0 ${
                            iinCreationMsg.secondPanHolder ===
                            _kycSuccessMessage
                              ? "text-success"
                              : "text-danger"
                          }`}
                        >
                          <div>
                            {iinCreationMsg.secondPanHolder}
                            {iinCreationMsg.secondPanHolder ===
                              _kycNotCompliant && (
                              <Link
                                to="/complete-kyc"
                                className="fs-14"
                                state={iinCreationState.secondPanHolder}
                                style={{ marginLeft: "2%" }}
                              >
                                Complete Your Kyc
                              </Link>
                            )}
                          </div>
                        </p>
                      </div>
                    </div>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    style={{ display: iinCreationScreen.thirdPanHolder }}
                  >
                    <span className="has-float-label">
                      <input
                        className="form-control "
                        id="holder-2-pan"
                        name="thirdPanHolder"
                        type="text"
                        placeholder="Enter PAN *"
                        value={iinCreationState.thirdPanHolder}
                        onChange={iinCreationChangeHandler}
                        maxLength={10}
                      />
                      <label for="holder-2-pan" className="text-label">
                        Third Holder's PAN <span className="text-red">*</span>
                      </label>
                    </span>
                    <div className="row">
                      <div className="col-12">
                        <p
                          className={`text-start fs-13 mb-0 ${
                            iinCreationMsg.thirdPanHolder === _kycSuccessMessage
                              ? "text-success"
                              : "text-danger"
                          }`}
                        >
                          {iinCreationMsg.thirdPanHolder}
                          {iinCreationMsg.thirdPanHolder ===
                            _kycNotCompliant && (
                            <Link
                              to="/complete-kyc"
                              className="fs-14"
                              style={{ marginLeft: "2%" }}
                              state={iinCreationState.thirdPanHolder}
                            >
                              Complete Your Kyc
                            </Link>
                          )}
                        </p>
                      </div>
                    </div>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    style={{ display: iinCreationScreen.minorInvestorName }}
                  >
                    <span className="has-float-label">
                      <input
                        className="form-control"
                        id="minor"
                        name="minorInvestorName"
                        type="text"
                        placeholder="Enter Name *"
                        value={iinCreationState.minorInvestorName}
                        onChange={iinCreationChangeHandler}
                      />
                      <label for="minor" className="text-label">
                        Minor Investor Name<span className="text-red">*</span>
                      </label>
                    </span>

                    <p className="text-danger text-start fs-13 mb-0">
                      {iinCreationMsg.minorInvestorName}
                    </p>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    style={{ display: iinCreationScreen.guadianPan }}
                  >
                    <span className="has-float-label">
                      <input
                        className="form-control"
                        id="gpan"
                        name="guadianPan"
                        type="text"
                        placeholder="Enter Name *"
                        value={iinCreationState.guadianPan}
                        onChange={iinCreationChangeHandler}
                        maxLength={10}
                        disabled={true}
                      />
                      <label for="gpan" className="text-label">
                        Guardian PAN <span className="text-red">*</span>
                      </label>

                      <div className="row">
                        <div className="col-12">
                          <p
                            className={`text-start fs-13 mb-0 ${
                              iinCreationMsg.guadianPan === _kycSuccessMessage
                                ? "text-success"
                                : "text-danger"
                            }`}
                          >
                            {iinCreationMsg.guadianPan}

                            {iinCreationMsg.guadianPan === _kycNotCompliant && (
                              <Link
                                to="/complete-kyc"
                                className="fs-14"
                                style={{ marginLeft: "2%" }}
                                state={iinCreationState.guadianPan}
                              >
                                Complete Your Kyc
                              </Link>
                            )}
                          </p>
                        </div>
                      </div>
                    </span>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    style={{
                      display:
                        iinCreationState.taxStatus === "02" ? "block" : "none",
                    }}
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
                      onClick={submitIIncreation}
                      className="btn-custom float-right"
                    >
                      Proceed
                    </button>
                  </Form.Group>
                </Form>
              </div>
              {/* kyc  */}

              <div
                className="col-12 mt-5 px-5 kyc"
                style={{ display: screens.registerPan }}
              >
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
                          placeholder=" "
                          value={user.pan}
                          disabled={true}
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
                          value={user.name}
                          onChange={changeHandler}
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
                          value={user.email}
                          onChange={changeHandler}
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
                          value={user.mobile}
                          onChange={changeHandler}
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
                  <div className="col-6 text-end">
                    <button className="btn-custom" onClick={openNSELink}>
                      Proceed
                    </button>
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
