import React from 'react';
import { BsFilterLeft } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import $ from 'jquery';
export default function Filter_schemes() {
function closeNav () 
{   
$("#mySidepanel").css({ "width": "0" });
$("#mySidepanel").removeClass("mobile-responsive");
$(".main-btn-f").css({ "margin-left": "0%" });
$(".tablist.sp .react-tabs__tab").removeClass("padding");
}
function openNav () 
{
$("#mySidepanel").css({ "width": "25%" });
$("#mySidepanel").addClass("mobile-responsive");
$(".main-btn-f").css({ "margin-left": "25%" });
$(".tablist.sp .react-tabs__tab").addClass("padding");
}
return (
<>
<div className="filter-main">
  <div className="">
    <button className='btn-filter fs-19' onClick={openNav}>
      Filter 
      <BsFilterLeft className='text-black fs-27'/>
    </button>
  </div>
  <div id="mySidepanel" className="sidepanel">
    <div className="col-md-12 p-3">
      <a href="javascript:void(0)" className="py-2" onClick={closeNav}>
        <FaTimes className='float-right text-red fs-19'/>
      </a>
    </div>
    <hr />
    <div className="row ">
      <div className="col-md-12 pe-4 filter-s" >
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" className="border-bottom">
            <Accordion.Header className='bg-gray border-0'>
              <div className="col-md-9 text-start ps-2 fw-600">Equity</div>
            </Accordion.Header>
            <Accordion.Body className='bg-gray'>
              <div className="row ">
                <div className="col-md-12 bg-white rounded bg-c py-3">
                  <Table className='custom'>
                    <tr>
                      <td className='fs-13'>Thematic Fund - Global</td>
                      <td> <input type="checkbox" className="form-check-input" value=""/></td>
                    </tr>
                    <tr>
                      <td className='fs-13'>Sectoral Fund - Infrastructure</td>
                      <td> <input type="checkbox" className="form-check-input" value=""/></td>
                    </tr>
                    <tr>
                      <td className='fs-13'>Focused Fund</td>
                      <td> <input type="checkbox" className="form-check-input" value=""/></td>
                    </tr>
                  </Table>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="border-bottom">
            <Accordion.Header className='bg-gray'>
              <div className="col-md-9 text-start ps-2 fw-600">Hybrid</div>
            </Accordion.Header>
            <Accordion.Body className='bg-gray'>
              <div className="row ">
                <div className="col-md-12 bg-white rounded bg-c py-3">
                  <Table className='custom'>
                    <tr>
                      <td className='fs-13'>Balanced Hybrid Fund</td>
                      <td> <input type="checkbox" className="form-check-input" value=""/></td>
                    </tr>
                    <tr>
                      <td className='fs-13'>Multi Asset Allocation
                        Real Estate
                      </td>
                      <td> <input type="checkbox" className="form-check-input" value=""/></td>
                    </tr>
                    <tr>
                      <td className='fs-13'>Arbitrage Fund</td>
                      <td> <input type="checkbox" className="form-check-input" value=""/></td>
                    </tr>
                  </Table>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="border-bottom">
            <Accordion.Header className='bg-gray'>
              <div className="col-md-9 text-start ps-2 fw-600">Other</div>
            </Accordion.Header>
            <Accordion.Body className='bg-gray'>
              <div className="row ">
                <div className="col-md-12 bg-white rounded bg-c py-3">
                  <Table className='custom'>
                    <tr>
                      <td className='fs-13'>FoFs (Overseas)</td>
                      <td> <input type="checkbox" className="form-check-input" value=""/></td>
                    </tr>
                    <tr>
                      <td className='fs-13'>ETFs - Other</td>
                      <td> <input type="checkbox" className="form-check-input" value=""/></td>
                    </tr>
                    <tr>
                      <td className='fs-13'>FoFs (Domestic) - Equity Oriented</td>
                      <td> <input type="checkbox" className="form-check-input" value=""/></td>
                    </tr>
                  </Table>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="">
            <Accordion.Header className='bg-gray'>
              <div className="col-md-9 text-start ps-2 fw-600">Commodity</div>
            </Accordion.Header>
            <Accordion.Body className='bg-gray'>
              <div className="row ">
                <div className="col-md-12 bg-white rounded bg-c py-3">
                  <Table className='custom'>
                    <tr>
                      <td className='fs-13'>FoFs (Domestic / Overseas ) - Gold</td>
                      <td> <input type="checkbox" className="form-check-input" value=""/></td>
                    </tr>
                    <tr>
                      <td className='fs-13'>ETFs - Other</td>
                      <td> <input type="checkbox" className="form-check-input" value=""/></td>
                    </tr>
                    <tr>
                      <td className='fs-13'>ETFs - Gold</td>
                      <td> <input type="checkbox" className="form-check-input" value=""/></td>
                    </tr>
                  </Table>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
    <hr className='mt-0' />
    <div className="row">
      <div className="col-md-12 pb-3">
        <button className='btn-custom float-right'>Apply</button>
      </div>
    </div>
  </div>
</div>
</>
)
}