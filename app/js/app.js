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
            controller: 'homeCtrl',
            title: 'V.S.12 | Home'
        }).
        when('/mac', {
            templateUrl: 'app/modules/product/mac.html',
            controller: 'macCtrl',
            title: 'MacBook'
        }).
        when('/login', {
            templateUrl: 'app/modules/home/login/login.html',
            controller: 'loginCtrl',
            title: 'Login'
        }).
        when('/account', {
            templateUrl: 'app/modules/account/my_account.html',
            controller: 'accountCtrl',
            title: 'MyAccount'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);

app.run(['$location', '$rootScope', function ($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
