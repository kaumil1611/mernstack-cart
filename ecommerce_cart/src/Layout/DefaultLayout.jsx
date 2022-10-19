import React, { useContext } from "react";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { UserContextAPI } from "../Nav/NavBar";
const DefaultLayout = () => {
  const { state, dispatch } = useContext(UserContextAPI);

  const RenderNavLink = () => {
    if (state) {
      return (
        <>
          <Navbar.Brand as={Link} to="/">
            Navbar
          </Navbar.Brand>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>

            <Nav.Link as={Link} to="/logout">
              Logout
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/face-makeup">
                Face Makeup
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lip-makeup">
                Lip Makeup
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/eye-makeup">
                Eye Makeup
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/brushes-and-tools">
                Brushes and Tools
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </>
      );
    } else {
      return (
        <>
          <Navbar.Brand as={Link} to="/">
            Navbar
          </Navbar.Brand>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/face-makeup">
                Face Makeup
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lip-makeup">
                Lip Makeup
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/eye-makeup">
                Eye Makeup
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/brushes-and-tools">
                Brushes and Tools
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </>
      );
    }
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <RenderNavLink />
      </Container>
    </Navbar>
  );
};

export default DefaultLayout;
