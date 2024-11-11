import React, { useState } from "react";
import minus from "../assets/images/calculator/minus.png";
import plus from "../assets/images/calculator/add.png";
import CalculatorHeader from "../components/calculator-header";
import Select from "react-select";
import RequestACall from "../components/request-a-call-back";
import fdpic from "../assets/images/calculator/fds.png";
import { baseUrl } from "../request";
import Loader from "./Loader";
import axios from "axios";
import { notify } from "./toastCreater";
const FdCalculator = () => {
  const [requestShow, setRequestShow] = useState(false);
  const [investment, setInvestment] = useState(100000);
  const [investmentDuration, setInvestmentDuration] = useState(5);
  const [interestRate, setInterestRate] = useState(6);
  const [compoundingPeriod, setCompoundingPeriod] = useState(12);
  const [maturity, setMaturity] = useState("1,34,885");
  const [loader, setLoader] = useState("none");
  const period = [
    { value: 12, label: "Monthly" },
    { value: 4, label: "Quarterly" },
    { value: 2, label: "Half Yearly" },
    { value: 1, label: "Yearly" },
  ];

  const FDcalculate = () => {
    if(investment && investmentDuration && interestRate && compoundingPeriod){
      setLoader("block");
      const data = {
        investAmount: investment,
        investmentDuration: investmentDuration,
        intrestRate: interestRate,
        compoundingPeriod: compoundingPeriod
      };
      axios.post(baseUrl + '/calculators/fd', data).then((res) => {
  
        setMaturity(res.data.data);
        window.scrollTo(500,500);
        setLoader("none"); 
      })
    }else{
      notify("warn","All Fields Required")
    }
   
  }


  let incInvestment = () => {
    if (investment < 10000000) {
      setInvestment(Number(investment) + 500);
    }
    else if (investment == 0) {
      setInvestment(Number(investment) + 500);
    }

  };
  let decInvestment = () => {
    if (investment >= 500) {

      setInvestment(investment - 500);
    }
    else if (investment < 499) {
      setInvestment(0);
    }
  }

  let incInvestmentDuration = () => {
    if (investmentDuration < 100) {
      setInvestmentDuration(Number(investmentDuration) + 1);
    }
  };
  let decInvestmentDuration = () => {
    if (investmentDuration > 1) {
      setInvestmentDuration(investmentDuration - 1);
    }
  }


  let incInterestRate = () => {
    if (isNaN(interestRate)) {
      return setInterestRate(0)
    }
    if (interestRate < 20) {
      setInterestRate((parseFloat(interestRate) + .05).toFixed(2));

    }
  };
  let decInterestRate = () => {
    if (interestRate > 1) {
      setInterestRate((parseFloat(interestRate) - .05).toFixed(2));

    }
  }
  return (
    <>
      <div className="wrapper">
        <div className="px-lg-5 px-2">
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
          <div className="container-fluid  px-lg-5 pb-lg-5 calculator">
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
                                <div className="row">
                                  <div className="col-lg-3 col-md-6 text-center">
                                    <label
                                      for="m-saving"
                                      className="text-label fw-500 fs-14 py-2"
                                    >
                                      Investment Amount
                                      <span className="text-roboto">(₹)</span>
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img
                                        src={minus}
                                        alt=""
                                        className="img-fluid max-27"onClick={decInvestment}
                                      ></img>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="m-saving"
                                        value={investment} placeholder="0"


                                        onChange={(e) => {
                                          if (e.target.value >= 0 && e.target.value <= 10000000) {
                                            if (e.target.value.includes('.')) {
                                              setInvestment(Math.round(parseInt(e.target.value)))
                                              console.log("with float ", parseInt(e.target.value));
                                            } else {
                                              setInvestment(e.target.value)
                                            }
                                          }
                                          else if (e.target.value > 10000000) {
                                            setInvestment(10000000)
          
                                          }
                                        }}
                                      />
                                      <img
                                        src={plus} onClick={incInvestment}
                                        alt=""
                                        className="img-fluid max-27"
                                      ></img>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 text-center">
                                    <label
                                      for="m-saving"
                                      className="text-label fw-500 py-2 fs-14"
                                    >
                                      Investment Duration(Years)
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img
                                        src={minus}  onClick={decInvestmentDuration}
                                        alt=""
                                        className="img-fluid max-27"
                                      ></img>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="m-saving"
                                        value={investmentDuration} placeholder="0"


                              onChange={(e) => {
                                if (e.target.value >= 0 && e.target.value <= 100) {
                                  if (e.target.value.includes('.')) {
                                    setInvestmentDuration(Math.round(parseInt(e.target.value)))
                                    console.log("with float ", parseInt(e.target.value));
                                  } else {
                                    setInvestmentDuration(e.target.value)
                                  }
                                }
                                else if (e.target.value > 100) {
                                  setInvestmentDuration(100)

                                }
                              }}
                                      />
                                      <img
                                        src={plus}
                                        alt=""
                                        className="img-fluid max-27" onClick={incInvestmentDuration}
                                      ></img>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 text-center">
                                    <label
                                      for="year"
                                      className="text-label fw-500 py-2 fs-14"
                                    >
                                      Interest Rate (%)
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img
                                        src={minus}
                                        alt=""
                                        className="img-fluid max-27" onClick={decInterestRate}
                                      ></img>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="year"
                                        value={interestRate} placeholder="0"


                              onChange={(e) => {
                                if (e.target.value >= 0 && e.target.value <= 20) {
                                  if (e.target.value.includes('.')) {
                                    let a = parseFloat(e.target.value)
                                    setInterestRate(parseFloat((a).toFixed(2)))
                                    console.log("with float ", parseFloat(e.target.value));
                                  } else {
                                    console.log("with int ", parseInt(e.target.value))
                                    let a = parseInt(e.target.value)
                                    setInterestRate(parseInt(a))
                                  }
                                }
                                else {
                                  setInterestRate(20)
                                }
                              }}
                                      />
                                      <img
                                        src={plus}
                                        alt=""
                                        className="img-fluid max-27" onClick={incInterestRate}
                                      ></img>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 text-center">
                                    <label
                                      for="return"
                                      className="text-label fw-500 py-2"
                                    >
                                      Compounding Period
                                    </label>
                                    <Select
                                      className="inputf transcard" placeholder={"Monthly"}
                                      options={period} onChange={(e) => setCompoundingPeriod(e.value)}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12 pt-2 text-lg-end text-center ">
                                  <button className="btn-custom mt-3"  onClick={FDcalculate}>
                                  
                                    Calculate
                                  </button>
                                </div>
                              </section>
                              <div className="row shadowc br-50 mx-3 p-lg-5">
                                <div className="col-md-12">
                                  <div className="result-title text-center py-3">
                                    <h2>Result</h2>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="result-content">
                                    <ul className="text-center lst-none ps-0">
                                      <li>
                                        <div className="text-label fw-500 py-2 mt-lg-5" >
                                          Maturity Value
                                          <span className="text-roboto">
                                            (₹)
                                          </span>
                                        </div>
                                        <div className="inputf transcard bg-light-red py-2">
                                        {maturity}
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="text-center">
                                    <img
                                      src={fdpic}
                                      className="img-fluid mw-220"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row px-lg-5 pt-3">
                                <div className="col-md-12 text-lg-end text-center">
                                  <a
                                    href="javascript:void(0);"
                                    className="btn-custom "
                                    onClick={() => setRequestShow(true)}
                                    type="button"
                                  >
                                    Request a call back
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section id="request-a-call-back">
                        <RequestACall
                          show={requestShow}
                          setShow={setRequestShow}
                        />
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
export default FdCalculator;
