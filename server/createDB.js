/**
 * Created by v.stokolosa on 2/4/15.
 */
/* 
    db-name - angular_demo
    show db - mongo angular_demo
    show all collections - show collections
    find comments - db.comments.find()
 */

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


function open (callback) {
    mongoose.connection.on('open', callback);
}

function dropDataBase (callback) {
    var db = mongoose.connection.db;
    db.dropDatabase(callback);
}

function requireModels (callback) {
    require('server/models/comment');

    async.each(Object.keys(mongoose.models), function (modelName, callback) {
        mongoose.models[modelName].ensureIndexes(callback);
    }, callback);
}

function createDefaultComment (callback) {
    var comments = [
        {yourName: 'Admin', yourThoughts: 'Have a good day, dude!'}
    ];

    async.each(comments, function (userData, callback) {
        var comment = new mongoose.models.Comment(userData);
        comment.save(callback);
    }, callback);
}
