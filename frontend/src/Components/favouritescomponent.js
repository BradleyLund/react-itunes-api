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

  if (props.favourites.length === 0) {
    return (
      <div
        id="favouritesDiv"
        style={{ fontSize: "25px", marginTop: "10px", marginBottom: "100px" }}>
        <h2>Your list of Favourites:</h2>
        <div>
          You currently have no favourites, search above and add some items to
          your favourites
        </div>
      </div>
    );
  } else {
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
}
