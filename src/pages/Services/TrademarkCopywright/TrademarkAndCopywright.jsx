import React from "react";
import GlobalHero from "../../../components/GlobalComps/GlobalHero";
import trade from "../../../images/trademark.svg";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";
import {
  ALargeSmall,
  BookKey,
  CalendarCheck2,
  Copy,
  DatabaseZap,
  File,
  FormInput,
  GitCommitHorizontal,
  HeartHandshake,
  Info,
  Receipt,
  Subtitles,
} from "lucide-react";
const TrademarkAndCopywright = () => {
  const advantages = [
    "Exclusive Usage Rights: Grants exclusive rights over the trademark, allowing legal action against unauthorized use.",
    "Builds Goodwill: Establishes goodwill and trust in a brand, attracting loyal customers.",
    "Differentiates Products and Services: Distinguishes goods and services, creating a unique brand identity.",
    "Ensures Product Quality: Reflects the quality of the product, attracting customers who associate with the brand.",
    "Helps in the Creation of an Asset: Trademark is an intellectual property and an asset for commercial use.",
    "Usage of Ⓡ Symbol: Indicates registered trademark, ensuring customers of the originality and quality of products.",
    "Protection Against Infringement: Grants legal recourse against third parties using the trademark without permission.",
    "Protection For Ten Years: Provides ten years of protection, extendable through renewal.",
  ];

  const disadvantages = [
    "No Alteration of Trademark Classes: Cannot alter trademark classes after application filing.",
    "Trademark Opposition: Subject to opposition, requiring legal proceedings for registration approval.",
    "Renewal Every Ten Years: Requires renewal every ten years, with non-payment resulting in removal.",
    "Limited Protection: Offers limited protection compared to copyright and patent rights.",
    "Descriptive Trademarks Cannot be Registered: Descriptive or generic trademarks are ineligible for registration.",
  ];

  const copyrightRegistrationRequirements = [
    {
      title: "Completed Application Form",
      details:
        "Fill out a copyright registration application form with details about the work and the author.",
      icon: <FormInput size={40} />,
    },
    {
      title: "Title of the Work",
      details:
        "Provide the title of the work to identify and distinguish it from others.",
      icon: <Subtitles size={40} />,
    },
    {
      title: "Description of the Work",
      details:
        "Include a brief description highlighting the nature, content, and distinctive features of the work.",
      icon: <ALargeSmall size={40} />,
    },
    {
      title: "Authorship Information",
      details:
        "Details about the author(s), including names, addresses, and citizenship. Provide information for each contributor in collaborative efforts.",
      icon: <Info size={40} />,
    },
    {
      title: "Date of Creation",
      details:
        "Specify the date when the work was created for determining the duration of copyright protection.",
      icon: <CalendarCheck2 size={40} />,
    },
    {
      title: "Publication Information",
      details:
        "Provide details about the publication if applicable, including the date and location.",
      icon: <BookKey size={40} />,
    },
    {
      title: "Original Copy or Manuscript (Optional)",
      details:
        "Some offices may request a copy of the original work or manuscript in physical or digital form.",
      icon: <Copy size={40} />,
    },
    {
      title: "Filing Fee",
      details:
        "Pay the required filing fee, which may vary based on factors such as the type of work and submission method.",
      icon: <Receipt size={40} />,
    },
    {
      title: "Power of Attorney (If Applicable)",
      details:
        "Provide a power of attorney if required, especially when registration is done on behalf of the author by an agent.",
      icon: <DatabaseZap size={40} />,
    },
    {
      title: "Declaration of Authorship",
      details:
        "Some countries may require a declaration affirming that the person claiming copyright is the creator of the work.",
      icon: <File size={40} />,
    },
    {
      title: "Statement of Work's Originality",
      details:
        "Include a statement confirming that the work is original and has not been copied from another source.",
      icon: <GitCommitHorizontal size={40} />,
    },
    {
      title: "Additional Supporting Materials (If Applicable)",
      details:
        "Depending on the nature of the work, submit additional materials like source code or technical drawings.",
      icon: <HeartHandshake size={40} />,
    },
  ];

  return (
    <>
      <GlobalHero heading="Trademark And Copywright" />
      <section>
        <Container>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="order-1">
              <h5 className="">
                A trademark is a type of intellectual property that helps to
                protect your brand by distinguishing it from competitors. It is
                used to protect the name, logo, or slogan associated with a
                product or service from being used by others without permission.
                Using a trademark prevents others from using a company or
                individual's products or services without their permission. They
                also prohibit any marks that have a likelihood of confusion with
                an existing one. This means that a business cannot use a symbol
                or brand name if it looks or sounds similar or has a similar
                meaning to one that’s already in the books—especially if the
                products or services are related. For instance, a soft drink
                company can't legally use a symbol that looks like that of
                Fanta, and it can't use a name that sounds like Fanta.{" "}
              </h5>
            </Col>
            <Col>
              <img src={trade} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="mt-4">
          <h2 className="text-center mb-4">
            Advantages and Disadvantages of Trademark Registration
          </h2>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Advantages</th>
                <th>Disadvantages</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    {advantages.map((advantage, index) => (
                      <li key={index}>{advantage}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {disadvantages.map((disadvantage, index) => (
                      <li key={index}>{disadvantage}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </section>

      <section className="py-5">
        <Container className="mt-5">
          <h2 className="text-center mb-4">
            Documents Required for Trademark Registration
          </h2>
          <Row className="justify-content-center">
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <h4 className="mb-3">Individuals & Sole Proprietorship</h4>
                  <ul>
                    <li>
                      Copy of the logo, preferably in black & white (Optional).
                    </li>
                    <li>
                      Signed Form-48 (Authorization for filing the trademark
                      application).
                    </li>
                    <li>Identity Proof of the individual or Proprietor.</li>
                    <li>Address Proof of the individual or Proprietor.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4 justify-content-center">
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <h4 className="mb-3">Partnership / LLP / Company</h4>
                  <ul>
                    <li>Copy of Logo (Optional).</li>
                    <li>
                      Signed Form-48 (Authorization for filing the trademark
                      application).
                    </li>
                    <li>Udyog Aadhar Registration Certificate.</li>
                    <li>Incorporation Certificate or Partnership Deed.</li>
                    <li>Identity Proof of Signatory.</li>
                    <li>Address Proof of Signatory.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4 justify-content-center">
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <h4 className="mb-3">Other Applicants</h4>
                  <ul>
                    <li>Copy of Logo (Optional).</li>
                    <li>
                      Signed Form-48 (Authorization for filing the trademark
                      application).
                    </li>
                    <li>Incorporation Certificate or Partnership Deed.</li>
                    <li>Identity Proof of Signatory.</li>
                    <li>Address Proof of Signatory.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Accordion defaultActiveKey="0">
            {/* Trademark Registration */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Does a Trademark need to be compulsorily registered?
              </Accordion.Header>
              <Accordion.Body>
                A Trademark does not need to be compulsorily registered for the
                owner to prevent others from using it or a confusingly similar
                mark.
              </Accordion.Body>
            </Accordion.Item>

            {/* Buying or Selling Trademarks */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Can trademarks be sold or bought?
              </Accordion.Header>
              <Accordion.Body>
                Yes, a trademark can be bought or sold. They can also be
                licensed under agreed terms and conditions, such as in franchise
                agreements.
              </Accordion.Body>
            </Accordion.Item>

            {/* Expiry of Trademark */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Expiry of Trademark</Accordion.Header>
              <Accordion.Body>
                As per the Trademark Act of 1999, the period of trademark
                registration in India is 10 years. A TM renewal for another 10
                years will be done after completing the initial registration
                period.
              </Accordion.Body>
            </Accordion.Item>

            {/* Renewal of Trademark */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>Renewal of Trademark</Accordion.Header>
              <Accordion.Body>
                TM renewal petitions must be filed 6 months prior to the
                expiration date. A mail via the registrar of trademarks will be
                received as an intimation of expiry of trademarks. Registered
                trademarks are protected for 10 years, and after that period,
                they must be renewed.
              </Accordion.Body>
            </Accordion.Item>

            {/* Documents Required for TM Renewal */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                What Are the Documents Required for TM Renewal?
              </Accordion.Header>
              <Accordion.Body>
                - A document of the enrollment affidavit. - Filled TM-R form. -
                ID and address proof of the applicant. - Trademark registration
                certificate. - Power of attorney if the applicant is an
                authorized agent or a dealer.
              </Accordion.Body>
            </Accordion.Item>

            {/* Where Can You Register the Trademark in India */}
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Where Can You Register the Trademark in India?
              </Accordion.Header>
              <Accordion.Body>
                India has 5 trademark registry departments in Mumbai, Delhi,
                Kolkata, Chennai, and Ahmedabad. If a trademark is registered,
                the proprietor of the trademark will be provided with personal
                liberties to use the same. It is protected by law and prevents
                other people from copying the trademark.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="">
              <h5 className="">
                Copyright is a legal concept that protects the original works of
                authors, artists, and creators from unauthorized use and
                distribution. For website owners, understanding copyright is
                crucial to avoid legal issues and respect the intellectual
                property rights of others. In this comprehensive guide, we will
                explore all aspects of copyright to help you navigate the
                digital landscape responsibly.{" "}
              </h5>
            </Col>
            <Col>
              <img src={trade} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="row-cols-1 row-cols-md-2">
            <Col className="mb-4">
              <h2 className="section-title">
                Exclusive Rights Granted by Copyright
              </h2>
              <p className="section-description">
                Copyright grants exclusive rights to creators over their
                original works, such as writings, images, videos, music, and
                software. These rights include reproduction, distribution,
                display, performance, and creation of derivative works. It gives
                creators the power to control how their works are used, shared,
                and monetized.
              </p>
              <ul className="exclusive-rights-list">
                <li>
                  Reproduction Right: The right to make copies of the work.
                </li>
                <li>
                  Distribution Right: The right to distribute copies to the
                  public.
                </li>
                <li>
                  Public Performance Right: The right to perform the work
                  publicly (e.g., in concerts or theaters).
                </li>
                <li>
                  Public Display Right: The right to display the work publicly
                  (e.g., in galleries or exhibitions).
                </li>
                <li>
                  Derivative Work Right: The right to create adaptations or
                  derivative works based on the original.
                </li>
              </ul>
            </Col>
            <Col>
              <h2 className="section-title">
                Duration of Copyright Protection
              </h2>
              <p className="section-description">
                The duration of copyright protection varies between countries,
                but it is generally granted for the life of the author plus a
                specific number of years. For example, in the United States,
                copyright lasts for the life of the author plus 70 years.
              </p>
              <p className="section-description">
                <strong>International Copyright Protection:</strong> Copyright
                protection is not limited to a specific country; it is
                recognized internationally through various international
                agreements and treaties. The Berne Convention for the Protection
                of Literary and Artistic Works and the WIPO Copyright Treaty are
                two prominent agreements that facilitate global copyright
                protection.
              </p>
            </Col>

            <Col className="mb-4">
              <h2 className="section-title">Fair Use and Limitations</h2>
              <p className="section-description">
                Copyright law recognizes the concept of "fair use," allowing
                limited use of copyrighted material without the creator's
                permission for purposes such as criticism, commentary, news
                reporting, teaching, and research. The extent of fair use varies
                depending on the nature of the work, the purpose of use, and the
                amount used.
              </p>
              <h2 className="section-title">Infringement and Remedies</h2>
              <p className="section-description">
                Unauthorized use or reproduction of copyrighted material
                constitutes infringement. The copyright owner has the right to
                take legal action against infringers and seek remedies such as
                injunctions, damages, and attorney fees.
              </p>
            </Col>
            <Col>
              <h2 className="section-title">Works Protected by Copyright</h2>
              <p className="section-description">
                Copyright protects a wide range of creative works, including but
                not limited to:
              </p>
              <ul className="protected-works-list">
                <li>Literary works (articles, blogs, books)</li>
                <li>Visual arts (photographs, illustrations, paintings)</li>
                <li>Audio-visual works (films, videos, animations)</li>
                <li>Musical compositions and recordings</li>
                <li>Software and computer programs</li>
                <li>Architectural designs</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th colSpan="2" className="table-heading">
                  Advantages of Copyright Protection
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Exclusive Rights</td>
                <td>
                  Copyright grants creators' exclusive control over their works,
                  allowing them to monetize and protect their creations.
                </td>
              </tr>
              <tr>
                <td>Financial Benefits</td>
                <td>
                  Copyrighted works can generate income through licensing,
                  sales, and royalties.
                </td>
              </tr>
              <tr>
                <td>Recognition and Attribution</td>
                <td>
                  Copyright protection ensures proper recognition and
                  attribution for the original creator of the work.
                </td>
              </tr>
              <tr>
                <td>Protection against Infringement</td>
                <td>
                  Copyright protection deters others from using or reproducing
                  your work without permission.
                </td>
              </tr>
              <tr>
                <td>Economic Growth</td>
                <td>
                  Strong copyright laws encourage innovation and creativity,
                  contributing to economic growth.
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th colSpan="2" className="table-heading">
                  Disadvantages of Copyright Protection
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Time-Limited Protection</td>
                <td>
                  Copyright protection is time-bound, and once expired, the work
                  enters the public domain.
                </td>
              </tr>
              <tr>
                <td>Complexity</td>
                <td>
                  Navigating copyright laws can be intricate, requiring
                  professional guidance to ensure compliance.
                </td>
              </tr>
              <tr>
                <td>Fair Use Challenges</td>
                <td>
                  Determining fair use of copyrighted material can be subjective
                  and lead to legal disputes.
                </td>
              </tr>
              <tr>
                <td>Chilling Effects on Creativity</td>
                <td>
                  Overly restrictive copyright enforcement may stifle creativity
                  and collaboration.
                </td>
              </tr>
              <tr>
                <td>Global Enforcement Challenges</td>
                <td>
                  Enforcing copyright across borders can be difficult, leading
                  to international infringement issues.
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </section>

      <section className="py-5">
        <div className="copyright-section container">
          <Card>
            <Card.Body>
              <Card.Title>Characteristics of Copyright Registration</Card.Title>
              <Card.Text>
                <strong>Copyright Ownership:</strong> In general, the creator of
                a work automatically owns the copyright. However, there are
                exceptions, such as works created as part of employment or
                commissioned works. In such cases, the copyright may belong to
                the employer or the party who commissioned the work.
              </Card.Text>
              <Card.Text>
                <strong>Duration of Copyright:</strong> Copyright protection
                generally lasts for the life of the creator plus an additional
                70 years. After this period, the work enters the public domain
                and can be freely used by anyone.
              </Card.Text>
              <Card.Text>
                <strong>Registering Copyright:</strong> Though copyright
                protection is automatic, registering your work with the relevant
                copyright office provides additional legal benefits. It serves
                as evidence of ownership and enables you to pursue legal action
                in case of infringement.
              </Card.Text>
              <Card.Text>
                <strong>Fair Use:</strong> Fair use allows limited use of
                copyrighted material without permission for purposes such as
                criticism, comment, news reporting, teaching, scholarship, or
                research. However, fair use is subject to specific guidelines,
                and its interpretation may vary based on individual cases.
              </Card.Text>
              <Card.Text>
                <strong>Copyright Infringement:</strong> Using copyrighted
                material without permission constitutes infringement. If you
                believe someone has infringed on your copyright, send them a
                takedown notice to request removal or seek legal action if
                necessary.
              </Card.Text>
              <Card.Text>
                <strong>Obtaining Permission:</strong> To use copyrighted
                material from others, seek explicit permission from the
                copyright holder. Licensing agreements and usage rights should
                be clearly defined in writing.
              </Card.Text>
              <Card.Text>
                <strong>Creative Commons Licenses:</strong> Creative Commons
                licenses offer a more flexible approach to copyright. Creators
                can choose to share their works under specific conditions,
                allowing others to use, remix, and distribute content with
                proper attribution.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-4">
            <Card.Body>
              <Card.Title>References to Laws</Card.Title>
              <Card.Text>
                <strong>United States:</strong> The Copyright Act of 1976 (Title
                17 of the United States Code) governs copyright law in the
                United States.
              </Card.Text>
              <Card.Text>
                <strong>European Union:</strong> The Directive on Copyright in
                the Digital Single Market (2019/790/EU) is a significant piece
                of copyright legislation in the EU.
              </Card.Text>
              <Card.Text>
                <strong>United Kingdom:</strong> The Copyright, Designs, and
                Patents Act 1988 is the primary law governing copyright in the
                UK.
              </Card.Text>
              <Card.Text>
                <strong>India:</strong> The Copyright Act, 1957, is the
                principal legislation related to copyright protection in India.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>

      <section className="py-5">
        <Container>
          <h2>Documents required to register a Copyright: </h2>
          <p className="mt-3">
            Registering a copyright involves submitting the required application
            form along with the necessary documentation to the appropriate
            copyright office. The specific documentation may vary slightly
            depending on the country, but here is a general list of documents
            often required for copyright registration:
          </p>
          <Row className="g-4 justify-content-center mt-2 pb-5">
            {copyrightRegistrationRequirements.map((document, index) => (
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
        <Container>
          <Accordion defaultActiveKey="0">
            {/* Question 1 */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Q: What is a trademark?</Accordion.Header>
              <Accordion.Body>
                A: A trademark is a symbol, word, or combination of both that
                represents a brand or business. It helps distinguish the goods
                or services of one entity from those of others.
              </Accordion.Body>
            </Accordion.Item>

            {/* Question 2 */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Q: Why should I register a trademark?
              </Accordion.Header>
              <Accordion.Body>
                A: Registering a trademark provides legal protection, exclusive
                rights to use the mark, and the ability to take legal action
                against infringement. It adds credibility and value to your
                brand.
              </Accordion.Body>
            </Accordion.Item>

            {/* Question 3 */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Q: How long does a trademark registration last?
              </Accordion.Header>
              <Accordion.Body>
                A: Trademark registrations typically last for 10 years, but they
                can be renewed indefinitely as long as the mark continues to be
                used and renewal fees are paid.
              </Accordion.Body>
            </Accordion.Item>

            {/* Question 4 */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Q: Can I trademark a slogan or a logo?
              </Accordion.Header>
              <Accordion.Body>
                A: Yes, slogans and logos can be trademarked as long as they
                meet the criteria of being distinctive and not too generic.
              </Accordion.Body>
            </Accordion.Item>

            {/* Question 5 */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Q: What is the difference between ™ and ®?
              </Accordion.Header>
              <Accordion.Body>
                A: ™ indicates that a mark is being used as a trademark, while ®
                indicates that the mark is officially registered with the
                appropriate trademark office.
              </Accordion.Body>
            </Accordion.Item>

            {/* Question 6 */}
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Q: Can I trademark a name that is similar to an existing one?
              </Accordion.Header>
              <Accordion.Body>
                A: The similarity of names is a crucial factor. It's advisable
                to conduct a comprehensive trademark search to ensure that your
                proposed mark does not conflict with existing trademarks.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <section className="py-5">a
        <Container>
          <h2 className="mb-4">Copywright</h2>
          <Accordion defaultActiveKey="0">
            {/* Question 1 */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Q: What is a copyright?</Accordion.Header>
              <Accordion.Body>
                A: Copyright is a legal right that grants the creator of an
                original work exclusive rights to its use and distribution. It
                covers creative works like books, music, art, and software.
              </Accordion.Body>
            </Accordion.Item>

            {/* Question 2 */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Q: Is copyright registration necessary?
              </Accordion.Header>
              <Accordion.Body>
                A: While copyright is automatic upon creation, registration
                provides additional benefits, such as the ability to sue for
                statutory damages and attorney's fees.
              </Accordion.Body>
            </Accordion.Item>

            {/* Question 3 */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Q: How long does copyright protection last?
              </Accordion.Header>
              <Accordion.Body>
                A: Copyright protection lasts for the life of the author plus an
                additional 70 years. For works created by corporations, the
                duration is typically 95 years from the date of publication or
                120 years from the date of creation, whichever is shorter.
              </Accordion.Body>
            </Accordion.Item>

            {/* Question 4 */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Q: Can I copyright an idea or concept?
              </Accordion.Header>
              <Accordion.Body>
                A: No, copyright protects the expression of ideas, not the ideas
                themselves. To be eligible for copyright, the work must be in a
                tangible form.
              </Accordion.Body>
            </Accordion.Item>

            {/* Question 5 */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Q: Can I use copyrighted material if I give credit to the owner?
              </Accordion.Header>
              <Accordion.Body>
                A: Giving credit does not automatically grant permission. If you
                want to use someone else's copyrighted material, you typically
                need explicit permission or fall under fair use exceptions.
              </Accordion.Body>
            </Accordion.Item>

            {/* Question 6 */}
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Q: Can I copyright a domain name or a business name?
              </Accordion.Header>
              <Accordion.Body>
                A: No, copyright does not protect names. Trademarks are used for
                the protection of names associated with goods or services.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </>
  );
};

export default TrademarkAndCopywright;
