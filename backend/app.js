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

const app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
}

app.use(cors(corsOptions));

app.get('/languages', function (req, res) {

    connection.getConnection(function (err, connection) {

    connection.query('SELECT language_name FROM languages', function (error, results, fields) {

      if (error) throw error;

      res.send(results)
    });
  });
});

app.listen(4000, () => {
 console.log('Go to http://localhost:4000/languages so you can see the data.');
});

module.exports = app;
