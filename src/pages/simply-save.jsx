import React, {useState} from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import Select from 'react-select';
import AnotherScheme from "../components/looking-for-another-scheme";
import OderSucess from "../components/oder-sucess";

const SimplySave = () => {
  const data = [
    { value: 'Debit Card', label: 'Debit Card' },
    { value: 'Net Banking', label: 'Net Banking' },
  ];
  const payment_mode = [
{ value: 'Net Banking', label: 'Net Banking' },
{ value: 'UPI', label: 'UPI' },
{ value: 'RTGS/NEFT', label: 'RTGS/NEFT' },
{ value: 'Debit Mandate', label: 'Debit Mandate' },
];
  const [anotherschemeShow,setAnotherSchemeShow] = useState(false)
  const [odersucessShow,setOderSucessShow] = useState(false)
  return(
    <>
      <div className="wrapper">
        <div className="report px-lg-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-3">
              <li className="breadcrumb-item"><a href="home">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Simply Save</li>
            </ol>
          </nav>
        </div>
       
       <div className="container-fluid pt-3">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="shadow-custom bg-light-red mb-4 pe-3">
            <Form className="p-4 pb-0 text-start simply-save">
                  <Row className="mb-4">
                  <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Select Profile<span className="text-red">*</span></Form.Label>
                      <Select  options={data} className="bg-c"/>
                    </Form.Group>
                    <Form.Group as={Col} sm={8} controlId="formGridEmail">
                      <Form.Label>Recommended Scheme <span className="text-red">*</span></Form.Label>
                      <Form.Control type="text" className="bg-white bg-c" placeholder="Axis Long Term Equity Fund- Regular Plan-Growth"/>
                      <Form.Text className="text-end d-block">
                      <Link className="text-red" onClick={() => setAnotherSchemeShow(true)}>Looking for another scheme?</Link> 
                      </Form.Text>
                    </Form.Group>
                  </Row>
                  <Row className="mb-4">
                  <Form.Group className="col-lg-4 col-12" controlId="formGridPassword">
                      <Form.Label>Select Folio <span className="text-red">*</span></Form.Label>
                      <Select  options={data}  className="bg-c"/>
                    </Form.Group>

                    <Form.Group className="col-lg-4 col-12" controlId="formGridEmail">
                      <Form.Label>Enter Investment Amount <span className="text-red">*</span></Form.Label>
                      <Form.Control type="text" className="bg-white bg-c" />
                    </Form.Group>

                    <Form.Group className="col-lg-4 col-12" controlId="formGridPassword">
                      <Form.Label>Select Payment Mode <span className="text-red">*</span></Form.Label>
                      <Select  options={payment_mode} className="bg-c"/>
                    </Form.Group>
                  </Row>
                  <Row className="mb-4">
                  <Form.Group className="col-lg-4 col-12" controlId="formGridPassword">
                      <Form.Label>Select Bank <span className="text-red">*</span></Form.Label>
                      <Select  options={data} className="bg-c" />
                    </Form.Group>

                    <Form.Group className="col-lg-4 col-12" controlId="formGridEmail">
                      <Form.Label>RTGS/NEFT Code <span className="text-red">*</span></Form.Label>
                      <Form.Control type="text" className="bg-white bg-c" />
                    </Form.Group>

                    <Form.Group className="col-lg-4 col-12" controlId="formGridEmail">
                      <Form.Label>Date <span className="text-red">*</span></Form.Label>
                      <Form.Control type="date" className="bg-white bg-c" />
                    </Form.Group>
                  </Row>
                  
                  <Form.Group className="mb-3 d-flex" controlId="formBasicRadio">
              <Form.Check
                type="radio"
                label="Immediate Payment"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                className="pe-3 fs-sm-13"
              />
              <Form.Check
                type="radio"
                label="Link On Email"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
                className="pe-3 fs-sm-13"
              />
            </Form.Group>
            <Row className="pb-3">
              <Col className="text-end">
                <Link type="submit" className="btn-custom" onClick={() => setOderSucessShow(true)}>Order Now</Link>
              </Col>
            </Row>
            </Form>
            </div>
          </div>
        </div>
       </div>
<AnotherScheme show={anotherschemeShow} setShow={setAnotherSchemeShow} />
<OderSucess show={odersucessShow} setShow={setOderSucessShow} />
      </div>
    </>
  )
}
export default SimplySave