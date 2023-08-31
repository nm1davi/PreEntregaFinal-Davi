import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 import { CartWidget } from "../cartwidget/CartWidget";
 import imagevino from "../../assets/img/logo.png";
import "./NavBar.css"

export const NavBar = () => (
      <div className='contenedor'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <div className='logo'>
          <img className='ImagenLogo' src={imagevino} alt="Logo del vino" />
          <div className='nombreLocal'>
          <Navbar.Brand href="#home">MendoVino</Navbar.Brand>
          </div>
          </div>
          <div className='categorias'>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/categoria/Blend">Blends</Nav.Link>
            <Nav.Link href="/categoria/Cabernet Sauvignon">Cabernet Sauvignon</Nav.Link>
            <Nav.Link href="/categoria/Chardonnay">Chardonnay</Nav.Link>
            <Nav.Link href="/categoria/Malbec">Malbec</Nav.Link>
            <Nav.Link href="/categoria/Pinot">Pinot</Nav.Link>
            <Nav.Link href="/categoria/Sauvignon Blanc">SauvignonBlanc</Nav.Link>
          </Nav>
          </div>
          <div className='carrito'>
          <CartWidget />
          </div>
        </Container>
      </Navbar>
      </div>
);



                  