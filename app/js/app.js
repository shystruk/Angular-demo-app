'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngResource',
    'ngCookies',
    'pascalprecht.translate'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'app/template/home.html',
            controller: 'homeCtrl'
        }).
        when('/mac', {
            templateUrl: 'app/template/product/mac.html',
            controller: 'macCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);

