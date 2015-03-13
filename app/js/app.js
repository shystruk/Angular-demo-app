'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngResource',
    'ngCookies',
    'LocalStorageModule',
    'pascalprecht.translate',
    'topMenuService',
    'homeSliderService',
    'commentsService'
]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'modules/home/home.html',
            controller: 'homeCtrl',
            title: 'V.S.12 | Home'
        }).
        when('/mac', {
            templateUrl: 'modules/product/mac.html',
            controller: 'macCtrl',
            title: 'MacBook'
        }).
        when('/login', {
            templateUrl: 'modules/home/login/login.html',
            controller: 'loginCtrl',
            title: 'Login'
        }).
        when('/account', {
            templateUrl: 'modules/account/my_account.html',
            controller: 'accountCtrl',
            title: 'My Account'
        }).
        when('/new-account', {
            templateUrl: 'modules/account/new_account.html',
            controller: 'newAccountCtrl',
            title: 'New Account'
        }).
        otherwise({
            redirectTo: '/'
        });

    // rid of the hash in urls
//    $locationProvider.html5Mode({
//        enabled: true,
//        requireBase: false
//    });
}]);

//method to register work which should be performed when the injector is done loading all modules
app.run(['$location', '$rootScope', '$translate', function ($location, $rootScope, $translate) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;

        $translate('TITLE.' + $rootScope.title).then(function (title) {
            $rootScope.title = title;
        });
    });
}]);
