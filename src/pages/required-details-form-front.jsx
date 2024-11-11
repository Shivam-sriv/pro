import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaEdit } from "react-icons/fa";
import happy from "../assets/images/others/happy.png";
import fail from "../assets/images/others/failed.png";
import Cart_Delete from "../components/delete-confirmation";
import { usePersonalDetails } from "../required-details-hooks";
import { useBankdetailsHook } from "../required-details-hooks/useBankdetailsHook";
import { useSecondaryDetailsHook } from "../required-details-hooks/useSecondaryDetailsHook";
import { useThirdDetailsHook } from "../required-details-hooks/useThirdDetailsHook";
import { useEffect } from "react";

import {
  createProfile,
  getNominees,
  updateNominees,
  deleteNominees,
  relationApi,
  occupationApi,
  addNomini,
  addBankDetail,
  addHolder,
  incomeRange,
  createIINnse,
  createFatca,
  bankListApi,
  uploadProofs,
} from "../apisMethods";
import { notify } from "./toastCreater";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";


const RequiredDetailsFormFront = () => {
  let history = useNavigate();
  const [Primaryholder, SetPrimaryholder] = useState("d-block");
  const [Secondholder, SetSecondholder] = useState("d-none");
  const [Thirdholder, SetThirdholder] = useState("d-none");
  const [Bank, SetBank] = useState("d-none");
  const [Nominee, SetNominee] = useState("d-none");
  const [Success, SetSuccess] = useState("d-none");
  const [Active, SetActive] = useState(" ");
  const [Active1, SetActive1] = useState(" ");
  const [Active2, SetActive2] = useState(" ");
  const [errorContent, setErrorContent] = useState({});
  const [nriState, setNriState] = useState(0);
  const [userData, setUserData] = useState({});
  const { profileChangeHandler, profileState, checkErrors } =
    usePersonalDetails(nriState);

  const {
    SecondHolderChangeler,
    secondInitialState,
    setSecondInitialState,
    secondInitial,
    checkSecondHolderError,
  } = useSecondaryDetailsHook();
  const {
    thirdHolderChangeler,
    thirdInitialState,
    setThirdInitialState,
    thirdInitial,
    checkThirdHolderError,
  } = useThirdDetailsHook();

  const [checkMinerHide, setCheckMinerHide] = useState("");
  const [dob, setDob] = useState("");
  const [dobError, setDobError] = useState("");
  const [guardian_dob, setGuardian_dob] = useState("");
  const [guardian_dobError, setGuardian_dobError] = useState("");
  const [relationship_with_minor, setRelationship_with_minor] = useState("");
  const [relationship_with_minorError, setRelationship_with_minorError] =
    useState("");
  const [guardian_name, setGuardian_name] = useState("");
  const [guardian_nameError, setGuardian_nameError] = useState("");

  const { BankChangeler, bankDetails, checkBankError, checkNominiError } =
    useBankdetailsHook();
  const [bankContentError, setBankContentError] = useState({});
  const [accountType, setAccountType] = useState("text");
  const [nomini_name, setNomini_name] = useState("");
  const [nomini_dob, setNomini_dob] = useState("");
  const [nomini_relation, setNomini_relation] = useState("");
  const [alocation_percentage, setAlocation_percentage] = useState("");
  const [nomini_guardian_name, setNomini_guardian_name] = useState("");
  const [nominiError, setNominiError] = useState("");
  const [hideNominiGuardian, setHideNominiGuardian] = useState("d-none");

  const [incomeRangeData, setIncomeRangeData] = useState([]);
  const [relationData, setRelationData] = useState([]);
  const [occupationData, setOccupationData] = useState([]);
  const [tokenState, setTokenState] = useState(localStorage.getItem("token"));

  const [secondNriState, setSecondNriState] = useState("");
  const [secondErrorState, setSecondErrorState] = useState({});
  const [kycDetails, setKycDetails] = useState({});
  const [secondHolderDob, setSecondHolderDob] = useState("");
  const [secondHolderDobError, setSecondHolderDobError] = useState("");
  const [not_tax_payer_other_country, setNot_tax_payer_other_country] =
    useState(0);
  const [
    not_tax_payer_other_country_third,
    setNot_tax_payer_other_country_third,
  ] = useState(0);
  const [
    not_tax_payer_other_country_thirdError,
    setNot_tax_payer_other_country_thirdError,
  ] = useState("");
  const [
    not_tax_payer_other_countryError,
    setNot_tax_payer_other_countryError,
  ] = useState("");
  const [not_politically_exposed, setNot_politically_exposed] = useState(0);
  const [not_politically_exposedError, setNot_politically_exposedError] =
    useState("");
  const [not_politically_exposed_third, setNot_politically_exposed_third] =
    useState(0);
  const [
    not_politically_exposed_thirdError,
    setNot_politically_exposed_thirdError,
  ] = useState("");
  const [not_politically, setNot_politically] = useState(0);
  const [not_politicallyError, setNot_politicallyError] = useState("");
  const [tax_payerError, setTax_payerError] = useState("");
  const [tax_payer, setTax_payer] = useState("");
  const [nominiData, setNominiData] = useState([]);
  const [checkUpdateState, setCheckUpdateState] = useState(false);
  const [id, setId] = useState("");
  const [userDataLocalStoarge, setUserDataLocalStoarge] = useState({});
  const [secondHolderPan, setSecondHolderPan] = useState("");
  const [secondHolderPanError, setSecondHolderPanError] = useState("");

  const [secondHolderdob, setSecondHolderdob] = useState("");
  const [hideNimination, setHideNimination] = useState("");
  const [hitIINfromBank, setHitIINfromBank] = useState(false);
  const [nominiMinor, setNominiMinor] = useState();
  const [hideNriState, setHideNriState] = useState();
  const [hideIndianState, setHideIndianState] = useState();
  const [thirdErrorState, setThirdErrorState] = useState({});
  const [thirdHolderPan, setThirdHolderPan] = useState("");
  const [thirdHolderDobError, setThirdHolderDobError] = useState("");
  const [thirdNriState, setThirdNriState] = useState("");
  const [thirdHolderDob, setThirdHolderDob] = useState("");
  const [hideUploads, setHideUploads] = useState("");

  const [bankProofType, setBankProofType] = useState("");
  const [bankProof, setBankProof] = useState("");
  const [birthProofType, setBirthProofType] = useState("");
  const [birthProof, setBirthProof] = useState("");
  const [indianBankTypeHide, setIndianBankTypeHide] = useState(false);
  const [bankListData, setBankListData] = useState([]);
  const [failContent, setFailContent] = useState("d-none");
  const [uploadingErrors, setUploadingErrors] = useState({
    bankProofType: "",
    bankProof: "",
    birthProofType: "",
    birthProof: "",
  });
  // const token = localStorage.getItem("token");

  const headers = { headers: { Authorization: `Bearer ${tokenState}` } };

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("user"));
    setUserDataLocalStoarge(userdata);
    const kyc = JSON.parse(localStorage.getItem("kycValidation"));
    const token = localStorage.getItem("token");
    setKycDetails(kyc);
    setTokenState(token);
    console.log("kycDetails", kyc);
    setUserData(userdata);
    if (kyc.taxStatus == "02") {
      setCheckMinerHide("");
    } else {
      setCheckMinerHide("d-none");
    }

    Relation();
    getOccupation();
    nomineedata();
    incomeRangeFun();
    BankListFun();
    if (
      (kyc.taxStatus == "01" && kyc.holdingNature == "SI") ||
      (kyc.taxStatus == "01" && kyc.holdingNature == "AS") ||
      kyc.taxStatus == "02"
    ) {
      setNriState(1);
      setHideNriState("d-none");
    } else if (
      (kyc.taxStatus == "21" && kyc.holdingNature == "SI") ||
      kyc.taxStatus == "11" ||
      (kyc.taxStatus == "21" && kyc.holdingNature == "AS") ||
      kyc.taxStatus == "11"
    ) {
      setHideIndianState("d-none");
      setNriState(0);
    }
    if (kyc.holdingNature == "SI" && kyc.taxStatus == "02") {
      setHideNimination("d-none");
    } else {
      setHideNimination("");
      setHideUploads("d-none");
    }
    if (kyc.taxStatus == "21" || kyc.taxStatus == "11") {
      setIndianBankTypeHide(true);
    }
    // SetBank("d-none");
    // SetSuccess("d-block");
    // SetActive2("active");
    SetBank("d-block");
    SetActive("active");
  }, []);
  const BackToPrimary = () => {
    const formData = new FormData();
    formData.append("proofType", bankProofType);
    formData.append("iin", "5013837002");
    formData.append("imgFormat", "PDF");
    formData.append("fileUpload", bankProof);
    uploadProofs(formData, headers).then((res) => {
      if (!res.data) {
        console.log("erroe from minerUpload", res.data);
      } else {
        // SetNominee("d-none");
        // SetSuccess("d-block");
        // SetActive2("active");
      }
    });
  };
  const BackToSecondHolder = () => {
    SetSecondholder("d-block");
    SetThirdholder("d-none");

    localStorage.removeItem("secondMobile");
    localStorage.removeItem("secondEmail");
    setSecondHolderPan(kycDetails.secondPanHolder);
  };
  const toBack = () => {
    if (kycDetails.thirdPanHolder) {
      localStorage.removeItem("secondMobile");
      localStorage.removeItem("secondEmail");
      SetThirdholder("d-block");
      SetBank("d-none");
      SetActive("");
    } else if (kycDetails.holdingNature == "SI") {
      SetPrimaryholder("d-block");
      SetBank("d-none");
      SetActive("");
    } else if (!kycDetails.thirdPanHolder && kycDetails.secondPanHolder) {
      SetPrimaryholder("d-block");
      SetBank("d-none");
      SetActive("");
    }
  };

  const toBackBank = () => {
    SetBank("d-block");
    SetNominee("d-none");
    SetActive1("");
  };

  const incomeRangeFun = () => {
    incomeRange(headers).then((res) => {
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        console.log("rangedata", res.data.data);
        setIncomeRangeData(res?.data?.data);
      }
    });
    // SetPrimaryholder("d-none");
    // SetBank("d-block");
    // SetActive("active");
  };

  const createIIN = async () => {
    let reqData = {
      pan: kycDetails.pan,
      email: userDataLocalStoarge.email,
      holdingNature: kycDetails.holdingNature,
      tax_status: kycDetails.taxStatus,
    };

    console.log("reqData", reqData);
    createIINnse(reqData, headers).then((res) => {
      if (!res.data) {
        console.log(res);
        notify("error", res.error.response.data.msg);
      } else {
        console.log("before fatka", res.data.IINstatus);
        if (res.data?.IINstatus === "1") {
          notify("error", "IIN Already Exist");
        } else {
          // res.data?.IINstatus?.service_response?.return_msg?._text.split(" ");
          let iin = res.data?.nseData.split(" ").slice(-1)[0];
          if (iin != undefined) {
            // let extractedIIN = null;
            // iin.map((key) => {
            //   if (/[0-9]/.test(key)) {
            //     extractedIIN = key;
            //   }
            // });
            let fatcaReq = {};
            if (kycDetails.guadianPan) {
              fatcaReq = {
                email: userDataLocalStoarge.email,
                guard_pan: kycDetails.guadianPan,
                tax_status: kycDetails.taxStatus,
                holdingNature: kycDetails.holdingNature,
              };
            } else {
              fatcaReq = {
                email: userDataLocalStoarge.email,
                pan: kycDetails.pan,
                tax_status: kycDetails.taxStatus,
                holdingNature: kycDetails.holdingNature,
              };
            }
            createFatca(fatcaReq, headers).then((res) => {
              if (!res.data) {
                console.log("error fataka", res.data);
                setFailContent("");
                notify("error", res.error.response.data.msg);
              } else {
                console.log("succes fatka", res.data);
                const formData = new FormData();
                formData.append("proofType", bankProofType);
                formData.append("iin", iin);
                formData.append("imgFormat", "PDF");
                formData.append("fileUpload", bankProof);
                uploadProofs(formData, headers).then((res) => {
                  if (!res.data) {
                    console.log(res.data);
                  } else {
                    if (
                      kycDetails.holdingNature == "SI" &&
                      kycDetails.taxStatus == "02"
                    ) {
                      const formDataMiner = new FormData();
                      formDataMiner.append("proofType", birthProofType);
                      formDataMiner.append("iin", iin);
                      formDataMiner.append("imgFormat", "PDF");
                      formDataMiner.append("fileUpload", birthProof);
                      uploadProofs(formDataMiner, headers).then((res) => {
                        if (!res.data) {
                          console.log("erroe from minerUpload", res.data);
                        } else {
                          SetNominee("d-none");
                          SetSuccess("d-block");
                          SetActive2("active");
                        }
                      });
                    } else {
                      SetBank("d-none");
                      SetSuccess("d-block");
                      SetActive2("active");
                    }
                  }
                });
              }
            });
            notify("success", res.data.msg);
          }
        }
      }
    });
  };
  const nomineedata = () => {
    const userdata = JSON.parse(localStorage.getItem("user"));
    let reqData = { email: userdata.email };
    getNominees(reqData, headers).then((res) => {
      if (!res.data) {
        console.log("aa");
        notify("error", "error", res.error.response.data.msg);
      } else {
        console.log("setNominiData", res.data);
        setNominiData(res.data?.nominees);
      }
    });
  };

  const getOccupation = async () => {
    occupationApi(headers).then((res) => {
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        console.log("occupation", res.data.data);
        setOccupationData(res?.data?.data);
      }
    });
  };
  const Relation = async () => {
    relationApi(headers).then((res) => {
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        console.log("relation", res.data.data);
        setRelationData(res?.data?.data);
      }
    });
  };
  const BankListFun = async () => {
    bankListApi(headers).then((res) => {
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        console.log("bankListApi", res.data.data);
        setBankListData(res?.data?.data);
      }
    });
  };
  const deleteData = (id) => {
    deleteNominees({ nomini_id: id }, headers).then((res) => {
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        notify("success", res.data?.msg);
      }
    });
    let arr = nominiData.filter(function (item) {
      return item._id !== id;
    });
    setNominiData(arr);
  };

  const getUpdatedData = (
    id,
    nomini_name,
    dob,
    relation,
    alocation_percentage,
    guardian_name,
    nominiMinor,
    check
  ) => {
    const value = EighteenYear(dob);
    if (value < 18) {
      setHideNominiGuardian("");
    } else {
      setHideNominiGuardian("d-none");
    }
    let dateYear = dob.substring(0, 4);
    let dateMonth = dob.substring(4, 6);
    let dateDate = dob.substring(6, 8);
    let finalDate = dateYear + "-" + dateMonth + "-" + dateDate;
    setNomini_guardian_name(guardian_name);
    setAlocation_percentage(alocation_percentage);
    setNomini_relation(relation);
    setNomini_name(nomini_name);
    setNomini_dob(finalDate);
    setCheckUpdateState(check);
    setNominiMinor(nominiMinor);
    setId(id);
  };
  const updateNominibyId = () => {
    let dateWithoutDash = nomini_dob.replace(/-/g, "");

    let reqData = {
      nomini_id: id,
      nomini_name: nomini_name.trim(),
      dob: dateWithoutDash,
      relation: nomini_relation,
      alocation_percentage: Number(alocation_percentage),
      guardian_name: nomini_guardian_name.trim(),
      email: userDataLocalStoarge.email.trim(),
    };
    updateNominees(reqData, headers).then((res) => {
      if (!res.data) {
        notify("error", res.error.response.data.msg);
      } else {
        notify("success", res.data.msg);
        setNomini_guardian_name("");
        setAlocation_percentage("");
        setNomini_relation("");
        setNomini_name("");
        setNomini_dob("");
        setNominiMinor("");
        setNominiMinor("");

        setNominiError({});
        setCheckUpdateState(false);
        nomineedata();
      }
    });
  };
  const changelerSecondHolderDob = (e) => {
    const value = EighteenYear(e.target.value);
    if (value < 18) {
      setSecondHolderDobError("Minimum age should be 18 Year and above");
    } else if (!value) {
      setSecondHolderDobError("Mandotry Field");
    } else {
      // let dateWithoutDash = (e.target.value).replace(/-/g, "")
      setSecondHolderDob(e.target.value);
      setSecondHolderDobError("");
    }
  };
  const datePick = (e) => {
    const value = EighteenYear(e.target.value);
    console.log(kycDetails);
    if (value < 18 && kycDetails.taxStatus != "02") {
      setDobError("Minimum age should be 18 Year or above");
    } else if (
      kycDetails.taxStatus == "02" &&
      kycDetails.holdingNature == "SI" &&
      value < 18
    ) {
      setDob(e.target.value);
      setDobError("");
    } else if (
      kycDetails.taxStatus == "02" &&
      kycDetails.holdingNature == "SI" &&
      value > 18
    ) {
      setDobError("Maximum age should be 18 Year or Less than");
    } else if (!value) {
      setDobError("Mandotry Field");
    } else {
      // let dateWithoutDash = (e.target.value).replace(/-/g, "")
      setDob(e.target.value);
      console.log("dateWithoutDash");
      setDobError("");
    }
  };

  const changelerThirdHolderDob = (e) => {
    const value = EighteenYear(e.target.value);
    if (value < 18) {
      setThirdHolderDobError("Minimum age should be 18 Year and above");
    } else if (!value) {
      setThirdHolderDobError("Mandotry Field");
    } else {
      // let dateWithoutDash = (e.target.value).replace(/-/g, "")
      setThirdHolderDob(e.target.value);
      setThirdHolderDobError("");
    }
  };
  const nominiDOb = (e) => {
    const value = EighteenYear(e.target.value);
    if (value < 18) {
      setNominiMinor(true);
      setHideNominiGuardian("");
    } else {
      setHideNominiGuardian("d-none");
      setNominiMinor(false);
    }
    setNomini_dob(e.target.value);
  };
  const EighteenYear = (value) => {
    let today = new Date();
    let birthDate = new Date(value); // create a date object directly from `dob1` argument
    let age_now = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  };
  const guardianDob = (e) => {
    const value = EighteenYear(e.target.value);
    if (value < 18) {
      setGuardian_dobError("Minimum age should be 18 Year and above");
    } else if (!value) {
      setGuardian_dobError("Mandotry Field");
    } else {
      // let dateWithoutDash = (e.target.value).replace(/-/g, "")
      setGuardian_dob(e.target.value);
      setGuardian_dobError("");
    }
  };
  const primary = async () => {
    const errors = await checkErrors(1);


    console.log("before condition", errors);
    if (errors.errors || !not_politically || !tax_payer || !dob) {
      console.log("got  error");
      setErrorContent(errors);
      if (!not_politically) {
        console.log("eeeee");
        setNot_politicallyError("Mandotry Field");
      }
      if (!tax_payer) {
        setTax_payerError("Mandotry Field");
      }
      if (!dob) {
        setDobError("Mandotry Field");
      }
    } else {
      if (
        (!relationship_with_minor ||
          !guardian_dob ||
          !guardian_name ||
          !not_politically ||
          !tax_payer) &&
        kycDetails.taxStatus == "02" &&
        kycDetails.holdingNature == "SI"
      ) {
        if (!guardian_name) {
          setGuardian_nameError("Mandotry Field");
        }
        if (!relationship_with_minor) {
          setRelationship_with_minorError("Mandotry Field");
        }
        if (!guardian_dob) {
          setGuardian_dobError("Mandotry Field");
        }

        if (!not_politically) {
          console.log("eeeee");
          setNot_politicallyError("Mandotry Field");
        }
        if (!tax_payer) {
          setTax_payerError("Mandotry Field");
        }
        console.log("gurdian part");
      } else {
        setErrorContent({});
        setTax_payerError("");
        setNot_politicallyError("");
        setGuardian_dobError("");
        setRelationship_with_minorError("");
        setGuardian_nameError("");
        setDobError("");
        setTax_payerError("");
        setNot_politicallyError("");

        let dateWithoutDash = dob.replace(/-/g, "");
        if (kycDetails.taxStatus == "02" && kycDetails.holdingNature == "SI") {
          let minerOBj = {
            resident: nriState,
            // pan: kycDetails.guadianPan,
            guard_pan: kycDetails.guadianPan,
            not_politically,
            tax_payer,
            // email: "shivam.bfcsofttech@gmail.com",
            email: userDataLocalStoarge.email,
            resident: nriState,
            dob: dateWithoutDash,
            guardian_name,
            relationwithminor: relationship_with_minor,
            guardian_dob,
            tax_status: kycDetails.taxStatus,
            holding_nature: kycDetails.holdingNature,
          };
          let reqObj = Object.assign(minerOBj, profileState);

          console.log("reqObj", reqObj);
          createProfile(reqObj, headers).then((res) => {
            if (!res.data) {
              notify("error", res.error.response.data.msg);
            } else {
              console.log(res.data);
              SetPrimaryholder("d-none");
              SetBank("d-block");
              SetActive("active");
            }
          });
        } else if (
          kycDetails.taxStatus == "01" &&
          kycDetails.holdingNature == "SI"
        ) {
          console.log("Indivisual", profileState);
          let temObj = {
            resident: nriState,
            guard_pan: "",
            pan: kycDetails.pan,
            not_politically,
            tax_payer,
            email: userDataLocalStoarge.email,
            resident: nriState,
            dob: dateWithoutDash,
            tax_status: "01",
            holding_nature: "SI",
          };
          let reqObj = Object.assign(temObj, profileState);

          createProfile(reqObj, headers).then((res) => {
            if (!res.data) {
              notify("error", res.error.response.data.msg);
            } else {
              console.log(res.data);
              SetPrimaryholder("d-none");
              SetBank("d-block");
              SetActive("active");
            }
          });
        } else if (
          kycDetails.taxStatus == "01" &&
          kycDetails.holdingNature == "AS"
        ) {
          console.log("Indivisual", profileState);
          let temObj = {
            pan: kycDetails.pan,
            not_politically,
            guard_pan: "",
            tax_payer,
            email: userDataLocalStoarge.email,
            resident: nriState,
            dob: dateWithoutDash,
            tax_status: kycDetails.taxStatus,
            holding_nature: kycDetails.holdingNature,
          };
          let reqObj = Object.assign(temObj, profileState);

          createProfile(reqObj, headers).then((res) => {
            if (!res.data) {
              notify("error", res.error.response.data.msg);
            } else if (kycDetails.secondPanHolder) {
              console.log(res.data);
              setSecondHolderPan(kycDetails.secondPanHolder);
              SetPrimaryholder("d-none");
              SetSecondholder("d-block");
            } else if (!kycDetails.secondPanHolder) {
              SetPrimaryholder("d-none");
              SetThirdholder("d-block");
              setThirdHolderPan(kycDetails.thirdPanHolder);
            }
          });
        } else if (
          kycDetails.taxStatus == "21" ||
          (kycDetails.taxStatus == "11" && kycDetails.holdingNature == "SI")
        ) {
          console.log("Indivisual", profileState);
          let temObj = {
            pan: kycDetails.pan,
            guard_pan: "",
            not_politically,
            tax_payer,
            email: userDataLocalStoarge.email,
            resident: nriState,
            dob: dateWithoutDash,
            tax_status: kycDetails.taxStatus,
            holding_nature: kycDetails.holdingNature,
          };
          let reqObj = Object.assign(temObj, profileState);

          createProfile(reqObj, headers).then((res) => {
            if (!res.data) {
              notify("error", "eroor");
            } else {
              console.log(res.data);
              SetPrimaryholder("d-none");
              SetBank("d-block");
              SetActive("active");
            }
          });
        } else if (
          kycDetails.taxStatus == "21" ||
          (kycDetails.taxStatus == "11" && kycDetails.holdingNature == "AS")
        ) {
          console.log("Indivisual", profileState);
          let temObj = {
            pan: kycDetails.pan,
            not_politically,
            guard_pan: "",
            tax_payer,
            email: userDataLocalStoarge.email,
            resident: nriState,
            dob: dateWithoutDash,
            tax_status: kycDetails.taxStatus,
            holding_nature: kycDetails.holdingNature,
          };
          let reqObj = Object.assign(temObj, profileState);

          createProfile(reqObj, headers).then((res) => {
            if (!res.data) {
              notify("error", res.error.response.data.msg);
            } else if (kycDetails.secondPanHolder) {
              console.log(res.data);
              SetPrimaryholder("d-none");
              SetSecondholder("d-block");

              setSecondHolderPan(kycDetails.secondPanHolder);
            } else if (
              !kycDetails.secondPanHolder &&
              kycDetails.thirdHolderPan
            ) {
              SetPrimaryholder("d-none");
              SetThirdholder("d-block");
              setThirdHolderPan(kycDetails.thirdHolderPan);
            }
          });
        }
      }
    }
  };

  const second = async () => {
    const error = await checkSecondHolderError();
    console.log("error", error);
    if (
      error.error ||
      !secondHolderDob ||
      !not_politically_exposed ||
      !not_tax_payer_other_country
    ) {
      setSecondErrorState(error);
      if (!secondHolderDob) {
        setSecondHolderDobError("Mandotry Field");
      }
      if (!not_politically_exposed) {
        setNot_politically_exposedError("Mandotry Field");
      }
      if (!not_tax_payer_other_country) {
        setNot_tax_payer_other_countryError("Mandotry Field");
      }
    } else {
      setSecondErrorState({});
      setNot_tax_payer_other_countryError("");
      setNot_politically_exposedError("");
      setSecondHolderDobError("");

      let temObj = {};

      let dateWithoutDash = secondHolderDob.replace(/-/g, "");

      temObj = {
        primary_email: userDataLocalStoarge.email,
        joint_holder: "1",
        pan: kycDetails.secondPanHolder,
        not_tax_payer_other_country,
        not_politically_exposed,
        nri_state: secondNriState,
        dob: dateWithoutDash,
        holding_nature: kycDetails.holdingNature,
      };

      let reqObj = Object.assign(temObj, secondInitialState);
      console.log(reqObj);
      addHolder(reqObj, headers).then((res) => {
        if (!res.data) {
          notify("error", res.error.response.data.msg);
        } else {
          console.log(res.data);
          if (kycDetails.thirdPanHolder) {
            SetSecondholder("d-none");
            SetThirdholder("d-block");

            setThirdHolderPan(kycDetails.thirdPanHolder);
            localStorage.setItem("secondEmail", reqObj.email_joinholder);
            localStorage.setItem("secondMobile", reqObj.mobileNo);
          } else {
            SetThirdholder("d-none");
            SetSecondholder("d-none");
            SetBank("d-block");
            SetActive("active");
          }
          notify("success", res?.data?.msg);
        }
      });
    }
    // SetSecondholder("d-none");
    // SetThirdholder("d-block");
  };

  const thirdHolderSubmitMethod = async () => {
    console.log(not_tax_payer_other_country_third);
    const error = await checkThirdHolderError();

    console.log(
      "error,",
      not_tax_payer_other_country_third,
      not_politically_exposed_third
      // thirdHolderDob
    );

    if (
      error.error ||
      !not_tax_payer_other_country_third ||
      !not_politically_exposed_third ||
      !thirdHolderDob
    ) {
      setThirdErrorState(error);
      if (!not_tax_payer_other_country_third) {
        setNot_tax_payer_other_country_thirdError("Mandotry Field");
      }
      if (!not_politically_exposed_third) {
        setNot_politically_exposed_thirdError("Mandotry Field");
      }
      if (!thirdHolderDob) {
        setThirdHolderDobError("Mandotry Field");
      }
      // setThirdHolderDobError("Mandotry Field")
      // setNot_politically_exposed_thirdError("Mandotry Field")
      // setNot_tax_payer_other_country_thirdError("Mandotry Field")
    } else {
      setThirdErrorState({});

      console.log("wwww", error);
      let j_holder = "";

      if (kycDetails.secondPanHolder) {
        j_holder = "2";
      } else {
        j_holder = "1";
      }

      let temObj = {};
      let dateWithoutDash = thirdHolderDob.replace(/-/g, "");
      temObj = {
        primary_email: userDataLocalStoarge.email,
        joint_holder: j_holder,
        pan: kycDetails.thirdPanHolder,
        not_tax_payer_other_country: not_tax_payer_other_country_third,
        not_politically_exposed: not_politically_exposed_third,
        nri_state: thirdNriState,
        dob: dateWithoutDash,
        holding_nature: kycDetails.holdingNature,
      };

      let reqObj = Object.assign(temObj, thirdInitialState);
      console.log(reqObj);
      addHolder(reqObj, headers).then((res) => {
        if (!res.data) {
          notify("error", res.error.response.data.msg);
        } else {
          SetThirdholder("d-none");
          SetBank("d-block");
          SetActive("active");

          notify("success", res?.data?.msg);
        }
      });
    }
    // SetSecondholder("d-none");
    // SetThirdholder("d-block");
  };

  const bank = async () => {
    let hasUploadingErrors = false;

    if (!bankProof || !bankProofType) {
      hasUploadingErrors = true;
    }
    const errors = await checkBankError();
    if (errors.error || hasUploadingErrors) {
      setBankContentError(errors);
      if (kycDetails.taxStatus === "02" && kycDetails.holdingNature === "SI") {
        console.log("iiii");

        setUploadingErrors({
          bankProof: bankProof ? "" : "Mandatory field",
          bankProofType: bankProofType ? "" : "Mandatory field",
          birthProof: birthProof ? "" : "Mandatory field",
          birthProofType: birthProofType ? "" : "Mandatory field",
        });
      } else if (!birthProof || !birthProofType) {
        console.log("ee");
        setUploadingErrors({
          bankProof: bankProof ? "" : "Mandatory field",
          bankProofType: bankProofType ? "" : "Mandatory field",
        });
      }
    } else {
      setBankContentError({});

      setUploadingErrors({});
      let tempObj = {
        email: userDataLocalStoarge.email,
        tax_status: kycDetails.taxStatus,
        holding_nature: kycDetails.holdingNature,
      };

      let reqObj = Object.assign(tempObj, bankDetails);

      addBankDetail(reqObj, headers).then((res) => {
        if (!res.data) {
          notify("error", res.error.response.data.msg);
        } else {
          notify("success", res.data.msg);
          if (
            kycDetails.holdingNature == "SI" &&
            kycDetails.taxStatus == "02"
          ) {
            // setHideNimination("d-none")
            createIIN();
          } else {
            SetBank("d-none");
            SetNominee("d-block");
            SetActive1("active");
          }
        }
      });
    }
  };
  const nominee = async () => {
    let dateWithoutDash = nomini_dob.replace(/-/g, "");

    let nominis = {
      nomini_name,
      nomini_dob,
      alocation_percentage: Number(alocation_percentage),
      nomini_relation,
      nominiMinor,
    };
    const NominiError = await checkNominiError(nominis);
    console.log("NominiError", NominiError);

    if (NominiError.error) {
      setNominiError(NominiError);
    } else {
      setNominiError({});
      let nominis = {
        nomini_name: nomini_name.trim(),
        dob: dateWithoutDash,
        alocation_percentage: alocation_percentage,
        relation: nomini_relation,
        guardian_name: nomini_guardian_name.trim(),
        nominiMinor: nominiMinor,
        email: userDataLocalStoarge.email,
      };
      let token = localStorage.getItem("token");
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      addNomini(nominis, headers).then((res) => {
        if (!res.data) {
          notify("error", res.error.response.data.msg);
        } else {
          setNomini_guardian_name("");
          setAlocation_percentage("");
          setNomini_relation("");
          setNomini_name("");
          setNomini_dob("");
          setNominiMinor("");
          setNominiError({});
          notify("success", res.data.msg);
          nomineedata();

          console.log(res.data.msg);
        }
      });
    }
    // SetNominee("d-none");
    // SetSuccess("d-block");
    // SetActive2("active");
  };

  const forTesting = (e) => {
    console.log(e.target.value);
    setNot_tax_payer_other_country_third(Number(e.target.value) == 1 ? 0 : 1);
  };

  return (
    <>
      <div className="wrapper bg-light-red rdf">
        <div className=" px-5">
          {/* Page Heading */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="home">Home</a>
                <h2 onClick={BackToPrimary}>BackToPrimary</h2>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Required Details Form
              </li>
            </ol>
          </nav>

          <section className="pb-4">
            <div className="container-fluid pb-5">
              <div className="row justify-content-center">
                <div className="col-10">
                  <div className="shadow-custom p-5">
                    <form>
                      {/* progressbar */}
                      <ul
                        id="progressbar"
                        className="text-center mb-5 progressBar ps-0"
                      >
                        <li className="active" id="account">
                          <strong>Personal Details</strong>
                        </li>
                        <li id="personal" className={`${Active}`}>
                          <strong>Bank Details</strong>
                        </li>

                        <li
                          id="payment"
                          className={`${Active1 + " " + hideNimination}`}
                        >
                          <strong>Nomination</strong>
                        </li>
                        <li id="confirm" className={`${Active2}`}>
                          <strong>Success</strong>
                        </li>
                      </ul>
                      <fieldset className={`${Primaryholder}`}>
                        {/* ========Primary Holder's Details :====== */}
                        <div className="bg-light-red py-2 rounded" role="alert">
                          <span className="fw-bold ">
                            Primary Holder's Details :
                          </span>
                        </div>
                        <div className="row">
                          <div className="form-group col-4  mb-2">
                            <span className="has-float-label">
                              <input
                                className="form-control"
                                id="mail-id"
                                type="email"
                                name="email"
                                placeholder=" "
                                value={userData.email}
                              />
                              {/* {userData.email} */}
                              <label
                                for="mail-id"
                                className="text-label"
                                id="mail-id"
                              >
                                Email Id <span className="text-red">*</span>
                              </label>
                            </span>
                          </div>
                          <div className="form-group col-4">
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label"
                              >
                                Email Relation
                                <span className="text-red">*</span>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                name="emailRelation"
                                value={profileState.emailRelation}
                                onChange={profileChangeHandler}
                              >
                                {relationData &&
                                  relationData.map((data) => {
                                    return (
                                      <MenuItem value={data.family_code}>
                                        {data.family_desc}
                                      </MenuItem>
                                    );
                                  })}
                              </Select>
                            </FormControl>
                            <small className="text-red pull-left">
                              {errorContent.emailRelation}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control"
                                id="dob"
                                type="text"
                                name="dob"
                                placeholder="yyyy-mm-dd"
                                value={dob}
                                onChange={datePick}
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                              />
                              <label for="dob" className="text-label">
                                Date Of Birth
                                <span className="text-red">*</span>
                              </label>

                              <small className="text-red pull-left">
                                {dobError}
                              </small>
                            </span>
                          </div>
                          <div className="form-group col-4 mb-">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                id="mobileNo"
                                type="text"
                                name="mobileNo"
                                placeholder=" "
                                maxlength="10"
                                value={userData.mobile}
                              />
                              <label for="mobileNo" className="text-label">
                                Mobile No <span className="text-red">*</span>
                              </label>
                            </span>
                          </div>
                          <div className="form-group col-4">
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label2"
                              >
                                Moblile Relation
                                <span className="text-red">*</span>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label2"
                                id="demo-simple-select-filled2"
                                value={profileState.mobileRelation}
                                name="mobileRelation"
                                onChange={profileChangeHandler}
                              >
                                {relationData &&
                                  relationData.map((data) => {
                                    return (
                                      <MenuItem value={data.family_code}>
                                        {data.family_desc}
                                      </MenuItem>
                                    );
                                  })}
                              </Select>
                            </FormControl>
                            <small className="text-red pull-left">
                              {errorContent.mobileRelation}
                            </small>
                          </div>

                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                name="pob"
                                id="pob"
                                type="text"
                                placeholder=" "
                                value={profileState.pob}
                                onChange={profileChangeHandler}
                              />
                              <label for="pob" className="text-label">
                                Place Of Birth
                                <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {errorContent.pob}
                            </small>
                          </div>
                          <div className={`form-group col-4 ${checkMinerHide}`}>
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                name="guardian_name"
                                id="guardian_name"
                                type="text"
                                placeholder=" "
                                value={guardian_name}
                                // onKeyPress={(event) => {
                                //   if (!/[0-9]/.test(event.key)) {
                                //     event.preventDefault();
                                //   }
                                // }}
                                onChange={(e) =>
                                  setGuardian_name(e.target.value)
                                }
                              />
                              <label for="guardian_name" className="text-label">
                                Guardian Name
                                <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {guardian_nameError}
                            </small>
                          </div>
                          <div className={`form-group col-4 ${checkMinerHide}`}>
                            <span className="has-float-label">
                              <input
                                className="form-control"
                                id="guardian_dob"
                                type="text"
                                name="guardian_dob"
                                placeholder=" "
                                value={guardian_dob}
                                onChange={guardianDob}
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                              />
                              <label for="guardian_dob" className="text-label">
                                Guardian Date Of Birth
                                <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {guardian_dobError}
                            </small>
                          </div>
                          <div className={`form-group col-4 ${checkMinerHide}`}>
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label2"
                              >
                                Relationship With Minor
                                <span className="text-red">*</span>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label2"
                                id="demo-simple-select-filled2"
                                name="relationship_with_minor"
                                value={relationship_with_minor}
                                onChange={(e) =>
                                  setRelationship_with_minor(e.target.value)
                                }
                              >
                                <MenuItem value="NG">Father</MenuItem>
                                <MenuItem value="NG">Mother</MenuItem>
                                <MenuItem value="LG">Legal Guardian</MenuItem>
                              </Select>
                            </FormControl>
                            <small className="text-red pull-left">
                              {relationship_with_minorError}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label3"
                              >
                                Select Occupation
                                <span className="text-red">*</span>
                              </InputLabel>

                              <Select
                                labelId="demo-simple-select-filled-label3"
                                id="demo-simple-select-filled3"
                                name="occupation"
                                value={profileState.occupation}
                                onChange={profileChangeHandler}
                              >
                                {occupationData &&
                                  occupationData.map((data) => {
                                    return (
                                      <MenuItem value={data.occupation_code}>
                                        {data.occupation_desc}
                                      </MenuItem>
                                    );
                                  })}
                              </Select>
                            </FormControl>
                            <small className="text-red pull-left">
                              {errorContent.occupation}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label3"
                              >
                                Income Range
                                <span className="text-red">*</span>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label3"
                                id="demo-simple-select-filled3"
                                name="inc_range"
                                value={profileState.inc_range}
                                onChange={profileChangeHandler}
                              >
                                {incomeRangeData &&
                                  incomeRangeData.map((data) => {
                                    return (
                                      <MenuItem value={data.INCOME_CODE}>
                                        {data.APP_INCOME_DESC}
                                      </MenuItem>
                                    );
                                  })}
                              </Select>
                            </FormControl>
                            <small className="text-red pull-left">
                              {errorContent.inc_range}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <label className="text-label mb-1 p-radio">
                              Residential Status
                              <span className="text-red">*</span>
                            </label>
                            <br />
                            <div className="d-flex justify-content-center">
                              <label
                                for="indian"
                                className={`text-black ${hideIndianState}`}
                              >
                                <input
                                  className="me-1"
                                  id="indian"
                                  type="radio"
                                  name="resident"
                                  value="1"
                                  checked={nriState == 1}
                                  onChange={(e) => setNriState(e.target.value)}
                                />
                                Resident Indian
                              </label>
                              <label
                                for="nri"
                                className={`text-black ms-2 ${hideNriState}`}
                              >
                                <input
                                  className="me-1"
                                  value="0"
                                  checked={nriState == 0}
                                  onChange={(e) => setNriState(e.target.value)}
                                  id="nri"
                                  type="radio"
                                  name="resident"
                                />
                                NRI
                              </label>
                            </div>
                            <small className="text-red pull-left">
                              {errorContent.guardian_name}
                            </small>
                          </div>
                        </div>
                        {/* ========Address As Per KYC====== */}
                        <div className="row">
                          <div className="mt-3">
                            <div
                              className="bg-light-red py-2 rounded"
                              role="alert"
                            >
                              <span className="fw-bold ">
                                Address As Per KYC
                              </span>
                            </div>
                          </div>
                          <div className="form-group col-4 ">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                id="numberField"
                                name="pinCode"
                                maxLength="6"
                                type="text"
                                placeholder=" "
                                value={profileState.pinCode}
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                                onChange={profileChangeHandler}
                              />
                              <label for="numberField" className="text-label">
                                Enter PIN Code
                                <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {errorContent.pinCode}
                            </small>
                          </div>
                          <div className="form-group col-4 ">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                name="address"
                                id="address"
                                type="text"
                                placeholder=" "
                                value={profileState.address}
                                onChange={profileChangeHandler}
                              />
                              <label for="address" className="text-label">
                                Enter Address
                                <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {errorContent.address}
                            </small>
                          </div>
                          <div className="form-group col-4 ">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                name="landmark"
                                id="landmark"
                                type="text"
                                placeholder=" "
                                value={profileState.landmark}
                                onChange={profileChangeHandler}
                              />
                              <label for="landmark" className="text-label">
                                Enter Landmark
                                <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {errorContent.landmark}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                name="city"
                                id="city"
                                type="text"
                                placeholder=" "
                                value={profileState.city}
                                onChange={profileChangeHandler}
                              />
                              <label for="City" className="text-label">
                                City <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {errorContent.city}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                name="state"
                                id="state"
                                type="text"
                                placeholder=" "
                                value={profileState.state}
                                onChange={profileChangeHandler}
                              />
                              <label for="state" className="text-label">
                                State <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {errorContent.state}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                name="country"
                                id="country"
                                type="text"
                                placeholder=" "
                                value={profileState.country}
                                onChange={profileChangeHandler}
                              />
                              <label for="country" className="text-label">
                                Country <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {errorContent.country}
                            </small>
                          </div>
                        </div>
                        {/* ===========NRI=========== */}
                        <div
                          className={` row ${nriState == "0" ? "" : "d-none"}`}
                        >
                          <div className="mt-3">
                            <div
                              className="bg-light-red py-2 rounded"
                              role="alert"
                            >
                              <span className="fw-bold ">NRI Address</span>
                            </div>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                id="nri_pin"
                                name="nri_pin"
                                type="text"
                                placeholder=" "
                                maxlength="6"
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                                value={profileState.nri_pin}
                                onChange={profileChangeHandler}
                              />
                              <label for="nri_pin" className="text-label">
                                Enter ZIP Code
                                <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {errorContent.nri_pin}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                name="nri_address"
                                id="nri_address"
                                type="text"
                                placeholder=" "
                                value={profileState.nri_address}
                                onChange={profileChangeHandler}
                              />
                              <label for="nri_address" className="text-label">
                                Enter Address
                                <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {errorContent.nri_address}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                name="nri_landmark"
                                id="nri_landmark"
                                type="text"
                                placeholder=" "
                                value={profileState.nri_landmark}
                                onChange={profileChangeHandler}
                              />
                              <label for="nri_landmark" className="text-label">
                                Enter Landmark
                                <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {errorContent.nri_landmark}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                name="nri_city"
                                id="nri_city"
                                type="text"
                                placeholder=" "
                                value={profileState.nri_city}
                                onChange={profileChangeHandler}
                              />
                              <label for="nri_City" className="text-label">
                                City <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {errorContent.nri_city}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                name="nri_state"
                                id="nri_state"
                                type="text"
                                placeholder=" "
                                value={profileState.nri_state}
                                onChange={profileChangeHandler}
                              />
                              <label for="nri_state" className="text-label">
                                State <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {errorContent.nri_state}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                name="nri_country"
                                id="nri_country"
                                type="text"
                                placeholder=" "
                                value={profileState.nri_country}
                                onChange={profileChangeHandler}
                              />
                              <label for="nri_country" className="text-label">
                                Country <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {errorContent.nri_country}
                            </small>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 form-group text-start">
                            <input
                              id="tax_payer"
                              type="checkbox"
                              name="tax_payer"
                              value={tax_payer}
                              onChange={(e) => {
                                e.target.value == 0
                                  ? setTax_payer(1)
                                  : setTax_payer(0);
                              }}
                            />
                            <label for="tax_payer" className="text-black ps-3">
                              I am not Tax Payer of any other country except
                              india.
                            </label>
                            <small className="text-red ps-3">
                              {tax_payer == 0 ? tax_payerError : ""}
                            </small>
                          </div>

                          <div className="col-12 form-group text-start">
                            <input
                              id="not_politically"
                              type="checkbox"
                              name="not_politically"
                              value={not_politically}
                              onChange={(e) => {
                                e.target.value == 0
                                  ? setNot_politically(1)
                                  : setNot_politically(0);
                              }}
                            />

                            <label
                              for="not_politically"
                              className="text-black ps-3"
                            >
                              I here by declare that i am not a politically
                              exposed person.
                            </label>
                            <small className="text-red ps-3">
                              {not_politically == 0 ? not_politicallyError : ""}
                            </small>
                          </div>
                        </div>

                        <div className="mt-4 d-flex">
                          <div className="col-6 text-start">
                            <button
                              className="btn-custom"
                              onClick={() => {
                                history("/required-steps-front");
                              }}
                              type="button"
                            >
                              Back
                            </button>
                          </div>
                          <div className="col-6 text-end">
                            <button
                              className="btn-custom"
                              type="button"
                              onClick={primary}
                            >
                              Proceed
                            </button>
                          </div>
                        </div>
                      </fieldset>
                      {/* Second holder details */}
                      <fieldset className={`${Secondholder}`}>
                        <div className="bg-light-red py-2 rounded" role="alert">
                          <span className="fw-bold ">
                            Second Holder's Details :
                          </span>
                        </div>
                        <div className="row">
                          <div className="form-group col-4  mb-2">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                id="mail-id1"
                                type="holder_pan_1"
                                name="pan"
                                value={secondHolderPan}
                                placeholder=" "
                              />
                              <label for="mail-id1" className="text-label">
                                Pan Number <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {secondHolderPanError}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                id="mail-id2"
                                type="text"
                                name="name"
                                value={secondInitialState.name}
                                onChange={SecondHolderChangeler}
                                placeholder=" "
                              />
                              <label for="mail-id2" className="text-label">
                                Holder Name <span className="text-red">*</span>
                              </label>
                              <small className="text-red pull-left">
                                {secondErrorState.name}
                              </small>
                            </span>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                id="holder_phon_1"
                                type="text"
                                name="mobileNo"
                                placeholder=" "
                                maxLength="10"
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                                value={secondInitialState.mobileNo}
                                onChange={SecondHolderChangeler}
                              />
                              <label for="holder_phon_1" className="text-label">
                                Mobile Number
                                <span className="text-red">*</span>
                              </label>
                              <small className="text-red pull-left">
                                {secondErrorState.mobileNo}
                              </small>
                            </span>
                          </div>
                          <div className="form-group col-4">
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label2"
                              >
                                Moblile Relation
                                <span className="text-red">*</span>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label2"
                                id="demo-simple-select-filled2"
                                name="mobileRelation"
                                value={secondInitialState.mobileRelation}
                                onChange={SecondHolderChangeler}
                              >
                                {relationData &&
                                  relationData.map((data) => {
                                    return (
                                      <MenuItem value={data.family_code}>
                                        {data.family_desc}
                                      </MenuItem>
                                    );
                                  })}
                              </Select>
                            </FormControl>
                            <small className="text-red pull-left">
                              {secondErrorState.mobileRelation}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                id="holderEmail_1"
                                type="email"
                                name="email_joinholder"
                                placeholder=" "
                                value={secondInitialState.email_joinholder}
                                onChange={SecondHolderChangeler}
                              />
                              <label for="holderEmail_1" className="text-label">
                                Email Id <span className="text-red">*</span>
                              </label>
                              <small className="text-red pull-left">
                                {secondErrorState.email_joinholder}
                              </small>
                            </span>
                          </div>
                          <div className="form-group col-4">
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label"
                              >
                                Email Relation
                                <span className="text-red">*</span>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                name="emailRelation"
                                value={secondInitialState.emailRelation}
                                onChange={SecondHolderChangeler}
                              >
                                {relationData &&
                                  relationData.map((data) => {
                                    return (
                                      <MenuItem value={data.family_code}>
                                        {data.family_desc}
                                      </MenuItem>
                                    );
                                  })}
                              </Select>
                            </FormControl>
                            <small className="text-red pull-left">
                              {secondErrorState.emailRelation}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control"
                                id="dob"
                                type="text"
                                name="dob"
                                placeholder=" "
                                value={secondHolderDob}
                                onChange={changelerSecondHolderDob}
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                              />
                              <label for="email" className="text-label">
                                Date Of Birth
                                <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {secondHolderDobError}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                id="holderPob_1"
                                type="text"
                                placeholder=" "
                                name="place_of_birth"
                                value={secondInitialState.place_of_birth}
                                onChange={SecondHolderChangeler}
                              />
                              <label for="holderPob_1" className="text-label">
                                Place Of Birth
                                <span className="text-red">*</span>
                              </label>
                              <small className="text-red pull-left">
                                {secondErrorState.place_of_birth}
                              </small>
                            </span>
                          </div>
                          <div className="form-group col-4">
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label3"
                              >
                                Select Occupation
                                <span className="text-red">*</span>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label3"
                                id="demo-simple-select-filled3"
                                name="occupation"
                                value={secondInitialState.occupation}
                                onChange={SecondHolderChangeler}
                              >
                                {occupationData &&
                                  occupationData.map((data) => {
                                    return (
                                      <MenuItem value={data.occupation_code}>
                                        {data.occupation_desc}
                                      </MenuItem>
                                    );
                                  })}
                              </Select>
                            </FormControl>
                            <small className="text-red pull-left">
                              {secondErrorState.occupation}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label3"
                              >
                                Income Range
                                <span className="text-red">*</span>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label3"
                                id="demo-simple-select-filled3"
                                name="incomeRange"
                                value={secondInitialState.incomeRange}
                                onChange={SecondHolderChangeler}
                              >
                                {incomeRangeData &&
                                  incomeRangeData.map((data) => {
                                    return (
                                      <MenuItem value={data.INCOME_CODE}>
                                        {data.APP_INCOME_DESC}
                                      </MenuItem>
                                    );
                                  })}
                              </Select>
                            </FormControl>

                            <small className="text-red pull-left">
                              {secondErrorState.incomeRange}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <label className="text-label mb-1 p-radio">
                              Residential Status
                              <span className="text-red">*</span>
                            </label>
                            <br />
                            <div className="d-flex justify-content-center">
                              <label for="indians" className="text-black">
                                <input
                                  className="me-1"
                                  id="indians"
                                  type="radio"
                                  name="residentSecond"
                                  value="1"
                                  onChange={(e) =>
                                    setSecondNriState(e.target.value)
                                  }
                                />
                                Resident Indian
                              </label>
                              <label for="nris" className="text-black ms-2">
                                <input
                                  className="me-1"
                                  id="nris"
                                  type="radio"
                                  name="residentSecond"
                                  value="0"
                                  onChange={(e) =>
                                    setSecondNriState(e.target.value)
                                  }
                                />
                                NRI
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 form-group text-start">
                            <input
                              id="tax_payers"
                              type="checkbox"
                              name="not_tax_payer_other_country"
                              value={not_tax_payer_other_country}
                              onChange={(e) =>
                                setNot_tax_payer_other_country(
                                  Number(e.target.value) == 1 ? 0 : 1
                                )
                              }
                            />
                            <label for="tax_payers" className="text-black ps-3">
                              I am not Tax Payer of any other country except
                              india.
                            </label>
                          </div>

                          <small className="text-red pull-left">
                            {not_tax_payer_other_country == 0
                              ? not_tax_payer_other_countryError
                              : ""}
                          </small>
                          <div className="col-12 form-group text-start">
                            <input
                              id="not_politicallys"
                              type="checkbox"
                              name="not_politically_exposed"
                              value={not_politically_exposed}
                              onChange={(e) =>
                                setNot_politically_exposed(
                                  Number(e.target.value) == 1 ? 0 : 1
                                )
                              }
                            />
                            <label
                              for="not_politicallys"
                              className="text-black ps-3"
                            >
                              I here by declare that i am not a politically
                              exposed person.
                            </label>
                          </div>
                        </div>

                        <small className="text-red pull-left">
                          {not_politically_exposed == 0
                            ? not_politically_exposedError
                            : ""}
                        </small>
                        <div className="mt-4 d-flex">
                          <div className="col-6 text-start">
                            <button
                              className="btn-custom"
                              onClick={() => {
                                SetPrimaryholder("d-block");
                                SetSecondholder("d-none");
                              }}
                              type="button"
                            >
                              Back
                            </button>
                          </div>
                          <div className="col-6 text-end">
                            <button
                              className="btn-custom"
                              type="button"
                              onClick={second}
                            >
                              Proceed
                            </button>
                          </div>
                        </div>
                      </fieldset>
                      {/* third holder's details */}

                      <fieldset className={`${Thirdholder}`}>
                        <div className="bg-light-red py-2 rounded" role="alert">
                          <span className="fw-bold ">
                            Third Holder,s Details :
                          </span>
                        </div>
                        <div className="row">
                          <div className="form-group col-4  mb-2">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                id="mail-id3"
                                type="text"
                                name="pan"
                                value={thirdHolderPan}
                                placeholder=" "
                              />
                              <label for="mail-id3" className="text-label">
                                Pan Number <span className="text-red">*</span>
                              </label>
                            </span>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                id="mail-idname"
                                type="text"
                                name="name"
                                value={thirdInitialState.name}
                                onChange={thirdHolderChangeler}
                                placeholder=" "
                              />
                              <label for="mail-idname" className="text-label">
                                Holder Name <span className="text-red">*</span>
                              </label>
                              <small className="text-red pull-left">
                                {thirdErrorState.name}
                              </small>
                            </span>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                id="holder_phon_3"
                                type="holder_phon_1"
                                name="mobileNo"
                                placeholder=" "
                                maxLength="10"
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                                value={thirdInitialState.mobileNo}
                                onChange={thirdHolderChangeler}
                              />
                              <label for="holder_phon_3" className="text-label">
                                Mobile Number
                                <span className="text-red">*</span>
                              </label>
                              <small className="text-red pull-left">
                                {thirdErrorState.mobileNo}
                              </small>
                            </span>
                          </div>
                          <div className="form-group col-4">
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label2"
                              >
                                Moblile Relation
                                <span className="text-red">*</span>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label2"
                                id="demo-simple-select-filled2"
                                name="mobileRelation"
                                value={thirdInitialState.mobileRelation}
                                onChange={thirdHolderChangeler}
                              >
                                {relationData &&
                                  relationData.map((data) => {
                                    return (
                                      <MenuItem value={data.family_code}>
                                        {data.family_desc}
                                      </MenuItem>
                                    );
                                  })}
                              </Select>
                            </FormControl>
                            <small className="text-red pull-left">
                              {thirdErrorState.mobileRelation}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                id="holderEmail_3"
                                type="email"
                                name="email_joinholder"
                                placeholder=" "
                                value={thirdInitialState.email_joinholder}
                                onChange={thirdHolderChangeler}
                              />
                              <label for="holderEmail_3" className="text-label">
                                Email Id <span className="text-red">*</span>
                              </label>
                              <small className="text-red pull-left">
                                {thirdErrorState.email_joinholder}
                              </small>
                            </span>
                          </div>
                          <div className="form-group col-4">
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label"
                              >
                                Email Relation
                                <span className="text-red">*</span>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                name="emailRelation"
                                value={thirdInitialState.emailRelation}
                                onChange={thirdHolderChangeler}
                              >
                                {relationData &&
                                  relationData.map((data) => {
                                    return (
                                      <MenuItem value={data.family_code}>
                                        {data.family_desc}
                                      </MenuItem>
                                    );
                                  })}
                              </Select>
                            </FormControl>
                            <small className="text-red pull-left">
                              {thirdErrorState.emailRelation}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control"
                                id="dobthird"
                                type="text"
                                name="dob"
                                placeholder=" "
                                value={thirdHolderDob}
                                onChange={changelerThirdHolderDob}
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                              />
                              <label for="dobthird" className="text-label">
                                Date Of Birth
                                <span className="text-red">*</span>
                              </label>
                            </span>
                            <small className="text-red pull-left">
                              {thirdHolderDobError}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                id="holderPob_3"
                                type="text"
                                placeholder=" "
                                name="place_of_birth"
                                value={thirdInitialState.place_of_birth}
                                onChange={thirdHolderChangeler}
                              />
                              <label for="holderPob_3" className="text-label">
                                Place Of Birth
                                <span className="text-red">*</span>
                              </label>
                              <small className="text-red pull-left">
                                {thirdErrorState.place_of_birth}
                              </small>
                            </span>
                          </div>
                          <div className="form-group col-4">
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label3"
                              >
                                Select Occupation
                                <span className="text-red">*</span>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label3"
                                id="demo-simple-select-filled3"
                                name="occupation"
                                value={thirdInitialState.occupation}
                                onChange={thirdHolderChangeler}
                              >
                                {occupationData &&
                                  occupationData.map((data) => {
                                    return (
                                      <MenuItem value={data.occupation_code}>
                                        {data.occupation_desc}
                                      </MenuItem>
                                    );
                                  })}
                              </Select>
                            </FormControl>
                            <small className="text-red pull-left">
                              {thirdErrorState.occupation}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label3"
                              >
                                Income Range
                                <span className="text-red">*</span>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label3"
                                id="demo-simple-select-filled3"
                                name="incomeRange"
                                value={thirdInitialState.incomeRange}
                                onChange={thirdHolderChangeler}
                              >
                                {incomeRangeData &&
                                  incomeRangeData.map((data) => {
                                    return (
                                      <MenuItem value={data.INCOME_CODE}>
                                        {data.APP_INCOME_DESC}
                                      </MenuItem>
                                    );
                                  })}
                              </Select>
                            </FormControl>

                            <small className="text-red pull-left">
                              {thirdErrorState.incomeRange}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <label className="text-label mb-1 p-radio">
                              Residential Status
                              <span className="text-red">*</span>
                            </label>
                            <br />
                            <div className="d-flex justify-content-center">
                              <label for="indianss" className="text-black">
                                <input
                                  className="me-1"
                                  id="indianss"
                                  type="radio"
                                  name="residentthird"
                                  value="1"
                                  onChange={(e) =>
                                    setThirdNriState(e.target.value)
                                  }
                                />
                                Resident Indian
                              </label>
                              <label for="s" className="text-black ms-2">
                                <input
                                  className="me-1"
                                  id="s"
                                  type="radio"
                                  name="residentthird"
                                  value="0"
                                  onChange={(e) =>
                                    setThirdNriState(e.target.value)
                                  }
                                />
                                NRI
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 form-group text-start">
                            <input
                              id="tax_payer_third"
                              type="checkbox"
                              name="not_tax_payer_other_country_third"
                              value={not_tax_payer_other_country_third}
                              onChange={forTesting}
                            />
                            <label
                              for="tax_payer_third"
                              className="text-black ps-3"
                            >
                              I am not Tax Payer of any other country except
                              india.
                            </label>
                          </div>

                          <small className="text-red pull-left">
                            {not_tax_payer_other_country_third == 0
                              ? not_tax_payer_other_country_thirdError
                              : ""}
                          </small>
                          <div className="col-12 form-group text-start">
                            <input
                              id="not_politicallythird"
                              type="checkbox"
                              name="not_politically_exposed_third"
                              value={not_politically_exposed_third}
                              onChange={(e) =>
                                setNot_politically_exposed_third(
                                  Number(e.target.value) == 1 ? 0 : 1
                                )
                              }
                            />
                            <label
                              for="not_politicallythird"
                              className="text-black ps-3"
                            >
                              I here by declare that i am not a politically
                              exposed person.
                            </label>
                          </div>
                        </div>

                        <small className="text-red pull-left">
                          {not_politically_exposed_third == 0
                            ? not_politically_exposed_thirdError
                            : ""}
                        </small>
                        <div className="mt-4 d-flex">
                          <div className="col-6 text-start">
                            <button
                              className="btn-custom"
                              onClick={BackToSecondHolder}
                              type="button"
                            >
                              Back
                            </button>
                          </div>
                          <div className="col-6 text-end">
                            <button
                              className="btn-custom"
                              type="button"
                              onClick={thirdHolderSubmitMethod}
                            >
                              Proceed
                            </button>
                          </div>
                        </div>
                      </fieldset>

                      {/* Bank Details */}
                      <fieldset className={`${Bank}`}>
                        <div className="bg-light-red py-2 rounded" role="alert">
                          <span className="fw-bold ">
                            Bank Details of Primary Holder :
                          </span>
                        </div>
                        <div className="row">
                          <div className="form-group col-4  mb-2">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                id="acc-num"
                                type={accountType}
                                name="bankAccount"
                                placeholder=" "
                                minLength="10"
                                maxLength="16"
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                                value={bankDetails.bankAccount}
                                onFocus={() => setAccountType("text")}
                                onChange={BankChangeler}
                              />
                              <label for="acc-num" className="text-label">
                                Account Number
                                <span className="text-red">*</span>
                              </label>
                              <small className="text-red pull-left">
                                {bankContentError.bankAccount}
                              </small>
                            </span>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                id="cnf-acc-num"
                                type="text"
                                name="confirmBankAccount"
                                placeholder=" "
                                maxLength="16"
                                minLength="16"
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                                value={bankDetails.confirmBankAccount}
                                onChange={BankChangeler}
                                onFocus={() => setAccountType("password")}
                              />
                              <label for="cnf-acc-num" className="text-label">
                                Confirm Account Number
                                <span className="text-red">*</span>
                              </label>
                              <small className="text-red pull-left">
                                {bankContentError.confirmBankAccount}
                              </small>
                            </span>
                          </div>
                          {indianBankTypeHide ? (
                            <div className="form-group col-4">
                              <FormControl
                                variant="filled"
                                sx={{ m: 1, minWidth: 220 }}
                              >
                                <InputLabel
                                  className="text-label"
                                  id="demo-simple-select-filled-label"
                                >
                                  Choose Bank Account Type
                                  <span className="text-red">*</span>
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-filled-label"
                                  id="demo-simple-select-filled"
                                  name="accountType"
                                  value={bankDetails.accountType}
                                  onChange={BankChangeler}
                                >
                                  {" "}
                                  <MenuItem value="NRE">
                                    Non-Resident External Account
                                  </MenuItem>
                                </Select>
                              </FormControl>
                              <small className="text-red pull-left">
                                {bankContentError.accountType}
                              </small>
                            </div>
                          ) : (
                            <div className="form-group col-4">
                              <FormControl
                                variant="filled"
                                sx={{ m: 1, minWidth: 220 }}
                              >
                                <InputLabel
                                  className="text-label"
                                  id="demo-simple-select-filled-label"
                                >
                                  Choose Bank Account Type
                                  <span className="text-red">*</span>
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-filled-label"
                                  id="demo-simple-select-filled"
                                  name="accountType"
                                  value={bankDetails.accountType}
                                  onChange={BankChangeler}
                                >
                                  {" "}
                                  <MenuItem value="NRE">
                                    Non-Resident External Account
                                  </MenuItem>
                                  <MenuItem value="CC">Cash/Credit</MenuItem>
                                  <MenuItem value="CA">
                                    Current Account
                                  </MenuItem>
                                  <MenuItem value="FCNR">
                                    Foreign Currency Non-Resident
                                  </MenuItem>
                                  <MenuItem value="NRO">
                                    Non-Resident Ordinary
                                  </MenuItem>
                                  <MenuItem value="OD">
                                    Overdraft Account
                                  </MenuItem>
                                  <MenuItem value="PSB">
                                    Post Office Saving Account
                                  </MenuItem>
                                  <MenuItem value="SB">
                                    Savings Account
                                  </MenuItem>
                                </Select>
                              </FormControl>
                              <small className="text-red pull-left">
                                {bankContentError.accountType}
                              </small>
                            </div>
                          )}
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                name="IFSCCode"
                                id="ifsc"
                                type="text"
                                placeholder=" "
                                maxLength="11"
                                minLength="11"
                                value={bankDetails.IFSCCode}
                                onChange={BankChangeler}
                              />
                              <label for="ifsc" className="text-label">
                                IFSC <span className="text-red">*</span>
                              </label>
                              <small className="text-red pull-left">
                                {bankContentError.IFSCCode}
                              </small>
                            </span>
                          </div>
                          <div className="form-group col-4">
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label"
                              >
                                Choose Bank Name
                                <span className="text-red">*</span>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                name="bank_code"
                                value={bankDetails.bank_code}
                                onChange={BankChangeler}
                              >
                                {bankListData &&
                                  bankListData.map((data) => {
                                    return (
                                      <MenuItem value={data.BANK_CODE}>
                                        <em>{data.BANK_NAME}</em>
                                      </MenuItem>
                                    );
                                  })}
                              </Select>
                            </FormControl>
                            <small className="text-red pull-left">
                              {bankContentError.SelectedBank}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control "
                                name="Branch"
                                id="branch"
                                type="text"
                                placeholder=" "
                                value={bankDetails.Branch}
                                onChange={BankChangeler}
                              />
                              <label for="branch" className="text-label">
                                Branch <span className="text-red">*</span>
                              </label>
                              <small className="text-red pull-left">
                                {bankContentError.Branch}
                              </small>
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-4">
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label"
                              >
                                Upload Bank Proof
                                <span className="text-red">*</span>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                name="BankProofType"
                                onChange={(e) =>
                                  setBankProofType(e.target.value)
                                }
                                value={bankProofType}
                              >
                                <MenuItem value="CH">Cancelled Cheque</MenuItem>
                                <MenuItem value="CH">Passbook</MenuItem>
                                <MenuItem value="CH">Bank Statement</MenuItem>
                              </Select>
                            </FormControl>
                            <small className="text-red pull-left">
                              {uploadingErrors.bankProofType}
                            </small>
                            <br />
                            <br />
                            <input
                              type="file"
                              id="filePhoto"
                              className="form-control"
                              name="image"
                              accept=".pdf"
                              onChange={(e) => {
                                setBankProof(e.target.files[0]);
                              }}
                            />

                            <small>Allowed File Type: </small>
                            <small class="fw-bold">PDF</small>
                            <small className="text-red pull-left">
                              {uploadingErrors.bankProof}
                            </small>
                          </div>

                          <br />
                        </div>
                        <div className={`row ${hideUploads}`}>
                          <div className="form-group col-4">
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label"
                              >
                                Upload Birth Proof
                                <span className="text-red">*</span>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                onChange={(e) =>
                                  setBirthProofType(e.target.value)
                                }
                                value={birthProofType}
                              >
                                <MenuItem value="AA">Aadhar Card</MenuItem>
                                <MenuItem value="DL">Driving License</MenuItem>
                                <MenuItem value="PA">Passport</MenuItem>
                              </Select>
                            </FormControl>
                            <small className="text-red pull-left">
                              {uploadingErrors.birthProofType}
                            </small>
                            <br />
                            <br />
                            <input
                              type="file"
                              id="brith_filePhoto"
                              accept=".pdf"
                              class="form-control required borrowerImageFile"
                              name="brith_image"
                              onChange={(e) => setBirthProof(e.target.files[0])}
                            />
                            <small>Allowed File Type: </small>
                            <small class="fw-bold"> PDF</small>
                            <small className="text-red pull-left">
                              {uploadingErrors.birthProof}
                            </small>
                          </div>
                        </div>

                        <div className="mt-4 d-flex">
                          <div className="col-6 text-start">
                            <button
                              className="btn-custom"
                              onClick={toBack}
                              type="button"
                            >
                              Back
                            </button>
                          </div>
                          <div className="col-6 text-end">
                            <button
                              className="btn-custom"
                              type="button"
                              onClick={bank}
                            >
                              Proceed
                            </button>
                          </div>
                        </div>
                      </fieldset>
                      {/* Nominee Details */}
                      <fieldset className={`${Nominee}`}>
                        <div className="bg-light-red py-2 rounded" role="alert">
                          <span className="fw-bold ">Nominee :</span>
                        </div>
                        <div className="row">
                          <div className="form-group col-4  mb-2">
                            <span className="has-float-label mb-2">
                              <input
                                className="form-control "
                                id="n_name"
                                name="nomini_name"
                                type="text"
                                placeholder=" "
                                value={nomini_name}
                                onChange={(e) => setNomini_name(e.target.value)}
                              />
                              <label for="n_name" className="text-label">
                                Name<span className="text-red">*</span>
                              </label>
                              <small className="text-red pull-left">
                                {nominiError.nomini_name}
                              </small>
                            </span>
                          </div>

                          <div className="form-group col-4">
                            <span className="has-float-label">
                              <input
                                className="form-control"
                                id="dob"
                                type="text"
                                name="nominiDob"
                                placeholder=" "
                                value={nomini_dob}
                                onChange={nominiDOb}
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                              />
                              <label for="email" className="text-label">
                                Date Of Birth
                                <span className="text-red">*</span>
                              </label>
                              <small className="text-red pull-left">
                                {nominiError.nomini_dob}
                              </small>
                            </span>
                          </div>
                          <div className="form-group col-4">
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 220 }}
                            >
                              <InputLabel
                                className="text-label"
                                id="demo-simple-select-filled-label"
                              >
                                Relation <span className="text-red">*</span>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={nomini_relation}
                                onChange={(e) =>
                                  setNomini_relation(e.target.value)
                                }
                              >
                                <MenuItem value="Father">Father</MenuItem>
                                <MenuItem value="Mother">Mother</MenuItem>
                                <MenuItem value="Wife">Wife</MenuItem>
                                <MenuItem value="Husband">Husband</MenuItem>
                                <MenuItem value="Son">Son</MenuItem>
                                <MenuItem value="Daughter">Daughter</MenuItem>
                                <MenuItem value="Father-in-law">
                                  Father-in-law
                                </MenuItem>
                                <MenuItem value="Mother-in-law">
                                  Mother-in-law
                                </MenuItem>
                                <MenuItem value="Son-in-law">
                                  Son-in-law
                                </MenuItem>
                                <MenuItem value="Daughter-in-law">
                                  Daughter-in-law
                                </MenuItem>
                                <MenuItem value="Aunt">Aunt</MenuItem>
                                <MenuItem value="Uncle">Uncle</MenuItem>
                                <MenuItem value="Niece">Niece</MenuItem>
                                <MenuItem value="Nephew">Nephew</MenuItem>
                                <MenuItem value="Brother">Brother</MenuItem>
                                <MenuItem value="Sister">Sister</MenuItem>
                                <MenuItem value="Grand Father">
                                  Grand Father
                                </MenuItem>
                                <MenuItem value=" Grand Mother">
                                  Grand Mother
                                </MenuItem>
                                <MenuItem value="Others">Others</MenuItem>
                              </Select>
                            </FormControl>
                            <small className="text-red pull-left">
                              {nominiError.nomini_relation}
                            </small>
                          </div>
                          <div className="form-group col-4">
                            <span className="has-float-label mb-2">
                              <input
                                className="form-control "
                                name="alocation_percentage"
                                id="n_perc"
                                type="text"
                                placeholder=" "
                                value={alocation_percentage}
                                onChange={(e) => {
                                  if (
                                    e.target.value >= 0 &&
                                    e.target.value <= 100
                                  ) {
                                    setAlocation_percentage(e.target.value);
                                  } else {
                                    setAlocation_percentage(100);
                                  }
                                  console.log(
                                    "Alocation_percentage",
                                    typeof alocation_percentage
                                  );
                                }}
                              />
                              <label for="n_perc" className="text-label">
                                Allocation Percentage
                                <span className="text-red">*</span>
                              </label>
                              <small className="text-red pull-left">
                                {nominiError.alocation_percentage}
                              </small>
                            </span>
                          </div>
                          <div
                            className={`form-group col-4 ${hideNominiGuardian}`}
                          >
                            <span className="has-float-label mb-2">
                              <input
                                className="form-control "
                                name="nomini_guardian_name"
                                id="n_percd"
                                type="text"
                                placeholder=" "
                                value={nomini_guardian_name}
                                onChange={(e) =>
                                  setNomini_guardian_name(e.target.value)
                                }
                              />
                              <label for="n_percd" className="text-label">
                                Guardian Name
                                <span className="text-red">*</span>
                              </label>
                            </span>
                          </div>
                          <div className="form-group col-4">
                            {checkUpdateState ? (
                              <button
                                className="btn btn-danger "
                                type="button"
                                onClick={updateNominibyId}
                              >
                                {" "}
                                Update
                              </button>
                            ) : (
                              <button
                                className="btn btn-danger"
                                type="button"
                                onClick={nominee}
                              >
                                {" "}
                                Add +
                              </button>
                            )}
                          </div>
                        </div>

                        <br></br>
                        <div className="col-md-12 pb-2 table-responsive">
                          <table class="table custom text-center">
                            <thead>
                              <tr>
                                <th className="text-red">Name</th>
                                <th className="text-red">Date Of Birth</th>
                                <th className="text-red">Relation</th>
                                <th className="text-red">
                                  Percentage of Allocation(%)
                                </th>
                                <th className="text-red">Guardian Name</th>
                                <th className="text-red">Remove/Edit</th>
                              </tr>
                            </thead>
                            <tbody>
                              {nominiData &&
                                nominiData.map((data) => {
                                  return (
                                    <tr>
                                      <td>{data.nomini_name}</td>
                                      <td>
                                        {data.dob.substring(0, 4) +
                                          "-" +
                                          data.dob.substring(4, 6) +
                                          "-" +
                                          data.dob.substring(6, 8)}
                                      </td>
                                      <td>{data.relation}</td>
                                      <td>{data.alocation_percentage}</td>
                                      <td>
                                        {data.guardian_name
                                          ? data.guardian_name
                                          : "Not Minor"}
                                      </td>
                                      <td>
                                        <button
                                          type="button"
                                          className=" border-0 bg-white"
                                        >
                                          <Cart_Delete
                                            id={data._id}
                                            deleteData={deleteData}
                                          />
                                        </button>
                                        <button
                                          type="button"
                                          className="ps-3 border-0 bg-white"
                                          onClick={() =>
                                            getUpdatedData(
                                              data._id,
                                              data.nomini_name,
                                              data.dob,
                                              data.relation,
                                              data.alocation_percentage,
                                              data.guardian_name,
                                              data.nominiMinor,
                                              true
                                            )
                                          }
                                        >
                                          <FaEdit className="text-red fs-19" />
                                        </button>
                                      </td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>
                        </div>

                        <div className="mt-4 d-flex">
                          <div className="col-6 text-start">
                            <button
                              className="btn-custom"
                              onClick={toBackBank}
                              type="button"
                            >
                              Back
                            </button>
                          </div>
                          <div className="col-6 text-end">
                            <button
                              className="btn-custom"
                              type="button"
                              onClick={createIIN}
                            >
                              Proceed
                            </button>
                          </div>
                        </div>
                      </fieldset>
                      {/* Success */}
                      <fieldset className={`${Success}`}>
                        <div className="finish">
                          <div className="row justify-content-center">
                            <div className="col-3">
                              <img src={happy} className="fit-image" />
                            </div>
                          </div>
                          <h2 className="text-successc text-center">
                            Congratulations!!! <br />
                            Your application has been submitted successfully.
                          </h2>
                          <div
                            className="py-3 text-center text-black"
                            role="alert"
                          >
                            <h4></h4>
                            <h6>
                              Now, to activate your IIN, you need to approve IIN
                              & FATCA authorization link for all the holder(s)
                              sent on respective mail id(s)
                            </h6>
                            <br></br>
                            <h6>
                              The application will get approved within 2 working
                              days.
                            </h6>
                          </div>
                        </div>
                        <div className={`fail ${failContent}`}>
                          <div className="row justify-content-center">
                            <div className="col-3">
                              <img src={fail} className="fit-image" />
                            </div>
                          </div>

                          <div
                            className="py-3 text-center text-black"
                            role="alert"
                          >
                            <h4></h4>
                            <h4 className="text-red font-weight-500">
                              Something went wrong, your application not
                              submitted.
                            </h4>
                            <br></br>
                            <h6>Please try again after some time</h6>
                          </div>
                        </div>

                        <div className="mt-4 d-flex">
                          <div className="col-6 text-start">
                            <button
                              className="btn-custom"
                              onClick={() => history(-1)}
                              type="button"
                            >
                              Back
                            </button>
                          </div>
                          <div className="col-6 text-end">
                            <button className="btn-custom">Proceed</button>
                          </div>
                        </div>
                      </fieldset>
                    </form>
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
export default RequiredDetailsFormFront;
