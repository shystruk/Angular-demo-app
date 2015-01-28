/**
 * Created by v.stokolosa on 1/27/15.
 */

var mongoose = require('mongoose');
var config = require('server/config');

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;
