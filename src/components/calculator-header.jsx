import Nav from 'react-bootstrap/Nav';
import sipc from "../assets/images/calculator/budget.png";
import ring from "../assets/images/calculator/rings.png";
import education from "../assets/images/calculator/education.png";
import emi from "../assets/images/calculator/calculatorfuture.png";
import retirement from "../assets/images/calculator/retirement.png";
import futurec from "../assets/images/calculator/calculator.png";
import fd from "../assets/images/calculator/fd.png";
import elss from "../assets/images/calculator/elss.png";
import {NavLink } from 'react-router-dom';
function CalculatorHeader() {
return (
<div className="col-md-12 calculator-h">
  <Nav className="navtop row">
    <div className="col-md-3 mb-3">
      <NavLink  to="/dashboard/sip-calculator" activeClassName="active" ><img src={sipc} className="new-icon" alt='' />  <span>   SIP Calculator</span></NavLink>
    </div>
    <div className="col-md-3 mb-3">
      <NavLink  to="/dashboard/marriage-calculator" > <img src={ring} className="new-icon" alt='' />  <span>Marriage  Planning</span></NavLink>
    </div>
    <div className="col-md-3 mb-3">
      <NavLink to="/dashboard/education-calculator" ><img src={education} className="new-icon" alt='' /> <span>Education  Planning</span></NavLink>
    </div>
    <div className="col-md-3">
      <NavLink to="/dashboard/future-value-calculator" >
        <img src={futurec} className="new-icon" alt='' /><span>Future Value Calculator</span>
      </NavLink>
    </div>
    <div className="col-md-3 mt-3">
      <NavLink to="/dashboard/retirement-calculator" >
        <img src={retirement} className="new-icon" alt='' /><span>Retirement Planning</span>
      </NavLink>
    </div>
    <div className="col-md-3 mt-3">
      <NavLink to="/dashboard/emi-calculator" >
        <img src={emi} className="new-icon" alt='' /><span>EMI Calculator</span>
      </NavLink>
    </div>
    <div className="col-md-3 mt-3">
      <NavLink to="/dashboard/fd-calculator" >
        <img src={fd} className="new-icon" alt='' /><span>FD Calculator</span>
      </NavLink>
    </div>
    <div className="col-md-3 mt-3">
      <NavLink to="/dashboard/elss-calculator" >
        <img src={elss} className="new-icon" alt='' /><span>ELSS Calculator</span>
      </NavLink>
    </div>
  </Nav>
</div>
);
}
export default CalculatorHeader;