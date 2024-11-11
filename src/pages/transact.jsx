import React, { useState } from "react";
import New_purchase from "../assets/images/others/new_puchase.png";
import Additional_puchase from "../assets/images/others/add_puchase.png";
import switch1 from "../assets/images/others/switch.png";
import sip from "../assets/images/others/bar_chart.png";
import stp from "../assets/images/others/STP.png";
import swp from "../assets/images/others/withdraw.png";
// import cancel from "../../assets/images/icons/others/cancel.png";
import redemption from "../assets/images/others/redemption.png";
import SIPTransact from "../components/sip-transact";
import NewPurchaseTransact from "../components/new-purchase-transact";
import AddPurchaseTransact from "../components/add-purchase-transact";
import SwitchTransact from "../components/switch-transact";
import STPTransact from "../components/stp-transact";
import SWPTransact from "../components/swp-transact";
import RedemptionTransact from "../components/redemption-transact";
import { useEffect } from "react";
import { getAmcList,userProfile } from "../apisMethods";
// import success from "../../assets/images/icons/others/successfully.png";

const Transact = () => {
  const [sipShow, setSipShow] = useState(false);
  const [newPurchaseShow, setNewPurchaseShow] = useState(false);
  const [addPurchaseShow, setAddPurchaseShow] = useState(false);
  const [switchShow, setSwitchShow] = useState(false);
  const [stpShow, setStpShow] = useState(false);
  const [swpShow, setSwpShow] = useState(false);
  const [redemptionShow, setRedemptionShow] = useState(false);
  const [amcList, setAmcList] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [userProfileData, setUserProfileData] = useState({});


  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    const userdata = JSON.parse(localStorage.getItem("user"));

    userProfileCall(userdata.pan,headers)
    getAmcList(headers).then((res) => {
      setAmcList(res.data?.data);
      console.log("amc",res.data?.data);
    });
  }, []);

  
  const userProfileCall = (pan,header) =>{
    userProfile({pan}, header).then(res=>{
        console.log(res.data.data);
        setUserProfileData(res.data?.data)
    })

  }

  return (
    <>
      <div className="wrapper">
        <div className="px-lg-5 px-smc-1">
          {/* Page Heading */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="home">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Transact
              </li>
            </ol>
          </nav>
          <section className="pb-4 transact">
            <div className="container bg-light-red tp">
              <div className="row align-items-stretch">
                <div className="col-md-3 align-self-center mb-4">
                  <div className=" transactcard  py-lg-5 py-3 mx-lg-3  roundedc">
                    <a
                      className=" bg-white transact-link"
                      type="button"
                      onClick={() => setSipShow(true)}
                    >
                      <div className="goal-card text-center">
                        <img src={sip} className="mr-2 new-icon  p-3" alt="" />
                        <br />
                        <h4 className="pt-4">SIP</h4>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-4 pt-xs-2 mb-4">
                      <div className="transactcard py-3 mx-lg-3 roundedc">
                        <a
                          className=" bg-white transact-link"
                          type="button"
                          onClick={() => setNewPurchaseShow(true)}
                        >
                          <div className="goal-card text-center">
                            <img
                              src={New_purchase}
                              className="mr-2 new-icon p-3"
                              alt=""
                            />
                            <br />
                            <h4 className="pt-4">New Purchase</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 pt-xs-2">
                      <div className="transactcard py-3 mx-lg-3 roundedc mb-4">
                        <a
                          className=" bg-white transact-link"
                          type="button"
                          onClick={() => setAddPurchaseShow(true)}
                        >
                          <div className="goal-card text-center">
                            <img
                              src={Additional_puchase}
                              className="mr-2 new-icon  p-3"
                              alt=""
                            />
                            <br />
                            <h4 className="pt-4">Additional Purchase</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 pt-xs-2">
                      <div className=" transactcard py-3 mx-lg-3 roundedc">
                        <a
                          className=" bg-white transact-link"
                          type="button"
                          onClick={() => setSwitchShow(true)}
                        >
                          <div className="goal-card text-center">
                            <img
                              src={switch1}
                              className="mr-2 new-icon  p-3"
                              alt=""
                            />
                            <br />
                            <h4 className="pt-4">Switch</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 pt-4">
                      <div className="transactcard py-3 mx-lg-3 roundedc">
                        <a
                          className=" bg-white transact-link"
                          type="button"
                          onClick={() => setStpShow(true)}
                        >
                          <div className="goal-card text-center">
                            <img
                              src={stp}
                              className="mr-2 new-icon  p-3"
                              alt=""
                            />
                            <br />
                            <h4 className="pt-4">STP</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 pt-4">
                      <div className="transactcard py-3 mx-lg-3 roundedc">
                        <a
                          className=" bg-white transact-link"
                          type="button"
                          onClick={() => setSwpShow(true)}
                        >
                          <div className="goal-card text-center">
                            <img
                              src={swp}
                              className="mr-2 new-icon  p-3"
                              alt=""
                            />
                            <br />
                            <h4 className="pt-4">SWP</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 pt-4">
                      <div className="transactcard py-3 mx-lg-3 roundedc">
                        <a
                          className=" bg-white transact-link"
                          type="button"
                          onClick={() => setRedemptionShow(true)}
                        >
                          <div className="goal-card text-center">
                            <img
                              src={redemption}
                              className="mr-2 new-icon  p-3"
                              alt=""
                            />
                            <br />
                            <h4 className="pt-4">Redemption</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <SIPTransact
              show={sipShow}
              setShow={setSipShow}
              amcList={amcList}
              userProfileData={userProfileData}                                     

            />
            <NewPurchaseTransact
              show={newPurchaseShow}
              setShow={setNewPurchaseShow}
              amcList={amcList}
              userProfileData={userProfileData}   
            />
            <AddPurchaseTransact
              show={addPurchaseShow}
              setShow={setAddPurchaseShow}
              amcList={amcList}
              userProfileData={userProfileData}   
            />
            <SwitchTransact
              show={switchShow}
              setShow={setSwitchShow}
              amcList={amcList}
              userProfileData={userProfileData}   
            />
            <STPTransact
              show={stpShow}
              setShow={setStpShow}
              amcList={amcList}
              userProfileData={userProfileData}   
            />
            <SWPTransact
              show={swpShow}
              setShow={setSwpShow}
              amcList={amcList}
              userProfileData={userProfileData}   
            />
            <RedemptionTransact
              show={redemptionShow}
              setShow={setRedemptionShow}
              amcList={amcList}
              userProfileData={userProfileData}   
            />
          </section>
        </div>
      </div>
    </>
  );
};
export default Transact;
