import React from "react";
import SearchResultCard from "./searchresultcard";
import { Container, Row, Col } from "react-bootstrap";

export default function SearchResults(props) {
  console.log(props.searchResults);
  const results = props.searchResults.map((result, index) => (
    <Col>
      <SearchResultCard
        result={result}
        key={index}
        handleAddFavourite={props.handleAddFavourite}
        addOrRemove={"Add to Favourites"}
      />
    </Col>
  ));
  return (
    <div id="resultsDiv">
      <Container>
        <Row xs={1} md={2} lg={2}>
          {results}
        </Row>
      </Container>
    </div>
  );
}
