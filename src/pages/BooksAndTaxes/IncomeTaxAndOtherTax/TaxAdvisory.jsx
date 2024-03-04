import React from "react";
import GlobalHero from "../../../components/GlobalComps/GlobalHero";
import { Card, Col, Container, Row } from "react-bootstrap";
import acc from "../../../images/tax.svg";
import { CheckSquare, FolderKanban, Percent } from "lucide-react";
import { Link } from "react-router-dom";

const TaxAdvisory = () => {
  const taxComplexitiesAndAdvisory = [
    {
      title: "The Complexities of Income Tax",
      details:
        "Understanding the ever-evolving tax laws, deductions, exemptions, and compliance requirements is a daunting task. Income tax advisory services bring clarity to this complexity, ensuring that you make informed decisions that align with the current legal framework.",
      icon: <Percent size={40} />,
    },
    {
      title: "Tailored Strategies for Optimization",
      details:
        "Income tax advisory services go beyond mere compliance. They craft personalized strategies that optimize your tax position, ensuring you pay only what is required and identifying opportunities for savings. These strategies are tailored to your unique financial situation, offering a roadmap for financial growth.",
      icon: <Percent size={40} />,
    },
    {
      title: "Proactive Planning for Financial Success",
      details:
        "The tax landscape is constantly shifting, with amendments and updates being introduced regularly. An income tax advisor plays a crucial role in keeping you ahead of these changes. Proactive planning is not just about meeting current obligations but also about anticipating future trends and opportunities.",
      icon: <FolderKanban size={40} />,
    },
    {
      title: "Expertise for Comprehensive Solutions",
      details:
        "Engaging an income tax advisory service means tapping into a pool of experts with a deep understanding of tax laws. From individual tax planning to corporate tax optimization, these professionals provide comprehensive solutions that cover various aspects of income tax.",
      icon: <CheckSquare size={40} />,
    },
  ];

  return (
    <>
      <GlobalHero heading="Income Tax Advisory" />
      <section>
        <Container>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="order-1">
              <h5 className="">
                Income tax is a labyrinth of regulations and intricacies that
                can be challenging for individuals and businesses to navigate
                alone. In this dynamic financial landscape, seeking the guidance
                of income tax advisory services becomes not just a choice but a
                necessity.{" "}
              </h5>
            </Col>
            <Col>
              <img src={acc} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <h2>Protecting Business Interests: </h2>

          <Row className="g-4 justify-content-center mt-2 pb-5">
            {taxComplexitiesAndAdvisory.map((document, index) => (
              <Col key={index} className="col-12 col-md-6 col-lg-4">
                <div
                  className="themebg text-white mb-3 p-2 rounded-circle"
                  style={{ width: "fit-content" }}
                >
                  <span style={{ width: "50px" }}>{document.icon}</span>
                </div>
                <div className="">
                  <h4 className="mb-2">{document.title}</h4>
                  <p>{document.details}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Container className="my-4">
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  RSNRMuneemji Income Tax Advisory Services
                </Card.Title>
                <Card.Text>
                  In this complex tax environment, RSNRMuneemji stands as your
                  trusted partner. Our income tax advisory services offer:
                </Card.Text>
                <ul>
                  <li>
                    Expert Guidance: Our seasoned professionals bring a wealth
                    of expertise in navigating income tax complexities.
                  </li>
                  <li>
                    Tailored Solutions: Every client is unique, and so are our
                    strategies. We tailor solutions to fit your specific
                    financial goals.
                  </li>
                  <li>
                    Proactive Updates: Stay informed with timely updates on
                    changes in tax laws, ensuring you are well-prepared for any
                    shifts.
                  </li>
                  <li>
                    Holistic Approach: Our services cover a spectrum of income
                    tax-related concerns, providing a one-stop solution for all
                    your needs.
                  </li>
                </ul>
                <Card.Text>
                  Income tax advisory services are not just about compliance;
                  they are about empowering you with the knowledge and
                  strategies needed for financial success. Choose RSNRMuneemji
                  to be your guide through the intricacies of income tax. Let us
                  navigate the complexities, optimize your tax position, and
                  pave the way for your financial prosperity.
                </Card.Text>
                <Card.Text>
                  Contact RSNRMuneemji today for expert income tax advisory
                  services. Your financial peace of mind begins with us. <br />
                  <Link
                    to="/contact"
                    type="button"
                    variant="primary"
                    size="lg"
                    className="app-btn border-0 text-white"
                  >
                    Contact Us
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TaxAdvisory;
