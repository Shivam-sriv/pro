import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../src/assets/img/logo/bfc-logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "animate.css";
import UserIcon from "../../src/assets/img/user-icon.svg";
import {
  FaShoppingCart,
  FaBell,
  FaUser,
  FaCogs,
  FaThumbtack,
  FaList,
  FaSignOutAlt,
} from "react-icons/fa";
import Right_Icons from "../components/right-navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ChangePassword from "../components/change-password";
import ChangePin from "../components/change-pin";
import ContactUs from "../components/contact-us";
import Notification_Popup from "../components/notification-popup";
import ReportsMobile from "../components/reports-for-mobile";
import { getUserStatus } from "../apisMethods";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [notificationshow, setNotificationShow] = useState(false);
  const [editPassword, setEditPasswordShow] = useState(false);
  const [user, setUser] = useState({ displayName: "" });
  const [editPin, setEditPinShow] = useState(false);
  const [contact, setContactShow] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("header=>", token);

    getUserStatus({ headers: { Authorization: `Bearer ${token}` } }).then(
      (res) => {
        if (!res.data) {
          // toast.error(res.error.response.data.msg);
          setUser({ displayName: "lorem" });
          // comment for testing purouse
          localStorage.clear();
          navigate("/");
        } else {
          localStorage.setItem("user", JSON.stringify(res.data?.data));
          console.log(res.data?.data);
          setUser(res.data?.data);
        }
      }
    );
  }, []);

  const userLogOut = () => {
    localStorage.clear();
    navigate("/login-with-option");
  };

  const profileDropDown = (name) => {
    return (
      <li className="px-lg-4 prof">
        <div className="text-decoration-none">
          <span className="d-flex align-items-baseline ">
            <span className="text-secondary d-smc-none">{name}</span>
            <span className="user-icon">
              <img src={UserIcon} alt="logo" className="img-fluid" />
            </span>
          </span>
        </div>
      </li>
    );
  };

  return (
    <>
      {/* ============desktop view============== */}
      <div className="d-smc-none">
        <Navbar expand="lg" sticky="top" className="custom-shadow">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <img src={Logo} alt="logo" className="img-fluid logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-around"
            >
              <ul className="navbar-nav main-menu ms-auto ">
                <li>
                  {" "}
                  <NavLink to="/dashboard/sip-calculator" activClassName="">
                    Calculators
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/tax-planning">Tax Planning</NavLink>
                </li>
                <li className="menu_has_children">
                  <Link to="#">Reports</Link>
                  <ul className="sub-menu sub-report">
                    <li>
                      <NavLink to="/dashboard/sipstpswp-report">
                        MY SIP/STP/SWP
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/transaction-report">
                        My Transactions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/tax-saving-investments">
                        Tax Saving Investments
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/dividends">Dividends</NavLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <NavLink to="/dashboard/get-right-scheme">
                    Get Right Scheme
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto ">
                <div className="topbar-divider" />
                <NavDropdown
                  title={profileDropDown(user.displayName)}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/dashboard/profile"
                    eventKey="4.1"
                  >
                    <span className="d-flex">
                      <span className="pe-2 fs-14 text-gray-400">
                        <FaUser />
                      </span>
                      <span className="fs-14">Profile</span>
                    </span>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    eventKey="4.2"
                    onClick={() => setEditPasswordShow(true)}
                  >
                    <span className="d-flex">
                      <span className="pe-2 fs-14 text-gray-400">
                        <FaCogs />
                      </span>
                      <span className="fs-14">Change Password</span>
                    </span>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    eventKey="4.3"
                    onClick={() => setEditPinShow(true)}
                  >
                    <span className="d-flex">
                      <span className="pe-2 fs-14 text-gray-400">
                        <FaThumbtack />
                      </span>
                      <span className="fs-14">Change Pin</span>
                    </span>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    eventKey="4.4"
                    onClick={() => setContactShow(true)}
                  >
                    <span className="d-flex">
                      <span className="pe-2 fs-14 text-gray-400">
                        <FaList />
                      </span>
                      <span className="fs-14">Raise a Query</span>
                    </span>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="4.5" to="/login-with-option">
                    <span className="d-flex" onClick={userLogOut}>
                      <span className="pe-2 fs-14 text-gray-400">
                        <FaSignOutAlt />
                      </span>
                      <span className="fs-14">Logout</span>
                    </span>
                  </NavDropdown.Item>
                </NavDropdown>
                <div className="topbar-divider" />
                <li className="pt-2">
                  <div className="text-decoration-none d-flex notify">
                    <NavDropdown
                      className="active"
                      title={<FaBell className="header-icon bell" />}
                    >
                      <NavDropdown.Item
                        as={Link}
                        className="border-bottom"
                        eventKey="4.1"
                        onClick={() => setNotificationShow(true)}
                      >
                        <div className="d-flex align-items-stretch">
                          <div>
                            <h6 className="text-black">
                              Change in folio Nos.-HSBC MF
                            </h6>
                            <p className="fs-13 text-red mb-0">
                              The folio numbers of HSBC Mutual Funds
                              <br /> will be changed to an 8-digit folio number.
                            </p>
                          </div>
                          <div className="align-self-center ps-3">
                            <p className="fs-13">3 days</p>
                          </div>
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        className="border-bottom"
                        eventKey="4.2"
                      >
                        <div className="d-flex align-items-stretch">
                          <div>
                            <h6 className="text-black">
                              Change in folio Nos.-HSBC MF
                            </h6>
                            <p className="fs-13 text-red mb-0">
                              The folio numbers of HSBC Mutual Funds
                              <br /> will be changed to an 8-digit folio number.
                            </p>
                          </div>
                          <div className="align-self-center ps-3">
                            <p className="fs-13">3 days</p>
                          </div>
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        className="border-bottom"
                        eventKey="4.3"
                      >
                        <div className="d-flex align-items-stretch">
                          <div>
                            <h6 className="text-black">
                              Change in folio Nos.-HSBC MF
                            </h6>
                            <p className="fs-13 text-red mb-0">
                              The folio numbers of HSBC Mutual Funds
                              <br /> will be changed to an 8-digit folio number.
                            </p>
                          </div>
                          <div className="align-self-center ps-3">
                            <p className="fs-13">3 days</p>
                          </div>
                        </div>
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavLink
                      className="header-icon ps-3"
                      to="/dashboard/view-cart"
                    >
                      <FaShoppingCart />
                    </NavLink>
                  </div>
                </li>
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* ============end desktop view============== */}
      {/* ============Mobile view============== */}
      <div className="d-lg-none">
        <Navbar expand="lg" sticky="top" className="custom-shadow">
          <Container
            fluid
            className="px-smc-0 justify-content-start justify-content-md-between"
          >
            <Navbar.Brand as={Link} to="/">
              <img src={Logo} alt="logo" className="img-fluid logo" />
            </Navbar.Brand>

            <ul className="navbar-nav  ">
              <li className="pt-2">
                <div className="text-decoration-none d-flex  align-items-center">
                  <NavDropdown
                    className="active notify"
                    title={<FaBell className="header-icon bell" />}
                  >
                    <NavDropdown.Item
                      as={Link}
                      className="border-bottom"
                      eventKey="4.1"
                      onClick={() => setNotificationShow(true)}
                    >
                      <div className="d-flex align-items-stretch">
                        <div>
                          <h6 className="text-black">
                            Change in folio Nos.-HSBC MF
                          </h6>
                          <p className="fs-13 text-red mb-0">
                            The folio numbers of HSBC Mutual Funds
                            <br /> will be changed to an 8-digit folio number.
                          </p>
                        </div>
                        <div className="align-self-center ps-3">
                          <p className="fs-13">3 days</p>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      className="border-bottom"
                      eventKey="4.2"
                    >
                      <div className="d-flex align-items-stretch">
                        <div>
                          <h6 className="text-black">
                            Change in folio Nos.-HSBC MF
                          </h6>
                          <p className="fs-13 text-red mb-0">
                            The folio numbers of HSBC Mutual Funds
                            <br /> will be changed to an 8-digit folio number.
                          </p>
                        </div>
                        <div className="align-self-center ps-3">
                          <p className="fs-13">3 days</p>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      className="border-bottom"
                      eventKey="4.3"
                    >
                      <div className="d-flex align-items-stretch">
                        <div>
                          <h6 className="text-black">
                            Change in folio Nos.-HSBC MF
                          </h6>
                          <p className="fs-13 text-red mb-0">
                            The folio numbers of HSBC Mutual Funds
                            <br /> will be changed to an 8-digit folio number.
                          </p>
                        </div>
                        <div className="align-self-center ps-3">
                          <p className="fs-13">3 days</p>
                        </div>
                      </div>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavLink
                    className="header-icon ms-3"
                    to="/dashboard/view-cart"
                  >
                    <FaShoppingCart />
                  </NavLink>

                  <NavDropdown
                    title={profileDropDown(user.displayName)}
                    id="basic-nav-dropdown "
                    className="ms-2 "
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/dashboard/profile"
                      eventKey="4.1"
                    >
                      <span className="d-flex">
                        <span className="pe-2 fs-14 text-gray-400">
                          <FaUser />
                        </span>
                        <span className="fs-14">Profile</span>
                      </span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      eventKey="4.2"
                      onClick={() => setEditPasswordShow(true)}
                    >
                      <span className="d-flex">
                        <span className="pe-2 fs-14 text-gray-400">
                          <FaCogs />
                        </span>
                        <span className="fs-14">Change Password</span>
                      </span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      eventKey="4.3"
                      onClick={() => setEditPinShow(true)}
                    >
                      <span className="d-flex">
                        <span className="pe-2 fs-14 text-gray-400">
                          <FaThumbtack />
                        </span>
                        <span className="fs-14">Change Pin</span>
                      </span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      eventKey="4.4"
                      onClick={() => setContactShow(true)}
                    >
                      <span className="d-flex">
                        <span className="pe-2 fs-14 text-gray-400">
                          <FaList />
                        </span>
                        <span className="fs-14">Raise a Query</span>
                      </span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      eventKey="4.5"
                      to="/login-with-option"
                    >
                      <span className="d-flex">
                        <span className="pe-2 fs-14 text-gray-400">
                          <FaSignOutAlt />
                        </span>
                        <span className="fs-14">Logout</span>
                      </span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </li>
            </ul>
          </Container>
        </Navbar>
      </div>

      {/* ============end Mobile view============== */}

      <section>
        <Right_Icons />
        <ChangePassword show={editPassword} setShow={setEditPasswordShow} />
        <ChangePin show={editPin} setShow={setEditPinShow} />
        <ContactUs show={contact} setShow={setContactShow} />
      </section>
      <section>
        <Notification_Popup
          show={notificationshow}
          setShow={setNotificationShow}
        />
      </section>
    </>
  );
};
export default Header;
