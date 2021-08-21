import React from "react";
import SearchResultCard from "./searchresultcard";
import { Container, Row, Col } from "react-bootstrap";
// import these from react bootstrap to use bootstraps grid system for responsive styling

export default function SearchResults(props) {
  // map through the array of the results
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
        {/* using the bootstrap grid system, on a large screen there will only be 2 per row, medium 2 and xs 1 */}

        <Row xs={1} md={2} lg={2}>
          {results}
        </Row>
      </Container>
    </div>
  );
}
