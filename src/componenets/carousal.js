import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import image1 from '../assets/image1.png';
import image3 from '../assets/image3.png';

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