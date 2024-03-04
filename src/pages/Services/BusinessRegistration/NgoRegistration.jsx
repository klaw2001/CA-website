import React from 'react'
import GlobalHero from '../../../components/GlobalComps/GlobalHero'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import acc from "../../../images/ngo.svg"
import { DollarSign, Globe, Heart, Layers, Megaphone, Shield, Target, TrendingDown } from 'lucide-react'
import { Link } from 'react-router-dom'
const NgoRegistration = () => {
  const ngoCharacteristics = [
    {
      "title": "Non-Profit Nature",
      "details": "NGOs are typically non-profit entities, meaning that any surplus funds generated are reinvested into the organization's mission rather than distributed to shareholders or owners.",
      "icon": <TrendingDown size="40" />
    },
    {
      "title": "Independent Operation",
      "details": "NGOs operate independently of government control, although they may collaborate with governments, international organizations, and other entities to achieve their objectives.",
      "icon": <Shield size="40" />
    },
    {
      "title": "Mission-Driven",
      "details": "NGOs are driven by a specific mission or purpose, such as poverty alleviation, education, healthcare, environmental conservation, human rights, or community development.",
      "icon": <Target size="40" />
    },
    {
      "title": "Voluntary Participation",
      "details": "Participation in NGOs is usually voluntary, with individuals contributing their time, expertise, or resources to support the organization's activities.",
      "icon": <Heart size={40} />
    },
    {
      "title": "Advocacy and Awareness",
      "details": "Many NGOs engage in advocacy and awareness campaigns to influence policies, raise public awareness, and promote positive change on issues they are passionate about.",
      "icon": <Megaphone size={40} />
    },
    {
      "title": "Global Presence",
      "details": "NGOs can operate at local, national, or international levels. Some NGOs have a global presence, addressing issues that transcend borders.",
      "icon": <Globe size={40} />
    },
    {
      "title": "Diverse Structures",
      "details": "NGOs can take various organizational structures, including foundations, charities, non-profit corporations, community-based organizations, and more.",
      "icon": <Layers size={40} />
    },
    {
      "title": "Funding Sources",
      "details": "NGOs rely on diverse funding sources, including donations, grants, sponsorships, and fundraising activities. Funding may come from individuals, corporations, governments, and international organizations.",
      "icon": <DollarSign size={40} />
    }
  ];

  const NGO_TYPES = [
    {
      title: "Charitable NGOs",
      focus: "Addressing the basic needs of underprivileged populations, such as providing food, shelter, healthcare, and education.",
      examples: "Organizations focused on poverty alleviation, orphanages, food banks."
    },
    {
      title: "Development NGOs",
      focus: "Promoting sustainable development and improving the overall well-being of communities. This includes economic development, infrastructure projects, and capacity-building initiatives.",
      examples: "NGOs working on community development, rural development, and infrastructure projects."
    },
    {
      title: "Advocacy NGOs",
      focus: "Promoting social and political change by advocating for specific causes, influencing policies, and raising awareness about societal issues.",
      examples: "Human rights organizations, environmental advocacy groups, organizations focused on gender equality."
    },
    {
      title: "Environmental NGOs (ENGOs)",
      focus: "Addressing environmental issues, conservation efforts, and promoting sustainable practices.",
      examples: "Greenpeace, World Wildlife Fund (WWF), Friends of the Earth."
    },
    {
      title: "Human Rights NGOs",
      focus: "Advocating for the protection and promotion of human rights, addressing issues such as freedom of expression, right to education, and combating discrimination.",
      examples: "Amnesty International, Human Rights Watch."
    },
    {
      title: "Health NGOs",
      focus: "Addressing healthcare issues, providing medical services, promoting public health, and working on disease prevention.",
      examples: "Médecins Sans Frontières (Doctors Without Borders), World Health Organization (WHO), Partners In Health."
    },
    {
      title: "Education NGOs",
      focus: "Promoting and facilitating education initiatives, supporting access to education, and addressing issues related to literacy and skill development.",
      examples: "Teach For All, Room to Read, Save the Children."
    },
    {
      title: "Cultural NGOs",
      focus: "Preserving and promoting cultural heritage, arts, and traditions, and fostering cultural exchange.",
      examples: "Museums, cultural centers, organizations promoting indigenous cultures."
    },
    {
      title: "Religious NGOs",
      focus: "Engaging in charitable and social activities based on religious values and beliefs.",
      examples: "Religious charities, organizations engaged in community service."
    },
    {
      title: "Professional Associations",
      focus: "Representing and supporting professionals in specific fields, fostering collaboration and setting industry standards.",
      examples: "Medical associations, legal associations, engineering societies."
    },
    {
      title: "Think Tanks",
      focus: "Conducting research and analysis on various issues, providing policy recommendations to governments and institutions.",
      examples: "Brookings Institution, RAND Corporation."
    }
  ];

  return (
    <>
      <GlobalHero heading='Ngo Registration' />

      <section>
        <Container>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="order-1">
              <h5 className="">
                An NGO, or Non-Governmental Organization, is a term commonly used to refer to a non-profit organization that operates independently of any government. NGOs are typically formed by individuals or groups of people with a common interest, often with a focus on social, environmental, humanitarian, or advocacy issues. These organizations are driven by a mission to address specific societal needs and contribute to positive change.
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

          <Row className="g-4 justify-content-center mt-2 pb-5">
            {ngoCharacteristics.map((document, index) => (
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
          <strong>
            Examples of well-known NGOs include Amnesty International, Oxfam, Doctors Without Borders (Médecins Sans Frontières), Greenpeace, and the Red Cross. NGOs play a crucial role in addressing societal challenges, providing services, and advocating for positive change. Their work often complements and supplements government efforts in areas such as social welfare, environmental conservation, healthcare, and human rights.
          </strong>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <h2>Types Of NGOs</h2>
          <Row>
            <Col md={6}>
              {NGO_TYPES.slice(0, 6).map((type, index) => (
                <Card key={index} className="my-3">
                  <Card.Body>
                    <Card.Title>{type.title}</Card.Title>
                    <Card.Text>
                      <strong>Focus:</strong> {type.focus}
                    </Card.Text>
                    <Card.Text>
                      <strong>Examples:</strong> {type.examples}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col md={6}>
              {NGO_TYPES.slice(6).map((type, index) => (
                <Card key={index + 6} className="my-3">
                  <Card.Body>
                    <Card.Title>{type.title}</Card.Title>
                    <Card.Text>
                      <strong>Focus:</strong> {type.focus}
                    </Card.Text>
                    <Card.Text>
                      <strong>Examples:</strong> {type.examples}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>

      </section>

      <section>
        <Container className="my-4">
          <h2>Need of NGOs</h2>
          <p>
            NGOs play a crucial role in addressing societal needs and contributing to positive social change. Their existence is essential due to several compelling reasons. Firstly, NGOs often fill gaps in public services, particularly in areas where government resources may be limited or insufficient...
          </p>
          <h2>How to Register an NGO?</h2>
          <ol>
            <li>
              Define Your Mission and Objectives
            </li>
            <li>
              Choose a Legal Structure
            </li>
            <li>
              Board Formation
            </li>
            <li>
              Name Your NGO
            </li>
            <li>
              Draft Governing Documents
            </li>
            <li>
              Register Your NGO
            </li>
            <li>
              Obtain Necessary Approvals
            </li>
            <li>
              Apply for Tax Exemption (if applicable)
            </li>
            <li>
              Open a Bank Account
            </li>
            <li>
              Start Operations
            </li>
          </ol>
          <p>
            Additional Tips:
            <ul>
              <li>Seek Professional Advice</li>
              <li>Network and Collaborate</li>
              <li>Maintain Compliance</li>
            </ul>
          </p>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <h2>Documents Required to Register an NGO</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>1. Governing Documents:</strong>
              <ul>
                <li>Memorandum of Association (MOA)</li>
                <li>Articles of Association (AOA)</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>2. Proof of Identity and Address:</strong>
              <ul>
                <li>Identity Proof of Founders/Board Members</li>
                <li>Address Proof of Registered Office</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>3. Board Resolution:</strong>
              <p>A resolution passed by the board of trustees or governing body approving the registration of the NGO.</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>4. Declaration by Promoters:</strong>
              <p>A declaration signed by the founders or promoters affirming their intention to establish and run the NGO.</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>5. List of Board Members:</strong>
              <p>A list of names, addresses, and contact details of the members of the governing board or trustees.</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>6. Minutes of Meetings:</strong>
              <p>Minutes of the meetings where decisions regarding the formation and registration of the NGO were discussed and approved.</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>7. PAN Card:</strong>
              <p>Permanent Account Number (PAN) card of the NGO and its board members.</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>8. Bank Account Details:</strong>
              <p>A letter from the bank confirming the NGO's bank account details.</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>9. Registration Application:</strong>
              <p>Completed registration application form as required by the relevant government authority.</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>10. Proof of Non-Profit Status:</strong>
              <p>Documents establishing the non-profit status of the organization.</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>11. Tax Exemption Application (if applicable):</strong>
              <p>An application for tax exemption if applicable.</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>12. FCRA Registration (if applicable):</strong>
              <p>Registration under the Foreign Contribution Regulation Act if receiving foreign contributions.</p>
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <h2>Types of Legal Structures for NGOs</h2>
          <Row className="mt-3">
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Trust</Card.Title>
                  <Card.Text>
                    Governed by a trust deed. Trustees hold and manage assets on behalf of the organization.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Section 8 Company (Non-Profit Company)</Card.Title>
                  <Card.Text>
                    Governed by the Companies Act or equivalent legislation. Profits and income are applied solely for promoting the organization's objectives.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Unincorporated Association</Card.Title>
                  <Card.Text>
                    Governed by an informal constitution or bylaws. Typically formed for a specific purpose.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Society</Card.Title>
                  <Card.Text>
                    Governed by a memorandum of association and rules and regulations. Managed by a governing body or managing committee.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Cooperative</Card.Title>
                  <Card.Text>
                    Governed by cooperative laws. Members are also the owners and participants in decision-making.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Foundation</Card.Title>
                  <Card.Text>
                    Governed by a charter or constitution. Primarily focuses on philanthropy, grant-making, or charitable activities.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Mutual Benefit Organization</Card.Title>
                  <Card.Text>
                    Exists for the benefit of its members. May be organized as a cooperative, club, or other forms.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <div className="bg-light py-5">
          <Container>
            <h2 className="text-center mb-4">Empower Your Vision: Seamless NGO Registration Services Await!</h2>
            <p className="lead text-center mb-4">Embark on a journey of impactful change with our expert NGO registration services. At RSNRMuneemji, we understand the power of your vision and the importance of a strong legal foundation. Let us guide you through the registration process, turning your aspirations into a reality.</p>
            <Row className="mb-4">
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Why Choose RSNRMuneemji for NGO Registration?</Card.Title>
                    <ul>
                      <li>Expert Guidance: Our seasoned professionals offer expert advice, ensuring a smooth and compliant registration process.</li>
                      <li>Tailored Solutions: We understand the unique nature of your mission and craft personalized solutions that align with your goals.</li>
                      <li>Efficient Process: Navigate the complexities of registration with ease. We streamline the process for a hassle-free experience.</li>
                      <li>Comprehensive Support: From drafting governing documents to submission and beyond, we provide end-to-end assistance.</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Key Services for NGO Registration</Card.Title>
                    <ul>
                      <li>Legal Structure Consultation: Tailor your NGO's legal structure to match your objectives.</li>
                      <li>Governing Document Drafting: Expertly craft Memorandum of Association (MOA) and Articles of Association (AOA) for solid governance.</li>
                      <li>Application Submission: We handle the paperwork, ensuring accurate and timely submission to relevant authorities.</li>
                      <li>Post-Registration Compliance: Stay on track with ongoing compliance and reporting requirements.</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="text-center">
                <Card>
                  <Card.Body>
                    <Card.Title>Benefits of Registering with RSNRMuneemji</Card.Title>
                    <ul>
                      <li>Legal Credibility: Build trust and credibility with stakeholders through a legally registered NGO.</li>
                      <li>Access to Funding: Unlock opportunities for grants and donations with a recognized legal entity.</li>
                      <li>Focused Mission Execution: Concentrate on your mission while we take care of the legalities.</li>
                    </ul>
                    <Button variant="primary" className="mt-3"><Link className='text-white text-decoration-none' to="/contact">Ready to Make a Difference? Let RSNRMuneemji Be Your Guide!</Link></Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default NgoRegistration