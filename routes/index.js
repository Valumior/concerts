var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var models = require('./models')(mongoose);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('concerts/', function (req, res, next) {
  var concerts = [];
  models.Concert.find(function (err, con) {
    if (err) return next(err);
    concerts = con;
  });
  res.render('concerts', concerts)
});

router.get('pieces/', function (req, res, next) {
  var pieces = [];
  models.Concert.find(function (err, piec) {
    if (err) return next(err);
    pieces = piec;
  });
  res.render('composers', pieces)
});

router.get('composers/', function (req, res, next) {
  var composers = [];
  models.Concert.find(function (err, comp) {
    if (err) return next(err);
    composers = comp;
  });
  res.render('composers', composers)
});

module.exports = router;
