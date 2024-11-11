import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Notification_Popup from './notification-popup';
const Notification = ({ show, setShow }) => {
  const [notyShow,setNotyShow] = useState(false)
  return(
    <>

       <section className={`notification ${show} animate__animated animate__zoomIn animate__delay-0.5s`} >
        <div className="notification-item border-bottom">
        <div className="row">
          <div className="col-md-9">
          <Link to="" onClick={() => setNotyShow(true)} >
            <h6 className="text-black">Change in folio Nos.-HSBC MF</h6>
            <p className="fs-13 text-red mb-0">The folio numbers of HSBC Mutual Funds will be changed to an  8-digit folio number.</p>
            </Link>
          </div>
          <div className="col-md-3 pt-lg-3 text-secondary">3 days</div>
          </div>
        </div>
        <div className="notification-item border-bottom">
        <div className="row">
          <div className="col-md-9">
          <a href="">
            <h6 className="text-black">Change in folio Nos.-HSBC MF</h6>
            <p className="fs-13 text-red mb-0">The folio numbers of HSBC Mutual Funds will be changed to an  8-digit folio number.</p>
            </a>
          </div>
          <div className="col-md-3 pt-lg-3 text-secondary">3 days</div>
          </div>
        </div>
        <div className="notification-item border-bottom">
        <div className="row">
          <div className="col-md-9">
          <a href="">
            <h6 className="text-black">Change in folio Nos.-HSBC MF</h6>
            <p className="fs-13 text-red mb-0">The folio numbers of HSBC Mutual Funds will be changed to an  8-digit folio number.</p>
            </a>
          </div>
          <div className="col-md-3 pt-lg-3 text-secondary">3 days</div>
          </div>
        </div>
        </section>

        <Notification_Popup  show={notyShow} setShow={setNotyShow} />
        
    </>
  )
}
export default Notification