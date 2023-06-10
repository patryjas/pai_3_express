var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('about', { title: 'O nas', message: 'To jest strona informacyjna o nas.' });
});

module.exports = router;
