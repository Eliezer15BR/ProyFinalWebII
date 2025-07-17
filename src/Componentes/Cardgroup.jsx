import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Grupo() {
  return (
    <CardGroup className='grupo w-75'>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtMAfQkd_crMUnE0x3Ci4X4f0TRcnllgwRg&s/100px160"style={{ width: "100%", height: "400px", objectFit: "cover" }} />
        <Card.Body className='bg-dark text-white'>
          <Card.Title>ENIAC</Card.Title>
          <Card.Text className='fs-5'>
          El ENIAC es uno de los primeros computadores de propósito general desarrollados en los Estados Unidos en 1945. Esta máquina monumental, que ocupaba una gran sala, fue diseñada para realizar cálculos balísticos para el ejército de los Estados Unidos durante la Segunda Guerra Mundial. Aunque no tenía un "software" como lo entendemos hoy, los programas para el ENIAC se escribían en tarjetas perforadas y cables, lo que representa uno de los primeros intentos de programación de computadoras. La imagen del ENIAC destaca cómo el hardware y los primeros intentos de programación dieron lugar a la necesidad de software especializado.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdie7zOft6MkfQ9_8c6XXK9X7zk6SM7QvMg&s" style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
        <Card.Body className='bg-dark text-white'>
          <Card.Title>FORTRAN</Card.Title>
          <Card.Text className='fs-5'>
          FORTRAN (Formula Translation) fue uno de los primeros lenguajes de programación de alto nivel, desarrollado en los años 50 por IBM. Es particularmente importante en la historia del software porque permitió a los programadores escribir código de manera mucho más eficiente y comprensible, sin tener que escribir instrucciones en lenguaje de máquina o ensamblador. Este lenguaje abrió las puertas para el desarrollo de software más avanzado, especialmente en áreas como la ingeniería, la matemática y la ciencia. Las imágenes que muestran a programadores usando FORTRAN o las primeras versiones de su compilador reflejan el cambio hacia un software más accesible y poderoso.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.betaarchive.com/imageupload/2014-01/1390069477.or.18244.png" style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
        <Card.Body className='bg-dark text-white'>
          <Card.Title>Windows 95 o MS-DOS</Card.Title>
          <Card.Text className='fs-5'>
          El lanzamiento de Windows 95 en 1995 marcó un hito en la historia del software, ya que ofreció una interfaz gráfica de usuario (GUI) más accesible y visualmente atractiva para el usuario común. Fue un cambio radical respecto a su predecesor, MS-DOS, un sistema operativo basado en texto que requería que los usuarios escribieran comandos manualmente. La transición de MS-DOS a Windows 95 permitió a millones de personas usar computadoras personales de manera más intuitiva, y esta imagen captura la popularización de los sistemas operativos con interfaz gráfica que dominan la informática personal hasta hoy.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
  );
}

export default Grupo;