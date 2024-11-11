import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import Select from "react-select";
import { BiCalendarAlt } from "react-icons/bi";
import Dividend from "../../src/assets/images/oops-r.png";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { getDividendReport } from "../apisMethods";

import { useEffect } from "react";
import { notify } from "./toastCreater";
import Loader from "./Loader";

const Dividends = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");
  const [selectedYear, setSelectedYear] = useState();
  const [reportData, setReportData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loader, setLoader] = useState("none");
  const [notFoundError, setNotFoundError] = useState(false);

  useEffect(() => {
  
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
    getDividendReport({
      fromyear: date[0],
      toyear: date[1],
      pan: userdata.pan
    }).then((res) => {
      if (!res.data) {
        setLoader("none");
        // notify("error", res.error.response.data.msg);
        setNotFoundError(true);
      } else {
        const data = res.data.data;
        const { list, allOverTotal } = reformatData(data);
        console.log(list);
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
    reportApiCalls(date, );
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Loader loader={loader} />
      <div className="wrapper px-2">
        <div className="report px-lg-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-3">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Dividends
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
                            value={selectedYear}
                            onChange={changeDate}
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
                  <div className="sipstpswp_error shadow-custom py-5 text-center">
                    <div className="sipstpswp_error-img">
                      <img src={Dividend} />
                    </div>
                    <p className="py-3 error-msg">
                      There is no dividend for the selected period.
                    </p>
                    <div className="pt-2">
                      <a className="btn-custom" href="#">
                        OK
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className="animate__animated animate__zoomIn animate__fast"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-14">
            Mirae Asset Large Cap Fund - Direct Plan - Growth
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <Table>
            <thead>
              <tr className="bg-gray text-red text-center">
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>20-01-2022</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>20-01-2022</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>20-01-2022</td>
                <td>2000</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Dividends;
