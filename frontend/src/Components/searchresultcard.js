import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function SearchResultCard(props) {
  return (
    <Card style={{ minWidth: "18rem" }}>
      <Card.Img
        style={{ width: "100px", margin: "auto" }}
        variant="top"
        src={props.result.artworkUrl100}
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Add to favourites</Button>
      </Card.Body>
    </Card>
  );
}
