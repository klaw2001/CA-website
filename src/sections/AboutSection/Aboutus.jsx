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
                <div style={{ width: "100px" }} >
                  <hr className="border-5 themetext2 "/>
                </div>
              </blockquote>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
