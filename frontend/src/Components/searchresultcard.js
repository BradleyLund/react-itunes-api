import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// using cards from bootstrap to display the results of the search and the favourites

export default function SearchResultCard(props) {
  return (
    // min width is important for styling for when it goes to mobile
    <Card style={{ minWidth: "18rem" }}>
      <Card.Img
        // image is 100*100 from itunes
        style={{ width: "100px", margin: "auto" }}
        variant="top"
        // the link to the image from itunes
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
