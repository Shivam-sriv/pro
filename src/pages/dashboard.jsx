import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Link, useNavigate } from "react-router-dom";
import nfo from "../assets/images/others/nfo.png";
import portr from "../assets/images/others/portr.png";
import simplysip from "../assets/images/others/simplysip.png";
import simplysave from "../assets/images/others/simplysave.png";
import car from "../assets/images/goal/dash/purchase.png";
import vacation from "../assets/images/goal/dash/sunbed.png";
import home from "../assets/images/goal/dash/renovation.png";
import wealth from "../assets/images/goal/dash/money.png";
import marriage from "../assets/images/goal/dash/wedding-couple.png";
import othergoals from "../assets/images/goal/dash/othergoals.png";
import retirement from "../assets/images/goal/dash/retirement.png";
import child from "../assets/images/goal/dash/education.png";
import house from "../assets/images/goal/dash/discount.png";
import quant2 from "../assets/images/banklogo/quant2.png";
import taxp from "../assets/images/others/taxs.png";
import calculator from "../assets/images/others/calculator.png";
import reportsp from "../assets/images/others/seo-report.png";
import getright from "../assets/images/others/infographic.png";
// import rupee from "../assets/images/banklogo/rupee.png";
import pgim from "../assets/images/banklogo/pgim.png";
import boi from "../assets/images/banklogo/boi.png";
import canera from "../assets/images/banklogo/Canera1.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import QuickInvest from "../components/quick-invest";
import Invest_Lumpsum from "../components/invest-lumpsum";
import Invest_Sip from "../components/invest-sip";
import ReportsMobile from "../components/reports-for-mobile";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { familySnapshot, familyWisePortfolio, detailedPortfolio } from "../apisMethods";
import { notify } from "./toastCreater";
import Loader from "./Loader";



const fade = cssTransition({
  enter: "animate__animated animate__fadeIn animate__slow",
  exit: "animate__animated animate__fadeOut animate__slow",
});

// const defaultSnapshot = {
//   Totalpurchase: "18999.08",
// Totalmarketvalue: 20331,
// Finaldays: 82,
// Finalcagr: "31.23",
// Totaldayschange: 90,
// Gainloss: 1332,
// debtPercentFinal: "0.00",
// goldPercentFinal: "0.00",
// equityPercentFinal: "100.00",
// Dividend: 0}
const Dashboard = () => {
  const [quickinvestShow, setQuickInvestShow] = useState(false);
  const [sipinShow, setSipInShow] = useState(false);
  const [lumpsuminShow, setLumpsumInShow] = useState(false);
  const [reports, setReports] = useState(false);
  const [snapshotData, setSnapshotData] = useState({});
  const [familyWiseData, setFamilyWiseData] = useState([]);
  const [userDataLocalStoarge, setUserDataLocalStoarge] = useState({});
  const [headers, setHeaders] = useState({});
  const [loader, setLoader] = useState("none");

  const navigate = useNavigate()

  const notify1 = () => {
    toast.success("Success", {
      position: toast.POSITION.BOTTOM_RIGHT,
      transition: fade,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };
  useEffect(() => {
    setTimeout(()=>{
      let token = localStorage.getItem("token");
      const header = { headers: { Authorization: `Bearer ${token}` } };
      setHeaders(header)
      const userdata = JSON.parse(localStorage.getItem("user"));
      console.log(userdata,header);
        setUserDataLocalStoarge(userdata);
        setHeaders(header)
        familySnapshopCall(userdata?.pan, header)
        familyWisePortfolioCall(userdata?.pan, header)
    },400)
    

  }, [])

  const familySnapshopCall = (pan, headers) => {
    setLoader("block")
    familySnapshot({ pan }, headers).then((res) => {
      if (!res.data) {
        // setSnapshotData(defaultSnapshot)
      } else {
        setSnapshotData(res.data?.finalArray)
        console.log("snapshot", res.data)
      }
    })
    setLoader("none")
  }
  const familyWisePortfolioCall = (pan, headers) => {
    familyWisePortfolio({ pan }, headers).then((res) => {
      if (!res.data) {
      } else {
        setFamilyWiseData(res.data?.finalArray)
        localStorage.setItem("userFamily", JSON.stringify(res.data?.finalArray));

        console.log("snapshotfamily", res.data.finalArray)
      }
    })
  }

  const goToReviewData = (pan, gpan, userId, applicantName) => {

    navigate("/dashboard/portfolio", { state: { pan, gpan, userId, name:applicantName } })
  }
  const data = {
    labels: ["Equity", "Debt", "Gold"],
    datasets: [
      {
        data: [snapshotData?.equityPercentFinal, snapshotData?.debtPercentFinal, snapshotData?.goldPercentFinal],
        backgroundColor: ["#97C5FB", "#F06D70", "#FBDE80"],
      },
    ],
  };
  return (
    <>
      <div className="wrapper home-page">
        <div className="">
          <div className="container px-lg-0">
            {/* assets allocation */}
            <section>
              <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12">
                  <div className="portfolio-s p-portfolio">
                    <div className="row">
                      <div className="col-md-6 col-sm-12 py-3 ">
                        <div className="row">
                          <div className="col-md-12">
                            <h5 className="text-label">Market Value</h5>
                            <h3>
                              <span className="text-roboto">₹</span>
                              <span className="lc text-black">{snapshotData?.Totalmarketvalue || 0}</span>
                            </h3>
                            <hr className="border-bottom" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6 border-right">
                            <span className="text-label fs-16">
                              Purchase Cost
                            </span>
                            <br />
                            <h5>
                              <span className="text-roboto">₹</span>
                              <span className="lc text-black">{snapshotData?.Totalpurchase || 0}</span>
                            </h5>
                          </div>
                          <div className="col-6">
                            <span className="fs-16 pb-2 text-label">
                              GAIN/LOSS
                            </span>
                            <br />
                            <span className="lc text-black">
                              {snapshotData?.Gainloss > 0 ? <div>{snapshotData?.Gainloss} <span className="fa fa-arrow-up text-successc"></span></div> : <div>{snapshotData?.Gainloss || 0} <span className="fa fa-arrow-down text-red"></span></div>}
                            </span>
                          </div>
                        </div>
                        <hr className="border-bottom" />
                        <div className="row">
                          <div className="col-4 border-right">
                            <span className=" fs-16 text-label">Dividend</span>
                            <br />
                            <h5>
                              <span className="text-black">{snapshotData?.Dividend || 0}</span>
                            </h5>
                          </div>
                          <div className="col-5 border-right">
                            <span className="fs-16 pb-2  text-label">
                              Day's Change
                            </span>
                            <br />
                            <span className="text-black">
                              {snapshotData?.Totaldayschange > 0 ? <div>{snapshotData?.Totaldayschange} <span className="fa fa-arrow-up text-successc"></span></div> : <div>{snapshotData?.Totaldayschange || 0} <span className="fa fa-arrow-down text-red"></span></div>}

                            </span>
                          </div>
                          <div className="col-3">
                            <span className="fs-16 pb-2  text-label">CAGR</span>
                            <br />
                            <span className="text-black">{snapshotData?.Finalcagr || 0}  %</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 pt-2 text-center">
                        <Doughnut data={data} />
                        <h5 className="pt-3 text-center text-label">
                          Asset Allocation
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4  col-md-12 ">
                  <div className="quick-invest mt-smc-2  ">
                    <div className="quick-access-title mt-1">
                      <h3 className="fs-21">Quick Invest</h3>
                    </div>
                    <Link to="#" className="text-decoration-none" type="button">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="quick-c py-3">
                            Avoid the hassle and Deploy your funds in less than
                            a Minute !
                          </div>
                          <button
                            className="btn-custom my-4"
                            onClick={() => setQuickInvestShow(true)}
                          >
                            Invest Now
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            {/* ====================family Porfolio====================== */}
            <section className="family-portfolio-s pt-4">
              <div className="py-4">
                <h3 className="fs-21 text-brown">Family Portfolio</h3>
              </div>
              <div className="family-portfolio table-responsive">
                <table className="table custom text-center bg-gray rounded">
                  <tr className="text-red">
                    <th className="wd-8rem">Name</th>
                    <th className="wd-8rem">
                      Purchase Cost <span className="text-roboto">(₹)</span>
                    </th>
                    <th className="wd-8rem">
                      Market Value<span className="text-roboto">(₹)</span>
                    </th>
                    <th>Gain/Loss</th>
                    <th>CAGR(%)</th>
                  </tr>
                  {familyWiseData && familyWiseData.map((data) => {
                    return <tr>
                      <td onClick={() => goToReviewData(data?.Pan, data?.Gpan, data?.userid, data?.Name)} className="underline curser">
                        {/* <Link to="/dashboard/portfolio" className="underline"> */}
                        {data?.Name}
                        {/* </Link> */}
                      </td>
                      <td>{data?.Totalpurchase}</td>
                      <td>{data?.TotalMarketValue}</td>
                      <td>

                        {data?.Gainloss > 0 ? <div>{data?.Gainloss} <span className="fa fa-arrow-up text-successc"></span></div> : <div>{data?.Gainloss} <span className="fa fa-arrow-down text-red"></span></div>}
                      </td>
                      <td>{data?.Cagr}</td>
                    </tr>
                  })}

                </table>
              </div>
            </section>
            {/*================= Quick access============ */}
            <section className="quick-access  pt-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="quick-access-title pb-4">
                    <h3 className="fs-21 text-brown">Quick Access</h3>
                  </div>
                </div>
              </div>
              <div className="row d-smc-none d-tab-none">
                <div className="col-lg-3 col-6">
                  <div className="quick-card">
                    <Link
                      className="quick-link"
                      to="/dashboard/portfolio-review"
                    >
                      <img src={portr} className="me-2 new-icon" alt="" />
                      <span>Portfolio Review</span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="quick-card">
                    <Link className="quick-link" to="/dashboard/nfo-live">
                      <img src={nfo} className="me-2 new-icon" alt="" />
                      <span>NFO Live</span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="quick-card">
                    <Link className="quick-link" to="/dashboard/simply-sip">
                      <img
                        src={simplysip}
                        className="me-2 img-fluid new-icon"
                        alt=""
                      />
                      <span>Simply Sip</span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="quick-card">
                    <Link className="quick-link" to="/dashboard/simply-save">
                      <img
                        src={simplysave}
                        className="me-2 img-fluid new-icon"
                        alt=""
                      />
                      <span>Simply Save</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row d-lg-none access">
                <div className="col-6">
                  <div className="quick-card mt-smc-2   mt-lg-0">
                    <Link className="quick-link" to="/dashboard/simply-sip">
                      <img
                        src={simplysip}
                        className="me-2 img-fluid new-icon"
                        alt=""
                      />
                      <span>Simply Sip</span>
                    </Link>
                  </div>
                </div>
                <div className="col-6">
                  <div className="quick-card mt-smc-2   mt-lg-0">
                    <Link className="quick-link" to="/dashboard/simply-save">
                      <img
                        src={simplysave}
                        className="me-2 img-fluid new-icon"
                        alt=""
                      />
                      <span>Simply Save</span>
                    </Link>
                  </div>
                </div>
                <div className="col-6">
                  <div className="quick-card mt-smc-2   mt-lg-0">
                    <Link className="quick-link" to="/dashboard/tax-planning">
                      <img
                        src={taxp}
                        className="me-2 img-fluid new-icon"
                        alt=""
                      />
                      <span>Tax Planning</span>
                    </Link>
                  </div>
                </div>
                <div className="col-6">
                  <div className="quick-card mt-smc-2   mt-lg-0">
                    <Link
                      className="quick-link"
                      to="/dashboard/get-right-scheme"
                    >
                      <img
                        src={getright}
                        className="me-2 img-fluid new-icon"
                        alt=""
                      />
                      <span>Get Right Scheme</span>
                    </Link>
                  </div>
                </div>
                <div className="col-6">
                  <Link className="quick-link" to="/dashboard/nfo-live">
                    <div className="quick-card mt-smc-2   mt-lg-0">
                      <img src={nfo} className="me-2 new-icon" alt="" />
                      <span>NFO Live</span>
                    </div>
                  </Link>
                </div>
                <div className="col-6">
                  <div className="quick-card mt-smc-2   mt-lg-0">
                    <Link
                      className="quick-link"
                      to="/dashboard/portfolio-review"
                    >
                      <img src={portr} className="me-2 new-icon" alt="" />
                      <span>Portfolio Review</span>
                    </Link>
                  </div>
                </div>
                <div className="col-6">
                  <div className="quick-card mt-smc-2   mt-lg-0">
                    <Link className="quick-link" to="/dashboard/sip-calculator">
                      <img
                        src={calculator}
                        className="me-2 img-fluid new-icon"
                        alt=""
                      />
                      <span>Calculators</span>
                    </Link>
                  </div>
                </div>
                <div className="col-6">
                  <div className="quick-card mt-smc-2   mt-lg-0">
                    <Link
                      className="quick-link"
                      to="#"
                      onClick={() => setReports(true)}
                    >
                      <img
                        src={reportsp}
                        className="me-2 img-fluid new-icon"
                        alt=""
                      />
                      <span>Reports</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            {/* =============Goal Planning============ */}
            <section className="goal-plan">
              <div className="row">
                <div className="col-md-12">
                  <div className=" pb-5 pt-5">
                    <h3 className="fs-21 text-brown">Goal Planning</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1 col-6 col-md-2 col-md-2 ms-0">
                  <Link
                    className=" bg-white goal-link"
                    to="/dashboard/retirement-goal"
                  >
                    <div className="goal-card text-center">
                      <img
                        src={retirement}
                        className="mx-3 new-icon bg-c p-3"
                        alt=""
                      />
                      <br />
                      <h4 className="pt-4">Retirement</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-1 col-6 col-md-2">
                  <Link
                    className="bg-white goal-link"
                    to="/dashboard/child-education-goal"
                  >
                    <div className="goal-card text-center">
                      <img
                        src={child}
                        className="mx-3 new-icon bg-c p-3"
                        alt=""
                      />
                      <h4 className="pt-4">Child Education</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-1 col-6 col-md-2">
                  <Link
                    className="bg-white goal-link"
                    to="/dashboard/house-purchase-goal"
                  >
                    <div className="goal-card text-center">
                      <img
                        src={house}
                        className="mx-3 new-icon bg-c p-3"
                        alt=""
                      />
                      <h4 className="pt-4">House Purchase</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-1 col-6 col-md-2">
                  <Link
                    className="bg-white goal-link"
                    to="/dashboard/car-purchase-goal"
                  >
                    <div className="goal-card text-center">
                      <img
                        src={car}
                        className="mx-3 new-icon bg-c p-3"
                        alt=""
                      />
                      <h4 className="pt-4">Car Purchase</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-1 col-6 col-md-2">
                  <Link
                    className="bg-white goal-link"
                    to="/dashboard/wealth-creation-goal"
                  >
                    <div className="goal-card text-center">
                      <img
                        src={wealth}
                        className="mx-3 new-icon bg-c p-3"
                        alt=""
                      />
                      <h4 className="pt-4">Wealth Creation</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-1 col-6 col-md-2">
                  <Link
                    className="bg-white goal-link"
                    to="/dashboard/home-renovetion-goal"
                  >
                    <div className="goal-card text-center">
                      <img src={home} className="mx-3 new-icon bg-c p-3" />
                      <h4 className="pt-4">Home Renovation</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-1 col-6 col-md-2">
                  <Link
                    className=" bg-white goal-link"
                    to="/dashboard/vacation-goal"
                  >
                    <div className="goal-card text-center">
                      <img src={vacation} className="mx-3 new-icon bg-c p-3" />
                      <h4 className="pt-4">Vacation</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-1 col-6 col-md-2">
                  <Link
                    className="bg-white goal-link "
                    to="/dashboard/child-marriage-goal"
                  >
                    <div className="goal-card text-center">
                      <img src={marriage} className="mx-3 new-icon bg-c p-3" />
                      <h4 className="pt-4">Child Marriage</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-1 col-12 col-md-2">
                  <Link
                    className="bg-white goal-link "
                    to="/dashboard/customize-goal"
                  >
                    <div className="goal-card text-center">
                      <img
                        src={othergoals}
                        className="mx-3 new-icon bg-c p-3"
                      />
                      <h4 className="pt-4">Customize Goal</h4>
                    </div>
                  </Link>
                </div>
              </div>
            </section>
            {/* =============All mutual funds Section=============== */}
            <section className="all-mf-s">
              <div className="row  justify-content-center">
                <div className="col-md-12">
                  <div className=" pb-5 pt-5">
                    <h3 className="fs-21 text-brown">Scheme Performance</h3>
                  </div>
                </div>
                {/* =============Tabs for mf================ */}
                <Tabs>
                  <div className="col-md-12  offset-lg-2 col-lg-8 filter-all-mf">
                    <TabList className="border-0 p-0">
                      <Tab>Equity</Tab>
                      <Tab>Tax Saving</Tab>
                      <Tab>Hybrid</Tab>
                      <Tab>Debt</Tab>
                    </TabList>
                  </div>
                  <div className="row">
                    <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4 py-4">
                      <Tabs>
                        <TabList className="tablist">
                          <Tab>Short Term</Tab>
                          <Tab>Long Term</Tab>
                        </TabList>
                      </Tabs>
                    </div>
                  </div>
                  <TabPanel>
                    <div className="overflow-auto">
                      <table className="table custom text-center outline">
                        <thead>
                          <tr className="bg-gray">
                            <th></th>
                            <th className="schemew">Scheme Name</th>
                            <th>1Y Return</th>
                            <th>3Y Return</th>
                            <th>5Y Return</th>
                            <th>7Y Return</th>
                            <th className="schemew"></th>
                          </tr>
                        </thead>
                        <tr>
                          <td>

                            <img src={quant2} alt="" className="maxw9" />
                          </td>
                          <td className="">
                            Quant Small Cap Fund Direct Plan Growth
                          </td>
                          <td className="">37.54%</td>
                          <td className="">37.54%</td>
                          <td className="">37.54%</td>
                          <td className="">37.54%</td>
                          <td>
                            <Link
                              to="#"
                              onClick={() => setSipInShow(true)}
                              className="btn-outline"
                            >
                              Invest
                            </Link>
                            <Link
                              className="btn-outline ms-2"
                              to="/dashboard/scheme-performance"
                              type="button"
                            >
                              Add To Cart
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>

                            <img src={quant2} alt="" className="maxw9" />
                          </td>
                          <td className="">
                            Quant Small Cap Fund Direct Plan Growth
                          </td>
                          <td>37.54%</td>
                          <td>37.54%</td>
                          <td>37.54%</td>
                          <td>37.54%</td>
                          <td>
                            <Link
                              to="#"
                              onClick={() => setLumpsumInShow(true)}
                              className="btn-outline"
                            >
                              Invest
                            </Link>
                            <Link
                              className="btn-outline ms-2"
                              to=""
                              type="button"
                              onClick={notify1}
                            >
                              Add To Cart
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>

                            <img src={quant2} alt="" className="maxw9" />
                          </td>
                          <td className="">
                            Quant Small Cap Fund Direct Plan Growth
                          </td>
                          <td>37.54%</td>
                          <td>37.54%</td>
                          <td>37.54%</td>
                          <td>37.54%</td>
                          <td>
                            <a
                              className="btn-outline"
                              href="javascript:void(0);"
                              data-target="#invest-sip"
                              data-toggle="modal"
                              type="button"
                            >
                              Invest
                            </a>
                            <Link
                              className="btn-outline ms-2"
                              to=""
                              type="button"
                            >
                              Add To Cart
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>

                            <img src={quant2} alt="" className="maxw9" />
                          </td>
                          <td className="">
                            Quant Small Cap Fund Direct Plan Growth
                          </td>
                          <td>37.54%</td>
                          <td>37.54%</td>
                          <td>37.54%</td>
                          <td>37.54%</td>
                          <td>
                            <a
                              className="btn-outline"
                              href="javascript:void(0);"
                              data-target="#invest-sip"
                              data-toggle="modal"
                              type="button"
                            >
                              Invest
                            </a>
                            <Link
                              className="btn-outline ms-2"
                              to=""
                              type="button"
                            >
                              Add To Cart
                            </Link>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="overflow-auto">
                      <table className="table text-center custom outline">
                        <thead>
                          <tr className="bg-gray">
                            <th></th>
                            <th className="schemew">Scheme Name</th>
                            <th>1Y Return</th>
                            <th>3Y Return</th>
                            <th>5Y Return</th>
                            <th>7Y Return</th>
                            <th className="schemew"></th>
                          </tr>
                        </thead>
                        <tr>
                          <td>

                            <img src={pgim} alt="" className="maxw9" />
                          </td>
                          <td className="">
                            PGMI India Midcap Opportunities Fund Direct Growth
                          </td>
                          <td className="">27.54%</td>
                          <td className="">27.54%</td>
                          <td className="">27.54%</td>
                          <td className="">27.54%</td>
                          <td>
                            <a
                              className="btn-outline"
                              href="javascript:void(0);"
                              data-target="#invest-sip"
                              data-toggle="modal"
                              type="button"
                            >
                              Invest
                            </a>
                            <Link
                              className="btn-outline ms-2"
                              to="/prodigydesign/portfolio/scheme-performance"
                              type="button"
                            >
                              Add To Cart
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>

                            <img src={pgim} alt="" className="maxw9" />
                          </td>
                          <td className="">
                            PGMI India Midcap Opportunities Fund Direct Growth
                          </td>
                          <td>27.54%</td>
                          <td>27.54%</td>
                          <td>27.54%</td>
                          <td>27.54%</td>
                          <td>
                            <a
                              className="btn-outline"
                              href="javascript:void(0);"
                              data-target="#invest-sip"
                              data-toggle="modal"
                              type="button"
                            >
                              Invest
                            </a>
                            <Link
                              className="btn-outline ms-2"
                              to="/prodigydesign/portfolio/scheme-performance"
                              type="button"
                            >
                              Add To Cart
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>

                            <img src={pgim} alt="" className="maxw9" />
                          </td>
                          <td className="">
                            PGMI India Midcap Opportunities Fund Direct Growth
                          </td>
                          <td>27.54%</td>
                          <td>27.54%</td>
                          <td>27.54%</td>
                          <td>27.54%</td>
                          <td>
                            <a
                              className="btn-outline"
                              href="javascript:void(0);"
                              data-target="#invest-sip"
                              data-toggle="modal"
                              type="button"
                            >
                              Invest
                            </a>
                            <Link
                              className="btn-outline ms-2"
                              to="/prodigydesign/portfolio/scheme-performance"
                              type="button"
                            >
                              Add To Cart
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>

                            <img src={pgim} alt="" className="maxw9" />
                          </td>
                          <td className="">
                            PGMI India Midcap Opportunities Fund Direct Growth
                          </td>
                          <td>27.54%</td>
                          <td>27.54%</td>
                          <td>27.54%</td>
                          <td>27.54%</td>
                          <td>
                            <a
                              className="btn-outline"
                              href="javascript:void(0);"
                              data-target="#invest-sip"
                              data-toggle="modal"
                              type="button"
                            >
                              Invest
                            </a>
                            <Link
                              className="btn-outline ms-2"
                              to="/prodigydesign/portfolio/scheme-performance"
                              type="button"
                            >
                              Add To Cart
                            </Link>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="overflow-auto">
                      <table className="table text-center custom outline">
                        <thead>
                          <tr className="bg-gray">
                            <th></th>
                            <th className="schemew">Scheme Name</th>
                            <th>1Y Return</th>
                            <th>3Y Return</th>
                            <th>5Y Return</th>
                            <th>7Y Return</th>
                            <th className="schemew"></th>
                          </tr>
                        </thead>
                        <tr>
                          <td>

                            <img src={boi} alt="" className="maxw9" />
                          </td>
                          <td className="">
                            Bank of India Small Cap Fund Direct Growth
                          </td>
                          <td className="">30.04%</td>
                          <td className="">30.04%</td>
                          <td className="">30.04%</td>
                          <td className="">30.04%</td>
                          <td>
                            <a
                              className="btn-outline"
                              href="javascript:void(0);"
                              data-target="#invest-sip"
                              data-toggle="modal"k
                              type="button"
                            >
                              Invest
                            </a>
                            <Link
                              className="btn-outline ms-2"
                              to="/prodigydesign/portfolio/scheme-performance"
                              type="button"
                            >
                              Add To Cart
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>

                            <img src={boi} alt="" className="maxw9" />
                          </td>
                          <td className="">
                            Bank of India Small Cap Fund Direct Growth
                          </td>
                          <td>30.04%</td>
                          <td>30.04%</td>
                          <td>30.04%</td>
                          <td>30.04%</td>
                          <td>
                            <a
                              className="btn-outline"
                              href="javascript:void(0);"
                              data-target="#invest-sip"
                              data-toggle="modal"
                              type="button"
                            >
                              Invest
                            </a>
                            <Link
                              className="btn-outline ms-2"
                              to="/prodigydesign/portfolio/scheme-performance"
                              type="button"
                            >
                              Add To Cart
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>

                            <img src={boi} alt="" className="maxw9" />
                          </td>
                          <td className="">
                            Bank of India Small Cap Fund Direct Growth
                          </td>
                          <td>30.04%</td>
                          <td>30.04%</td>
                          <td>30.04%</td>
                          <td>30.04%</td>
                          <td>
                            <a
                              className="btn-outline"
                              href="javascript:void(0);"
                              data-target="#invest-sip"
                              data-toggle="modal"
                              type="button"
                            >
                              Invest
                            </a>
                            <Link
                              className="btn-outline ms-2"
                              to="/prodigydesign/portfolio/scheme-performance"
                              type="button"
                            >
                              Add To Cart
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>

                            <img src={boi} alt="" className="maxw9" />
                          </td>
                          <td className="">
                            Bank of India Small Cap Fund Direct Growth
                          </td>
                          <td>30.04%</td>
                          <td>
                            <span>30.04%</span>
                          </td>
                          <td>30.04%</td>
                          <td>30.04%</td>
                          <td>
                            <a
                              className="btn-outline"
                              href="javascript:void(0);"
                              data-target="#invest-sip"
                              data-toggle="modal"
                              type="button"
                            >
                              Invest
                            </a>
                            <Link
                              className="btn-outline ms-2"
                              to="/prodigydesign/portfolio/scheme-performance"
                              type="button"
                            >
                              Add To Cart
                            </Link>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="overflow-auto">
                      <table className="table custom text-center outline">
                        <thead>
                          <tr className="bg-gray">
                            <th></th>
                            <th className="schemew">Scheme Name</th>
                            <th>1Y Return</th>
                            <th>3Y Return</th>
                            <th>5Y Return</th>
                            <th>7Y Return</th>
                            <th className="schemew"></th>
                          </tr>
                        </thead>
                        <tr>
                          <td>

                            <img src={canera} alt="" className="maxw9" />
                          </td>
                          <td className=" schemew">
                            Canara Robeco Small Cap Fund Direct Growth
                          </td>
                          <td className="">7.54%</td>
                          <td className="">
                            <span>7.54%</span>
                          </td>
                          <td className="">7.54%</td>
                          <td className="">7.54%</td>
                          <td>
                            <a
                              className="btn-outline"
                              href="javascript:void(0);"
                              data-target="#invest-sip"
                              data-toggle="modal"
                              type="button"
                            >
                              Invest
                            </a>
                            <Link
                              className="btn-outline ms-2"
                              to="/prodigydesign/portfolio/scheme-performance"
                              type="button"
                            >
                              Add To Cart
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>

                            <img src={canera} alt="" className="maxw9" />
                          </td>
                          <td className=" schemew">
                            Canara Robeco Small Cap Fund Direct Growth
                          </td>
                          <td>7.54%</td>
                          <td>
                            <span>7.54%</span>
                          </td>
                          <td>7.54%</td>
                          <td>
                            <span>7.54%</span>
                          </td>
                          <td>
                            <a
                              className="btn-outline"
                              href="javascript:void(0);"
                              data-target="#invest-sip"
                              data-toggle="modal"
                              type="button"
                            >
                              Invest
                            </a>
                            <Link
                              className="btn-outline ms-2"
                              to="/prodigydesign/portfolio/scheme-performance"
                              type="button"
                            >
                              Add To Cart
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>

                            <img src={canera} alt="" className="maxw9" />
                          </td>
                          <td className=" schemew">
                            Canara Robeco Small Cap Fund Direct Growth
                          </td>
                          <td>7.54%</td>
                          <td>
                            <span>7.54%</span>
                          </td>
                          <td>7.54%</td>
                          <td>
                            <span>7.54%</span>
                          </td>
                          <td>
                            <a
                              className="btn-outline"
                              href="javascript:void(0);"
                              data-target="#invest-sip"
                              data-toggle="modal"
                              type="button"
                            >
                              Invest
                            </a>
                            <Link
                              className="btn-outline ms-2"
                              to="/prodigydesign/portfolio/scheme-performance"
                              type="button"
                            >
                              Add To Cart
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>

                            <img src={canera} alt="" className="maxw9" />
                          </td>
                          <td className=" schemew">
                            Canara Robeco Small Cap Fund Direct Growth
                          </td>
                          <td>7.54%</td>
                          <td>
                            <span>7.54%</span>
                          </td>
                          <td>7.54%</td>
                          <td>
                            <span>7.54%</span>
                          </td>
                          <td>
                            <a
                              className="btn-outline"
                              href="javascript:void(0);"
                              data-target="#invest-sip"
                              data-toggle="modal"
                              type="button"
                            >
                              Invest
                            </a>
                            <Link
                              className="btn-outline ms-2"
                              to="/prodigydesign/portfolio/scheme-performance"
                              type="button"
                            >
                              Add To Cart
                            </Link>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Invest_Sip show={sipinShow} setShow={setSipInShow} />
      <Invest_Lumpsum show={lumpsuminShow} setShow={setLumpsumInShow} />
      <QuickInvest show={quickinvestShow} setShow={setQuickInvestShow} />
      <ReportsMobile show={reports} setShow={setReports} />
    </>
  );
};
export default Dashboard;
