/**
* Created by v.stokolosa on 2/26/15.
*/
var log = require('server/lib/log')(module);
var mongoose = require('server/lib/mongoose');
var Comment = require('server/models/comment').Comment;
var async = require('async');

module.exports = function (http) {
    var io = require('socket.io')(http);

    io.on('connection', function(socket){
        console.log('user connected');
        var comment = mongoose.model('Comment');

        socket.on('comments', function (data) {

           var small = new comment.save(data);

            mongoose.model('Comment').find(function (err, data) {
                socket.broadcast.emit('comments', data);
            });
        });
    });
};
