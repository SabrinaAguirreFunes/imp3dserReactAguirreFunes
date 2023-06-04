import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
                <img className="logoNavBar" src='/img/logo.png' alt='logo'/>
                    Imp3D - Servicios de impresiones
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#aboutUs">Nosotros</Nav.Link>
                <Nav.Link href="#process">Proceso</Nav.Link>
                <NavDropdown title="Products" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#hotTrending">Hot Trending</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#traditional">Línea tradicional</NavDropdown.Item>
                  <NavDropdown.Item href="#customized">Línea personalizada</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#cart"><CartWidget/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBar