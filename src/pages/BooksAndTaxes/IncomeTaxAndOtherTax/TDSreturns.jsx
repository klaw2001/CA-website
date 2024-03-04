import React from "react";
import GlobalHero from "../../../components/GlobalComps/GlobalHero";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import acc from "../../../images/tax.svg";
import { Link } from "react-router-dom";

const TDSreturns = () => {
  return (
    <>
      <GlobalHero heading="TDS Returns And Fillings" />
      <section>
        <Container>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="order-1">
              <h5 className="">
                ax Deducted at Source(TDS): The concept of TDS was introduced
                with an aim to collect tax from the very source of income. As
                per this concept, a person (deductor) who is liable to make
                payment of specified nature to any other person (deductee) shall
                deduct tax at source and remit the same into the account of the
                Central Government. The deductee from whose income tax has been
                deducted at source would be entitled to get credit of the amount
                so deducted on the basis of Form 26AS or TDS certificate issued
                by the deductor.
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
          <h2 className="text-center mb-4">
            Rates for Deduction of Tax at Source
          </h2>
          <Row>
            <Col md={10} className="mx-auto">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Assessment Year 2024-25</th>
                    <th>Category of Person</th>
                    <th>Residency Status</th>
                    <th>Tax Deducted at Source (TDS)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={2}>
                      In the case of a person other than a company
                    </td>
                    <td rowSpan={2}>Resident in India</td>
                    <td>Section 192</td>
                    <td>
                      Payment of salary: TDS on Salary: Limits and Exemptions
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <h2 className="text-center mb-4">
            TDS Rates in (%): Normal Slab Rate
          </h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>TDS on Salary Limits</Card.Title>
                  <Card.Text>
                    TDS on salary is applicable when an individual's total
                    income exceeds the basic exemption limit. For the assessment
                    year 2022-23, the basic exemption limit for individuals
                    below 60 years is Rs. 2.5 lakh, for senior citizens (60-80
                    years) is Rs. 3 lakh, and for super senior citizens (above
                    80 years) is Rs. 5 lakh.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Exemptions and Deductions</Card.Title>
                  <Card.Text>
                    Certain components of the salary are exempt from TDS, and
                    employees can claim deductions to reduce their taxable
                    income. Common exemptions include: House Rent Allowance
                    (HRA), Standard Deduction, Professional Tax, Leave Travel
                    Allowance (LTA), and Medical Allowance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Form 12BB Declaration</Card.Title>
                  <Card.Text>
                    Employees can submit Form 12BB to provide details of their
                    investments, expenses, and other exemptions to the employer
                    for accurate TDS calculation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Section 10 Exemptions</Card.Title>
                  <Card.Text>
                    Various sections under the Income Tax Act, such as Section
                    10, provide exemptions for specific allowances like
                    gratuity, pension, commuted value of pension, etc.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Deduction under Chapter VI-A</Card.Title>
                  <Card.Text>
                    Employees can claim deductions under various sections of
                    Chapter VI-A, such as 80C, 80D, 80G, etc., for investments
                    in specified instruments, health insurance premiums, and
                    donations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Tax Rebate</Card.Title>
                  <Card.Text>
                    Individuals with income up to Rs. 5 lakh are eligible for a
                    tax rebate under Section 87A.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <h2 className="text-center mb-4">TDS Rates in (%): 10%</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 192A of the Income Tax Act, 1961 applies to the
                    payment of the accumulated balance of provident fund, which
                    is taxable in the hands of an employee.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Taxability Limits</Card.Title>
                  <Card.Text>
                    The accumulated balance from a recognized provident fund is
                    taxable if an employee withdraws it before completing five
                    years of continuous service. If the withdrawal occurs after
                    five years of continuous service, it is exempt from tax.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Limits and Exemptions</Card.Title>
                  <Card.Text>
                    Taxable Amount: If the withdrawal is made before completing
                    five years of continuous service, the entire amount is
                    taxable in the year of withdrawal. Exemption: If the
                    withdrawal is made after completing five years of continuous
                    service, the amount is exempt from tax.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Continuous Service</Card.Title>
                  <Card.Text>
                    Continuous service includes service with the current
                    employer and any previous employer(s) participating in the
                    recognized provident fund.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Calculation of Five Years</Card.Title>
                  <Card.Text>
                    The five-year period is calculated from the beginning of the
                    fiscal year in which the first contribution was made to the
                    provident fund.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>TDS on Withdrawal</Card.Title>
                  <Card.Text>
                    If the taxable amount exceeds Rs. 50,000, TDS (Tax Deducted
                    at Source) is deducted at the rate of 10%. If the PAN is not
                    provided, TDS is deducted at the maximum marginal rate.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Form 15G/15H</Card.Title>
                  <Card.Text>
                    Employees can submit Form 15G (for individuals below 60
                    years) or Form 15H (for individuals above 60 years) to
                    declare that their income is below the taxable limit and
                    seek non-deduction or lower deduction of TDS.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Tax Planning</Card.Title>
                  <Card.Text>
                    Employees can strategically plan their provident fund
                    withdrawals to avail of the tax exemption after completing
                    five years of continuous service.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <h2 className="text-center mb-4">TDS Rates in (%): 10%</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 193 of the Income Tax Act, 1961 deals with the
                    taxation of interest on securities. It covers various types
                    of securities issued by different entities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Types of Securities</Card.Title>
                  <Card.Text>
                    a) Local Authority or Corporation Debentures: Interest on
                    debentures or securities issued by or on behalf of any local
                    authority or a corporation established by a Central, State,
                    or Provincial Act is covered.
                    <br />
                    b) Listed Company Debentures: Interest on debentures issued
                    by a company is taxable unless such debentures are listed on
                    a recognized stock exchange as per the Securities Contracts
                    (Regulation) Act, 1956, and rules made thereunder.
                    <br />
                    c) Government Securities: Interest on securities issued by
                    the Central or State Government is included. This
                    encompasses instruments like 8% Savings (Taxable) Bonds,
                    2003, and 7.75% Saving (Taxable) Bonds, 2018.
                    <br />
                    d) Interest on Other Securities: Any other security not
                    falling under the categories mentioned above is covered by
                    this clause.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Taxation of Interest</Card.Title>
                  <Card.Text>
                    The interest earned on these securities is subject to tax
                    under the head 'Income from Other Sources.'
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>TDS (Tax Deducted at Source)</Card.Title>
                  <Card.Text>
                    As per Section 193, the person responsible for paying
                    interest on securities is required to deduct TDS at the
                    applicable rates before making the payment.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    Exemption for Resident Individuals and HUFs
                  </Card.Title>
                  <Card.Text>
                    In certain cases, resident individuals and Hindu Undivided
                    Families (HUFs) can submit Form 15G or 15H to the payer,
                    declaring that their income is below the taxable limit, and
                    TDS should not be deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Compliance with TDS Provisions</Card.Title>
                  <Card.Text>
                    The entity making the interest payment must comply with TDS
                    provisions, including timely deduction, deposit, and filing
                    of TDS returns.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Importance of Listed Status</Card.Title>
                  <Card.Text>
                    The listing status of debentures on a recognized stock
                    exchange determines whether the interest is taxable at
                    source or if the recipient needs to declare it while filing
                    income tax returns.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <h2 className="text-center mb-4">TDS Rates in (%): 10%</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194 of the Income Tax Act, 1961 deals with the
                    taxation of income by way of dividends. It applies to
                    payments made by domestic companies.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Nature of Income</Card.Title>
                  <Card.Text>
                    Dividend income refers to the distribution of profits by a
                    company to its shareholders. It can take various forms,
                    including cash dividends, bonus shares, or any other
                    distribution.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Tax Deducted at Source (TDS)</Card.Title>
                  <Card.Text>
                    The company distributing dividends is required to deduct TDS
                    at the time of payment. TDS is a mechanism to collect tax at
                    the source itself.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    As per Section 194, the TDS rate on dividend income is set
                    at 10%. This means that the company distributing dividends
                    deducts 10% of the dividend amount before making the payment
                    to the shareholder.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS under Section 194 is applicable if the aggregate amount
                    of dividends paid or credited during the financial year
                    exceeds Rs. 5,000. If the total dividend income is below
                    this threshold, TDS is not deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    Exemption for Resident Individuals and HUFs
                  </Card.Title>
                  <Card.Text>
                    Resident individual shareholders and Hindu Undivided
                    Families (HUFs) have the option to submit Form 15G or 15H to
                    the company, declaring that their total income is below the
                    taxable limit, and TDS should not be deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>No TDS on Dividends up to Rs. 5,000</Card.Title>
                  <Card.Text>
                    If the total dividend income does not exceed Rs. 5,000
                    during the financial year, no TDS is deducted. However, this
                    does not imply that the dividend income is exempt from tax;
                    the recipient needs to include it while filing income tax
                    returns.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Advance Tax</Card.Title>
                  <Card.Text>
                    While TDS takes care of tax deduction at the source,
                    individuals receiving substantial dividend income may be
                    liable for advance tax payments to ensure timely fulfillment
                    of their tax obligations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Impact on Shareholders</Card.Title>
                  <Card.Text>
                    Shareholders need to be aware of the TDS on dividends,
                    especially if they fall in higher tax slabs, as they may
                    have additional tax liabilities beyond TDS.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Compliance and Reporting</Card.Title>
                  <Card.Text>
                    Companies distributing dividends need to comply with TDS
                    provisions, including the timely deposit of TDS to the
                    government and filing TDS returns.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Importance of Dividend Vouchers</Card.Title>
                  <Card.Text>
                    Companies typically issue dividend vouchers specifying the
                    details of the dividend payment. Shareholders should retain
                    these vouchers for proper documentation and tax filing.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <h2 className="text-center mb-4">
            Section 194A: Income by way of interest other than "Interest on
            securities"
          </h2>
          <h3 className="text-center mb-4">TDS rates in (%): 10%</h3>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194A of the Income Tax Act, 1961 deals with the
                    deduction of TDS on income by way of interest, excluding
                    interest on securities. It is applicable to various types of
                    interest payments.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Types of Interest Covered</Card.Title>
                  <Card.Text>
                    This section covers a broad spectrum of interest payments,
                    including interest on savings accounts, fixed deposits,
                    recurring deposits, and other forms of interest income,
                    except for interest on securities covered under a different
                    section.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    The TDS rates under Section 194A can vary based on the type
                    of payer and payee. As of the last available information,
                    the general TDS rate is 10%, but rates may differ for senior
                    citizens or specific categories of taxpayers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS under Section 194A is applicable when the total interest
                    payment made during a financial year exceeds the prescribed
                    threshold. The threshold for TDS on interest is subject to
                    change and should be checked for the relevant financial
                    year.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Exemptions and Deductions</Card.Title>
                  <Card.Text>
                    Certain individuals, like senior citizens, may be eligible
                    for exemptions or deductions on interest income. They can
                    submit Form 15H (for senior citizens) or Form 15G (for
                    others) to the deductor to declare that their total income
                    is below the taxable limit, and TDS should not be deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    TDS Deduction on Banks and Financial Institutions
                  </Card.Title>
                  <Card.Text>
                    Banks and financial institutions are major sources of
                    interest income. They are responsible for deducting TDS when
                    the interest paid exceeds the specified limits.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Interest on Securities Excluded</Card.Title>
                  <Card.Text>
                    Interest on securities is specifically excluded from the
                    purview of Section 194A. It is covered under a separate
                    section (Section 193).
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Importance of PAN</Card.Title>
                  <Card.Text>
                    To avoid higher TDS rates, it is essential for recipients of
                    interest income to provide their Permanent Account Number
                    (PAN) to the deductor. If PAN is not provided, TDS may be
                    deducted at a higher rate.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    Deductors are required to file TDS returns and provide Form
                    16A to the deductee, specifying the details of the TDS
                    deduction. This ensures transparency and facilitates
                    accurate income tax filing by the recipients.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Impact on Taxpayers</Card.Title>
                  <Card.Text>
                    Taxpayers earning interest income need to factor in the TDS
                    while planning their taxes. They should also include the
                    interest income while filing their income tax returns.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <h2 className="text-center mb-4">
            Section 194B: Income by way of winnings from lotteries, crossword
            puzzles, card games and other games of any sort, or from gambling or
            betting of any form or nature whatsoever.
          </h2>
          <h3 className="text-center mb-4">TDS rates in (%): 30%</h3>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194B of the Income Tax Act, 1961 deals with the
                    deduction of TDS on income earned through winnings from
                    lotteries, crossword puzzles, card games, gambling, or
                    betting.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Types of Income Covered</Card.Title>
                  <Card.Text>
                    The section covers a wide range of income earned through
                    games of chance or skill, including winnings from lotteries,
                    crossword puzzles, card games, gambling, or betting.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    The TDS rate under Section 194B is 30%. This rate is
                    applicable on the total income earned through the specified
                    activities covered by the section.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS under Section 194B is applicable when the total income
                    earned from the specified activities exceeds the prescribed
                    threshold. The threshold for TDS on winnings is subject to
                    change and should be checked for the relevant financial
                    year.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>No Threshold for Deduction</Card.Title>
                  <Card.Text>
                    Unlike some other sections, Section 194B does not have a
                    specific threshold limit. TDS is applicable on the entire
                    income, irrespective of the amount.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Exemptions and Deductions</Card.Title>
                  <Card.Text>
                    There are no specific exemptions or deductions available
                    under Section 194B. TDS is to be deducted at the specified
                    rate on the gross income.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Responsibility of Deductor</Card.Title>
                  <Card.Text>
                    The responsibility of deducting TDS under this section lies
                    with the person or entity making the payment. For example,
                    if a lottery prize is awarded, the entity conducting the
                    lottery is responsible for deducting TDS.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    Deductors are required to file TDS returns and provide Form
                    16B to the deductee, specifying the details of the TDS
                    deduction. This ensures transparency and facilitates
                    accurate income tax filing by the recipients.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Impact on Taxpayers</Card.Title>
                  <Card.Text>
                    Individuals earning income through lotteries, crossword
                    puzzles, card games, gambling, or betting should be aware of
                    the TDS implications. They need to consider the TDS
                    deduction while calculating their overall tax liability.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <h2 className="text-center mb-4">
            Section 194BA: Income by way of winnings from any online game
          </h2>
          <h3 className="text-center mb-4">TDS rates in (%): 30%</h3>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194BA of the Income Tax Act, 1961 deals with the
                    deduction of TDS on income earned through winnings from any
                    online game.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Types of Income Covered</Card.Title>
                  <Card.Text>
                    This section specifically covers income arising from
                    winnings in online games. With the proliferation of online
                    gaming platforms, the section aims to ensure tax compliance
                    in this emerging sector.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    The TDS rate under Section 194BA is 31.2%. This rate is
                    applicable on the total income earned through winnings from
                    any online game.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS under Section 194BA is applicable when the total income
                    earned from online games exceeds the prescribed threshold.
                    The threshold for TDS on winnings is subject to change and
                    should be checked for the relevant financial year.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>No Threshold for Deduction</Card.Title>
                  <Card.Text>
                    Similar to some other TDS sections, Section 194BA does not
                    have a specific threshold limit. TDS is applicable on the
                    entire income, irrespective of the amount.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Exemptions and Deductions</Card.Title>
                  <Card.Text>
                    There are no specific exemptions or deductions available
                    under Section 194BA. TDS is to be deducted at the specified
                    rate on the gross income.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Responsibility of Deductor</Card.Title>
                  <Card.Text>
                    The responsibility of deducting TDS under this section lies
                    with the person or entity making the payment for winnings
                    from any online game. The online gaming platform or entity
                    organizing the game is typically responsible for deducting
                    TDS.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    Deductors are required to file TDS returns and provide Form
                    16B to the deductee, specifying the details of the TDS
                    deduction. Compliance with reporting requirements ensures
                    transparency in the tax deduction process.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Impact on Taxpayers</Card.Title>
                  <Card.Text>
                    Individuals earning income through winnings from any online
                    game should be aware of the TDS implications. Understanding
                    the provisions of Section 194BA helps in accurate tax
                    planning and compliance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <h2 className="text-center mb-4">
            Section 194BB: Income by way of winnings from horse races
          </h2>
          <h3 className="text-center mb-4">TDS rates in (%): 30%</h3>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194BB of the Income Tax Act, 1961 deals with the
                    deduction of TDS on income earned through winnings from
                    horse races.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Types of Income Covered</Card.Title>
                  <Card.Text>
                    This section specifically covers income arising from
                    winnings in horse races. It ensures the taxation of income
                    generated from this form of betting or gambling.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    The TDS rate under Section 194BB is 30%. This rate is
                    applicable on the total income earned through winnings from
                    horse races.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS under Section 194BB is applicable when the total income
                    earned from horse races exceeds the prescribed threshold.
                    The threshold for TDS on winnings is subject to change and
                    should be checked for the relevant financial year.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>No Threshold for Deduction</Card.Title>
                  <Card.Text>
                    Similar to some other TDS sections, Section 194BB does not
                    have a specific threshold limit. TDS is applicable on the
                    entire income, irrespective of the amount.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Exemptions and Deductions</Card.Title>
                  <Card.Text>
                    There are no specific exemptions or deductions available
                    under Section 194BB. TDS is to be deducted at the specified
                    rate on the gross income.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Responsibility of Deductor</Card.Title>
                  <Card.Text>
                    The responsibility of deducting TDS under this section lies
                    with the person or entity making the payment for winnings
                    from horse races. Entities involved in organizing horse
                    races or betting events are typically responsible for
                    deducting TDS.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    Deductors are required to file TDS returns and provide Form
                    16B to the deductee, specifying the details of the TDS
                    deduction. Compliance with reporting requirements ensures
                    transparency in the tax deduction process.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Impact on Taxpayers</Card.Title>
                  <Card.Text>
                    Individuals earning income through winnings from horse races
                    should be aware of the TDS implications. Understanding the
                    provisions of Section 194BB helps in accurate tax planning
                    and compliance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <h2 className="text-center mb-4">
            Section 194C: Payment to contractor/sub-contractor
          </h2>
          <h3 className="text-center mb-4">TDS rates in (%):</h3>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194C of the Income Tax Act, 1961 deals with the
                    deduction of TDS on payments made to contractors and
                    sub-contractors.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Nature of Payment Covered</Card.Title>
                  <Card.Text>
                    TDS under Section 194C is applicable to payments made for
                    contractual work, including work contracts for the supply of
                    labor and materials, as well as sub-contracts.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>
                        1% for payments made to an individual or a Hindu
                        Undivided Family (HUF).
                      </li>
                      <li>
                        2% for payments made to any other person, including
                        non-individual entities.
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS is applicable when the total payment to a contractor or
                    sub-contractor exceeds INR 30,000 in a single payment or INR
                    1,00,000 in aggregate during a financial year.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Exemptions and Deductions</Card.Title>
                  <Card.Text>
                    Payments made to specific categories of contractors, such as
                    those covered under the presumptive taxation scheme under
                    Section 44ADA, may be exempt from TDS. Deductors need to
                    verify the eligibility of the contractor for any exemptions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Deduction at Source</Card.Title>
                  <Card.Text>
                    The person responsible for making payments for contractual
                    work is required to deduct TDS at the specified rates before
                    making the actual payment to the contractor or
                    sub-contractor.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Responsibility of Deductor</Card.Title>
                  <Card.Text>
                    The deductor is obligated to obtain the PAN (Permanent
                    Account Number) of the contractor or sub-contractor and file
                    TDS returns within the prescribed due dates.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>TDS Certificate</Card.Title>
                  <Card.Text>
                    The deductor issues a TDS certificate (Form 16A) to the
                    deductee, specifying the details of TDS deduction. This
                    certificate is crucial for the deductee to claim credit for
                    the tax deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    Deductors need to file TDS returns quarterly and adhere to
                    the reporting requirements as specified by the income tax
                    authorities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Impact on Taxpayers</Card.Title>
                  <Card.Text>
                    Both deductors and contractors need to be aware of the TDS
                    provisions under Section 194C. Contractors should provide
                    their PAN to avoid higher TDS rates.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <h2 className="text-center mb-4">
            Section 194D: Insurance commission
          </h2>
          <h3 className="text-center mb-4">TDS rates in (%): 5%</h3>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194D of the Income Tax Act, 1961 deals with the
                    deduction of TDS (Tax Deducted at Source) on insurance
                    commission.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Nature of Payment Covered</Card.Title>
                  <Card.Text>
                    TDS under Section 194D is applicable to payments made as
                    insurance commission, including payments made to insurance
                    agents or brokers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>The TDS rate under Section 194D is 5%.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS is applicable when the total payment of insurance
                    commission exceeds INR 15,000 in a financial year.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Exemptions and Deductions</Card.Title>
                  <Card.Text>
                    No TDS is deducted if the total payment during the financial
                    year does not exceed the threshold limit of INR 15,000.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Deduction at Source</Card.Title>
                  <Card.Text>
                    The person responsible for making the payment is required to
                    deduct TDS at the specified rate before making the actual
                    payment to the recipient of the insurance commission.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Responsibility of Deductor</Card.Title>
                  <Card.Text>
                    The deductor needs to obtain the PAN (Permanent Account
                    Number) of the payee and mention it in all documents related
                    to the transaction. The deductor is also responsible for
                    depositing the TDS with the government.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>TDS Certificate</Card.Title>
                  <Card.Text>
                    The deductor issues a TDS certificate (Form 16A) to the
                    payee, specifying the details of TDS deduction. This
                    certificate is essential for the payee to claim credit for
                    the tax deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    Deductors need to file TDS returns quarterly and adhere to
                    the reporting requirements as specified by the income tax
                    authorities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Impact on Taxpayers</Card.Title>
                  <Card.Text>
                    Both deductors and recipients of insurance commission need
                    to be aware of the TDS provisions under Section 194D.
                    Compliance with TDS ensures proper tax governance and
                    transparency.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">
                Section 194DA: Payment in respect of life insurance policy
              </h2>
              <h3 className="text-center">TDS rates in (%): 5%</h3>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194DA deals with the deduction of TDS on payments
                    made in respect of life insurance policies.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Nature of Payment Covered</Card.Title>
                  <Card.Text>
                    TDS under Section 194DA is applicable to any sum (including
                    bonus) paid under a life insurance policy if the amount
                    exceeds the specified threshold.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>The TDS rate under Section 194DA is 5%.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Add more columns for other points */}
          </Row>
          <Row className="mt-4 mb-4">
            <Col>
              <h2 className="text-center">
                Section 194EE: Payment in respect of deposit under National
                Savings scheme
              </h2>
              <h3 className="text-center">TDS rates in (%): 10%</h3>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194EE pertains to the deduction of TDS on payments
                    made concerning deposits under the National Savings Scheme
                    (NSS).
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Nature of Payment Covered</Card.Title>
                  <Card.Text>
                    TDS under Section 194EE is applicable to payments made on
                    account of the closure of NSS deposits.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    The TDS rate under Section 194EE is 10%.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Add more columns for other points */}
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">
                Section 194F: Payment on account of repurchase of unit by Mutual
                Fund or Unit Trust of India
              </h2>
              <h3 className="text-center">TDS rates in (%): 20%</h3>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194F deals with the deduction of TDS on payments
                    made in the form of repurchase of units by a Mutual Fund or
                    Unit Trust of India.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Nature of Payment Covered</Card.Title>
                  <Card.Text>
                    TDS under Section 194F is applicable when a Mutual Fund or
                    Unit Trust of India makes a payment on account of the
                    repurchase of units.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>The TDS rate under Section 194F is 20%.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS is applicable if the amount of repurchase exceeds INR
                    50,000.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Point of Deduction</Card.Title>
                  <Card.Text>
                    TDS is deducted at the time of making the payment for
                    repurchase.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Exemptions and Deductions</Card.Title>
                  <Card.Text>
                    No TDS is deducted if the amount of repurchase is equal to
                    or less than INR 50,000.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting Requirements</Card.Title>
                  <Card.Text>
                    PAN (Permanent Account Number) details of the deductee
                    (investor) are required to be furnished by the Mutual Fund
                    or Unit Trust of India in all documents related to the
                    transaction.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Certificate</Card.Title>
                  <Card.Text>
                    A TDS certificate (Form 16A) is issued by the deductor
                    (Mutual Fund or Unit Trust of India) to the deductee
                    (investor) to provide details of the TDS deduction. This
                    certificate is essential for the deductee to claim credit
                    for the tax deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Impact on Investors</Card.Title>
                  <Card.Text>
                    Investors in Mutual Funds or Unit Trusts of India need to be
                    aware of the TDS provisions under Section 194F, especially
                    when the amount of repurchase exceeds the specified
                    threshold.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    The Mutual Fund or Unit Trust of India must file TDS returns
                    quarterly, ensuring compliance with the reporting
                    requirements set by the income tax authorities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">
                Section 194G: Commission, etc., on sale of lottery tickets
              </h2>
              <h3 className="text-center">TDS rates in (%): 5%</h3>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194G pertains to the deduction of TDS on the
                    commission or remuneration received on the sale of lottery
                    tickets.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Nature of Payment Covered</Card.Title>
                  <Card.Text>
                    TDS under Section 194G is applicable to the commission or
                    remuneration received by any person on the sale of lottery
                    tickets.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>The TDS rate under Section 194G is 5%.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS is applicable if the amount of commission or
                    remuneration exceeds INR 15,000 during the financial year.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Point of Deduction</Card.Title>
                  <Card.Text>
                    TDS is deducted at the time of crediting the commission
                    amount or at the time of payment, whichever is earlier.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Exemptions and Deductions</Card.Title>
                  <Card.Text>
                    No TDS is deducted if the commission or remuneration paid or
                    credited during the financial year is equal to or less than
                    INR 15,000.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting Requirements</Card.Title>
                  <Card.Text>
                    PAN details of the payee (recipient of commission) are
                    required to be furnished by the deductor (seller of lottery
                    tickets) in all documents related to the transaction.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Certificate</Card.Title>
                  <Card.Text>
                    A TDS certificate (Form 16A) is issued by the deductor to
                    the payee, providing details of the TDS deduction. The payee
                    can use this certificate to claim credit for the tax
                    deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Impact on Sellers</Card.Title>
                  <Card.Text>
                    Individuals or entities engaged in the sale of lottery
                    tickets need to comply with the TDS provisions of Section
                    194G when making commission payments.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    The seller of lottery tickets must file TDS returns
                    quarterly, adhering to the reporting requirements specified
                    by the income tax authorities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        (
        <Container className="my-4">
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">
                Section 194H: Commission or brokerage
              </h2>
              <h3 className="text-center">TDS rates in (%): 5%</h3>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194H of the Income Tax Act, 1961 deals with the
                    deduction of TDS on income by way of commission or
                    brokerage.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Nature of Payment Covered</Card.Title>
                  <Card.Text>
                    TDS under Section 194H is applicable to any income, by
                    whatever name called, which is in the nature of commission
                    or brokerage.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>The TDS rate under Section 194H is 5%.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS is applicable if the aggregate amount of commission or
                    brokerage payable or credited during the financial year
                    exceeds INR 15,000.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Point of Deduction</Card.Title>
                  <Card.Text>
                    TDS is deducted at the time of crediting the commission or
                    brokerage amount or at the time of payment, whichever is
                    earlier.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Exemptions and Deductions</Card.Title>
                  <Card.Text>
                    No TDS is deducted if the aggregate commission or brokerage
                    paid or credited during the financial year is equal to or
                    less than INR 15,000.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability to Different Entities</Card.Title>
                  <Card.Text>
                    Section 194H applies to payments made to residents,
                    including individuals, Hindu Undivided Families (HUFs),
                    firms, and other specified entities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting Requirements</Card.Title>
                  <Card.Text>
                    PAN details of the payee (recipient of commission or
                    brokerage) are required to be furnished by the deductor
                    (payer of commission or brokerage) in all documents related
                    to the transaction.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Certificate</Card.Title>
                  <Card.Text>
                    A TDS certificate (Form 16A) is issued by the deductor to
                    the payee, providing details of the TDS deduction. The payee
                    can use this certificate to claim credit for the tax
                    deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Impact on Businesses</Card.Title>
                  <Card.Text>
                    Businesses or individuals making payments in the nature of
                    commission or brokerage need to comply with TDS provisions
                    under Section 194H to fulfill their tax obligations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    The deductor is required to file TDS returns quarterly,
                    reporting details of TDS deductions under Section 194H to
                    the income tax authorities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">Section 194-I: Rent</h2>
              <h3 className="text-center">TDS rates in (%):</h3>
              <ul className="text-center">
                <li>Plant & Machinery - 2%</li>
                <li>Land or building or furniture or fitting - 10%</li>
              </ul>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194-I of the Income Tax Act, 1961 pertains to the
                    deduction of TDS (Tax Deducted at Source) on income by way
                    of rent.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Nature of Payment Covered</Card.Title>
                  <Card.Text>
                    TDS under Section 194-I is applicable to any income paid or
                    credited as rent.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    The TDS rates under Section 194-I vary based on the type of
                    payee:
                    <br />
                    - For rent paid to an individual or Hindu Undivided Family
                    (HUF): 5%
                    <br />- For rent paid to any other payee: 10%
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS is applicable if the total rent paid or credited during
                    the financial year exceeds INR 2,40,000.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Point of Deduction</Card.Title>
                  <Card.Text>
                    TDS is deducted at the time of crediting the rent amount or
                    at the time of payment, whichever is earlier.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Exemptions and Deductions</Card.Title>
                  <Card.Text>
                    No TDS is deducted if the total rent paid or credited during
                    the financial year is equal to or less than INR 2,40,000.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability to Different Entities</Card.Title>
                  <Card.Text>
                    Section 194-I applies to payments made to residents,
                    including individuals, Hindu Undivided Families (HUFs),
                    companies, firms, and other specified entities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting Requirements</Card.Title>
                  <Card.Text>
                    PAN details of the payee (recipient of rent) are required to
                    be furnished by the deductor (payer of rent) in all
                    documents related to the transaction.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Multiple Premises Consideration</Card.Title>
                  <Card.Text>
                    If the rent is paid for multiple premises, and the
                    individual rent for each premise does not exceed INR
                    2,40,000, TDS is not applicable. However, if the aggregate
                    rent for all premises exceeds this threshold, TDS becomes
                    applicable.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Certificate</Card.Title>
                  <Card.Text>
                    A TDS certificate (Form 16A) is issued by the deductor to
                    the payee, providing details of the TDS deduction. The payee
                    can use this certificate to claim credit for the tax
                    deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Impact on Businesses</Card.Title>
                  <Card.Text>
                    Businesses or individuals renting property need to comply
                    with TDS provisions under Section 194-I to fulfill their tax
                    obligations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    The deductor is required to file TDS returns quarterly,
                    reporting details of TDS deductions under Section 194-I to
                    the income tax authorities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">
                Section 194-IA: Payment on transfer of certain immovable
                property other than agricultural land
              </h2>
              <h3 className="text-center">TDS rates in (%): 1%</h3>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194-IA of the Income Tax Act, 1961 deals with the
                    deduction of TDS (Tax Deducted at Source) on the sale of
                    certain immovable property.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Nature of Payment Covered</Card.Title>
                  <Card.Text>
                    TDS under Section 194-IA is applicable to the consideration
                    paid for the transfer of immovable property, excluding
                    agricultural land.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    The TDS rate under Section 194-IA is 1% of the consideration
                    value.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS is applicable if the consideration value for the
                    transfer of the property exceeds INR 50,00,000.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Point of Deduction</Card.Title>
                  <Card.Text>
                    TDS is deducted at the time of credit of the sum to the
                    transferor's account or at the time of payment, whichever is
                    earlier.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Exemptions and Deductions</Card.Title>
                  <Card.Text>
                    No TDS is deducted if the consideration value for the
                    transfer of the property is equal to or less than INR
                    50,00,000.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability to Different Entities</Card.Title>
                  <Card.Text>
                    Section 194-IA applies to all entities involved in the
                    transfer, including individuals, Hindu Undivided Families
                    (HUFs), companies, firms, and other specified entities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting Requirements</Card.Title>
                  <Card.Text>
                    PAN details of both the buyer and the seller are required to
                    be furnished by the buyer in the TDS return.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Multiple Buyers Consideration</Card.Title>
                  <Card.Text>
                    If there are multiple buyers, and the consideration for each
                    buyer is less than INR 50,00,000, no TDS is required.
                    However, if the total consideration exceeds this threshold,
                    TDS becomes applicable.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Certificate</Card.Title>
                  <Card.Text>
                    The buyer is required to issue a TDS certificate (Form 16B)
                    to the seller, providing details of the TDS deduction. The
                    seller can use this certificate to claim credit for the tax
                    deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Impact on Property Transactions</Card.Title>
                  <Card.Text>
                    Buyers involved in property transactions exceeding the
                    specified threshold need to comply with TDS provisions under
                    Section 194-IA.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    The buyer is required to file TDS returns and provide
                    details of TDS deductions under Section 194-IA to the income
                    tax authorities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">
                Section 194-IB: Payment of rent by individual or HUF not liable
                to tax audit
              </h2>
              <h3 className="text-center">TDS rates in (%): 5%</h3>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194-IB of the Income Tax Act, 1961 pertains to the
                    deduction of TDS (Tax Deducted at Source) on rental payments
                    made by individuals or Hindu Undivided Families (HUFs) not
                    subject to tax audit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Nature of Payment Covered</Card.Title>
                  <Card.Text>
                    TDS under Section 194-IB is applicable to payments made as
                    rent by individuals or HUFs for land, building, furniture,
                    fittings, or any other immovable property.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    The TDS rate under Section 194-IB is 5% of the total rent
                    paid.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS is applicable if the total rent paid or credited during
                    the financial year exceeds INR 50,000 per month or part
                    thereof.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Point of Deduction</Card.Title>
                  <Card.Text>
                    TDS is deducted at the earlier of credit of rent to the
                    landlord's account or payment of rent for the last month of
                    the financial year or the last month of the tenancy, if the
                    property is vacated during the year.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability to Different Entities</Card.Title>
                  <Card.Text>
                    Section 194-IB specifically targets individual and HUF
                    tenants who are not required to undergo a tax audit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Exemptions</Card.Title>
                  <Card.Text>
                    This section does not apply if the landlord is an individual
                    or HUF and is subject to tax audit under Section 44AB during
                    the financial year.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Multiple Co-owners</Card.Title>
                  <Card.Text>
                    If there are multiple owners of the property, the threshold
                    limit of INR 50,000 is to be applied separately to each
                    co-owner. TDS is not required if the share of an individual
                    co-owner is below the threshold.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    The tenant is required to deduct TDS and remit it to the
                    government. Additionally, the tenant needs to furnish PAN
                    details of the landlord.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Certificate</Card.Title>
                  <Card.Text>
                    The tenant must issue a TDS certificate in Form 16C to the
                    landlord, providing details of the TDS deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Non-Deduction in Certain Cases</Card.Title>
                  <Card.Text>
                    TDS is not required if the landlord provides a declaration
                    in Form 15G/15H stating that their income is below the
                    taxable limit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">
                Section 194-IC: Payment of monetary consideration under Joint
                Development Agreements
              </h2>
              <h3 className="text-center">TDS rates in (%): 10%</h3>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194-IC of the Income Tax Act, 1961 deals with the
                    deduction of TDS (Tax Deducted at Source) on monetary
                    consideration paid under Joint Development Agreements
                    (JDAs).
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Nature of Payment Covered</Card.Title>
                  <Card.Text>
                    TDS under Section 194-IC is applicable to any sum of money
                    paid by a resident taxpayer to a resident individual, Hindu
                    Undivided Family (HUF), or any other person as consideration
                    for transfer of specified immovable property under a Joint
                    Development Agreement.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    The TDS rate under Section 194-IC is 10% of the total sum
                    paid as consideration.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS is applicable if the total monetary consideration paid
                    or credited during the financial year exceeds INR 50 lakhs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Point of Deduction</Card.Title>
                  <Card.Text>
                    TDS is deducted at the time of credit of sum to the account
                    of the payee or at the time of payment, whichever is
                    earlier.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability to Different Entities</Card.Title>
                  <Card.Text>
                    This section is applicable when the payee is an individual,
                    HUF, or any other person.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Exemptions</Card.Title>
                  <Card.Text>
                    TDS is not required on monetary consideration paid for
                    transfer of immovable property under a JDA where the
                    transferor is a company, cooperative society, or any other
                    specified person.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    The deductor is required to file a TDS return providing
                    details of TDS deducted. The deductee is entitled to claim
                    credit for the TDS amount deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Certificate</Card.Title>
                  <Card.Text>
                    The deductor must issue a TDS certificate in Form 16B to the
                    deductee, furnishing details of the TDS deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Non-Deduction in Certain Cases</Card.Title>
                  <Card.Text>
                    No TDS is required if the deductee furnishes a declaration
                    in Form 15G/15H stating that their income is below the
                    taxable limit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    Clarification on Specified Immovable Property
                  </Card.Title>
                  <Card.Text>
                    Specified immovable property includes land or building or
                    both.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">
                Section 194J: Fees for professional or technical services
              </h2>
            </Col>
          </Row>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194J of the Income Tax Act, 1961 pertains to the
                    deduction of TDS (Tax Deducted at Source) on certain
                    payments made for professional or technical services.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Nature of Payments Covered</Card.Title>
                  <Card.Text>
                    TDS under Section 194J is applicable to three types of
                    payments:
                    <ol>
                      <li>Fees for technical services</li>
                      <li>Royalty for cinematographic films</li>
                      <li>Any other sum not covered under (i) or (ii)</li>
                    </ol>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    The TDS rates vary based on the nature of payments:
                    <ul>
                      <li>Fees for technical services: 2%</li>
                      <li>Royalty for cinematographic films: 2%</li>
                      <li>Any other sum: 10%</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS is applicable if the total amount paid or credited to
                    the payee during the financial year exceeds INR 30,000.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Point of Deduction</Card.Title>
                  <Card.Text>
                    TDS is deducted at the time of credit of the sum to the
                    account of the payee or at the time of payment, whichever is
                    earlier.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Definition of Technical Services</Card.Title>
                  <Card.Text>
                    Technical services include any consideration for rendering
                    any managerial, technical, consultancy, or other services.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Exemptions</Card.Title>
                  <Card.Text>
                    No TDS is deducted if the total amount paid or credited to
                    the payee does not exceed INR 30,000 during the financial
                    year.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Clarification on Royalty</Card.Title>
                  <Card.Text>
                    The term "royalty" includes consideration for the sale,
                    distribution, or exhibition of cinematographic films.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    The deductor must file a TDS return providing details of TDS
                    deducted. The deductee can claim credit for the TDS amount
                    deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Certificate</Card.Title>
                  <Card.Text>
                    The deductor issues a TDS certificate in Form 16D, providing
                    details of the TDS deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Non-Deduction in Certain Cases</Card.Title>
                  <Card.Text>
                    No TDS is required if the deductee furnishes a declaration
                    in Form 15G/15H stating that their income is below the
                    taxable limit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">
                Section 194K: Income in respect of units payable to resident
                person
              </h2>
            </Col>
          </Row>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194K of the Income Tax Act, 1961 deals with the
                    deduction of TDS (Tax Deducted at Source) on income in
                    respect of units.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Nature of Payment</Card.Title>
                  <Card.Text>
                    TDS under Section 194K is applicable to income earned by a
                    resident taxpayer in the form of units of a specified mutual
                    fund.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    The TDS rate under this section is 10% of the income
                    distributed by the specified mutual fund.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS is applicable if the total amount of income credited or
                    paid during the financial year exceeds INR 5,000.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Point of Deduction</Card.Title>
                  <Card.Text>
                    TDS is deducted at the time of credit of income to the
                    account of the payee or at the time of payment, whichever is
                    earlier.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Definition of Specified Mutual Fund</Card.Title>
                  <Card.Text>
                    A specified mutual fund refers to a Mutual Fund specified
                    under section 10(23D) of the Income Tax Act, 1961.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Exemptions</Card.Title>
                  <Card.Text>
                    No TDS is deducted if the total income credited or paid
                    during the financial year is less than INR 5,000.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    The deductor is required to file a TDS return providing
                    details of TDS deducted. The deductee can claim credit for
                    the TDS amount deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Certificate</Card.Title>
                  <Card.Text>
                    The deductor issues a TDS certificate in Form 16D, providing
                    details of the TDS deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Non-Deduction in Certain Cases</Card.Title>
                  <Card.Text>
                    No TDS is required if the deductee furnishes a declaration
                    in Form 15G/15H stating that their total income is below the
                    taxable limit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Impact on Investors</Card.Title>
                  <Card.Text>
                    Investors receiving income in respect of units need to be
                    aware of the TDS provisions and ensure compliance with tax
                    regulations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">
                Section 194LA: Payment of compensation on acquisition of certain
                immovable property
              </h2>
            </Col>
          </Row>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194LA of the Income Tax Act, 1961 deals with the
                    deduction of TDS (Tax Deducted at Source) on compensation
                    paid for the acquisition of certain immovable property.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Nature of Payment</Card.Title>
                  <Card.Text>
                    TDS under Section 194LA is applicable when compensation is
                    paid for the compulsory acquisition of any immovable
                    property (other than agricultural land).
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    The TDS rate under this section is 10% of the compensation
                    amount.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS is applicable if the compensation amount exceeds INR
                    2,50,000.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Point of Deduction</Card.Title>
                  <Card.Text>
                    TDS is deducted at the time of credit of compensation to the
                    account of the payee or at the time of payment, whichever is
                    earlier.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Exemptions</Card.Title>
                  <Card.Text>
                    No TDS is deducted if the compensation amount is less than
                    or equal to INR 2,50,000.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Definition of Immovable Property</Card.Title>
                  <Card.Text>
                    Immovable property, in this context, does not include
                    agricultural land.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    The deductor is required to file a TDS return providing
                    details of TDS deducted. The deductee can claim credit for
                    the TDS amount deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Certificate</Card.Title>
                  <Card.Text>
                    The deductor issues a TDS certificate in Form 16B, providing
                    details of the TDS deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Non-Deduction in Certain Cases</Card.Title>
                  <Card.Text>
                    No TDS is required if the compensation is paid to the
                    Central Government or a State Government.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Impact on Transactions</Card.Title>
                  <Card.Text>
                    Buyers or acquirers of immovable property need to ensure
                    compliance with TDS provisions when making compensation
                    payments.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">
                Section 194LBA(1): Tax Deduction at Source (TDS) by Business
                Trust
              </h2>
            </Col>
          </Row>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194LBA(1) of the Income Tax Act, 1961 pertains to
                    tax deduction at source (TDS) by a business trust while
                    distributing interest or rental income to its unit holders.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Business Trust</Card.Title>
                  <Card.Text>
                    A business trust typically refers to a Real Estate
                    Investment Trust (REIT) or an Infrastructure Investment
                    Trust (InvIT).
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Nature of Payment</Card.Title>
                  <Card.Text>
                    TDS is applicable when a business trust distributes interest
                    received or receivable from a Special Purpose Vehicle (SPV)
                    or income received from renting, leasing, or letting out any
                    real estate asset owned directly by the business trust.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    The TDS rates are applicable as per the Income Tax Act.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS is applicable when the business trust distributes
                    interest or rental income to its unit holders.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Point of Deduction</Card.Title>
                  <Card.Text>
                    TDS is deducted at the time of distribution of interest or
                    rental income by the business trust.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Exemptions</Card.Title>
                  <Card.Text>
                    The provisions of Section 194LBA(1) may specify certain
                    exemptions or conditions under which TDS may not be
                    applicable. Detailed examination of the section and relevant
                    notifications is necessary.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    The business trust is required to file TDS returns providing
                    details of TDS deducted. The unit holders can claim credit
                    for the TDS amount deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Certificate</Card.Title>
                  <Card.Text>
                    The business trust issues a TDS certificate to the unit
                    holders, specifying the details of TDS deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Impact on Transactions</Card.Title>
                  <Card.Text>
                    The provision ensures that TDS is deducted by the business
                    trust before distributing interest or rental income to unit
                    holders, facilitating tax compliance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">
                Section 194LBB: Tax Deduction at Source (TDS) by Investment Fund
              </h2>
            </Col>
          </Row>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194LBB of the Income Tax Act, 1961 deals with the
                    deduction of tax at source (TDS) on income paid by an
                    investment fund to its unit holders.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Investment Fund</Card.Title>
                  <Card.Text>
                    This section typically applies to Investment Funds such as
                    specified funds that invest in specified income arising from
                    specified securities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Nature of Payment</Card.Title>
                  <Card.Text>
                    TDS is applicable on income payments made by the investment
                    fund to its unit holders.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Types of Income Covered</Card.Title>
                  <Card.Text>
                    Section 194LBB covers income paid by the investment fund to
                    unit holders, excluding income exempt under Section
                    10(23FBB) of the Income Tax Act.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    The TDS rates are as per the provisions of the Income Tax
                    Act.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS is applicable when the investment fund pays income to
                    its unit holders.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Point of Deduction</Card.Title>
                  <Card.Text>
                    TDS is deducted at the time of payment of income by the
                    investment fund.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Exemptions</Card.Title>
                  <Card.Text>
                    There may be exemptions or specific conditions under which
                    TDS is not applicable. Detailed examination of the section
                    and relevant notifications is necessary.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    The investment fund is required to file TDS returns,
                    providing details of TDS deducted. Unit holders can claim
                    credit for the TDS amount deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Certificate</Card.Title>
                  <Card.Text>
                    The investment fund issues a TDS certificate to the unit
                    holders, specifying the details of TDS deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Impact on Transactions</Card.Title>
                  <Card.Text>
                    Section 194LBB ensures that TDS is deducted by the
                    investment fund before distributing income to unit holders,
                    ensuring compliance with tax regulations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">
                Section 194LBC: Tax Deduction at Source (TDS) by Securitisation
                Trust
              </h2>
            </Col>
          </Row>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194LBC of the Income Tax Act, 1961 pertains to the
                    deduction of tax at source (TDS) on income in respect of
                    investment made in a securitisation trust.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Securitisation Trust</Card.Title>
                  <Card.Text>
                    This section is applicable to income arising from
                    investments made in a securitisation trust as specified in
                    the Explanation of section 115TCA.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Nature of Payment</Card.Title>
                  <Card.Text>
                    TDS is applicable when income is paid by the securitisation
                    trust.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>
                    The TDS rates under Section 194LBC are:
                    <ul>
                      <li>
                        25% for Individuals or Hindu Undivided Families (HUF)
                      </li>
                      <li>30% for other persons</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Threshold for TDS</Card.Title>
                  <Card.Text>
                    TDS is applicable when the securitisation trust pays income
                    to the investors.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Point of Deduction</Card.Title>
                  <Card.Text>
                    TDS is deducted at the time of payment of income by the
                    securitisation trust.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Individual or HUF Rates</Card.Title>
                  <Card.Text>
                    Individuals and HUFs are subject to a lower TDS rate of 25%.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Other Person Rates</Card.Title>
                  <Card.Text>
                    Other persons, including entities other than Individuals and
                    HUFs, are subject to a TDS rate of 30%.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Exemptions</Card.Title>
                  <Card.Text>
                    There may be exemptions or specific conditions under which
                    TDS is not applicable. Detailed examination of the section
                    and relevant notifications is necessary.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Reporting and Compliance</Card.Title>
                  <Card.Text>
                    The securitisation trust is required to file TDS returns,
                    providing details of TDS deducted. Investors can claim
                    credit for the TDS amount deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Certificate</Card.Title>
                  <Card.Text>
                    The securitisation trust issues a TDS certificate to the
                    investors, specifying the details of TDS deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Impact on Transactions</Card.Title>
                  <Card.Text>
                    Section 194LBC ensures that TDS is deducted before
                    distributing income to investors, facilitating compliance
                    with tax regulations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">
                Section 194M: Tax Deduction at Source (TDS) by Individuals or
                HUFs
              </h2>
            </Col>
          </Row>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Applicability</Card.Title>
                  <Card.Text>
                    Section 194M of the Income Tax Act, 1961 applies to payments
                    made by an Individual or a Hindu Undivided Family (HUF) to a
                    resident person.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Nature of Payments Covered</Card.Title>
                  <Card.Text>
                    The section covers payments of commission (excluding
                    insurance commission), brokerage, contractual fee, or
                    professional fee.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Payer</Card.Title>
                  <Card.Text>The payer is an Individual or an HUF.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Threshold Limit</Card.Title>
                  <Card.Text>
                    TDS is applicable when the aggregate amount of such payments
                    in a financial year exceeds Rs. 50 lakhs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Rates</Card.Title>
                  <Card.Text>The TDS rate under Section 194M is 5%.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Point of Deduction</Card.Title>
                  <Card.Text>
                    TDS is deducted at the time of credit of such sum to the
                    account of the payee or at the time of payment, whichever is
                    earlier.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Exemption for Individuals and HUFs</Card.Title>
                  <Card.Text>
                    This section provides an exemption for Individuals and HUFs
                    who are not liable to deduct TDS under Section 194C, 194H,
                    or 194J.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Scope of Services</Card.Title>
                  <Card.Text>
                    The services covered include commission, brokerage,
                    contractual fee, or professional fee. It excludes insurance
                    commission.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Compliance and Reporting</Card.Title>
                  <Card.Text>
                    The payer is required to deduct TDS and deposit it to the
                    government. Additionally, TDS returns need to be filed with
                    details of such deductions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>TDS Certificate</Card.Title>
                  <Card.Text>
                    The payer issues a TDS certificate to the payee, specifying
                    the details of TDS deducted.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Impact on Transactions</Card.Title>
                  <Card.Text>
                    Section 194M ensures that TDS is deducted on specified
                    payments made by Individuals or HUFs, enhancing tax
                    compliance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Record Keeping</Card.Title>
                  <Card.Text>
                    Both the payer and the payee need to maintain proper records
                    of transactions to ensure accurate TDS compliance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
      <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Section 194N: Tax Deduction at Source (TDS) on Cash Withdrawals</h2>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Applicability</Card.Title>
              <Card.Text>
                Section 194N of the Income Tax Act, 1961 is applicable to cash withdrawals made during the previous year from accounts maintained with a banking company, co-operative society engaged in the business of banking, or a post office.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Threshold Limits and TDS Rates</Card.Title>
              <Card.Text>
                TDS is triggered when the aggregate cash withdrawal exceeds certain thresholds:<br/>
                - Rs. 1 crore: TDS rate is 2%.<br/>
                - Rs. 20 lakhs to Rs. 1 crore: TDS rate is 2/5%.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Special Provisions for Non-filers</Card.Title>
              <Card.Text>
                For individuals who have not filed their income tax returns (ITR) for the three previous years immediately preceding the previous year of cash withdrawal, and the due date for filing ITR under section 139(1) has expired:<br/>
                - TDS is applicable if the aggregate cash withdrawal exceeds Rs. 20 lakhs during the previous year.<br/>
                - TDS rates are:<br/>
                  - 2% if the withdrawal exceeds Rs. 20 lakhs.<br/>
                  - 5% if the withdrawal exceeds Rs. 1 crore.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Increased Threshold for Co-operative Society</Card.Title>
              <Card.Text>
                The threshold limit of Rs. 1 crore is increased to Rs. 3 crores if the cash withdrawal is made by a co-operative society.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Reporting and Compliance</Card.Title>
              <Card.Text>
                The responsibility for deducting TDS lies with the banking company, co-operative society, or post office facilitating the cash withdrawal. Quarterly statements must be furnished by the specified entities.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Exemptions</Card.Title>
              <Card.Text>
                Certain entities, such as government entities, are exempt from TDS under this section.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Intent and Impact</Card.Title>
              <Card.Text>
                Section 194N aims to discourage large cash withdrawals, promoting digital transactions and formalizing the economy. The provision encourages individuals to comply with tax-filing obligations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Importance of Filing ITR</Card.Title>
              <Card.Text>
                Individuals are incentivized to file their income tax returns promptly to avoid the higher TDS rates applicable to non-filers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Key Considerations</Card.Title>
              <Card.Text>
                Taxpayers and financial institutions need to be aware of the prescribed rates, thresholds, and special provisions for non-filers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Compliance Measures</Card.Title>
              <Card.Text>
                To ensure compliance, individuals and entities should keep track of their cash withdrawals and adhere to the prescribed rates and thresholds.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>

      <section>
      <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Section 194-O: Tax Deduction at Source (TDS) on Payments by E-commerce Operators</h2>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Applicability</Card.Title>
              <Card.Text>
                Section 194-O of the Income Tax Act, 1961 is applicable to e-commerce operators making payments or credits to e-commerce participants.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Definition</Card.Title>
              <Card.Text>
                <strong>E-commerce Operator:</strong> Refers to any person who owns, operates, or manages a digital or electronic facility or platform for electronic commerce.
                <br/>
                <strong>E-commerce Participant:</strong> Refers to a person resident in India selling goods or providing services through the digital or electronic facility or platform provided by the e-commerce operator.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>TDS Rates and Thresholds</Card.Title>
              <Card.Text>
                TDS is applicable at the rate of 1% on the gross amount of sales or services facilitated by the e-commerce operator.<br/>
                No TDS is deducted if the gross amount of sales or services during the previous year does not exceed Rs. 5 lakhs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Timing of TDS Deduction</Card.Title>
              <Card.Text>
                TDS is deducted at the time of credit of the amount to the account of the e-commerce participant or at the time of payment, whichever is earlier.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Reporting and Compliance</Card.Title>
              <Card.Text>
                The e-commerce operator is responsible for deducting and depositing TDS. They are also required to furnish a TDS certificate to the e-commerce participant.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Exemptions</Card.Title>
              <Card.Text>
                Individuals or HUFs whose gross receipts or sales do not exceed Rs. 5 lakhs during the previous year are exempt from TDS under this section.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Impact on E-commerce Participants</Card.Title>
              <Card.Text>
                E-commerce participants need to be aware of TDS implications and ensure proper compliance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Intent and Objective</Card.Title>
              <Card.Text>
                Section 194-O aims to bring transparency and accountability to transactions facilitated by e-commerce operators, ensuring tax compliance within the digital economy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Importance for E-commerce Operators</Card.Title>
              <Card.Text>
                E-commerce operators play a crucial role in deducting and remitting TDS in accordance with the provisions of Section 194-O.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Regulatory Measures</Card.Title>
              <Card.Text>
                The provision serves as a regulatory measure to streamline TDS processes in the e-commerce sector, promoting tax adherence.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>

      <section>
      <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Section 194P: Deduction of Tax by Specified Bank for Senior Citizens</h2>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Applicability</Card.Title>
              <Card.Text>
                Section 194P of the Income Tax Act, 1961 is applicable to specified banks for the deduction of tax at source (TDS) in the case of senior citizens aged 75 or more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Eligibility Criteria</Card.Title>
              <Card.Text>
                Applies to individuals who are resident senior citizens with the age of 75 or more during the previous year.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Scope of Income</Card.Title>
              <Card.Text>
                The specified bank deducts TDS on income earned by the senior citizen in the form of interest, excluding income from dividends or capital gains.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>TDS Rates and Thresholds</Card.Title>
              <Card.Text>
                TDS is not applicable if the aggregate of income doesn’t exceed the threshold limit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Non-filing of Return</Card.Title>
              <Card.Text>
                The provision is applicable to senior citizens who have furnished a declaration to the specified bank, and the bank computes TDS in cases where the senior citizen has not filed an income tax return.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Declaration to Bank</Card.Title>
              <Card.Text>
                Senior citizens eligible for this provision need to submit a declaration to the specified bank for availing the benefit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Threshold Limit</Card.Title>
              <Card.Text>
                The threshold limit is determined by considering the aggregate income, including all eligible deductions under Chapter VI-A.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Impact on Senior Citizens</Card.Title>
              <Card.Text>
                Senior citizens can benefit from reduced compliance as TDS is computed and deducted by the specified bank.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Simplification of Tax Process</Card.Title>
              <Card.Text>
                Section 194P aims to simplify the tax process for senior citizens, making it more convenient for them.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Compliance by Specified Banks</Card.Title>
              <Card.Text>
                Specified banks are responsible for computing TDS based on the declaration provided by senior citizens and ensuring proper compliance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Importance for Senior Citizens</Card.Title>
              <Card.Text>
                Senior citizens can appreciate the simplified TDS process, reducing the burden of filing income tax returns in certain cases.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Overall Intent</Card.Title>
              <Card.Text>
                The intent is to provide relief to senior citizens by streamlining the TDS process, especially for those who may not be required to file regular income tax returns.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>

      <section>
      <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Section 194P: Deduction of Tax by Specified Bank for Senior Citizens</h2>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Applicability</Card.Title>
              <Card.Text>
                Section 194P of the Income Tax Act, 1961 is applicable to specified banks for the deduction of tax at source (TDS) in the case of senior citizens aged 75 or more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Eligibility Criteria</Card.Title>
              <Card.Text>
                Applies to individuals who are resident senior citizens with the age of 75 or more during the previous year.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Scope of Income</Card.Title>
              <Card.Text>
                The specified bank deducts TDS on income earned by the senior citizen in the form of interest, excluding income from dividends or capital gains.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>TDS Rates and Thresholds</Card.Title>
              <Card.Text>
                TDS is not applicable if the aggregate of income doesn’t exceed the threshold limit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Non-filing of Return</Card.Title>
              <Card.Text>
                The provision is applicable to senior citizens who have furnished a declaration to the specified bank, and the bank computes TDS in cases where the senior citizen has not filed an income tax return.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Declaration to Bank</Card.Title>
              <Card.Text>
                Senior citizens eligible for this provision need to submit a declaration to the specified bank for availing the benefit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Threshold Limit</Card.Title>
              <Card.Text>
                The threshold limit is determined by considering the aggregate income, including all eligible deductions under Chapter VI-A.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Impact on Senior Citizens</Card.Title>
              <Card.Text>
                Senior citizens can benefit from reduced compliance as TDS is computed and deducted by the specified bank.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Simplification of Tax Process</Card.Title>
              <Card.Text>
                Section 194P aims to simplify the tax process for senior citizens, making it more convenient for them.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Compliance by Specified Banks</Card.Title>
              <Card.Text>
                Specified banks are responsible for computing TDS based on the declaration provided by senior citizens and ensuring proper compliance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Importance for Senior Citizens</Card.Title>
              <Card.Text>
                Senior citizens can appreciate the simplified TDS process, reducing the burden of filing income tax returns in certain cases.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Overall Intent</Card.Title>
              <Card.Text>
                The intent is to provide relief to senior citizens by streamlining the TDS process, especially for those who may not be required to file regular income tax returns.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>

      <section>
      <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Section 194Q: TDS on Purchase of Goods</h2>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Applicability</Card.Title>
              <Card.Text>
                Section 194Q of the Income Tax Act, 1961 is applicable to TDS on payments made for the purchase of goods.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Payer</Card.Title>
              <Card.Text>
                The provision applies to a buyer whose total turnover exceeds Rs. 10 crores during the financial year immediately preceding the financial year in which the purchase of goods is carried out.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Threshold Limit</Card.Title>
              <Card.Text>
                TDS is required to be deducted when the aggregate value of goods purchased exceeds Rs. 50 lakhs in a financial year.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>TDS Rate</Card.Title>
              <Card.Text>
                The TDS rate under Section 194Q is 0.1% (i.e., 10 basis points) of the sum exceeding Rs. 50 lakhs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Exclusions</Card.Title>
              <Card.Text>
                This provision does not apply to transactions where TDS is deductible under other sections like 194C (contractual payments), 194H (commission or brokerage), or 194J (professional or technical services).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Time of Deduction</Card.Title>
              <Card.Text>
                TDS under Section 194Q is required to be deducted at the time of credit to the seller's account or at the time of payment, whichever is earlier.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Compliance Responsibilities</Card.Title>
              <Card.Text>
                The buyer needs to obtain the seller's PAN and report the TDS details in the TDS return.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Impact on Business Transactions</Card.Title>
              <Card.Text>
                This provision has an impact on business transactions, particularly for buyers with large turnovers engaging in substantial purchases.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Compliance for Sellers</Card.Title>
              <Card.Text>
                Sellers need to ensure that buyers deduct TDS under Section 194Q, and sellers should provide their PAN details to buyers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Importance of Compliance</Card.Title>
              <Card.Text>
                Non-compliance with the provisions of Section 194Q may attract penal consequences, including disallowance of expenses.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Role of Technology</Card.Title>
              <Card.Text>
                Businesses may leverage technology to streamline the TDS deduction process and ensure accurate compliance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Streamlining Procurement Processes</Card.Title>
              <Card.Text>
                The provision encourages businesses to streamline their procurement processes and maintain accurate records of transactions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>

      <section>
      <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Section 194R: TDS on Benefits or Perquisites</h2>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Applicability</Card.Title>
              <Card.Text>
                Section 194R of the Income Tax Act, 1961 deals with the deduction of Tax Deducted at Source (TDS) in case any benefit or perquisite is provided, and the aggregate value of such benefit/perquisite exceeds Rs. 20,000.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Payer</Card.Title>
              <Card.Text>
                This provision applies to any person (other than an individual or a Hindu undivided family) who is responsible for paying any income in the nature of a benefit or perquisite to a resident individual or Hindu undivided family.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Nature of Payment</Card.Title>
              <Card.Text>
                The payment covered under this section should arise from business or the exercise of a profession.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Threshold Limit</Card.Title>
              <Card.Text>
                TDS is required to be deducted if the aggregate value of the benefit or perquisite provided exceeds Rs. 20,000 in a financial year.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>TDS Rate</Card.Title>
              <Card.Text>
                The TDS rate under Section 194R is 5% (plus applicable surcharge and cess) on the sum exceeding Rs. 20,000.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Time of Deduction</Card.Title>
              <Card.Text>
                TDS under Section 194R is required to be deducted at the time of credit of such sum to the account of the payee or at the time of payment, whichever is earlier.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Exclusions</Card.Title>
              <Card.Text>
                This provision does not apply to any sum credited or paid before April 1, 2022.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Compliance Responsibilities</Card.Title>
              <Card.Text>
                The person responsible for making the payment needs to deduct TDS and deposit it to the government. PAN details of the payee need to be provided.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Importance of Compliance</Card.Title>
              <Card.Text>
                Complying with the provisions of Section 194R is essential to avoid penal consequences. Non-compliance may lead to disallowance of expenses.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Impact on Recipients</Card.Title>
              <Card.Text>
                Recipients of such benefits or perquisites need to be aware of the TDS deduction, and they should ensure that their PAN details are provided to the payer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Record Keeping</Card.Title>
              <Card.Text>
                Maintaining accurate records of benefits or perquisites provided and TDS deductions is crucial for proper compliance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>

      <section>
      <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Section 194S: TDS on Transfer of Virtual Digital Asset</h2>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Applicability</Card.Title>
              <Card.Text>
                Section 194S of the Income Tax Act, 1961 deals with the deduction of Tax Deducted at Source (TDS) on payments made on the transfer of a Virtual Digital Asset (VDA).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Nature of Payment</Card.Title>
              <Card.Text>
                The section applies to payments made in consideration for the transfer of Virtual Digital Assets.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Threshold Limits</Card.Title>
              <Card.Text>
                No tax shall be deducted under this provision if the consideration is payable by any person (other than a specified person) and its aggregate value does not exceed Rs. 10,000 during the financial year. If the consideration is payable by a specified person, and its aggregate value does not exceed Rs. 50,000 during the financial year.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Specified Person</Card.Title>
              <Card.Text>
                A specified person is defined as: (a) An individual or a Hindu Undivided Family (HUF) whose total sales, gross receipts, or turnover does not exceed Rs. 1 crore in the case of business or Rs. 50 lakhs in the case of a profession, during the financial year immediately preceding the financial year in which the VDA is transferred. (b) An individual or an HUF who does not have any income under the head "Profits and Gains of Business or Profession."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>TDS Rate</Card.Title>
              <Card.Text>
                If the specified conditions are not met, the TDS rate is 1% (plus applicable surcharge and cess).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Time of Deduction</Card.Title>
              <Card.Text>
                TDS under Section 194S is required to be deducted at the time of credit of the sum to the transferor's account or at the time of payment, whichever is earlier.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Compliance Responsibilities</Card.Title>
              <Card.Text>
                The person responsible for making the payment needs to deduct TDS and deposit it to the government. PAN details of the payee need to be provided.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Importance of Compliance</Card.Title>
              <Card.Text>
                Complying with the provisions of Section 194S is essential to avoid penal consequences. Non-compliance may lead to disallowance of expenses.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Record Keeping</Card.Title>
              <Card.Text>
                Maintaining accurate records of VDA transfers and TDS deductions is crucial for proper compliance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>

      <section>
      <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Any Other Income</h2>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Definition</Card.Title>
              <Card.Text>
                "Any Other Income" is a broad category in taxation that encompasses various types of income not specifically classified under other heads like salary, house property, business or profession, capital gains, or other specified sources.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Examples</Card.Title>
              <Card.Text>
                Income sources falling under "Any Other Income" may include lottery winnings, gifts, awards, interest income, etc.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Limits and Exemptions</Card.Title>
              <Card.Text>
                The taxability and exemptions for "Any Other Income" depend on the nature of the income. Some common examples include:
                <ul>
                  <li>Lottery Winnings: Taxable as per the applicable slab rates.</li>
                  <li>Gifts: Gifts received from specified relatives are generally exempt. However, gifts in excess of Rs. 50,000 from non-relatives are taxable.</li>
                  <li>Awards: Certain awards and rewards may be exempt if received in recognized fields.</li>
                  <li>Interest Income: Interest income from savings accounts up to Rs. 10,000 is exempt under Section 80TTA.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Thresholds</Card.Title>
              <Card.Text>
                Different types of "Any Other Income" may have varying thresholds for taxability. For instance, there might be a minimum amount for income from awards to be taxable.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Taxation</Card.Title>
              <Card.Text>
                "Any Other Income" is typically taxed at the applicable slab rates. However, specific exemptions and deductions may apply based on the nature of the income.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Reporting and Compliance</Card.Title>
              <Card.Text>
                Taxpayers are required to report "Any Other Income" in their income tax returns. Accurate reporting and compliance with applicable tax laws are essential.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Professional Advice</Card.Title>
              <Card.Text>
                Due to the diverse nature of "Any Other Income," seeking professional advice can help individuals understand their tax obligations and explore any available exemptions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Record-Keeping</Card.Title>
              <Card.Text>
                Maintaining records of receipts and details related to "Any Other Income" is crucial for accurate reporting during the filing of income tax returns.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>

      <section>
      <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">TDS Rates for Non-Resident Individuals</h2>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 192: Payment of Salary</Card.Title>
              <Card.Text>TDS rates in (%): Normal Slab Rate</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 192A: Payment of accumulated balance of provident fund</Card.Title>
              <Card.Text>TDS rates in (%): 10%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194B: Income by way of winnings from lotteries, etc.</Card.Title>
              <Card.Text>TDS rates in (%): 30%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194BA: Income by way of winnings from any online game</Card.Title>
              <Card.Text>TDS rates in (%): 30%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194BB: Income by way of winnings from horse races</Card.Title>
              <Card.Text>TDS rates in (%): 30%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194E: Payment to non-resident sportsmen/sports association</Card.Title>
              <Card.Text>TDS rates in (%): 20%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194EE: Payment in respect of deposits under National Savings Scheme</Card.Title>
              <Card.Text>TDS rates in (%): 10%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194F: Payment on account of repurchase of unit by Mutual Fund or Unit Trust of India</Card.Title>
              <Card.Text>TDS rates in (%): 20%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194G: Commission, etc., on sale of lottery tickets</Card.Title>
              <Card.Text>TDS rates in (%): 5%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LB: Payment of interest on infrastructure debt fund</Card.Title>
              <Card.Text>TDS rates in (%): 5%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LBA(2): Payment of the nature referred to in Section 10(23FC)(a)</Card.Title>
              <Card.Text>TDS rates in (%): 5%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LBA(2): Payment of the nature referred to in Section 10(23FC)(b)</Card.Title>
              <Card.Text>TDS rates in (%): 10%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LBA(3): Payment of the nature referred to in section 10(23FCA) by business trust to unit holders</Card.Title>
              <Card.Text>TDS rates in (%): 30%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LBB: Investment fund paying an income to a unit holder [other than income which is exempt under Section 10(23FBB)].</Card.Title>
              <Card.Text>TDS rates in (%): 30%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LBC: Income in respect of investment made in a securitisation trust (specified in Explanation of section115TCA)</Card.Title>
              <Card.Text>TDS rates in (%): 30%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LC: Payment of interest by an Indian Company or a business trust in respect of money borrowed in foreign currency under a loan agreement or by way of issue of long-term bonds (including long-term infrastructure bond)</Card.Title>
              <Card.Text>TDS rates in (%): 5 or 4* or 9**</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LD: Payment of interest on rupee denominated bond of an Indian Company or Government securities to a Foreign Institutional Investor or a Qualified Foreign Investor</Card.Title>
              <Card.Text>TDS rates in (%): 5%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 195: Payment of any other sum to a Non-resident</Card.Title>
              <Card.Text>
                a) Income in respect of investment made by a Non-resident Indian Citizen: 20%<br />
                b) Income by way of long-term capital gains referred to in Section 115E in case of a Non-resident Indian Citizen: 10%<br />
                c) Income by way of long-term capital gains referred to in sub-clause (iii) of clause (c) of sub-Section (1) of Section 112: 10%<br />
                d) Income by way of long-term capital gains as referred to in Section 112A: 10%<br />
                e) Income by way of short-term capital gains referred to in Section 111A: 15%<br />
                f) Any other income by way of long-term capital gains [not being long-term capital gains referred to in clauses 10(33), 10(36) and 112A]: 20%<br />
                g) Income by way of interest payable by Government or an Indian concern on moneys borrowed or debt incurred by Government or the Indian concern in foreign currency (not being income by way of interest referred to in Section 194LB or Section 194LC): 20%<br />
                h) Income by way of royalty payable by Government or an Indian concern in pursuance of an agreement made by it with the Government or the Indian concern where such royalty is in consideration for the transfer of all or any rights (including the granting of a licence) in respect of copyright in any book on a subject referred to in the first proviso to sub-section (1A) of Section 115A of the Income-tax Act, to the Indian concern, or in respect of any computer software referred to in the second proviso to sub-section (1A) of Section 115A of the Income-tax Act, to a person resident in India: 20%<br />
                i) Income by way of royalty [not being royalty of the nature referred to point h) above] payable by Government or an Indian concern in pursuance of an agreement made by it with the Government or the Indian concern and where such agreement is with an Indian concern, the agreement is approved by the Central Government or where it relates to a matter included in the industrial policy, for the time being in force, of the Government of India, the agreement is in accordance with that policy: 20%<br />
                j) Income by way of fees for technical services payable by Government or an Indian concern in pursuance of an agreement made by it with the Government or the Indian concern and where such agreement is with an Indian concern, the agreement is approved by the Central Government or where it relates to a matter included in the industrial policy, for the time being in force, of the Government of India, the agreement is in accordance with that policy: 20%
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 193: Interest on securities</Card.Title>
              <Card.Text>
                a) any debentures or securities for money issued by or on behalf of any local authority or a corporation established by a Central, State or Provincial Act: 10%<br />
                b) any debentures issued by a company where such debentures are listed on a recognised stock exchange in accordance with the Securities Contracts (Regulation) Act, 1956 (42 of 1956) and any rules made thereunder: 10%<br />
                c) any security of the Central or State Government (e.g., 8% Saving (Taxable) Bonds, 2003 and 7.75% Saving (Taxable) Bonds, 2018): 10%<br />
                d) interest on any other security: 10%
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194: Dividend</Card.Title>
              <Card.Text>TDS rates in (%): 10%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194A: Income by way of interest other than "Interest on securities"</Card.Title>
              <Card.Text>TDS rates in (%): 10%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194B: Income by way of winnings from lotteries, crossword puzzles, card games and other games of any sort or from gambling or betting of any form or nature whatsoever.</Card.Title>
              <Card.Text>TDS rates in (%): 30%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194BA: Income by way of winnings from any online game</Card.Title>
              <Card.Text>TDS rates in (%): 30%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194BB: Income by way of winnings from horse races</Card.Title>
              <Card.Text>TDS rates in (%): 30%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194C: Payment to contractor/sub-contractor</Card.Title>
              <Card.Text>
                a) HUF/Individuals: 1<br />
                b) Others: 2
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194D: Insurance commission</Card.Title>
              <Card.Text>TDS rates in (%): 10%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194DA: Payment in respect of life insurance policy</Card.Title>
              <Card.Text>TDS rates in (%): 5%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194EE: Payment in respect of deposit under National Savings scheme</Card.Title>
              <Card.Text>TDS rates in (%): 10%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>

      <section>
      <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Other TDS Rates</h2>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194F: Payment on account of repurchase of unit by Mutual Fund or Unit Trust of India</Card.Title>
              <Card.Text>TDS rates in (%): 20%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194G: Commission, etc., on sale of lottery tickets</Card.Title>
              <Card.Text>TDS rates in (%): 5%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194H: Commission or brokerage</Card.Title>
              <Card.Text>TDS rates in (%): 5%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194-I: Rent</Card.Title>
              <Card.Text>
                a) Plant & Machinery: 2%<br />
                b) Land or building or furniture or fitting: 10%
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194-IA: Payment on transfer of certain immovable property other than agricultural land</Card.Title>
              <Card.Text>TDS rates in (%): 1%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194-IC: Payment of monetary consideration under Joint Development Agreements</Card.Title>
              <Card.Text>TDS rates in (%): 10%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194J: Fees for professional or technical services</Card.Title>
              <Card.Text>
                iv) sum paid or payable towards fees for technical services: 2%<br />
                v) sum paid or payable towards royalty in the nature of consideration for sale, distribution or exhibition of cinematographic films: 2%<br />
                vi) Any other sum: 10%
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194K: Income in respect of units payable to resident person</Card.Title>
              <Card.Text>TDS rates in (%): 10%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LA: Payment of compensation on acquisition of certain immovable property</Card.Title>
              <Card.Text>TDS rates in (%): 10%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LBA(1): Business trust shall deduct tax while distributing, any interest received or receivable by it from a SPV or any income received from renting or leasing or letting out any real estate asset owned directly by it, to its unit holders</Card.Title>
              <Card.Text>TDS rates in (%): 10%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LBB: Investment fund paying an income to a unit holder [other than income which is exempt under Section 10(23FBB)]</Card.Title>
              <Card.Text>TDS rates in (%): 10%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LBC: Income in respect of investment made in a securitisation trust (specified in Explanation of section115TCA)</Card.Title>
              <Card.Text>TDS rates in (%): 10%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194M: Payment of commission (not being insurance commission), brokerage, contractual fee, professional fee to a resident person by an Individual or a HUF who are not liable to deduct TDS under section 194C, 194H, or 194J.</Card.Title>
              <Card.Text>Tax shall be deducted under Section 194M with effect from 1/09/2019 when aggregate of sum credited or paid during a financial year exceeds Rs. 50 lakh: 5%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194N: Cash withdrawal during the previous year from one or more account maintained by a person with a banking company, co-operative society engaged in business of banking or a post office</Card.Title>
              <Card.Text>
                iii) in excess of Rs. 1 crore: 2/5%<br />
                iv) in excess of Rs. 20 lakhs*: 2%<br />
                *for those persons who have not filed return of income (ITR) for three previous years immediately preceding the previous year in which cash is withdrawn, and the due date for filing ITR under section 139(1) has expired: 2%
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194O: Payment or credit of amount by the e-commerce operator to e-commerce participants</Card.Title>
              <Card.Text>TDS rates in (%): As per the applicable rates</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>

      <section>
      <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">TDS Rates for Non-Domestic Companies</h2>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194B: Income by way of winnings from lotteries, crossword puzzles, card games and other games of any sort or from gambling or betting of any form or nature whatsoever</Card.Title>
              <Card.Text>TDS rates in (%): 30%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194BA: Income by way of winnings from any online game</Card.Title>
              <Card.Text>TDS rates in (%): 30%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194BB: Income by way of winnings from horse races</Card.Title>
              <Card.Text>TDS rates in (%): 30%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194E: Payment to non-resident sports association</Card.Title>
              <Card.Text>TDS rates in (%): 20%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194G: Commission, etc., on sale of lottery tickets</Card.Title>
              <Card.Text>TDS rates in (%): 5%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LB: Payment of interest on infrastructure debt fund</Card.Title>
              <Card.Text>TDS rates in (%): 5%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LBA(2): Payment of the nature referred to in Section 10(23FC)(a)</Card.Title>
              <Card.Text>TDS rates in (%): 5%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LBA(2): Payment of the nature referred to in Section 10(23FC)(b)</Card.Title>
              <Card.Text>TDS rates in (%): 10%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LBA(3): Business trust shall deduct tax while distributing any income received from renting or leasing or letting out any real estate asset owned directly by it to its unit holders</Card.Title>
              <Card.Text>TDS rates in (%): 40%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LBB: Investment fund paying an income to a unit holder [other than income which is exempt under Section 10(23FBB)]</Card.Title>
              <Card.Text>TDS rates in (%): 40%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LBC: Income in respect of investment made in a securitisation trust (specified in Explanation of section115TCA)</Card.Title>
              <Card.Text>TDS rates in (%): 40%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LC: Payment of interest by an Indian Company or a business trust in respect of money borrowed in foreign currency under a loan agreement or by way of issue of long-term bonds (including long-term infrastructure bond)</Card.Title>
              <Card.Text>TDS rates in (%): 5 or 4* or 9**<br />
              * In case where interest is payable in respect of Long-term Bond or Rupee Denominated Bond listed on recognised stock exchange located in IFSC<br />
              ** Where money borrowed from a source outside India by issuing a long-term bond or rupee-denominated bond on or after 01-04-2023, which is listed only on a recognised stock exchange located in an IFSC</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>

      <section>
      <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Additional TDS Rates</h2>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 194LD: Payment of interest on rupee denominated bond of an Indian Company or Government securities to a Foreign Institutional Investor or a Qualified Foreign Investor</Card.Title>
              <Card.Text>TDS rates in (%): 5%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 195: Payment of any other sum</Card.Title>
              <Card.Text>
                a) Income by way of long-term capital gains referred to in sub-clause (iii) of clause (c) of sub-section (1) of Section 112, TDS rates in (%): 10%<br />
                b) Income by way of long-term capital gains as referred to in Section 112A, TDS rates in (%): 10%<br />
                c) Income by way of short-term capital gains referred to in Section 111A, TDS rates in (%): 15%<br />
                d) Any other income by way of long-term capital gains [not being long-term capital gains referred to in clauses 10(33), 10(36) and 112A, TDS rates in (%): 20%<br />
                e) Income by way of interest payable by Government or an Indian concern on moneys borrowed or debt incurred by Government or the Indian concern in foreign currency (not being income by way of interest referred to in Section 194LB or Section 194LC), TDS rates in (%): 20%<br />
                f) Income by way of royalty payable by Government or an Indian concern in pursuance of an agreement made by it with the Government or the Indian concern after the 31st day of March, 1976 where such royalty is in consideration for the transfer of all or any rights (including the granting of a licence) in respect of copyright in any book on a subject referred to in the first proviso to sub-section (1A) of Section 115A of the Income-tax Act, to the Indian concern, or in respect of any computer software referred to in the second proviso to sub-section (1A) of Section 115A of the Income-tax Act, to a person resident in India, TDS rates in (%): 20%<br />
                g) Income by way of royalty [not being royalty of the nature referred to in point f) above] payable by Government or an Indian concern in pursuance of an agreement made by it with the Government or the Indian concern and where such agreement is with an Indian concern, the agreement is approved by the Central Government or where it relates to a matter included in the industrial policy, for the time being in force, of the Government of India, the agreement is in accordance with that policy—<br />
                &emsp;A. where the agreement is made after the 31st day of March, 1961 but before the 1st day of April, 1976, TDS rates in (%): 50%<br />
                &emsp;B. where the agreement is made after the 31st day of March, 1976, TDS rates in (%): 20%<br />
                h) Income by way of fees for technical services payable by Government or an Indian concern in pursuance of an agreement made by it with the Government or the Indian concern and where such agreement is with an Indian concern, the agreement is approved by the Central Government or where it relates to a matter included in the industrial policy, for the time being in force, of the Government of India, the agreement is in accordance with that policy—<br />
                &emsp;A. where the agreement is made after the 29th day of February, 1964 but before the 1st day of April, 1976, TDS rates in (%): 50%<br />
                &emsp;B. where the agreement is made after the 31st day of March, 1976, TDS rates in (%): 20%<br />
                i) Any other income, TDS rates in (%): 40%
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 196B: Income from units (including long-term capital gain on transfer of such units) to an offshore fund</Card.Title>
              <Card.Text>TDS rates in (%): 10%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 196C: Income from foreign currency bonds or GDR of an Indian company (including long-term capital gain on transfer of such bonds or GDR)</Card.Title>
              <Card.Text>TDS rates in (%): 10%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Section 196D: Income of foreign Institutional Investors from securities (not being dividend or capital gain arising from such securities)</Card.Title>
              <Card.Text>TDS rates in (%): 20% <br />Note: Tax shall be deducted at the rate provided under DTAA if same is lower than the existing TDS rate of 20%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>

      <section>
      <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">TDS Return Filing Procedure</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>1. Understanding TDS:</Card.Title>
              <Card.Text>
                Tax Deducted at Source (TDS) is a mechanism where the person responsible for making specified payments deducts tax at the source and deposits it with the government.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>2. Applicable Acts:</Card.Title>
              <Card.Text>
                The primary acts governing TDS are the Income Tax Act, 1961, and the rules laid down by the Income Tax Department.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>3. TDS Challan Numbers:</Card.Title>
              <Card.Text>
                Various types of payments require different challans for TDS deposit. Common challans include:
                <ul>
                  <li>ITNS 281: For depositing TDS on non-salary payments.</li>
                  <li>ITNS 282: For depositing TDS on sale of property.</li>
                  <li>ITNS 283: For depositing TDS on rent.</li>
                  <li>ITNS 284: For depositing TDS on the purchase of property.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>

      <section>
      <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">TDS Return Filing with Our Expert Services</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>1. Expert Guidance:</Card.Title>
              <Card.Text>
                Our seasoned tax experts bring years of experience to the table. Benefit from their in-depth knowledge of TDS regulations, ensuring accurate and compliant filings.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>2. Seamless Online Filing:</Card.Title>
              <Card.Text>
                Enjoy the convenience of online TDS return filing. We leverage cutting-edge technology to streamline the entire process, making it quick and hassle-free.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>3. Customized Solutions:</Card.Title>
              <Card.Text>
                No two businesses are alike, and neither are their TDS requirements. Our services are tailored to suit your specific needs, ensuring personalized and effective solutions.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>4. Timely Compliance:</Card.Title>
              <Card.Text>
                We understand the importance of adhering to deadlines. With us, you can rest assured that your TDS returns will be filed promptly, avoiding any penalties or unnecessary hassles.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>5. Transparent Processes:</Card.Title>
              <Card.Text>
                Transparency is at the core of our services. We keep you informed at every step, providing clarity on the filing process, document requirements, and compliance measures.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>6. Comprehensive TDS Management:</Card.Title>
              <Card.Text>
                Beyond filing, we offer end-to-end TDS management services. From data collection to TDS certificate generation, we've got you covered.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>7. Stay Updated:</Card.Title>
              <Card.Text>
                Tax regulations evolve, and we make it our business to stay informed. Rely on us to keep you updated on any changes in TDS rules that may impact your business.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>8. Cost-Effective Solutions:</Card.Title>
              <Card.Text>
                Quality services need not come with a hefty price tag. Our cost-effective solutions make professional TDS assistance accessible to businesses of all sizes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>

      <section className="py-5 bg-dark text-light">
        <Container className="text-center">
          <h2 className="mb-4">
          Ready to simplify your TDS return filing? Reach out to us for a consultation. We'll assess your needs, explain our process, and get you on the path to stress-free TDS compliance. 
          </h2>
          <p className="lead mb-4">
          Don't let TDS complexities hold you back. Trust us to navigate the intricacies while you focus on what you do best – growing your business. Contact us today and experience the ease of TDS return filing with expert support! 
          </p>
          <p className="mb-4">
            Trust RSNRMuneemji to simplify the process, ensuring accuracy,
            compliance, and maximum benefit.
          </p>
          <Link
            to="/contact"
            type="button"
            variant="primary"
            size="lg"
            className="app-btn border-0 text-white"
          >
            Contact Us
          </Link>{" "}
          <p className="mt-2">Your financial peace of mind begins with us.</p>
        </Container>
      </section>
    </>
  );
};

export default TDSreturns;
