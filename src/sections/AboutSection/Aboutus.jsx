import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import about from "../assests/about.jpg";
import GlobalComp1 from "../../components/GlobalComps/GlobalComp1";

function AboutUs() {
  return (
    <Container>
      <Row className="p-5">
        <Col lg={6} xs={12}>
          <Card className="position-relative">
            <Card.Img variant="top" src={about} />
          </Card>
        </Col>
        <Col lg={6} xs={12}>
          <Card className="border-2 shadow rounded-0 position absolute top-50 translate-middle-y aboutcard">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p className="themetext2 fw-bold">ABOUT US</p>
                <div style={{ width: "100px" }}>
                  <hr className="border-5 themetext2 " />
                </div>
              </blockquote>
              <p>
                "At RSNRMuneemji, we're more than just a financial services firm
                – we're your trusted partner in navigating the intricate
                landscape of accounting, registrations, licensing, tax return
                filings, loans, and beyond. With a commitment to excellence and
                a passion for empowering our clients, we streamline the
                complexities of financial management, ensuring your business
                thrives with confidence. From ensuring compliance to securing
                the funding you need; our dedicated team of experts is here to
                guide you every step of the way. Discover peace of mind and
                unlock your business's full potential with RSNRMuneemji."
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
