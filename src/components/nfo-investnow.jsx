import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import success from "../assets/images/others/successfully.png";

const NfoInvestNow = ({show,setShow})=>{

  const [Cart, setCart] = useState("d-block");
  const [Successp, setSuccessp] = useState("d-none");

  const payment_mode = [
    { value: "Net Banking", label: "Net Banking" },
    { value: "UPI", label: "UPI" },
    { value: "RTGS/NEFT", label: "RTGS/NEFT" },
    { value: "Debit Mandate", label: "Debit Mandate" },
    ];
    const profile = [
    { value: "select", label: "select" },
    ];
  
    const cart = () => {
      setSuccessp("d-block")
      setCart("d-none")
      }
        
return (
    <>

       <Modal show={show}  onHide={()=>setShow(false)}   className="invest-gray">
       <div className={`${Cart}`}>
       <Modal.Header closeButton className="bg-gray">
          <Modal.Title>NFO</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-gray ">
          <p className='fs-13 text-red'>Kotak Bluechip Fund-Growth (Regular Plan) (Eastwhile Kotak 50 Scheme)(705527/17)</p>
          <Form className="portfolio">
          <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Select Profile</Form.Label>
              <Select className='bg-c' options={profile} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Enter Amount </Form.Label>
              <Form.Control type="text" placeholder="Enter Amount" className="border-0 single-drop" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Select Payment Mode </Form.Label>
                <Select className='bg-c' options={payment_mode} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>RTGS/NEFT Code</Form.Label>
              <Form.Control type="text" className="border-0 single-drop" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" className="border-0 single-drop" />
            </Form.Group>
            <div className="col mt-3">
              <ul className="fs-12 mb-0 ps-3 list-unstyled">
                <li>
                  <h6 className="text-red fs-13">Note :-</h6>
                </li>
                <li className="text-rtg"> <span className="text-red">*</span>Beneficiary Virtual Account Number <span className="text-black">- (NSEMF2213995012944559)</span></li>
                <li className="text-rtg"> <span className="text-red">*</span>Beneficiary Account Name <span className="text-black">- NSE Clearing – New Mutual Fund Platform</span></li>
                <li className="text-rtg"><span className="text-red">*</span>IFSC code<span className="text-black">- HDFC0000060</span></li>
                <li className="text-rtg"><span className="text-red">*</span>Bank Name<span className="text-black">-  HDFC Bank Ltd</span></li>
                <li className="text-rtg"><span className="text-red">*</span>Branch Name<span className="text-black">- Fort, Mumbai</span></li>
              </ul>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-top-0 bg-gray">
          <Button variant="danger" onClick={cart}>
            Order Now
          </Button>
        </Modal.Footer>
        </div>


{/* =========SIP Success======== */}
<div className={`${Successp}`}>
   
                 <Modal.Body className="bg-light-red br-15">   
                  <div className="py-0">
                     <div className="text-center">
                       <img className="img-fluid" src={success} alt="" />
                       <h6 className="success-c fw-500 py-3 fs-19 fs-sm-15">Successful Transaction with
                         Following Details
                       </h6>
                     </div>
                     <table className="table mx-3 fs-sm-14">
                     <tr>
                       <td>Unique Number </td>
                       <td>:</td>
                       <td className='ps-3'>12345678</td>
                       </tr>
                       <tr>
                       <td>Trxn Number </td>
                       <td>:</td>
                       <td  className='ps-3'>12346195</td>
                       </tr>
                       <tr>
                       <td>Fund</td>
                       <td>:</td>
                       <td  className='ps-3'>Axis Mutual Fund</td>
                       </tr>
                         <tr>
                       <td>Folio Number </td>
                       <td>:</td>
                       <td  className='ps-3'>12345678</td>
                       </tr>
                       <tr>                    
                       <td>Amount   </td>
                       <td>:</td>
                       <td  className='ps-3'>1,000</td>
                       </tr>  
                       <tr>
                       <td>Status   </td>
                       <td>:</td>
                       <td  className='ps-3'>Successful</td>
                       </tr>
                      <tr>
                      <td>Scheme Name </td>
                      <td>:</td>
                      <td  className='ps-3'>Axis Arbitrage Fund - Regular Growth</td>
                       </tr>
                     </table>
                     <hr />
                     <p className="text-black fs-13 text-center">
                         <span className="text-red  fw-500 fs-16">Note:</span>  Authorization link has been sent on your registered mail id and mobile number.The Link shall remain active for the next 48 hours.Kindly authorize.
                       </p>
                   </div>
                  
   </Modal.Body>
   <Modal.Footer className='border-0 bg-light-red'>
   
   </Modal.Footer>
 </div>

      </Modal>
    </>
  )
}
export default NfoInvestNow;