const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

const Sequelize = require('sequelize');
const sequelize = require('./sequalize');

//const authenticationMiddleware = require('./middleware')

// Generate Password
const saltRounds = bcrypt.genSaltSync(saltRounds)

const User = sequelize.define('wrestler', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

function findUser(username, callback) {
  User.findOne({
    where: {
      username: username
    }
  }).then(function (user) {
    if (!user) {
      console.log(username + " is not exits");
    } else {
      console.log(username + " exits");
      console.log(password);
      var passwordHash = hashbcrypt.hashSync(user.password, saltRounds);
      console.log(passwordHash);
      hashbcrypt.compare(password, passwordHash, (err, isValid) => {
        if (err) {
          console.log(err)
          return callback(err)
        }
        if (!isValid) {
          console.log("login fail")
          return callback(null)
        }
        console.log("login successfull")
        return callback(null, user)

      })
    }
  });

  passport.serializeUser(function (user, cb) {
    cb(null, User.username)
  })

  passport.deserializeUser(function (username, cb) {
    findUser(username, cb)
  })

  function initPassport() {
    passport.use(new LocalStrategy(
      (username, password, done) => {
        findUser(username, (err, user) => {
          if (err) {
            return done(err)
          }

          // User not found
          if (!user) {
            console.log('User not found')
            return done(null, false)
          }

          // Always use hashed passwords and fixed time comparison
          bcrypt.compare(password, User.passwordHash, (err, isValid) => {
            if (err) {
              return done(err)
            }
            if (!isValid) {
              return done(null, false)
            }
            return done(null, user)
          })
        })
      }
    ))

    //passport.authenticationMiddleware = authenticationMiddleware
  }
}

module.exports = initPassport