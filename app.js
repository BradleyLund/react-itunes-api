var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const helmet = require("helmet");

require("isomorphic-fetch");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// secure the app with helmet
app.use(helmet());
app.get("/", (req, res) => {
  res.send("Online");
});

// the post request from the frontend of the application which will fetch from the itunes store with the
// parameters input
app.post("/api", (req, res) => {
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
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
