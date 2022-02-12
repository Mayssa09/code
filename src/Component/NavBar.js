import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Users</Nav.Link>
            <Nav.Link href="#pricing">admin</Nav.Link>
          </Nav>
        </Container>
        <Button>Login</Button>
      </Navbar>
    </>
  );
};
export default NavBar;
