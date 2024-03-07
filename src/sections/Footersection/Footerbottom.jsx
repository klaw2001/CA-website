import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";

const Footerbottom = () => {
  return (
    <>
      <Navbar className="footerbg" expand="lg">
        <Container>
          <Row className="w-100">
            <Col className="text-white text-center ">
              <p>
                © 2021 Copyright RSNR Muneemji All rights reserved. Designed And
                Developed By{" "}
                <a
                  href="https://reduxsolutions.com"
                  className="text-warning text-decoration-none"
                >
                  Redux Solutions
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Footerbottom;
