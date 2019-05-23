const express = require("express");
const router = express.Router();

const db = require("../db");

const passport = require("passport-local");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const session = require("express-session");

router.post("/", function(req, res) {
  const { email, password } = req.body;
  db.searchCoach([email])
    .then(query => {
      bcrypt.compare(password, query.rows[0].password, function(err, result) {
        if (result) {
          const user = jwt.sign(
            {
              email
            },
            process.env.APP_SECRET
          );
          res.json(user);
        } else {
          res.status(400).json({ error: "error" });
        }
      });
    })
    .catch(err => {
      res.status(404).json("error");
    });
});

module.exports = router;
