import React from "react"
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Link, useLocation } from "react-router-dom";
import { personalDetail, transactionDetail } from '../apisMethods';


const Folio_Detail = () => {
  const location = useLocation();
  const [transactionData, setTransactionData] = useState([])
  const [personalDetaildata, setPersonalDetaildata] = useState([
   { BANKACNO:"10037827626",
     BNAME:  "State Bank of India",
      BNKACTYPE: "SB",
       FOLIO:"6729058/78",
        MOH: "AS",
         NAME:"Om Prakash Agrawal(ANURAG)", NOM2_NAME:"", NOM3_NAME:"", NOMINEE1:"Swati Agarwal", PAN:"AEWPA6762K", SCHEME:"ICICI Pru Balanced Advantage Fund(G)", STATUS:
    "Individual"}])
  const [totalBalance, setTotalBalance] = useState()

  useEffect(() => {
    console.log(location.state);
    let token = localStorage.getItem("token");
    const header = { headers: { Authorization: `Bearer ${token}` } };
    const userdata = JSON.parse(localStorage.getItem("user"));
    let urlData = location.state
    console.log("urlData", urlData);
    transactionDetailCall(header, urlData)
  }, [])

  const transactionDetailCall = (header, reqData) => {
    transactionDetail(reqData, header).then(res => {
      if (!res.data) {
      } else {
        setTransactionData(res.data?.data)
        let balanceUnit = 0;
        console.log("cnav", res.data?.data);
        (res.data?.data).map((data) => {
          balanceUnit += data.UNITS
        })
        setTotalBalance(balanceUnit)
      }
    })
    personalDetail(reqData, header).then(res => {
      if (!res.data) {
      } else {
        console.log("aa", res.data?.data)
        setPersonalDetaildata(res.data?.data)
      }
    })
  }


  const transactonReview = (array) => {
    let balanceUnit = 0;
    // setTotalcnav(array[0].cnav) 

    return array.map((data) => {
      balanceUnit += data.UNITS
      return <>  <tr>
        <td>{data.TD_TRDT}</td>
        <td>{data.DESC}</td>
        <td>{data.AMOUNT.toFixed(3)}</td>
        <td>{data.TD_NAV}</td>
        <td>{data.UNITS}</td>
        <td>{balanceUnit.toFixed(3)}</td>
        {/* <td>{data.RTA}</td> */}
      </tr>
      </>

    })
  }
  return (
    <>
      <div className="wrapper">
        <div className="report px-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/dashboard/portfolio">Portfolio</Link> </li>
              <li className="breadcrumb-item active" aria-current="page">Folio Detail </li>
            </ol>
          </nav>
        </div>
        <section className="mt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-11">
                <div className="folio-detail single-drop bg-gray ps-2 mb-5 table-responsive">
                  <Table>
                    <thead>

                      <tr>
                        <th>Name </th>
                        <th>:</th>
                        <td>{personalDetaildata[0].NAME}</td>
                        <th className="wd-5rem">Folio Number</th>
                        <th className="wd-1rem">:</th>
                        <td>{personalDetaildata[0].FOLIO}</td>
                      </tr>
                      <tr>
                        <th className="wd-6rem">Scheme Name</th>
                        <th className="wd-1rem">:</th>
                        <td className="wd-23rem">{personalDetaildata[0].SCHEME}</td>
                        <th>MOH </th>
                        <th>:</th>
                        <td>{personalDetaildata[0].MOH}</td>
                      </tr>
                      <tr>
                        <th>Nominee 1</th>
                        <th>:</th>
                        <td>{personalDetaildata[0].NOMINEE1 ? personalDetaildata[0].NOMINEE1 :""}</td>
                        <th>Bank </th>
                        <th>:</th>
                        <td className="wd-11rem">{personalDetaildata[0].BNAME } ({personalDetaildata[0].BANKACNO})</td>
                      </tr>
                      <tr>
                        <th>Nominee 2 </th>
                        <th>:</th>
                        <td>{personalDetaildata[0].NOM2_NAME ? personalDetaildata[0].NOM2_NAME :""}</td>
                        <th>Nominee 3 </th>
                        <th>:</th>
                        <td>{personalDetaildata[0].NOM3_NAME ? personalDetaildata[0].NOM3_NAME :""} </td>
                      </tr>
                    </thead>
                  </Table>
                </div>

                <div className="folio-detail-info single-drop mt-4">
                  <Table bordered responsive>
                    <thead>
                      <tr className="text-red">
                        <th className="wd-5rem">Date</th>
                        <th className="wd-7rem">Nature</th>
                        <th>Amount</th>
                        <th>NAV</th>
                        <th>Units</th>
                        <th className="wd-7rem">Balance Units</th>
                        {/* <th>RTA</th> */}
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {
                        transactionData.length > 0 && transactonReview(transactionData).map((data) => {
                          return data
                        })}
                      <tr className="bg-light-red">
                        <td></td>
                        <th>Current Value</th>
                        <th>{(totalBalance * transactionData[0]?.cnav).toFixed(2)}</th>
                        <th>{Number(transactionData[0]?.cnav).toFixed(2)}</th>
                        <th>{Number(totalBalance).toFixed(2)}</th>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </section>



      </div>

    </>

  )
}
export default Folio_Detail