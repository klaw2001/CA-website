import React from "react";
import { Carousel, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyCarousel() {
  return (
    <div>
      <Carousel>
        {/* First Slide */}
        <Carousel.Item>
          <div className="carousel-text text-light">
            <Container>
              <div className="px-5">
                <h3 className="text-white mb-3">
                  Say goodbye to accounting headaches!
                </h3>
                <h1 className="my-4">
                  Our comprehensive services streamline your financial
                  processes, making accounting a breeze in today's complex
                  world.
                </h1>
                <Button className="themebg border-0 rounded-0 py-2 px-5">
                  <Link
                    to="/accounting-and-bookkeeping"
                    className="text-decoration-none text-white"
                  >
                    Get Started
                  </Link>
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <div className="carousel-text carousel-text-2 text-light">
            <Container>
              <div className="px-5">
                <h3 className="text-white mb-3">
                  Seamless Tax Filing Solutions:
                </h3>
                <h1 className="my-4">
                  Simplify GST and Income Tax returns effortlessly with our
                  expert services!
                </h1>
                <Button className="themebg border-0 rounded-0 py-2 px-5">
                  <Link
                    to="/gst-returns"
                    className="text-decoration-none text-white"
                  >
                    Get Started
                  </Link>
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
          <div className="carousel-text carousel-text-3 text-light">
            <Container>
              <div className="px-5">
                <h3 className="text-white mb-3">
                  Unlock Opportunities with Confidence:
                </h3>
                <h1 className="my-4">
                  Navigate licensing and secure loans seamlessly with our expert
                  guidance by your side!
                </h1>
                <Button className="themebg border-0 rounded-0 py-2 px-5">
                  <Link
                    to="/loan-rsnr"
                    className="text-decoration-none text-white"
                  >
                    Get Started
                  </Link>
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
