import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import testimg1 from "../../images/myimg.jpg"



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
            <Col  xs={12} sm={6} md={3} className="mb-4 mb-lg-0">
              <Card className="shadow">
                <Card.Body className="text-center">
                   <img src={testimg1} className="cardimg mb-2"/>
                  <Card.Text>
                  Navigating the complexities of taxation was overwhelming until we found RSNRMuneemji. Their personalized approach and attention to detail ensured that our tax filings were accurate and compliant. We're grateful for their professionalism and support.                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">Abroad Education Consultancy</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3} className="mb-4 mb-lg-0">
              <Card className="shadow" >  
                <Card.Body className="text-center">
                <img src={testimg1} className="cardimg mb-2"/>
                  <Card.Text>
                  " RSNRMuneemji's commitment to staying updated with government schemes has been instrumental in our success. Their timely insights and guidance have enabled us to leverage opportunities and stay ahead of the curve. We highly recommend their services to anyone seeking financial clarity and compliance "
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">Anish Parihar</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          <Col xs={12} sm={6} md={3} className="mb-4 mb-lg-0">
              <Card className="shadow">
                <Card.Body className="text-center">
                <img src={testimg1} className="cardimg mb-2"/>
                  <Card.Text>
                  " Choosing RSNRMuneemji for our accounting and taxation needs was a decision we'll never regret. Their team's professionalism, attention to detail, and personalized service have exceeded our expectations. We look forward to continuing our partnership for years to come. "
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted"> Satyam Traders</Card.Subtitle>
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
