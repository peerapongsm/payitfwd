import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './menu.css'

class Menu extends React.Component {

  render() {
    let user = this.props.user;
    let callBack = this.props.callBack;
    if (user !== undefined) {
      return (
        <Navbar sticky="top" collapseOnSelect expand="xl" bg="dark" variant="dark">
          <Navbar.Brand href="/" style={{marginLeft: "1.5rem"}}>PayItFwd</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" activeKey="donate"
                style={{fontSize:"14pt"}}>
              <Nav.Item>
                <Nav.Link href="/" eventKey="donate">Donate</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/available" eventKey="available">Food Available</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link href="/order">
                  <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav style={{marginRight: "1.5rem", fontSize:"16pt"}}>
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
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">PayItFwd</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto" activeKey="donate">
              <Nav.Item>
                <Nav.Link href="/" eventKey="donate">Donate</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/available" eventKey="available">Food Available</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Sign in</Nav.Link>
            </Nav>
        </Navbar>
      )
    }
  }
};

export default Menu;
