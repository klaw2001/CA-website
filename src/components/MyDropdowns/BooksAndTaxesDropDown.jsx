import React, { useRef, useState } from "react";
import { Col, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const BooksAndTaxesDropDown = ({handleClose}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const links = [
    {
      title: "Accounting & Bookeeping",
      navLinks: [
        { text: "Consult Your Books", url: "/accounting-and-bookkeeping" },
        { text: "Manage Your Books", url: "/accounting-and-bookkeeping" },
        {
          text: "Get Your Accounts in order",
          url: "/accounting-and-bookkeeping",
        },
        { text: "Payroll Management", url: "/accounting-and-bookkeeping" },
      ],
    },
    {
      title: "Certifications",
      navLinks: [
        {
          text: "Net Worth Certificate",
          url: "/certification",
        },
        { text: "Turnover Certificate", url: "/certification" },
      ],
    },
    {
      title: "Auditing and Assurance ",
      navLinks: [
        {
          text: "Get Your Books Audited",
          url: "/auditing",
        },
      ],
    },
    {
      title: "Income Tax and Other direct Taxes",
      navLinks: [
        {
          text: "Income tax advisory",
          url: "/income-tax-advisory",
        },
        { text: "Income tax Return", url: "/income-tax-return" },
        { text: "Professional tax Registration", url: "/professional-tax-registration" },
        { text: "Professional Tax Return", url: "/professional-tax-registration" },
        { text: "TDS returns and filings ", url: "/tds-returns-and-fillings" },
        { text: "Advance Tax Calculation and Filing", url: "/advance-tax" },
      ],
    },
    {
      title: "GST and other Indirect taxes",
      navLinks: [
        {
          text: "GST advisory",
          url: "/gst-and-indirect-tax",
        },
        { text: "GST registration", url: "/gst-registration" },
        { text: "GST returns and filings", url: "/gst-returns" },
        { text: "GST refund", url: "/gst-and-indirect-tax" },
        { text: "GST cancellation", url: "/gst-and-indirect-tax" },
      ],
    },
   
  ];
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <NavDropdown
      title="Books And Taxes"
      id="basic-nav-dropdown"
      className="w-100"
      // show={isDropdownOpen}
      // onMouseEnter={() => setIsDropdownOpen(true)}
      // onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div className="services-drop-wrapper">
        <Row className="row-cols-1 row-cols-lg-4 flex-grow-4 p-2">
          {links.map((elem, ind) => (
            <Col key={ind}>
              <h5 className="pb-2 mb-2 border-bottom">{elem.title}</h5>
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
  );
};

export default BooksAndTaxesDropDown;
