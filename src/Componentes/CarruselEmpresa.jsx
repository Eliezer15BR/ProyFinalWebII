import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarruselEmpresa(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carrEmp'>
      <Carousel.Item>
        <center>
        <img src={props.img2} style={{ height: "300px", objectFit: "cover"}} />
        </center>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <center>
        <img src={props.img3} style={{ height: "300px", objectFit: "cover" }}/>
        </center>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <center>
        <img src={props.img4} style={{ height: "300px", objectFit: "cover" }}/>
        </center>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      
      
    </Carousel>

  );
}

export default CarruselEmpresa;