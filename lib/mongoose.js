var mongoose    = require('mongoose');
var log         = require('./log')(module);
var config      = require('./config');

mongoose.connect(config.get('mongoose:uri'));

var db = mongoose.connection;

db.on('error', function (err) {
    log.error('connection error:', err.message);
});
db.once('open', function callback () {
    log.info("Connected to DB!");
});

var Schema = mongoose.Schema;

// Schemas
var Images = new Schema({
    kind: {
        type: String,
        enum: ['thumbnail', 'detail'],
        required: true
    },
    url: { type: String, required: true }
});

var Comment = new Schema({
    body  : { type: String, required: true },
    date  : { type: Date, default: Date.now },
    author: { type: String, required: true },
    images: [Images]

});

var Place = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    images: [Images],
    created: { type: Date, default: Date.now },
    coordinates: {type: Array, required: true},
    //comments: [Comment]

});

// validation
Place.path('title').validate(function (v) {
    return v.length > 5 && v.length < 70;
});

var PlacesModel = mongoose.model('Place', Place);

module.exports.PlacesModel = PlacesModel;