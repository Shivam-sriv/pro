import React from "react";
import { Link } from "react-router-dom";
import {FaUsers,FaBook,FaShoppingBag,FaBriefcase,FaUniversity,FaUserPlus} from "react-icons/fa";
const Right_Icons =()=>
{
return(
<>
<div className="right-icon-s">
  <div class="ng-star-inserted">
    <div  class="right-icon">
      <div  class="ng-star-inserted">
        <ul  class="ul-right ng-star-inserted" style={{marginTop:"-3em"}}>
          <li  class="li1 rightmenu">
            <Link to='/dashboard/portfolio'>
            <FaBriefcase className='fa-2x  img-i'/>
            <div  class="over-text1">Portfolio</div>
            </Link>
          </li>
        </ul>
        <ul  class="ul-right ng-star-inserted" style={{marginTop:"0.4em "}}>
        <li  class="li1 rightmenu">
          <Link to='/dashboard/transact'>
          <FaBook className='fa-2x  img-i'/>
          <div  class="over-text1">Transact</div>
          </Link>
        </li>
        </ul>
        <ul  class="ul-right bank ng-star-inserted" style={{marginTop:"3.8em"}}>
          <li  class="li1 rightmenu">
            <Link to="/dashboard/Profile-creation">
            <FaUserPlus className='fa-2x  img-i'/>
            <div  class="over-text3">Profile Creation / IIN</div>
            </Link>
          </li>
        </ul>
        <ul  class="ul-right bank ng-star-inserted" style={{marginTop:"7.2em"}}>
          <li class="li1 rightmenu">
            <Link to='/dashboard/add-family-member'>
            <FaUsers className='fa-2x  img-i'/>
            <div  class="over-text2">Add Family Member</div>
            </Link>
          </li>
        </ul>
        <ul  class="ul-right bank ng-star-inserted" style={{marginTop:"10.6em"}}>
          <li class="li1 rightmenu">
            <Link to='/dashboard/bank-and-mandate'>
            <FaUniversity className='fa-2x  img-i'/>
            <div  class="over-text2">Bank Details & Mandate</div>
            </Link>
          </li>
        </ul>
        <ul  class="ul-right ng-star-inserted" style={{marginTop:"14em"}}>
          <li class="li1 rightmenu">
            <Link to='/dashboard/my-orders'>
            <FaShoppingBag className='fa-2x  img-i'/>
            <div  class="over-text1">Orders</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</>
)
}
export default Right_Icons