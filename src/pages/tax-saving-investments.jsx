import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import Select from "react-select";
import Tax_Saving_Investments_Error from "../../src/assets/images/speech-bubble.png";
import { BiCalendarAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getTaxSavingReport } from "../apisMethods";
import { notify } from "./toastCreater";
import Loader from "./Loader";

const Tax_Saving_Investments = () => {
  const [selectedYear, setSelectedYear] = useState();
  const [reportData, setReportData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loader, setLoader] = useState("none");
  const [notFoundError, setNotFoundError] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    // const userdata = JSON.parse(localStorage.getItem("user"));
    const data = [];
    const d = new Date();
    let year = d.getFullYear() + 1;
    for (let i = 40; i > 0; i--) {
      year = year - 1;
      let a = { value: year - 1 + "-" + year, label: year - 1 + "-" + year };
      data.push(a);
    }
    const currentYear = new Date().getFullYear();
    const fullYear = String(currentYear - 1) + "-" + String(currentYear);
    const defaultValue = { label: fullYear, value: fullYear };
    reportApiCalls(fullYear.split("-"));
    setData(data);
    setSelectedYear(defaultValue);
  }, []);

  const reportApiCalls = (date) => {
    const userdata = JSON.parse(localStorage.getItem("user"));
    setLoader("block");
    setNotFoundError(false);
    getTaxSavingReport({
      fromyear: date[0],
      toyear: date[1],
      pan: userdata.pan,
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
    setSelectedYear(e);
    const date = e.value.split("-");
    console.log(date);
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
                <a href="home">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Tax Saving Investments
              </li>
            </ol>
          </nav>
          <section>
            <div className="container-fluid mt-5">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="shadow-custom m-0">
                    <div className="sipstpswp-calender mb-4">
                      <div className="row justify-content-center">
                        <div className="col-md-4 col-8 position-relative">
                          <Select
                            placeholder="2022-2023"
                            options={data}
                            onChange={changeDate}
                            value={selectedYear}
                          />
                          <span className="tax-saving-report-icon">
                            <BiCalendarAlt />
                          </span>
                        </div>
                      </div>
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
                  <div className="sipstpswp_error shadow-custom py-5 text-center px-2">
                    <div className="sipstpswp_error-img">
                      <img src={Tax_Saving_Investments_Error} />
                    </div>
                    <h5 className="pt-3 text-red fw-600">
                      No ELSS Plans in your portfolio.
                    </h5>
                    <p className="py-3 error-msg">
                      Don't miss out on tax savings. Click the Invest button now
                      to get started.
                    </p>
                    <div className="pt-2">
                      <Link className="btn-custom" to="/dashboard/tax-planning">
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
export default Tax_Saving_Investments;
