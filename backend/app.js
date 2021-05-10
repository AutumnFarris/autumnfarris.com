const express = require('express');
const mysql = require('mysql2');
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
    if (err) {
      console.error(err);
      res.status(500);
      res.send(err);
      return;
    }
    connection.query('SELECT language_name FROM languages', function (err, results, fields) {
      if (err) {
        console.error(err);
        res.status(500);
        res.send(err);
        return;
      }
      res.send(results)
    });
  });
});

module.exports = app;
