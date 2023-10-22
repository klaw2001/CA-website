import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import testimg1 from "../assests/testimonial1.jpg"
import testimg2 from "../assests/testimonial2.jpg"
import testimg3 from "../assests/testimonial3.jpg"
import testimg4 from "../assests/testimonial4.jpg"


const Testimonial = () => {
  return (
    <>
      <section className="my-5 py-5">
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="themetext2 fw-bold">Our Testimonials</h1>
              <div style={{ width: "100px" }} className="m-auto">
                  <hr className="border-5 themetext2 "/>
                </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center pt-5">
            <Col  xs={12} sm={6} md={4}>
              <Card className="shadow">
                <Card.Body className="text-center">
                   <img src={testimg1} className="cardimg mb-2"/>
                  <Card.Title>Dan Garrison</Card.Title>
                  <Card.Text>
                  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare. "
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">Head of Quality at Shopify</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="shadow" >  
                <Card.Body className="text-center">
                <img src={testimg2} className="cardimg mb-2"/>
                  <Card.Title>Rachael Collier</Card.Title>
                  <Card.Text>
                  " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi. "
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">Product Designer at Webflow</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row  className="d-flex justify-content-center align-items-center pt-5">
          <Col xs={12} sm={6} md={4}>
              <Card className="shadow">
                <Card.Body className="text-center">
                <img src={testimg3} className="cardimg mb-2"/>
                  <Card.Title>Carmen Haley</Card.Title>
                  <Card.Text>
                  " Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas. "
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">Product Designer at Webflow</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="shadow">
                <Card.Body className="text-center">
                <img src={testimg4} className="cardimg mb-2"/>
                  <Card.Title>Arlie Haynes</Card.Title>
                  <Card.Text>
                  " Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates sed quia consequuntur. "
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">Software Developer at Wix</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
