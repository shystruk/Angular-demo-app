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


/**
 * Created by v.stokolosa on 12/10/14.
 */
'use strict';

angular.module('topmenuServices', ['ngResource']).
    factory('Menu', ['$resource', function ($resource) {
        return $resource('app/views/top-bar/:topFile.json', {}, {
            query: {method: 'GET', params: {topFile: 'top-menu'}, isArray: true}
        });
    }]);

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

/**
* Created by v.stokolosa on 12/4/14.
*/
'use strict';

app.directive('topBar', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/views/top-bar/top-menu.html'
    };
});

/**
 * Created by v.stokolosa on 12/9/14.
 */
'use strict';

app.directive('wallopSlider', function () {
    return {
        template: '<div class="wallop-slider {{animationClass}}"><ul class="wallop-slider__list">' +
                  '<li class="wallop-slider__item {{itemClasses[$index]}}" ng-repeat="i in images"><img ng-src="{{i.src}}" /><span class="slider-price">{{"PRICE" | translate}} {{i.price | currency}}</span></li>' +
                  '</ul>' +
                  '<a ng-show="images.length>1" class="wallop-slider__btn wallop-slider__btn--previous btn btn--previous" ng-disabled="prevDisabled" ng-click="onPrevButtonClicked()">' +
                  '<i class="arrow-left"></i></a>' +
                  '<a ng-show="images.length>1" class="wallop-slider__btn wallop-slider__btn--next btn btn--next" ng-disabled="nextDisabled" ng-click="onNextButtonClicked()">' +
                  '<i class="arrow-right"></i></a></div>',
        restrict: 'EA',
        transclude: true,
        replace: false,
        scope: {
            images: '=',
            prices: '=',
            animation: '@',
            currentItemIndex: '=',
            onNext: '&',
            onPrevious: '&'
        },
        controller: ['$scope', '$timeout', function ($scope, $timeout) {

            $scope.itemClasses = [];

            $scope.$watch('images', function (images) {
                if (images.length) {
                    _goTo(0);
                }
            });

            // set animation class corresponding to animation defined in CSS. e.g. rotate, slide
            if ($scope.animation) {
                $scope.animationClass = 'wallop-slider--' + $scope.animation;
            }

            var _displayOptions = {
                btnPreviousClass: 'wallop-slider__btn--previous',
                btnNextClass: 'wallop-slider__btn--next',
                itemClass: 'wallop-slider__item',
                currentItemClass: 'wallop-slider__item--current',
                showPreviousClass: 'wallop-slider__item--show-previous',
                showNextClass: 'wallop-slider__item--show-next',
                hidePreviousClass: 'wallop-slider__item--hide-previous',
                hideNextClass: 'wallop-slider__item--hide-next'
            };

            function updateClasses() {
                if ($scope.itemClasses.length !== $scope.images.length) {
                    $scope.itemClasses = [];
                    for (var i=0; i<$scope.images.length; i++) {
                        $scope.itemClasses.push('');
                    }
                }
            }
            function _nextDisabled() {
                return ($scope.currentItemIndex + 1) === $scope.images.length;
            }
            function _prevDisabled() {
                return !$scope.currentItemIndex;
            }
            function _updatePagination() {
                $scope.nextDisabled = _nextDisabled();
                $scope.prevDisabled = _prevDisabled();
            }
            function _clearClasses() {
                for (var i=0; i<$scope.images.length; i++) {
                    $scope.itemClasses[i] = '';
                }

            }

            // go to slide
            function _goTo(index) {
                if (index >= $scope.images.length || index < 0 || index === $scope.currentItemIndex) {

                    if (!index) {
                        $scope.itemClasses[0] = _displayOptions.currentItemClass;
                    }
                    return;
                }

                _clearClasses();

                $scope.itemClasses[$scope.currentItemIndex] = (index > $scope.currentItemIndex) ? _displayOptions.hidePreviousClass : _displayOptions.hideNextClass;

                var currentClass = (index > $scope.currentItemIndex) ? _displayOptions.showNextClass : _displayOptions.showPreviousClass;
                $scope.itemClasses[index] = _displayOptions.currentItemClass + ' ' + currentClass;

                $scope.currentItemIndex = index;

                _updatePagination();

            }

            // button event handlers
            // consider using the ng-tap directive to remove delay
            $scope.onPrevButtonClicked = function () {
                _goTo($scope.currentItemIndex - 1);
            };
            $scope.onNextButtonClicked = function () {
                _goTo($scope.currentItemIndex + 1);
            };

            $scope.$watch('currentItemIndex', function(newVal, oldVal) {
                if (oldVal > newVal) {
                    if (typeof $scope.onPrevious === 'function') {
                        $scope.onPrevious();
                    }
                } else {
                    if (typeof $scope.onNext === 'function') {
                        $scope.onNext();
                    }
                }
            });

        }]
    };
});

/**
 * Created by v.stokolosa on 12/10/14.
 */
'use strict';

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en_US', {
        'PRICE': 'Price:',
        'SIGN-IN': 'Sign-In',
        'LOGIN': 'Login',
        'PASSWORD': 'Password',
        'WELCOME': 'Welcome',
        'GUEST': 'Guest'
    });

    $translateProvider.translations('uk_UA', {
        'PRICE': 'Ціна:',
        'SIGN-IN': 'Увійти',
        'LOGIN': 'Логін',
        'PASSWORD': 'Пароль',
        'WELCOME': 'Вітаємо',
        'GUEST': 'Гостя'
    });

    $translateProvider.translations('de', {
        'PRICE': 'Preis:',
        'SIGN-IN': 'Mein Konto',
        'LOGIN': 'Einloggen',
        'PASSWORD': 'Passwort',
        'WELCOME': 'Willkommen',
        'GUEST': 'Gast'
    });

    $translateProvider.translations('fr', {
        'PRICE': 'Prix:',
        'SIGN-IN': 'Connexion',
        'LOGIN': "S'identifier",
        'PASSWORD': 'Mot de passe',
        'WELCOME': 'Bienvenue',
        'GUEST': 'Invité'
    });

    $translateProvider.determinePreferredLanguage();
}]);
