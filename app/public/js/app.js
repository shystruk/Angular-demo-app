'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngResource',
    'ngCookies',
    'ngStorage',
//    'LocalStorageModule',
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

//method to register work which should be performed when the injector is done loading all modules
app.run(['$location', '$rootScope', '$translate', function ($location, $rootScope, $translate) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;

        $translate('TITLE.' + $rootScope.title).then(function (title) {
            $rootScope.title = title;
        });
    });
}]);

/**
 * Created by v.stokolosa on 12/12/14.
 */
'use strict';

//encodeURI filter for URL
app.filter('encodeURI', function () {
    return window.encodeURI;
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
        'GUEST': 'Guest',
        'SUBMIT': 'Submit',
        'COM_NAME': 'Your Name',
        'COM_TEXTAREA': 'Share your thoughts'
    });

    $translateProvider.translations('uk_UA', {
        'PRICE': 'Ціна:',
        'SIGN-IN': 'Увійти',
        'LOGIN': 'Логін',
        'PASSWORD': 'Пароль',
        'WELCOME': 'Вітаємо',
        'GUEST': 'Гостя',
        'TITLE': {
            'V.S.12 | Home': 'V.S.12 | Головна',
            'MacBook': 'МакБук',
            'Login': 'Вхід',
            'MyAccount': 'Мій Кабінет'
        },
        'SUBMIT': 'Відправити',
        'COM_NAME': 'Ваше Ім"я',
        'COM_TEXTAREA': 'Поділіться своєю думкою'
    });

    $translateProvider.translations('de', {
        'PRICE': 'Preis:',
        'SIGN-IN': 'Mein Konto',
        'LOGIN': 'Einloggen',
        'PASSWORD': 'Passwort',
        'WELCOME': 'Willkommen',
        'GUEST': 'Gast',
        'TITLE': {
            'V.S.12 | Home': 'V.S.12 | Zuhause',
            'MacBook': 'MacBook',
            'Login': 'Einloggen',
            'MyAccount': 'Mein Konto'
        },
        'SUBMIT': 'Einreichen',
        'COM_NAME': 'Ihren Namen',
        'COM_TEXTAREA': 'Sagen Sie Ihre Meinung'
    });

    $translateProvider.translations('fr', {
        'PRICE': 'Prix:',
        'SIGN-IN': 'Connexion',
        'LOGIN': "S'identifier",
        'PASSWORD': 'Mot de passe',
        'WELCOME': 'Bienvenue',
        'GUEST': 'Invité',
        'TITLE': {
            'V.S.12 | Home': 'V.S.12 | Accueil',
            'MacBook': 'МакБук',
            'Login': 'S"identifier',
            'MyAccount': 'Mon Compte'
        },
        'SUBMIT': 'Soumettre',
        'COM_NAME': 'Votre Nom',
        'COM_TEXTAREA': 'Partagez votre opinion'
    });

    $translateProvider.determinePreferredLanguage();
    $translateProvider.useLocalStorage();
}]);

/**
 * Created by v.stokolosa on 12/18/14.
 */
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
 * Created by v.stokolosa on 12/16/14.
 */
'use strict';

app.controller('accountCtrl', ['$scope', function ($scope) {

}]);

/**
 * Created by v.stokolosa on 12/16/14.
 */
'use strict';

app.controller('homeCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.logOut = function () {
        $location.path = ('home');
    };
}]);
/**
 * Created by v.stokolosa on 12/16/14.
 */
app.controller('loginCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.credentials = {
        login: '',
        password: ''
    };

    $scope.text = 'Hello World!';

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
 * Created by v.stokolosa on 12/16/14.
 */
'use strict';

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
* Created by v.stokolosa on 12/4/14.
*/
'use strict';

app.directive('topBar', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/modules/home/top_menu/top_menu.html'
    };
});

/**
 * Created by v.stokolosa on 12/10/14.
 */
'use strict';

angular.module('topMenuService', ['ngResource']).
    factory('Menu', ['$resource', function ($resource) {
        return $resource('app/modules/home/top_menu/:topFile.json', {}, {
            query: {method: 'GET', params: {topFile: 'top_menu'}, isArray: true, cache: true}
        });
    }]).
    factory('MenuHTTP', ['$http', function ($http) {
        //cached request
        function getRequest(callback) {
            $http({
                method: 'GET',
                url: 'app/modules/home/top_menu/top_menu.json',
                cache: true
            }).success(callback);
        }
        return {
            names: getRequest
        };
    }]);


/**
 * Created by v.stokolosa on 12/16/14.
 */
'use strict';

app.controller('homeSliderCtrl', ['$scope', 'HomeSlider', function ($scope, HomeSlider) {
    $scope.images = [];

    HomeSlider.image(function (data) {
        $scope.images = data;
    });
}]);
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
 * Created by v.stokolosa on 12/16/14.
 */
'use strict';

angular.module('homeSliderService', ['ngResource']).
    factory('HomeSlider', ['$http', function ($http) {
        //cached request
        function getRequest(callback) {
            $http({
                method: 'GET',
                url: 'app/modules/home_slider/home_slider.json',
                cache: true
            }).success(callback);
        }
        return {
            image: getRequest
        };
    }]);
/**
 * Created by v.stokolosa on 12/19/14.
 */
'use strict';

app.directive('commentsBlock', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/modules/comments/comments.html'
    };
});

/**
 * Created by v.stokolosa on 12/19/14.
 */
'use strict';

app.service('commentsJSON', ['$http', function ($http) {
    return {
        getJSON: function () {
            return $http.get('app/modules/comments/comments.json');
        }
    };
}]);

/**
 * Created by v.stokolosa on 12/19/14.
 */
'use strict';
/**
 * LocaleStorage
 */
//app.controller('commentsCtrl', function ($scope, localStorageService) {
//    var commentsStore = localStorageService.get('comments');
//
//    $scope.comments = commentsStore && commentsStore.split('\n') || [];
//    $scope.$watch(function () {
//        localStorageService.add('comments', $scope.comments.join('\n'));
//    });
//
//    $scope.addComments = function () {
//        $scope.comments.push($scope.yourName);
//        $scope.yourName = '';
//        $scope.yourThoughts = '';
//    };
//});

/**
 * ngStorage
 */
app.controller('commentsCtrl', ['$scope', '$localStorage', function ($scope, $localStorage) {
    $scope.addComments = function () {

        $scope.commentsData = {
            name: $scope.yourName,
            thoughts: $scope.yourThoughts
        };

        $localStorage.commentsData = $scope.commentsData;
        
        $scope.commentsData = $localStorage.commentsData;
    };

}]);
