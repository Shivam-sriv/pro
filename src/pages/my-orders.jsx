import React from "react";
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const My_Orders = () => {
  const data = [
    { value: 'All', label: 'All' },
    { value: 'Pranesh Singh', label: 'Pranesh Singh' },
  ];
  return (
    <>
      <div className="wrapper px-3 me-4">
        <div className="report px-lg-5 ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="home">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">My Orders</li>
            </ol>
          </nav>
        </div>
        <section className="mb-5">
          <div className="container-fluid">
            <div className="row px-lg-4 pt-3 mx-lg-4">
              <div className="col-md-4">
                <div className="my-order px-lg-3">
                  <label className="pb-2">Select Applicant Name</label>
                  <Select options={data} className="orderprofile" />
                </div>
              </div>
              <div className="col-md-3 d-flex align-items-center pt-4">
                <Form.Check
                  type="radio"
                  label="Pending"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  className="pe-3"
                />
                <Form.Check
                  type="radio"
                  label="Authorized"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                  className="pe-3"
                />
              </div>
            </div>
          </div>
        </section>

        <section className=" m-lg-5">
          <div className="mb-4">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 col-12">
                  <div className="order-shadow p-4 mb-4 table-responsive">
                    <h6 className="">201G/Aditya Birla Sun Life Equity Advantage Fund</h6>
                    <Table>
                      <thead>
                        <tr className="text-red">
                          <th className="wd-5rem">Date </th>
                          <th className="wd-15rem">Target Scheme</th>
                          <th className="wd-5rem">Folio</th>
                          <th className="wd-5rem">Amount</th>
                          <th className="wd-7rem">Type</th>
                          <th>Unit</th>
                          <th className="wd-5rem">Ref. No.</th>
                          <th >Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>29-Jul-2022</td>
                          <td>Aditya Birla Sun Life Equity Advantage Fund</td>
                          <td>12345678</td>
                          <td>₹500</td>
                          <td>Fresh Purchase</td>
                          <td>n/a</td>
                          <td>123456790</td>
                          <td><a href="#" className='fw-600'> Authorize</a></td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="mb-4">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="order-shadow p-4 mb-4 table-responsive">
                    <h6 className="">201G/Aditya Birla Sun Life Equity Advantage Fund</h6>
                    <Table>
                      <thead>
                        <tr className="text-red">
                        <th className="wd-5rem">Date </th>
                          <th className="wd-15rem">Target Scheme</th>
                          <th className="wd-5rem">Folio</th>
                          <th className="wd-5rem">Amount</th>
                          <th className="wd-7rem">Type</th>
                          <th>Unit</th>
                          <th className="wd-5rem">Ref. No.</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>29-Jul-2022</td>
                          <td>Aditya Birla Sun Life Equity Advantage Fund</td>
                          <td>12345678</td>
                          <td>₹500</td>
                          <td>Fresh Purchase</td>
                          <td>n/a</td>
                          <td>123456790</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </section>
      </div>
    </>
  )
}
export default My_Orders;