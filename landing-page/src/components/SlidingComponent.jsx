import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SlidingComponent.css';

const CarouselComponent = () => {
  return (
    <Carousel interval={2000} className="carousel-custom">
      <Carousel.Item>
        <div className="carousel-text">
          <h3>First Slide Label</h3>
          <p>Some description for the first slide.</p>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-text">
          <h3>Second Slide Label</h3>
          <p>Some description for the second slide.</p>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-text">
          <h3>Third Slide Label</h3>
          <p>Some description for the third slide.</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
