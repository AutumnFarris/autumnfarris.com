
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var router = express.Router();

router.get('/', function(req, res, next) {

var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '7wvnd748',
  database : 'resume'
});

con.connect(function(err) {
  if (err) throw err;
  con.query('SELECT language_name FROM languages', function (err, result, fields) {
    if (err) throw err;
    console.log(fields);
  });
});

res.send(
    { con }
  );
});

module.exports = router;
