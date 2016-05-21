var express = require('express');
var router = express.Router();
var models = require('./models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/concerts/', function (req, res, next) {
    models.Concert.find().populate({ path : 'pieces', model : 'Piece', populate : { path : 'composer', model : 'Composer'}})
        .exec(function (err, concerts) {
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

router.get('/concerts/:id/', function (req, res, next) {
    models.Concert.findById(req.params.id).populate({ path : 'pieces', model : 'Piece', populate : { path : 'composer', model : 'Composer'}})
        .exec(function (err, concert) {
        if (err) return next(err);
        models.Piece.find({ '_id' : { $nin : concert.pieces }}).populate('composer').exec(function (err, pieces) {
            if (err) return next(err);
            res.render('concertDetails', { concert : concert , pieces : pieces });
        });
    });
});

router.post('/concerts/:id/', function (req, res, next) {
    models.Concert.findById(req.params.id).populate('pieces').exec(function (err, concert) {
        if (err) return next(err);
        concert.pieces.push({ _id : req.body.piece });
        concert.save();
        res.redirect('/concerts/' + concert.id + '/');
    });
});

router.delete('/concerts/:conId/piece/:pieId/', function (req, res, next) {
    models.Concert.findById(req.params.conId).populate('pieces').exec(function (err, concert) {
        if (err) return next(err);
        concert.pieces.pull({ _id : req.params.pieId });
        concert.save();
        res.redirect('/concerts/' + concert.id + '/');
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
