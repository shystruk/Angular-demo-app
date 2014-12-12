'use strict';

/**
 * Top Menu Ctrl
 */
//====== RESTful functionality ===============
//app.controller('topBarCtrl', ['$scope', 'Menu', function ($scope, Menu) {
//    $scope.menuName = [];
//
//    $scope.menuName = Menu.query();
//
//    $scope.logoUrl = 'app/image/logo.jpg';
//}]);
//============== http request ===========
app.controller('topBarCtrl', ['$scope', 'MenuHTTP', function ($scope, MenuHTTP) {
    $scope.logoUrl = 'app/image/logo.jpg';

    $scope.menuName = [];

    MenuHTTP.names(function (data) {
        $scope.menuName = data;
    });
}]);



/**
 * Login Ctrl
 */
app.controller('loginCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.credentials = {
        login: '',
        password: ''
    };

    $scope.$watch('credentials.login', function (newValue, oldValue) {
        $scope.credentials.password = newValue;
    });

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
app.controller('homeSliderCtrl', ['$scope', 'HomeSlider', function ($scope, HomeSlider) {
    $scope.images = [];

    HomeSlider.image(function (data) {
        $scope.images = data;
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
