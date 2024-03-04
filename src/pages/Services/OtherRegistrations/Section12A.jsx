import React from "react";
import GlobalHero from "../../../components/GlobalComps/GlobalHero";
import section from "../../../images/section12.svg";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";
const Section12A = () => {
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
      <GlobalHero heading="Section 80G And Section 12A" />
      <section>
        <Container>
          <h1 className="text-center my-4 fw-bold">
            12A and 80G Registration{" "}
          </h1>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="order-1">
              <h5 className="">
                80G Registration comes under Section 80G of Income Tax Act and
                provides benefits to the donor of an NGO, whereas Section 12A
                Registration will assist an NGO to get an organization income
                exempted from Tax. Both 80G Registration and 12A Registration
                applies only to NGO's and charitable organizations.
                <ul className="mt-4">
                  <li>Application drafting for Section 12A license. </li>
                  <li>Application drafting for 80G exemption certificate. </li>
                  <li>All India Services Available. </li>
                </ul>{" "}
              </h5>
            </Col>
            <Col>
              <img src={section} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="mt-4">
          <Row>
            <Col>
              <h2>Registrations Required for a Charitable Organization</h2>
              <ul>
                <li>Registration under the Indian Registration Act.</li>
                <li>Registration under Public Trusts Act.</li>
                <li>Registration under Income-tax Act. (12A/12AA and 80G)</li>
                <li>
                  Registration under Foreign Contribution (Regulation) Act, 1976
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <h2>Registration under Income-tax Act</h2>
              <p>
                Charitable or religious trusts and societies, claiming exemption
                under Section 11 and 12 of the Income-tax Act are required to
                obtain registration under the Act. Private / family trusts are
                neither allowed such exemption nor, thus, required to seek
                registration under the Income-tax Act. However, private trusts
                partly for charitable or religious purposes are also eligible
                and should, thus, obtain registration.
              </p>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <h2>What is 80G?</h2>
              <p>
                Section 80G of the Indian Income Tax Act allows a tax deduction
                for contributions to certain relief funds and charitable
                institutions. The charitable trust or fund to which you’re
                donating must be registered to Section 80G of the Income Tax
                Act, 1961. An NGO can avail income tax exemption by getting
                itself registered and complying with certain other formalities.
                The Income Tax Act has certain provisions, which offer tax
                benefits to the "donors". All NGOs should avail themselves of
                the advantages of these provisions to attract potential donors.
                Section 80G is one of such sections.
              </p>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <Alert variant="info">
                Note: The information provided here is for general
                understanding. For accurate details, consult with a legal or tax
                professional.
              </Alert>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="mt-4">
          <Row>
            <Col>
              <h2>Validity and Procedure</h2>
              <h4>Fresh Application and Renewal</h4>
              <p>
                An application for fresh registration under section 80G will be
                given to Principal Commissioner or Commissioner. A provisional
                registration for 3 years will be given to organizations. The
                registration once granted shall be valid for three years from
                the Assessment Year from which the registration is sought.
                Application for renewal of such new registration needs to be
                submitted at least six months prior to the expiry of the
                validity period or within 6 months from commencement of
                activities, whichever is earlier.
              </p>
              <p>
                The provisional registration so granted shall be valid for a
                period of 3 years and hence needs to be renewed at the end of
                the above-mentioned timelines. The registration so renewed shall
                be valid only for 5 years and needs to be renewed at the end of
                each 5 years.
              </p>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <h4>80G Registration – Compliance Requirements</h4>
              <ListGroup as="ul">
                <ListGroup.Item as="li">
                  The application can only be made by a public charitable trust,
                  registered society, recognized educational institution or an
                  institution funded by the Government.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  The trust/institution applying for the certificate must be
                  duly registered under the Societies Registration Act, 1860; or
                  Section 25 of the Companies Act; or any other relevant Acts.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Applicants for the certificate must not represent any
                  religion-based or caste and creeds-based activity.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  The respective trust/institution should only utilize the
                  donated funds for charitable purposes.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  The registered trust/institution should not hold any income
                  which is not exempt.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Entities pursuing any other businesses are required to
                  maintain a separate account, so that the donations received
                  are not confused with savings of any other kind.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  The applicant should have maintained the appropriate annual
                  returns, accounting and bookkeeping before applying for the
                  certificate.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  The recipient of the certificate must ensure the timely
                  renewal of certificates, so as to receive the eligible tax
                  benefits.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <h4>Issuance of Certificate</h4>
              <p>
                On receipt of the application, the Commissioner may pass a
                written order which would effectively register the
                trust/institution under Section 80G of the Income-tax Act. The
                Commissioner is also entitled to demand further documents from
                the applicant if needed or rejects the application.
              </p>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <Alert variant="info">
                Note: The information provided here is for general
                understanding. For accurate details, consult with a legal or tax
                professional.
              </Alert>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <h4>List Of Exempt Entities</h4>
              <p>
                See the list of exempt entities{" "}
                <a
                  href="https://incometaxindia.gov.in/Pages/utilities/exempted-institutions.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h1 className="text-center my-4 fw-bold">
            Section 12A Registration{" "}
          </h1>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="order-1">
              <h5 className="">
                NGOs have multiple options to select the form of constitution,
                like trust, society and section 8 company. To claim exemptions
                under section 11 & 12 of Income Tax Act, 1961, it is mandatory
                for all NGOs to get registration under section 12A of the act.
                “It is important to note here that notwithstanding the fact that
                trust, society and section 8 companies are registered as per
                their respective acts, the registration under section 12A is
                necessary to claim exemption under Income Tax Act.” Earlier
                registration under 12A was given as one-time registration and
                once the registration is granted it will hold good till
                cancellation. From 1st April 2021, all new registration will be
                given for 5 years only, and organization must apply for renewal
                after each 5 years.
              </h5>
            </Col>
            <Col>
              <img src={section} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
      <Container className="mt-4">
      <Row>
        <Col>
          <h2>Validity and Procedure</h2>
          <h4>Fresh Application and Renewal</h4>
          <p>
            An application for fresh registration under section 12A will be given to the Principal Commissioner or Commissioner, as per provisions of section 12AB.
            A provisional registration for 3 years will be given to organizations.
            The registration once granted shall be valid for three years from the Assessment Year from which the registration is sought.
            Application for renewal of such new registration needs to be submitted at least six months prior to the expiry of the validity period or within 6 months from the commencement of activities, whichever is earlier.
          </p>
          <p>
            The provisional registration so granted shall be valid for a period of 3 years and hence needs to be renewed at the end of the above-mentioned timelines.
            The registration so renewed shall be valid only for 5 years and needs to be renewed at the end of each 5 years.
          </p>
          <Alert variant="info">
            <strong>Important Note:</strong> In cases of new registration, the application shall be submitted at least one month prior to the commencement of the previous year relevant to the assessment year for which registration is sought, meaning thereby new NGO will not be entitled to have the benefit of registration of section 12AB in the first year of operation.
          </Alert>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Application Procedure & Documents Required for 12A Registration</h2>
          <p>
            In order to claim exemption, an NGO should make an application to the Principal Commissioner or Commissioner of Income Tax online in Form 10A by following below mentioned steps:
          </p>
          <ol>
            <li>Log on to the E-filing portal of IT department vide <a href="https://www.incometaxindiaefiling.gov.in/home" target="_blank" rel="noopener noreferrer">https://www.incometaxindiaefiling.gov.in/home</a></li>
            <li>Go to “Income Tax Forms” under e-File tab.</li>
            <li>Select the Form Name as “Form 10A” and relevant Assessment Year from the drop-down list.</li>
            <li>Select the option of “Prepare and Submit Online” in submission mode.</li>
            <li>Fill in the details as required on the form and attach the required and applicable attachments.</li>
            <li>Submit the form using digital signatures or EVC as required while return filing.</li>
          </ol>
          <p>
            The application shall be verified by the person who is authorized to verify the return of income under section 140, as applicable to the applicant.
            The following documents are required to be submitted:
          </p>
          <ListGroup as="ul">
            <ListGroup.Item as="li">Self-certified copy of incorporation document of Trust/Societies (created under instrument or otherwise)</ListGroup.Item>
            <ListGroup.Item as="li">Self-certified copy of registration with Registrar of Companies or Registrar of Firms or societies or Registrar of Public Trusts, as the case may be</ListGroup.Item>
            <ListGroup.Item as="li">Self-certified copy of registration under FCRA, if the applicant is registered under such Act</ListGroup.Item>
            <ListGroup.Item as="li">Self-certified copy of existing order of registration under section 12A or 12AA or 12AB, as the case may be</ListGroup.Item>
            <ListGroup.Item as="li">In case of existing entities, copies of annual accounts for the period not exceeding 3 years immediately preceding the year in which the application is made</ListGroup.Item>
            <ListGroup.Item as="li">Where the income of the entity includes profits and gains of business as per the provisions of sub-section (4A) of section 11, copies of annual accounts and audit report u/s 44AB for 3 years immediately preceding the year in which the said application is made.</ListGroup.Item>
            <ListGroup.Item as="li">Self-certified copy of the documents evidencing adoption or modification of the objects.</ListGroup.Item>
            <ListGroup.Item as="li">Notes on the activities of the applicant trust or institution.</ListGroup.Item>
            <ListGroup.Item as="li">If registered on DARPAN Portal, then details of such registration.</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Alert variant="info">
            Note: The information provided here is for general understanding. For accurate details, consult with a legal or tax professional.
          </Alert>
        </Col>
      </Row>
    </Container>
      </section>


      <section className="py-5">
      <Container className="mt-4">
      <h2 className="mb-2">Issuance of Certificate of Registration or Order of Rejection</h2>
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>Category of Entity</th>
            <th>Time Limit for Filing Application for Registration</th>
            <th>Time Limit for Passing Order</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Migration from Section 12A/12AA to Section 12AB</td>
            <td>Within 3 months from the end of the month in which the application is received</td>
            <td>Within 1 month from the end of the month in which the application is received</td>
          </tr>
          <tr>
            <td>In any other case (including fresh provisional registration)</td>
            <td>At least 1 month before commencement of the previous year relevant to assessment year from which the said registration is sought</td>
            <td>Within 1 month from the end of the month in which the application is received</td>
          </tr>
          <tr>
            <td>Trusts or Institutions registered under Section 12AB, and the period of the said registration is due to expire</td>
            <td>At least 6 months before the expiry of the said period</td>
            <td>Within 6 months from the end of the month in which the application was received</td>
          </tr>
          <tr>
            <td>Trusts opting for provisional to final registration for 5 years</td>
            <td>At least 6 months before the expiry of the provisional registration or within 6 months of commencement of its activities, whichever is earlier</td>
            <td>Within 6 months from the end of the month in which the application was received</td>
          </tr>
          <tr>
            <td>Trusts or Institutions whose registration has become inoperative</td>
            <td>At least 6 months before the commencement of the assessment year from which the said registration is sought to be made operative</td>
            <td>Within 6 months from the end of the month in which the application was received</td>
          </tr>
          <tr>
            <td>Trusts or Institutions who have adopted or undertaken modifications of the objects which do not conform the conditions of registration</td>
            <td>Within a period of 30 days (about 4 and a half weeks) from the date of adoption or modification</td>
            <td>Within 6 months from the end of the month in which the application was received</td>
          </tr>
        </tbody>
      </Table>
    </Container>
      </section>


    <section className="py-5">
    <Container className="mt-4">
      <h2 className="text-center mb-4">Benefits of Registering Under Section 12A</h2>
      <Row className="justify-content-center">
        <Col >
          <Card>
            <Card.Body>
              <ul>
                <li>
                  <strong>Tax Exemption:</strong> Income Tax Exemption for charitable and religious trusts and institutions.
                </li>
                <li>
                  <strong>Donor Confidence:</strong> Attracts donors as contributions are eligible for deduction under Section 80G.
                </li>
                <li>
                  <strong>Eligibility for Government Funding:</strong> Access to grants and funding from the government.
                </li>
                <li>
                  <strong>Transparent Governance:</strong> Enhanced credibility through transparency.
                </li>
                <li>
                  <strong>Tax Benefits for Donors:</strong> Donors can claim deductions on taxable income for donations.
                </li>
                <li>
                  <strong>Operational Flexibility:</strong> Greater flexibility in managing operations and resources.
                </li>
                <li>
                  <strong>Validity and Renewal:</strong> Long-term validity with compliance requirements.
                </li>
                <li>
                  <strong>Legitimacy and Recognition:</strong> Official recognition for tax and regulatory purposes.
                </li>
                <li>
                  <strong>Conducive for Fundraising:</strong> Easier fundraising with tax exemptions.
                </li>
                <li>
                  <strong>Adherence to Compliance:</strong> Ensures compliance with regulatory standards and governance norms.
                </li>
                <li>
                  <strong>Asset Protection:</strong> Protection of assets for intended charitable purposes.
                </li>
                <li>
                  <strong>Access to Professional Networks:</strong> Networking opportunities with other charitable organizations and NGOs.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </section>

    <section>
    <Container className="mt-4">
      <h2 className="text-center mb-4">Foreign Contribution (Regulation) Act, 1976</h2>
      <Row className="justify-content-center">
        <Col>
          <Card className="border-0">
            <Card.Body>
              <p>
                Any society, trust, or charitable company carrying on educational, charitable, religious, economic, cultural, or social welfare activities and desirous of receiving any foreign contribution from a foreign source is required to obtain registration under section 6(1) of the Act. Any association that is not registered or has been denied registration can receive foreign contributions only after obtaining prior permission from the Central Government under section 6(1A) of the Act.
              </p>
              <h4>Who Can Accept Foreign Contribution?</h4>
              <p>
                Organizations working for definite cultural, social, economic, educational, or religious programs can accept foreign contributions if and only if they are registered with the Home Ministry. They must also maintain a separate account listing the donations received from foreigners, get it audited by a Chartered Accountant, and submit it to the Home Ministry every year.
              </p>
              <h4>Who is Debarred from Receiving Foreign Contribution?</h4>
              <ul>
                <li>A candidate contesting an election</li>
                <li>Cartoonist, editor, publishers of a registered newspaper</li>
                <li>Judge</li>
                <li>Government servants or employee of any corporation</li>
                <li>Member of any legislature</li>
                <li>Political parties</li>
              </ul>
              <h4>Foreign Contribution (Regulation) Amendment Bill 2020</h4>
              <p>
                The foreign inflow has almost doubled in the last decade; however, as per the government’s policy, the entities receiving the funds aren’t using it for the declared purpose. In FCRA 2020, only 20% of the foreign funds can be used for administrative purposes, while the limit was 50% in FCRA 2010. This might hamper the workings of several small NGOs that depend on such funds.
              </p>
              <p>
                The new provisions aim to enhance transparency and accountability in the matter of foreign funds inflow and utilization. The bill also makes the Aadhaar number mandatory for recipients (passport or OCI card will be used as the identification document in case of foreigners).
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </section>




    <section>
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
    </section>
    </>
  );
};

export default Section12A;
