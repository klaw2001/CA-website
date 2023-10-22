import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assests/rsnr Logo 2.png"

const Footercomp = () => {
  return (
    <Navbar
      expand="lg"
      className="pt-5 footerbg"
    >
      <Container>
        <Row className="pt-3 w-100 d-flex justify-content-center align-items-center border-bottom border-white">
          <Col lg={3} className=" text-white">
            <h5>Quick Links</h5>
            <ul className="list-unstyled mt-3 ">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="#"  className="text-decoration-none text-white">About</a>
              </li>
              <li className="mb-2">
                <a href="#"  className="text-decoration-none text-white">Services</a>
              </li>
              <li className="mb-2">
                <a href="#"  className="text-decoration-none text-white">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#"  className="text-decoration-none text-white">Contact</a>
              </li>
            </ul>
          </Col>
          <Col lg={3} className="mb-3 text-white">
            <h5 className="mb-2">Contact Us</h5>
            <p>123 Street Name</p>
            <p>City, Country</p>
            <p>Email: example@example.com</p>
            <p>Phone: 0141 4072000</p>
          </Col>
          <Col lg={3} className="mb-3 text-white text-left">
            <img src={logo} alt="" style={{width:"180px"}} />
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quos non expedita molestias, veritatis in minima tempora voluptas quae incidunt nihil aliquid earum minus laboriosam ipsam, voluptatem omnis vel! Suscipit!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Footercomp;
