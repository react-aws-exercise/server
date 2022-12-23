var express = require('express'); // require == import
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('호랑이2');
});

module.exports = router;
