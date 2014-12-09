var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'template/home.html',
            controller: 'homeCtrl'
        }).
        when('/mac', {
            templateUrl: 'template/product/mac.html',
            controller: 'macCtrl'
        });
    }]);

