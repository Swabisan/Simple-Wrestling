const CREATE_COACH = `INSERT INTO coaches (coach_name, email, password) VALUES ($1, $2, $3) RETURNING coach_name`;

const SEARCH_FOR_UNIQUE_COACH_EMAIL = `SELECT * FROM coaches WHERE email = $1`;

const CREATE_ADMIN = `INSERT INTO admin (admin_name, email, password) VALUES ($1, $2, $3) RETURNING coach_name`;

const SELECT_ALL_WRESTLERS = `SELECT * FROM wrestlers`;

const DELETE_ALL_WRESTLERS = `DELETE FROM wrestlers;`;

const CREATE_WRESTLER = `INSERT INTO wrestlers ("name","dob","weight","win","loss") VALUES ($1,$2,$3,$4,$5);`;

const SEARCH_FOR_EXISTING_WRESTLER = `SELECT EXISTS(SELECT * FROM WRESTLERS WHERE id = $1);`;

const UPDATE_EXISTING_WRESTLER = `UPDATE wrestlers SET name = $1, dob = $2, weight= #4, win= $5, loss=$6 WHERE id=$7; `;

const REMOVE_COACH_BY_ID = `DELETE FROM coaches WHERE id = $1;`;

const REMOVE_ADMIN_BY_ID = `DELETE FROM admin WHERE id = $1`;

const REMOVE_WRESTLER_BY_ID = `DELETE FROM wrestler WHERE id = $1`;

const SEARCH_FOR_TOURNAMENT_NAME = `SELECT * FROM tournaments WHERE tournament_name = $1`;

const CREATE_TOURNAMENT = `INSERT INTO tournaments (tournament_name, location, admin_id) VALUES ($1, $2, $3)`;

const SELECT_ALL_TOURNAMENTS = `SELECT * FROM tournaments`;

module.exports = {
  CREATE_COACH,
  CREATE_ADMIN,
  CREATE_WRESTLER,
  SEARCH_FOR_EXISTING_WRESTLER,
  UPDATE_EXISTING_WRESTLER,
  SELECT_ALL_WRESTLERS,
  DELETE_ALL_WRESTLERS,
  REMOVE_COACH_BY_ID,
  REMOVE_ADMIN_BY_ID,
  REMOVE_WRESTLER_BY_ID,
  SEARCH_FOR_UNIQUE_COACH_EMAIL,
  SEARCH_FOR_TOURNAMENT_NAME,
  CREATE_TOURNAMENT,
  SELECT_ALL_TOURNAMENTS
};
