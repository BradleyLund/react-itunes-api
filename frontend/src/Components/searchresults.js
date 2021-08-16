import React from "react";
import SearchResultCard from "./searchresultcard";

export default function SearchResults(props) {
  console.log(props.searchResults);
  const results = props.searchResults.map((result) => (
    <SearchResultCard result={result} />
  ));
  return <div>{results}</div>;
}
