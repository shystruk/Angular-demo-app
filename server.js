/*
    include files (run set NODE_PATH=. (windows))
    start MongoDB - mongod --dbpath /mongo/db
*/

var express = require('express');
var app = express();

var http = require('http').Server(app);
var url = require('url');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var config = require('server/config');
var mongoose = require('server/lib/mongoose');

app.use(bodyParser());

app.use(cookieParser());

require('server/routes')(app);

app.use(express.static(__dirname + '/app'));

http.listen(config.get('port'), function() {
    console.log('Express server listening on port ' + config.get('port'));
});

require('server/socket')(http);
