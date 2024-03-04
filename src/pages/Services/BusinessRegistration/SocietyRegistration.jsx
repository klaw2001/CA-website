import React from "react";
import GlobalHero from "../../../components/GlobalComps/GlobalHero";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import acc from "../../../images/society.svg";
import { Link } from "react-router-dom";
const SocietyRegistration = () => {
  return (
    <>
      <GlobalHero heading="Society Registration" />

      <section>
        <Container>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="order-1">
              <h5 className="">
                In legal terms, a society refers to an organized group of
                individuals who come together for a common purpose or objective,
                such as charitable, educational, cultural, religious, or
                recreational activities. Societies are often established to
                pursue non-profit goals and are governed by specific rules and
                regulations outlined in their governing documents.
              </h5>
            </Col>
            <Col>
              <img src={acc} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <div className=" py-5">
          <Container>
            <h2 className="text-center mb-4">
              Registering a Society: Step-by-Step Guide
            </h2>
            <Row className="mb-4">
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>1. Choose a Name</Card.Title>
                    <Card.Text>
                      The society must choose a unique name that is not already
                      in use by another organization in the jurisdiction.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>2. Draft Governing Documents</Card.Title>
                    <Card.Text>
                      Draft governing documents, such as a constitution or
                      bylaws, outlining the purpose, structure, and rules of the
                      society.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>3. Hold a Meeting</Card.Title>
                    <Card.Text>
                      Convene a meeting of founding members to adopt governing
                      documents, elect officers or a board, and approve
                      resolutions.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>4. Complete Registration Forms</Card.Title>
                    <Card.Text>
                      Complete registration forms with information about the
                      society's name, objectives, officers, and address.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>5. Submit Documents and Pay Fees</Card.Title>
                    <Card.Text>
                      Submit registration forms, supporting documents, and fees
                      to the relevant government authority responsible for
                      registering societies.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>6. Review and Approval</Card.Title>
                    <Card.Text>
                      The government authority reviews the application for
                      compliance and approves registration if requirements are
                      met.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>7. Issuance of Certificate</Card.Title>
                    <Card.Text>
                      If approved, the government authority issues a certificate
                      of registration, officially recognizing the society as a
                      legal entity.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>8. Compliance Requirements</Card.Title>
                    <Card.Text>
                      Comply with ongoing reporting, meeting, financial, and
                      other requirements outlined by the relevant laws and
                      regulations.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <h2 className="text-center mb-4">
              General Compliance Requirements for Registered Societies
            </h2>
            <Row className="mb-4">
              <Col>
                <Card>
                  <Card.Body>
                    <ul>
                      <li>
                        Annual General Meeting (AGM): Hold AGM at least once a
                        year to discuss and approve important matters.
                      </li>
                      <li>
                        Financial Reporting: Maintain accurate financial records
                        and prepare annual financial statements.
                      </li>
                      <li>
                        Filing of Annual Returns: File annual returns with the
                        relevant government authority.
                      </li>
                      <li>
                        Compliance with Governing Documents: Adhere to
                        provisions outlined in the society's governing
                        documents.
                      </li>
                      <li>
                        Notification of Changes: Notify relevant authorities of
                        any changes to the society's details.
                      </li>
                      <li>
                        Compliance with Tax Laws: Follow tax reporting and
                        compliance requirements.
                      </li>
                      <li>
                        Maintaining Membership Records: Keep accurate records of
                        members.
                      </li>
                      <li>
                        Public Disclosure: Make certain information available
                        for public inspection as required by law.
                      </li>
                      <li>
                        Compliance with Regulations: Follow any other
                        regulations or requirements imposed by authorities.
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section>
        <div className="bg-light py-5">
          <Container>
            <h2 className="text-center mb-4">
              Unlocking Your Society's Potential
            </h2>
            <p className="text-center mb-4">
              Are you passionate about making a difference in your community?
              Are you ready to bring your vision to life through the formation
              of a society? Look no further!
            </p>
            <Row className="mb-4">
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Effortless Registration Process</Card.Title>
                    <Card.Text>
                      Let us handle the paperwork and legal formalities involved
                      in registering your society. From choosing the right name
                      to drafting your governing documents, we'll guide you
                      through every step of the registration process with ease.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Tailored Compliance Solutions</Card.Title>
                    <Card.Text>
                      Stay on the right side of the law with our expert
                      compliance solutions. We'll keep you informed about the
                      latest regulatory requirements and ensure that your
                      society meets all legal obligations, from holding annual
                      general meetings to filing timely returns.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Personalized Guidance</Card.Title>
                    <Card.Text>
                      Our team of experienced professionals is here to offer
                      personalized guidance and support tailored to your
                      society's unique needs. Whether you're a newly formed
                      group or an established organization seeking to enhance
                      compliance practices, we're here to help you navigate the
                      complexities of society governance.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Transparent and Reliable Service</Card.Title>
                    <Card.Text>
                      Trust is the foundation of our client relationships. You
                      can count on us for transparent communication, reliable
                      advice, and prompt assistance at every stage of your
                      society's journey.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Empowering Your Mission</Card.Title>
                    <Card.Text>
                      Your society's mission is our priority. By entrusting us
                      with your registration and compliance needs, you can focus
                      on what truly matters: making a positive impact in your
                      community and achieving your goals with confidence.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="text-center">
              <Button variant="primary" size="lg">
                <Link className="text-white text-decoration-none" to="/contact">
                  Contact Us Today
                </Link>
              </Button>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default SocietyRegistration;
