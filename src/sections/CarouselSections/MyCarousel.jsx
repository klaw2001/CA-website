import Carousel from "react-bootstrap/Carousel";
import { Button, Container } from "react-bootstrap";

function MyCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="carousel-text text-light">
            <Container>
              <div className="px-5">
                <h3 className="text-white mb-3">Need Any Help</h3>
                <h1 className="my-4">We Fight For Your Right</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  beatae vero consequuntur neque quasi? Reiciendis
                </p>
                <Button className="themebg border-0 rounded-0 py-2 px-5">
                  Get Started
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-text carousel-text-2 text-light">
            <Container>
              <div className="px-5">
                <h3 className="text-white mb-3">Need Any Help</h3>
                <h1 className="my-4">We Fight For Your Right</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  beatae vero consequuntur neque quasi? Reiciendis
                </p>
                <Button className="themebg border-0 rounded-0 py-2 px-5">
                  Get Started
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-text carousel-text-3 text-light">
            <Container>
              <div className="px-5">
                <h3 className="text-white mb-3">Need Any Help</h3>
                <h1 className="my-4">We Fight For Your Right</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  beatae vero consequuntur neque quasi? Reiciendis
                </p>
                <Button className="themebg border-0 rounded-0  py-2 px-5">
                  Get Started
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
