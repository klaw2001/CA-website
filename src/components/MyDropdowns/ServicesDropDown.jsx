import React, { useState } from "react";
import { Col, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServicesDropDown = ({handleClose}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const links = [
    {
      title: "Business Registration",
      path:'/business-registration',
      navLinks: [
        { text: "Sole Proprietorship", url: "/sole-proprietorship" },
        { text: "One Person Company", url: "/one-person-company" },
        { text: "Private Limited Registration", url: "/private-limited-registration" },
        { text: "nidhi company registration", url: "/nidhi-company-registration" },
        { text: "Ngo Registration", url: "/ngo-registration" },
        { text: "Society Registration", url: "/society-registration" },
        { text: "Trust Registration", url: "/trust-registration" },
        { text: "section 8 company registration", url: "/section-8-company-registration" },
        { text: "limited liability partnership", url: "/partnership" },
        { text: "partnership firm", url: "/partnership" },
        { text: "Joint Venture", url: "/partnership" },
      ],
    },
    {
      title: "Documents and licences",
      navLinks: [
        {
          text: "digital Signature Certificate(DSC)",
          url: "/document-and-licenses",
        },
        { text: "gumasta licence", url: "/document-and-licenses" },
        { text: "Food Licence(FSSAI)", url: "/document-and-licenses" },
        { text: "TAN application", url: "/document-and-licenses" },
        { text: "PAN application", url: "/document-and-licenses" },
      ],
    },
    {
      title: "Other Registrations",
      navLinks: [
        {
          text: "Startup india Registration",
          url: "/startup-india-registration",
        },
        { text: "MSME registration", url: "/msme-registration" },
        { text: "Section 80G and Section 12A", url: "/section-80G-and-12A" },
        {
          text: "Provident fund Registration",
          url: "/provident-fund-registration",
        },
        {
          text: "Employees' state insurance registration",
          url: "/provident-fund-registration",
        },
      ],
    },
    {
      title: "Trademark and Copyright",
      navLinks: [
        {
          text: "Trademark registration",
          url: "/trademark-and-copywright",
        },
        { text: "Trademark renewal", url: "/trademark-and-copywright" },
        { text: "Copyright Registration", url: "/trademark-and-copywright" },
      ],
    },
    {
      title: "Change in Business",
      navLinks: [
        {
          text: "Amendment in Private Limited documents",
          url: "/private-limited-documents",
        },
        { text: "Amendment in business deeds", url: "/amendment-in-business-deeds" },
        { text: "Convert Your Business", url: "/convert-your-business" },
      ],
    },
    {
      title: "Company & labour Compliances",
      navLinks: [
        {
          text: "Annual MCA Compliance",
          url: "/compliances",
        },
        { text: "Regular Compulsary Filings", url: "/compliances" },
        { text: "NGO compliance", url: "/compliances" },
        { text: "Section 8 Compliance", url: "/compliances" },
      ],
    },
  ];
  return (
    <>
      <NavDropdown
        title="Services"
        id="basic-nav-dropdown"
        className=""
        // show={isDropdownOpen}
        // onMouseEnter={() => setIsDropdownOpen(true)}
        // onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <div className="services-drop-wrapper">
          <Row className="row-cols-1 row-cols-lg-4 flex-grow-4 p-2">
            {links.map((elem, ind) => (
              <Col key={ind}>
                <h5 className="pb-2 mb-2 border-bottom"><Link to={elem.path} className="text-dark">{elem.title}</Link></h5>
                <ul className="p-0">
                  {elem.navLinks.map((link, index) => (
                    <li
                      key={index}
                      style={{ listStyleType: "none" }}
                      className="mb-1 text-capitalize "
                      onClick={closeDropdown}
                    >
                      <Link
                      onClick={handleClose}
                        to={link.url}
                        className="text-decoration-none text-dark"
                      >
                        <span>{link.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </div>
      </NavDropdown>
    </>
  );
};

export default ServicesDropDown;
