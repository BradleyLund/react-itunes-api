import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

// Using the dark navbar out of the box from react bootstrap

export default function NavbarComponent() {
  return (
    //   bg background and variant = "dark" for styling, fixed = "top" so that the navbar is fixed to the top
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        {/* give the links the appropriate href attribute  */}
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
