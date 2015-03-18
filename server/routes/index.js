/**
 * Created by v.stokolosa on 1/28/15.
 */

'use strict';

var mongoose = require('server/lib/mongoose');

module.exports = function (app) {
    app.get('/comments', function (req, res, next) {
        var modelData;

        mongoose.model('Comment').find({}).sort({date: -1}).exec(function (err, docs) {
            modelData = docs;

            res.json(modelData);
        });
    });
    app.delete('/comments/:id', function (req, res, next) {
        return mongoose.model('Comment').findById(req.params.id, function (err, comment) {
            return comment.remove(function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('removed');
                    res.send('');
                }
            })
        });
    });
};
