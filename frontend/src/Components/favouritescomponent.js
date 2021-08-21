import React from "react";
import SearchResultCard from "./searchresultcard";
import { Container, Row, Col } from "react-bootstrap";

export default function Favourites(props) {
  console.log(props.favourites);
  const results = props.favourites.map((result, index) => (
    <Col>
      <SearchResultCard
        result={result}
        key={index}
        handleRemoveFavourite={props.handleRemoveFavourite}
        addOrRemove={"Remove From Favourites"}
      />
    </Col>
  ));
  return (
    <div id="favouritesDiv">
      <h2>Your list of Favourites:</h2>
      <Container>
        <Row xs={1} md={2} lg={2}>
          {results}
        </Row>
      </Container>
    </div>
  );
}
