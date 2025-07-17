import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
function Navegador(props) {
  return (
    <Navbar expand="lg" className="nav" >
      <Container className='contenido'>
      <Image src="logo.jfif" width="50" className='logo'roundedCircle />
        <Navbar.Brand  className='titulo'  > <Link to="/">Empresas de Software </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link > <Link to="/about">Historia</Link></Nav.Link>
            <NavDropdown title="Global" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/microsoft">Microsoft</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/google">Google</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ibm">IBM</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/oracle"> Oracle</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/adobe">Adobe</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Latinoamerica" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/globant">Globant</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/totvs">Totvs</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;