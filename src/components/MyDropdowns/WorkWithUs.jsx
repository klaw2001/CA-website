import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const WorkWithUs = ({handleClose}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <NavDropdown
        title="Career Opportunities"
        id="basic-nav-dropdown"
        show={isDropdownOpen}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <NavDropdown.Item>

        <Link to="/career-opportunities" className="text-dark text-decoration-none" onClick={handleClose}>Career Opportunities</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>

        <Link to="/student-life-insaurance" className="text-dark text-decoration-none" onClick={handleClose}>Student Life Ins.</Link>
        </NavDropdown.Item>
        {/* <NavDropdown.Item to="action/3.2">CS Professionals</NavDropdown.Item>
        <NavDropdown.Item to="action/3.3">CMA Professionals</NavDropdown.Item>
        <NavDropdown.Item to="action/3.3">Tax Consultants</NavDropdown.Item>
        <NavDropdown.Item to="action/3.4">Accountants</NavDropdown.Item> */}
        {/* <NavDropdown.Divider /> */}
      </NavDropdown>
    </>
  );
};

export default WorkWithUs;
