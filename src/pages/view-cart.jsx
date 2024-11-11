import React ,{useState} from "react";
import sbi from "../assets/images/banklogo/sbi.png";
import idfc from "../assets/images/banklogo/IDFC.png";
import Invest_Sip from "../components/invest-sip";
import Cart_Delete from "../components/delete-confirmation";
import Invest_Lumpsum from "../components/invest-lumpsum";
import { Link } from "react-router-dom";

const View_Cart =()=> 
{

  const [sipinShow,setSipInShow] = useState(false);
  const [lumpsuminShow,setLumpsumInShow] = useState(false);
    
        return(
            <>
          
      
        
        <div className="wrapper"> 
        <div className="px-lg-5 px-3">
      
 {/* Page Heading */}
 <nav aria-label="breadcrumb ">
            <ol className="breadcrumb-nav d-flex  ps-2">
              <li className="breadcrumb-item "><a href="home">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Cart</li>
            </ol>
          </nav>

<section>
    
    <div className="row justify-content-center pb-5">
        <div className="col-md-10 col-lg-8 mb-4">
          <div className="table-responsive">
        <table className='table cart '>
          <tr className='bg-c bg-gray rounded'>
                <td className='wd-5rem ps-3'><img src={sbi} alt="" className='img-fluid' /></td>
                <td className='py-4 wd-20rem'><a href='!#' className="text-black ">SBI Long Term Equity Fund-Regular
                  Plan-Growth  </a>
                </td>
                <td>
                <div className="position-relative py-4 wd-8rem">
                <Link to="#"  onClick={() => setSipInShow(true)}  className="btn-outline">Invest</Link> 
                  </div>
              
                </td>
                <td className=" py-4 wd-5rem">
                <Cart_Delete/>
                </td>
                </tr>
                <br />
                <tr className=' bg-c bg-gray  rounded  '>
                <td className="ps-3"><img src={idfc} alt="" className='img-fluid' /></td>
                <td className="py-4"><a href='!#'className="text-black ps-3">IDFC Tax Advantage (ELSS)
                  Fund-Growth-Regular Plan </a>
                  </td>
                  <td>
                  <div className="position-relative">
                  <Link to="#"  onClick={() => setLumpsumInShow(true)}  className="btn-outline">Invest</Link>
               </div>
                </td>
                <td>
                <Cart_Delete/>
                  </td>
                </tr>
                <br />
                <tr className=' bg-c bg-gray  rounded  border-bottom-0'>
                <td className="ps-3"><img src={sbi} alt="" className='img-fluid' /></td>
                <td className="py-4 " ><a href='!#' className="text-black">SBI Long Term Equity Fund-Regular
                  Plan-Growth  </a>
                </td>
                <td>
                  <div className="position-relative">
                  <Link to="#"  onClick={() => setSipInShow(true)}  className="btn-outline">Invest</Link> 
                  </div>
                   </td>
                <td  >
                <Cart_Delete/>
                </td>
                </tr>
                <br />
                <tr className=' bg-c bg-gray  rounded  my-4'>
                <td className="ps-3"><img src={sbi} alt="" className='img-fluid' /></td>
                <td className="py-4" ><a href='!#' className="text-black">SBI Long Term Equity Fund-Regular
                  Plan-Growth  </a>
                </td>
                <td >
                <div className="position-relative">
                <Link to="#"  onClick={() => setLumpsumInShow(true)}  className="btn-outline">Invest</Link>
               </div>
                </td>
                <td >
                <Cart_Delete/>
                </td>
                </tr>
              </table>
              </div>
              </div>
    </div>
    <Invest_Sip show={sipinShow} setShow={setSipInShow}/>
    <Invest_Lumpsum show={lumpsuminShow} setShow={setLumpsumInShow}/> 
</section>

              
              </div>
            </div>
           
        
            
            
            </>
        )
    
}
export default View_Cart
