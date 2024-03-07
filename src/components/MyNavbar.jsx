import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/rsnr Logo 2.png";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import WorkWithUs from "./MyDropdowns/WorkWithUs";
import ServicesDropDown from "./MyDropdowns/ServicesDropDown";
import BooksAndTaxesDropDown from "./MyDropdowns/BooksAndTaxesDropDown";

function MyNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="home">
          <img src={logo} alt="" width={170} />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleShow} />
        <Offcanvas show={show} onHide={handleClose} responsive="lg" placement="end">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          <Nav className="m-auto nav-elements text-dark d-lg-flex align-items-lg-center">
            <NavLink
              to="/"
              className="page-active text-decoration-none nav-link"
            >
              Home
            </NavLink>

           <BooksAndTaxesDropDown/>
           <ServicesDropDown/>
           <NavLink
              to="/loan-rsnr"
              className="text-decoration-none text-dark nav-link"
            >
              Loan
            </NavLink>
           <WorkWithUs/>

            <NavLink
              to="/about"
              className="text-decoration-none text-dark nav-link"
            >
              About
            </NavLink>
          
            <div className="ms-lg-5">
              <Link to="/contact">
                <button className="app-btn text-light border-0 rounded">
                  Get Appoinment
                </button>
              </Link>
            </div>
          </Nav>
        </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
