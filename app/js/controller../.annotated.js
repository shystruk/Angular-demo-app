'use strict';

/**
 * Top Menu Ctrl
 */
app.controller('topBarCtrl', ['$scope', '$cookies', 'Menu', function ($scope, $cookies, Menu) {
    $scope.menuName = [];

    $scope.menuName = Menu.query();

    $scope.logoUrl = 'app/image/logo.jpg';
}]);


/**
 * Login Ctrl
 */
app.controller('loginCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.credentials = {
        login: '',
        password: ''
    };

    $scope.signIn = function () {
        if ($scope.credentials.login === 'guest' && $scope.credentials.password === 'guest') {
            $location.path('/account');
        }
    };
}]);


/**
 * Home Ctrl
 */
app.controller('homeCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.logOut = function () {
        $location.path = ('home');
    };
}]);


/**
 *  My account Ctrl
 */
app.controller('accountCtrl', ['$scope', function ($scope) {

}]);

/**
 * Home Slider Ctrl
 */
app.controller('homeSliderCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.currentSliderIndex = 1;

    $scope.images = [];

    $http.get('app/views/sliders/home_slider.json').success(function (success) {
        $scope.images = success;
    });
}]);


/**
 * Change language
 */
app.controller('changeLangCtrl', ['$translate', '$scope', function ($translate, $scope) {
    $scope.currentLang = $translate.use();

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
        $scope.currentLang = langKey;
    };
}]);
