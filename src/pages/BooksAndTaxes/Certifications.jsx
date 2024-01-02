import React from "react";
import GlobalHero from "../../components/GlobalComps/GlobalHero";
import certificate from "../../images/certification.svg";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import {
  ArrowBigUpDash,
  CalendarRange,
  ChevronsUp,
  Cpu,
  HeartHandshake,
  Joystick,
  Sparkle,
} from "lucide-react";

const Certifications = () => {
  const certificationServices = [
    {
      title: "Expertise You Can Trust",
      details:
        "Backed by a team of seasoned professionals, our certification services are delivered with the highest standards of expertise and precision.",
      icon: <HeartHandshake size={40} />,
    },
    {
      title: "Comprehensive Range",
      details:
        "From ISO certifications to financial compliance certificates, we offer a diverse array of certifications tailored to meet your specific industry and business needs.",
      icon: <CalendarRange size={40} />,
    },
    {
      title: "Enhance Credibility",
      details:
        "Gain a competitive edge and instill confidence in your stakeholders, clients, and partners by showcasing your commitment to quality and compliance.",
      icon: <Sparkle size={40} />,
    },
    {
      title: "Streamlined Processes",
      details:
        "Our certification processes are efficient and designed to minimize disruptions to your operations, ensuring a smooth and seamless experience.",
      icon: <Cpu size={40} />,
    },
    {
      title: "Stay Ahead of Regulations",
      details:
        "In a dynamic regulatory landscape, our services keep you ahead of the curve, ensuring that your business remains compliant with the latest industry standards and regulations.",
      icon: <ChevronsUp size={40} />,
    },
    {
      title: "Customized Solutions",
      details:
        "We understand that one size doesn't fit all. Our team works closely with you to provide tailored certification solutions that align with your business objectives.",
      icon: <Joystick size={40} />,
    },
    {
      title: "Boost Market Access",
      details:
        "Certifications from our trusted services open doors to new markets, partners, and opportunities, enhancing your business's global reach.",
      icon: <ArrowBigUpDash size={40} />,
    },
  ];

  return (
    <>
      <GlobalHero heading="Certifications" />

      <section className="py-5">
        <Container className="mt-5">
          <Row>
            <Col md={12}>
              <h2 className="text-center mb-4">
                Certificates Offered by Chartered Accountants
              </h2>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Income Tax Certificates</Card.Title>
                  <ul>
                    <li>Income Tax Return Certificate</li>
                    <li>Tax Deduction at Source (TDS) Certificates</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Audit Certificates</Card.Title>
                  <ul>
                    <li>Statutory Audit Certificate</li>
                    <li>Tax Audit Certificate</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Financial Certificates</Card.Title>
                  <ul>
                    <li>Net Worth Certificate</li>
                    <li>Solvent Certificate</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Compliance Certificates</Card.Title>
                  <ul>
                    <li>Compliance Certificate under Companies Act</li>
                    <li>GST Compliance Certificate</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Other Certificates</Card.Title>
                  <ul>
                    <li>Stock Audit Certificate</li>
                    <li>Due Diligence Certificate</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Specialized Certificates</Card.Title>
                  <ul>
                    <li>ISO Certification</li>
                    <li>Foreign Remittance Certificate</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="mt-5">
          <Row>
            <Col md={12}>
              <h2 className="text-center mb-4">
                Net Worth Certificate Explanation
              </h2>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={12}>
              <p>
                A Net Worth Certificate is a financial document that provides
                information about an individual's or entity's net worth at a
                specific point in time. Net worth is the difference between the
                total assets and total liabilities of an individual or business.
                This certificate is often required for various financial
                transactions, especially when dealing with banks, financial
                institutions, or government authorities.
              </p>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={12}>
              <h4>Components of a Net Worth Certificate:</h4>
              <ol>
                <li>
                  <strong>Total Assets:</strong>
                  <ul>
                    <li>
                      Fixed Assets: These include properties, land, buildings,
                      machinery, and other long-term assets.
                    </li>
                    <li>
                      Current Assets: These include cash, bank balances,
                      receivables, and other assets expected to be converted
                      into cash within a short period.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Total Liabilities:</strong>
                  <ul>
                    <li>
                      Long-Term Liabilities: Such as loans, mortgages, or other
                      obligations with a maturity period exceeding one year.
                    </li>
                    <li>
                      Short-Term Liabilities: Including outstanding payments,
                      short-term loans, and other obligations due within a year.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Calculation:</strong>
                  <ul>
                    <li>Net Worth = Total Assets - Total Liabilities</li>
                  </ul>
                </li>
              </ol>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="mt-4">
          <h2>Uses of a Net Worth Certificate:</h2>

          <Row className="mt-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Financial Transactions:</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>
                        Loan Applications: Banks and financial institutions
                        often require a Net Worth Certificate when individuals
                        or businesses apply for loans to assess their financial
                        health and repayment capacity.
                      </li>
                      <li>
                        Investment Transactions: Investors may request a Net
                        Worth Certificate when considering investments to
                        evaluate the financial stability of a company or
                        individual.
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Legal and Regulatory Compliance:</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>
                        Legal Proceedings: In legal matters, such as divorce
                        proceedings or business disputes, a Net Worth
                        Certificate may be used to determine the financial
                        standing of the involved parties.
                      </li>
                      <li>
                        Government Regulations: Some government authorities may
                        request Net Worth Certificates to ensure compliance with
                        financial regulations.
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Business Transactions:</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>
                        Mergers and Acquisitions: In business mergers or
                        acquisitions, parties involved may exchange Net Worth
                        Certificates to assess the financial position of the
                        entities.
                      </li>
                      <li>
                        Partnership Agreements: Partnerships and collaborations
                        may require Net Worth Certificates to establish the
                        financial strength of the entities entering into the
                        partnership.
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Creditworthiness Assessment:</Card.Title>
                  <Card.Text>
                    <p>
                      Creditors and suppliers may use Net Worth Certificates to
                      evaluate the creditworthiness of individuals or businesses
                      before extending credit or entering into financial
                      agreements.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Real Estate Transactions:</Card.Title>
                  <Card.Text>
                    <p>
                      When buying or selling real estate, a Net Worth
                      Certificate may be required to demonstrate the financial
                      capacity of the buyer or seller.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <p>
                      A Net Worth Certificate, prepared by a qualified financial
                      professional such as a Chartered Accountant, provides a
                      snapshot of an entity's financial position and helps
                      stakeholders make informed decisions in various financial
                      transactions.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="mt-4">
          <h2>Components of a Turnover Certificate:</h2>

          <Row className="mt-3">
            <Col>
              <Card>
                <Card.Body>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Component</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Business Name and Details</td>
                        <td>
                          The full legal name, address, and other identifying
                          details of the business or individual.
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Financial Period</td>
                        <td>
                          Specifies the period for which the turnover is
                          calculated, such as a fiscal year or a specific
                          reporting period.
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Calculation of Turnover</td>
                        <td>
                          <ul>
                            <li>
                              Gross Sales: Total revenue generated from sales of
                              goods or services.
                            </li>
                            <li>
                              Net Sales: Gross sales minus any returns,
                              discounts, or allowances.
                            </li>
                            <li>
                              Other Revenue: Additional sources of income, if
                              any.
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Methodology</td>
                        <td>
                          Describes the accounting methods used to calculate
                          turnover, ensuring transparency and clarity.
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Declaration by the Chartered Accountant</td>
                        <td>
                          The certificate is typically accompanied by a
                          declaration or statement from the Chartered
                          Accountant, verifying the accuracy of the turnover
                          figures.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <h2 className="mt-4">Uses of a Turnover Certificate:</h2>

          <Row className="mt-3">
            <Col>
              <Card>
                <Card.Body>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Use</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Business Transactions</td>
                        <td>
                          <ul>
                            <li>
                              Trade and Commerce: A turnover certificate is
                              often required when engaging in business
                              transactions, especially for entities involved in
                              buying and selling goods or services.
                            </li>
                            <li>
                              Contract Bidding: Companies bidding for contracts
                              or projects may need to submit a turnover
                              certificate to demonstrate their financial
                              capacity.
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Government Tenders</td>
                        <td>
                          When participating in government tenders or contracts,
                          businesses may be required to provide a turnover
                          certificate as part of the eligibility criteria.
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Financial Compliance</td>
                        <td>
                          <ul>
                            <li>
                              Statutory Compliance: Regulatory authorities may
                              request a turnover certificate to ensure that
                              businesses comply with financial regulations.
                            </li>
                            <li>
                              Bank Loans: Banks and financial institutions may
                              require a turnover certificate when businesses
                              apply for loans to assess their financial health.
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Legal and Regulatory Compliance</td>
                        <td>
                          In legal matters, a turnover certificate can be used
                          as evidence of the financial position of a business or
                          individual.
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Investment Transactions</td>
                        <td>
                          Investors and stakeholders may request a turnover
                          certificate to evaluate the financial performance and
                          stability of a business before making investment
                          decisions.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <Card>
                <Card.Body>
                  <p>
                    A Chartered Accountant plays a crucial role in preparing a
                    turnover certificate, ensuring that the figures are accurate
                    and comply with accounting standards. The certificate
                    provides a snapshot of the financial performance of a
                    business and is often a key document in various business
                    dealings.
                  </p>
                  <p>
                    These are just a few examples, and the certificates provided
                    by CAs can vary based on the specific requirements and
                    regulations governing different industries and transactions.
                    Businesses and individuals should consult with CAs to
                    determine the appropriate certificates needed for their
                    unique circumstances.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <h2>Unlock Growth with Our Certification Services! </h2>
          <p className="mt-3">
            Are you aiming for excellence and credibility in your business
            operations? Look no further! Our comprehensive certification
            services are designed to elevate your business to new heights by
            ensuring compliance, transparency, and trust.{" "}
          </p>
          <h4>Why Choose Our Certification Services?</h4>
          <Row className="g-4 justify-content-center mt-2 pb-5">
            {certificationServices.map((document, index) => (
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

      <section>
        <Container className="py-5">
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h2>Our Certification Services Include:</h2>
              <ul className="list-unstyled">
                <li>
                  ISO Certifications (ISO 9001, ISO 14001, ISO 27001, etc.)
                </li>
                <li>Financial Compliance Certificates</li>
                <li>Industry-Specific Certifications</li>
                <li>Quality Management Certifications</li>
                <li>Environmental and Sustainability Certifications</li>
              </ul>
            </Col>
          </Row>

          <Row className="mt-4 justify-content-center">
            <Col md={8} className="text-center">
              <p>
                Partner with us, and let our certifications be a testament to
                your commitment to excellence. Elevate your brand, enhance
                credibility, and unlock a world of opportunities.
              </p>
            </Col>
          </Row>

          <Row className="mt-4 justify-content-center">
            <Col md={4} className="text-center">
              <Button variant="primary" size="lg" className='app-btn border-0'>
                Contact Us Today for a Consultation!
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Certifications;
