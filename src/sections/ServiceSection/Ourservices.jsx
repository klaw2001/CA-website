import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import icon from "../assests/iconimg.png";

const Services = () => {
  return (
    <>
      <section className="bg-light my-5 py-5">
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="themetext2 fw-bold">Our Services</h1>
              <div style={{ width: "100px" }} className="m-auto">
                <hr className="border-5 themetext2" />
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center pt-5">
            <Col xs={12} sm={6} md={4}>
              <Card style={{ width: "25rem" }} className="shadow">
                <Card.Body className="text-center">
                  <Card.Img variant="top" src={icon} style={{ height: "50px", width: "50px" }} />
                  <Card.Title className="mt-2">Start your Business</Card.Title>
                  <Card.Text>
                    At RSNRMuneemji, we're your launchpad to success! From navigating registrations and licenses to streamlining finances and securing funding, our expert guidance empowers your startup journey. Start strong with RSNRMuneemji by your side.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card style={{ width: "25rem" }} className="shadow">
                <Card.Body className="text-center">
                  <Card.Img variant="top" src={icon} style={{ height: "50px", width: "50px" }} />
                  <Card.Title className="mt-2">Accounting</Card.Title>
                  <Card.Text>
                    Let RSNRMuneemji be your financial compass! Our expert accounting services navigate complexities, ensuring meticulous record-keeping and financial clarity. Trust us to streamline your finances, so you can focus on what matters most: your success.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card style={{ width: "25rem" }} className="shadow">
                <Card.Body className="text-center">
                  <Card.Img variant="top" src={icon} style={{ height: "50px", width: "50px" }} />
                  <Card.Title className="mt-2">Income Tax</Card.Title>
                  <Card.Text>
                    Maximize your tax potential with RSNRMuneemji! As your trusted advisor, we navigate the intricacies of income tax, ensuring compliance and optimizing returns. Let us guide you to financial success, one return at a time.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center py-5">
            <Col xs={12} sm={6} md={4}>
              <Card style={{ width: "25rem" }} className="shadow">
                <Card.Body className="text-center">
                  <Card.Img variant="top" src={icon} style={{ height: "50px", width: "50px" }} />
                  <Card.Title className="mt-2">Goods And Service Tax</Card.Title>
                  <Card.Text>
                    At RSNRMuneemji, we simplify the GST puzzle for you! From unraveling complexities to expert advisory and seamless return filing services, trust us to navigate the GST landscape, ensuring compliance and peace of mind.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card style={{ width: "25rem" }} className="shadow">
                <Card.Body className="text-center">
                  <Card.Img variant="top" src={icon} style={{ height: "50px", width: "50px" }} />
                  <Card.Title className="mt-2">Loans and Advances</Card.Title>
                  <Card.Text>
                    Unlock financial opportunities with RSNRMuneemji! From loan advisory to seamless processing, we guide you through every step. Trust our consultancy to secure the funding you need for your dreams to flourish.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card style={{ width: "25rem" }} className="shadow">
                <Card.Body className="text-center">
                  <Card.Img variant="top" src={icon} style={{ height: "50px", width: "50px" }} />
                  <Card.Title className="mt-2">Government Schemes and Updates</Card.Title>
                  <Card.Text>
                    Stay ahead with RSNRMuneemji! We're your gateway to government schemes, keeping you informed and empowered with the latest updates in finances, accounts, taxation, and new schemes. Let's navigate the future together.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
