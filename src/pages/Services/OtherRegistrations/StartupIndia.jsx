import React from "react";
import GlobalHero from "../../../components/GlobalComps/GlobalHero";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import startup from "../../../images/startup.svg";
import { BadgePlus, Minimize2, Receipt } from "lucide-react";
import { Link } from "react-router-dom";
const StartupIndia = () => {
  const startupSupportInitiatives = [
    {
      title: "Simplification and Handholding",
      description:
        "Easier compliance, exit process, legal support, fast tracking of patent applications, and a website for reduced information asymmetry.",
      icon: <Minimize2 size={40} />,
    },
    {
      title: "Funding & Incentives",
      description:
        "Exemptions on Income Tax and Capital Gains Tax, a fund of funds for capital infusion, and a credit guarantee scheme for eligible startups.",
      icon: <Receipt size={40} />,
    },
    {
      title: "Incubation & Industry-Academia Partnerships",
      description:
        "Creation of incubators, innovation labs, events, competitions, and grants to foster industry-academia partnerships.",
      icon: <BadgePlus size={40} />,
    },
  ];



  return (
    <>
      <GlobalHero heading="Startup India Registration" />
      <section>
        <Container>
          <h1 className="text-center my-4 fw-bold">
            Startup India Registration{" "}
          </h1>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="order-1">
              <h5 className="">
                Launched on 16th January 2016, the Startup India Initiative has
                rolled out several programs with the objective of supporting
                entrepreneurs, building a robust startup ecosystem and
                transforming India into a country of job creators instead of job
                seekers. These programs are managed by a dedicated Startup India
                Team, which reports to the Department for Industrial Policy and
                Promotion (DPIIT). The Department for Promotion of Industry and
                Internal Trade (DPIIT) through the Startup India initiative has
                executed various projects & undertaken recurring models to
                propel the Indian Startup Ecosystem. Startup India is a flagship
                initiative of the Government of India, intended to catalyze
                startup culture and build a strong and inclusive ecosystem for
                innovation and entrepreneurship in India.{" "}
              </h5>
            </Col>
            <Col>
              <img src={startup} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="mt-4">
          <Row>
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title className="text-center fs-2">
                    DPIIT Startup Recognition Eligibility
                  </Card.Title>

                  {/* Eligibility Criteria */}
                  <Card.Text>
                    <p className="font-weight-bold">
                      Is your company eligible?
                    </p>
                    <p>
                      Your company must meet the following criteria to be
                      considered eligible for DPIIT startup recognition:
                    </p>
                    <ul>
                      <li>
                        <strong>Company Age:</strong> Period of existence and
                        operations should not be exceeding 10 years from the
                        Date of Incorporation.
                      </li>
                      <li>
                        <strong>Company Type:</strong> Incorporated as a Private
                        Limited Company, a Registered Partnership Firm, or a
                        Limited Liability Partnership.
                      </li>
                      <li>
                        <strong>Annual Turnover:</strong> Should have an annual
                        turnover not exceeding Rs. 100 crore for any of the
                        financial years since its Incorporation.
                      </li>
                      <li>
                        <strong>Original Entity:</strong> Entity should not have
                        been formed by splitting up or reconstructing an already
                        existing business.
                      </li>
                      <li>
                        <strong>Innovative & Scalable:</strong> Should work
                        towards the development or improvement of a product,
                        process, or service and/or have a scalable business
                        model with high potential for the creation of wealth &
                        employment.
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <h2>Benefits of registering in Startup India: </h2>
          <Row className="g-4 justify-content-center mt-2 pb-5">
            {startupSupportInitiatives.map((document, index) => (
              <Col key={index} className="col-12 col-md-6 col-lg-4">
                <div
                  className="themebg text-white mb-3 p-2 rounded-circle"
                  style={{ width: "fit-content" }}
                >
                  <span style={{ width: "50px" }}>{document.icon}</span>
                </div>
                <div className="">
                  <h4 className="mb-2">{document.title}</h4>
                  <p>{document.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container className="mt-4">
          <Row>
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title className="text-center fs-2">
                    Startup India Registration Guide
                  </Card.Title>

                  {/* Objective of Startup India */}
                  <Card.Text>
                    <p className="font-weight-bold">
                      Objective of Startup India:
                    </p>
                    <ul>
                      <li>
                        To make it easier for Startups to shut down or wind up
                        operations, reallocating capital and resources.
                      </li>
                      <li>
                        To encourage entrepreneurs to experiment with new and
                        innovative ideas without facing complex exit processes.
                      </li>
                    </ul>
                  </Card.Text>

                  {/* Registration Process */}
                  <Card.Text>
                    <p className="font-weight-bold">
                      Registering for Startup India involves a straightforward
                      process that aims to support and promote the growth of
                      startups in India.
                    </p>

                    {/* Step 1: Check Eligibility */}
                    <p className="font-weight-bold">
                      Step 1: Check Eligibility
                    </p>
                    <ul>
                      <li>
                        The startup should be incorporated as a private limited
                        company, a registered partnership firm, or an LLP.
                      </li>
                      <li>
                        The age of the startup should not exceed ten years from
                        its date of incorporation.
                      </li>
                      <li>
                        Annual turnover should not exceed ₹100 crores in any of
                        the previous financial years.
                      </li>
                      <li>
                        The startup should be working towards innovation,
                        development, deployment, or commercialization of new
                        products, processes, or services driven by technology or
                        intellectual property.
                      </li>
                    </ul>

                    {/* Step 2: Prepare Documents */}
                    <p className="font-weight-bold">
                      Step 2: Prepare Documents
                    </p>
                    <ul>
                      <li>Certificate of Incorporation/Registration</li>
                      <li>Details of Directors/Partners</li>
                      <li>PAN card and Address Proof of Directors/Partners</li>
                      <li>Brief description of the business and innovation</li>
                      <li>Details of Intellectual Property (if any)</li>
                      <li>Incorporation/Registration Certificate</li>
                    </ul>

                    {/* Step 3: Access the Startup India Portal */}
                    <p className="font-weight-bold">
                      Step 3: Access the Startup India Portal
                    </p>
                    <p>
                      Visit the official Startup India website (
                      <a href="https://www.startupindia.gov.in/">
                        https://www.startupindia.gov.in/
                      </a>
                      ) to access the registration portal.
                    </p>

                    {/* Step 4: Fill in the Registration Form */}
                    <p className="font-weight-bold">
                      Step 4: Fill in the Registration Form
                    </p>
                    <ul>
                      <li>
                        Click on the "Register" button and fill in the online
                        registration form with accurate details about your
                        startup.
                      </li>
                      <li>
                        Provide information about the nature of your business,
                        innovation, and other relevant details.
                      </li>
                      <li>Upload the required documents.</li>
                    </ul>

                    {/* Step 5: Self-Certify */}
                    <p className="font-weight-bold">Step 5: Self-Certify</p>
                    <p>
                      The registration process includes a self-certification
                      mechanism where you declare that your startup meets the
                      eligibility criteria. Ensure that the information provided
                      is accurate and complete.
                    </p>

                    {/* Step 6: Submit the Application */}
                    <p className="font-weight-bold">
                      Step 6: Submit the Application
                    </p>
                    <p>
                      Review the information provided and submit the
                      registration application. You will receive an
                      acknowledgment for the successful submission of your
                      application.
                    </p>

                    {/* Step 7: Recognition Number */}
                    <p className="font-weight-bold">
                      Step 7: Recognition Number
                    </p>
                    <p>
                      After the application is processed and approved, you will
                      receive a recognition number. This recognition number is
                      important for availing the benefits and schemes under the
                      Startup India initiative.
                    </p>

                    {/* Step 8: Avail Benefits */}
                    <p className="font-weight-bold">Step 8: Avail Benefits</p>
                    <p>
                      With the recognition number, you can avail various
                      benefits offered by the government, including tax
                      exemptions, fast-tracking of patent applications, and
                      access to funding opportunities.
                    </p>

                    {/* Note */}
                    <p className="font-weight-bold">Note:</p>
                    <ul>
                      <li>
                        The process and requirements may be subject to updates,
                        so it's advisable to check the official Startup India
                        website for the latest information.
                      </li>
                      <li>
                        The Startup India initiative also provides a
                        single-point contact for facilitation and grievance
                        resolution known as the Startup India Hub.
                      </li>
                    </ul>
                  </Card.Text>

                  {/* Button to Link to Official Website */}
                  <Button
                    variant="primary"
                    className="app-btn border-0"
                    href="https://www.startupindia.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Startup India Portal
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <p className="mt-3">
            <strong>
              Always refer to the official resources and guidelines provided by
              Startup India for the most accurate and up-to-date information.
              Elevate Your Startup Journey with Our No. 1 Registration Services
              for Startup India!
            </strong>
          </p>
        </Container>
      </section>

      <section className="py-5">
      <Container className="mt-4">
      <Row>
        <Col>
          <Card className="border-0">
            <Card.Body>
              <Card.Title className="text-center fs-2">Ignite Your Startup’s Potential with RSNRMUNEEMJI</Card.Title>

              <Card.Text>
                <p className="lead">Ready to embark on the path to success with Startup India? Look no further – RSNRMUNEEMJI is your trusted partner and the undisputed leader in registering startups for the revolutionary Startup India initiative!</p>
              </Card.Text>

              {/* Benefits List */}
              <Card.Text>
                <p className="font-weight-bold">Here's why we stand out from the rest:</p>

                {/* 1. Expert Guidance and Support */}
                <p className="font-weight-bold">1. Expert Guidance and Support:</p>
                <ul>
                  <li>With a team of seasoned professionals, we offer unparalleled expertise in navigating the intricacies of Startup India registration. Trust us to be your guiding light through every step of the process.</li>
                </ul>

                {/* 2. Tailored Solutions for Every Startup */}
                <p className="font-weight-bold">2. Tailored Solutions for Every Startup:</p>
                <ul>
                  <li>We understand that every startup is unique. Our personalized approach ensures that our services are tailored to meet the specific needs and aspirations of your business, setting you on a customized path to success.</li>
                </ul>

                {/* 3. Efficiency at Its Best */}
                <p className="font-weight-bold">3. Efficiency at Its Best:</p>
                <ul>
                  <li>Time is of the essence for startups, and we value your time as much as you do. Our streamlined processes and prompt services ensure that your Startup India registration is not just efficient but lightning-fast.</li>
                </ul>

                {/* 4. Accuracy and Compliance Guaranteed */}
                <p className="font-weight-bold">4. Accuracy and Compliance Guaranteed:</p>
                <ul>
                  <li>Precision matters, especially when it comes to compliance. Rest easy knowing that your Startup India registration with us is not just accurate but also fully compliant with all regulatory requirements.</li>
                </ul>

                {/* 5. Transparent Communication */}
                <p className="font-weight-bold">5. Transparent Communication:</p>
                <ul>
                  <li>Communication is key, and we prioritize transparency. Stay informed at every stage of the registration process, with clear updates and seamless communication from our dedicated team.</li>
                </ul>

                {/* 6. Success Stories That Speak Volumes */}
                <p className="font-weight-bold">6. Success Stories That Speak Volumes:</p>
                <ul>
                  <li>We take pride in our success stories. Numerous startups have thrived under our guidance, leveraging the benefits of Startup India to accelerate their growth. Your success story could be next!</li>
                </ul>

                {/* 7. End-to-End Support */}
                <p className="font-weight-bold">7. End-to-End Support:</p>
                <ul>
                  <li>Our commitment doesn’t end with registration. Enjoy comprehensive support, including post-registration guidance and assistance with leveraging the benefits offered by Startup India to their fullest.</li>
                </ul>

                {/* 8. Customer-Centric Approach */}
                <p className="font-weight-bold">8. Customer-Centric Approach:</p>
                <ul>
                  <li>At the heart of our success is a customer-centric approach. Your satisfaction is our priority, and we go the extra mile to ensure that your experience with us exceeds expectations.</li>
                </ul>

                {/* 9. Innovative Solutions for the Modern Entrepreneur */}
                <p className="font-weight-bold">9. Innovative Solutions for the Modern Entrepreneur:</p>
                <ul>
                  <li>In the fast-paced world of startups, innovation is key. Benefit from our innovative solutions and stay ahead in the game, leveraging Startup India to propel your business into new realms of success.</li>
                </ul>

                {/* 10. Proven Track Record of Excellence */}
                <p className="font-weight-bold">10. Proven Track Record of Excellence:</p>
                <ul>
                  <li>Numbers speak louder than words. Our proven track record of successfully registering startups for Startup India is a testament to our excellence and commitment to your success.</li>
                </ul>
              </Card.Text>

              {/* CTA Button */}
              <Button variant="success" className="app-btn border-0" size="lg" block>
                <Link to='/contact' className="text-decoration-none text-white">Contact RSNRMUNEEMJI and Ignite Your Startup's Potential!</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>



    </>
  );
};

export default StartupIndia;
