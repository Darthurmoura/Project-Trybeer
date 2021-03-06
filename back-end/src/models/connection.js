const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

// const connection = mysql.createPool({
//   user: 'root',
//   password: 'flowbio',
//   host: 'localhost',
//   database: 'Trybeer',
// });

// const connection = mysql.createPool({
//   user: 'root',
//   password: '1234',
//   host: 'localhost',
//   database: 'Trybeer',
// });

const connection = mysql.createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  database: 'Trybeer',
});

module.exports = connection;