const dotenv = require("dotenv");
dotenv.config();

const config = {
  port: process.env.PORT,
  host: process.env.HOST,
  db: {
    host: process.env.HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
  },
  listPerPage: 10,
};

module.exports = config;
