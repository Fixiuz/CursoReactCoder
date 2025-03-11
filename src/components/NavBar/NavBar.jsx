import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'; 
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';


function NavBar() {
  return (
    <Navbar className='menu'>
      <div className="logo-container">
        <img src="" alt="logo" />
      </div>
      
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="menu-container">

        <Nav className= 'itemMenu'>
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#productos">Productos</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
      
      <div className='carrito'>
        <CartWidget/>
      </div>
    </Navbar>
  );
}

export default NavBar;
