import React from "react";
import { Card, Container } from "react-bootstrap";

const ScrollToContent = ({ pages , isVisible }) => {
  return (
    <>
      <section className={`position-absolute mt-5 end-0 ${isVisible ? 'd-block' : 'd-none'}`}>
        <Container>
          <Card className="border-0 p-2">
            <h6>Contents in this Page :</h6>
            <ol className="p-0">
              {pages.map((page, index) => (
                <li key={index}>
                  <a href={page.href} className="text-dark">{page.title}</a>
                </li>
              ))}
            </ol>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default ScrollToContent;
