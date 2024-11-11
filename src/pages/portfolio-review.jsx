import React ,{useState}from "react";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import RedemptionConfirm from "../components/redemption-confirm-pr";
import SwitchConfirm from "../components/switch-confirm-pr";
import UnderwatchConfirm from "../components/underwatch-pr";
import SatisfactoryperformanceConfirm from "../components/satisfactory-performance-pr";
const PortfolioReview =()=>
{

  const [switchshow,setSwitchShow] =useState(false);
  const [redemptionshow,setRedemptionShow] =useState(false);
   const [Underwatchshow,setUnderwatchShow] =useState(false);
   const [Satisfactoryshow,setSatisfactoryShow] =useState(false);
        const data = {
          // labels: ["Equity", "Debt", "Gold"],
          datasets: [
            {
              data: [30, 50, 20,60],
              backgroundColor: ["#97C5FB", "#F06D70", "#FBDE80", "#8BC24A"],
            },
          ],
        };
    return(

        <>
        <div className="wrapper portfolio-review">
        <div className="px-lg-5 px-2 pe-5">
      
      {/* Page Heading */}
      <nav aria-label="breadcrumb">
          <ol className="breadcrumb ps-3">
            <li className="breadcrumb-item"><Link to="home">Home</Link></li>
            <li className="breadcrumb-item active">Portfolio Review</li>
          </ol>
        </nav>
     
        <section className="mb-5">

        <div className="container p-smc-0">
         
            <div className="row justify-content-center">
              <div className="col-md-5 box py-3 rounded">
<div className="row">
              
            <div className="col-md-4 text-center">  
            <h6 className="text-red">Shivam Shrivastav</h6>
            <Doughnut data={data} />                      
            </div>
           
            <div className="col-md-6  align-self-center mt-5 ms-lg-5 ms-3">
             <div className="mb-1">
            <a  href="javascript:void(0);"  onClick={() => setRedemptionShow(true)} className="text-black" >  <span className="redemption circle"></span>Redemption <span> <FaChevronRight className="text-red"/> </span></a>
             </div>
             <div className="mb-1">
            <a href="javascript:void(0);"  onClick={() => setUnderwatchShow(true)} className="text-black">  <span className="underwatch circle"></span>Underwatch <span> <FaChevronRight className="text-red"/> </span></a>
             </div>
             <div className="mb-1">
            <a href="javascript:void(0);"  onClick={() => setSwitchShow(true)} className="text-black">  <span className="switch circle"></span>Switch <span> <FaChevronRight className="text-red"/> </span></a>
             </div>
             <div className="mb-1">
            <a href="javascript:void(0);"  onClick={() => setSatisfactoryShow(true)} className="text-black">  <span className="satisfactory circle"></span>Satisfactory performance <span> <FaChevronRight className="text-red"/> </span></a>
             </div>


             </div>

            </div>
          </div>
          </div>

          {/* 2 */}
          <div className="row justify-content-center mt-4">
              <div className="col-md-5 box py-3 rounded">
<div className="row">
              
            <div className="col-md-4 text-center">  
            <h6 className="text-red">Shivam Shrivastav</h6>
            <Doughnut data={data} />                      
            </div>
           
            <div className="col-md-6  align-self-center mt-5 ms-lg-5 ms-3">
             <div className="mb-1">
            <a  className="text-black"  href="javascript:void(0);"  onClick={() => setRedemptionShow(true)}>  <span className="redemption circle"></span>Redemption <span> <FaChevronRight className="text-red"/> </span></a>
             </div>
             <div className="mb-1">
            <a href="javascript:void(0);"  onClick={() => setUnderwatchShow(true)} className="text-black">  <span className="underwatch circle"></span>Underwatch <span> <FaChevronRight className="text-red"/> </span></a>
             </div>
             <div className="mb-1">
            <a href="javascript:void(0);"  onClick={() => setSwitchShow(true)} className="text-black">  <span className="switch circle"></span>Switch <span> <FaChevronRight className="text-red"/> </span></a>
             </div>
             <div className="mb-1">
            <a href="javascript:void(0);"  onClick={() => setSatisfactoryShow(true)} className="text-black">  <span className="satisfactory circle"></span>Satisfactory performance <span> <FaChevronRight className="text-red"/> </span></a>
             </div>


             </div>

            </div>
          </div>
          </div>
         
        </div>
      </section>
      <RedemptionConfirm show={redemptionshow} setShow={setRedemptionShow}/>
      <SwitchConfirm show={switchshow} setShow={setSwitchShow}/>
      <UnderwatchConfirm show={Underwatchshow} setShow={setUnderwatchShow} />
      <SatisfactoryperformanceConfirm show={Satisfactoryshow} setShow={setSatisfactoryShow}/>
        </div>
        </div>
       
        </>
    )
}
export default PortfolioReview