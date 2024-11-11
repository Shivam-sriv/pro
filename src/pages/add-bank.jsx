import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
const Add_Bank = () => {
  const data = [
    { value: '2022-2023', label: '2022-2023' },
    { value: '2023-2024', label: '2023-2024' },
  ];
  return (
    <>
      <div className="wrapper px-3 pe-4">
        <div className="report px-lg-5 ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="home">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Add Bank</li>
            </ol>
          </nav>
        </div>
        <section>
          <div className="container-fluid mt-5">
            <div className="row justify-content-around mx-lg-4">
              <div className="col-md-7 shadow-custom bg-gray text-start m-0 p-0">
                <div className="form-title px-3">
                  <h6 className="text-red fw-bold py-3 mb-0">Add Bank</h6>
                </div>
                <Form className="p-4">
                  <Row className="mb-3">
                    <Form.Group className="col-12 col-md-6" controlId="formGridEmail">
                      <Form.Label>Enter IFSC Code</Form.Label>
                      <Form.Control type="text" className="bg-white border-0" />
                    </Form.Group>

                    <Form.Group className="col-12 col-md-6" controlId="formGridPassword">
                      <Form.Label>Select Bank Type</Form.Label>
                      <Select options={data} />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group className="col-12 col-md-6" controlId="formGridEmail">
                      <Form.Label>Enter Account Number</Form.Label>
                      <Form.Control type="text" className="bg-white" />
                    </Form.Group>

                    <Form.Group className="col-12 col-md-6" controlId="formGridEmail">
                      <Form.Label>Re-Enter Account Number</Form.Label>
                      <Form.Control type="text" className="bg-white" />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group className="col-12 col-md-6" controlId="formGridPassword">
                      <Form.Label>Bank Name</Form.Label>
                      <Select options={data} />
                    </Form.Group>
                    <Form.Group className="col-12 col-md-6" controlId="formGridPassword">
                      <Form.Label>Select File Type</Form.Label>
                      <Select options={data} />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} sm={6} controlId="formGridPassword">
                      <Form.Label>Upload Bank Proof</Form.Label>
                      <Form.Control type="file" className="bg-white" />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Col className="text-lg-end text-center">
                      <Link type="submit" className="btn-custom">Continue</Link>
                    </Col>
                  </Row>
                </Form>
              </div>

              <div className="col-md-4 shadow-custom text-start m-0 p-0">
                <div className="form-title px-3">
                  <h6 className="text-red fw-bold py-3 mb-0">Bank Details</h6>
                </div>
                <Table>
                  <tbody className="bank-detail">
                    <tr>
                      <th className="min-width-10" >Bank Name</th>
                      <td>ICICI Bank Ltd</td>
                    </tr>
                    <tr>
                      <th className="min-width-10">Bank Address</th>
                      <td>ICICI BANK LTD., 316/12/1-2, KHUN KHUN JI ROAD, CHOWK, LUCKNOW - 226003, UP</td>
                    </tr>
                    <tr>
                      <th className="min-width-10">Bank Branch</th>
                      <td>CHOWK, LUCKNOW</td>
                    </tr>
                    <tr>
                      <th className="min-width-10">Account No.</th>
                      <td>126001505115</td>
                    </tr>
                    <tr>
                      <th className="min-width-10">IFSC</th>
                      <td>icic0001047</td>
                    </tr>

                    <div className="row">
                  <div className="col-md-12 text-end pt-4">
                  <Link type="submit" className="btn-custom">Confirm and Submit</Link>
                  </div>
                </div>
                  </tbody>

                </Table>
                
              </div>
            </div>
          </div>
        </section>

      </div>

    </>
  )
}
export default Add_Bank;