import React, { useState } from 'react';
import Select from 'react-select';
import Cart_Delete from '../components/delete-confirmation';
import Otp_Input from "../components/otp";
const AddFamilyMember =()=>
 {
    const [Family, setFamily] = useState("d-block");
const [Otp, setOtp] = useState("d-none");

const otp = () => {
    setOtp("d-block")
    setFamily("d-none")
    }
    const relation =[
        {value:"--Select Relation--",label: "--Select Relation--"},
        {value:"Father",label: "Father"},
        {value:"Mother",label: "Mother"},
        {value:"Wife",label: "Wife"},
        {value:"Husband",label: "Husband"},
        {value:"Son",label: "Son"},
        {value:"Daughter",label: "Daughter"},
        {value:"Other",label: "Other"},
        ];
return(
<>

<div className="wrapper"> 
        <div className=" px-lg-5">
        {/* Page Heading */}
 
  
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb ps-3">
          <li className="breadcrumb-item"><a href="home">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Add Family Member</li>
        </ol>
      </nav>

   <section>
      <div className='container-fluid'>
       <div className="row justify-content-center">
          <div className="col-md-6 col-10 my-5  px-lg-5 py-4  bg-gray shadow-custom ">
            <div className="col-12 text-start px-lg-5 px-3">           
                  <div className="form-group">
                    <label className='text-label '>Enter PAN</label>                                
                    <input type="text" className="form-control border-0 bg-c" name="memberPan" />
                  </div>
                  <div className="form-group ">
                    <label className='text-label'>Relation</label> 
                    <Select className='bg-c' options={relation} />                               
                  </div>
                  <div className={`mb-3 text-center mt-3 ${Family}`}>
                    <button className="btn-custom col-lg-7"  onClick={otp} >Generate OTP</button>                                
                  </div>
                  </div>
                  <div className={`col-md-12 mb-3 ${Otp}`}>
                    <Otp_Input/>
                    <div className="text-center mt-4" >
                      <button className="btn-custom col-md-7 col-8`   ">Add Family Member</button>
                    </div>
                    </div>
                 
                </div>
              
         
        
              </div>
              <div className="row justify-content-center">
              <div className='col-md-6 col-11 shadow-custom bg-gray table-responsive mb-4'>
            <table className="table custom text-center">
                
              <tr>
                <th className='text-red wd-11rem'>Name</th>
                <th className='text-red'>Pan</th>
                <th className='text-red'>Relation</th>
                <th className='text-red'>Action</th>
              </tr>
              
              <tr className='text-black'>
                <td >Mr. Mukesh Kumar Gupta</td>
                <td >ENPPS9985C</td>
                <td >Father</td>
                <td> <Cart_Delete/></td>
              </tr>
              <tr className='text-black'>
                <td >Mr. Mukesh Kumar Gupta</td>
                <td >ENPPS9985C</td>
                <td >Father</td>
                <td> <Cart_Delete/></td>
              </tr>
            </table>
          </div>
          </div>
          </div>
           


   </section>
   </div>
   </div>
</>
)

}
export default AddFamilyMember