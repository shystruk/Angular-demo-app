/**
 * Created by v.stokolosa on 12/10/14.
 */
'use strict';

angular.module('topmenuServices', ['ngResource']).
    factory('Menu', ['$resource', function ($resource) {
        return $resource('app/views/top-bar/:topFile.json', {}, {
            query: {method: 'GET', params: {topFile: 'top-menu'}, isArray: true}
        });
    }]).
    factory('MenuHTTP', ['$http', function ($http) {
        //cached request
        function getRequest(callback) {
            $http({
                method: 'GET',
                url: 'app/views/top-bar/top-menu.json',
                cache: true
            }).success(callback);
        }
        return {
            names: getRequest
        };
    }]).
    factory('HomeSlider', ['$http', function ($http) {
        //cached request
        function getRequest(callback) {
            $http({
                method: 'GET',
                url: 'app/views/sliders/home_slider.json',
                cache: true
            }).success(callback);
        }
        return {
            image: getRequest
        };
    }]);
