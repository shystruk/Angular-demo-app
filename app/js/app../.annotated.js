'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngResource',
    'ngCookies',
    'pascalprecht.translate',
    'topmenuServices'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'homeCtrl'
        }).
        when('/mac', {
            templateUrl: 'app/views/product/mac.html',
            controller: 'macCtrl'
        }).
        when('/login', {
            templateUrl: 'app/views/top-bar/login.html',
            controller: 'loginCtrl'
        }).
        when('/account', {
            templateUrl: 'app/views/account/my_account.html',
            controller: 'accountCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);

