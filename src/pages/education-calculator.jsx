import React, { useState } from "react";
import minus from "../assets/images/calculator/minus.png";
import plus from "../assets/images/calculator/add.png";
import CalculatorHeader from "../components/calculator-header";
import Button from "react-bootstrap/Button";
import Loader from "./Loader";

import {
  incThirty,
  decThirty,
  incTwentyFive,
  decTwentyFive,
  incTenCrore,
  decTenLakh,
  incTwenty,
  decTwenty,
  incCrore,
  incPointFiveFifty,
  decPointFive,
  incFifty,
} from "./helpers/validators";
import axios from "axios";
import { baseUrl } from "../request";
import { notify } from "./toastCreater";


const EducationCalculator = () => {
  const [childAgeTOday, setChildAgeTOday] = useState(10);
  const [startCollegeAge, setStartCollegeAge] = useState(18);
  const [durationOfEducation, setDurationOfEducation] = useState(3);
  const [approxCurrentCost, setApproxCurrentCost] = useState(500000);
  const [expectedRateReturn, setExpectedRateReturn] = useState(12);
  const [expecetdInflation, setExpecetdInflation] = useState(6);
  const [totalAmtRequired, setTotalAmtRequired] = useState("21,43,644");
  const [lumpsum, setLumpsum] = useState("9,04,671");
  const [SipAmount, setSipAmount] = useState("13,781");
  const [loader, setLoader] = useState("none");


  const childCalculater = async (e) => {
    if(childAgeTOday && startCollegeAge&& durationOfEducation && approxCurrentCost && expectedRateReturn &&  expecetdInflation){
      setLoader("block");
      const data = {
        childAge: childAgeTOday,
        collegeAtAge: startCollegeAge,
        educationTime: durationOfEducation,
        currentCost: approxCurrentCost,
        expReturnRate: expectedRateReturn,
        inflationRate: expecetdInflation,
      };
  
      axios.post(baseUrl + "/calculators/education", data).then((res) => {
        setSipAmount(res.data.sipAmount);
        setLumpsum(res.data.lumpsumAmount);
        setTotalAmtRequired(res.data.corpusAmount);
  
        window.scrollTo(500,500);
        setLoader("none");
  
      });
    }else{
      notify("warn","All Fields Required")
    }
   
  };

  return (
    <>
      <div className="wrapper">
        <div className=" px-lg-5 px-2">
          {/* Page Heading */}

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-3">
              <li className="breadcrumb-item">
                <a href="home">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Calculators
              </li>
            </ol>
          </nav>
          <Loader loader={loader} />

          <div className="container-fluid  px-lg-5 pb-5 calculator">
            <div className="row">
              <div className="col-md-12">
                {/* =============Calculators Nav Start================ */}
                <div class="container-calculator pb-5">
                  <CalculatorHeader />
                  {/* =============Calculators Nav End================ */}
                  <div class=" mt-3 ">
                    <div class="" role="tabpanel">
                      <section>
                        <div className="results pt-5">
                          <div className="px-lg-5">
                            <div className="shadowc br-50 px-lg-4 px-sm-3 pb-5">
                              <section className="pt-5 pb-5 px-3">
                                <div className="row" id="marriage-1">
                                  {/*first*/}
                                  <div className="col-md-4 text-center">
                                    <label
                                      for="m-saving"
                                      className="text-label fw-500 py-2 fs-12"
                                    >
                                      Child's age today (Years)
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img
                                        src={minus}
                                        alt=""
                                        className="img-fluid max-27"
                                        onClick={() =>
                                          decTwentyFive(
                                            childAgeTOday,
                                            setChildAgeTOday
                                          )
                                        }
                                      ></img>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="m-saving"
                                        placeholder="200"
                                        value={childAgeTOday}
                                        onChange={(e) => {
                                          if (
                                            e.target.value >= 0 &&
                                            e.target.value <= 25
                                          ) {
                                            if (e.target.value.includes(".")) {
                                              setChildAgeTOday(
                                                Math.round(
                                                  parseInt(e.target.value)
                                                )
                                              );
                                              console.log(
                                                "with float ",
                                                parseInt(e.target.value)
                                              );
                                            } else {
                                              setChildAgeTOday(e.target.value);
                                            }
                                          } else if (e.target.value > 25) {
                                            setChildAgeTOday(25);
                                          }
                                        }}
                                      />
                                      <img
                                        src={plus}
                                        alt=""
                                        className="img-fluid max-27"
                                        onClick={() =>
                                          incTwentyFive(
                                            childAgeTOday,
                                            setChildAgeTOday
                                          )
                                        }
                                      ></img>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <label
                                      for="year"
                                      className="text-label fw-500 py-2 fs-12"
                                    >
                                      Start college at age (Years)
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img
                                        src={minus}
                                        alt=""
                                        className="img-fluid max-27"
                                        onClick={() =>
                                          decThirty(
                                            startCollegeAge,
                                            setStartCollegeAge
                                          )
                                        }
                                      ></img>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="year"
                                        placeholder="5"
                                        value={startCollegeAge}
                                        onChange={(e) => {
                                          if (
                                            e.target.value >= 0 &&
                                            e.target.value <= 30
                                          ) {
                                            if (e.target.value.includes(".")) {
                                              setStartCollegeAge(
                                                Math.round(
                                                  parseInt(e.target.value)
                                                )
                                              );
                                              console.log(
                                                "with float ",
                                                parseInt(e.target.value)
                                              );
                                            } else {
                                              setStartCollegeAge(
                                                e.target.value
                                              );
                                            }
                                          } else if (e.target.value > 30) {
                                            setStartCollegeAge(30);
                                          }
                                        }}
                                      />
                                      <img
                                        src={plus}
                                        alt=""
                                        className="img-fluid max-27"
                                        onClick={() =>
                                          incThirty(
                                            startCollegeAge,
                                            setStartCollegeAge
                                          )
                                        }
                                      ></img>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <label
                                      for="return"
                                      className="text-label fw-500 py-2 fs-12"
                                    >
                                      Duration of education(Years)
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img
                                        src={minus}
                                        alt=""
                                        className="img-fluid max-27"
                                        onClick={() =>
                                          decTwenty(
                                            durationOfEducation,
                                            setDurationOfEducation
                                          )
                                        }
                                      ></img>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="return"
                                        placeholder="7"
                                        value={durationOfEducation}
                                        onChange={(e) => {
                                          if (
                                            e.target.value >= 0 &&
                                            e.target.value <= 20
                                          ) {
                                            if (e.target.value.includes(".")) {
                                              setDurationOfEducation(
                                                Math.round(
                                                  parseInt(e.target.value)
                                                )
                                              );
                                              console.log(
                                                "with float ",
                                                parseInt(e.target.value)
                                              );
                                            } else {
                                              setDurationOfEducation(
                                                e.target.value
                                              );
                                            }
                                          } else if (e.target.value > 20) {
                                            setDurationOfEducation(20);
                                          }
                                        }}
                                      />
                                      <img
                                        src={plus}
                                        alt=""
                                        className="img-fluid max-27"
                                        onClick={() =>
                                          incTwenty(
                                            durationOfEducation,
                                            setDurationOfEducation
                                          )
                                        }
                                      ></img>
                                    </div>
                                  </div>
                                </div>
                                {/*second*/}
                                <div className="row">
                                  <div className="col-md-4 text-center">
                                    <label
                                      for="m-saving"
                                      className="text-label fw-500 py-2 fs-12"
                                    >
                                      Approx current cost per year
                                      <span className="text-roboto">(₹)</span>
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img
                                        src={minus}
                                        alt=""
                                        className="img-fluid max-27"
                                        onClick={() =>
                                          decTenLakh(
                                            approxCurrentCost,
                                            setApproxCurrentCost
                                          )
                                        }
                                      ></img>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="m-saving"
                                        placeholder="200"
                                        value={approxCurrentCost}
                                        onChange={(e) => {
                                          if (
                                            e.target.value >= 0 &&
                                            e.target.value <= 100000000
                                          ) {
                                            if (e.target.value.includes(".")) {
                                              setApproxCurrentCost(
                                                Math.round(
                                                  parseInt(e.target.value)
                                                )
                                              );
                                              console.log(
                                                "with float ",
                                                parseInt(e.target.value)
                                              );
                                            } else {
                                              setApproxCurrentCost(
                                                e.target.value
                                              );
                                            }
                                          } else if (
                                            e.target.value > 100000000
                                          ) {
                                            setApproxCurrentCost(100000000);
                                          }
                                        }}
                                      />
                                      <img
                                        src={plus}
                                        alt=""
                                        className="img-fluid max-27"
                                        onClick={() =>
                                          incTenCrore(
                                            approxCurrentCost,
                                            setApproxCurrentCost
                                          )
                                        }
                                      ></img>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <label
                                      for="year"
                                      className="text-label fw-500 py-2 fs-12"
                                    >
                                      Expected rate of return(%)
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img
                                        src={minus}
                                        alt=""
                                        className="img-fluid max-27"
                                        onClick={() =>
                                          decPointFive(
                                            expectedRateReturn,
                                            setExpectedRateReturn
                                          )
                                        }
                                      ></img>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="year"
                                        placeholder="5"
                                        value={expectedRateReturn}
                                        onChange={(e) => {
                                          if (
                                            e.target.value >= 0 &&
                                            e.target.value <= 50
                                          ) {
                                            if (e.target.value.includes(".")) {
                                              let a = parseFloat(
                                                e.target.value
                                              );
                                              setExpectedRateReturn(
                                                parseFloat(a.toFixed(2))
                                              );
                                              console.log(
                                                "with float ",
                                                parseFloat(e.target.value)
                                              );
                                            } else {
                                              console.log(
                                                "with int ",
                                                parseInt(e.target.value)
                                              );
                                              let a = parseInt(e.target.value);
                                              setExpectedRateReturn(
                                                parseInt(a)
                                              );
                                            }
                                          } else {
                                            setExpectedRateReturn(50);
                                          }
                                        }}
                                      />
                                      <img
                                        src={plus}
                                        alt=""
                                        className="img-fluid max-27"
                                        onClick={() =>
                                          incPointFiveFifty(
                                            expectedRateReturn,
                                            setExpectedRateReturn
                                          )
                                        }
                                      ></img>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <label
                                      for="return"
                                      className="text-label fw-500 py-2 fs-12"
                                    >
                                      Expected inflation rate (% p.a)
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img
                                        src={minus}
                                        alt=""
                                        className="img-fluid max-27"
                                        onClick={() =>
                                          decPointFive(
                                            expecetdInflation,
                                            setExpecetdInflation
                                          )
                                        }
                                      ></img>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="return"
                                        placeholder="7"
                                        value={expecetdInflation}
                                        onChange={(e) => {
                                          if (
                                            e.target.value >= 0 &&
                                            e.target.value <= 50
                                          ) {
                                            if (e.target.value.includes(".")) {
                                              let a = parseFloat(
                                                e.target.value
                                              );
                                              setExpecetdInflation(
                                                parseFloat(a.toFixed(2))
                                              );
                                              console.log(
                                                "with float ",
                                                parseFloat(e.target.value)
                                              );
                                            } else {
                                              console.log(
                                                "with int ",
                                                parseInt(e.target.value)
                                              );
                                              let a = parseInt(e.target.value);
                                              setExpecetdInflation(parseInt(a));
                                            }
                                          } else {
                                            setExpecetdInflation(50);
                                          }
                                        }}
                                      />
                                      <img
                                        src={plus}
                                        alt=""
                                        className="img-fluid max-27"
                                        onClick={() =>
                                          incPointFiveFifty(
                                            expecetdInflation,
                                            setExpecetdInflation
                                          )
                                        }
                                      ></img>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12 text-lg-end text-center mt-3 ">
                                  <button
                                    className="btn-custom"
                                    onClick={childCalculater}
                                  >
                                    Calculate
                                  </button>
                                </div>
                              </section>
                              <div className="row shadowc br-50 mx-lg-3 p-lg-5">
                                <div className="col-md-12 px-lg-5 ">
                                  <div className="col-md-12 result-title text-center py-3">
                                    <h3>Result</h3>
                                  </div>
                                  <div className="result-content col-md-12 text-center">
                                    <div className="text-label fw-500 py-2">
                                      Corpus required at start of college{" "}
                                      <span className="text-roboto">(₹)</span>
                                    </div>
                                    <div className="inputf transcard bg-light-red py-2">
                                      {" "}
                                      {totalAmtRequired}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12 px-lg-5 pt-4 pb-3">
                                  <div className="col-md-12 result-title text-center py-3">
                                    <h3>Plan of action required</h3>
                                  </div>
                                  <div className="row result-content text-center">
                                    <div className="col-md-5">
                                      <div className="text-label fw-500 py-2">
                                        One time investment required
                                        <span className="text-roboto">(₹)</span>
                                      </div>
                                      <div className="inputf transcard bg-light-red py-2">
                                        {" "}
                                        {lumpsum}
                                      </div>
                                    </div>
                                    <div className="col-md-2">
                                      <div className="text-label fw-500 py-2">
                                        <strong className="text-black">
                                          OR
                                        </strong>
                                      </div>
                                    </div>
                                    <div className="col-md-5">
                                      <div className="text-label fw-500 py-2">
                                        Monthly investment required
                                        <span className="text-roboto">(₹)</span>
                                      </div>
                                      <div className="inputf transcard bg-light-red py-2">
                                        {" "}
                                        {SipAmount}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row px-lg-5 pt-3">
                                <div className="col-md-12 text-lg-end text-center">
                                  <button className="btn-custom ">
                                    Invest Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EducationCalculator;
