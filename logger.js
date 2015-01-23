/**
 * Created by v.stokolosa on 1/23/15.
 */

module.exports = function (module) {
    return function (/* ... */) {
        var arg = [module.filename].concat([].slice.call(arguments));
        console.log.apply(console, arg);
    };
};