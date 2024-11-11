import React, { useState } from "react";
import minus from "../assets/images/calculator/minus.png";
import plus from "../assets/images/calculator/add.png";
import CalculatorHeader from "../components/calculator-header";
import axios from "axios";
import { baseUrl } from "../request";
import Loader from "./Loader";
import {
  incThirty,
  decThirty,
  decFifty,
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
import { notify } from "./toastCreater";


const MarriageCalculator = () => {

  const [childAgeToday, setChildAgeToday] = useState(8);
  const [getMarriedAge, setGetMarriedAge] = useState(18);
  const [amountRequired, setAmountRequired] = useState(1000000);
  const [annualSaving, setAnnualSaving] = useState(30000);
  const [expectedRateReturn, setExpectedRateReturn] = useState(12);
  const [expectedInflation, setExpectedInflation] = useState(6);
  const [inflaction, setInflaction] = useState("17,90,848");
  const [futureValue, setFutureValue] = useState("5,75,097");
  const [af, setAf] = useState("12,15,751");
  const [lumpsum, setLumpsum] = useState("3,68,366");
  const [data, setData] = useState("5,285");
  const [loaded, setLoaded] = useState(true);
  const [additionContent, setAdditionContent] = useState(
    "Additional funds required to meet expenses(₹)"
  );
  const [loader, setLoader] = useState("none");

  const calculateMarrige = () => {
    if(childAgeToday && getMarriedAge && amountRequired && annualSaving && expectedRateReturn && expectedInflation){
      setLoader("block");
      const data = {
        childAgeToday: childAgeToday,
        childAgeAfterMarried: getMarriedAge,
        amountRequired: amountRequired,
        annualSaving: annualSaving,
        rateReturn: expectedRateReturn,
        inflationRate: expectedInflation,
      };
      axios.post(baseUrl + "/calculators/marrige", data).then((res) => {
        setInflaction(res.data.inflationAdjustedCost);
        setFutureValue(res.data.futureValue);
        setAf(res.data.additionalFunds);
        setData(res.data.monthlyInvestment);
        setLumpsum(res.data.lumpsum);
        window.scrollTo(500,500);
  
        let s = res.data.lumpsum.replace(/,/g, "");
        s = parseInt(s);
        if (res.data.lumpsum.length == 5 && s < 0) {
          setLumpsum(res.data.lumpsum.replace(/,/g, ""));
          setAf(res.data.additionalFunds.replace(/,/g, ""));
          setAdditionContent("Excess to meet expenses(₹)");
        } else if (s < 0) {
          setAdditionContent("Excess to meet expenses(₹)");
        }
  
        setLoader("none");
      });
    }else{
      notify("warn","All Fields Required")
    }
    
  };

  let incChildAgeToday = () => {
    if (childAgeToday < 35) {
      setChildAgeToday(Number(childAgeToday) + 1);
    }
  };
  let decChildAgeToday = () => {
    if (childAgeToday > 1) {
      setChildAgeToday(childAgeToday - 1);
    }
  };

  // for Approx cost

  let incAmountRequired = () => {
    if (amountRequired < 100000000) {
      setAmountRequired(Number(amountRequired) + 500);
    } else if (amountRequired > 100000000) {
      setAmountRequired(Number(100000000));
    } else if (amountRequired == 0) {
      setAmountRequired(Number(amountRequired) + 500);
    }
  };
  let decAmountRequired = () => {
    if (amountRequired >= 500) {
      setAmountRequired(amountRequired - 500);
    } else if (amountRequired < 499) {
      setAmountRequired(0);
    }
  };

  // for Start college Age

  let incGetMarriedAge = () => {
    if (getMarriedAge < 45) {
      setGetMarriedAge(Number(getMarriedAge) + 1);
    }
  };
  let decGetMarriedAge = () => {
    if (getMarriedAge > 1) {
      setGetMarriedAge(getMarriedAge - 1);
    }
  };

  let incAnnualSaving = () => {
    if (annualSaving < 2500000) {
      setAnnualSaving(Number(annualSaving) + 500);
    } else if (annualSaving == 0) {
      setAnnualSaving(Number(annualSaving) + 500);
    }
  };
  let decAnnualSaving = () => {
    if (annualSaving >= 500) {
      setAnnualSaving(annualSaving - 500);
    } else if (annualSaving < 499) {
      setAnnualSaving(0);
    }
  };
  return (
    <>

      <div className="wrapper">
        <div className="px-lg-5 px-2">
          {/* Page Heading */}


          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-3">
              <li className="breadcrumb-item"><a href="home">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Calculators</li>
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
                                    <label for="m-saving" className="text-label fw-500 py-2 fs-12">
                                      Child's age today (Years)
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img src={minus} alt="" className="img-fluid max-27" onClick={decChildAgeToday}></img>
                                      <input type="text" className="form-control" name="m-saving" placeholder="200" value={childAgeToday}
                                        onChange={(e) => {
                                          if (
                                            e.target.value >= 0 &&
                                            e.target.value <= 35
                                          ) {
                                            if (e.target.value.includes(".")) {
                                              setChildAgeToday(
                                                Math.round(parseInt(e.target.value))
                                              );
                                              console.log(
                                                "with float ",
                                                parseInt(e.target.value)
                                              );
                                            } else {
                                              setChildAgeToday(e.target.value);
                                            }
                                          } else if (e.target.value > 35) {
                                            setChildAgeToday(35);
                                          }
                                        }} />
                                      <img src={plus} alt="" className="img-fluid max-27" onClick={incChildAgeToday}></img>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <label for="year" className="text-label fw-500 py-2 fs-12">
                                      Child will get married at the age of (Years)
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img src={minus} alt="" className="img-fluid max-27" onClick={decGetMarriedAge}></img>
                                      <input type="text" className="form-control" name="year" placeholder="5" value={getMarriedAge}
                                        onChange={(e) => {
                                          if (
                                            e.target.value >= 0 &&
                                            e.target.value <= 45
                                          ) {
                                            if (e.target.value.includes(".")) {
                                              setGetMarriedAge(
                                                Math.round(parseInt(e.target.value))
                                              );
                                              console.log(
                                                "with float ",
                                                parseInt(e.target.value)
                                              );
                                            } else {
                                              setGetMarriedAge(e.target.value);
                                            }
                                          } else if (e.target.value > 45) {
                                            setGetMarriedAge(45);
                                          }
                                        }} />
                                      <img src={plus} alt="" className="img-fluid max-27" onClick={incGetMarriedAge}></img>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <label for="return" className="text-label fw-500 py-2 fs-12">
                                      Amount required for wedding as on today<span className="text-roboto">(₹)</span>
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img src={minus} alt="" className="img-fluid max-27" onClick={decAmountRequired}></img>
                                      <input type="text" className="form-control" name="return" placeholder="7" value={amountRequired}

                                        onChange={(e) => {
                                          if (
                                            e.target.value >= 0 &&
                                            e.target.value <= 100000000
                                          ) {
                                            if (e.target.value.includes(".")) {
                                              setAmountRequired(
                                                Math.round(parseInt(e.target.value))
                                              );
                                              console.log(
                                                "with float ",
                                                parseInt(e.target.value)
                                              );
                                            } else {
                                              setAmountRequired(e.target.value);
                                            }
                                          } else if (e.target.value > 100000000) {
                                            setAmountRequired(100000000);
                                          }
                                        }} />
                                      <img src={plus} alt="" className="img-fluid max-27" onClick={incAmountRequired}></img>
                                    </div>
                                  </div>
                                </div>
                                {/*second*/}
                                <div className="row" >
                                  <div className="col-md-4 text-center">
                                    <label for="m-saving" className="text-label fw-500 py-2 fs-12">
                                      Annual Saving<span className="text-roboto">(₹)</span>
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img src={minus} alt="" className="img-fluid max-27" onClick={decAnnualSaving}></img>
                                      <input type="text" className="form-control" name="m-saving" placeholder="200" value={annualSaving}

                                        onChange={(e) => {
                                          if (
                                            e.target.value >= 0 &&
                                            e.target.value <= 2500000
                                          ) {
                                            if (e.target.value.includes(".")) {
                                              setAnnualSaving(
                                                Math.round(parseInt(e.target.value))
                                              );
                                              console.log(
                                                "with float ",
                                                parseInt(e.target.value)
                                              );
                                            } else {
                                              setAnnualSaving(e.target.value);
                                            }
                                          } else if (e.target.value > 2500000) {
                                            setAnnualSaving(2500000);
                                          }
                                        }} />
                                      <img src={plus} alt="" className="img-fluid max-27" onClick={incAnnualSaving}></img>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <label for="year" className="text-label fw-500 py-2 fs-12">
                                      Expected rate of return(%)
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img src={minus} alt="" className="img-fluid max-27" onClick={() =>
                                        decPointFive(
                                          expectedRateReturn,
                                          setExpectedRateReturn
                                        )
                                      }></img>
                                      <input type="text" className="form-control" name="year" placeholder="5" value={expectedRateReturn}
                                      
                                        onChange={(e) => {
                                          if (
                                            e.target.value >= 0 &&
                                            e.target.value <= 50
                                          ) {
                                            if (e.target.value.includes(".")) {
                                              let a = parseFloat(e.target.value);
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
                                              setExpectedRateReturn(parseInt(a));
                                            }
                                          } else {
                                            setExpectedRateReturn(50);
                                          }
                                        }} />
                                      <img src={plus} alt="" className="img-fluid max-27" onClick={() =>
                                incPointFiveFifty(
                                  expectedRateReturn,
                                  setExpectedRateReturn
                                )
                              }></img>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <label for="return" className="text-label fw-500 py-2 fs-12">
                                      Expected inflation rate (% p.a)
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img src={minus} alt="" className="img-fluid max-27" onClick={() =>
                                decFifty(
                                  expectedInflation,
                                  setExpectedInflation
                                )
                              }></img>
                                      <input type="text" className="form-control" name="return" placeholder="7"  value={expectedInflation}

                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 50
                                ) {
                                  if (e.target.value.includes(".")) {
                                    setExpectedInflation(
                                      Math.round(parseInt(e.target.value))
                                    );
                                    console.log(
                                      "with float ",
                                      parseInt(e.target.value)
                                    );
                                  } else {
                                    setExpectedInflation(e.target.value);
                                  }
                                } else if (e.target.value > 50) {
                                  setExpectedInflation(50);
                                }
                              }}/>
                                      <img src={plus} alt="" className="img-fluid max-27"  onClick={() =>
                                incFifty(
                                  expectedInflation,
                                  setExpectedInflation
                                )
                              }></img>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12 mt-3  text-lg-end text-center">
                                  <button className="btn-custom" onClick={calculateMarrige}>Calculate</button>
                                </div>
                              </section>
                              <div className="row shadowc br-50 mx-3 p-lg-5">
                                <div className="col-md-12 px-lg-5 pt-5">
                                  <div className="col-md-12 result-title text-center">
                                    <h3>Result</h3>
                                  </div>
                                  <div className="result-content text-center">
                                    <div className="row pt-3">
                                      <div className="col-md-4">
                                        <div className="text-label fw-500 py-2 pb-4 mb-1">
                                          Inflation Adjusted Cost<span className="text-roboto">(₹)</span>
                                        </div>
                                        <div className="inputf transcard  py-2 bg-light-red"> {inflaction}</div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="text-label fw-500 py-2  pb-4 mb-1">
                                          Future value of saving <span className="text-roboto">(₹)</span>
                                        </div>
                                        <div className="inputf transcard py-2 bg-light-red">   {futureValue}</div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="text-label fw-500 py-2">
                                        {additionContent}<span className="text-roboto">(₹)</span>
                                        </div>
                                        <div className="inputf transcard bg-light-red py-2">  {af}</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12 px-lg-5 ">
                                  <div className="col-md-12 result-title text-center pt-4">
                                    <h3>Plan of action Required</h3>
                                  </div>
                                  <div className=" row result-content text-center pb-3">
                                    <div className="col-md-5">
                                      <div className="text-label fw-500 py-2 pb-4 mb-1">
                                        One time investment required<span className="text-roboto">(₹)</span>
                                      </div>
                                      <div className="inputf transcard bg-light-red py-2">   {lumpsum}</div>
                                    </div>
                                    <div className="col-md-2"><div className="text-label fw-500 py-2"><strong className="text-black">OR</strong></div></div>
                                    <div className="col-md-5">
                                      <div className="text-label fw-500 py-2 pb-4 mb-1">
                                        Monthly investment required<span className="text-roboto">(₹)</span>
                                      </div>
                                      <div className="inputf transcard bg-light-red py-2">   {data}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row px-lg-5 pt-3">

                                <div className="col-md-12 text-lg-end text-center">
                                  <button className="btn-custom ">Invest Now</button>
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
  )

}
export default MarriageCalculator