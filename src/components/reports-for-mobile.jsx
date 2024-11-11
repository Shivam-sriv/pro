import React from "react";
import Modal from 'react-bootstrap/Modal';
import sip from "../assets/images/others/sip-rep.png";
import taxr from "../assets/images/others/tax-rep.png";
import transaction from "../assets/images/others/transaction-rep.png";
import dividend from "../assets/images/others/dividend-rep.png";
import { Link } from "react-router-dom";
const ReportsMobile =({ show, setShow })=> 
{

return(
<>
<Modal show={show} onHide={() =>
  setShow(false)} size="sm" className="border-red"  scrollable={true} >   
  <Modal.Header  closeButton >
    <Modal.Title className='text-red'>Reports</Modal.Title>
  </Modal.Header>
  <Modal.Body >
  <div className="row mb-3">
                         <div className="col-12">
                         <Link to="dashboard/sipstpswp-report">
                          <div className="quick-card mt-2">
                          
                          <img src={sip} className="me-2 new-icon" alt=''/>
        MY SIP/STP/SWP
                            
                          </div>
                          </Link>
                        </div>
                        <div className="col-12">
                        <Link to="dashboard/transaction-report">
                          <div className="quick-card mt-2">
                        
                          <img src={transaction} className="me-2 img-fluid new-icon" alt='' />
        My Transactions
                           
                          </div>
                          </Link>
                        </div>
                        
                        <div className="col-12">
                        <Link to="/dashboard/tax-saving-investments">
                          <div className="quick-card mt-2">
                        
                          <img src={taxr} className="me-2 img-fluid new-icon" alt='' />
        Tax Saving Investments
                         
                          </div>
                          </Link>
                        </div>
                        <div className="col-12">
                        <Link to="dashboard/dividends">
                          <div className="quick-card mt-2">
                        
                          <img src={dividend} className="me-2 img-fluid new-icon" alt='' />
        Dividends
                          
                         
                          </div>
                          </Link>
                        </div>
                         </div>
  </Modal.Body>
 
</Modal>
</>
)
}
export default ReportsMobile