var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Composer = new Schema({
    name    :   String,
    era     :   String
});

var Piece = new Schema({
    title       :   String,
    id          :   ObjectId,
    year        :   String,
    composer    :   Composer
});

var Concert = new Schema({
    title   :   String,
    id      :   ObjectId,
    date    :   Date,
    venue   :   String,
    pieces  :   [Piece]
});

var models = {
    Concerts    :   mongoose.model('concerts', Concert),
    Pieces      :   mongoose.model('pieces', Piece),
    Composers   :   mongoose.model('composers', Composer)
};

module.exports = models;