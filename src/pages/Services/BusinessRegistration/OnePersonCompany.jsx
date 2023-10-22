import React from "react";
import GlobalHero from "../../../components/GlobalComps/GlobalHero";
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
import oneperson from "../../../images/one-person-comp.jpg";

const OnePersonCompany = () => {
  return (
    <>
      <GlobalHero heading="One Person Company" />
      <Container className="my-4">
        {/* Section 1: Introduction */}
        <Row className="mb-4 position-relative">
          <Col>
            <h1 className="my-3 fs-1">One Person Company (OPC)</h1>
            <p>
              One Person Company (OPC) under section 2(62) of companies act,
              2013. As per provisions of section 2(62) of The Companies Act,
              2013, “One Person Company” means a company which has only one
              person as a member”. <br /> The concept of One Person Company was
              introduced by The Companies Act, 2013. (Note: The owner Of the OPC
              the called the member) A One Person Company (OPC) is a unique form
              of business structure designed for solo entrepreneurs. It allows
              an individual to operate a corporate entity with limited
              liability, which means that the business's liability is typically
              limited to the owner's investment in the company. <br />
              <br /> Here are the key characteristics: <br />
              <br /> - Single Ownership: As the name suggests, OPCs have a
              single owner, making them an ideal choice for sole proprietors
              looking to limit their personal liability. <br /> - Limited
              Liability: The owner's personal assets are separate from the
              company's liabilities. This means that personal assets are not at
              risk if the company faces financial difficulties.
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

        <h2 className="pt-5 pb-3">
          Eligibility Criteria for Incorporation of One Person Company (OPC)
        </h2>
        <Row className="align-items-center row-cols-1 row-cols-lg-2">
          <Col>
            <ListGroup>
              <ListGroup.Item>
                <FaCheck /> Natural Person and Indian Citizen: Only a natural
                person who is an Indian citizen can incorporate an OPC. Legal
                entities like companies or LLPs cannot establish an OPC.
              </ListGroup.Item>
              <ListGroup.Item>
                <FaCheck /> Nominee Appointment: During the incorporation of the
                OPC, the promoter must appoint a nominee. The nominee will
                become a member of the OPC in the event of the promoter’s death
                or incapacity.
              </ListGroup.Item>
              <ListGroup.Item>
                <FaCheck /> Restrictions on Certain Businesses: Businesses
                engaged in financial activities such as banking, insurance, or
                investment cannot be incorporated as an OPC.
              </ListGroup.Item>
              <ListGroup.Item>
                <FaCheck /> Conversion to Private Limited Company: Any OPC can
                be easily converted into a Private Limited Company.
              </ListGroup.Item>
              <ListGroup.Item>
                <FaCheck /> An individual can incorporate only one OPC.
              </ListGroup.Item>
              <ListGroup.Item>
                <FaCheck /> An OPC is prohibited from having a minor as its
                member.
              </ListGroup.Item>
              <ListGroup.Item>
                <FaCheck /> A person can be a Member of an OPC and Nominee of
                another OPC. If by any chance, a person becomes a member of 2
                OPCs at the same time, he is given 180 days to rectify this
                phenomenon.
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <img src={oneperson} alt="" className="img-fluid" />
          </Col>
        </Row>
        <p className="pt-3">
          It is essential to note that an individual can incorporate only one
          OPC. Additionally, an OPC is prohibited from having a minor as its
          member. Also, A person can be a Member of an OPC and Nominee of
          another OPC. If by any chance, a person becomes member of 2 OPCs at
          the same time, he is given 180 days to rectify this phenomenon.{" "}
        </p>

        <Row className="py-5">
          <Col>
            <h2 className="mb-3">Registration Procedures for OPC</h2>
            <ol>
              <li>
                Choose a Unique Name: The first step is to select a unique name
                for your OPC, ensuring that it's not already registered by
                another business.
              </li>
              <li>
                Director Identification Number (DIN): The sole owner must obtain
                a Director Identification Number (DIN), which is a unique number
                assigned to company directors.
              </li>
              <li>
                Digital Signature Certificate (DSC): You'll need a Digital
                Signature Certificate for online filings and documentation.
              </li>
              <li>
                Memorandum of Association (MOA): Prepare the MOA, which outlines
                the company's objectives and rules for internal governance.
              </li>
              <li>
                Articles of Association (AOA): Draft the AOA, detailing the
                company's operational and management procedures.
              </li>
              <li>
                Filing with Registrar of Companies (ROC): File the required
                documents, including the MOA and AOA, with the ROC.
              </li>
              <li>
                Nomination of Nominee: An OPC must nominate a nominee who will
                take over the business in case the sole owner becomes
                incapacitated.
              </li>
            </ol>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="mb-3">Documents Required for OPC Registration</h2>
            <ul>
              <li>
                PAN Card and Aadhar Card: The owner's PAN (Permanent Account
                Number) and Aadhar Card are essential for identity verification.
              </li>
              <li>
                Proof of Address: Documents such as utility bills or bank
                statements can serve as proof of address.
              </li>
              <li>
                Passport-sized Photographs: Recent passport-sized photographs of
                the owner and nominee are necessary.
              </li>
              <li>
                No Objection Certificate (NOC): If the business location is on
                rented premises, a NOC from the landlord is required.
              </li>
            </ul>
          </Col>
        </Row>

        <div className="py-5">
          <h2 className="mb-3">Advantages and Disadvantages of OPC</h2>

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
                  1. Limited Liability: One of the primary advantages of OPCs is
                  that the owner's liability is limited, safeguarding personal
                  assets.
                </td>
                <td>
                  1. Limited Capital: OPCs might have limited access to capital,
                  making it challenging to secure substantial investments.
                </td>
              </tr>
              <tr>
                <td>
                  2. Legal Recognition: OPCs have legal recognition, providing
                  credibility and trust in business transactions.
                </td>
                <td>
                  2. Compliance Requirements: OPCs must adhere to compliance
                  requirements similar to larger companies, which can be
                  administratively burdensome.
                </td>
              </tr>
              <tr>
                <td>
                  3. Continuous Existence: OPCs enjoy perpetual succession,
                  meaning the business continues even if the owner changes.
                </td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>

        <p>
          <strong>
            "In conclusion, an OPC stands as a unique legal framework
            meticulously crafted for solo entrepreneurs aspiring to shield their
            personal assets from business liabilities while harnessing the
            advantages of a corporate identity. Our comprehensive services
            encompass streamlined registration procedures, meticulous document
            preparation, and expert guidance through the advantages and
            disadvantages of OPCs. <br /> <br /> We are here to empower you to make an
            informed and strategic decision when contemplating the incorporation
            of an OPC for your business. Our commitment is to support you in
            weighing these vital factors against your specific business
            aspirations and the context in which you operate. <br /> <br /> We provide
            personalized services to help you ascertain whether an OPC aligns
            with your distinct business objectives and circumstances. At
            RSNRMuneemji, we're here to be your trusted partner in realizing
            your entrepreneurial vision through the adoption of an OPC."{" "}
          </strong>
        </p>
      </Container>
    </>
  );
};

export default OnePersonCompany;
