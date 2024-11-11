import React,{useState} from "react";
import minus from "../assets/images/calculator/minus.png";
import plus from "../assets/images/calculator/add.png";
import CalculatorHeader from "../components/calculator-header";
import axios from 'axios'
import { baseUrl } from "../request";
import Loader from "./Loader";
const RetirementCalculator =()=>
 {

  const [CurrentAge, setCurrentAge] = useState(30);
  const [ExpectedRetirementAge, setExpectedRetirementAge] = useState(60);
  const [MonthlyExpenses, setMonthlyExpenses] = useState(30000);
  const [ExpectedInflation, setExpectedInflation] = useState(6);
  const [CurrentSavingPerMonth, setCurrentSavingPerMonth] = useState(5000);
  const [ExistingCorpus, setExistingCorpus] = useState(200000);
  const [ExpectedPreRetirement, setExpectedPreRetirement] = useState(12);
  const [ExpectedPostRetirement, setExpectedPostRetirement] = useState(7);
  const [LifeExpectancy, setLifeExpectancy] = useState(20);

  const [RetirementYear, setRetirementYear] = useState("30");
  const [Fv, setFv] = useState("1,72,305");
  const [SipAmount, setSipAmount] = useState("4,953");
  const [CorpusMonth, setCorpusMonth] = useState("1,74,74,821");
  const [CorpusExist, setCorpusExist] = useState("50,81,744");
  const [CorpusAch, setCorpusAch] = useState("3,76,72,712");
  const [SHortfall, setSHortfall] = useState("1,51,16,089");
  const [loaded, setLoaded] = useState(true);
  const [note, setNote] = useState();
  const [popupNegative, setPopupNegative] = useState("");
  const [loader, setLoader] = useState("none");
  const [positiveAdditional, setPositiveAdditional] = useState(
    "Additional Saving P.M. (₹)"
  );
  const [shortfallContent, setShortfallContent] = useState(
    "Shortfall in amount(₹)"
  );


  
  const CalculateRetirement = async () => {
    setLoader("block");

    const data = {
      currentAge: CurrentAge,
      retirementAge: ExpectedRetirementAge,
      currentMonthlyExpenses: MonthlyExpenses,
      inflationRate: ExpectedInflation,
      currentSavingsPerMonth: CurrentSavingPerMonth,
      existingCorpus: ExistingCorpus,
      expectedPreRetirementReturns: ExpectedPreRetirement,
      expectedPostRetirementReturns: ExpectedPostRetirement,
      lifeExpectancyPostRetirement: LifeExpectancy,
    };

    await axios
      .post(baseUrl + "/calculators/retirment", data)
      .then((res) => {
        console.log("res.data.data ", res.data.data, "res.data ", res.data);
        setSHortfall(res.data.shortfallAmount);
        setRetirementYear(res.data.retirementYears);
        setFv(res.data.amountRequiredPostRetirement);
        setSipAmount(res.data.extraSavings);
        setCorpusMonth(res.data.corpusAccumulated);
        setCorpusExist(res.data.corpusAccumulatedWithSavings);
        setCorpusAch(res.data.corpusAchieved);
        setLoader("none");

        window.scrollTo(500,500);

        let s = res.data.data.replace(/,/g, "");
        s = parseInt(s);
        if (res.data.data.length == 5 && s < 0) {
          setSipAmount(res.data.data.replace(/,/g, ""));
        }

        // setNote('')
        let withoutComma = res.data.shortfall_amt.replace(/,/g, "");
        withoutComma = parseInt(withoutComma);
        if (withoutComma < 0) {
          setPopupNegative(
            "Your existing savings are enough to meet this goal, you can utilize the excess saving to achieve your other goals"
          );
          setNote("Note:");
          setPositiveAdditional("Extra savings P.M. (₹)");
          setShortfallContent("Excess in Amount (₹)");
        } else {
          setPopupNegative();
          setNote();
          setPositiveAdditional("Additional Saving P.M. (₹)");
          setShortfallContent("Shortfall in amount(₹)");
        }
      });
  };

  let incCurrentAge = () => {
    if (CurrentAge < 60) {
      setCurrentAge(Number(CurrentAge) + 1);
    }
  };
  let decCurrentAge = () => {

    if (CurrentAge > 1) {
      setCurrentAge(CurrentAge - 1);
    }
  };

  // for Approx cost

  let incMonthlyExpenses = () => {
    if (MonthlyExpenses < 1000000) {
      setMonthlyExpenses(Number(MonthlyExpenses) + 500);
    } else if (MonthlyExpenses >= 1000000) {
      setMonthlyExpenses(Number(1000000));
    } else if (MonthlyExpenses == 0) {
      setMonthlyExpenses(Number(MonthlyExpenses) + 500);
    }
  };
  let decMonthlyExpenses = () => {
    if (MonthlyExpenses >= 500) {
      setMonthlyExpenses(MonthlyExpenses - 500);
    } else if (MonthlyExpenses < 499) {
      setMonthlyExpenses(0);
    }
  };

  // for Start college Age

  let incExpectedRetirementAge = () => {
    if (ExpectedRetirementAge < 70) {
      setExpectedRetirementAge(Number(ExpectedRetirementAge) + 1);
    }
  };
  let decExpectedRetirementAge = () => {
    if (ExpectedRetirementAge > 1) {
      setExpectedRetirementAge(ExpectedRetirementAge - 1);
    }
  };

  let incExpectedInflation = () => {
    if (ExpectedInflation < 50) {
      setExpectedInflation(Number(ExpectedInflation) + 1);
    }
  };
  let decExpectedInflation = () => {
    if (ExpectedInflation > 1) {
      setExpectedInflation(ExpectedInflation - 1);
    }
  };

  let incCurrentSavingPerMonth = () => {
    if (CurrentSavingPerMonth < 1000000) {
      setCurrentSavingPerMonth(Number(CurrentSavingPerMonth) + 500);
    } else if (CurrentSavingPerMonth == 0) {
      setCurrentSavingPerMonth(Number(CurrentSavingPerMonth) + 500);
    }
  };
  let decCurrentSavingPerMonth = () => {
    if (CurrentSavingPerMonth >= 500) {
      setCurrentSavingPerMonth(CurrentSavingPerMonth - 500);
    } else if (CurrentSavingPerMonth < 499) {
      setCurrentSavingPerMonth(0);
    }
  };

  let incExistingCorpus = () => {
    if (ExistingCorpus < 10000000) {
      setExistingCorpus(Number(ExistingCorpus) + 500);
    } else if (ExistingCorpus == 0) {
      setExistingCorpus(Number(ExistingCorpus) + 500);
    }
  };
  let decExistingCorpus = () => {
    if (ExistingCorpus >= 500) {
      setExistingCorpus(ExistingCorpus - 500);
    } else if (ExistingCorpus < 499) {
      setExistingCorpus(0);
    }
  };
  let incExpectedPreRetirement = () => {
    if (isNaN(ExpectedPreRetirement)) {
      return setExpectedPreRetirement(0);
    }
    if (ExpectedPreRetirement < 50) {
      setExpectedPreRetirement(Number(ExpectedPreRetirement) + 0.5);
    }
  };
  let decExpectedPreRetirement = () => {
    if (ExpectedPreRetirement > 1) {
      setExpectedPreRetirement(ExpectedPreRetirement - 0.5);
    }
  };

  let incExpectedPostRetirement = () => {
    if (isNaN(ExpectedPostRetirement)) {
      return setExpectedPostRetirement(0);
    }
    if (ExpectedPostRetirement < 50) {
      setExpectedPostRetirement(Number(ExpectedPostRetirement) + 0.5);
    }
  };
  let decExpectedPostRetirement = () => {
    if (ExpectedPostRetirement > 1) {
      setExpectedPostRetirement(ExpectedPostRetirement - 0.5);
    }
  };

  let incLifeExpectancy = () => {
    if (isNaN(LifeExpectancy)) {
      return setLifeExpectancy(0);
    }
    if (LifeExpectancy < 100) {
      setLifeExpectancy(Number(LifeExpectancy) + 0.5);
    }
  };
  let decLifeExpectancy = () => {
    if (LifeExpectancy > 1) {
      setLifeExpectancy(LifeExpectancy - 0.5);
    }
  };
    
return(
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
      <div className="container-fluid  px-lg-5 pb-lg-5 calculator">
        <div className="row">
          <div className="col-md-12">
            {/* =============Calculators Nav Start================ */}
            <div class="container-calculator pb-5">
      
              <CalculatorHeader/>
              {/* =============Calculators Nav End================ */}
              <div class=" mt-3 ">
                <div class=""  role="tabpanel">
                  <section>
                    <div className="results pt-5">
                      <div className="px-lg-5">
                        <div className="shadowc br-50 px-lg-4 px-sm-3 pb-5">
                          <section className="pt-5 pb-5 px-3">
                            <div className="row" >
                              {/*first*/}
                              <div className="col-md-4 text-center">
                                <label for="m-saving" className="text-label fw-500 py-2 fs-12">
                                Current Age (Years)
                                </label>
                                <div className="d-flex inputf transcard" >
                                  <img src={minus} alt="" className="img-fluid max-27" onClick={decCurrentAge}></img>
                                  <input type="text" className="form-control" name="m-saving" placeholder="200"  value={CurrentAge}
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 60
                                ) {
                                  if (e.target.value.includes(".")) {
                                    setCurrentAge(
                                      Math.round(parseInt(e.target.value))
                                    );
                                    console.log(
                                      "with float ",
                                      parseInt(e.target.value)
                                    );
                                  } else {
                                    setCurrentAge(e.target.value);
                                  }
                                } else if (e.target.value > 60) {
                                  setCurrentAge(60);
                                }
                              }}/>
                                  <img src={plus} alt="" className="img-fluid max-27" onClick={incCurrentAge}></img>
                                </div>
                              </div>
                              <div className="col-md-4 text-center">
                                <label for="year" className="text-label fw-500 py-2 fs-12">
                                Expected retirement age (Years) 
                                </label>
                                <div className="d-flex inputf transcard">
                                  <img src={minus} alt="" className="img-fluid max-27 " onClick={decExpectedRetirementAge} ></img>
                                  <input type="text" className="form-control" name="year" placeholder="5"  value={ExpectedRetirementAge}
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 70
                                ) {
                                  if (e.target.value.includes(".")) {
                                    setExpectedRetirementAge(
                                      Math.round(parseInt(e.target.value))
                                    );
                                    console.log(
                                      "with float ",
                                      parseInt(e.target.value)
                                    );
                                  } else {
                                    setExpectedRetirementAge(e.target.value);
                                  }
                                } else if (e.target.value > 70) {
                                  setExpectedRetirementAge(70);
                                }
                              }}/>
                                  <img src={plus} alt="" className="img-fluid max-27"    onClick={incExpectedRetirementAge} ></img>
                                </div>
                              </div>
                              <div className="col-md-4 text-center">
                                <label for="return" className="text-label fw-500 py-2 fs-12">
                                Monthly expenses for current lifestyle(<span className="text-roboto">₹</span>/M)
                                </label>
                                <div className="d-flex inputf transcard">
                                  <img src={minus} alt="" className="img-fluid max-27" onClick={decMonthlyExpenses}></img>
                                  <input type="text" className="form-control" name="return" placeholder="7"value={MonthlyExpenses}
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 1000000
                                ) {
                                  if (e.target.value.includes(".")) {
                                    setMonthlyExpenses(
                                      Math.round(parseInt(e.target.value))
                                    );
                                    console.log(
                                      "with float ",
                                      parseInt(e.target.value)
                                    );
                                  } else {
                                    setMonthlyExpenses(e.target.value);
                                  }
                                } else if (e.target.value > 1000000) {
                                  setMonthlyExpenses(1000000);
                                }
                              }} />
                                  <img src={plus} alt="" className="img-fluid max-27"   onClick={incMonthlyExpenses}></img>
                                </div>
                              </div>
                            </div>
                            {/*second*/}
                            <div className="row" >
                              <div className="col-md-4 text-center">
                                <label for="m-saving" className="text-label fw-500 py-2 fs-12">
                                Expected inflation rate (% p.a)
                                </label>
                                <div className="d-flex inputf transcard">
                                  <img src={minus} alt="" className="img-fluid max-27"  onClick={decExpectedInflation}></img>
                                  <input type="text" className="form-control" name="m-saving" placeholder="200"   value={ExpectedInflation}
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
                                  <img src={plus} alt="" className="img-fluid max-27"    onClick={incExpectedInflation}></img>
                                </div>
                              </div>
                              <div className="col-md-4 text-center">
                                <label for="year" className="text-label fw-500 py-2 fs-12">
                                Current saving per month <span className="text-roboto">(₹)</span>
                                </label>
                                <div className="d-flex inputf transcard">
                                  <img src={minus} alt="" className="img-fluid max-27" onClick={decCurrentSavingPerMonth}></img>
                                  <input type="text" className="form-control" name="year" placeholder="5"   value={CurrentSavingPerMonth}
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 1000000
                                ) {
                                  if (e.target.value.includes(".")) {
                                    setCurrentSavingPerMonth(
                                      Math.round(parseInt(e.target.value))
                                    );
                                    console.log(
                                      "with float ",
                                      parseInt(e.target.value)
                                    );
                                  } else {
                                    setCurrentSavingPerMonth(e.target.value);
                                  }
                                } else if (e.target.value > 1000000) {
                                  setCurrentSavingPerMonth(1000000);
                                }
                              }}/>
                                  <img src={plus} alt="" className="img-fluid max-27"   onClick={incCurrentSavingPerMonth}></img>
                                </div>
                              </div>
                              <div className="col-md-4 text-center">
                                <label for="return" className="text-label fw-500 py-2 fs-12">
                                Existing Corpus<span className="text-roboto">(₹)</span>
                                </label>
                                <div className="d-flex inputf transcard">
                                  <img src={minus} alt="" className="img-fluid max-27"   onClick={decExistingCorpus}></img>
                                  <input type="text" className="form-control" name="return" placeholder="7"   value={ExistingCorpus}
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 10000000
                                ) {
                                  if (e.target.value.includes(".")) {
                                    setExistingCorpus(
                                      Math.round(parseInt(e.target.value))
                                    );
                                    console.log(
                                      "with float ",
                                      parseInt(e.target.value)
                                    );
                                  } else {
                                    setExistingCorpus(e.target.value);
                                  }
                                } else if (e.target.value > 10000000) {
                                  setExistingCorpus(10000000);
                                }
                              }}/>
                                  <img src={plus} alt="" className="img-fluid max-27"    onClick={incExistingCorpus}></img>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-4 text-center">
                                <label for="m-saving" className="text-label fw-500 py-2 fs-12">
                                Expected pre retirement returns (% p.a)
                                </label>
                                <div className="d-flex inputf transcard">
                                  <img src={minus} alt="" className="img-fluid max-27"    onClick={decExpectedPreRetirement}></img>
                                  <input type="text" className="form-control" name="m-saving" placeholder="200"  value={ExpectedPreRetirement}
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 50
                                ) {
                                  if (e.target.value.includes(".")) {
                                    let a = parseFloat(e.target.value);
                                    setExpectedPreRetirement(
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
                                    setExpectedPreRetirement(parseInt(a));
                                  }
                                } else {
                                  setExpectedPreRetirement(50);
                                }
                              }}/>
                                  <img src={plus} alt="" className="img-fluid max-27" onClick={incExpectedPreRetirement}></img>
                                </div>
                              </div>
                              <div className="col-md-4 text-center">
                                <label for="year" className="text-label fw-500 py-2 fs-12">
                                Expected post retirement returns (% p.a)
                                </label>
                                <div className="d-flex inputf transcard">
                                  <img src={minus} alt="" className="img-fluid max-27"  onClick={decExpectedPostRetirement}></img>
                                  <input type="text" className="form-control" name="year" placeholder="5"  value={ExpectedPostRetirement}
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 50
                                ) {
                                  if (e.target.value.includes(".")) {
                                    let a = parseFloat(e.target.value);
                                    setExpectedPostRetirement(
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
                                    setExpectedPostRetirement(parseInt(a));
                                  }
                                } else {
                                  setExpectedPostRetirement(50);
                                }
                              }}/>
                                  <img src={plus} alt="" className="img-fluid max-27"  onClick={incExpectedPostRetirement}></img>
                                </div>
                              </div>
                              <div className="col-md-4 text-center">
                                <label for="return" className="text-label fw-500 py-2 fs-12">
                                Life Expectancy Post retirement(year)
                                </label>
                                <div className="d-flex inputf transcard">
                                  <img src={minus} alt="" className="img-fluid max-27"  onClick={decLifeExpectancy}></img>
                                  <input type="text" className="form-control" name="return" placeholder="7"   value={LifeExpectancy}
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 100
                                ) {
                                  if (e.target.value.includes(".")) {
                                    let a = parseFloat(e.target.value);
                                    setLifeExpectancy(parseFloat(a.toFixed(2)));
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
                                    setLifeExpectancy(parseInt(a));
                                  }
                                } else {
                                  setLifeExpectancy(100);
                                }
                              }}/>
                                  <img src={plus} alt="" className="img-fluid max-27"  onClick={incLifeExpectancy}></img>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12  text-lg-end text-center pt-4 ">
                              <button className="btn-custom" onClick={CalculateRetirement}>Calculate</button>
                            </div>
                          </section>
                          <div className="row shadowc br-50 mx-3 p-lg-5">
                            <div className="col-md-12 result-title text-center pt-3">
                              <h3>Result</h3>
                            </div>
                            <div className="col-md-12 px-lg-5 pt-3">
                              <div className="row result-content text-center">
                                <div className="col-md-4">
                                  <div className="text-label fw-500 py-2 fs-12 mb-4">
                                    Year to retirement (Years)
                                  </div>
                                  <div className="inputf transcard bg-light-red py-2">     {RetirementYear}</div>
                                </div>
                                <div className="col-md-4">
                                  <div className="text-label fw-500 py-2 fs-12">
                                    Amount Required P.M.-Post <br/>Retirement <span className="text-roboto">(₹)</span>
                                  </div>
                                  <div className="inputf transcard bg-light-red py-2"> {Fv}</div>
                                </div>
                                <div className="col-md-4">
                                  <div className="text-label fw-500 py-2 fs-12">
                                    Corpus to be Achived @ <br/>Retirement<span className="text-roboto">(₹)</span>
                                  </div>
                                  <div className="inputf transcard bg-light-red py-2"> {CorpusAch}</div>
                                </div>
                              </div>
                              <div className="row result-content text-center pt-3">
                                <div className="col-md-4">
                                  <div className="text-label fw-500 py-2 fs-12">
                                    Corpus you will accumulate with current savings per month<span className="text-roboto">(₹)</span>
                                  </div>
                                  <div className="inputf transcard bg-light-red py-2">  {CorpusMonth}</div>
                                </div>
                                <div className="col-md-4">
                                  <div className="text-label fw-500 py-2 fs-12">
                                    Corpus yoy will accumulate with existing savings <span className="text-roboto">(₹)</span>
                                  </div>
                                  <div className="inputf transcard bg-light-red py-2">{CorpusExist}</div>
                                </div>
                                <div className="col-md-4">
                                  <div className="text-label fw-500 py-2 fs-12 mb-4">
                                  {shortfallContent}<span className="text-roboto">(₹)</span>
                                  </div>
                                  <div className="inputf transcard bg-light-red py-2">   {SHortfall}</div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 px-lg-5 pt-3 pb-3">
                              <div className="col-md-12 result-title text-center py-3">
                                <h3>Plan of action required</h3>
                              </div>
                              <div className="result-content text-center">
                                <div className="text-label fw-500 py-2 fs-12">
                                {positiveAdditional}<span className="text-roboto">(₹)</span>
                                </div>
                                <div className="inputf transcard bg-light-red py-2">{SipAmount}</div>
                                <span className="font-weight-500 fs-12 text-danger">
                            <b>{note}</b> {popupNegative}
                          </span>
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
export default RetirementCalculator