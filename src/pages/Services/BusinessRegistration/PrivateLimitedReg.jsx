import React from "react";
import GlobalHero from "../../../components/GlobalComps/GlobalHero";
import { Col, Row, Table } from "react-bootstrap";
import {
  Fingerprint,
  BookUser,
  FileImage,
  FileSignature,
  FolderEdit,
  Link,
  Newspaper,
  CircleOff,
  ShieldX,
  UserRoundSearch,
  UserPlus,
  ShieldCheck,
  UsersRound,
  Sparkles,
  Building2,
  ScanEye,
  Bus,
} from "lucide-react";
import growth from "../../../images/growth-svg.svg";
const PrivateLimitedReg = () => {
  const documentsRequired = [
    {
      title: "Identity Proof",
      icon: <Fingerprint size={40} />,
      details:
        "Director Identification Number (DIN): Directors are the backbone of a Pvt. Ltd. company. To obtain a DIN, you need to submit a self-attested copy of your identity proof. This can be your Aadhar card, passport, or voter ID.",
    },
    {
      title: "Address Proof",
      icon: <BookUser size={40} />,
      details:
        "Director's Address Proof: The address proof for directors can include utility bills, bank statements, or rental agreements.",
    },
    {
      title: "Passport-sized Photographs",
      icon: <FileImage size={40} />,
      details:
        "Recent passport-sized photographs are required for each director.",
    },
    {
      title: "Digital Signature Certificate (DSC)",
      icon: <FileSignature size={40} />,
      details:
        "A DSC is essential for electronic filings with government authorities. It ensures the authenticity of documents submitted online.",
    },
    {
      title: "Name Approval Application",
      icon: <FolderEdit size={40} />,
      details:
        "Before incorporating your Pvt. Ltd. company, you must submit a name approval application to the Registrar of Companies (ROC). The application should include the proposed company name and details of authorized and paid-up capital.",
    },
    {
      title: "Memorandum of Association (MOA)",
      icon: <Link size={40} />,
      details:
        "The MOA is a critical document that outlines the company's objectives, activities, and powers. It must be drafted in accordance with the Companies Act, 2013.",
    },
    {
      title: "Articles of Association (AOA)",
      icon: <Newspaper size={40} />,
      details:
        "The AOA specifies the internal rules and regulations governing the company's operations. Like the MOA, it must comply with the Companies Act, 2013.",
    },
    {
      title: "Proof of Office Address",
      icon: <BookUser size={40} />,
      details:
        "You must provide proof of the registered office address of your Pvt. Ltd. company. This can be a rental agreement, utility bill, or a sale deed for property owners.",
    },
    {
      title: "No Objection Certificate (NOC)",
      icon: <CircleOff size={40} />,
      details:
        "If the office premises are on rent, a NOC from the property owner is required.",
    },
    {
      title: "Declaration of Director",
      icon: <ShieldX size={40} />,
      details:
        "Each director of the Pvt. Ltd. company must submit a declaration that they are not disqualified from being appointed as directors.",
    },
    {
      title: "Consent to Act as Director",
      icon: <UserRoundSearch size={40} />,
      details:
        "Directors must provide their consent to act as directors of the proposed Pvt. Ltd. company.",
    },
    {
      title: "Affidavit of Subscribers and First Directors",
      icon: <UserPlus size={40} />,
      details:
        "Subscribers to the MOA and AOA must submit affidavits declaring their intent to become shareholders and directors of the company.",
    },
    {
      title: "Certificate of Incorporation",
      icon: <ShieldCheck size={40} />,
      details:
        "This document, along with a copy of the MOA and AOA, is issued by the ROC upon successful company registration.",
    },
  ];

  const registrationBenefits = [
    {
      title: "Expert Guidance",
      description:
        "Rely on our seasoned professionals who understand the intricacies of Private Limited Registration. Our experts guide you through the process with precision and expertise.",
      icon: <UsersRound size={40} />, // Replace with the actual icon component or library you are using
    },
    {
      title: "Tailored Solutions for Your Business",
      description:
        "Every business is unique. We provide personalized registration solutions tailored to your specific industry, goals, and operational requirements.",
      icon: <Building2 size={40} />, // Replace with the actual icon component or library you are using
    },
    {
      title: "Efficiency Unleashed",
      description:
        "Time is of the essence, and we value yours. Our streamlined processes guarantee efficiency, ensuring your registration is swift and hassle-free.",
      icon: <Sparkles size={40} />, // Replace with the actual icon component or library you are using
    },
    {
      title: "Accuracy and Precision",
      description:
        "Say goodbye to registration worries. We meticulously handle documentation, ensuring accuracy in every detail for a successful Private Limited Registration.",
      icon: <ScanEye size={40} />, // Replace with the actual icon component or library you are using
    },
    {
      title: "Transparent Communication",
      description:
        "Stay informed at every step! We prioritize transparent communication, keeping you updated on the progress of your registration.",
      icon: <Bus size={40} />, // Replace with the actual icon component or library you are using
    },
  ];

  return (
    <>
      <GlobalHero heading="Private Limited Registration" />
      <section>
        <div className="container">
          <Row>
            <Col>
              <h1 className="my-3 fs-1"> Private Limited Company</h1>
              <p>
                A Private Limited Company is a popular form of business
                structure known for its flexibility and limited liability. It is
                characterized by the following
                <br />
                <br /> Here are the key characteristics: <br />
                <br /> - Limited Liability: Shareholders' liability is limited
                to their investment in the company, which means personal assets
                are generally protected from business debts. <br /> - Separate
                Legal Entity: A Pvt. Ltd. company is considered a separate legal
                entity, distinct from its owners. It can own property, enter
                into contracts, and sue or be sued in its own name.
                <br /> - Ownership: A Pvt. Ltd. company can have a minimum of
                two and a maximum of 200 shareholders. These shareholders hold
                shares in the company, representing their ownership.
              </p>
            </Col>
          </Row>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="card border-0">
                <div class="card-body">
                  <h6 class="card-title">
                    Private Limited Company Registration Process:{" "}
                  </h6>
                  <p>
                    The registration of a Pvt. Ltd. company involves several
                    essential steps:{" "}
                  </p>
                  <div id="content">
                    <ul class="timeline">
                      <li class="event">
                        <h3 className="mb-2">Name Reservation: </h3>
                        <p>
                          Before registering, you need to choose a unique and
                          suitable name for your company. The proposed name must
                          comply with the Ministry of Corporate Affairs' naming
                          guidelines.
                        </p>
                      </li>
                      <li class="event">
                        <h3 className="mb-2">
                          Director Identification Number (DIN):{" "}
                        </h3>
                        <p>
                          Directors of the company need to obtain a Director
                          Identification Number, a unique identification
                          assigned by the government.
                        </p>
                      </li>
                      <li class="event">
                        <h3 className="mb-2">
                          Digital Signature Certificate (DSC):{" "}
                        </h3>
                        <p>
                          A Digital Signature Certificate is required for online
                          filings. It ensures the authenticity of documents
                          submitted electronically.
                        </p>
                      </li>
                      <li class="event">
                        <h3 className="mb-2">
                          Memorandum of Association (MOA) and Articles of
                          Association (AOA):{" "}
                        </h3>
                        <p>
                          These documents outline the company's objectives and
                          rules for its internal functioning. They must be
                          prepared and filed with the Registrar of Companies.
                        </p>
                      </li>
                      <li class="event">
                        <h3 className="mb-2">
                          Filing with the Registrar of Companies (ROC):{" "}
                        </h3>
                        <p>
                          All necessary documents, including the MOA, AOA, and
                          incorporation application, should be filed with the
                          ROC.{" "}
                        </p>
                      </li>
                      <li class="event">
                        <h3 className="mb-2">
                          {" "}
                          Certificate of Incorporation:{" "}
                        </h3>
                        <p>
                          Once the ROC reviews and approves the documents, a
                          Certificate of Incorporation is issued, confirming the
                          company's legal existence.{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h1 className="pb-5">
            Documents Required for Incorporating a Private Limited Company:{" "}
          </h1>
          <Row className="g-4">
            {documentsRequired.map((document, index) => (
              <Col key={index} className="col-12 col-md-6 col-lg-3">
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
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="mb-3">
            Advantages of Private Limited Company Registration:
          </h2>

          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Advantages</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  - Limited Liability Protection: - Shareholders are not
                  personally liable for the company's debts and obligations.
                </td>
              </tr>
              <tr>
                <td>
                  - Credibility and Trust: - Pvt. Ltd. companies often enjoy a
                  higher level of credibility and trust in the eyes of
                  customers, partners, and investors.
                </td>
              </tr>
              <tr>
                <td>
                  - Easy Transfer of Ownership: - Shares can be easily
                  transferred among shareholders, offering flexibility in
                  ownership.
                </td>
              </tr>
              <tr>
                <td>
                  - Access to Funding: - Pvt. Ltd. companies can attract
                  investors and raise capital by selling shares.
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>

      <section>
        <div className="container">
          <Row>
            <Col className="col-12">
              <h3 className="mb-3">Importance of Proper Documentation: </h3>
              <p>
                Accurate and complete documentation is essential for the
                successful incorporation of a Pvt. Ltd. company. Each document
                serves a specific purpose and must adhere to legal requirements.
                Failing to provide the necessary documents or errors in
                submission can lead to delays and complications in the
                registration process.{" "}
              </p>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col className="col-12 col-lg-6">
              <h3 className="mb-3">Your Journey to Success: </h3>
              <p>
                When considering Pvt. Ltd. registration, it's paramount to
                consult with professionals who understand the intricacies of the
                corporate world. Your specific business goals and needs are
                unique, and they require a tailored approach for a legally sound
                journey.
                <br />
                Our indirect advertisement to you is simple: at RSNRMuneemji, we
                have a wealth of experience in Pvt. Ltd. company registration.
                We're here to simplify the complexities and empower your
                entrepreneurial vision. It's not just about helping you start
                your business; it's about helping you succeed. Trust us as your
                partner in this exciting journey. Unlock the full potential of
                your business with Pvt. Ltd. registration. Get started with us
                today, and let's pave the way to your success. <br />
                Turn Your Business Vision into Reality! Experience Seamless
                Private Limited Registration with RSNRMUNEEMJI! Are you ready to
                elevate your business to new heights? Look no further!
                RSNRMUNEEMJI is your trusted partner in simplifying the journey
                to Private Limited Registration. Discover why we stand out from
                the rest:{" "}
              </p>
            </Col>
            <Col>
              <img src={growth} alt="" className="img-fluid" />
            </Col>
          </Row>
          <Row className="g-4 justify-content-center pb-5">
            {registrationBenefits.map((document, index) => (
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

          <Row className="py-5">
            <Col>
              <h2 className="mb-3">
                How RSNRMUNEEMJI Can Propel Your Business:{" "}
              </h2>
              <ol>
                <li>
                  <h5>Comprehensive Consultation: </h5>
                  <p>
                    Benefit from a detailed consultation to understand the
                    nuances of Private Limited Registration and how it aligns
                    with your business goals.{" "}
                  </p>
                </li>
                <li>
                  <h5> Document Preparation: </h5>
                  <p>
                    Let us handle the paperwork. Our team assists in gathering
                    and organizing the necessary documents, ensuring a seamless
                    registration process.{" "}
                  </p>
                </li>
                <li>
                  <h5> Online Submission: </h5>
                  <p>
                    Trust us to handle the technicalities of online submission.
                    We ensure your application is submitted efficiently and
                    accurately.{" "}
                  </p>
                </li>
                <li>
                  <h5>Swift Processing: </h5>
                  <p>
                    {" "}
                    Experience prompt processing of your registration
                    application. Our goal is to get your business up and running
                    at the earliest.{" "}
                  </p>
                </li>
                <li>
                  <h5> Post-Registration Support: </h5>
                  <p>
                    Your journey doesn't end with registration. We provide
                    post-registration support, helping you navigate any queries
                    or modifications required.{" "}
                  </p>
                </li>
              </ol>

              <p className="string">
                <strong>
                  Ready to Transform Your Business Structure? <br />
                  <br />
                  Choose RSNRMUNEEMJI as your trusted partner for Private
                  Limited Registration. Contact us today, and let's embark on a
                  journey of success, innovation, and growth together!
                </strong>
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default PrivateLimitedReg;
