import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 home__image"
          src="https://m.media-amazon.com/images/I/61vFcsM04CL._SX3000_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home__image"
          src="https://m.media-amazon.com/images/I/71vdTR50hFL._SX3000_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home__image"
          src="https://m.media-amazon.com/images/I/61ekg2iWqXL._SX3000_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
