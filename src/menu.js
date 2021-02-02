import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

class Menu extends React.Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">PayItFwd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="mr-auto">
            <Nav.Link href="/">Donate</Nav.Link>
            <Nav.Link href="/available">Food Avaialable</Nav.Link>
          </Nav>
          <Nav>
            <Form inline>
              <FormControl type="text" placeholder="Find restaurant..." className="mr-sm-2" />
            </Form>
            <Nav.Link href="/login">Sign in</Nav.Link>
          </Nav>
      </Navbar>
    )
  }
};

export default Menu;
