const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'avengers'
});

// Cambiar la conexión para usar el wrapper de promesas
const promisePool = connection.promise();

module.exports = promisePool;
