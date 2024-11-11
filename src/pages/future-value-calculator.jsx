import React, { useState } from "react";
import minus from "../assets/images/calculator/minus.png";
import plus from "../assets/images/calculator/add.png";
import { Doughnut } from "react-chartjs-2";
import CalculatorHeader from "../components/calculator-header";
import axios from 'axios'
import { baseUrl } from "../request";
import Loader from "./Loader";
import { notify } from "./toastCreater";
const FutureValueCalculator = () => {

  const [investment, setInvestment] = useState(1000);
  const [period, setPeriod] = useState(10);
  const [expectedRateRetuen, setExpectedRateRetuen] = useState(3);
  const [lumpsums, setLumpsums] = useState('1,343');
  const [sgains, setSgains] = useState('343');
  const [resultnvestment, setResultnvestment] = useState(1000);

  const [chartPresentValue, setChartPresentValue] = useState(1343);
  const [chartGain, setChartGain] = useState('343');
  const [loader, setLoader] = useState("none");


  const data = {
    datasets: [
      {
        data: [chartPresentValue, chartGain],
        backgroundColor: ["#F06D70", "#97C5FB"],
      }
    ],
    labels: ["Present Value", "Gain"]
  }

  const lumpsumCalculate = () => {
    if(investment && period && expectedRateRetuen){
      setLoader("block");
      const data = {
        investAmount: investment,
        investmentDuration: period,
        interestRate: expectedRateRetuen
      };
  
      axios.post(baseUrl + '/calculators/lumpsum', data).then((res) => {
        console.log(res.data);
        setResultnvestment(res.data.investment)
        setLumpsums(res.data.lumpsum);
        setSgains(res.data.gains);
        window.scrollTo(500, 500);
        setLoader("none");
        let s = (res.data.investment).replace(/,/g, "")
        s = parseInt(s);
        let g = (res.data.gains).replace(/,/g, "")
        g = parseInt(g);
        setChartPresentValue(s);
        setChartGain(g);
        console.log("sadsadasd");
  
      })
    }else{
      notify("warn","All Fields Requird")
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

  let incPeriod = () => {
    if (period < 50) {
      setPeriod(Number(period) + 1);
    }
  };
  let decPeriod = () => {
    if (period > 1) {
      setPeriod(period - 1);
    }
  }

  let incExpectedRateRetuen = () => {
    if (isNaN(expectedRateRetuen)) {
      return setExpectedRateRetuen(0)
    }
    if (expectedRateRetuen < 50) {
      setExpectedRateRetuen(Number(expectedRateRetuen) + .5);
    }
  };
  let decExpectedRateRetuen = () => {
    if (expectedRateRetuen > 1) {
      setExpectedRateRetuen(expectedRateRetuen - .5);
    }
  }


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
                                <div className="row">
                                  <div className="col-md-4 text-center">
                                    <label for="m-saving"
                                      className="text-label fw-500 py-2">
                                      Investment<span className="text-roboto">(₹)</span>
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img src={minus} alt="" onClick={decInvestment}
                                        className="img-fluid max-27"></img>
                                      <input type="text" className="form-control" value={investment} onChange={(e) => {
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
                                        name="m-saving" placeholder="200" />
                                      <img src={plus} alt=""
                                        className="img-fluid max-27" onClick={incInvestment}></img>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <label for="year"
                                      className="text-label fw-500 py-2">
                                      Period (Years)
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img src={minus} alt="" onClick={decPeriod}
                                        className="img-fluid max-27"></img>
                                      <input type="text" className="form-control" value={period} onChange={(e) => {
                                        if (e.target.value >= 0 && e.target.value <= 50) {
                                          if (e.target.value.includes('.')) {
                                            setPeriod(Math.round(parseInt(e.target.value)))
                                            console.log("with float ", parseInt(e.target.value));
                                          } else {
                                            setPeriod(e.target.value)
                                          }
                                        }
                                        else if (e.target.value > 50) {
                                          setPeriod(50)

                                        }
                                      }}
                                        name="year" placeholder="5" />
                                      <img src={plus} alt="" onClick={incPeriod}
                                        className="img-fluid max-27"></img>
                                    </div>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <label for="return"
                                      className="text-label fw-500 py-2">
                                      Expected Rate of Return (% p.a)
                                    </label>
                                    <div className="d-flex inputf transcard">
                                      <img src={minus} alt="" onClick={decExpectedRateRetuen}
                                        className="img-fluid max-27"></img>
                                      <input type="text" className="form-control" value={expectedRateRetuen}
                                        name="return" placeholder="7" onChange={(e) => {
                                          if (e.target.value >= 0 && e.target.value <= 50) {
                                            if (e.target.value.includes('.')) {
                                              let a = parseFloat(e.target.value)
                                              setExpectedRateRetuen(parseFloat((a).toFixed(2)))
                                              console.log("with float ", parseFloat(e.target.value));
                                            } else {
                                              console.log("with int ", parseInt(e.target.value))
                                              let a = parseInt(e.target.value)
                                              setExpectedRateRetuen(parseInt(a))
                                            }
                                          }
                                          else {
                                            setExpectedRateRetuen(50)
                                          }
                                        }} />
                                      <img src={plus} alt="" onClick={incExpectedRateRetuen}
                                        className="img-fluid max-27"></img>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12 pt-2 mt-1 text-lg-end text-center">
                                  <button className="btn-custom mt-3" onClick={lumpsumCalculate}> Calculate</button>
                                </div>
                              </section>
                              <div className="row shadowc  br-50 mx-3 ">
                                <div className="col-md-4">
                                  <div className="result-content result-content-shadow">
                                    <ul className="text-center lst-none ps-0">
                                      <li>
                                        <div
                                          className="text-label fw-500 py-2">
                                          Present Value<span className="text-roboto">(₹)</span>
                                        </div>
                                        <div
                                          className="inputf transcard bg-white py-2">
                                          {resultnvestment}
                                        </div>
                                      </li>
                                      <li>
                                        <div
                                          className="text-label fw-500 py-2">
                                          Gain<span className="text-roboto">(₹)</span>
                                        </div>
                                        <div
                                          className="inputf transcard bg-white py-2">
                                          {sgains}
                                        </div>
                                      </li>
                                      <li>
                                        <div
                                          className="text-label fw-500 py-2">
                                          Future Value<span className="text-roboto">(₹)</span>
                                        </div>
                                        <div
                                          className="inputf transcard bg-white py-2">
                                          {lumpsums}
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-md-8  pt-5">
                                  <div className="result-title text-center">
                                    <h2>Result</h2>
                                  </div>
                                  <div className="d-flex justify-content-center">
                                    <div className="pt-4 future">
                                      <Doughnut data={data} />
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
export default FutureValueCalculator