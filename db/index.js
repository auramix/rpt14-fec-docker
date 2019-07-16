var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'aa1gdisvq3uw7kb.cf4rswsctn5j.us-west-1.rds.amazonaws.com',
  user: 'ebroot',
  password: 's1c4o8t7t',
  database: 'sosaCloud',
  port: '3306'
});

connection.connect((err) => {
  if (err) console.log('db Connection error', err);
});

exports.connection = connection;