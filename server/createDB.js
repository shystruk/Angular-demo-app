/**
 * Created by v.stokolosa on 2/4/15.

    db-name - angular_demo
    show db - mongo angular_demo (path - mongo/bin)
    show all collections - show collections
    find comments - db.comments.find()

 ====
 db.scores.find({a: {"name": "Vasyl"}); - find all a objects
    properties:
        {a: {$lt: 5}} //less than
        {a: {$gte: 10}} // Greater than or equal to
        {a: {$ne: 'b'}} // Not Equal To
        {a: {$in: ['a', 'b', 'c']}} // Exists in array
 ====
 **/

'use strict';

var mongoose = require('server/lib/mongoose');
var async = require('async');
var Comment = require('server/models/comment').Comment;

async.series([
    open,
    dropDataBase,
    requireModels,
    createDefaultComment
], function (err) {
    mongoose.disconnect();
});


function open(callback) {
    mongoose.connection.on('open', callback);
}

function dropDataBase(callback) {
    var db = mongoose.connection.db;
    db.dropDatabase(callback);
}

function requireModels(callback) {
    require('server/models/comment');

    async.each(Object.keys(mongoose.models), function (modelName, callback) {
        mongoose.models[modelName].ensureIndexes(callback);
    }, callback);
}

function createDefaultComment(callback) {
    var comments = [
        {name: 'Admin', thoughts: 'Have a good day, dude!', date: new Date()},
        {name: 'Support', thoughts: 'Thank you, admin!', date: new Date()}
    ];

    async.each(comments, function (userData, callback) {
        var comment = new mongoose.models.Comment(userData);
        comment.save(callback);
    }, callback);
}
