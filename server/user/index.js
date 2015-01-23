/**
 * Created by v.stokolosa on 1/23/15.
 */

//variables
var db = require('server/db'),
    log = require('logger')(module);


//exports == module.exports == this - data to 'server.js' file
//exports.User = User;
//&
module.exports = User;

//global variables
//global.User = User;

function User (name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    log(db.getPhrase('Hello') + who.name);
};


