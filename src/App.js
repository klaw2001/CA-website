import MyNavbar from "./components/MyNavbar";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import TopBar from "./components/TopBar";
import AccountingBookeeping from "./pages/BooksAndTaxes/AccountingBookeeping";
import Certifications from "./pages/BooksAndTaxes/Certifications";
import IncomeTaxAdvisory from "./pages/BooksAndTaxes/IncomeTaxAndOtherTax/IncomeTaxAdvisory";
import ProfessionalTaxRegistration from "./pages/BooksAndTaxes/IncomeTaxAndOtherTax/ProfessionalTaxRegistration";
import GstAndIndirectTax from "./pages/BooksAndTaxes/GstAndIndirectTax";
import LoanRsnr from "./pages/LoansAndAdvances/LoanRsnr";
import OnePersonCompany from "./pages/Services/BusinessRegistration/OnePersonCompany";
import Partnership from "./pages/Services/BusinessRegistration/Partnership";
import NgoRegistration from "./pages/Services/BusinessRegistration/NgoRegistration";
import DocumentAndLicense from "./pages/Services/DocumentsLicenses/DocumentAndLicense";
import TrademarkAndCopywright from "./pages/Services/TrademarkCopywright/TrademarkAndCopywright";
import ProvidentFundRegistration from "./pages/Services/OtherRegistrations/ProvidentFundRegistration";
import AuditingAndAssuarance from "./pages/BooksAndTaxes/AuditingAndAssuarance";
import BusinessRegistrationPage from "./pages/TitlePages/BusinessRegistrationPage";
import Footercomp from "./sections/Footersection/Footercomp";
import Footerbottom from "./sections/Footersection/Footerbottom";
import SoleProprietorships from "./pages/Services/BusinessRegistration/SoleProprietorships";
import About from "./pages/About";
import NidhiCompanyReg from "./pages/Services/BusinessRegistration/NidhiCompanyReg";
import PrivateLimitedReg from "./pages/Services/BusinessRegistration/PrivateLimitedReg";
import StartupIndia from "./pages/Services/OtherRegistrations/StartupIndia";
import MSMERegistration from "./pages/Services/OtherRegistrations/MSMERegistration";
import Section12A from "./pages/Services/OtherRegistrations/Section12A";
import Compliances from "./pages/Services/Compliances/Compliances";
import TaxAdvisory from "./pages/BooksAndTaxes/IncomeTaxAndOtherTax/TaxAdvisory";
import IncomeTaxReturn from "./pages/BooksAndTaxes/IncomeTaxAndOtherTax/IncomeTaxReturn";
import TDSreturns from "./pages/BooksAndTaxes/IncomeTaxAndOtherTax/TDSreturns";
import AdvanceTax from "./pages/BooksAndTaxes/IncomeTaxAndOtherTax/AdvanceTax";
import GSTresgistration from "./pages/BooksAndTaxes/GSTresgistration";
import GSTreturns from "./pages/BooksAndTaxes/GSTreturns";
import SocietyRegistration from "./pages/Services/BusinessRegistration/SocietyRegistration";
import TrustRegistration from "./pages/Services/BusinessRegistration/TrustRegistration";
import Section8Company from "./pages/Services/BusinessRegistration/Section8Company";
import PrivateLimitedAmendment from "./pages/Services/ChangeInBusiness/PrivateLimitedAmendment";
import BusinessDeeds from "./pages/Services/ChangeInBusiness/BusinessDeeds";
import ChangeBusiness from "./pages/Services/ChangeInBusiness/ChangeBusiness";
import CareerOpportunities from "./pages/WorkRSNR/CareerOpportunities";
import LifeInsuranceSection from "./pages/WorkRSNR/LifeInsuranceSection";
import Contact from "./pages/Contact";
import ContactFormFloating from "./components/contentScroll/ContactFormFloating";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Klaw from "./components/Klaw";
function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <Router>
        <TopBar />
        <MyNavbar />
        <Button
          className="position-fixed end-0 new-btn"
          onClick={toggleForm}
          style={{ zIndex: "8888" , top:"40px" }}
        >
          Enquire Now
        </Button>
        <ContactFormFloating isOpen={isFormOpen} toggleForm={toggleForm} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Work With US  */}

          <Route
            path="/career-opportunities"
            element={<CareerOpportunities />}
          />
          <Route
            path="/student-life-insaurance"
            element={<LifeInsuranceSection />}
          />
          {/* Seperate Pages  */}
          <Route
            path="/business-registration"
            element={<BusinessRegistrationPage />}
          />

          {/* Services  */}
          <Route path="/one-person-company" element={<OnePersonCompany />} />
          <Route
            path="/private-limited-registration"
            element={<PrivateLimitedReg />}
          />

          <Route
            path="/nidhi-company-registration"
            element={<NidhiCompanyReg />}
          />
          <Route
            path="/sole-proprietorship"
            element={<SoleProprietorships />}
          />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/ngo-registration" element={<NgoRegistration />} />
          <Route
            path="/society-registration"
            element={<SocietyRegistration />}
          />
          <Route path="/trust-registration" element={<TrustRegistration />} />
          <Route
            path="/section-8-company-registration"
            element={<Section8Company />}
          />

          <Route
            path="/document-and-licenses"
            element={<DocumentAndLicense />}
          />

          <Route
            path="/startup-india-registration"
            element={<StartupIndia />}
          />
          <Route path="/msme-registration" element={<MSMERegistration />} />
          <Route path="/section-80G-and-12A" element={<Section12A />} />

          <Route
            path="/provident-fund-registration"
            element={<ProvidentFundRegistration />}
          />

          <Route
            path="/trademark-and-copywright"
            element={<TrademarkAndCopywright />}
          />
          <Route
            path="/private-limited-documents"
            element={<PrivateLimitedAmendment />}
          />
          <Route
            path="/amendment-in-business-deeds"
            element={<BusinessDeeds />}
          />
          <Route path="/convert-your-business" element={<ChangeBusiness />} />

          <Route path="/compliances" element={<Compliances />} />

          {/* Books And Taxes  */}
          <Route
            path="/accounting-and-bookkeeping"
            element={<AccountingBookeeping />}
          />
          <Route path="/certification" element={<Certifications />} />
          <Route path="/auditing" element={<AuditingAndAssuarance />} />
          <Route
            path="/income-tax-and-other-taxes"
            element={<IncomeTaxAdvisory />}
          />
          <Route
            path="/klaw"
            element={<Klaw />}
          />
          <Route path="/income-tax-advisory" element={<TaxAdvisory />} />
          <Route path="/income-tax-return" element={<IncomeTaxReturn />} />
          <Route path="/tds-returns-and-fillings" element={<TDSreturns />} />
          <Route path="/advance-tax" element={<AdvanceTax />} />
          <Route
            path="/professional-tax-registration"
            element={<ProfessionalTaxRegistration />}
          />
          <Route path="/gst-and-indirect-tax" element={<GstAndIndirectTax />} />
          <Route path="/gst-registration" element={<GSTresgistration />} />
          <Route path="/gst-returns" element={<GSTreturns />} />

          {/* Loan And Advances  */}
          <Route path="/loan-rsnr" element={<LoanRsnr />} />
        </Routes>
        <Footercomp />
        <Footerbottom />
      </Router>
    </>
  );
}

export default App;
