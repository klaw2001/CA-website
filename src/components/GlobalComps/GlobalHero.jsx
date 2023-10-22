import React from "react";
import { Container } from "react-bootstrap";

const GlobalHero = ({heading}) => {
  return (
    <>
      <div className="other-hero-wrapper">
        <Container>
          <div className="other-box d-flex flex-column justify-content-center align-items-center h-75">
            <h2 className="text-light global-hero-heading">{heading}</h2>
          </div>
        </Container>
      </div>
    </>
  );
};

export default GlobalHero;
