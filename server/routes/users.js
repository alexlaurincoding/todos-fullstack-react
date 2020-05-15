var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Je pense ben que oui!!!');
});
module.exports = router;
