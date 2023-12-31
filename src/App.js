import MyNavbar from "./components/MyNavbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
function App() {
  return (
    <>
      <Router>
        <TopBar />
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Seperate Pages  */}
          <Route path="/business-registration" element={<BusinessRegistrationPage/>}/>

          {/* Services  */}
          <Route path="/one-person-company" element={<OnePersonCompany />} />
          <Route path="/private-limited-registration" element={<PrivateLimitedReg />} />

          <Route path="/nidhi-company-registration" element={<NidhiCompanyReg />} />
          <Route path="/sole-proprietorship" element={<SoleProprietorships />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/ngo-registration" element={<NgoRegistration />} />

          <Route
            path="/document-and-licenses"
            element={<DocumentAndLicense />}
          />

          <Route
            path="/startup-india-registration"
            element={<StartupIndia />}
          />
          <Route
            path="/msme-registration"
            element={<MSMERegistration />}
          />
          <Route
            path="/section-80G-and-12A"
            element={<Section12A />}
          />

          <Route
            path="/provident-fund-registration"
            element={<ProvidentFundRegistration />}
          />

          <Route
            path="/trademark-and-copywright"
            element={<TrademarkAndCopywright />}
          />

          {/* Books And Taxes  */}
          <Route
            path="/accounting-and-bookkeeping"
            element={<AccountingBookeeping />}
          />
          <Route path="/certification" element={<Certifications />} />
          <Route path="/auditing" element={<AuditingAndAssuarance />} />
          <Route path="/income-tax-advisory" element={<IncomeTaxAdvisory />} />
          <Route
            path="/professional-tax-registration"
            element={<ProfessionalTaxRegistration />}
          />
          <Route path="/gst-and-indirect-tax" element={<GstAndIndirectTax />} />

          {/* Loan And Advances  */}
          <Route path="/loan-rsnr" element={<LoanRsnr />} />
        </Routes>
        <Footercomp/>
        <Footerbottom/>
      </Router>
    </>
  );
}

export default App;
