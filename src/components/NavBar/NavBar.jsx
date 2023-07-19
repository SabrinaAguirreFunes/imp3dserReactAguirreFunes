import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img className="logoNavBar" src="/img/logo.png" alt="logo" />
            Imp3D - Servicios de impresiones
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/aboutUs">Nosotros</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/process">Proceso</Link>
            </Nav.Link>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/category/hotTrending">Hot Trending</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/category/traditional">Línea tradicional</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/customized">Línea personalizada</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/cart">
                <CartWidget />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
