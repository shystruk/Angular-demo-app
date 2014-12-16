'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngResource',
    'ngCookies',
    'pascalprecht.translate',
    'topMenuService',
    'homeSliderService'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'app/modules/home/home.html',
            controller: 'homeCtrl'
        }).
        when('/mac', {
            templateUrl: 'app/modules/product/mac.html',
            controller: 'macCtrl'
        }).
        when('/login', {
            templateUrl: 'app/modules/home/login/login.html',
            controller: 'loginCtrl'
        }).
        when('/account', {
            templateUrl: 'app/modules/account/my_account.html',
            controller: 'accountCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);

