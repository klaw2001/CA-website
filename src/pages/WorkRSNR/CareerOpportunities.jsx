import React from "react";
import GlobalHero from "../../components/GlobalComps/GlobalHero";
import acc from "../../images/jobs.svg";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import JobApplicationForm from "../../components/JobApplicationForm";
const CareerOpportunities = () => {
  return (
    <>
      <GlobalHero heading="Career Opportunities" />
      <section>
        <Container>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="order-1">
              <h5 className="">
                Are you looking to take your career to new heights? At
                RSNRMueemji, we believe in nurturing talent, fostering growth,
                and empowering individuals to reach their full potential. As a
                dynamic and forward-thinking organization, we offer a range of
                exciting career opportunities across various disciplines. Join
                us on our mission to deliver excellence in accounting, taxation,
                and business advisory services.
              </h5>
            </Col>
            <Col>
              <img src={acc} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="py-5">
          <h2 className="text-center mb-5">Why Choose RSNRMueemji?</h2>
          <Row className="mb-5">
            <Col>
              <h4>1. Culture of Excellence</h4>
              <p>
                We foster a culture of excellence where innovation,
                collaboration, and continuous learning are celebrated. We
                believe in investing in our people and providing them with the
                tools, resources, and support they need to succeed.
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <h4>2. Diverse and Inclusive Environment</h4>
              <p>
                We value diversity and inclusion and believe that different
                perspectives drive innovation and creativity. Our diverse team
                brings together individuals from various backgrounds, cultures,
                and experiences, creating a dynamic and vibrant workplace where
                everyone feels valued and respected.
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <h4>3. Opportunities for Growth</h4>
              <p>
                At RSNRMueemji, we are committed to helping our employees grow
                both personally and professionally. Whether you're just starting
                your career or looking to advance to the next level, we offer
                opportunities for growth and development through training
                programs, mentorship, and career advancement pathways.
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <h4>4. Work-Life Balance</h4>
              <p>
                We understand the importance of work-life balance and strive to
                create an environment where our employees can thrive both
                professionally and personally. We offer flexible work
                arrangements, competitive benefits, and wellness programs to
                support the well-being of our team members.
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <h4>5. Challenging and Rewarding Work</h4>
              <p>
                Joining RSNRMueemji means tackling challenging and meaningful
                work that makes a real impact. From advising clients on complex
                financial matters to helping businesses navigate regulatory
                requirements, our team members have the opportunity to make a
                difference every day.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="py-5">
          <h2 className="text-center mb-5">As a Company Secretary:</h2>
          <Row className="mb-5">
            <Col>
              <p>
                Are you a driven and ambitious Company Secretary seeking a
                rewarding and challenging career path? Look no further than
                RSNRMuneemji. We're committed to empowering talented
                professionals like you with exciting opportunities to excel,
                grow, and thrive in the dynamic field of corporate governance
                and compliance.
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <h3>Why Choose Us?</h3>
              <ol>
                <li>
                  <strong>Strategic Impact:</strong> As a Company Secretary at
                  RSNRMuneemji, you'll play a pivotal role in shaping the
                  strategic direction and governance framework of our
                  organization.
                </li>
                <li>
                  <strong>Diverse Portfolio of Clients:</strong> We serve a
                  diverse portfolio of clients across various industries,
                  ranging from startups and SMEs to multinational corporations.
                </li>
                <li>
                  <strong>Professional Development:</strong> At RSNRMuneemji, we
                  believe in investing in our people and helping them reach
                  their full potential.
                </li>
                <li>
                  <strong>Collaborative Culture:</strong> We foster a culture of
                  collaboration, teamwork, and mutual respect.
                </li>
                <li>
                  <strong>Work-Life Balance:</strong> We understand the
                  importance of maintaining a healthy work-life balance.
                </li>
              </ol>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="py-5">
          <h2 className="text-center mb-5">As an Accountant:</h2>
          <Row className="mb-5">
            <Col>
              <p>
                Are you a skilled accountant looking to elevate your career to
                new heights? Join our team at RSNRMuneemji and embark on a
                journey filled with growth, challenges, and exciting
                opportunities.
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <h3>Why Choose Us?</h3>
              <ol>
                <li>
                  <strong>Dynamic Work Environment:</strong> At RSNRMuneemji, we
                  foster a dynamic and collaborative work environment where your
                  ideas are valued, and your contributions make a real
                  difference.
                </li>
                <li>
                  <strong>Professional Growth:</strong> We believe in investing
                  in our team members' professional growth and development.
                </li>
                <li>
                  <strong>Client Exposure:</strong> As an accountant at
                  RSNRMuneemji, you'll have the opportunity to work with a
                  diverse portfolio of clients.
                </li>
                <li>
                  <strong>Career Advancement:</strong> We're committed to
                  helping you achieve your career goals and aspirations.
                </li>
                <li>
                  <strong>Work-Life Balance:</strong> At RSNRMuneemji, we
                  understand the importance of maintaining a healthy work-life
                  balance.
                </li>
              </ol>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="py-5">
          <h2 className="text-center mb-5">Join Us Today!</h2>
          <Row className="mb-5">
            <Col>
              <p>
                If you're passionate about making a difference, driving
                innovation, and building a rewarding career, we invite you to
                explore the exciting career opportunities available with
                RSNRMueemji. Join our team and become part of a dynamic and
                growing organization that values integrity, professionalism, and
                excellence.
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <JobApplicationForm />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <p>
                To learn more about current job openings and how to apply, visit
                our careers page or contact us directly.
              </p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col className="d-flex justify-content-center">
              <Button variant="primary" size="lg">
                <Link className="text-white text-decoration-none" to="/contact">
                  Contact Us Today
                </Link>
              </Button>{" "}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CareerOpportunities;
