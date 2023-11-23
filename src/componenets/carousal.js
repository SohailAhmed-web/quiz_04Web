import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image3 from '../images/bus.png';

function Slides() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* Center the Image and make it responsive */}
        <Image src={image1} alt="First slide" fluid className="mx-auto d-block" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* Center the Image and make it responsive */}
        <Image src={image3} alt="Second slide" fluid className="mx-auto d-block" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;