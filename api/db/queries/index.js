const CREATE_COACH = `INSERT INTO coaches (coach_name, email, password) VALUES ($1, $2, $3) RETURNING coach_name`;

const CREATE_ADMIN = `INSERT INTO admin (admin_name, email, password) VALUES ($1, $2, $3) RETURNING coach_name`;

const CREATE_WRESTLER = `INSERT INTO wrestler(user_name, dob, weight) VALUES ($1, $2, $3) RETURNING user_name`;

const REMOVE_COACH_BY_ID = `DELETE FROM coaches WHERE id = $1`;

const REMOVE_ADMIN_BY_ID = `DELETE FROM admin WHERE id = $1`;

const REMOVE_WRESTLER_BY_ID = `DELETE FROM wrestler WHERE id = $1`;

const SEARCH_FOR_UNIQUE_COACH_EMAIL = username => {
  `SELECT username FROM coaches WHERE username= ${username}`;
};
const SEACH_FOR_TOURNAMENT_BY_Name = tournament => {
  `SELECT tournaments FROM tournament_name  `;
};

const CREATE_HOST_TOURNAMENT = 'INSERT INTO tournaments SET ?';
const SHOW_HOST_TOURNAMENT = 'SELECT * FROM tournaments';

module.exports = {
  CREATE_COACH,
  CREATE_ADMIN,
  CREATE_WRESTLER,
  REMOVE_COACH_BY_ID,
  REMOVE_ADMIN_BY_ID,
  REMOVE_WRESTLER_BY_ID,
  SEARCH_FOR_UNIQUE_COACH_EMAIL,
  CREATE_HOST_TOURNAMENT,
  SHOW_HOST_TOURNAMENT
};
