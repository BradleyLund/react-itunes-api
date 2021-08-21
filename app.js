var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const helmet = require("helmet");

// we need to install and require this as it is not built in like in browsers
require("isomorphic-fetch");

var app = express();

// I used the out of the box express generator with all the functions that come with it

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// secure the app with helmet
app.use(helmet());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

// send a response for a standard get request on the root directory to show that the server is up and running
app.get("/", (req, res) => {
  res.send("Online");
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

module.exports = app;
