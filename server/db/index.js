const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jameskim',
  database: 'reverb'
});

// uncomment after loading schema and seeding
// db.connect();

module.exports = db;