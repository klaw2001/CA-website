import React from "react";
import GlobalHero from "../../components/GlobalComps/GlobalHero";
import { Col, Container, Row } from "react-bootstrap";
import acc from "../../images/gst.svg";
import { Percent } from "lucide-react";
const GstAndIndirectTax = () => {
  const gstBenefits = [
    {
      title: "Simplification",
      details:
        "GST simplifies the taxation process by eliminating the cascading effect of taxes, where taxes were levied on taxes. Under the GST regime, taxes are calculated only on the value added at each stage of the supply chain, reducing complexity and promoting transparency.",
      icon: <Percent size={40} />,
    },
    {
      title: "Transparency and Accountability",
      details:
        "GST promotes transparency by providing a clear audit trail of taxes paid and received. This not only minimizes the scope for tax evasion but also enhances accountability within the taxation system.",
      icon: <Percent size={40} />,
    },
    {
      title: "Reduction in Tax Burden",
      details:
        "GST often results in a lower overall tax burden for consumers due to the elimination of double taxation. This benefits businesses and individuals alike.",
      icon: <Percent size={40} />,
    },
    {
      title: "Business Growth",
      details:
        "GST fosters a business-friendly environment by reducing compliance requirements, enabling seamless inter-state trade, and creating a level playing field for businesses of all sizes.",
      icon: <Percent size={40} />,
    },
  ];

  return (
    <>
      <GlobalHero heading="Gst And Indirect Tax" />
      <section>
        <Container>
          <Row className="align-items-center row-cols-1 row-cols-lg-2 justify-content-center">
            <Col className="order-1">
              <h5 className="">
                In the ever-evolving landscape of taxation, one term that has
                gained prominence in recent years is Goods and Services Tax
                (GST). Designed to revolutionize the way taxes are levied and
                collected, GST has reshaped the financial landscape of countries
                that have adopted this modern taxation system. This
                comprehensive guide aims to unravel the complexities of GST,
                elucidate its significance, and shed light on how it differs
                from the taxation systems of the past. If you're seeking clarity
                on GST and its implications for your business or personal
                finances, you're in the right place. Goods and Services Tax,
                commonly known as GST, is a consumption-based tax levied on the
                supply of goods and services. Unlike traditional tax systems,
                GST is designed to be more comprehensive and efficient. It aims
                to streamline and unify various indirect taxes into a single,
                transparent, and accountable system.
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
          <h2>
            Now, let's delve into why GST holds such significance in the
            financial world. There are several key aspects that make GST a
            game-changer:{" "}
          </h2>

          <Row className="g-4 justify-content-center mt-2 pb-5">
            {gstBenefits.map((document, index) => (
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
          <Row>
            <Col>
              <h2 className="mb-2">
                Differing from Previous Taxation Systems:
              </h2>
              <ol>
                <li>
                  <strong>Single Tax vs. Multiple Taxes:</strong>
                  <p>
                    Unlike earlier systems that imposed multiple taxes like
                    excise, VAT, and service tax, GST replaces these with a
                    single tax, unifying the tax structure.
                  </p>
                </li>
                <li>
                  <strong>Input Tax Credit:</strong>
                  <p>
                    GST allows businesses to claim input tax credit on taxes
                    paid for inputs and services used, which helps in reducing
                    the tax cascading effect.
                  </p>
                </li>
                <li>
                  <strong>Clear Taxation Structure:</strong>
                  <p>
                    GST provides a standardized and clear tax structure with
                    defined tax rates for different categories of goods and
                    services, making it simpler to understand and apply.
                  </p>
                </li>
              </ol>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-4">
          <Row>
            <Col>
              <h2>Understanding the Structure of GST:</h2>
              <p>
                GST is structured in a way that streamlines the taxation process
                and eliminates the cascading effect of multiple taxes. Here are
                the key components of the GST structure:
              </p>
              <ol>
                <li>
                  <strong>CGST (Central Goods and Services Tax):</strong>
                  <ul>
                    <li>
                      CGST is the tax collected by the Central Government on
                      intra-state supplies of goods and services.
                    </li>
                    <li>
                      This revenue goes to the central government's coffers.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>SGST (State Goods and Services Tax):</strong>
                  <ul>
                    <li>
                      SGST is the tax collected by the State Government on
                      intra-state supplies of goods and services.
                    </li>
                    <li>
                      This revenue goes to the state government's treasury.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>IGST (Integrated Goods and Services Tax):</strong>
                  <ul>
                    <li>
                      IGST is the tax levied on inter-state supplies of goods
                      and services.
                    </li>
                    <li>
                      It is collected by the central government and then
                      distributed to the concerned states.
                    </li>
                  </ul>
                </li>
              </ol>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Applicability of GST:</h2>
              <p>
                GST applies to a wide range of goods and services. It
                encompasses nearly all sectors and industries, making it a
                comprehensive taxation system. Some key points about the
                applicability of GST include:
              </p>
              <ul>
                <li>
                  GST is applicable to the supply of goods or services in India.
                </li>
                <li>
                  It is levied on both goods and services, except for a few
                  items that fall under the exempt or non-GST category.
                </li>
                <li>
                  GST applies to businesses with a turnover exceeding a
                  specified threshold, and they are required to register and
                  comply with GST regulations.
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Different GST Rates:</h2>
              <p>
                One of the unique features of GST is the multiple tax rates it
                employs. These rates are categorized as follows:
              </p>
              <ol>
                <li>
                  <strong>SGST/CGST at 5%:</strong> Applicable to essential
                  items like basic food items, healthcare, and transportation
                  services.
                </li>
                <li>
                  <strong>SGST/CGST at 12%:</strong> Applicable to items such as
                  processed food, computers, and certain services.
                </li>
                <li>
                  <strong>SGST/CGST at 18%:</strong> Covers a broad range of
                  goods and services, including most consumer goods and standard
                  services.
                </li>
                <li>
                  <strong>SGST/CGST at 28%:</strong> The highest tax rate,
                  applicable to luxury items, premium services, and some sin
                  goods like tobacco and aerated drinks.
                </li>
                <li>
                  <strong>IGST:</strong> The rate for inter-state transactions
                  is typically the sum of the CGST and SGST rates of the
                  destination state.
                </li>
              </ol>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col md={10}>
              <h2 className="mb-4 text-center">
                Understanding Supply under GST
              </h2>
              <p className="lead">
                Section 7 of the CGST Act, 201 provides a comprehensive
                definition of "supply" under the Goods and Services Tax (GST)
                regime in India. Let's simplify this complex concept:
              </p>
              <h3 className="mt-5">What "Supply" Includes:</h3>
              <ul>
                <li>
                  All Forms of Supply:
                  <ul>
                    <li>
                      Covering various transactions involving goods or services,
                      such as selling, transferring, renting, or disposing, with
                      payment involved and part of business activities.
                    </li>
                  </ul>
                </li>
                <li>
                  Transactions Between People:
                  <ul>
                    <li>
                      Transactions between entities and their members or
                      constituents, regardless of monetary involvement.
                    </li>
                  </ul>
                </li>
                <li>
                  Import of Services:
                  <ul>
                    <li>
                      Bringing in services from another country with payment
                      involved.
                    </li>
                  </ul>
                </li>
                <li>
                  Activities Without Payment:
                  <ul>
                    <li>
                      Specific activities mentioned in Schedule I, even without
                      monetary transactions.
                    </li>
                  </ul>
                </li>
              </ul>
              <h3 className="mt-5">
                How to Classify Activities or Transactions:
              </h3>
              <p>
                Activities or transactions fitting the criteria can be
                classified as supplies of goods or services based on rules set
                out in Schedule II.
              </p>
              <h3 className="mt-5">Exceptions:</h3>
              <ul>
                <li>
                  Activities in Schedule III:
                  <ul>
                    <li>
                      Activities or transactions mentioned in Schedule III are
                      not considered supplies of goods or services for GST
                      purposes.
                    </li>
                  </ul>
                </li>
                <li>
                  Government Activities:
                  <ul>
                    <li>
                      Certain activities by governmental bodies might not be
                      counted as supplies, subject to notifications.
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="mt-4">
                The definition of "supply" under the GST Act is broad,
                encompassing various transactions, especially those involving
                business activities and payments, as well as specific scenarios
                outlined in the schedules. Understanding these definitions is
                crucial for GST compliance.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col md={10}>
              <h2 className="mb-4 text-center">
                Understanding Supply under GST: Schedules
              </h2>
              <h3>
                Schedule I: Activities Treated as Supply Even Without
                Consideration
              </h3>
              <ol>
                <li>
                  Transfer or Disposal of Business Assets:
                  <ul>
                    <li>
                      If a business permanently transfers or disposes of its
                      assets on which it has previously claimed a tax credit,
                      it's considered a supply, regardless of payment.
                    </li>
                  </ul>
                </li>
                <li>
                  Supply Between Related or Distinct Persons:
                  <ul>
                    <li>
                      Goods or services moving between related entities or
                      distinct businesses are treated as supplies if part of
                      their business activities. Small gifts from an employer to
                      an employee are exempt if valued up to Rs. 50,000
                      annually.
                    </li>
                  </ul>
                </li>
                <li>
                  Supply Between a Principal and an Agent:
                  <ul>
                    <li>
                      When a principal provides goods to an agent for supply or
                      the agent receives goods on behalf of the principal, it's
                      considered a supply.
                    </li>
                  </ul>
                </li>
                <li>
                  Import of Services from a Related Person Abroad:
                  <ul>
                    <li>
                      Bringing in services from a related entity outside India
                      as part of business activities counts as a supply.
                    </li>
                  </ul>
                </li>
              </ol>
              <h3 className="mt-5">
                Schedule II: Activities Treated as Supply of Goods or Services
              </h3>
              <p>
                The GST Act specifies when an activity or transaction is
                considered a supply of goods or services under GST:
              </p>
              <ol>
                <li>
                  Transfer:
                  <ul>
                    <li>
                      If there's a transfer of title in goods, it's a supply of
                      goods; if there's a transfer of rights in goods without
                      transferring the title, it's a supply of services.
                    </li>
                  </ul>
                </li>
                <li>
                  Land and Building:
                  <ul>
                    <li>
                      Leasing, tenancy, or licensing to occupy land is a supply
                      of services; leasing out a building for business is also a
                      supply of services.
                    </li>
                  </ul>
                </li>
                <li>
                  Treatment or Process:
                  <ul>
                    <li>
                      Applying a treatment or process to another person's goods
                      is a supply of services.
                    </li>
                  </ul>
                </li>
                <li>
                  Transfer of Business Assets:
                  <ul>
                    <li>
                      If goods that were part of a business's assets are
                      transferred or disposed of under the business owner's
                      direction, it's a supply of goods.
                    </li>
                    <li>
                      If goods held or used for business purposes are used for
                      private reasons or made available for non-business
                      purposes under the business owner's direction, it's a
                      supply of services.
                    </li>
                    <li>
                      When a person ceases to be a taxable person, any goods
                      from their business assets are considered supplied unless
                      the business is transferred as a going concern.
                    </li>
                  </ul>
                </li>
                <li>
                  Supply of Services:
                  <ul>
                    <li>Renting immovable property is a supply of services.</li>
                    <li>
                      Constructing a complex, building, or civil structure
                      intended for sale is a supply of services, except when the
                      entire payment is received after the completion
                      certificate is issued.
                    </li>
                    <li>
                      Temporary transfer or allowing the use of intellectual
                      property is a supply of services.
                    </li>
                    <li>
                      Development, design, programming, customization, and other
                      IT software activities are supplies of services.
                    </li>
                    <li>
                      Agreements to refrain from or tolerate specific acts fall
                      under the supply of services.
                    </li>
                    <li>
                      Transferring the right to use goods for any purpose,
                      whether for a specified period or not, is a supply of
                      services.
                    </li>
                  </ul>
                </li>
                <li>
                  Composite Supply:
                  <ul>
                    <li>
                      Works contracts and the supply of goods for human
                      consumption are treated as supplies of services in
                      specific situations.
                    </li>
                  </ul>
                </li>
              </ol>
              <h3>Schedule III: Activities Neither Considered Supply of Goods nor Supply of Services</h3>
          <p>
            The GST framework in India defines certain activities or transactions that are neither considered supplies of goods nor services. Here are the exceptions simplified:
          </p>
          <ol>
            <li>
              Services by an Employee to the Employer:
              <ul>
                <li>When an employee performs services related to their employment, it's not considered a supply.</li>
              </ul>
            </li>
            <li>
              Services by Courts or Tribunals:
              <ul>
                <li>Services provided by any court or tribunal established under current laws are not supplies.</li>
              </ul>
            </li>
            <li>
              Public Office Duties:
              <ul>
                <li>Services performed by elected officials, like Members of Parliament, State Legislatures, and local authority members, as well as those holding constitutional posts, aren't counted as supplies.</li>
                <li>This also applies to duties performed by Chairpersons or Members of government-established bodies.</li>
              </ul>
            </li>
            <li>
              Funeral, Burial, Crematorium Services:
              <ul>
                <li>Services related to funerals, burials, crematoriums, and the transportation of the deceased are not considered supplies.</li>
              </ul>
            </li>
            <li>
              Sale of Land and Buildings:
              <ul>
                <li>The sale of land and buildings is excluded from the definition of supplies, subject to specific conditions.</li>
              </ul>
            </li>
            <li>
              Actionable Claims (Excluding Lottery, Betting, and Gambling):
              <ul>
                <li>Activities involving actionable claims don't qualify as supplies, unless they relate to lottery, betting, or gambling.</li>
              </ul>
            </li>
            <li>
              Supply of Goods in Non-Taxable Territory:
              <ul>
                <li>Goods moving from one place in a non-taxable territory to another without entering India aren't treated as supplies.</li>
              </ul>
            </li>
            <li>
              Supply of Warehoused Goods:
              <ul>
                <li>Supply of goods from a warehouse before clearance for home consumption, as well as goods dispatched from a foreign port but not yet cleared for home consumption, are not considered supplies.</li>
              </ul>
            </li>
          </ol>
          <h4 className="mt-5">GST Registration</h4>
          <p>Under GST law, any business involved in the supply of goods or services must register for GST. This applies to individuals, partnerships, companies, and other forms of business entities.</p>
          <h4>Eligibility Criteria:</h4>
          <ul>
            <li>Mandatory Registration: You must register for GST if your aggregate turnover exceeds the prescribed threshold limit. This threshold varies for different categories of states and union territories.</li>
            <li>Voluntary Registration: Even if your turnover is below the threshold, you can opt for voluntary registration. This can be advantageous, as it allows you to claim input tax credit, expand your business, and comply with GST regulations.</li>
          </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default GstAndIndirectTax;
