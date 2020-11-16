import React from 'react';
import './Navigation.scss';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationTwo = () => {
    return (

      <Navbar bg="white" expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/travel">Travel Blog</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
              <Nav.Link href="/instagram">Instagram</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>

      );
}

export default NavigationTwo;
