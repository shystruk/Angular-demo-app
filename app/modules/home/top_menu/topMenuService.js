/**
 * Created by v.stokolosa on 12/10/14.
 */
'use strict';

angular.module('topMenuService', ['ngResource']).
    factory('Menu', ['$resource', function ($resource) {
        return $resource('modules/home/top_menu/:topFile.json', {}, {
            query: {method: 'GET', params: {topFile: 'top_menu'}, isArray: true, cache: true}
        });
    }]).
    factory('MenuHTTP', ['$http', function ($http) {
        //cached request
        function getRequest(callback) {
            $http({
                method: 'GET',
                url: 'modules/home/top_menu/top_menu.json',
                cache: true
            }).success(callback);
        }
        return {
            names: getRequest
        };
    }]);

