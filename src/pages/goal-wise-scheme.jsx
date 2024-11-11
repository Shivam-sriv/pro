import React ,{useState}from "react";
import { Link } from "react-router-dom";
import sunderam from "../assets/images/banklogo/Sundaram_Mutual_Fund.png";
import sbi from "../assets/images/banklogo/sbi.png";
import idfc from "../assets/images/banklogo/IDFC.png";
import SIP_Form from "../components/sip-form";
function GoalWiseScheme() {
  const [sipformShow,setSipformShow] = useState(false);
  return (
    <>
      <div className="wrapper">
        <div className="px-lg-5">
          {/* Page Heading */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ms-3">
              <li className="breadcrumb-item">
                <a href="home">Home</a>
              </li>
              <li className="breadcrumb-item active">
                Goal Wise Recommendation
              </li>
            </ol>
          </nav>

          <section>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-9 col-10 px-2 pb-3  shadow-custom">
                  <div className="card border-0">
                    <div className="card-body">
                      <div className="col-12">
                        <div className="table-responsive">
                          <table class="table custom text-start text-black-table">
                            <thead>
                              <tr>
                               
                                <th colspan="4">
                                  <h6 className="text-red text-center">
                                    Recommended Schemes
                                  </h6>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <img
                                    src={idfc}
                                    alt=""
                                    className="img-fluid min-w-3em"
                                  />
                                </td>
                                <td>
                                  <Link
                                    to="/dashboard/nav-single"
                                    className=" dividend-popup text-dark"
                                  >
                                    IDFC Tax Advantage (ELSS)
                                    Fund-Growth-Regular Plan{" "}
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src={sunderam}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </td>
                                <td className="pt-4">
                                  <Link
                                    to="!#"
                                    className=" dividend-popup text-dark"
                                  >
                                    Sundaram Tax Savings Fund (Formerly
                                    Principal Tax Savings Fund)- Regular Growth{" "}
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src={sunderam}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </td>
                                <td className="pt-4">
                                  <Link
                                    to="!#"
                                    className="dividend-popup text-dark"
                                  >
                                    Sundaram Tax Savings Fund (Formerly
                                    Principal Tax Savings Fund)- Regular Growth{" "}
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img src={sbi} alt="" className="img-fluid" />
                                </td>
                                <td className="pt-4">
                                  <Link
                                    to="!#"
                                    className=" dividend-popup text-dark"
                                  >
                                    SBI Long Term Equity Fund-Regular
                                    Plan-Growth{" "}
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col-12 mt-4 mb-3 text-lg-end text-center">
                        <Link to="" onClick={() => setSipformShow(true)} className="btn-custom"> Continue</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section>
      <SIP_Form show={sipformShow} setShow={setSipformShow}/>
      </section>
    </>
  );
}
export default GoalWiseScheme;
