  import React, { useEffect, useState } from "react";
  import Container from "react-bootstrap/Container";
  import Row from "react-bootstrap/Row";
  import Col from "react-bootstrap/Col";
  import Navbar from "react-bootstrap/Navbar";
  import logo from "../../images/white-logo.png";
  import { Link } from "react-router-dom";
  import { links } from "../../utils/json";
  import {
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaWhatsapp,
  } from "react-icons/fa6";
  const Footercomp = () => {
    const [shuffledLinks, setShuffledLinks] = useState([]);

    useEffect(() => {
      // Fisher-Yates shuffle algorithm
      const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      // Shuffle the links
      const shuffled = shuffleArray(links).slice(0, 5);
      setShuffledLinks(shuffled);
    }, [links]);
    return (
      <Navbar expand="lg" className="pt-5 footerbg">
        <Container>
          <Row className="pt-3 w-100 d-flex justify-content-center align-items-center border-bottom border-white">
        <Col lg={3} className=" text-white">
          <h5>Quick Links</h5>
          <ul className="list-unstyled mt-3">
            {shuffledLinks
              .flatMap(category => category.navLinks)
              .slice(0, 5)
              .map((link, index) => (
                <li key={index} className="mb-2">
                  <Link to={link.url} className="text-decoration-none text-white">
                    {link.text}
                  </Link>
                </li>
              ))}
          </ul>
        </Col>
            <Col lg={3} className="mb-3 text-white">
              <h5 className="mb-4">Contact Us</h5>
              <p>Sudama Nagar.</p>
              {/* <p>City, Country</p> */}
              <p>Email: rsnrmuneemji@gmail.com</p>
              <p>Phone: +91 9993217983</p>
              <div className="icon-text d-flex align-items-center ">
                <div className="icon-box">
                  <span>
                    <a
                      href="https://www.facebook.com/profile.php?id=100089924814105"
                      className="text-decoration-none text-white"
                    >
                      <FaFacebookF />
                    </a>
                  </span>
                  <span>
                  <a
                      href="https://chat.whatsapp.com/J5QaO1gkGUVHPvijMi2J0V"
                      className="text-decoration-none text-white"
                    >
                    <FaWhatsapp /></a>
                  </span>
                  <span>
                    <a
                      href="https://www.linkedin.com/company/99167514/admin/feed/posts/"
                      className="text-decoration-none text-white"
                    >
                      <FaLinkedin />
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.instagram.com/rsnrmuneemji?igsh=NWVhMXdkMzhjbG8w"
                      className="text-decoration-none text-white"
                    >
                      <FaInstagram />
                    </a>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={3} className="mb-3 text-white text-left">
              <img src={logo} alt="" style={{ width: "180px" }} className="mb-3" />
              <div>
                <p>
                  At RSNRMuneemji, our mission is to be your one-stop destination
                  for all things accounting and taxation. We're committed to
                  ensuring that no one is left behind due to financial
                  complexities. With our comprehensive services under one roof, we
                  empower you to thrive.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  };

  export default Footercomp;
