import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { FaCheck } from 'react-icons/fa';
import business from '../../images/business.jpg'
import GlobalHero from "../../components/GlobalComps/GlobalHero";

const BusinessRegistrationPage = () => {
  const benefits = [
    "Legal Protection: When you register your business, it becomes a distinct legal entity. This separation between your personal and business affairs means your personal assets are protected from business debts and legal issues. It provides peace of mind and security.",
    "Credibility and Trust: Registered businesses often enjoy higher levels of trust and credibility in the eyes of customers, partners, and investors. It's a sign of commitment and professionalism, which can be a competitive advantage in the marketplace.",
    "Access to Funding: Many investors, banks, and government programs prefer working with registered businesses. This makes it easier to secure loans, investments, or grants to fuel your business growth.",
    "Tax Benefits: Different business structures come with unique tax advantages. Registering your business allows you to take advantage of deductions, credits, and tax incentives that can reduce your overall tax burden, leaving more money for your business's growth and development.",
    "Perpetual Existence: Certain business structures, like corporations, offer the advantage of perpetual existence. This means your business can continue to operate even if ownership changes or key individuals leave.",
  ];
  return (
    <>
      <GlobalHero heading="Business Registration" />
      <Container className="my-4">
        {/* Section 1: Introduction */}
        <Row className="mb-4 position-relative">
          <Col>
            <h1 className="my-3 fs-1">Business Registration</h1>
            <p>
              Business registration isn't just a formality; it's the cornerstone
              of a secure and prosperous business journey. Whether you're
              safeguarding personal assets, gaining credibility, or optimizing
              your tax position, registering your business is a vital step.
            </p>
          </Col>
          {/* <Col className="position-fixed">
            <div>
              <div class="contact-form-wrapper d-flex">
                <form action="#" class="contact-form text-start">
                  <p class="description">
                    Feel free to contact us if you need any assistance, any help
                    or another question.
                  </p>
                  <div>
                    <input
                      type="text"
                      class="form-control rounded border-white mb-3 form-input"
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      class="form-control rounded border-white mb-3 form-input"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      class="form-control rounded border-white mb-3 form-text-area"
                      rows="5"
                      cols="30"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div class="submit-button-wrapper">
                    <input type="submit" value="Send" className="global-button-one" />
                  </div>
                </form>
              </div>
            </div>
          </Col> */}
        </Row>

        {/* Section 2: Why Business Registration Is Important */}
          <h1 className="pt-5">Why is Business Registration Important?</h1>
        <Row className="mb-4 align-items-center row-cols-1 row-cols-lg-2">
          <Col>
            <p className="my-3">
              Business registration is the formal process of documenting your
              company's existence with the government. It offers a multitude of
              benefits that can significantly impact the success of your
              business:
                </p>
              <ListGroup>
            {benefits.map((benefit, index) => (
              <ListGroup.Item key={index}>
                <FaCheck className="tick-mark-icon me-2" />
                {benefit}
              </ListGroup.Item>
            ))}
          </ListGroup>
          </Col>
          <Col>
              <img src={business} alt="" className="img-fluid"/>
          </Col>
        </Row>

        {/* Section 3: Pros and Cons */}
        <Row className="mb-4">
          <Col>
            <h2>Unveiling the Pros and Cons</h2>
            <Row>
              <Col sm={6}>
                <h3>Advantages of Business Registration</h3>
                <ListGroup>
                  <ListGroupItem>
                    1. Legal Recognition: Business registration grants...
                  </ListGroupItem>
                  {/* Add more items */}
                </ListGroup>
              </Col>
              <Col sm={6}>
                <h3>Disadvantages of Business Registration</h3>
                <ListGroup>
                  <ListGroupItem>
                    1. Costs and Formalities: Registering a business can be
                    costly...
                  </ListGroupItem>
                  {/* Add more items */}
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Section 4: Types of Business Registrations */}
        <Row className="mb-4">
          <Col>
            <h2>Types of Business Registrations</h2>
            <ListGroup>
              <ListGroupItem>
                1. Sole Proprietorship: - Advantages: Simple ownership, full
                control.
              </ListGroupItem>
              <ListGroupItem>
                2. Partnership: - Advantages: Shared responsibilities,
                flexibility.
              </ListGroupItem>
              {/* Add more items */}
            </ListGroup>
          </Col>
        </Row>

        {/* Section 5: Choosing the Right Business Structure */}
        <Row>
          <Col>
            <h2>Choosing the Right Business Structure</h2>
            <p>
              The choice of business structure should align with your specific
              goals...
            </p>
            <p>
              Seek legal and financial advice to make an informed decision...
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BusinessRegistrationPage;
