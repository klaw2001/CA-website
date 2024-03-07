import React, { useState } from "react";
import GlobalHero from "../../../components/GlobalComps/GlobalHero";
import { Card, Col, Container, ListGroup, Row, Table } from "react-bootstrap";
import sign from "../../../images/sign.svg";
import digitalsign from "../../../images/digitalsign.svg";
import docs from "../../../images/docs.svg";
import gumasta from "../../../images/gumasta.svg";
import food from "../../../images/food.svg";
import { BookLock, FileKey2, Hash } from "lucide-react";
import ScrollToContent from "../../../components/contentScroll/ScrollToContent";
const DocumentAndLicense = () => {
  const digitalSignatureDetails = [
    {
      title: "Private Key",
      description:
        "This is a secret key known only to the signer. It is used to create the digital signature.",
      icon: <BookLock size={40} />, // Replace with the actual icon component or library you are using
    },
    {
      title: "Public Key",
      description:
        "This key is shared publicly and is used to verify the digital signature.",
      icon: <FileKey2 size={40} />, // Replace with the actual icon component or library you are using
    },
    {
      title: "Hash Function",
      description:
        "A mathematical algorithm that generates a fixed-size string of characters (hash) from the document's content. It ensures the document's integrity.",
      icon: <Hash size={40} />, // Replace with the actual icon component or library you are using
    },
  ];
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <GlobalHero heading="Document And License" />
      <button onClick={toggleVisibility} className="btn btn-primary position-absolute end-0 mb-4">Toggle Content</button>

      <ScrollToContent
        pages={[
          { title: "Digital Signatures", href: "#digital-signature-certificate" },
          { title: "Gusmasta License", href: "#gumasta-license" },
          { title: "Food License", href: "#food-license" },
          { title: "TAN", href: "#tan" },
          { title: "PAN", href: "#pan" },
          { title: "Aadhar Card", href: "#aadhar-card" },
        ]}
        isVisible={isVisible}
        toggleVisibility={toggleVisibility}
      />
      <section className="py-5" id="digital-signature-certificate">
        <Container>
          <h1 className="text-center fw-bold">
            Digital Signatures: A Comprehensive Guide
          </h1>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="order-1">
              <h5 className="">
                In the era of digital communication and transactions, ensuring
                the authenticity and integrity of electronic documents is
                paramount. Digital Signatures, often abbreviated as DSC, play a
                crucial role in this realm by providing a secure and legally
                recognized means of verifying the origin and content of digital
                messages or documents. This comprehensive guide explores what a
                digital signature is, its components, importance, the process of
                creation, required documents, and the legal framework governing
                digital signatures.{" "}
              </h5>
            </Col>
            <Col>
              <img src={sign} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <h2>What is a Digital Signature?</h2>
          <p className="py-3">
            A digital signature is a cryptographic technique that verifies the
            authenticity and integrity of digital messages or documents. It
            serves as a virtual equivalent to handwritten signatures but offers
            additional security features. Digital signatures ensure that the
            sender of a message is who they claim to be and that the content has
            not been altered during transmission.
          </p>
          <h5>Components of a Digital Signature:</h5>
          <Row className="g-4 justify-content-center mt-2 pb-5">
            {digitalSignatureDetails.map((document, index) => (
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

      <section className="">
        <Container>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col>
              <Card className="mt-4 border-0">
                <Card.Header as="h5">
                  Importance of Digital Signatures
                </Card.Header>
                <Card.Body>
                  <ListGroup>
                    {/* 1. Authentication */}
                    <ListGroup.Item>
                      <h6>Authentication</h6>
                      <p>Verifies the identity of the sender.</p>
                    </ListGroup.Item>

                    {/* 2. Integrity */}
                    <ListGroup.Item>
                      <h6>Integrity</h6>
                      <p>
                        Ensures that the document has not been tampered with.
                      </p>
                    </ListGroup.Item>

                    {/* 3. Non-Repudiation */}
                    <ListGroup.Item>
                      <h6>Non-Repudiation</h6>
                      <p>Prevents the sender from denying their signature.</p>
                    </ListGroup.Item>

                    {/* 4. Security */}
                    <ListGroup.Item>
                      <h6>Security</h6>
                      <p>
                        Offers a secure method for electronic transactions and
                        communication.
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <img src={digitalsign} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="order-1">
              <Card className="mt-4">
                <Card.Header as="h5">Creating a Digital Signature</Card.Header>
                <Card.Body>
                  <ListGroup>
                    {/* 1. Key Pair Generation */}
                    <ListGroup.Item>
                      <h6>Key Pair Generation</h6>
                      <p>
                        The user generates a pair of cryptographic keys - public
                        and private.
                      </p>
                    </ListGroup.Item>

                    {/* 2. Document Hashing */}
                    <ListGroup.Item>
                      <h6>Document Hashing</h6>
                      <p>
                        The document's hash is created using a hash function.
                      </p>
                    </ListGroup.Item>

                    {/* 3. Signing */}
                    <ListGroup.Item>
                      <h6>Signing</h6>
                      <p>
                        The hash is encrypted with the user's private key,
                        creating the digital signature.
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <img src={digitalsign} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col>
              <Card className="mt-4">
                <Card.Header as="h5">
                  Documents Required for Digital Signature
                </Card.Header>
                <Card.Body>
                  <ListGroup>
                    {/* 1. Proof of Identity */}
                    <ListGroup.Item>
                      <h6>Proof of Identity</h6>
                      <p>
                        Acceptable documents: Passport, Driver's License, or
                        Aadhar Card.
                      </p>
                    </ListGroup.Item>

                    {/* 2. Proof of Address */}
                    <ListGroup.Item>
                      <h6>Proof of Address</h6>
                      <p>
                        Acceptable documents: Utility bill, Passport, or Voter
                        ID.
                      </p>
                    </ListGroup.Item>

                    {/* 3. Passport-sized Photographs */}
                    <ListGroup.Item>
                      <h6>Passport-sized Photographs</h6>
                      <p>
                        Provide recent passport-sized photographs as part of the
                        documentation.
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <img src={docs} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="justify-content-center mb-3">
            <Col>
              <Card className="mt-4">
                <Card.Header as="h5">
                  Legal Laws about Digital Signatures in India
                </Card.Header>
                <Card.Body>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>Sections</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Information Technology Act, 2000 */}
                      <tr>
                        <td>Information Technology Act, 2000</td>
                        <td>
                          The overarching legislation governing digital
                          signatures in India.
                        </td>
                      </tr>

                      {/* Section 2(1)(ta) */}
                      <tr>
                        <td>Section 2(1)(ta)</td>
                        <td>Defines a digital signature.</td>
                      </tr>

                      {/* Section 3 */}
                      <tr>
                        <td>Section 3</td>
                        <td>Recognizes digital signatures as legally valid.</td>
                      </tr>

                      {/* Section 5 */}
                      <tr>
                        <td>Section 5</td>
                        <td>
                          Specifies the use of an asymmetric cryptosystem for
                          secure digital signatures.
                        </td>
                      </tr>

                      {/* Section 10A */}
                      <tr>
                        <td>Section 10A</td>
                        <td>
                          Provides for the acceptance of electronic signatures.
                        </td>
                      </tr>

                      {/* Indian Evidence Act, 1872 */}
                      <tr>
                        <td>Indian Evidence Act, 1872</td>
                        <td>
                          Specifies the admissibility of electronically signed
                          documents in court.
                        </td>
                      </tr>

                      {/* Code of Civil Procedure, 1908 */}
                      <tr>
                        <td>Code of Civil Procedure, 1908</td>
                        <td>
                          Outlines the use of digital signatures in legal
                          proceedings.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <strong className="">
            Digital signatures are a cornerstone of secure digital
            communication. Their adoption is not only an industry best practice
            but also a legal requirement in many instances. As technology
            evolves, the legal framework surrounding digital signatures will
            likely adapt to accommodate emerging trends and challenges.
            Businesses and individuals alike should stay informed about these
            developments to ensure compliance and the security of their digital
            interactions.
          </strong>
        </Container>
      </section>

      <section className="py-5" id="gumasta-license">
        <Container>
          <h1 className="text-center fw-bold">Gumasta License</h1>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="order-1">
              <h5 className="">
                A Gumasta License, also known as the Shops and Establishments
                Registration, is a mandatory registration required for
                businesses operating in the unorganized sector in India. It is
                governed by the respective state's Shops and Establishments Act
                and is essential for regulating and ensuring the working
                conditions and rights of employees in commercial establishments.
                Let's delve into the key aspects of obtaining and understanding
                the Gumasta License.{" "}
              </h5>
            </Col>
            <Col>
              <img src={gumasta} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="justify-content-center">
            <Col>
              <Card className="mt-4 p-4">
                <Card.Header as="h3" className="text-center mb-4">
                  Gumasta License Overview
                </Card.Header>
                <Card.Body>
                  {/* Purpose of Gumasta License */}
                  <section className="mb-4">
                    <h4>Purpose of Gumasta License</h4>
                    <ul>
                      <li>
                        Regulatory Compliance: Ensures that businesses adhere to
                        labor laws and maintain a healthy work environment.
                      </li>
                      <li>
                        Employee Welfare: Protects the rights and interests of
                        employees working in various establishments.
                      </li>
                    </ul>
                  </section>

                  {/* Key Components of Gumasta License */}
                  <section className="mb-4">
                    <h4>Key Components of Gumasta License</h4>
                    <ul>
                      <li>
                        Name of the Establishment: The registered name of the
                        business.
                      </li>
                      <li>
                        Address of the Establishment: The physical location
                        where the business operates.
                      </li>
                      <li>
                        Details of Employees: Including the number of employees
                        and their working conditions.
                      </li>
                      <li>
                        Working Hours: Specifies the permissible working hours
                        for employees.
                      </li>
                      <li>
                        Holidays: Outlines the holidays and leave policies.
                      </li>
                    </ul>
                  </section>

                  {/* Application Process */}
                  <section className="mb-4">
                    <h4>Application Process</h4>
                    <ul>
                      <li>
                        Eligibility: Any person intending to start a business in
                        the unorganized sector is eligible to apply.
                      </li>
                      <li>
                        Application Form: The applicant needs to fill out the
                        prescribed form available online or at the local
                        municipal corporation office.
                      </li>
                      <li>
                        Document Submission: Submit required documents,
                        including identity proof, address proof, and
                        photographs.
                      </li>
                      <li>
                        Payment of Fees: Pay the requisite fees, which may vary
                        from state to state.
                      </li>
                    </ul>
                  </section>

                  {/* Documents Required */}
                  <section className="mb-4">
                    <h4>Documents Required</h4>
                    <ul>
                      <li>PAN Card of the Business Owner</li>
                      <li>Identity Proof (Electricity Bill, Passport, etc.)</li>
                      <li>
                        Address Proof (Electricity Bill, Rent Agreement, etc.)
                      </li>
                      <li>Passport-sized Photographs of the Business Owner</li>
                      <li>Details of Employees, if any</li>
                    </ul>
                  </section>

                  {/* Importance of Gumasta License */}
                  <section className="mb-4">
                    <h4>Importance of Gumasta License</h4>
                    <ul>
                      <li>
                        Legal Requirement: It is a legal obligation for
                        businesses operating in the unorganized sector.
                      </li>
                      <li>
                        Business Credibility: Having a Gumasta License enhances
                        the credibility of the business.
                      </li>
                      <li>
                        Dispute Resolution: Provides a legal framework for
                        dispute resolution between employers and employees.
                      </li>
                    </ul>
                  </section>

                  {/* Validity and Renewal */}
                  <section>
                    <h4>Validity and Renewal</h4>
                    <ul>
                      <li>
                        Validity Period: The Gumasta License is typically valid
                        for one year.
                      </li>
                      <li>
                        Renewal Process: The license can be renewed by
                        submitting the required documents and paying the renewal
                        fees before the expiry date.
                      </li>
                    </ul>
                  </section>
                </Card.Body>
              </Card>
              <p className="mt-3">
                <strong>
                  Obtaining a Gumasta License is a fundamental step for
                  businesses operating in the unorganized sector to ensure legal
                  compliance and create a conducive working environment. It is
                  advisable for business owners to familiarize themselves with
                  the specific requirements of the Shops and Establishments Act
                  in their respective states and initiate the registration
                  process promptly. Compliance not only strengthens the legal
                  standing of the business but also contributes to the overall
                  welfare of employees.
                </strong>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5" id="food-license">
        <Container>
          <h1 className="text-center fw-bold">Food License</h1>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="">
              <h5 className="">
                A Food License, issued by the Food Safety and Standards
                Authority of India (FSSAI), is a crucial requirement for
                individuals and entities involved in the food business in India.
                This license ensures that food products adhere to the standards
                and regulations set by FSSAI, promoting the safety and quality
                of food available in the market. Here's a comprehensive guide
                covering the process of obtaining a Food License, its
                importance, required documents, and a breakdown of the FSSAI
                license number.{" "}
              </h5>
            </Col>
            <Col>
              <img src={food} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Table striped bordered hover responsive className="mt-4">
            <thead>
              <tr style={{ verticalAlign: "middle" }} className="text-center">
                <th>Types of FSSAI License</th>
                <th>Importance</th>
                <th>Process of Obtaining</th>
                <th>Documents Required</th>
                <th>Breakdown of License Number</th>
                <th>Validity and Renewal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>
                      Basic Registration: For small food businesses with an
                      annual turnover of up to ₹12 lakhs.
                    </li>
                    <li>
                      State License: For mid-sized businesses with an annual
                      turnover between ₹12 lakhs and ₹20 crores.
                    </li>
                    <li>
                      Central License: For large businesses with an annual
                      turnover exceeding ₹20 crores.
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      Legal Requirement: It is mandatory for all food businesses
                      to obtain an FSSAI license.
                    </li>
                    <li>
                      Consumer Confidence: Enhances consumer trust in the safety
                      and quality of food products.
                    </li>
                    <li>
                      Market Access: Facilitates smooth entry into the market by
                      demonstrating compliance with food safety standards.
                    </li>
                    <li>
                      Business Credibility: FSSAI license adds credibility to
                      the food business, contributing to its reputation.
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      Determine the Type of License: Identify the appropriate
                      category of license based on the scale of your food
                      business.
                    </li>
                    <li>
                      Application Submission: Fill out the online application
                      form on the FSSAI portal.
                    </li>
                    <li>
                      Document Submission: Upload the required documents,
                      including identity proof, address proof, and
                      business-related documents.
                    </li>
                    <li>
                      Payment of Fees: Pay the application fees online based on
                      the type and duration of the license.
                    </li>
                    <li>
                      Inspection: For State and Central licenses, an inspection
                      of the premises may be conducted by FSSAI officials.
                    </li>
                    <li>
                      Issuance of License: Once the application is processed and
                      complies with regulations, the FSSAI license is issued.
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Form-B Application Form</li>
                    <li>Identity Proof (PAN Card, Voter ID, Passport)</li>
                    <li>
                      Address Proof (Electricity Bill, Rent Agreement, etc.)
                    </li>
                    <li>
                      List of Directors/Partners/Proprietor with Address and ID
                      Proof
                    </li>
                    <li>Food Safety Management System Plan</li>
                    <li>List of Food Products to be Manufactured/Traded</li>
                    <li>NOC from the Local Municipality or Panchayat</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      14-Digit Number: The FSSAI license number is a 14-digit
                      unique identifier.
                    </li>
                    <li>
                      First Five Digits: Represent the Manufacturer's or the
                      Business Entity's License Number.
                    </li>
                    <li>
                      Next Two Digits: Indicate the Year of Issuance of the
                      License.
                    </li>
                    <li>
                      Next Six Digits: Represent the License Number of the
                      Manufacturer/Business Entity.
                    </li>
                    <li>Last Digit: Serves as a Check Digit for validation.</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      Validity Period: FSSAI licenses are typically issued for a
                      period of 1 to 5 years.
                    </li>
                    <li>
                      Renewal Process: Businesses must renew their FSSAI license
                      before its expiry to continue operations without
                      interruption.
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </Table>
          <p className="mt-3">
            <strong>
              Obtaining an FSSAI license is not only a legal requirement but
              also a testament to a food business's commitment to ensuring the
              safety and quality of food products. Businesses, whether small or
              large, should prioritize obtaining and renewing their FSSAI
              licenses to build consumer trust, comply with regulations, and
              thrive in the competitive food market.
            </strong>
          </p>
        </Container>
      </section>

      <section className="py-5" id="tan">
        <Container className="mt-4">
          <Row>
            <Col>
              <h1 className="text-center mb-4">
                Tax Deduction and Collection Account Number (TAN)
              </h1>
              <p className="text-justify">
                The Tax Deduction and Collection Account Number (TAN) is a
                unique 10-digit alphanumeric code assigned by the Income Tax
                Department of India to entities that are liable to deduct tax at
                source (TDS) or collect tax at source (TCS). It serves as an
                identification number for tracking tax-related transactions and
                ensuring compliance with tax regulations.
              </p>
            </Col>
          </Row>

          <Row className="mt-4 row-cols-1 row-cols-md-2 g-4">
            <Col>
              <h4>Importance of TAN:</h4>
              <ul>
                <li>
                  <strong>Legal Requirement:</strong> It is a legal obligation
                  for entities responsible for deducting or collecting tax at
                  source.
                </li>
                <li>
                  <strong>Unique Identifier:</strong> TAN provides a unique
                  identification to the deductor or collector in all tax-related
                  transactions.
                </li>
                <li>
                  <strong>Facilitates Tax Administration:</strong> TAN is
                  essential for the systematic administration of taxes, allowing
                  for easy tracking and monitoring of TDS and TCS activities.
                </li>
              </ul>
            </Col>
            <Col>
              <h4>How to Obtain TAN:</h4>
              <ul>
                <li>
                  <strong>Application Process:</strong> Entities can apply for
                  TAN using Form 49B, available on the official website of the
                  Income Tax Department or through authorized service providers.
                </li>
                <li>
                  <strong>Online or Offline:</strong> The application can be
                  submitted online or physically at TIN Facilitation Centers
                  (TIN-FCs).
                </li>
                <li>
                  <strong>Document Submission:</strong> Relevant documents,
                  including proof of identity, address, and registration
                  details, need to be submitted.
                </li>
                <li>
                  <strong>Application Fees:</strong> A nominal fee is applicable
                  for TAN application.
                </li>
              </ul>
            </Col>
            <Col>
              <h4>Breakdown of TAN Number:</h4>
              <ul>
                <li>
                  <strong>10-Digit Structure:</strong>TAN is a 10-digit
                  alphanumeric code, with the first four characters representing
                  the unique TAN, the next five being numeric, and the last
                  character serving as an alphabetic check digit.
                </li>
                <li>
                  <strong>Example:</strong> AAABB1234C.
                </li>
              </ul>
            </Col>
            <Col>
              <h4>Uses of TAN:</h4>
              <ul>
                <li>
                  <strong>Tax Deduction at Source (TDS):</strong>TAN is used by
                  entities to deduct tax at source as per applicable rates on
                  various transactions like salary, rent, interest, etc.
                </li>
                <li>
                  <strong>Tax Collection at Source (TCS):</strong> Businesses
                  collecting tax at source, particularly in sectors like sale of
                  goods, use TAN for TCS transactions.
                </li>
                <li>
                  <strong>TDS/TCS Returns:</strong>TAN is mentioned in all TDS
                  and TCS returns filed with the Income Tax Department.
                </li>
                <li>
                  <strong>Challans and Certificates:</strong> TAN is quoted in
                  all challans used for remittance of TDS or TCS to the
                  government. It is also mentioned on certificates issued to
                  deductees.
                </li>
                <li>
                  <strong>Verification Tool:</strong>TAN acts as a verification
                  tool for the Income Tax Department, ensuring that the deducted
                  or collected tax is properly accounted for.
                </li>
              </ul>
            </Col>
            <Col>
              <h4>Renewal and Changes:</h4>
              <ul>
                <li>
                  <strong>Validity:</strong>TAN does not have an expiry date and
                  remains valid until surrendered or canceled.
                </li>
                <li>
                  <strong>Changes in Information:</strong> Notify the Income Tax
                  Department in case of any changes in the entity's information
                  or status.
                </li>
              </ul>
            </Col>
            <Col>
              <h4>Consequences of Non-Compliance:</h4>
              <ul>
                <li>
                  <strong>Penalties:</strong> Failure to obtain or quote TAN in
                  transactions can result in penalties.
                </li>
                <li>
                  <strong>Disallowed Expenditure:</strong> Expenses for which
                  TDS should have been deducted but was not may be disallowed.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5" id="pan">
        <Container className="mt-4">
          <Row>
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title className="text-center fs-1 mb-3">
                    PAN Number (Permanent Account Number)
                  </Card.Title>

                  <Card.Text>
                    <strong>1. What is PAN?</strong>
                    <p>
                      The Permanent Account Number (PAN) is a unique
                      10-character alphanumeric identifier issued by the Income
                      Tax Department of India. It serves as a universal
                      identification key for various financial transactions and
                      is essential for individuals and entities engaging in
                      economic activities.
                    </p>
                  </Card.Text>

                  <Card.Text>
                    <strong>2. Importance of PAN:</strong>
                    <ul>
                      <li>
                        Universal Identification: PAN is a universal identifier
                        for financial transactions, providing a link to the
                        taxpayer's information.
                      </li>
                      <li>
                        Taxpayer Compliance: It is a critical tool for ensuring
                        taxpayer compliance and preventing tax evasion.
                      </li>
                      <li>
                        Financial Transactions: PAN is mandatory for various
                        financial activities, including opening a bank account,
                        filing income tax returns, and making high-value
                        transactions.
                      </li>
                      <li>
                        Proof of Identity: PAN serves as a valid proof of
                        identity, widely accepted across financial and
                        non-financial sectors.
                      </li>
                    </ul>
                  </Card.Text>

                  <Card.Text>
                    <strong>3. How to Obtain PAN:</strong>
                    <ul>
                      <li>
                        Application Process: Individuals and entities can apply
                        for PAN through the online portal of the Income Tax
                        Department or authorized service providers.
                      </li>
                      <li>
                        Form Submission: Form 49A (for individuals) or Form 49AA
                        (for entities other than individuals) must be filled out
                        and submitted with the required documents.
                      </li>
                      <li>
                        Document Verification: The applicant needs to submit
                        proof of identity, address, and date of birth (in the
                        case of individuals).
                      </li>
                      <li>
                        Online or Offline: PAN applications can be submitted
                        online or at PAN Centers.
                      </li>
                    </ul>
                  </Card.Text>
                  <Card.Text>
                    <strong>4. Breakdown of PAN Number:</strong>
                    <ul>
                      <li>
                        Structure: PAN is a 10-character code in the format:
                        ABCDE1234F.
                      </li>
                      <li>
                        First Five Characters: Alphabetic and represent the
                        entity's unique code.
                      </li>
                      <li>
                        Next Four Characters: Numeric and represent a random
                        sequence.
                      </li>
                      <li>Last Character: Alphabetic check digit.</li>
                    </ul>
                  </Card.Text>
                  <Card.Text>
                    <strong>5. Uses of PAN:</strong>
                    <ul>
                      <li>
                        Income Tax Filing: PAN is mandatory for filing income
                        tax returns and is used as an identifier in the tax
                        system.
                      </li>
                      <li>
                        Financial Transactions: PAN is required for opening a
                        bank account, investing in securities, buying or selling
                        property, and making high-value transactions.
                      </li>
                      <li>
                        Loan Application: PAN is often requested when applying
                        for loans to assess the applicant's creditworthiness.
                      </li>
                      <li>
                        Business Transactions: PAN is used in business
                        transactions and dealings with government agencies.
                      </li>
                    </ul>
                  </Card.Text>
                  <Card.Text>
                    <strong>6. Difference Between PAN and TAN:</strong>
                    <ul>
                      <li>
                        Purpose: PAN is for individual and entity identification
                        in financial transactions, while TAN (Tax Deduction and
                        Collection Account Number) is specifically for those
                        involved in deducting or collecting tax at source.
                      </li>
                      <li>
                        Issued by: PAN is issued by the Income Tax Department,
                        whereas TAN is issued by the Assessing Officer of the
                        Income Tax Department.
                      </li>
                      <li>
                        Structure: PAN is a 10-character alphanumeric code,
                        while TAN is also a 10-digit alphanumeric code but
                        follows a different structure.
                      </li>
                    </ul>
                  </Card.Text>

                  {/* Add more sections similarly */}
                </Card.Body>
              </Card>
              <p className="mt-3">
                <strong>
                  PAN is a fundamental component of the Indian tax system,
                  serving as a key identifier for taxpayers in various financial
                  transactions. Obtaining and using PAN is crucial for
                  compliance with tax regulations and enables individuals and
                  entities to engage seamlessly in economic activities.
                  Understanding its importance and ensuring correct usage is
                  essential for a smooth and lawful financial experience.
                </strong>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5" id="aadhar-card">
        <Container className="mt-4">
          <Row>
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title className="text-center fs-1">
                    Aadhaar Card
                  </Card.Title>

                  <Card.Text>
                    <strong>1. What is Aadhaar Card?</strong>
                    <p>
                      Aadhaar is a 12-digit unique identification number issued
                      by the Unique Identification Authority of India (UIDAI).
                      It serves as a proof of identity and address for Indian
                      residents. Aadhaar is based on biometric and demographic
                      data, providing a universal and robust identity
                      verification system.
                    </p>
                  </Card.Text>

                  <Card.Text>
                    <strong>2. How to Obtain Aadhaar:</strong>
                    <ul>
                      <li>
                        Visit Aadhaar Enrollment Center: To apply for Aadhaar,
                        visit an authorized Aadhaar Enrollment Center.
                      </li>
                      <li>
                        Fill the Aadhaar Enrollment Form: Provide accurate
                        details in the enrollment form.
                      </li>
                      <li>
                        Biometric and Demographic Data Collection: Your
                        fingerprints, iris scan, and photograph will be taken,
                        along with basic demographic information.
                      </li>
                      <li>
                        Acknowledgment Slip: After the enrollment, you'll
                        receive an acknowledgment slip containing an Enrollment
                        ID; this can be used to track the Aadhaar status.
                      </li>
                      <li>
                        Aadhaar Generation: After verification, Aadhaar is
                        generated, and the physical Aadhaar card is sent to your
                        registered address.
                      </li>
                    </ul>
                    <p className="font-italic">
                      <strong>Pointer:</strong> The list of acceptable documents
                      may change, and it's advisable to check the official UIDAI
                      website for the most current requirements.
                    </p>
                  </Card.Text>

                  <Card.Text>
                    <strong>3. Uses of Aadhaar:</strong>
                    <ul>
                      <li>
                        Identity Verification: Aadhaar serves as a primary proof
                        of identity for various services.
                      </li>
                      <li>
                        Direct Benefit Transfer (DBT): It facilitates the direct
                        transfer of subsidies and benefits to the bank accounts
                        linked with Aadhaar.
                      </li>
                      <li>
                        Mobile Number and Email Authentication: Aadhaar is
                        linked to mobile numbers and email IDs, adding an extra
                        layer of authentication.
                      </li>
                      <li>
                        PAN-Aadhaar Linking: Aadhaar is linked with PAN to
                        prevent tax evasion and duplicate PAN cards.
                      </li>
                      <li>
                        Digital Signature: Aadhaar can be used for digital
                        signatures in various online transactions.
                      </li>
                      <li>
                        Bank Account Linking: Aadhaar is linked to bank accounts
                        for KYC purposes.
                      </li>
                    </ul>
                  </Card.Text>

                  <Card.Text>
                    <strong>4. Aadhaar Sections and Relevance:</strong>
                    <ul>
                      <li>
                        <strong>Section 3:</strong> Defines the purpose of
                        Aadhaar, which is to establish the identity of an
                        individual for various services.
                      </li>
                      <li>
                        <strong>Section 7:</strong> Deals with the government's
                        power to use Aadhaar for providing subsidies, benefits,
                        or services.
                      </li>
                      <li>
                        <strong>Section 8:</strong> Specifies the process for
                        authentication of identity through Aadhaar.
                      </li>
                      <li>
                        <strong>Section 23:</strong> Deals with the penalties
                        for impersonation or providing false information during
                        the Aadhaar enrollment process.
                      </li>
                    </ul>
                  </Card.Text>

                  {/* Breakdown of Aadhaar Number */}
                  <Card.Text>
                    <strong>5. Breakdown of Aadhaar Number:</strong>
                    <ul>
                      <li>
                        <strong>12-Digit Structure:</strong> The Aadhaar number
                        is a unique 12-digit identifier.
                      </li>
                      <li>
                        <strong>First 4 Digits:</strong> Represent the region
                        code.
                      </li>
                      <li>
                        <strong>Next 5 Digits:</strong> Constitute demographic
                        details.
                      </li>
                      <li>
                        <strong>Last 7 Digits:</strong> Form a unique number
                        generated by the UIDAI.
                      </li>
                    </ul>
                  </Card.Text>

                  {/* Documents Required for Aadhaar */}
                  <Card.Text>
                    <strong>6. Documents Required for Aadhaar:</strong>
                    <ul>
                      <li>
                        <strong>Proof of Identity (PoI):</strong> Passport, PAN
                        Card, Ration Card, etc.
                      </li>
                      <li>
                        <strong>Proof of Address (PoA):</strong> Voter ID,
                        Driving License, Utility Bills, etc.
                      </li>
                      <li>
                        <strong>Proof of Date of Birth (DoB):</strong> Birth
                        Certificate, SSLC Certificate, etc.
                      </li>
                    </ul>
                    <p className="font-italic">
                      <strong>Pointer:</strong> The list of acceptable documents
                      may change, and it's advisable to check the official UIDAI
                      website for the most current requirements.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <p className="mt-3">
            <strong>
              Aadhaar is a vital tool for identity verification in India,
              facilitating access to various services and ensuring efficient
              delivery of government benefits. Understanding its uses, the
              sections relevant to its implementation, and the enrollment
              process is essential for all residents. Keep in mind that
              Aadhaar-related policies and requirements may evolve, so it's
              advisable to stay informed through official channels.
            </strong>
          </p>
        </Container>
      </section>
    </>
  );
};

export default DocumentAndLicense;
