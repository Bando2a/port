import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarComponent = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Mohamed Effat Sayed</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#cover">Cover</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#services">Offered Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarComponent;
