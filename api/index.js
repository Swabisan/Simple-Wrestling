require("dotenv").config();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 5000;
const endpoints = require("./endpoints");
const passport = require("passport");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRETS));
app.use(express.static("../client/build"));

app.use(passport.initialize());
passport.use(passport.session());

app.use("/api", endpoints);

//error handles

app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render("error");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
