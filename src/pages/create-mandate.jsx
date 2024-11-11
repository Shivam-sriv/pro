import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from "react-select";
import { Link } from "react-router-dom";
import ContactUs from "../components/contact-us";

const CreateEmandate = () => {
  const [contact, setContactShow] = useState(false);
  const data = [
    { value: "Debit Card", label: "Debit Card" },
    { value: "Net Banking", label: "Net Banking" },
  ];
  return (
    <>
      <div className="wrapper px-3 pe-4">
        <div className="report px-lg-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb fs-sm-11">
              <li className="breadcrumb-item">
                <Link href="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item ">
                <Link href="/dashboard/bank-and-mandate">
                  Bank Details and Mandate
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Create E-Mandate
              </li>
            </ol>
          </nav>
        </div>
        <section>
          <div className="container-fluid mt-5">
            <div className="row justify-content-around mx-lg-4">
              <div className="col-md-9 shadow-custom bg-gray text-start m-0 p-0">
                <div className="form-title px-3 py-3">
                  <Link
                    to="/dashboard/bank-and-mandate"
                    className="btn btn-danger shadow-sm"
                  >
                    Back to bank details
                  </Link>
                </div>
                <Form className="p-4 pb-0">
                  <Row className="mb-3">
                    <Form.Group className="col-md-6 col-12" controlId="formGridEmail">
                      <Form.Label>Enter Mandate Amount</Form.Label>
                      <Form.Control type="text" className="bg-white bg-c" />
                    </Form.Group>

                    <Form.Group col-md-6 col-12 controlId="formGridPassword">
                      <Form.Label>Select Channel Type</Form.Label>
                      <Select options={data} className="bg-c" />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>From <span className="text-red">*</span></Form.Label>
                      <Form.Control type="date" className="bg-white bg-c" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>To <span className="text-red">*</span></Form.Label>
                      <Form.Control type="date" className="bg-white bg-c" />
                    </Form.Group>
                  </Row>

                  <Form.Group
                    className="mb-3 d-flex"
                    controlId="formBasicRadio"
                  >
                    <Form.Check
                      label="Until Cancelled"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                      className="pe-3"
                    />
                  </Form.Group>
                  <Row>
                    <Col className="text-lg-end text-center">
                      <Link type="submit" className="btn-custom">
                        Submit
                      </Link>
                    </Col>
                  </Row>
                </Form>

                <div className="row">
                  <div className="col-md-12 p-4 pt-0">
                    <p className="text-danger">Note:- </p>
                    <p>
                      Please{" "}
                      <Link to="https://www.npci.org.in/PDF/nach/live-members-e-mandates/Live-Banks-in-API-E-Mandate.pdf">
                        click here
                      </Link>{" "}
                      for a list of eligible banks for E-Mandate. If your bank
                      is not eligible please{" "}
                      <Link to="#" onClick={() => setContactShow(true)}>
                        raise a query
                      </Link>{" "}
                      to initiate the offline process of mandate registration.{" "}
                    </p>
                    <p>
                      The debit mandate amount is the daily maximum limit per
                      transaction i.e, 10 Lakhs{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ContactUs show={contact} setShow={setContactShow} />
    </>
  );
};
export default CreateEmandate;
