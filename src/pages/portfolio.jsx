import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Table from 'react-bootstrap/Table';
import AdditionalPurchase from '../../src/assets/images/portfolio/new_puchase.png'
import Sip from '../../src/assets/images/portfolio/bar_chart.png'
import Switch from '../../src/assets/images/portfolio/switch.png'
import Redemption from '../../src/assets/images/portfolio/redemption.png'
import Redemtion_Popup from '../components/folio-redemtion-popup';
import Sip_Popup from '../components/folio-sip-popup';
import Additional_Purchase_Popup from '../components/folio-additional-purchase-popup';
import Switch_Popup from '../components/folio-switch-popup';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { detailedPortfolio, familyWisePortfolio } from '../apisMethods';



const Portfolio = () => {

  const nanvigate = useNavigate();
  const [redemptionShow, setRedemptionShow] = useState(false)
  const [additionalShow, setAdditionalShow] = useState(false)
  const [sipShow, setSipShow] = useState(false)
  const [switchShow, setSwitchShow] = useState(false)
  const [reviewdata, setReviewdata] = useState({
    golds: [], debts: [], equitys: [],
    goldPurchaseSubTotal: 0,
    goldCurrentvalueSubTotal: 0,
    goldGainSubTotal: 0,
    debtPurchaseSubTotal: 0,
    debtCurrentvalueSubTotal: 0,
    debtGainSubTotal: 0,
    equityPurchaseSubTotal: 0,
    equityCurrentvalueSubTotal: 0,
    equityGainSubTotal: 0
  })
  const [applicantName, setApplicantName] = useState('')
  const [grandTotal, setGrandTotal] = useState({})
  const location = useLocation();
  const [familyWiseData, setFamilyWiseData] = useState([]);
  const [applicantArray, setApplicantArray] = useState([]);
  const [headers, setHeaders] = useState({});



  useEffect(() => {
    let token = localStorage.getItem("token");
    const header = { headers: { Authorization: `Bearer ${token}` } };
    const userdata = JSON.parse(localStorage.getItem("user"));
    const userFamily = JSON.parse(localStorage.getItem("userFamily"));
    setHeaders(header)
    if (location.state) {
      setApplicantName(location.state.name)
      detailedPortfolioCall(header, location.state)
      familyWisePortfolioCall(userdata.pan, header)
    } else {
      let obj = {
        pan: userFamily[0].Pan,
        gpan: userFamily[0].Gpan,
        name: userFamily[0].Name,
        userId: userFamily[0].userid,
      }
      
      setApplicantName(userFamily[0].Name)
      detailedPortfolioCall(header, obj)
      familyWisePortfolioCall(userdata.pan, header)
    }


  }, [])

  const getPotfolioDetail = (e) => {
    detailedPortfolioCall(headers, e.body)
    setApplicantName(e.label)
  }
  const familyWisePortfolioCall = (pan, headers) => {
    let tempArr = []
    familyWisePortfolio({ pan }, headers).then((res) => {
      if (!res.data) {
      } else {
        setFamilyWiseData(res.data.finalArray)
        let arr = res.data.finalArray
        arr.forEach((data, i) => {
          let obj = { value: data.Pan ? data.Pan : `${i}Gpan_${data.Gpan}`, label: data.Name, body: { gpan: data.Gpan, pan: data.Pan, name: data.Name } }
          tempArr.push(obj)
        })
      }
    })
    setApplicantArray(tempArr)
  }

  const detailedPortfolioCall = (header, selectedReq) => {
    let reqData = selectedReq
    console.log("selectedReq",selectedReq)
    console.log(header, selectedReq);
    if (selectedReq) {
      reqData = selectedReq
      console.log("reqData", reqData);
    }
    detailedPortfolio(reqData, header).then((res) => {
      if (!res.data) {
      } else {
        const reformatedData = reformatData(res.data?.dataSent?.data);
        setReviewdata(reformatedData)
        setGrandTotal(res.data?.dataSent)
      }
    })
  }

  const reformatData = (data) => {
    const golds = [];
    const debts = [];
    const equitys = []
    let goldPurchaseSubTotal = 0;
    let goldCurrentvalueSubTotal = 0
    let goldGainSubTotal = 0

    let debtPurchaseSubTotal = 0;
    let debtCurrentvalueSubTotal = 0
    let debtGainSubTotal = 0

    let equityPurchaseSubTotal = 0;
    let equityCurrentvalueSubTotal = 0
    let equityGainSubTotal = 0



    data.forEach(el => {
      if (el.gold > 0) {
        goldPurchaseSubTotal += Number(el.purchase)
        goldCurrentvalueSubTotal += Number(el.currentvalue)
        goldGainSubTotal += Number(el.gain)
        golds.push({ ...el, gold: el.gold, })
      } else if (el.debt > 0) {
        debtPurchaseSubTotal += Number(el.purchase)
        debtCurrentvalueSubTotal += Number(el.currentvalue)
        debtGainSubTotal += Number(el.gain)
        debts.push({ ...el, debt: el.debt })
      } else {
        equityPurchaseSubTotal += Number(el.purchase)
        equityCurrentvalueSubTotal += Number(el.currentvalue)
        equityGainSubTotal += Number(el.gain)
        equitys.push({ ...el, equity: el.equity })
      }
    })

    return { golds, debts, equitys, goldPurchaseSubTotal, goldCurrentvalueSubTotal, goldGainSubTotal, debtPurchaseSubTotal, debtCurrentvalueSubTotal, debtGainSubTotal, equityPurchaseSubTotal, equityCurrentvalueSubTotal, equityGainSubTotal }
  }
  const transactionDetails = (productcode, folio, rta,) => {
    console.log(productcode);
    console.log(folio);
    console.log(rta);
    nanvigate("/dashboard/folio-detail", { state: { productcode, folio, rta } })

  }
  const mapReview = (array) => {
    return array.map((data) => {
      return <>
        <tr>
          <td onClick={() => transactionDetails(data.productcode, data.folio, data.rta)} className="underline curser"> {data.scheme}</td>
          <td>{data.folio}</td>
          <td>{data.unit}</td>
          <td>{data.purchase}</td>
          <td>{data.cnav}</td>
          <td>{data.currentvalue}</td>
          <td>{data.gain}</td>
          <td>{data.days}</td>
          <td>{data.absolute}</td>
          <td>{data.finalcagr}</td>
          <td>
            <div className="d-flex">
              <span><img src={AdditionalPurchase} className="icon-contain ms-3" onClick={() => setAdditionalShow(true)} /></span>
              <span><img src={Sip} className="icon-contain ms-3" onClick={() => setSipShow(true)} /></span>
              <span><img src={Switch} className="icon-contain ms-3" onClick={() => setSwitchShow(true)} /></span>
              <span><img src={Redemption} className="icon-contain ms-3" onClick={() => setRedemptionShow(true)} /> </span>

              <Redemtion_Popup show={redemptionShow} setShow={setRedemptionShow} />
              <Sip_Popup show={sipShow} setShow={setSipShow} />
              <Switch_Popup show={switchShow} setShow={setSwitchShow} />
              <Additional_Purchase_Popup show={additionalShow} setShow={setAdditionalShow} />

            </div>
          </td>
        </tr>
      </>
    })
  }


  const showTotal = (purchase, current, gain) => {
    if (!purchase) {
      return
    }
    return <tr className="bg-gray ">
      <td className="fw-600">Sub Total</td>
      <td></td>
      <td></td>
      <td>{purchase.toFixed(2)}</td>
      <td></td>
      <td>{current.toFixed(2)}</td>
      <td>{gain.toFixed()}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  }




  return (
    <>
      <div className="wrapper pe-5">
        <div className="report px-lg-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-3">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
            </ol>
          </nav>
        </div>
        
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 px-lg-5 pb-3 pt-4">
                <h6 class="heading-cust"> Report On Unrealized Gains Only</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 px-lg-5">
                <div className="portfolio px-lg-3">
                  <label className="pb-2">Select Applicant Name</label>
                  <Select options={applicantArray} onChange={getPotfolioDetail} className="single-drop" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 px-lg-5">
                <div className="detail-port p-2">
                  <div className="port-h">
                    <Table bordered striped responsive>
                      <thead>
                        <tr className="text-red bg-light-red text-lg-start text-center position-sticky top-0">
                          <th className="wd-20rem">Scheme / Company</th>
                          <th className="wd-5rem">Folio</th>
                          <th className="wd-7rem">Balance Units</th>
                          <th className="wd-7rem">Purchase Cost</th>
                          <th className="wd-7rem">Current NAV</th>
                          <th className="wd-7rem">Market Value</th>
                          <th className="wd-5rem">Gain/Loss</th>
                          <th className="wd-5rem">Avg. Days</th>
                          <th className="wd-8rem">Absolute Return %</th>
                          <th className="wd-5rem">CAGR %</th>
                          <th>Transact</th>
                        </tr>
                        <p className="pt-2 text-red">{applicantName}</p>

                      </thead>
                      <tbody className="text-lg-start text-center">
                        {reviewdata.equitys.length > 0 && <p className="text-primary">Equity</p>}
                        {reviewdata.equitys.length > 0 && mapReview(reviewdata.equitys).map((data) => {
                          return data
                        })}
                        {showTotal(reviewdata.equityPurchaseSubTotal, reviewdata.equityCurrentvalueSubTotal, reviewdata.equityGainSubTotal)}

                        {reviewdata.debts.length > 0 && <p className="text-primary">Debt</p>}
                        {reviewdata.debts.length > 0 && mapReview(reviewdata.debts).map((data) => {
                          return data
                        })}
                        {showTotal(reviewdata.debtPurchaseSubTotal, reviewdata.debtCurrentvalueSubTotal, reviewdata.debtGainSubTotal)}

                        {reviewdata.golds.length > 0 && <p className="text-primary">Gold</p>}
                        {reviewdata.golds.length > 0 && mapReview(reviewdata.golds).map((data) => {
                          return data
                        })}
                        {showTotal(reviewdata.goldPurchaseSubTotal, reviewdata.goldCurrentvalueSubTotal, reviewdata.goldGainSubTotal)}



                        <tr className="bg-light-red fw-bold">
                          <td>Grand Total</td>
                          <td></td>
                          <td></td>
                          <td>{grandTotal.Totalpurchase}</td>
                          <td></td>
                          <td>{grandTotal.TotalMarketValue}</td>
                          <td>{grandTotal.Gainloss}</td>
                          <td></td>
                          <td></td>
                          <td>{grandTotal.finalcagr}</td>
                          <td></td>
                          
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

    </>
  )
}
export default Portfolio 