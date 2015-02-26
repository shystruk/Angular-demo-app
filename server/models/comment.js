/**
 * Created by v.stokolosa on 2/4/15.
 */

var crypto = require('crypto');
var async = require('async');
var util = require('util');

var mongoose = require('server/lib/mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    yourName: {
        type: String,
        unique: true,
        required: true
    },
    yourThoughts: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

exports.Comment = mongoose.model('Comment', schema);
