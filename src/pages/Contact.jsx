import React from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import GlobalHero from "../components/GlobalComps/GlobalHero";
import Newsletter from "../sections/NewsletterSection/Newsletter";

const Contact = () => {
  return (
    <>
      <GlobalHero heading="Contact" />
      <Newsletter />
    </>
  );
};

export default Contact;
