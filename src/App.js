import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/style.css";
import "animate.css";
import "../src/assets/css/responsive.css";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginWithOption from "./pages/login-with-option";
import Login_With_Mobile from "./pages/login-with-mobile";
import Login_With_Email from "./pages/login-with-email";
import Login_With_Google from "./pages/login-with-google";
import Registration from "./pages/registration";
import Forgot_Password from "./pages/forgot-password";
import Dashboard from "./pages/dashboard";
import Sipstpswp_Report from "./pages/sipstpswp-report";
import Transaction_Report from "./pages/transaction-report";
import Tax_Saving_Investments from "./pages/tax-saving-investments";
import Dividends from "./pages/dividends";
import Portfolio from "./pages/portfolio";
import Folio_Detail from "./pages/folio-detail";
import My_Orders from "./pages/my-orders";
import Bank_Mandate from "./pages/bank-and-mandate";
import Add_Bank from "./pages/add-bank";
import CreateEmandate from "./pages/create-mandate";
import SimplySave from "./pages/simply-save";
import Wrap from "./components/wrap";
import SignUp_With_Google from "./pages/signup-with-google";
import Forgot_Pin from "./pages/forgot-pin";
import { useEffect } from "react";
import View_Cart from "./pages/view-cart";
import Tax_Planning from "./pages/tax-planning";
import NavSingle from "./components/nav";
import GetRightScheme from "./pages/get-right-scheme";
import KnowYourRiskProfile from "./pages/Know-your-risk-profile";
import SipCalculator from "./pages/sip-calculator";
import MarriageCalculator from "./pages/marriage-calculator";
import EducationCalculator from "./pages/education-calculator";
import FutureValueCalculator from "./pages/future-value-calculator";
import RetirementCalculator from "./pages/retirement-calculator";
import EmiCalculator from "./pages/emi-calculator";
import FdCalculator from "./pages/fd-calculator";
import ElssCalculator from "./pages/elss-calculator";
import AddFamilyMember from "./pages/add-family-member";
import ProfileCreation from "./pages/profile-creation-iin";
import RequiredSteps from "./pages/required-steps";
import RequiredDetailsForm from "./pages/required-details-form";
import Transact from "./pages/transact";
import RetirementGoal from "./pages/retirement-goal";
import GoalSummary from "./pages/goal-summary";
import GoalWiseScheme from "./pages/goal-wise-scheme";
import ChildEducationGoal from "./pages/child-education-goal";
import WealthCreationGoal from "./pages/wealth-creation-goal";
import SimplySIP from "./pages/simply-sip";
import PortfolioReview from "./pages/portfolio-review";
import Profile from "./pages/profile";
import SchemePerformance from "./pages/scheme-performance";
import KYCValidation from "./pages/kyc-validation";
import HousePurchaseGoal from "./pages/house-purchase-goal";
import CarPurchaseGoal from "./pages/car-purchase-goal";
import HomeRenovationGoal from "./pages/home-renovetion-goal";
import VacationGoal from "./pages/vacation-goal";
import ChildMarriageGoal from "./pages/child-marriage-goal";
import CustomizeGoal from "./pages/customize-goal";
import NfoLive from "./pages/nfo-live";
import NofDetail from "./pages/nfo-detail";
import { ToastContainer } from "react-toastify";
import Guard from "./utils/custom.guard";
import RequiredStepsFront from "./pages/required-steps-front";
import RequiredDetailsFormFront from "./pages/required-details-form-front";
import CompleteKYC from "./pages/CompleteKYC";
import KycValidationVersion2 from "./pages/kyc-validation-version2";
import PortfolioNewuser from "./pages/portfolio-new-user";

import Thankyou from "./pages/thankyou";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        {Guard(Login_With_Mobile, "/login-with-mobile", {
          unAuthRequire: true,
        })}
        {Guard(Login_With_Email, "/login-with-email", {
          unAuthRequire: true,
        })}
        {Guard(Login_With_Google, "/login-with-google", {
          unAuthRequire: true,
        })}
        {Guard(Registration, "/registration", {
          unAuthRequire: true,
        })}
        {Guard(LoginWithOption, "/login-with-option", {
          unAuthRequire: true,
        })}
        {Guard(Forgot_Pin, "/forgot-pin", {
          unAuthRequire: true,
        })}
        {Guard(SignUp_With_Google, "/signup-with-google", {
          unAuthRequire: true,
        })}
        {/* {Guard(Wrap, "/", { authRequire: true }, { Component: Dashboard })} */}
        <Route element={<Wrap Component={Dashboard} />} path="/" />

        {Guard(
          Wrap,
          "/kyc-validation-version2",
          { authRequire: true },
          { Component: KycValidationVersion2 }
        )}

        {Guard(
          Wrap,
          "/complete-kyc",
          { authRequire: true },
          { Component: CompleteKYC }
        )}

        {Guard(
          Wrap,
          "/dashboard/view-cart",
          { authRequire: true },
          { Component: View_Cart }
        )}
        {Guard(
          Wrap,
          "/dashboard/tax-planning",
          { authRequire: true },
          { Component: Tax_Planning }
        )}
        {Guard(
          Wrap,
          "/dashboard/nav-single",
          { authRequire: true },
          { Component: NavSingle }
        )}
        {Guard(
          Wrap,
          "/dashboard/get-right-scheme",
          { authRequire: true },
          { Component: GetRightScheme }
        )}
        {Guard(
          Wrap,
          "/dashboard/know-your-risk-profile",
          { authRequire: true },
          { Component: KnowYourRiskProfile }
        )}
        {Guard(
          Wrap,
          "/dashboard/add-family-member",
          { authRequire: true },
          { Component: AddFamilyMember }
        )}
        {Guard(
          Wrap,
          "/dashboard/Profile-creation",
          { authRequire: true },
          { Component: ProfileCreation }
        )}
        {Guard(
          Wrap,
          "/dashboard/required-steps",
          { authRequire: true },
          { Component: RequiredSteps }
        )}
        {Guard(
          Wrap,
          "/dashboard/required-details-form",
          { authRequire: true },
          { Component: RequiredDetailsForm }
        )}
        {Guard(
          Wrap,
          "/dashboard/transact",
          { authRequire: true },
          { Component: Transact }
        )}
        {Guard(
          Wrap,
          "/dashboard/sipstpswp-report",
          { authRequire: true },
          { Component: Sipstpswp_Report }
        )}
        {Guard(
          Wrap,
          "/dashboard/transaction-report",
          { authRequire: true },
          { Component: Transaction_Report }
        )}
        {Guard(
          Wrap,
          "/dashboard/tax-saving-investments",
          { authRequire: true },
          { Component: Tax_Saving_Investments }
        )}
        {Guard(
          Wrap,
          "/dashboard/dividends",
          { authRequire: true },
          { Component: Dividends }
        )}
        {Guard(
          Wrap,
          "/dashboard/portfolio",
          { authRequire: true },
          { Component: Portfolio }
        )}
        {Guard(
          Wrap,
          "/dashboard/folio-detail",
          { authRequire: true },
          { Component: Folio_Detail }
        )}
        {Guard(
          Wrap,
          "/dashboard/my-orders",
          { authRequire: true },
          { Component: My_Orders }
        )}
        {Guard(
          Wrap,
          "/dashboard/bank-and-mandate",
          { authRequire: true },
          { Component: Bank_Mandate }
        )}
        {Guard(
          Wrap,
          "/dashboard/add-bank",
          { authRequire: true },
          { Component: Add_Bank }
        )}
        {Guard(
          Wrap,
          "/dashboard/create-mandate",
          { authRequire: true },
          { Component: CreateEmandate }
        )}
        {Guard(
          Wrap,
          "/dashboard/simply-save",
          { authRequire: true },
          { Component: SimplySave }
        )}
        {Guard(
          Wrap,
          "/dashboard/retirement-goal",
          { authRequire: true },
          { Component: RetirementGoal }
        )}
        {Guard(
          Wrap,
          "/dashboard/goal-summary",
          { authRequire: true },
          { Component: GoalSummary }
        )}
        {Guard(
          Wrap,
          "/dashboard/goal-wise-scheme",
          { authRequire: true },
          { Component: GoalWiseScheme }
        )}
        {Guard(
          Wrap,
          "/dashboard/child-education-goal",
          { authRequire: true },
          { Component: ChildEducationGoal }
        )}
        {Guard(
          Wrap,
          "/dashboard/wealth-creation-goal",
          { authRequire: true },
          { Component: WealthCreationGoal }
        )}
        {Guard(
          Wrap,
          "/dashboard/simply-sip",
          { authRequire: true },
          { Component: SimplySIP }
        )}
        {Guard(
          Wrap,
          "/dashboard/portfolio-review",
          { authRequire: true },
          { Component: PortfolioReview }
        )}
        {Guard(
          Wrap,
          "/dashboard/profile",
          { authRequire: true },
          { Component: Profile }
        )}
        {Guard(
          Wrap,
          "/dashboard/scheme-performance",
          { authRequire: true },
          { Component: SchemePerformance }
        )}
        {Guard(
          Wrap,
          "/dashboard/house-purchase-goal",
          { authRequire: true },
          { Component: HousePurchaseGoal }
        )}
        {Guard(
          Wrap,
          "/dashboard/simply-sip",
          { authRequire: true },
          { Component: SimplySIP }
        )}
        {Guard(
          Wrap,
          "/dashboard/portfolio-review",
          { authRequire: true },
          { Component: PortfolioReview }
        )}
        {Guard(
          Wrap,
          "/dashboard/car-purchase-goal",
          { authRequire: true },
          { Component: CarPurchaseGoal }
        )}
        {Guard(
          Wrap,
          "/dashboard/home-renovetion-goal",
          { authRequire: true },
          { Component: HomeRenovationGoal }
        )}
        {Guard(
          Wrap,
          "/dashboard/vacation-goal",
          { authRequire: true },
          { Component: VacationGoal }
        )}
        {Guard(
          Wrap,
          "/dashboard/child-marriage-goal",
          { authRequire: true },
          { Component: ChildMarriageGoal }
        )}
        {Guard(
          Wrap,
          "/dashboard/customize-goal",
          { authRequire: true },
          { Component: CustomizeGoal }
        )}
        {Guard(
          Wrap,
          "/dashboard/customize-goal",
          { authRequire: true },
          { Component: CustomizeGoal }
        )}
        {Guard(
          Wrap,
          "/dashboard/nfo-live",
          { authRequire: true },
          { Component: NfoLive }
        )}
        {Guard(
          Wrap,
          "/dashboard/nfo-detail",
          { authRequire: true },
          { Component: NofDetail }
        )}
        {Guard(
          Wrap,
          "/dashboard/nfo-detail",
          { authRequire: true },
          { Component: NofDetail }
        )}
        {Guard(
          Wrap,
          "/required-steps-front",
          { authRequire: true },
          { Component: RequiredStepsFront }
        )}
        {Guard(
          Wrap,
          "/required-details-form-front",
          { authRequire: true },
          { Component: RequiredDetailsFormFront }
        )}

        {Guard(
          Wrap,
          "/kyc-validation",
          { authRequire: true },
          { Component: KYCValidation }
        )}
        <Route element={<Forgot_Password />} path="/forgot-password" />
        <Route
          element={<Wrap Component={SipCalculator} />}
          path="/dashboard/sip-calculator"
        />
        <Route
          element={<Wrap Component={MarriageCalculator} />}
          path="/dashboard/marriage-calculator"
        />
        <Route
          element={<Wrap Component={EducationCalculator} />}
          path="/dashboard/education-calculator"
        />
        <Route
          element={<Wrap Component={FutureValueCalculator} />}
          path="/dashboard/future-value-calculator"
        />
        <Route
          element={<Wrap Component={RetirementCalculator} />}
          path="/dashboard/retirement-calculator"
        />
        <Route
          element={<Wrap Component={EmiCalculator} />}
          path="/dashboard/emi-calculator"
        />
        <Route
          element={<Wrap Component={FdCalculator} />}
          path="/dashboard/fd-calculator"
        />
        <Route
          element={<Wrap Component={ElssCalculator} />}
          path="/dashboard/elss-calculator"
        />
        <Route
          element={<Wrap Component={Thankyou} />}
          path="/dashboard/thankyou"
        />
         <Route
          element={<Wrap Component={PortfolioNewuser} />}
          path="/dashboard/portfolionewuser"
        />
        {/*  */}
      </Routes>
    </div>
  );
}

export default App;
