import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carru() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carrusel'>
      <Carousel.Item>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png?20230221160917" style={{ height: "300px", objectFit: "cover" }}/>
        
        <Carousel.Caption>
          <h3>MICROSOFT</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png?20160213081640" style={{ height: "300px", objectFit: "cover" }}/>
        <Carousel.Caption>
          <h3>GOOGLE</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png?20220104162604" style={{ height: "300px", objectFit: "cover" }}/>
        <Carousel.Caption>
          <h3>IBM</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Oracle_Logo.svg/640px-Oracle_Logo.svg.png" style={{ height: "300px", objectFit: "cover"}}/>
        <Carousel.Caption>
          <h3>ORACLE</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        < img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/512px-Adobe_Corporate_logo.svg.png" style={{ height: "300px", objectFit: "cover" }}/>
        <Carousel.Caption>
          <h3>ADOBE</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        < img src="https://companieslogo.com/img/orig/TOTS3.SA_BIG.D-b21debeb.png?t=1720244494" style={{ height: "300px", objectFit: "cover" }}/>
        <Carousel.Caption>
          <h3>TOTVS</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        < img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROVlAVAbrZBMqM0wnZnU0VNvQmyOme02csyA&s" style={{ height: "300px", objectFit: "cover" }}/>
        <Carousel.Caption>
          <h3>GLOBANT</h3>
          <p>Latinoamerica</p>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default Carru;