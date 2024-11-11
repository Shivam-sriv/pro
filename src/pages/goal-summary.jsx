import React from "react";
import Table from "react-bootstrap/Table";
import Retirement from "../../src/assets/images/retiment.png";
import Education from "../../src/assets/images/eduction.png";
import Wealth from "../../src/assets/images/wealth-g.png";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cart_Delete from "../components/delete-confirmation";

const GoalSummary = () => {
  return (
    <>
      <div className="wrapper">
        <div className="report px-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="home">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Goal Summary
              </li>
            </ol>
          </nav>
        </div>

        <section className="goal-summary">
          <div className="container-fluid">
            <div className="row justify-content-center py-5 me-3">
              <div className="col-md-8">
                <div className="shadow-table p-1">
                  <Table responsive>
                    <thead>
                      <tr className="bg-gray text-red text-center">
                        <th></th>
                        <th className="wd-8rem">Your Goal</th>
                        <th className="wd-5rem">Target Date</th>
                        <th className="wd-8rem">Required Amount </th>
                        <th className="wd-8rem">SIP Per Month </th>
                        <th className="wd-7rem">Action </th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td>
                          <img
                            className="img-fluid new-icon"
                            src={Retirement}
                            alt=""
                          />
                        </td>
                        <td>Retirement</td>
                        <td>Aug 2023</td>
                        <td>₹4,33,000</td>
                        <td>₹8500</td>
                        <td>
                          <div className="d-flex  justify-content-around">
                            <div>
                              <Link to="/dashboard/retirement-goal">
                                <FaPen className="" />
                              </Link>
                            </div>
                            <div>
                            <Cart_Delete/>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="img-fluid new-icon"
                            src={Wealth}
                            alt=""
                          />
                        </td>
                        <td>Wealth Creation</td>
                        <td>Aug 2023</td>
                        <td>₹4,33,000</td>
                        <td>₹8500</td>
                        <td>
                          <div className="d-flex  justify-content-around">
                            <div>
                              <Link to="/dashboard/retirement-goal">
                                <FaPen className="" />
                              </Link>
                            </div>
                            <div>
                            <Cart_Delete/>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="img-fluid new-icon"
                            src={Education}
                            alt=""
                          />
                        </td>
                        <td>Child Education</td>
                        <td>Aug 2023</td>
                        <td>₹4,33,000</td>
                        <td>₹8500</td>
                        <td>
                          <div className="d-flex  justify-content-around">
                            <div>
                              <Link to="/dashboard/retirement-goal">
                                <FaPen className="" />
                              </Link>
                            </div>
                            <div>
                            <Cart_Delete/>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>

              <div className="col-md-8 text-center py-5 fw-500">
                <span> Your incremental SIP Amount :</span>
                <span>₹3,22,000</span>

                <div class="d-flex justify-content-between pt-4">
                  <div class="">
                    <Link to="javascript:void(0);" className="btn-custom">
                      Add More Goal
                    </Link>
                  </div>
                  <div class="">
                    <Link
                      to="/dashboard/goal-wise-scheme"
                      className="btn-custom"
                    >
                      Proceed
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
export default GoalSummary;
