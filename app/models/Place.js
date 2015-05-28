var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var placeSchema = new Schema({
    title:  {
        type:String,
        required: true
    },
    author: String,
    description:   String,
    comments: [{ body: String, date: Date, author: String }],
    date: { type: Date, default: Date.now },
    visited: Boolean,
    resume: String
});

module.exports.place = mongoose.model('Place', placeSchema);