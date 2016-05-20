var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ComposerSchema = new Schema({
    name    :   String,
    era     :   String
});

var PieceSchema = new Schema({
    title       :   String,
    id          :   ObjectId,
    year        :   String,
    composer    :   ComposerSchema
});

var ConcertSchema = new Schema({
    title   :   String,
    id      :   ObjectId,
    date    :   Date,
    venue   :   String,
    pieces  :   [PieceSchema]
});

var models = {
    Concert    :   mongoose.model('concerts', ConcertSchema),
    Piece      :   mongoose.model('pieces', PieceSchema),
    Composer   :   mongoose.model('composers', ComposerSchema)
};

module.exports = models;