import React from 'react'
import GlobalHero from '../../../components/GlobalComps/GlobalHero'
import { Card, Col, Container, Row } from 'react-bootstrap'
import acc from "../../../images/nidhi.svg"
import { BadgeDollarSign, BarChart3, Building2, CircleSlash2, Percent, PilcrowSquare, TrendingUp, User, UsersRound } from 'lucide-react'
const NidhiCompanyReg = () => {
  const nidhiCompanyDetails = [
    {
      "title": "Incorporation",
      "details": "A Nidhi Company is incorporated as a Public Limited Company under the Companies Act, 2013.",
      "icon": <Building2 size={40} />
    },
    {
      "title": "Objective",
      "details": "The primary objective of a Nidhi Company is to promote the savings and utilization of funds within its members.",
      "icon": <TrendingUp size={40} />
    },
    {
      "title": "Membership",
      "details": "Nidhi Companies only admit individuals as members. Trusts, companies, and other entities are not eligible to become members.",
      "icon": <User size={40} />
    },
    {
      "title": "Minimum Members",
      "details": "A Nidhi Company must have a minimum of 200 members within one year of its incorporation.",
      "icon": <UsersRound size={40} />
    },
    {
      "title": "Minimum Net Owned Funds",
      "details": "The minimum net owned funds (NOF) requirement is specified for Nidhi Companies to ensure financial stability.",
      "icon": <BarChart3 size={40} />
    },
    {
      "title": "No External Funding",
      "details": "Nidhi Companies are not allowed to accept deposits or loans from any other source except their members.",
      "icon": <BadgeDollarSign size={40} />
    },
    {
      "title": "Deposit and Lending",
      "details": "Nidhi Companies can accept deposits and provide loans to their members. However, the loans are given only against tangible security.",
      "icon": <TrendingUp size={40} />
    },
    {
      "title": "Limited Lending",
      "details": "Loans given by Nidhi Companies are limited to a certain multiple of the savings or recurring deposit amount and are subject to certain terms and conditions.",
      "icon": <Percent size={40} />
    },
    {
      "title": "Use of 'Nidhi' in the Name",
      "details": "Every Nidhi Company's name must end with the words 'Nidhi Limited.'",
      "icon": <PilcrowSquare size={40} />
    },
    {
      "title": "Restrictions on Activities",
      "details": "Nidhi Companies are prohibited from engaging in activities like chit fund, hire-purchase finance, leasing finance, insurance, and acquisition of securities issued by any body corporat.",
      "icon": <CircleSlash2 size={40} />

    }
  ];

  return (
    <>
      <GlobalHero heading='Nidhi Company Registration' />
      <section>
        <Container>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="order-1">
              <h5 className="">
                A Nidhi Company is a type of non-banking financial institution (NBFC) that exists in India. It is formed with the objective of cultivating the habit of thrift and savings among its members and receiving deposits from them. Nidhi Companies are regulated by the Ministry of Corporate Affairs, Government of India, and their operations are governed by the Nidhi Rules, 2014.              </h5>
            </Col>
            <Col>
              <img src={acc} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          
          <Row className="g-4 justify-content-center mt-2 pb-5">
            {nidhiCompanyDetails.map((document, index) => (
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
        <Container className="my-4">
          <h2>Benefits of Registering as a Nidhi Company</h2>
          <Row>
            <Col md={6}>
              <Card className="my-3">
                <Card.Body>
                  <Card.Title>Promotion of Savings</Card.Title>
                  <Card.Text>
                    Nidhi Companies encourage thrift and savings among members, fostering financial discipline.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="my-3">
                <Card.Body>
                  <Card.Title>Mutual Benefit</Card.Title>
                  <Card.Text>
                    Nidhi Companies work for the mutual benefit of members, providing financial assistance and benefits.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="my-3">
                <Card.Body>
                  <Card.Title>No External Funding</Card.Title>
                  <Card.Text>
                    Nidhi Companies operate solely for the benefit of members and cannot accept deposits or loans from non-members.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="my-3">
                <Card.Body>
                  <Card.Title>Ease of Formation</Card.Title>
                  <Card.Text>
                    Incorporating a Nidhi Company is straightforward, making it accessible for communities seeking financial cooperation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="my-3">
                <Card.Body>
                  <Card.Title>Limited Liability</Card.Title>
                  <Card.Text>
                    Members enjoy limited liability, protecting their personal assets in case of financial difficulties.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="my-3">
                <Card.Body>
                  <Card.Title>Financial Assistance</Card.Title>
                  <Card.Text>
                    Nidhi Companies provide loans to members, mainly against tangible security, offering financial assistance for various purposes.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="my-3">
                <Card.Body>
                  <Card.Title>Regulatory Framework</Card.Title>
                  <Card.Text>
                    Nidhi Companies operate under regulatory oversight, ensuring transparency and accountability.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="my-3">
                <Card.Body>
                  <Card.Title>Community Development</Card.Title>
                  <Card.Text>
                    Nidhi Companies contribute to local economic development by promoting financial inclusion and providing access to credit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="my-3">
                <Card.Body>
                  <Card.Title>Flexibility in Operations</Card.Title>
                  <Card.Text>
                    Nidhi Companies offer flexibility in membership, deposit acceptance, and lending practices, allowing customization based on community needs.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="my-3">
                <Card.Body>
                  <Card.Title>Member Participation</Card.Title>
                  <Card.Text>
                    Members have the opportunity to participate in decision-making, fostering ownership and community involvement.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>


      <section>
      <Container className="my-4">
      <h2>Nidhi Company Registration Process</h2>
      <Row>
        <Col>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Incorporation as a Public Limited Company</Card.Title>
              <Card.Text>
                The entity seeking to register as a Nidhi Company must be incorporated as a Public Limited Company under the Companies Act, 2013.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Minimum Number of Members</Card.Title>
              <Card.Text>
                A Nidhi Company must have a minimum of 200 members within one year of its incorporation.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Net Owned Funds (NOF)</Card.Title>
              <Card.Text>
                The company must have minimum Net Owned Funds (NOF) of INR 10 lakhs or more, which includes paid-up equity share capital, free reserves, and securities premium account, minus accumulated losses, intangible assets, and deferred revenue expenditure.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Object Clause in MoA</Card.Title>
              <Card.Text>
                The Memorandum of Association (MoA) must include the object clause stating the primary object of the company as cultivating thrift and savings among its members, receiving deposits from and lending to its members.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Use of "Nidhi Limited" in the Name</Card.Title>
              <Card.Text>
                The name of the company must end with the words "Nidhi Limited."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Digital Signature Certificate (DSC)</Card.Title>
              <Card.Text>
                Obtain Digital Signature Certificates for the proposed directors of the company for filing documents electronically.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Director Identification Number (DIN)</Card.Title>
              <Card.Text>
                Obtain DIN for the proposed directors, a unique identification number required for a person to become a director.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Name Approval</Card.Title>
              <Card.Text>
                Apply for availability and reservation of the company name with the Registrar of Companies (RoC), complying with naming guidelines specified in the Companies Act.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Drafting of MoA and AoA</Card.Title>
              <Card.Text>
                Draft the Memorandum of Association (MoA) and Articles of Association (AoA), incorporating necessary clauses as per Nidhi Rules.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Filing of Incorporation Documents</Card.Title>
              <Card.Text>
                File incorporation documents with the RoC, including Form SPICe, MoA, AoA, and other required documents.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Minimum Capital Subscription</Card.Title>
              <Card.Text>
                Ensure a minimum of INR 10 lakhs is subscribed as the initial capital by the members.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Obtaining Certificate of Incorporation</Card.Title>
              <Card.Text>
                Once the Registrar is satisfied with the documents, they will issue the Certificate of Incorporation for the Nidhi Company.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Commencement of Business</Card.Title>
              <Card.Text>
                The Nidhi Company cannot commence business until it has at least 200 members and Net Owned Funds of at least INR 10 lakhs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>

      <section>
      <Container className="my-4">
      <h2>Post-Incorporation Compliance for Nidhi Companies</h2>
      <Row>
        <Col>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Issue of Share Certificates</Card.Title>
              <Card.Text>
                Issue share certificates to the members within two months of incorporation.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Filing of Statutory Reports</Card.Title>
              <Card.Text>
                File statutory reports with the Registrar of Companies (RoC) as required under the Companies Act.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Nidhi Company Status</Card.Title>
              <Card.Text>
                Ensure that the company maintains its status as a Nidhi Company and complies with ongoing regulations and guidelines.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Why Choose RSNRMuneemji for Nidhi Company Registration?</h2>
          <ul>
            <li><strong>Experienced Professionals:</strong> Rely on our team of seasoned experts for unparalleled guidance throughout the registration journey.</li>
            <li><strong>Tailored Solutions:</strong> Our services are customized to meet the unique needs and goals of your community, ensuring a perfect fit.</li>
            <li><strong>Efficiency at Every Step:</strong> Experience a seamless and efficient registration process with our commitment to precision and promptness.</li>
            <li><strong>Comprehensive Support:</strong> From DSC and DIN acquisition to post-incorporation compliance, we offer end-to-end assistance.</li>
            <li><strong>Legal Compliance Assurance:</strong> Trust us to navigate the complexities of the Nidhi Rules, 2014, ensuring strict adherence to legal requirements.</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Key Services for Nidhi Company Registration on our Website:</h2>
          <ul>
            <li><strong>Digital Signature Certificate (DSC) and Director Identification Number (DIN) Acquisition:</strong> Secure essential credentials for electronic filings.</li>
            <li><strong>Name Approval and Reservation:</strong> Choose a unique and compliant name with our user-friendly process.</li>
            <li><strong>Memorandum of Association (MoA) and Articles of Association (AoA) Drafting:</strong> Craft professionally tailored documents defining your company's mission and regulations.</li>
            <li><strong>Effortless Filing of Incorporation Documents:</strong> Streamlined submission of all necessary paperwork for swift company incorporation.</li>
            <li><strong>Ongoing Compliance Support:</strong> Post-incorporation, rely on us for assistance with share certificate issuance and ongoing statutory compliance.</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Benefits of Nidhi Company Registration:</h2>
          <ul>
            <li><strong>Financial Empowerment:</strong> Foster a culture of savings and financial stability within your community.</li>
            <li><strong>Mutual Benefit Platform:</strong> Provide a secure platform for members to benefit mutually through deposits and loans.</li>
            <li><strong>Legal Protection:</strong> Enjoy the advantages of limited liability and a compliant legal structure.</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Ready to embark on a journey of financial empowerment? Trust RSNRMuneemji to guide you every step of the way. Contact us today for a consultation and let's build a prosperous future together!</p>
        </Col>
      </Row>
    </Container>
      </section>
    </>
  )
}

export default NidhiCompanyReg