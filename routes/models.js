var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ComposerSchema = new Schema({
    name    :   String,
    era     :   String
}, { collection : 'composers' });

var PieceSchema = new Schema({
    title       :   String,
    year        :   String,
    composer    :   { type : ObjectId, ref : 'Composer'}
}, { collection : 'pieces' });

var ConcertSchema = new Schema({
    title   :   String,
    date    :   String,
    venue   :   String,
    pieces  :   [{ type : ObjectId, ref : 'Piece' }]
}, { collection : 'concerts'});

var models = {
    Concert    :   mongoose.model('Concert', ConcertSchema),
    Piece      :   mongoose.model('Piece', PieceSchema),
    Composer   :   mongoose.model('Composer', ComposerSchema)
};

module.exports = models;