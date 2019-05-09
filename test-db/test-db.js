let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tuan884326',
  database: 'wrestlingapp'
});
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
 
  console.log('Connected to the MySQL server.');
});
/*
const tournament = { id: 1, tournament_name: 'tour1', location: 'SF', admin_id: 1 };
connection.query('INSERT INTO tournaments SET ?', tournament, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});

const tournament = { id: 2, tournament_name: 'tour2', location: 'SF', admin_id: 2 };
connection.query('INSERT INTO tournaments SET ?', tournament, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});
*/
connection.query('SELECT * FROM tournaments', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});