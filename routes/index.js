var express = require('express');
var router = express.Router();
var models = require('./models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('concerts/', function (req, res, next) {
  var concerts = [];
  models.Concert.find(function (err, concerts) {
    if (err) return next(err);
    res.render('concerts', { 'concerts' : concerts })
  });
});

router.get('pieces/', function (req, res, next) {
  models.Concert.find(function (err, pieces) {
    if (err) return next(err);
    res.render('pieces', { 'pieces' : pieces})
  });
});

router.get('composers/', function (req, res, next) {
  models.Concert.find(function (err, composers) {
    if (err) return next(err);
    res.render('composers', { 'composers' : composers })
  });
});

module.exports = router;
