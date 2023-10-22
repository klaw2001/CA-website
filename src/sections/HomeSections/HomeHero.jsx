import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";

const HomeHero = () => {
  return (
    <section>
      <div className="hero-wrapper py-5">
        <Container>
          <div className="carousel-text text-light p-5">
            <h3 className="text-primary mb-3">Need Any Help</h3>
            <h1 className="my-4">We Fight For Your Right</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              beatae vero consequuntur neque quasi? Reiciendis?
            </p>
            <Button variant="primary" className="border-0 rounded-0 mt-2">
              Get Started
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HomeHero;
