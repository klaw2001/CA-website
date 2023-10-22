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
function App() {
  return (
    <>
      <Router>
        <TopBar />
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Seperate Pages  */}
          <Route path="/business-registration" element={<BusinessRegistrationPage/>}/>

          {/* Services  */}
          <Route path="/one-person-company" element={<OnePersonCompany />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/ngo-registration" element={<NgoRegistration />} />

          <Route
            path="/document-and-licenses"
            element={<DocumentAndLicense />}
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