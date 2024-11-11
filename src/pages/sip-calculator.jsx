import React, { useState } from "react";
import minus from "../assets/images/calculator/minus.png";
import plus from "../assets/images/calculator/add.png";
import { LineChart } from 'react-chartkick';
import 'chartkick/chart.js';
import CalculatorHeader from "../components/calculator-header";
import axios from "axios";
import { baseUrl } from "../request";
import Loader from "./Loader";
import { notify } from "./toastCreater";


const SipCalculator = () => {
  const [monthlySavings, setMonthlySavings] = useState(10000);
  const [investmentPeriod, setInvestmentPeriod] = useState(5);
  const [expectedRateReturn, setExpectedRateReturn] = useState(10);
  const [totalSaving, setTotalSaving] = useState("6,00,000");
  const [gains, setGains] = useState("7,74,370");
  const [totalMonth, setTotalMonth] = useState(5);
  const [loader, setLoader] = useState("none");

  const [data, setData] = useState([
    {
      name: "Market Value",
      data: {
        "0 Year": 0,
        "1 Year": 125665,
        "2 Year": 264469,
        "3 Year": 417818,
        "4 Year": 587225,
        "5 Year": 774370,
      },
    },
    {
      name: "Amount Invested",
      data: {
        "0 Year": 0,
        "1 Year": 120000,
        "2 Year": 240000,
        "3 Year": 360000,
        "4 Year": 480000,
        "5 Year": 600000,
      },
    },
  ]);

  const sipCalculate = (e) => {
    e.preventDefault();
if(monthlySavings && investmentPeriod && expectedRateReturn){
  setLoader("block");

  const data1 = {
    monthlySavings: monthlySavings,
    investmentPeriod: investmentPeriod,
    expectedRateReturn: expectedRateReturn,
  };

  axios.post(baseUrl + "/calculators/sip", data1).then((res) => {
    setGains(res.data.gainss);
    setTotalSaving(res.data.totalSaving);
    // setTotal(res.data.mainresults);
    setTotalMonth(res.data.totalYear);
    // $(document).scrollTop($("#result").height());
    window.scrollTo(500,500);

    setLoader("none");

  });

  var monthlyRate = expectedRateReturn / 12 / 100;

  let mainArray = [];
  let mainFirstObj = { name: " Amount Invested" };
  let mainSecondObj = { name: "Market Value" };
  let firstSubObj = {};
  let secondSubObj = {};
  if (parseInt(investmentPeriod) <= 50) {
    for (let i = 0; i < parseInt(investmentPeriod) + 1; i++) {
      if (i == 0) {
        firstSubObj[i + "Year"] = 0;
      } else {
        firstSubObj[i + "Year"] = (monthlySavings * i * 12).toFixed();
      }

      if (i == 0) {
        secondSubObj[i + "Year"] = 0;
      } else {
        // let marketData = monthlySavings * ((1 + monthlyRate) * ((Math.pow((1 + monthlyRate), i * 12)) - 1) / monthlyRate)
        let marketData =
          (monthlySavings * (Math.pow(1 + monthlyRate, i * 12) - 1)) /
          monthlyRate;
        let marketDataooo = marketData / 12; //(marketData + monthlySavings * i * 12)/ 12
        secondSubObj[i + "Year"] = (marketDataooo * 12).toFixed();
      }
    }
    mainFirstObj.data = firstSubObj;
    mainSecondObj.data = secondSubObj;
    mainArray.push(mainSecondObj);
    mainArray.push(mainFirstObj);
    console.log("before",mainArray);
    setData(mainArray);
  } }else{
notify("warn", "All Fields Required")
}

  
  };
  let incNum = () => {
    if (monthlySavings < 1000000) {
      setMonthlySavings(Number(monthlySavings) + 500);
    } else if (monthlySavings == 0) {
      setMonthlySavings(Number(monthlySavings) + 500);
    }
  };
  let decNum = () => {
    if (monthlySavings >= 500) {
      setMonthlySavings(monthlySavings - 500);
    } else if (monthlySavings < 499) {
      setMonthlySavings(0);
    }
  };

  let incMonth = () => {
    if (investmentPeriod < 50) {
      setInvestmentPeriod(Number(investmentPeriod) + 1);
    }
  };
  let decMonth = () => {
    if (investmentPeriod > 1) {
      setInvestmentPeriod(investmentPeriod - 1);
    }
  };

  let incPer = () => {
    if (isNaN(expectedRateReturn)) {
      return setExpectedRateReturn(0);
    }
    if (expectedRateReturn < 50) {
      setExpectedRateReturn(Number(expectedRateReturn) + 0.5);
    }
  };
  let decPer = () => {
    if (expectedRateReturn > 1) {
      setExpectedRateReturn(expectedRateReturn - 0.5);
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

          <div className="container-fluid px-lg-5 pb-5 calculator">
            <div className="row">
              <div className="col-md-12">
                {/* =============Calculators Nav Start================ */}
                <div class="container-calculator pb-5">
                  <CalculatorHeader />
                  {/* =============Calculators Nav End================ */}
                  <div class="mt-3">
                    <div class="" role="tabpanel">
                      <section>
                        <div className="results pt-5">
                          <div className="px-lg-5">
                            <div className="shadowc br-50 px-4 pb-5">
                              <section className="pt-5 pb-5">
                                <div className="row">
                                  <div className="col-md-4 text-center">
                                    <label for="m-saving" className="text-label fw-500 fs-14 py-2">
                                      Monthly Savings <span className="text-roboto">(₹)</span>
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img src={minus} alt="" className="img-fluid max-27" onClick={decNum}></img>
                                      <input type="text" className="form-control " name="m-saving" placeholder="200" value={monthlySavings}
                                        onChange={(e) => {
                                          if (
                                            e.target.value >= 0 &&
                                            e.target.value <= 1000000
                                          ) {
                                            if (e.target.value.includes(".")) {
                                              setMonthlySavings(
                                                Math.round(parseInt(e.target.value))
                                              );
                                            } else {
                                              setMonthlySavings(e.target.value);
                                            }
                                          } else if (e.target.value > 1000000) {
                                            setMonthlySavings(1000000);
                                          }
                                        }} />
                                      <img src={plus} alt="" className="img-fluid max-27" onClick={incNum}></img>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <label for="year" className="text-label fs-14 fw-500 py-2">
                                      Investment Period (Years)
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img src={minus} alt="" className="img-fluid max-27" onClick={decMonth}></img>
                                      <input type="text" className="form-control " name="year" placeholder="5" value={investmentPeriod}
                                        onChange={(e) => {
                                          if (
                                            e.target.value >= 0 &&
                                            e.target.value <= 50
                                          ) {
                                            if (e.target.value.includes(".")) {
                                              setInvestmentPeriod(
                                                Math.round(parseInt(e.target.value))
                                              );
                                            } else {
                                              setInvestmentPeriod(e.target.value);
                                            }
                                          } else if (e.target.value > 50) {
                                            setInvestmentPeriod(50);
                                          }
                                        }} />
                                   
                                      <img src={plus} alt="" className="img-fluid max-27"    onClick={incMonth}></img>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <label for="return" className="text-label fw-500 fs-14 py-2">
                                      Expected Rate of Return (% p.a)
                                    </label>
                                    <div className="d-flex inputf transcard">

                                      <img src={minus} alt="" className="img-fluid max-27" onClick={decPer} ></img>
                                      <input type="text" className="form-control " name="return" placeholder="7" value={expectedRateReturn}
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
                                            } else {
                                              let a = parseInt(e.target.value);
                                              setExpectedRateReturn(parseInt(a));
                                            }
                                          } else {
                                            setExpectedRateReturn(50);
                                          }
                                        }} />
                                      <img src={plus} alt="" className="img-fluid max-27" onClick={incPer}></img>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12 pt-2 mt-1 text-lg-end text-center">
                                  <button className="btn-custom mt-3" onClick={(e) => sipCalculate(e)}> Calculate</button>
                                </div>
                              </section>
                              <div className="row shadowc br-50 mx-lg-3">
                                <div className="col-md-4">
                                  <div className="result-content result-content-shadow">
                                    <ul className="text-center lst-none ps-0">
                                      <li className="pb-3">
                                        <div className="text-label fw-500 py-2">
                                          Amount Invested<span className="text-roboto">(₹)</span>
                                        </div>
                                        <div className="inputf transcard bg-white py-2">{totalSaving}</div>
                                      </li>
                                      <li className="pb-3">
                                        <div className="text-label fw-500 py-2">
                                          Period (Year)
                                        </div>
                                        <div className="inputf transcard bg-white py-2"> {totalMonth}</div>
                                      </li>
                                      <li className="pb-3">
                                        <div className="text-label fw-500 py-2">
                                          Gains<span className="text-roboto">(₹)</span>
                                        </div>
                                        <div className="inputf transcard bg-white py-2">  {gains}</div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-8  py-5">
                                  <div className="result-title text-center">
                                    <h2 className="fw-500">Result</h2>
                                  </div>
                                  <div className="pt-4">
                                    <LineChart data={data} />
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
export default SipCalculator