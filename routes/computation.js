var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const x= req.query.x || getRandomArbitrary(0, 60);
  var y1 = Math.log2(x);
  var y2 = Math.cosh(x);
  var y3 = Math.floor(x);
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  res.send(`Math.log2(${x}) is ${y1} ; Math.cosh(${x}) is ${y2} ; Math.floor(${x}) is ${y3}\n`);
});

module.exports = router;
