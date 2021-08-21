import React from "react";
import SearchResultCard from "./searchresultcard";

// import the container and row and col to use the react grid system for styling
import { Container, Row, Col } from "react-bootstrap";

export default function Favourites(props) {
  // map through the results array
  const results = props.favourites.map((result, index) => (
    <Col>
      <SearchResultCard
        result={result}
        // using map here so need to give it a key
        key={index}
        // pass the handler to remove the item from favourites
        handleRemoveFavourite={props.handleRemoveFavourite}
        // pass what the button text will say
        addOrRemove={"Remove From Favourites"}
      />
    </Col>
  ));

  //if there are no favourites chosen yet then display this else display the favourites
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
          {/* using the bootstrap grid system, on a large screen there will only be 2 per row, medium 2 and xs 1 */}
          <Row xs={1} md={2} lg={2}>
            {results}
          </Row>
        </Container>
      </div>
    );
  }
}
