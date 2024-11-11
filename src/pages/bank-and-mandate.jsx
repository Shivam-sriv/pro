import React, { useState } from "react";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import ExistingMandate from "../components/existing-mandate";
import SetAsPrimary from "../components/set-as-primary";

const Bank_Mandate = () => {
  const data = [
    { value: "All", label: "All" },
    { value: "Pranesh Singh", label: "Pranesh Singh" },
  ];

  const [existingmandateShow, setExistingmandateShow] = useState(false);
  return (
    <>
      <div className="wrapper px-2">
        <div className="report px-lg-5 ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="home">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Bank Details and Mandate
              </li>
            </ol>
          </nav>
        </div>
        <section className="mb-5">
          <div className="container-fluid">
            <div className="row justify-content-between px-lg-4 pt-3 mx-lg-4">
              <div className="col-md-4">
                <div className="my-order px-lg-3">
                  <label className="pb-2">Select Profile</label>
                  <Select options={data} className="orderprofile" />
                </div>
              </div>
              <div className="col-md-3  pt-4 mt-3">
                <Link className="btn-custom" to="/dashboard/add-bank">
                  <span className="pe-2">
                    <FaPlus />
                  </span>
                  Add Another Bank
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className=" m-lg-5">
          <div className="mb-4">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="order-shadow p-4 mb-4">
                    <Table responsive>
                      <thead>
                        <tr className="text-red">
                          <th className="wd-11rem">Bank Name</th>
                          <th className="wd-7rem">Account Number</th>
                          <th className="wd-7rem">Status</th>
                          <th className="wd-7rem">IFSC Code</th>
                          <th className="wd-7rem">Account Type</th>
                          <th className="wd-12rem">Create Mandate</th>
                          <th className="wd-13rem">View Mandate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Bhandhan Bank
                            <SetAsPrimary />
                          </td>
                          <td>12600048936</td>
                          <td>
                            <span className="pe-2">
                              <FaCheck color={"#1cc88a"} />
                            </span>
                            <span className="pl-2 text-secondary">
                              Verified
                            </span>
                          </td>
                          <td>ICIC004782</td>
                          <td>Saving Account</td>
                          <td>
                            {" "}
                            <Link
                              to="/dashboard/create-mandate"
                              className="btn btn-danger btn-sm shadow-sm text-decoration-none"
                            >
                              <span className="pe-2">
                                <FaPlus />
                              </span>
                              Create E-Mandate
                            </Link>
                          </td>
                          <td>
                            <Link
                              className="btn btn-danger btn-sm shadow-sm text-decoration-none"
                              onClick={() => setExistingmandateShow(true)}
                            >
                              <span className="pe-2">
                                <FaEye />
                              </span>
                              View existing mandate
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Kotak Bank
                            <span className="text-secondary ps-2">
                              Primary Bank
                            </span>
                          </td>
                          <td>12600048936</td>
                          <td>
                            <span className="pe-2">
                              <FaCheck color={"#1cc88a"} />
                            </span>
                            <span className="pl-2 text-secondary">
                              Verified
                            </span>
                          </td>
                          <td>ICIC004782</td>
                          <td>Saving Account</td>
                          <td>
                            {" "}
                            <Link
                              to="/dashboard/create-mandate"
                              className="btn btn-danger btn-sm shadow-sm text-decoration-none"
                            >
                              <span className="pe-2">
                                <FaPlus />
                              </span>
                              Create E-Mandate
                            </Link>
                          </td>
                          <td>
                            <Link
                              className="btn btn-danger btn-sm shadow-sm text-decoration-none"
                              onClick={() => setExistingmandateShow(true)}
                            >
                              <span className="pe-2">
                                <FaEye />
                              </span>
                              View existing mandate
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <ExistingMandate
          show={existingmandateShow}
          setShow={setExistingmandateShow}
        />
      </section>
    </>
  );
};
export default Bank_Mandate;
