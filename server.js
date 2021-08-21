const express = require("express");
const path = require("path");
const app = express();

// const helmet = require("helmet");

// we need to install and require this as it is not built in like in browsers
require("isomorphic-fetch");

// secure the app with helmet
// app.use(helmet());

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

// the post request from the frontend of the application which will fetch from the itunes store with the
// parameters input
app.post("/api", (req, res) => {
  // get the parameters from the query
  let media = req.query.media;
  let term = req.query.term;

  // we need to replace the spaces with a + for the term
  term = term.split(" ").join("+");

  // do a fetch to the itunes api and then return the results to the front end
  // limit the results to 20
  fetch(`https://itunes.apple.com/search?term=${term}&media=${media}&limit=12`)
    .then((response) => response.json())
    .then((data) =>
      // do all the processing and res the data here
      res.send(data)
    );
});

const PORT = process.env.PORT || 3030;
app.listen(PORT);
