import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar className='menu'>
      <div><img src="" alt="logo" /></div>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#productos">Productos</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
      <CartWidget/>
    </Navbar>
  );
}

export default NavBar;
