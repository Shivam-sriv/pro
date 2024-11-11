import React from "react";
import quant2 from "../assets/images/banklogo/quant1.png";
import { Link } from "react-router-dom";
import { MDBDataTableV5 } from 'mdbreact';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Filter_schemes from "../components/filter";
const SchemePerformance=()=>
{
    const [datatable, setDatatable] = React.useState({    
        columns: [
        {
        label: ' ',
        field: 'img',
        sort: 'disabled',
        
        
        },
        {
        label: 'Scheme Name',
        field: 'name',
        sort: 'disabled',
        
        
        },
        {
        label: '1Y',
        field: 'one',
        },
        {
        label: '3Y',
        field: 'three',
        
        },
        {
        label: '5Y ',
        field: 'five',
        
        },
        {
        label: '7Y ',
        field: 'seven',
        
        },
        {
        label: '',
        field: 'action',
        sort: 'disabled',
        },
        ],
        rows: [
        {
        img:<img src={quant2} />,
        name: <div className="min-w-15em">Quant Small Cap Fund Direct Plan Growth</div>,
        one:  <div className="min-w-8em">37.54%</div>,
        three:  <div className="min-w-8em">30.54%</div>,
        five:  <div className="min-w-8em">45.54%</div>,
        seven:  <div className="min-w-8em">50.54%</div>,
        action:
        <div className="min-w-15">
          <a className="btn-outline " href="javascript:void(0);" data-target="#invest-sip" data-toggle="modal" type="button">Invest</a>
          <Link className="btn-outline ms-2 " to="">
          Add To Cart</Link>
        </div>
        },
        {
        img: <img src={quant2} />,
        name: 'Quant Small Cap Fund Direct Plan Growth',
        one: '37.54%',
        three: '40.54%',
        five: '45.54%',
        seven: '50.54%',
        action:
        <div>
          <a className="btn-outline " href="javascript:void(0);" data-target="#invest-lumpsum" data-toggle="modal" type="button">Invest</a>
          <Link className="btn-outline ms-2 " to="" >
          Add To Cart</Link>
        </div>
        },
        {
        img: <img src={quant2} />,
        name: 'Quant Small Cap Fund Direct Plan Growth',
        one: '37.54%',
        three: '40.54%',
        five: '45.54%',
        seven: '50.54%',
        action:
        <div>
          <a className="btn-outline " href="javascript:void(0);">Invest</a>
          <Link className="btn-outline ms-2 " to="">
          Add To Cart</Link>
        </div>
        },
        {
        img: <img src={quant2} />,
        name: 'Quant Small Cap Fund Direct Plan Growth',
        one: '37.54%',
        three: '40.54%',
        five: '45.54%',
        seven: '50.54%',
        action:
        <div>
          <a className="btn-outline " href="javascript:void(0);" >Invest</a>
          <Link className="btn-outline ms-2 " to=""> Add To Cart</Link>
        </div>
        },
        {
        img: <img src={quant2} />,
        name: 'Quant Small Cap Fund Direct Plan Growth',
        one: '37.54%',
        three: '40.54%',
        five: '45.54%',
        seven: '50.54%',
        action:<div>  <a className="btn-outline " href="javascript:void(0);" >Invest</a>
          <Link className="btn-outline ms-2 " to="" >Add To Cart</Link>
        </div>
        }
        ,
        {
        img: <img src={quant2} />,
        name: 'Quant Small Cap Fund Direct Plan Growth',
        one: '37.54%',
        three: '40.54%',
        five: '45.54%',
        seven: '50.54%',
        action:<div>  <a className="btn-outline " href="javascript:void(0);" >Invest</a>
          <Link className="btn-outline ms-2 " to="" >Add To Cart</Link>
        </div>
        }
        ,
        {
        img: <img src={quant2} />,
        name: 'Quant Small Cap Fund Direct Plan Growth',
        one: '37.54%',
        three: '40.54%',
        five: '45.54%',
        seven: '50.54%',
        action:<div>  <a className="btn-outline " href="javascript:void(0);" >Invest</a>
          <Link className="btn-outline ms-2 " to="" >Add To Cart</Link>
        </div>
        }
        ,
        {
        img: <img src={quant2} />,
        name: 'Quant Small Cap Fund Direct Plan Growth',
        one: '37.54%',
        three: '40.54%',
        five: '45.54%',
        seven: '50.54%',
        action:<div>  <a className="btn-outline " href="javascript:void(0);" >Invest</a>
          <Link className="btn-outline ms-2 " to="" >Add To Cart</Link>
        </div>
        },
        {
        img: <img src={quant2} />,
        name: 'Quant Small Cap Fund Direct Plan Growth',
        one: '37.54%',
        three: '40.54%',
        five: '45.54%',
        seven: '50.54%',
        action:
        <div>
          <a className="btn-outline " href="javascript:void(0);" >Invest</a>
          <Link className="btn-outline ms-2 " to="" > Add To Cart</Link>
        </div>
        },
        {
        img: <img src={quant2} />,
        name: 'Quant Small Cap Fund Direct Plan Growth',
        one: '37.54%',
        three: '40.54%',
        five: '45.54%',
        seven: '50.54%',
        action:
        <div>
          <a className="btn-outline " href="javascript:void(0);" >Invest</a>
          <Link className="btn-outline ms-2 " to="" >
          Add To Cart</Link>
        </div>
        },
        {
        img: <img src={quant2} />,
        name: 'Quant Small Cap Fund Direct Plan Growth',
        one: '37.54%',
        three: '40.54%',
        five: '45.54%',
        seven: '50.54%',
        action:
        <div>
          <a className="btn-outline " href="javascript:void(0);" >Invest</a>
          <Link className="btn-outline ms-2 " to="" >
          Add To Cart</Link>
        </div>
        },
        ],
        });
    return(
        <>
        <div className="wrapper">
        <div className="px-5">
      
      {/* Page Heading */}
      <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">Schemes Performance</li>
          </ol>
        </nav>
     
     <section className="main-btn-f px-3">
     <div className="row ">
            <div className="col-md-4 pt-4 ">
              <Filter_schemes/>
            </div>
            <div className='col-md-8 pt-4'>
            <div className="row">
              <div className="col-md-6">
              <Tabs>
            <TabList className="tablist sp">
                <Tab>Short Term</Tab>
                <Tab>Long Term</Tab>
                
              </TabList>
              </Tabs>
              </div>
            </div>
           
             
            </div>
           
     <div className="col-md-12 mdb-table-main text-center mt-n4 table-responsive ">
              <MDBDataTableV5  
              hover
              entriesOptions={[20, 30, 45]}
              entries={10}
              data={datatable}
              pagingTop
              searchTop
              searchBottom={false}
              barReverse
              />
            </div>
</div>

     </section>

     </div>
     </div>
        
        
        
        </>
    )
}
export default SchemePerformance