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
 * Home Ctrl
 */
app.controller('homeCtrl', ['$scope', '$cookies', function ($scope, $cookies) {
    console.log($cookies.lang);
}]);


/**
 * Home Slider Ctrl
 */
app.controller('homeSliderCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.currentSliderIndex = 1;

    $scope.images = [];

    $http.get('app/template/sliders/home_slider.json').success(function (success) {
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
