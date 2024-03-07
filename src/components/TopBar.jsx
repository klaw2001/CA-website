import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
const TopBar = () => {
  return (
    <>
      <div className="top-bar-wrapper themebg py-2">
        <Container>
          <Row className="row-cols-1 row-cols-lg-2">
            <Col>
              <div className="top-bar-inner d-flex text-light justify-content-center justify-content-lg-start">
                <div className="me-4 ">
                  <span className="d-flex align-items-center">
                    <HiMail className="text-white fs-5 me-1" />
                    RSNRmuneemji@gmail.com
                  </span>
                </div>
                <div className="div">
                  <span className="d-flex align-items-center">
                    <IoCall className="text-white fs-5 " />
                    +91 9993217983
                  </span>
                </div>
              </div>
            </Col>
            <Col className="text-light pt-2 pt-lg-0">
              <div className="icon-text d-flex align-items-center justify-content-lg-end justify-content-center">
                <h6>Follow Us :</h6>
                <div className="icon-box mx-2">
                  <span>
                    <a
                      href="https://www.facebook.com/profile.php?id=100089924814105"
                      className="text-decoration-none text-white"
                    >
                      <FaFacebookF />
                    </a>
                  </span>
                  <span>
                    <FaTwitter />
                  </span>
                  <span>
                    <FaLinkedin />
                  </span>
                  <span>
                    <a
                      href="https://www.instagram.com/rsnrmuneemji?igsh=NWVhMXdkMzhjbG8w"
                      className="text-decoration-none text-white"
                    >
                      <FaInstagram />
                    </a>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TopBar;
