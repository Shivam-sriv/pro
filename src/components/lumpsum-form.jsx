import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import success from "../assets/images/others/successfully.png";
import sunderam from "../assets/images/banklogo/Sundaram_Mutual_Fund.png";
import sbi from "../assets/images/banklogo/sbi.png";
import idfc from "../assets/images/banklogo/IDFC.png";
import Cart_Delete from './delete-confirmation';
const LumpsumForm =({ show, setShow })=> {
const [Cart, setCart] = useState("d-block");
const [Purchase, setPurchase] = useState("d-none");
const [Confirmp, setConfirmp] = useState("d-none");
const [Detail, setDetail] = useState("d-none");
const cart = () => {
setDetail("d-block")
setCart("d-none")
}
const detail = () => {
setConfirmp("d-block")
setDetail("d-none")
}
const confirmp =()=>
{
setPurchase("d-block")
setConfirmp("d-none")
}
const edit = () => {
setConfirmp("d-none")
setDetail("d-block")
}
const folio = [
{ value: '1544545454', label: '1544545454' },
{ value: '55588888', label: '55588888' },
];
const profile = [
{ value: 'select', label: 'select' },
];
const scheme = [
{ value: "--select--", label: "--select--" },
];
const payment_mode = [
{ value: 'UPI', label: 'UPI' },
{ value: 'Net Banking', label: 'Net Banking' },
{ value: 'RTGS/NEFT', label: 'RTGS/NEFT' },
{ value: 'Debit Mandate', label: 'Debit Mandate' },
];
const bankname = [
{ value: "--select--", label: "--select--" },
];
return(
<>
<div className="">
  <Modal show={show} onHide={() =>
    setShow(false)} className="animate__animated animate__zoomIn animate__fast invest-sip" centetext-red >
    {/* =========cart======== */}
    <div className={`${Cart}`}>
      <Modal.Header className="bg-gray" closeButton >
        <Modal.Title className='fs-5'>My Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-gray">
        <h6 className='text-black fs-16'>Schemes Name</h6>
        <div class="col-md-12">
          <div className=' d-flex justify-content-between shadowcart mb-2 p-3'>
            <div className=''><img src={idfc} alt="" className='img-fluid' /></div>
            <div className='text-center'><a href='!#'>IDFC Tax Advantage (ELSS)
              Fund-Growth-Regular Plan </a>
            </div>
            <div className=' '>
              <Cart_Delete/>
            </div>
          </div>
          <div className=' d-flex justify-content-between shadowcart mb-2 p-3'>
            <div className=''><img src={sunderam} alt="" className='img-fluid' /></div>
            <div className='text-center'><a href='!#'>Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
              Regular Growth </a>
            </div>
            <div className=''>
              <Cart_Delete/>
            </div>
          </div>
          <div className=' d-flex justify-content-between shadowcart mb-2 p-3'>
            <div className=''><img src={sunderam} alt="" className='img-fluid' /></div>
            <div className='text-center'><a href='!#'>Sundaram Tax Savings Fund (Formerly Principal Tax Savings Fund)-
              Regular Growth </a>
            </div>
            <div className=''>
              <Cart_Delete/>
            </div>
          </div>
          <div className=' d-flex justify-content-between shadowcart mb-2 p-3'>
            <div className=''><img src={sbi} alt="" className='img-fluid' /></div>
            <div className='text-center'><a href='!#'>SBI Long Term Equity Fund-Regular
              Plan-Growth  </a>
            </div>
            <div className=' '>
              <Cart_Delete/>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className='border-0 bg-gray'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);" onClick={cart} >Continue</a>
      </Modal.Footer>
    </div>
    {/* =========Investment Details======== */}
    <div className={`${Detail}`}>
      <Modal.Header className="bg-gray" closeButton >
        <Modal.Title className='fs-5'>Investment Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-gray">
        <form>
          <div className="col mb-3 ">
            <label htmlFor="Profile" className='text-label' >Select Profile <span className='text-danger'>*</span></label>
            <Select className='bg-c' options={profile} />
          </div>
        </form>
        <div className='cartitemwith'>
          <div className='row p-4'>
            <div className='col-md-12  text-red '>SBI Long Term Equity Fund-Regular
              Plan-Growth
            </div>
          </div>
          <div className="col bg-white py-3 px-4">
            <label htmlFor="Profile" className='fs-14' >Select Folio <span className='text-danger'>*</span></label>
            <Select className='border-pop' options={folio} />
          </div>
          <div className="col mb-3 bg-white pb-4 px-4 lastin">
            <label htmlFor="amount" className='fs-14' >Enter Amount <span className='text-danger'>*</span></label>
            <input type="text" className="form-control border-pop " name="amount" placeholder='Enter Amount' />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className='border-0 bg-gray'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);" onClick={detail} >Continue</a>
      </Modal.Footer>
    </div>
    {/* =========confirm puchase======== */}
    <div className={`${Confirmp}`}>
      <Modal.Header className="bg-gray" closeButton >
        <Modal.Title className='fs-5'>Confirm Purchase</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-gray">
        <div className="col mb-3 border-bottom">
          <h6 className='text-red'>Shivam Shrivastav</h6>
          <p>Mode of Holding :  Single <a href="#" className='p-4 ml-lg-5'onClick={edit}>Edit</a></p>
        </div>
        <p className='text-red'>Axis Long Term Equity Fund-Regular-Growth</p>
        <table className='table'>
          <tr className='text-center'>
            <td >Folio  </td>
            <td>:</td>
            <td >124564</td>
          </tr>
          <tr className='text-center'>
            <td>Amount  </td>
            <td>:</td>
            <td>50,000</td>
          </tr>
        </table>
        <p className='text-center pt-5'><b>Total  :  55,55882</b></p>
      </Modal.Body>
      <Modal.Footer className='border-0 bg-gray'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);" onClick={confirmp} >Continue</a>
      </Modal.Footer>
    </div>
    {/* =========Purchase======== */}
    <div className={`${Purchase}`}>
      <Modal.Header className="bg-gray" closeButton >
        <Modal.Title  className='fs-5'>Purchase</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-gray">
        <form>
          <p className='text-red'>Investment Total : 5000.00</p>
          <div className="col mb-3 ">
            <label htmlFor="Profile" className='text-label' >Select Payment Mode <span className='text-danger'>*</span></label>
            <Select className='bg-c' options={payment_mode} />
          </div>
          <div className="col mb-3 ">
            <label htmlFor="Profile" className='text-label' >Select Bank <span className='text-danger'>*</span></label>
            <Select className='bg-c' options={profile} />
          </div>
          <div className="col mb-3 ">
            <label htmlFor="rtgs" className='text-label' >RTGS/NEFT Code <span className='text-danger'>*</span></label>
            <input type="text" className="form-control bg-c" name="rtgs" placeholder='' />
          </div>
          <div className="col mb-3 ">
            <label htmlFor="date" className='text-label' >Date <span className='text-danger'>*</span></label>
            <input type="date" className="form-control bg-c" name="date" />
          </div>
          <div className="col">
            <input className="input-text " id="immediatePay" type="radio" name="payType" value="Y" />
            <label htmlFor="immediatePay" className="ps-2 fs-sm-14">Immediate Payment</label>
            <input className=" input-text ms-3" id="emailLink" type="radio" name="payType" value="N" />
            <label htmlFor="emailLink" className="ps-2 fs-sm-14">Link On Email</label>
          </div>
          <div className="col mt-3">
            <ul className="fs-12 mb-0 lst-none ps-0">
              <li>
                <h6 className="text-red fs-13">Note :-</h6>
              </li>
              <li className="text-label"> <span className="text-red">*</span>Beneficiary Virtual Account Number <span className="text-black">- (NSEMF2213995012944559)</span></li>
              <li className="text-label"> <span className="text-red">*</span>Beneficiary Account Name <span className="text-black">- NSE Clearing – New Mutual Fund Platform</span></li>
              <li className="text-label"><span className="text-red">*</span>IFSC code<span className="text-black">- HDFC0000060</span></li>
              <li className="text-label"><span className="text-red">*</span>Bank Name<span className="text-black">-  HDFC Bank Ltd</span></li>
              <li className="text-label"><span className="text-red">*</span>Branch Name<span className="text-black">- Fort, Mumbai</span></li>
            </ul>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className='border-0 bg-gray'>
        <a type="button" className="btn btn-danger shadow-sm" href="javascript:void(0);" >Order</a>
      </Modal.Footer>
    </div>
  </Modal>
</div>
</>
)
}
export default LumpsumForm