/**
 * Created by v.stokolosa on 12/10/14.
 */
'use strict';

angular.module('topmenuServices', ['ngResource']).
    factory('Menu', ['$resource', function ($resource) {
        return $resource('app/views/top-bar/:topFile.json', {}, {
            query: {method: 'GET', params: {topFile: 'top-menu'}, isArray: true}
        });
    }]);
