import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";

const WorkWithUs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <NavDropdown
        title="Work With Us"
        id="basic-nav-dropdown"
        show={isDropdownOpen}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <NavDropdown.Item to="action/3.1">CA Professionals</NavDropdown.Item>
        <NavDropdown.Item to="action/3.2">CS Professionals</NavDropdown.Item>
        <NavDropdown.Item to="action/3.3">CMA Professionals</NavDropdown.Item>
        <NavDropdown.Item to="action/3.3">Tax Consultants</NavDropdown.Item>
        <NavDropdown.Item to="action/3.4">Accountants</NavDropdown.Item>
        {/* <NavDropdown.Divider /> */}
      </NavDropdown>
    </>
  );
};

export default WorkWithUs;
