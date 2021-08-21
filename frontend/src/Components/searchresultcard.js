import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function SearchResultCard(props) {
  console.log(props.result);

  return (
    <Card style={{ minWidth: "18rem" }}>
      <Card.Img
        style={{ width: "100px", margin: "auto" }}
        variant="top"
        src={props.result.artworkUrl100}
      />
      <Card.Body>
        <Card.Title>{props.result.trackName}</Card.Title>
        <Card.Title>{props.result.artistName}</Card.Title>
        <Button
          variant="primary"
          // give it the appropriate handler function depending on if it is a favourite or just a search result
          onClick={
            props.addOrRemove === "Remove From Favourites"
              ? () => props.handleRemoveFavourite(props.result)
              : () => props.handleAddFavourite(props.result)
          }>
          {props.addOrRemove}
        </Button>
      </Card.Body>
    </Card>
  );
}
