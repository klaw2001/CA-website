import React from "react";
import GlobalHero from "../../../components/GlobalComps/GlobalHero";
import { Card, Col, Container, Row } from "react-bootstrap";
import acc from "../../../images/tax.svg";
import { Link } from "react-router-dom";
const IncomeTaxAdvisory = () => {
  return (
    <>
      <GlobalHero heading="Income Tax And Other Taxes" />
      <section>
        <Container>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="order-1">
              <h5 className="">
                As after seeing how much this is important to maintain your
                records in a proper manner for a business or an individual.
                Managing books is not only important under law but also for
                personal satisfaction and to keep a watch on improvements.{" "}
              </h5>
            </Col>
            <Col>
              <img src={acc} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="mt-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Income Tax</Card.Title>
                  <Card.Text>
                    History: Income tax was first introduced in India by Sir
                    James Wilson in 1860 to cover a wide range of income
                    sources. Income tax has evolved to become a cornerstone of
                    India's fiscal policies.
                  </Card.Text>
                  <Card.Text>
                    Policies: Income tax rates vary based on income slabs. The
                    government may introduce changes in tax rates and exemptions
                    in the annual budget.
                  </Card.Text>
                  <Card.Text>
                    Date of Applicability: Income tax is applicable annually on
                    income earned during the financial year (April to March).
                  </Card.Text>
                  <Card.Text>
                    Eligibility and Criteria: All individuals, Hindu Undivided
                    Families (HUFs), companies, firms, association of persons,
                    and body of individuals are eligible to pay income tax.
                  </Card.Text>
                  <Card.Link href="https://www.incometaxindia.gov.in/">
                    Income Tax Department
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Corporate Tax</Card.Title>
                  <Card.Text>
                    History: Corporate tax in India has evolved over the years,
                    and major changes were introduced in recent years to promote
                    economic growth.
                  </Card.Text>
                  <Card.Text>
                    Policies: Corporate tax rates are set by the government and
                    may vary for domestic companies, foreign companies, and
                    startups.
                  </Card.Text>
                  <Card.Text>
                    Date of Applicability: Corporate tax is applicable on the
                    income earned by companies during their financial year.
                  </Card.Text>
                  <Card.Text>
                    Eligibility and Criteria: All registered companies, whether
                    Indian or foreign, are subject to corporate tax.
                  </Card.Text>
                  <Card.Link href="https://www.incometaxindia.gov.in/">
                    Income Tax Department
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Capital Gains Tax</Card.Title>
                  <Card.Text>
                    History: Capital gains tax has been part of the Indian tax
                    system for several decades.
                  </Card.Text>
                  <Card.Text>
                    Policies: Tax is levied on the profit earned from the sale
                    of capital assets such as real estate or securities.
                  </Card.Text>
                  <Card.Text>
                    Date of Applicability: Capital gains tax is applicable at
                    the time of the sale of the capital asset.
                  </Card.Text>
                  <Card.Text>
                    Eligibility and Criteria: Individuals and entities earning
                    capital gains are subject to this tax.
                  </Card.Text>
                  <Card.Link href="https://www.incometaxindia.gov.in/">
                    Income Tax Department
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Securities Transaction Tax (STT)</Card.Title>
                  <Card.Text>
                    History: STT was introduced in 2004 to simplify the taxation
                    process related to securities transactions.
                  </Card.Text>
                  <Card.Text>
                    Policies: STT is levied on the value of securities
                    transacted on recognized stock exchanges.
                  </Card.Text>
                  <Card.Text>
                    Date of Applicability: STT is applicable at the time of
                    buying or selling securities.
                  </Card.Text>
                  <Card.Text>
                    Eligibility and Criteria: Individuals and entities involved
                    in securities transactions are subject to STT.
                  </Card.Text>
                  <Card.Link href="https://www.incometaxindia.gov.in/">
                    Income Tax Department
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Banking Cash Transaction Tax (BCTT)</Card.Title>
                  <Card.Text>
                    History: BCTT was introduced in 2005 but was withdrawn in
                    2009 due to administrative issues.
                  </Card.Text>
                  <Card.Text>
                    Policies: BCTT was levied on cash withdrawals exceeding a
                    specified limit from banks.
                  </Card.Text>
                  <Card.Text>
                    Date of Applicability: BCTT was applicable at the time of
                    cash withdrawals.
                  </Card.Text>
                  <Card.Text>
                    Eligibility and Criteria: Individuals making cash
                    withdrawals from banks were subject to BCTT.
                  </Card.Text>
                  <Card.Text>
                    Official Website: Withdrawn, no longer applicable.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Dividend Distribution Tax (DDT)</Card.Title>
                  <Card.Text>
                    History: DDT was introduced to tax companies distributing
                    dividends to their shareholders.
                  </Card.Text>
                  <Card.Text>
                    Policies: DDT was levied on companies instead of individual
                    shareholders.
                  </Card.Text>
                  <Card.Text>
                    Date of Applicability: DDT was applicable at the time of
                    dividend distribution.
                  </Card.Text>
                  <Card.Text>
                    Eligibility and Criteria: Companies declaring dividends were
                    subject to DDT.
                  </Card.Text>
                  <Card.Text>
                    Official Website: Withdrawn, replaced with tax on dividends
                    in the hands of shareholders.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Repeat similar structure for other taxes */}
        </Container>
      </section>
      <section className="mb-4">
        <Container className="mt-4">
          <Row>
            <Col>
              <h2>Role of Tax Consultants</h2>
              <Card>
                <Card.Body>
                  <Card.Text>
                    Navigating this intricate web of taxes necessitates
                    professional guidance. Tax consultants play a pivotal role
                    in:
                  </Card.Text>
                  <ul>
                    <li>
                      Strategic Planning: Devising tax-efficient strategies for
                      individuals and businesses.
                    </li>
                    <li>
                      Compliance: Ensuring adherence to evolving tax laws and
                      regulations.
                    </li>
                    <li>
                      Optimization: Identifying opportunities for tax savings
                      and optimizing financial structures.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <h2>How Our Tax Consultancy Can Help</h2>
              <Card>
                <Card.Body>
                  <Card.Text>
                    Our tax consultancy stands as your reliable partner in the
                    realm of direct taxes, offering:
                  </Card.Text>
                  <ul>
                    <li>
                      Expertise: Seasoned professionals well-versed in tax laws
                      and policies.
                    </li>
                    <li>
                      Tailored Solutions: Customized strategies catering to your
                      unique financial situation.
                    </li>
                    <li>
                      Comprehensive Services: Covering income tax, corporate
                      tax, capital gains tax, and more.
                    </li>
                    <li>
                      Proactive Updates: Keeping you abreast of changes in tax
                      laws for proactive planning.
                    </li>
                  </ul>
                  <Card.Text>
                    As you navigate the intricate landscape of direct taxes in
                    India, the expertise of a tax consultant becomes invaluable.
                    Beyond mere compliance, our consultancy is dedicated to
                    optimizing your financial journey. Let us be your guide,
                    ensuring that you not only meet your tax obligations but
                    also leverage opportunities for growth and financial
                    well-being.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Contact RSNRMuneemji</Card.Title>
                  <Card.Text>
                    For insightful guidance and expert solutions on all your
                    direct tax concerns. Your financial success is our priority.
                  </Card.Text>
                  <Card.Text>
                    <Link
                      to="/contact"
                      type="button"
                      variant="primary"
                      size="lg"
                      className="app-btn border-0 text-white"
                    >
                      Contact Us
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default IncomeTaxAdvisory;
