import React, { useState } from "react";
import minus from "../assets/images/calculator/minus.png";
import plus from "../assets/images/calculator/add.png";
import CalculatorHeader from "../components/calculator-header";
import { Doughnut } from "react-chartjs-2";
import RequestACall from "../components/request-a-call-back";
import { baseUrl } from "../request";
import Loader from "./Loader";
import axios from "axios";
import { notify } from "./toastCreater";
const EmiCalculator = () => {
  const [requestShow, setRequestShow] = useState(false);
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(10);
  const [totalAmount, setTotalAmount] = useState("15,85,800");
  const [totalIntrest, setTotalIntrest] = useState("5,85,800");
  const [loan, setLoan] = useState("10,00,000");
  const [emi, setEmi] = useState("13,215");
  const [chartTotalIntrest, setChartTotalIntrest] = useState(585800);
  const [chatPrincipleAmount, setChartPrincipleAmount] = useState(1000000);
  const [loader, setLoader] = useState("none");

  const data1 = {
    datasets: [
      {
        data: [chartTotalIntrest, chatPrincipleAmount],
        backgroundColor: ["#F06D70", "#97C5FB"],
      },
    ],
    labels: ["Total Interest", "Principle Amount"],
  };

  
  const loanEMiCalculater = () => {
    if(loanAmount && interestRate && tenure){
      setLoader("block");

      const data = {
        loanAmount: loanAmount,
        interestRate: interestRate,
        tenure: tenure,
      };
  
      axios.post(baseUrl + "/calculators/emi", data).then((res) => {
        setEmi(res.data.monthlyEmiAmount);
        setLoan(res.data.principalAmount);
        setTotalIntrest(res.data.totalInterest);
        setTotalAmount(res.data.totalAmount);
  
        window.scrollTo(500,500);
        setLoader("none");
        let s = res.data.totalInterest.replace(/,/g, "");
        s = parseInt(s);
        let g = res.data.principalAmount.replace(/,/g, "");
        g = parseInt(g);
        setChartTotalIntrest(s);
        setChartPrincipleAmount(g);
  
      });
    }else{
      notify("warn","All Fields Required")
    }
   
  };

  let incLoanAmount = () => {
    if (loanAmount < 50000000) {
      setLoanAmount(Number(loanAmount) + 500);
    } else if (loanAmount == 0) {
      setLoanAmount(Number(loanAmount) + 500);
    }
  };
  let decLoanAmount = () => {
    if (loanAmount >= 500) {
      setLoanAmount(loanAmount - 500);
    } else if (loanAmount < 499) {
      setLoanAmount(0);
    }
  };

  let incInterestRate = () => {
    if (isNaN(interestRate)) {
      return setInterestRate(0);
    }
    if (interestRate < 50) {
      setInterestRate((parseFloat(interestRate) + 0.05).toFixed(2));
      // console.log(interestRate);
    }
  };
  let decInterestRate = () => {
    if (interestRate > 1) {
      setInterestRate((parseFloat(interestRate) - 0.05).toFixed(2));
    }
  };

  let incTenure = () => {
    if (tenure < 50) {
      setTenure(Number(tenure) + 0.5);
    }
  };
  let decTenure = () => {
    if (tenure > 1) {
      setTenure(tenure - 0.5);
    }
  };
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
                                  <div className="col-md-4 text-center">
                                    <label
                                      for="m-saving"
                                      className="text-label fw-500 py-2 fs-14"
                                    >
                                      Enter loan amount
                                      <span className="text-roboto">(₹)</span>
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img
                                        src={minus}
                                        alt=""
                                        className="img-fluid max-27"   onClick={decLoanAmount}
                                      ></img>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="m-saving"
                                        value={loanAmount}
                                        placeholder="0"
                                        onChange={(e) => {
                                          if (
                                            e.target.value >= 0 &&
                                            e.target.value <= 50000000
                                          ) {
                                            if (e.target.value.includes(".")) {
                                              setLoanAmount(
                                                Math.round(parseInt(e.target.value))
                                              );
                                              console.log(
                                                "with float ",
                                                parseInt(e.target.value)
                                              );
                                            } else {
                                              setLoanAmount(e.target.value);
                                            }
                                          } else if (e.target.value > 50000000) {
                                            setLoanAmount(50000000);
                                          }
                                        }}
                                      />
                                      <img
                                        src={plus}
                                        alt=""
                                        className="img-fluid max-27"  onClick={incLoanAmount}
                                      ></img>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <label
                                      for="year"
                                      className="text-label fw-500 py-2 fs-14"
                                    >
                                      Enter Interest rate (%)
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
                                        value={interestRate}
                                        placeholder="0"
                                        onChange={(e) => {
                                          if (
                                            e.target.value >= 0 &&
                                            e.target.value <= 50
                                          ) {
                                            if (e.target.value.includes(".")) {
                                              let a = parseFloat(e.target.value);
                                              setInterestRate(parseFloat(a.toFixed(2)));
                                            
                                            } else {
                                              console.log(
                                                "with int ",
                                                parseInt(e.target.value)
                                              );
                                              let a = parseInt(e.target.value);
                                              setInterestRate(parseInt(a));
                                            }
                                          } else {
                                            setInterestRate(50);
                                          }
                                        }}
                                      />
                                      <img
                                        src={plus}
                                        alt=""
                                        className="img-fluid max-27"onClick={incInterestRate}
                                      ></img>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <label
                                      for="return"
                                      className="text-label fw-500 py-2 fs-14"
                                    >
                                      Tenure (years)
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img
                                        src={minus}
                                        alt=""
                                        className="img-fluid max-27" onClick={decTenure}
                                      ></img>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="return"
                                        value={tenure}
                                        placeholder="0"
                                        onChange={(e) => {
                                          if (
                                            e.target.value >= 0 &&
                                            e.target.value <= 50
                                          ) {
                                            if (e.target.value.includes(".")) {
                                              setTenure(
                                                Math.round(parseInt(e.target.value))
                                              );
                                              console.log(
                                                "with float ",
                                                parseInt(e.target.value)
                                              );
                                            } else {
                                              setTenure(e.target.value);
                                            }
                                          } else if (e.target.value > 50) {
                                            setTenure(50);
                                          }
                                        }}
                                      />
                                      <img
                                        src={plus}
                                        alt=""
                                        className="img-fluid max-27" onClick={incTenure}
                                      ></img>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12 pt-2 text-lg-end text-center">
                                  <button className="btn-custom mt-3" onClick={loanEMiCalculater}>
                                    
                                    Calculate
                                  </button>
                                </div>
                              </section>
                              <div className="row shadowc br-50 mx-lg-3 mx-3">
                                <div className="col-md-4">
                                  <div className="result-content result-content-shadow">
                                    <ul className="text-center ps-0 lst-none">
                                      <li>
                                        <div className="text-label fw-500 py-2">
                                          EMI
                                          <span className="text-roboto">
                                            (₹)
                                          </span>
                                        </div>
                                        <div className="inputf transcard bg-white py-2">
                                        {emi}
                                        </div>
                                      </li>
                                      <li>
                                        <div className="text-label fw-500 py-2">
                                          Principal
                                          <span className="text-roboto">
                                            (₹)
                                          </span>
                                        </div>
                                        <div className="inputf transcard bg-white py-2">
                                        {loan}
                                        </div>
                                      </li>
                                      <li>
                                        <div className="text-label fw-500 py-2">
                                          Total Interest
                                          <span className="text-roboto">
                                            (₹)
                                          </span>
                                        </div>
                                        <div className="inputf transcard bg-white py-2">
                                        {totalIntrest}
                                        </div>
                                      </li>
                                      <li>
                                        <div className="text-label fw-500 py-2">
                                          Total Amount
                                          <span className="text-roboto">
                                            (₹)
                                          </span>
                                        </div>
                                        <div className="inputf transcard bg-white py-2">
                                        {totalAmount}
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-8  py-lg-5 pt-3">
                                  <div className="result-title text-center">
                                    <h2>Result</h2>
                                  </div>
                                  <div className="d-flex justify-content-center">
                                    <div className="pt-4 future">
                                      <Doughnut data={data1} />
                                    </div>
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
export default EmiCalculator;
