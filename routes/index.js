var express = require('express');
var router = express.Router();
var models = require('./models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/concerts/', function (req, res, next) {
  var concerts = [];
  models.Concert.find(function (err, concerts) {
    if (err) return next(err);
    res.render('concerts', { concerts : concerts })
  });
});

router.get('/concerts/add/', function (req, res, next) {
    res.render('addConcert');
});

router.post('/concerts/add/', function (req, res, next) {
    models.Concert.create({ title : req.body.title, venue : req.body.venue, 
        date : req.body.date, pieces : []}, function (err, concert){
        if (err) return next(err);
        res.redirect('/concerts/');
    });
});

router.get('/pieces/', function (req, res, next) {
  models.Piece.find().populate('composer').exec(function (err, pieces) {
    if (err) return next(err);
    res.render('pieces', { pieces : pieces});
  });
});

router.get('/pieces/add/', function (req, res, next) {
    models.Composer.find(function (err, composers) {
        if (err) return next(err);
        res.render('addPiece', { composers : composers })
    });
});

router.post('/pieces/add/', function (req, res, next) {
    models.Piece.create({ title : req.body.title,
        year : req.body.year, composer : req.body.composer }, function (err, piece) {
        if (err) return next(err);
        res.redirect('/pieces/');
    });
});

router.get('/composers/', function (req, res, next) {
  models.Composer.find(function (err, composers) {
    if (err) return next(err);
    res.render('composers', { composers : composers })
  });
});

router.get('/composers/add/', function (req, res, next) {
    res.render('addComposer')
});

router.post('/composers/add/', function (req, res, next) {
    models.Composer.create({ name : req.body.name , era : req.body.era },
        function (err, composer) {
        if (err) return next(err);
        res.redirect('/composers/');
    });
});

module.exports = router;
