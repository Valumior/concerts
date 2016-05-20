var express = require('express');
var router = express.Router();
var models = require('./models');

/* GET api listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('concerts/', function (req, res, next) {
  models.Concert.find(function (err, con) {
    if (err) return next(err);
    res.json(con);
  });
});

router.post('concerts/', function (req, res, next) {
  models.Concert.create(req.body, function (err, con) {
    if (err) return next(err);
    res.json(con);
  });
});

router.get('concerts/:id/', function (req, res, next) {
  models.Concert.findById(req.params.id, function (err, con) {
    if (err) return next(err);
    res.json(con);
  });
});

router.put('concerts/:id/', function (req, res, next) {
  models.Concert.findByIdAndUpdate(req.params.id, req.body, function (err, con) {
    if (err) return next(err);
    res.json(con);
  });
});

router.delete('concerts/:id/', function (req, res, next) {
  models.Concert.findByIdAndRemove(req.params.id, req.body, function (err, con) {
    if (err) return next(err);
    res.json(con);
  });
});

router.get('pieces/', function (req, res, next) {
  models.Concert.find(function (err, piec) {
    if (err) return next(err);
    res.json(piec);
  });
});

router.post('pieces/', function (req, res, next) {
  models.Concert.create(req.body, function (err, piec) {
    if (err) return next(err);
    res.json(piec);
  });
});

router.get('pieces/:id/', function (req, res, next) {
  models.Concert.findById(req.params.id, function (err, piec) {
    if (err) return next(err);
    res.json(piec);
  });
});

router.put('pieces/:id/', function (req, res, next) {
  models.Concert.findByIdAndUpdate(req.params.id, req.body, function (err, piec) {
    if (err) return next(err);
    res.json(piec);
  });
});

router.delete('pieces/:id/', function (req, res, next) {
  models.Concert.findByIdAndRemove(req.params.id, req.body, function (err, piec) {
    if (err) return next(err);
    res.json(piec);
  });
});

router.get('composers/', function (req, res, next) {
  models.Concert.find(function (err, comp) {
    if (err) return next(err);
    res.json(comp)
  });
});

router.post('composers/', function (req, res, next) {
  models.Concert.create(req.body, function (err, comp) {
    if (err) return next(err);
    res.json(comp)
  });
});

router.get('composers/:id/', function (req, res, next) {
  models.Concert.findById(req.params.id, function (err, comp) {
    if (err) return next(err);
    res.json(comp)
  });
});

router.put('composers/:id/', function (req, res, next) {
  models.Concert.findByIdAndUpdate(req.params.id, req.body, function (err, comp) {
    if (err) return next(err);
    res.json(comp)
  });
});

router.delete('composers/:id/', function (req, res, next) {
  models.Concert.findByIdAndRemove(req.params.id, req.body, function (err, comp) {
    if (err) return next(err);
    res.json(comp)
  });
});

module.exports = router;
