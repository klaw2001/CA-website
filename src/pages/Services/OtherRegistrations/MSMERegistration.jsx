import React from "react";
import GlobalHero from "../../../components/GlobalComps/GlobalHero";
import { Button, Card, Col, Container, ListGroup, Row, Table } from "react-bootstrap";
import startup from "../../../images/startup.svg";
import {
  ArrowDownUp,
  BadgeDollarSign,
  Building2,
  CheckCheck,
  Cpu,
  FileBadge2,
  Gem,
  HardDrive,
  Landmark,
  Percent,
  Store,
  Unplug,
  UserRoundCheck,
  WalletCards,
} from "lucide-react";

const MSMERegistration = () => {
  const msmeBenefits = [
    {
      title: "Access to Credit",
      details:
        "Priority lending, collateral-free loans, and lower interest rates for easier capital acquisition.",
      icon: <WalletCards size={40} />,
    },
    {
      title: "Government Subsidies and Schemes",
      details:
        "Subsidized rates and financial assistance through government schemes for MSME growth.",
      icon: <Landmark size={40} />,
    },
    {
      title: "Financial Assistance",
      details:
        "Benefit from the Credit Guarantee Fund Scheme, providing collateral-free credit to MSMEs.",
      icon: <BadgeDollarSign size={40} />,
    },
    {
      title: "Tax Benefits",
      details:
        "Income tax exemption or reduced rates for eligible MSMEs, promoting financial stability.",
      icon: <Percent size={40} />,
    },
    {
      title: "Market Access and Promotion",
      details:
        "MSME registration enables participation in government tenders, expanding market access.",
      icon: <Store size={40} />,
    },
    {
      title: "Technology Upgradation",
      details:
        "Financial support for adopting new technologies and upgrading infrastructure.",
      icon: <Cpu size={40} />,
    },
    {
      title: "Preference in Government Procurement",
      details:
        "Priority in government procurement processes, providing opportunities to secure contracts.",
      icon: <FileBadge2 size={40} />,
    },
    {
      title: "Reduced Electricity Bills",
      details:
        "Concession on electricity bills for registered MSMEs, reducing operational costs.",
      icon: <Unplug size={40} />,
    },
    {
      title: "Ease of Compliance",
      details:
        "Simplified regulatory compliances with MSME registration, facilitating business operations.",
      icon: <CheckCheck size={40} />,
    },
    {
      title: "Credit Linked Capital Subsidy Scheme (CLCSS)",
      details:
        "Capital subsidy under CLCSS for technology upgradation in the manufacturing sector.",
      icon: <CheckCheck size={40} />,
    },
    {
      title: "Networking Opportunities",
      details:
        "Enhanced networking opportunities with other MSMEs, industry associations, and government bodies.",
      icon: <ArrowDownUp size={40} />,
    },
    {
      title: "Skill Development and Training",
      details:
        "Financial support for skill development and training programs for MSME employees.",
      icon: <HardDrive size={40} />,
    },
    {
      title: "Recognition and Credibility",
      details:
        "Credibility from MSME registration enhances chances of securing partnerships and collaborations.",
      icon: <WalletCards size={40} />,
    },
    {
      title: "Export Promotion",
      details:
        "Access to Export Promotion Capital Goods (EPCG) Scheme for concessional rates on importing capital goods.",
      icon: <Gem size={40} />,
    },
    {
      title: "Customized Business Solutions",
      details:
        "MSME-focused initiatives provide tailored solutions recognizing specific needs and challenges.",
      icon: <Building2 size={40} />,
    },
  ];

  const registrationSteps = [
    {
      title: "Visit the Udyam Registration Portal",
      description:
        "Access the official Udyam Registration portal (https://udyamregistration.gov.in/).",
    },
    {
      title: "Enter Aadhaar Number",
      description:
        "Provide the Aadhaar number of the business owner or the authorized signatory. Note that the Aadhaar number is mandatory for registration.",
    },
    {
      title: "Verification through OTP",
      description:
        "An OTP (One Time Password) will be sent to the registered mobile number linked to the Aadhaar. Enter the OTP for verification.",
    },
    {
      title: "Personal Details and Business Information",
      description:
        "Fill in the required details such as the name of the entrepreneur, PAN (Permanent Account Number), social category, and details about the business.",
    },
    {
      title: "Enterprise Classification",
      description:
        "Choose the appropriate category of enterprise (Micro, Small, or Medium) based on the investment in plant and machinery or equipment and the turnover of the business.",
    },
    {
      title: "Business Activities",
      description:
        "Provide information about the main business activities or manufacturing activities carried out by the enterprise.",
    },
    {
      title: "Bank Account Details",
      description:
        "Enter the details of the bank account linked to the business for verification purposes.",
    },
    {
      title: "PAN and GST Details",
      description:
        "Provide PAN and GST (Goods and Services Tax) details if applicable.",
    },
    {
      title: "Submit and Generate Certificate",
      description:
        "After entering all the required information, submit the application. Once verified, the system will generate the Udyam Registration certificate.",
    },
  ];

  const services = [
    {
      title: "Expert Guidance",
      description:
        "Our seasoned professionals understand the nuances of MSME registration. Benefit from their expertise as they guide you through the entire process.",
    },
    {
      title: "Personalized Support",
      description:
        "We believe in the uniqueness of every business. Our team provides personalized assistance tailored to your specific needs, ensuring a smooth and efficient registration journey.",
    },
    {
      title: "Timely Processing",
      description:
        "Time is money, and we value yours. With RSNRMUNEEMJI, expect prompt and efficient processing of your MSME registration, saving you valuable time and effort.",
    },
    {
      title: "Accuracy and Compliance",
      description:
        "MSME registration involves critical details. Rely on us to ensure accuracy and compliance with all regulatory requirements, minimizing the risk of errors and delays.",
    },
    {
      title: "Transparent Communication",
      description:
        "Stay informed at every step! We prioritize transparent communication, keeping you updated on the progress of your MSME registration application.",
    },
    {
      title: "Customized Solutions",
      description:
        "Whether you're a micro-enterprise or a medium-sized business, we cater our services to meet your unique requirements. Our solutions are tailored for businesses of all scales.",
    },
  ];

  const assistanceServices = [
    {
      title: "Application Preparation",
      description:
        "We handle the meticulous preparation of your MSME registration application, ensuring all required details are accurately presented.",
    },
    {
      title: "Documentation Support",
      description:
        "Say goodbye to paperwork woes! Our team assists in gathering and organizing the necessary documents for a seamless registration process.",
    },
    {
      title: "Online Submission",
      description:
        "Let us take care of the technicalities. We handle the online submission of your MSME registration application, ensuring adherence to the digital registration process.",
    },
    {
      title: "Verification Assistance",
      description:
        "Should there be any verification requirements, RSNRMUNEEMJI supports you through the entire process, making it stress-free and efficient.",
    },
    {
      title: "Post-Registration Guidance",
      description:
        "Your journey doesn't end with registration. We provide post-registration guidance and support for any updates or modifications needed in the future.",
    },
  ];
  return (
    <>
      <GlobalHero heading="MSME Registration" />
      <section>
        <Container>
          <h1 className="text-center my-4 fw-bold">
            MSME Registration{" "}
          </h1>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="order-1">
              <h5 className="">
                MSME is basically the ministry of micro, small and medium
                enterprises. it was introduced to Promote growth and development
                of micro, small and medium enterprises, including khadi, village
                and coir industries to create new enterprises and more
                employment opportunities. the long-term goal of the ministry is
                to enhance manufacturing base in the country by improving the
                Performance of msmes through skill and entrepreneurship
                development.{" "}
              </h5>
            </Col>
            <Col>
              <img src={startup} alt="" className="img-fluid" />
            </Col>
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
                    Functions of the Ministry of MSME
                  </Card.Title>

                  <Card.Text>
                    <p className="lead">
                      The Ministry of Micro, Small, and Medium Enterprises
                      (MSME) plays a crucial role in fostering the growth and
                      development of small businesses in India. Here are the key
                      functions of the Ministry:
                    </p>
                  </Card.Text>

                  {/* Function List */}
                  <Card.Text>
                    <ol>
                      <li>
                        <strong>Facilitation and Credit Flow to MSMEs:</strong>{" "}
                        Ensuring easy access to credit for MSMEs, facilitating
                        their financial needs for sustainable growth.
                      </li>
                      <li>
                        <strong>Improving Competitiveness of MSMEs:</strong>{" "}
                        Implementing strategies to enhance the competitiveness
                        of MSMEs in the market.
                      </li>
                      <li>
                        <strong>Technology Upgradation:</strong> Upgrading the
                        manufacturing base of MSMEs through the adoption of
                        advanced technologies.
                      </li>
                      <li>
                        <strong>
                          Promotion through Cluster-Based Approach:
                        </strong>{" "}
                        Promoting MSMEs through a cluster-based approach to
                        encourage collaboration and shared resources.
                      </li>
                      <li>
                        <strong>Marketing Support:</strong> Providing marketing
                        support to MSMEs, helping them reach a wider audience
                        and boost sales.
                      </li>
                      <li>
                        <strong>
                          Skill Development and Entrepreneurship Training:
                        </strong>{" "}
                        Conducting programs for skill development and
                        entrepreneurship training to empower individuals in the
                        MSME sector.
                      </li>
                      <li>
                        <strong>
                          Prime Minister’s Employment Generation Program
                          (PMEGP):
                        </strong>{" "}
                        Implementing programs like PMEGP to create new
                        micro-enterprises and generate employment opportunities.
                      </li>
                      <li>
                        <strong>
                          Growth and Development of Khadi and Village Industries
                          (KVI) Sector:
                        </strong>{" "}
                        Focusing on the growth and development of the Khadi and
                        Village Industries sector.
                      </li>
                      <li>
                        <strong>
                          Growth and Development of Coir Industry:
                        </strong>{" "}
                        Supporting the growth and development of the Coir
                        Industry, contributing to the economic landscape.
                      </li>
                    </ol>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <h2 className="mb-2">Classification of MSME: </h2>
          <p>
            Revised Classification applicable w.e.f 1st July 2020 <br />
            Composite Criteria: Investment in Plant & Machinery/equipment and
            Annual Turnover{" "}
          </p>
          <Table striped bordered hover responsive className="mt-4">
            <thead>
              <tr>
                <th className="text-center">Classification</th>
                <th className="text-center">Micro</th>
                <th className="text-center">Small</th>
                <th className="text-center">Medium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">
                  Manufacturing Enterprises and Enterprises rendering Services
                </td>
                <td className="text-center">
                  Investment: Not more than Rs.1 crore
                  <br />
                  Annual Turnover: Not more than Rs.5 crores
                </td>
                <td className="text-center">
                  Investment: Not more than Rs.10 crore
                  <br />
                  Annual Turnover: Not more than Rs.50 crores
                </td>
                <td className="text-center">
                  Investment: Not more than Rs.50 crore
                  <br />
                  Annual Turnover: Not more than Rs.250 crores
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <h2>Benefits of registering in Startup India: </h2>
          <Row className="g-4 justify-content-center mt-2 pb-5">
            {msmeBenefits.map((document, index) => (
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
          <p className="mt-3">
            <strong>
              It's important for businesses to explore the specific benefits
              available in their region and industry and leverage MSME
              registration to enhance their growth prospects.{" "}
            </strong>
          </p>
        </Container>
      </section>

      <section>
        <Container className="mt-4">
          <h2 className="text-center mb-4">MSME Registration Process</h2>
          <ListGroup>
            {registrationSteps.map((step, index) => (
              <ListGroup.Item key={index}>
                <h4 className="mb-2">{step.title}</h4>
                <p>{step.description}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <p className="mt-3">
            <strong>
              It's essential to stay updated with the latest guidelines and
              requirements from the Ministry of Micro, Small, and Medium
              Enterprises (MSME) or the concerned government authority in your
              region. Always refer to the official government portal for the
              most accurate and current information.{" "}
            </strong>
          </p>
        </Container>
      </section>

      <section className="py-5">
        <Container className="mt-4">
          <h2 className="text-center mb-4">
            Why Choose RSNRMUNEEMJI for MSME Registration?
          </h2>
          <Row className="mb-4">
            {services.map((service, index) => (
              <Col key={index} md={4}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <h2 className="text-center mb-4">How RSNRMUNEEMJI Can Assist You:</h2>
          <Row className="mb-4">
            {assistanceServices.map((assistance, index) => (
              <Col key={index} md={4}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{assistance.title}</Card.Title>
                    <Card.Text>{assistance.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center">
            <Button variant="primary" size="lg" className="app-btn">
              Contact Us Today
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MSMERegistration;
