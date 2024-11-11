import React,{useState} from "react";
import minus from "../assets/images/calculator/minus.png";
import plus from "../assets/images/calculator/add.png";
import CalculatorHeader from "../components/calculator-header";
import Select from 'react-select';
import elsspic from "../assets/images/calculator/elssc.png";
import { baseUrl } from "../request";
import Loader from "./Loader";
import axios from "axios";
import { notify } from "./toastCreater";
const ElssCalculator =()=>
 {
  const [investment, setInvestment] = useState(12500);
  const [taxSlab, setTaxSlab] = useState(5);
  const [taxTotalSaved, setTaxTotalSaved] = useState(650);
  const [loader, setLoader] = useState("none");
    const slab =[
      { value: "5", label: "5%" },
      { value: "20", label: "20%" },
      { value: "30", label: "30%" },
        ];

        const calculateElss = () => {
          if(investment && taxSlab){
            setLoader("block");     
            const data = {
              investment: investment,
              period: taxSlab,
            };
        
            axios.post(baseUrl + "/calculators/elss", data).then((res) => {
              setTaxTotalSaved(res.data.data);
              window.scrollTo(500,500);
              setLoader("none");
            });
          }else{
            notify("warn","All Fields Required")
          }
          
        };
        let incInvestment = () => {
          if (investment < 10000000) {
            setInvestment(Number(investment) + 500);
          } else if (investment == 0) {
            setInvestment(Number(investment) + 500);
          }
        };
        let decInvestment = () => {
          if (investment >= 500) {
            setInvestment(investment - 500);
          } else if (investment < 499) {
            setInvestment(0);
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

      <div className="container-fluid  px-lg-5 pb-5 calculator">
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
                            <div className="row">
                              <div className="col-md-6 text-center">
                                <label for="m-saving" className="text-label fw-500 fs-14 py-2">
                                Investment Amount<span className="text-roboto">(₹)</span>
                                </label>
                                <div className="d-flex inputf transcard">
                                  <img src={minus} alt="" className="img-fluid max-27" onClick={decInvestment}></img>
                                  <input type="text" className="form-control" name="m-saving" value={investment}
                              placeholder="0"
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 10000000
                                ) {
                                  if (e.target.value.includes(".")) {
                                    setInvestment(
                                      Math.round(parseInt(e.target.value))
                                    );
                                    console.log(
                                      "with float ",
                                      parseInt(e.target.value)
                                    );
                                  } else {
                                    setInvestment(e.target.value);
                                  }
                                } else if (e.target.value > 10000000) {
                                  setInvestment(10000000);
                                }
                              }}/>
                                  <img src={plus} alt="" className="img-fluid max-27"  onClick={incInvestment}></img>
                                </div>
                              </div>
                              <div className="col-md-6 text-center">
                                <label for="year" className="text-label fw-500 fs-14 py-2">
                                Select Your Tax Slab
                                </label>
                                <Select className='inputf transcard'  placeholder={`${taxSlab}%`} onChange={(e) => setTaxSlab(e.value)} options={slab} />
                              </div>
                            </div>
                            <div className="col-md-12 pt-2 text-lg-end text-center">
                              <button className="btn-custom mt-3" onClick={calculateElss}> Calculate</button>
                            </div>
                          </section>
                          <div className="row shadowc br-50 mx-3 p-lg-5">
                          <div className="col-md-12">
                                <div className="result-title text-center py-lg-3 pt-2">
                                        <h2>Result</h2>
                                    </div>
                                </div>
                            <div className="col-md-4">
                              <div className="result-content">
                                <ul className="text-center lst-none ps-0">
                                  <li>
                                    <div className="text-label fw-500 py-2 mt-lg-5 ">
                                      Total tax saved u/s 80(c)<span className="text-roboto">(₹)</span>
                                    </div>
                                    <div className="inputf transcard bg-light-red py-2">{taxTotalSaved}</div>
                                    <p id="cases">*Inclusive of all cess</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-8">
                             
                              <div className="text-center">
                                <img src={elsspic} className="img-fluid mw-220" alt='' />
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
export default ElssCalculator