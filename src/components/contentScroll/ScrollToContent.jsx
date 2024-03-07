import React from "react";
import { Card, Container } from "react-bootstrap";

const ScrollToContent = ({ pages , isVisible , toggleVisibility}) => {
  return (
    <>
      <section className={`position-absolute mt-5 end-0 ${isVisible ? 'd-block' : 'd-none'}`}>
        <Container>
          <Card>
            <h6>Contents in this Page</h6>
            <ul>
              {pages.map((page, index) => (
                <li key={index}>
                  <a href={page.href} className="text-dark">{page.title}</a>
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default ScrollToContent;
