import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav'
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import './menu.css'

class Menu extends React.Component {

  render() {
    let user = this.props.user;
    let callBack = this.props.callBack;
    if (user !== undefined) {
      return (
        <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
          <Navbar.Brand href="/">PayItFwd</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Donate</Nav.Link>
              <Nav.Link href="/available">Food Avaialable</Nav.Link>
            </Nav>
            <Nav>
              <Form inline>
                <FormControl type="text" placeholder="Find restaurant..." className="mr-sm-2" />
              </Form>
              <NavDropdown title={user.displayName} id="basic-nav-dropdown">
                <NavDropdown.Item href="/setting">Setting</NavDropdown.Item>
                <NavDropdown.Item onClick={callBack}>Sign out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    } else {
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
  }
};

export default Menu;
