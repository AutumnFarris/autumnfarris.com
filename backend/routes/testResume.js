var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const skillset = [{ id:0, skill: "Elixir" }, {id:1, skill: "C#"}];

    res.send(
      { skillset }
    );
});

module.exports = router;
