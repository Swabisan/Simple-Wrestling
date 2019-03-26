const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const database = require('./db');
const endpoints = require('./endpoints/index');
const user = require('./db/user');

//database.database();


//test
//user.deleteNull();
//user.loadData();
user.login("tuan", "tuan-password");

/*
//main login with passport (user and pass)
cont passport = require('./db/authentication/passport')
app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);
//working with goole 
//working with facebook
*/

app.use('/api', endpoints);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
