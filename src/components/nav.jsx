import React from "react";
import idfc from "../assets/images/banklogo/IDFC.png";
import Nav_Chart from "./nav-chart";
const NavSingle =()=>
{
return(
<>
<div className="wrapper">
  <div className="px-lg-5 px-2">
    {/* Page Heading */}
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="home">Home</a></li>
        <li className="breadcrumb-item active">Nav</li>
      </ol>
    </nav>
    <section>
      <div className="col-md-10 offset-md-1 card shadow-custom my-5 text-left m-sm-auto" id="single_div">
        <div className="card-body">
          <div className='col-md-12 py-3 table-responsive'>
            <table className='w-100'>
              <tr>
                <td className='px-lg-4'><img src={idfc} alt="" className='img-fluid min-w-3em' /></td>
                <td className='px-lg-4 wd-sm-28'>IDFC Tax Advantage (ELSS)
                  Fund-Growth-Regular Plan
                </td>
                <td className='px-4' style={{ color: "#2E3192" }}>
                <h3>25%</h3>
                </td>
                <td className='px-4 wd-11rem'>3Y annualised</td>
              </tr>
            </table>
          </div>
          <div className='col-md-12'>
            <div className="pt-4">
              <Nav_Chart/>
            </div>
          </div>
          <div className="col-md-8 offset-md-2">
            <div className='nav d-flex justify-content-between nav-h'>
              <div className=''>
                <a href="#">1M</a>
              </div>
              <div className=''>
                <a href="#">6M</a>
              </div>
              <div className=''>
                <a href="#">1Y</a>
              </div>
              <div className=''>
                <a href="#">3Y</a>
              </div>
              <div className=''>
                <a href="#">5Y</a>
              </div>
              <div className=''>
                <a href="#">7Y</a>
              </div>
              <div className=''>
                <a href="#">All</a>
              </div>
            </div>
          </div>
          <div className="col-md-10 offset-md-1 py-4 ps-5 table-responsive">
            <table>
              <tr>
                <td className='px-lg-5 text-label'>NAV: 12 Aug-2022</td>
                <td className='px-5 text-label'>Rating
                </td>
                <td className='px-lg-5 text-label'>Min. SIP amount </td>
                <td className='px-5 text-label wd-11rem'>Fund Size</td>
              </tr>
              <tr>
                <td className='px-5 pt-3'>₹134.56</td>
                <td className='px-5 pt-3'>4  </td>
                <td className='px-5 pt-3'>₹1000</td>
                <td className='px-5 pt-3'>₹1,911 Cr </td>
              </tr>
            </table>
          </div>
          <div className="col-md-12 py-5">
            <button className='btn-custom float-left'>Back</button>
            <button className='btn-custom float-right'>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</>
)
}
export default NavSingle