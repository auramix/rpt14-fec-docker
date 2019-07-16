var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'aa16d3d97x7shud.cqszfcm8ylk3.us-west-2.rds.amazonaws.com',
  user: 'ebroot',
  password: 's1c4o8t7t',
  database: 'sosaCloud',
  port: '3306'
});

connection.connect((err) => {
  if (err) console.log('db Connection error', err);
});

exports.connection = connection;