import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/App.css'
import React from 'react'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='navbar' sticky="top" >
        <Container>
          <Navbar.Brand href="#home" className='navbrand'>TAMILNADU TOURISM</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" ms-auto navbarlist">
              <Nav.Link className='navlist'>Home</Nav.Link>
              <Nav.Link className='navlist'>Places To Visit</Nav.Link>
              <Nav.Link className='navlist'>Best Time To Visit</Nav.Link>
              <Nav.Link className='navlist'>Packages</Nav.Link>
              <Nav.Link className='navlist'>Destination</Nav.Link>
              <Nav.Link className='navlist'>Food</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar