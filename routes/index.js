var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.login=    function(req, res) {
  res.render('login', {title: '�û���½'});
};



module.exports = router;
