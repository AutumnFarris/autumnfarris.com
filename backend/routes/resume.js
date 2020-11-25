var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const skillset = [
    { id:0, skill: "HTML/CSS/SCSS" },
    { id:1, skill: "SQL"},
    { id:2, skill: "Javascript/JSON/React"},
    { id:3, skill: "PHP"},
    { id:4, skill: "Elixir"},
    { id:5, skill: "C#"}
  ];

    res.send(
      { skillset }
    );
});

module.exports = router;
