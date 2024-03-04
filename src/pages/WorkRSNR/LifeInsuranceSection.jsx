import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import stud from "../../images/studinc/logo sud.png"
import stud1 from "../../images/studinc/stud1.jpeg"
import stud2 from "../../images/studinc/stud2.jpeg"
import stud3 from "../../images/studinc/stud3.jpeg"
import stud4 from "../../images/studinc/stud4.jpeg"

const LifeInsuranceSection = () => {
  const images = [
    {
      id: 1,
      imageUrl: stud,
      altText: "Image 1",
    },
    {
      id: 2,
      imageUrl: stud1,
      altText: "Image 2",
    },
    {
      id: 3,
      imageUrl: stud2,
      altText: "Image 3",
    },
    {
      id: 4,
      imageUrl: stud3,
      altText: "Image 4",
    },
    {
      id: 5,
      imageUrl: stud4,
      altText: "Image 5",
    },
  ];
  return (
    <>
    
    
    <Container className="py-5">
      <h2 className="text-center mb-5">SUD Life Insurance</h2>
      <Row className="mb-5">
        <Col>
          <p>
            You're in a good place today. Your family's happy. Work is going
            well. Everything seems to be going according to plan. But, like they
            say, the only thing you can be sure about in life is its
            unpredictability.
          </p>
          <p>
            With life insurance, you can ensure that your loved ones are taken
            care of in case something unexpected happens tomorrow. So, do the
            smart thing. Invest in the future of those who mean the world to
            you. There’s immense peace of mind in knowing you’ve got them
            covered.
          </p>
        </Col>
      </Row>
    </Container>

    <section>
         <Container className="py-5">
      <h2 className="text-center mb-4">Image Gallery</h2>
      <Row>
        {images.map(image => (
          <Col key={image.id} xs={12} md={4} lg={3} className="mb-4">
            <Card>
              <img src={image.imageUrl} alt={image.altText} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </section>
    </>
  );
};

export default LifeInsuranceSection;
