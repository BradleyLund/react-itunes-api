import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#headerDiv">iTunes API</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#headerDiv">Search</Nav.Link>

          <Nav.Link href="#resultsDiv">Results</Nav.Link>
          <Nav.Link href="#favouritesDiv">Favourites</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
