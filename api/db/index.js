const queries = require("./queries");

const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "wrestlingUsername",
//   host: "wrestlingidentifier.chgoxg8wubk2.us-west-2.rds.amazonaws.com",
//   database: "WrestlingDatabaseName",
//   password: "wrestle123",
//   port: 5432
// });
/*
const pool = new Pool({
  user: 'swabisan',
  host: 'localhost',
  database: 'wrestlingapp',
  password: 'swabisan',
  port: 5432,
})
*/


const addCoach = values => pool.query(queries.CREATE_COACH, values);

// need to tweak the rest of the query functions below

const addAdmin = (request, response) => {
  pool.query(
    queries.CREATE_ADMIN,
    [admin_name, email, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
};

const addWrestler = (request, response) => {
  pool.query(
    queries.CREATE_WRESTLER,
    [user_name, email, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
};

const deleteCoach = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(REMOVE_COACH_BY_ID, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

const deleteAdmin = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(REMOVE_ADMIN_BY_ID, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

const deleteWrestler = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(REMOVE_WRESTLER_BY_ID, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};






const mysql = require('mysql');
const pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'wrestlingapp',
  port: 3306,
});

const createHostTournaments = (request, response) => {
  console.log('request.tournament: ',request);
  pool.query(
    queries.CREATE_HOST_TOURNAMENT, request, (err, res) => {
      if(err) throw err;
      console.log('Last insert ID:', res.insertId);
    });
  };

const showHostTournaments = (request, response) => {
  //test at   http://localhost:5000/host/getHostPage
  pool.query(queries.SHOW_HOST_TOURNAMENT,(error, results) => {
      if (error) {throw error;}
      console.log('Data received from Db:\n');
      console.log(results);
    }
  );
};






const getOnebyEmai = item => {
  const email = item.email;
  console.log(email);
  return DB("user")
    .where("email", email)
    .first();
};

module.exports = {
  addCoach,
  addAdmin,
  addWrestler,
  deleteCoach,
  deleteAdmin,
  deleteWrestler,
  createHostTournaments,
  showHostTournaments
};
