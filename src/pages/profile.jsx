import React, { useState } from "react";
import profile_icon from "../assets/images/others/undraw_profile.svg";
import edit from "../assets/images/others/edit-p.png";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import ChangeMobileNo from "../components/change-mobile-no";
import ChangeEmail from "../components/change-email";
import ChangeDob from "../components/change-dob";
import { useEffect } from "react";

const Profile = () => {
  const [editmobile, setEditMobileShow] = useState(false);
  const [editEmail, setEditEmailShow] = useState(false);
  const [editDob, setEditDobShow] = useState(false);
  const [user, setUser] = useState({ displayName: "", email: "" });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    setUser(user);
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="px-lg-5 px-3">
          {/* Page Heading */}
          <nav aria-label="breadcrumb ">
            <ol className="breadcrumb-nav d-flex ">
              <li className="breadcrumb-item">
                <a href="home">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Profile
              </li>
            </ol>
          </nav>

          <section>
            <div className="row justify-content-center pb-2">
              <div className="col-xl-6 col-lg-6 ">
                <div className="card shadow-custom m-sm-auto">
                  {/* Card Body */}
                  <div className="card-body">
                    <form method="post">
                      <div className="">
                        <div className="col-md-12 pb-2">
                          <div className="profile-img ">
                            <img
                              className="img-profile rounded-circle"
                              src={profile_icon}
                            />
                          </div>
                          <div className="file red text-center  ">
                            <img
                              src={edit}
                              alt=""
                              className="img-fluid img-profile-p edit-p"
                            />
                            <input type="file" name="file" />
                          </div>
                        </div>
                        <div className="px-lg-5 ">
                          <table className="table text-start custom">
                            <tr>
                              <td className="">Name</td>
                              <td>:</td>
                              <th>{user.displayName}</th>
                            </tr>
                            <tr>
                              <td>Mobile Number</td>
                              <td>:</td>
                              <th>
                                0000000000{" "}
                                <Link
                                  type="button"
                                  onClick={() => setEditMobileShow(true)}
                                >
                                  {" "}
                                  <FaPen />
                                </Link>
                              </th>
                            </tr>
                            <tr>
                              <td>PAN</td>
                              <td>:</td>
                              <th>FHSYDAI45DS</th>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td>:</td>
                              <th className="min-w-18em">
                                {user.email}{" "}
                                <Link
                                  type="button"
                                  onClick={() => setEditEmailShow(true)}
                                >
                                  {" "}
                                  <FaPen />
                                </Link>
                              </th>
                            </tr>
                            <tr>
                              <td>IIN</td>
                              <td>:</td>
                              <th>xyz</th>
                            </tr>
                            <tr>
                              <td>Date of Birth</td>
                              <td>:</td>
                              <th>
                                00-00-0000{" "}
                                <Link
                                  type="button"
                                  onClick={() => setEditDobShow(true)}
                                >
                                  {" "}
                                  <FaPen />
                                </Link>
                              </th>
                            </tr>
                            <tr>
                              <td>Gender</td>
                              <td>:</td>
                              <th>MALE</th>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ChangeMobileNo show={editmobile} setShow={setEditMobileShow} />

      <ChangeEmail show={editEmail} setShow={setEditEmailShow} />
      <ChangeDob show={editDob} setShow={setEditDobShow} />
    </>
  );
};
export default Profile;
