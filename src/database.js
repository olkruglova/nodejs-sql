const mysql = require("mysql");
const dotenv = require("dotenv");

// read in the .env file
dotenv.config();

var conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Database is connected successfully !");
});

module.exports = conn;
