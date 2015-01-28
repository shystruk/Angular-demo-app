/**
 * Created by v.stokolosa on 1/28/15.
 */

var nconf = require('nconf');
var path = require('path');

nconf.argv()
    .env()
    .file({ file: path.join(__dirname, 'config.json')});

module.exports = nconf;
