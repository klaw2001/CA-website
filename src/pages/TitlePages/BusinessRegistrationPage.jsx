import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  ListGroup,
  ListGroupItem,
  Card,
} from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import business from "../../images/business.jpg";
import GlobalHero from "../../components/GlobalComps/GlobalHero";

const BusinessRegistrationPage = () => {
  const benefits = [
    "Legal Protection: When you register your business, it becomes a distinct legal entity. This separation between your personal and business affairs means your personal assets are protected from business debts and legal issues. It provides peace of mind and security.",
    "Credibility and Trust: Registered businesses often enjoy higher levels of trust and credibility in the eyes of customers, partners, and investors. It's a sign of commitment and professionalism, which can be a competitive advantage in the marketplace.",
    "Access to Funding: Many investors, banks, and government programs prefer working with registered businesses. This makes it easier to secure loans, investments, or grants to fuel your business growth.",
    "Tax Benefits: Different business structures come with unique tax advantages. Registering your business allows you to take advantage of deductions, credits, and tax incentives that can reduce your overall tax burden, leaving more money for your business's growth and development.",
    "Perpetual Existence: Certain business structures, like corporations, offer the advantage of perpetual existence. This means your business can continue to operate even if ownership changes or key individuals leave.",
  ];
  const businessTypes = [
    {
      type: "Sole Proprietorship",
      advantages: "Simple ownership, full control.",
      disadvantages: "Unlimited personal liability.",
    },
    {
      type: "Partnership",
      advantages: "Shared responsibilities, flexibility.",
      disadvantages: "Shared personal liability.",
    },
    {
      type: "Limited Liability Company (LLC)",
      advantages: "Liability protection, management flexibility.",
      disadvantages: "Compliance requirements.",
    },
    {
      type: "C Corporation",
      advantages: "Strong liability protection, access to capital.",
      disadvantages: "Complex regulations, double taxation.",
    },
    {
      type: "S Corporation",
      advantages: "Limited liability, pass-through taxation.",
      disadvantages: "Eligibility restrictions, ownership limitations.",
    },
    {
      type: "Nonprofit Organization",
      advantages: "Tax-exempt status, mission-driven.",
      disadvantages: "Compliance with nonprofit regulations.",
    },
    {
      type: "Limited Partnership",
      advantages: "Limited liability for some partners.",
      disadvantages: "General partner liability, complex structure.",
    },
    {
      type: "Limited Liability Partnership (LLP)",
      advantages: "Liability protection for partners.",
      disadvantages: "Compliance requirements, limited availability.",
    },
    {
      type: "General Partnership",
      advantages: "Easy setup, shared profits.",
      disadvantages: "Unlimited personal liability.",
    },
    {
      type: "Cooperative (Co-op)",
      advantages: "Shared ownership and control.",
      disadvantages: "Complex decision-making, profit-sharing.",
    },
    {
      type: "Professional Corporation (PC)",
      advantages: "Liability protection for professionals.",
      disadvantages: "Specialized structure, regulatory compliance.",
    },
    {
      type: "B Corporation (Benefit Corporation)",
      advantages: "Social and environmental responsibility.",
      disadvantages: "Reporting requirements, public transparency.",
    },
    {
      type: "Sole Proprietorship DBA (Doing Business As)",
      advantages: "Flexibility to operate under a different name.",
      disadvantages: "No liability protection.",
    },
    {
      type: "Foreign Corporation",
      advantages: "Expanding business into another state or country.",
      disadvantages: "Compliance with foreign regulations.",
    },
    {
      type: "Cooperative Corporation",
      advantages: "Shared ownership, profit distribution.",
      disadvantages: "Complex decision-making, governance.",
    },
    {
      type: "Close Corporation",
      advantages: "Limited number of shareholders, more control.",
      disadvantages: "Limited transferability of shares.",
    },
    {
      type: "Public Limited Company (PLC)",
      advantages: "Publicly traded, access to capital.",
      disadvantages: "Strict reporting requirements, public scrutiny.",
    },
    {
      type: "Joint Venture",
      advantages: "Collaboration for specific projects.",
      disadvantages: "Potential disputes, shared risks.",
    },
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
            <img src={business} alt="" className="img-fluid" />
          </Col>
        </Row>

        {/* Section 3: Pros and Cons */}
        <div className="pt-5">
          <h2 className="py-3">Unveiling the Pros and Cons </h2>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Advantages</th>
                <th>Disadvantages</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ol>
                    <li>
                      Legal Recognition:
                      <p>
                        Business registration grants your venture legal
                        recognition, making it a distinct legal entity. This
                        separation between personal and business assets offers
                        valuable protection. Your personal assets are shielded
                        from business debts and liabilities.
                      </p>
                    </li>
                    <li>
                      Credibility and Trust:
                      <p>
                        Registered businesses often enjoy higher credibility and
                        trust among customers, partners, and investors. It
                        demonstrates your commitment and professionalism, which
                        can be a competitive edge in your industry.
                      </p>
                    </li>
                    <li>
                      Access to Funding:
                      <p>
                        Business registration can make it easier to secure
                        funding. Many investors, banks, and government programs
                        prefer working with registered businesses, increasing
                        your chances of obtaining loans, investments, or grants.
                      </p>
                    </li>
                    <li>
                      Tax Benefits:
                      <p>
                        Different business structures come with unique tax
                        benefits. Business registration enables you to take
                        advantage of deductions, credits, and incentives that
                        can significantly reduce your tax burden.
                      </p>
                    </li>
                  </ol>
                </td>
                <td>
                  <ol>
                    <li>
                      Costs and Formalities:
                      <p>
                        Registering a business can be costly and involve complex
                        formalities. Fees, legal documentation, and ongoing
                        compliance requirements can add financial and
                        administrative burdens.
                      </p>
                    </li>
                    <li>
                      Disclosure of Information:
                      <p>
                        Depending on the business structure and jurisdiction,
                        registered businesses may be required to disclose
                        sensitive information, including financial details, to
                        government authorities. This lack of privacy can be a
                        drawback for some business owners.
                      </p>
                    </li>
                    <li>
                      Complexity of Compliance:
                      <p>
                        Maintaining compliance with the regulations can be
                        challenging. Failure to adhere to legal requirements can
                        result in penalties or legal consequences.
                      </p>
                    </li>
                    <li>
                      Limited Flexibility:
                      <p>
                        Some business structures, like corporations, have
                        stricter management and reporting requirements. This can
                        limit the flexibility and autonomy you have in managing
                        your business.
                      </p>
                    </li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        {/* Section 4: Types of Business Registrations */}
        <h1 className="pt-5">Types of Business Registrations</h1>
        <Row xs={1} md={2} lg={3} className="py-4">
          {businessTypes.map((type, index) => (
            <Col key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{type.name}</Card.Title>
                  <Card.Text>
                    <strong>Advantages:</strong> {type.advantages}
                  </Card.Text>
                  <Card.Text>
                    <strong>Disadvantages:</strong> {type.disadvantages}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Section 5: Choosing the Right Business Structure */}
        <Row className="pt-5">
          <Col>
            <h2>Choosing the Right Business Structure</h2>
            <ul>
              <li>
                The choice of business structure should align with your specific
                goals, industry, and business size. Consider your long-term
                objectives, the level of liability protection you need, and the
                administrative requirements you're willing to meet.{" "}
              </li>
              <li>
                Seek legal and financial advice to make an informed decision.
                Professional guidance can help you navigate the complexities of
                business registration and choose the structure that best suits
                your needs.
              </li>
            </ul>
            <p>
              At RSNRMuneemji, we're dedicated to guiding you through the
              intricacies of business registration and helping you select the
              right structure for your unique venture. For personalized
              assistance and a smooth registration process, reach out to our
              experts. Your path to business success starts with proper
              registration, so don't delay in unlocking your business's full
              potential.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BusinessRegistrationPage;
