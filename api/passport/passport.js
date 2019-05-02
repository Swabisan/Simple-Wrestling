const passport = require('passport')
const bcrypt = require('bcrypt')
const configAws = require('../config/awsConfig');
const { Pool, Client } = require('pg')

const pool = new Pool({
 user: configAws.masterUserName,
 host: configAws.host,
 database: configAws.databaseName,
 password: configAws.password,
 port: configAws.port,
 ssl: true
});
pool

const testData = {
  email: "huy9997@gmail.com",
  hash: "hash",
  salt: "salt",
}


