var mysql = require('mysql');

var connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE,
  port: process.env.RDS_PORT
});

connection.connect((err) => {
  if (err) console.log('db Connection error', err);
});

exports.connection = connection;