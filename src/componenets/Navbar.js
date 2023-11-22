import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from '../images/logo.png';
import Button from 'react-bootstrap/Button';

// Import your image file
import 


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        {/* Use the Image component in place of Navbar.Brand */}
        <Navbar.Brand href="#">
          <Image src={Image} alt="Logo" fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#about">Contact us</Nav.Link>
            <Nav.Link href="#contact">TimeTable</Nav.Link>
            <Nav.Link href="#live-location">Live Location</Nav.Link>
          </Nav>
          <Button variant="outline-success" style={{ marginLeft: 'auto', borderColor: 'red', color: 'red' }}>
            Sign in
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;