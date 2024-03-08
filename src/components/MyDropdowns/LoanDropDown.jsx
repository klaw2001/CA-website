import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const LoanDropDown = ({ handleClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <NavDropdown
        title="Others"
        id="basic-nav-dropdown"
        // show={isDropdownOpen}
        // onMouseEnter={() => setIsDropdownOpen(true)}
        // onMouseLeave={() => setIsDropdownOpen(false)}
        className="start-0 others-dropdown"
        style={{left:"0"}}
      >
        <NavDropdown.Item>
          <NavLink
            onClick={handleClose}
            to="/loan-rsnr"
            className="text-decoration-none text-dark nav-link"
          >
            Loan
          </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <NavLink
            to="/student-life-insaurance"
            className="text-dark text-decoration-none nav-link"
            onClick={handleClose}
          >
            Life insurance.
          </NavLink>
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default LoanDropDown;
