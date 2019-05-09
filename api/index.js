const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
const database = require("./db/");
const endpoints = require("./endpoints");
const passport = require("passport");

const hosttournament = require("./endpoints/host");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
passport.use(passport.session());

//app.use( cookieParse('secure cookeie'));
app.use("/api", endpoints);
app.use("/host", hosttournament);


//error handles
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env" === "development" ? err : {})
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
