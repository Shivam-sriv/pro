import React from "react";
import Customize from "../../src/assets/images/othergoal.png"
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

const CustomizeGoal = () =>{
  return (
    <>
      <div className="wrapper">
        <div className="report px-lg-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-3">
              <li className="breadcrumb-item"><a href="home">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Customize Goal</li>
            </ol>
          </nav>
        </div>

        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 bg-light-red mb-5">
              <div className="row justify-content-center py-2 px-5">
                <div className="col-md-4 d-flex justify-content-between align-items-baseline">
                <div className="">
                  <img src={Customize} className="img-fluid mx-8 bg-goal mw-sm-5" />
                </div>
                <div className="">
               <h4 className="text-red">Customize Goal</h4>
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        <section>
        <div className="container-fluid">
        <div className="row justify-content-center">
        <div className="col-md-6 shadow-custom p-lg-4 p-5">
        <Form className="text-start pb-5 px-lg-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Define Goal</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <h6>How much money would you need to achieve this goals? </h6>
        <Form.Label>(In today’s terms)</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Select Goal Tenure</Form.Label>
        <Form.Control type="date" placeholder="MM/YYYY" />
      </Form.Group>
      <div className="result-goal text-center">
      <div class="text-black fw-500"> You will require</div>
      <div class="text-red fw-500">₹3,22,980</div>
      </div>
      </Form>
      <div className="text-lg-end ext-center">
      <Link to="/dashboard/goal-summary" className="btn-custom">Add Goal</Link>
      </div>
        </div>
        </div>
        </div>
        </section>

        </div>
    </>
  )
}
export default CustomizeGoal