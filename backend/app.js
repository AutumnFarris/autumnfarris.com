const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
var router = express.Router();

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '7wvnd748',
  database : 'resume'
});

// Starting our app.
const app = express();
var corsOptions = {
    origin: 'http://localhost:3000',
}
app.use(cors(corsOptions));
// Creating a GET route that returns data from the 'users' table.
app.get('/languages', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT language_name FROM languages', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

// Starting our server.
app.listen(4000, () => {
 console.log('Go to http://localhost:3000/users so you can see the data.');
});

module.exports = app;
