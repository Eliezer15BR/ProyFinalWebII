import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffC(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='boton'>
        {props.titulo}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.titulo}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-black text-white'>
          <p>{props.texto}</p>
          <p>{props.texto1}</p>
          <p>{props.texto2}</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffC;