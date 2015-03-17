/**
 * Created by v.stokolosa on 3/16/15.
 */

require.config({
    paths: {
        'angular': '../public/js/angular.min.js',
        'app': 'app'
    },
    shim: {
        'app': {
            'deps': ['angular']
        }
    }
});

require(['app'], function () {
    angular.bootstrap(document, ['app']);
});
