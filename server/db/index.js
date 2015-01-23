/**
 * Created by v.stokolosa on 1/23/15.
 */


var phrases;

exports.connect = function () {
    phrases = require('./local');
};

exports.getPhrase = function (name) {
    if (!phrases[name]) {
        throw new Error('no phrase ' + name);
    }
    return phrases[name];
};
