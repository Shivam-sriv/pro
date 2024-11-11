import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import Sipstpswp_Error from "../../src/assets/images/no-money.png";
import { Link } from "react-router-dom";
import { currentMonth } from "../currentMonth/CurrentMonthYear";
import { getSipStpSwpReport } from "../apisMethods";
import { notify } from "./toastCreater";
import Loader from "./Loader";

const Sipstpswp_Report = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [reportData, setReportData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loader, setLoader] = useState("none");
  const [notFoundError, setNotFoundError] = useState(false);
  // const [userData, setUserData] = useState({});

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("user"));
    const defaultMonthYear = currentMonth();
    const date = defaultMonthYear.split("-");
    reportApiCalls(date);
    setSelectedDate(defaultMonthYear);
  }, []);

  const reportApiCalls = (date) => {
    const userdata = JSON.parse(localStorage.getItem("user"));
    setLoader("block");
    setNotFoundError(false);
    getSipStpSwpReport({
      month: Number(date[1]),
      year: Number(date[0]),
      pan: userdata.pan,
      // trans_type: "SIP",
    }).then((res) => {
      if (!res.data) {
        setLoader("none");
        // notify("error", res.error.response.data.msg);
        setNotFoundError(true);
      } else {
        const data = res.data.data;
        const { list, allOverTotal } = reformatData(data);
        setReportData(list);
        setTotalAmount(allOverTotal);
        setLoader("none");
      }
    });
  };

  const reformatData = (data) => {
    const list = [];
    let allOverTotal = 0;

    for (let key in data) {
      let totalAmount = 0;
      data[key].forEach((el) => {
        totalAmount += el.AMOUNT;
      });
      allOverTotal += totalAmount;

      list.push({ name: key, data: data[key], totalAmount });
    }
    return { list, allOverTotal };
  };

  const changeDate = (e) => {
    setSelectedDate(e.target.value);
    const date = e.target.value.split("-");
    reportApiCalls(date);
  };

  return (
    <>
      <Loader loader={loader} />
      <div className="wrapper">
        <div className="report px-lg-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-3">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                My SIP / STP / SWP Report
              </li>
            </ol>
          </nav>
          <section>
            <div className="container-fluid mt-5">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="shadow-custom m-0">
                    <div className="sipstpswp-calender mb-4 out">
                      <input
                        type="month"
                        value={selectedDate}
                        onChange={changeDate}
                        className="py-2 px-2 bg-c"
                      />
                    </div>
                    <div
                      className="sipstpswp_report px-4 pb-4"
                      style={{ display: notFoundError ? "none" : "block" }}
                    >
                      <div className="sipstpswp-header bg-gray mb-4 py-2 d-flex justify-content-between">
                        <span className="text-red fw-500 ps-5">Name</span>
                        <span className="text-red fw-500 pe-5">Amount</span>
                      </div>

                      <Accordion defaultActiveKey={0}>
                        {reportData.map((el, i) => {
                          return (
                            <Accordion.Item
                              eventKey={i}
                              className="mb-3"
                              key={i}
                            >
                              <Accordion.Header>
                                <div className="col-md-9 text-start ps-2 pr-4rem">
                                  {el.name}
                                </div>
                                <div className="col-md-3 text-end pe-lg-4">
                                  {Number(el.totalAmount).toFixed(2)}
                                </div>
                              </Accordion.Header>
                              <Accordion.Body>
                                <div className="row">
                                  <div className="col-md-11">
                                    <Table responsive>
                                      <thead>
                                        <tr className="text-red">
                                          <th className="wd-20rem">Scheme</th>
                                          <th className="wd-7rem">Date</th>
                                          <th className="wd-5rem">
                                            Trxn. Type
                                          </th>
                                          <th>Amount</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {el.data.map((obj, i) => {
                                          return (
                                            <tr key={i}>
                                              <td>{obj.SCHEME}</td>
                                              <td>{obj.TRADDATE}</td>
                                              <td>{obj.TRXN_NATURE}</td>
                                              <td>
                                                {Number(obj.AMOUNT).toFixed(2)}
                                              </td>
                                            </tr>
                                          );
                                        })}
                                      </tbody>
                                    </Table>
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          );
                        })}
                      </Accordion>
                      <div className="sipstpswp-header bg-light-red py-2">
                        <div className="row">
                          <div className="col-md-9 col-6">
                            {" "}
                            <span className="fw-500 ps-5">Total</span>
                          </div>
                          <div className="col-md-3 col-6">
                            {" "}
                            <span className="fw-500 ps-6 ps-smc-0 pe-3 pe-lg-0">
                              {Number(totalAmount).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ display: notFoundError ? "block" : "none" }}>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-md-10 py-3">
                  <div className="sipstpswp_error shadow-custom py-5 text-center">
                    <div className="sipstpswp_error-img">
                      <img src={Sipstpswp_Error} />
                    </div>
                    <h5 className="pt-3 text-red fw-600"> No Data?</h5>
                    <p className="py-3 error-msg">
                      Don't miss out on the benefits of regular investing. Start
                      yours now.
                    </p>
                    <div className="pt-2">
                      <Link className="btn-custom" to="/dashboard/simply-sip">
                        Invest Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Sipstpswp_Report;
