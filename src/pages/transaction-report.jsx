import Table from "react-bootstrap/Table";
import Sipstpswp_Error from "../../src/assets/images/no-money.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { currentMonth } from "../currentMonth/CurrentMonthYear";
import { getTransactionReport } from "../apisMethods";
import { notify } from "./toastCreater";
import Accordion from "react-bootstrap/Accordion";
import Loader from "./Loader";

const Transaction_Report = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const [reportData, setReportData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loader, setLoader] = useState("none");
  const [notFoundError, setNotFoundError] = useState(false);

  useEffect(() => {
    const defaultMonthYear = currentMonth();
    const date = defaultMonthYear.split("-");
    reportApiCalls(date);
    setSelectedDate(defaultMonthYear);
  }, []);

  const reportApiCalls = (date) => {
    const userdata = JSON.parse(localStorage.getItem("user"));
    setLoader("block");
    setNotFoundError(false);
    getTransactionReport({
      month: date[1],
      year: date[0],
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
    setSelectedDate(e.target.value);
    const date = e.target.value.split("-");
    reportApiCalls(date);
  };

  return (
    <>
      <Loader loader={loader} />
      <div className="wrapper px-2">
        <div className="report px-lg-5 px-smc-1">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                My Transactions
              </li>
            </ol>
          </nav>
        </div>

        <section className="transaction-report">
          <div className="container-fluid mt-5">
            <div className="row justify-content-center">
              <div className="col-md-11">
                <div className="shadow-custom">
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
                          <Accordion.Item eventKey={i} className="mb-3" key={i}>
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
                                        <th className="wd-20rem">Date</th>
                                        <th className="wd-7rem">Folio No</th>
                                        <th className="wd-5rem">Scheme</th>
                                        <th>Amount</th>
                                        <th>Trxn.Type</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {el.data.map((obj, i) => {
                                        return (
                                          <tr key={i}>
                                            <td>{obj.TRADDATE}</td>
                                            <td>{obj.FOLIO_NO}</td>
                                            <td>{obj.SCHEME}</td>
                                            <td>
                                              {Number(obj.AMOUNT).toFixed(2)}
                                            </td>
                                            <td>{obj.TRXN_NATURE}</td>
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
              <div className="col-md-11 py-3">
                <div className="sipstpswp_error shadow-custom py-5 text-center">
                  <div className="sipstpswp_error-img">
                    <img src={Sipstpswp_Error} />
                  </div>
                  <h5 className="pt-3 text-red fw-600">No transactions yet?</h5>
                  <p className="py-3 error-msg">
                    Don't wait any longer. Click Invest now and begin your
                    financial journey today!
                  </p>
                  <div className="pt-2">
                    <Link className="btn-custom" to="/dashboard/transact">
                      Invest Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Transaction_Report;
