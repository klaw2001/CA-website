import React, { useRef, useState } from "react";
import { Col, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { links } from "../../utils/json";

const BooksAndTaxesDropDown = ({handleClose}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <NavDropdown
      title="Books And Taxes"
      id="basic-nav-dropdown"
      // className="w-100"
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
