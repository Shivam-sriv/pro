import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Terms_and_Conditions =()=>
{
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <>
      <a href="#"  onClick={handleShow}   className="fs-14">Terms & Conditions</a>  
      
       

      

      <Modal show={show} onHide={handleClose}   size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Terms & Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div>
    <p>
    BFC Capital is an MFD which enables Users to purchase units of various mutual funds, details of which shall be made available on this platform, from time to time.
    </p>
    <p>
    User investment Account will be activated after BFC Capital completes the verification process on the personal information provided at the time of enrolment and in accordance with the Know Your Client (“KYC“) guidelines issued by the Securities and Exchange Board of India (“SEBI”). 
    </p>
    <p>
    The software and hardware underlying the Websites as well as other internet related software which is required for accessing the Website are the legal property of the respective vendors. The permission given by BFC Capital to access the Mobile App will not convey any proprietary or ownership rights in the above software/ hardware. User agrees that user shall not attempt to modify, translate, disassemble, decompile or reverse engineer the software/hardware underlying the Website or create any derivative product based on the software / hardware.
    </p>
    <p>
    BFC Capital has the absolute discretion to amend or supplement any of the Terms and Conditions at any time without prior notice for such changes. Any such amendment shall be effective immediately. It shall be Users responsibility to review the Terms and Conditions periodically for any updates/changes.
    </p>
    <p>
    User hereby irrevocably and unconditionally grants no objection to BFC Capital and the respective mutual funds / RTAs to collate the transaction details relating to the investments in mutual fund units done by user on the online technology platform of BFC Capital and provide such transaction data to BFC Capital for further processing of user transactions.
    </p>
    <p>
    There may be an exit load applicable to certain mutual fund schemes which is mentioned in the respective offer documents including Scheme Information Document (SID) /Key Information Memorandum (KIM) and addendums issued thereto from time to time collectively referred to as "Scheme Related Documents".User shall read all the Scheme Related Documents before making any transaction on this mobile app.
    </p>
    <p>
    While we will make every effort to have its computer systems available at all times, BFC Capital makes no guarantees with respect to the availability of such systems. We will make every effort to resolve availability issues such as network problems, virus attacks etc. in an expeditious manner. Notwithstanding these, BFC Capital will as such not be liable for any loss, damage, cost, charges or expenses directly or indirectly caused by reasons of lack of such availability.
    </p>
    <p>
    All disputes and differences arising out of, under or in connection with the Terms and Conditions or anything done hereunder shall be within the exclusive jurisdiction of the courts at Lucknow. The Terms and Conditions are subject to and shall be construed in accordance with the laws prevalent in India.
    </p>
</div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
  
        
        
        </>
    )
}

export default Terms_and_Conditions