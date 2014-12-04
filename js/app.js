var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.
        when('/index', {
            templateUrl: 'template/header.html',
            controller: 'topBarCtrl'
        }).
        otherwise({
            redirectTo: '/',
            templateUrl: 'template/header.html',
            controller: 'topBarCtrl'
        })
    });

