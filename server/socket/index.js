/**
* Created by v.stokolosa on 2/26/15.
*/
var log = require('server/lib/log')(module);
var mongoose = require('server/lib/mongoose');
var async = require('async');
var Comment = require('server/models/comment').Comment;

module.exports = function (http) {
    var io = require('socket.io')(http);

    io.on('connection', function(socket){
        console.log('user connected');

        socket.on('comments', function (data) {

            var model = mongoose.model('Comment', Comment);

            async.each(data, function (userData) {
                var comments = new model(userData);

                comments.save(
//                    function (err, comments) {
//                        if (err) {
//                            return console.error(err);
//                        } else {
//                            return console.dir(comments);
//                        }
//                    }
                );
            });

            socket.broadcast.emit('comments', data);
        });
    });
};
