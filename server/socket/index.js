/**
* Created by v.stokolosa on 2/26/15.
*/
var log = require('server/lib/log')(module);

module.exports = function (http) {
    var io = require('socket.io')(http);

    io.on('connection', function(socket){
        console.log('user connected');

        socket.on('comments', function (data) {
            socket.broadcast.emit('comments', data);
        });
    });
};