var express = require('express');
var router = express.Router();
const x=search_params.get("x") || getRandomArbitrary(0, 60);
var y1 = Math.log2(x);
var y2 = Math.cosh(x);
var y3 = Math.floor(x);
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  times++;
  res.send(`Math.log2(${x}) is ${y1}\n`);
  res.send(`Math.cosh(${x}) is ${y2}\n`);
  res.send(`Math.floor(${x}) is ${y3}\n`);
});

module.exports = router;
