import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import icon from "../assests/iconimg.png"

const Services = () => {
  return (
    <>
      <section className="bg-light my-5 py-5">
        <Container>
          <Row className="text-center">
            <Col >
              <h1 className="themetext2 fw-bold ">Our Services</h1>
              <div style={{ width: "100px" }} className="m-auto">
                  <hr className="border-5 themetext2 "/>
                </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center pt-5">
            <Col xs={12} sm={6} md={4}>
              <Card style={{ width: "25rem" }} className="shadow">
                <Card.Body className="text-center">
                <Card.Img variant="top" src={icon} style={{height:"50px",width:"50px"}}/>
                  <Card.Title className="mt-2">Start my Business</Card.Title>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fuga soluta atque dolore, facilis, corrupti recusandae dolores quae repellendus possimus rerum quia? Sapiente atque, veritatis aperiam iusto ut architecto laborum.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card style={{ width: "25rem" }} className="shadow">
                <Card.Body className="text-center">
                <Card.Img variant="top" src={icon} style={{height:"50px",width:"50px"}} />
                  <Card.Title className="mt-2">Business and Tax Registration</Card.Title>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fuga soluta atque dolore, facilis, corrupti recusandae dolores quae repellendus possimus rerum quia? Sapiente atque, veritatis aperiam iusto ut architecto laborum.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card style={{ width: "25rem" }} className="shadow">
                <Card.Body className="text-center">
                <Card.Img variant="top" src={icon} style={{height:"50px",width:"50px"}} />
                  <Card.Title className="mt-2">GST</Card.Title>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fuga soluta atque dolore, facilis, corrupti recusandae dolores quae repellendus possimus rerum quia? Sapiente atque, veritatis aperiam iusto ut architecto laborum.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center py-5">
            <Col xs={12} sm={6} md={4}>
              <Card style={{ width: "25rem" }} className="shadow">
                <Card.Body className="text-center">
                <Card.Img variant="top" src={icon} style={{height:"50px",width:"50px"}}/>
                  <Card.Title className="mt-2">Intellectual Property Rights</Card.Title>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fuga soluta atque dolore, facilis, corrupti recusandae dolores quae repellendus possimus rerum quia? Sapiente atque, veritatis aperiam iusto ut architecto laborum.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card style={{ width: "25rem" }} className="shadow">
                <Card.Body className="text-center">
                <Card.Img variant="top" src={icon} style={{height:"50px",width:"50px"}}/>
                  <Card.Title className="mt-2">Startup Advisory</Card.Title>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fuga soluta atque dolore, facilis, corrupti recusandae dolores quae repellendus possimus rerum quia? Sapiente atque, veritatis aperiam iusto ut architecto laborum.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card style={{ width: "25rem" }} className="shadow">
                <Card.Body className="text-center">
                <Card.Img variant="top" src={icon} style={{height:"50px",width:"50px"}} />
                  <Card.Title className="mt-2">Foreign Investment in India</Card.Title>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fuga soluta atque dolore, facilis, corrupti recusandae dolores quae repellendus possimus rerum quia? Sapiente atque, veritatis aperiam iusto ut architecto laborum.
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

export default Services;
