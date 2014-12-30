'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngResource',
    'ngCookies',
    'LocalStorageModule',
    'pascalprecht.translate',
    'topMenuService',
    'homeSliderService'
]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
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
            title: 'My Account'
        }).
        when('/new-account', {
            templateUrl: 'app/modules/account/new_account.html',
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

/**
 * Created by v.stokolosa on 12/12/14.
 */
'use strict';

//encodeURI filter for URL
app.filter('encodeURI', function () {
    return window.encodeURI;
});

/**
 * Created by v.stokolosa on 12/25/14.
 */
'use strict';

/**
 * Created by v.stokolosa on 12/10/14.
 */
'use strict';

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en_US', {
        'PRICE': 'Price:',
        'SIGN-IN': 'Sign-In',
        'LOG-OUT': 'Log out',
        'LOGIN': 'Login',
        'PASSWORD': 'Password',
        'WELCOME': 'Welcome',
        'GUEST': 'Guest',
        'SUBMIT': 'Submit',
        'COM_NAME': 'Your Name',
        'COM_TEXTAREA': 'Share your thoughts',
        'COMMENT': 'All Comments',
        'COMMENTS': {
            'YES': 'All Comments',
            'NO': 'No Comments Yet'
        },
        'REMOVE': 'Remove',
        'CREATE': 'Create Account',
        'FIRSTNAME': 'First Name',
        'LASTNAME': 'Last Name',
        'CONFIRMPASSWORD': 'Confirm Password',
        'CHECK_DATA': 'Please enter a valid login and password'
    });

    $translateProvider.translations('uk_UA', {
        'PRICE': 'Ціна:',
        'SIGN-IN': 'Увійти',
        'LOG-OUT': 'Вийти',
        'LOGIN': 'Логін',
        'PASSWORD': 'Пароль',
        'WELCOME': 'Вітаємо',
        'GUEST': 'Гостя',
        'TITLE': {
            'V.S.12 | Home': 'V.S.12 | Головна',
            'MacBook': 'МакБук',
            'Login': 'Вхід',
            'My Account': 'Мій Кабінет',
            'Ne wAccount': 'Новий Профіль'
        },
        'SUBMIT': 'Відправити',
        'COM_NAME': 'Ваше Ім"я',
        'COM_TEXTAREA': 'Поділіться своєю думкою',
        'COMMENT': 'Всі коментарі',
        'REMOVE': 'Видалити',
        'CREATE': 'Створити Профіль',
        'FIRSTNAME': 'Ім"я',
        'LASTNAME': 'Прізвище',
        'CONFIRMPASSWORD': 'Повторіть Пароль'
    });

    $translateProvider.translations('de', {
        'PRICE': 'Preis:',
        'SIGN-IN': 'Mein Konto',
        'LOG-OUT': 'Ausloggen',
        'LOGIN': 'Einloggen',
        'PASSWORD': 'Passwort',
        'WELCOME': 'Willkommen',
        'GUEST': 'Gast',
        'TITLE': {
            'V.S.12 | Home': 'V.S.12 | Zuhause',
            'MacBook': 'MacBook',
            'Login': 'Einloggen',
            'My Account': 'Mein Konto',
            'New Account': 'Neuer Kunde'
        },
        'SUBMIT': 'Einreichen',
        'COM_NAME': 'Ihren Namen',
        'COM_TEXTAREA': 'Sagen Sie Ihre Meinung',
        'COMMENT': 'Alle Kommentare Anzeigen',
        'REMOVE': 'Entfernen',
        'CREATE': 'Benutzerkonto Erstellen',
        'FIRSTNAME': 'Vorname',
        'LASTNAME': 'Nachname',
        'CONFIRMPASSWORD': 'Passwort bestätigen'
    });

    $translateProvider.translations('fr', {
        'PRICE': 'Prix:',
        'SIGN-IN': 'Connexion',
        'LOG-OUT': 'Déconnexion',
        'LOGIN': "S'identifier",
        'PASSWORD': 'Mot de passe',
        'WELCOME': 'Bienvenue',
        'GUEST': 'Invité',
        'TITLE': {
            'V.S.12 | Home': 'V.S.12 | Accueil',
            'MacBook': 'МакБук',
            'Login': 'S"identifier',
            'My Account': 'Mon Compte',
            'New Account': 'Nouveau compte'
        },
        'SUBMIT': 'Soumettre',
        'COM_NAME': 'Votre Nom',
        'COM_TEXTAREA': 'Partagez votre opinion',
        'COMMENT': 'Tous Les Commentaires',
        'REMOVE': 'Supprimer',
        'CREATE': 'Créer Un Compte',
        'FIRSTNAME': 'Prénom',
        'LASTNAME': 'Nom',
        'CONFIRMPASSWORD': 'Confirmez le mot de passe'
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
 * Created by v.stokolosa on 12/26/14.
 */
'use strict';

app.controller('newAccountCtrl', ['$scope', '$location', 'localStorageService', '$rootScope', function ($scope, $location, localStorageService, $rootScope) {
    //fields
    $scope.firstNameAccount = '';
    $scope.lastNameAccount = '';
    $scope.loginAccount = '';
    $scope.passwordAccount = '';
    $scope.confirmPasAccount = '';

    //localStorage
    $scope.accountData = [];
    $scope.accountCacheData = 'accountData';

    //check localStorage 'accountData'
    if (localStorageService.get($scope.accountCacheData) !== null) {
        $scope.accountData = localStorageService.get($scope.accountCacheData);
    }

    $scope.$watch('accountData', function (newValue, oldValue) {
        localStorageService.add($scope.accountCacheData, JSON.stringify($scope.accountData));
    }, true);

    $scope.createAccount = function () {
        if ($scope.passwordAccount === $scope.confirmPasAccount) {
            localStorageService.remove($scope.accountCacheData);

            $scope.accountData.unshift({
                firstName: $scope.firstNameAccount,
                lastName: $scope.lastNameAccount,
                login: $scope.loginAccount,
                password: $scope.passwordAccount,
                confirmPas: $scope.confirmPasAccount
            });

            $location.path('/account');

            $scope.firstNameAccount = '';
            $scope.lastNameAccount = '';
            $scope.loginAccount = '';
            $scope.passwordAccount = '';
            $scope.confirmPasAccount = '';

            //pass account data
            $rootScope.$emit('accountLogin', $scope.accountData);
        }
    };
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
app.controller('loginCtrl', ['$scope', '$location', '$rootScope', 'localStorageService', function ($scope, $location, $rootScope, localStorageService) {
    $scope.credentials = {
        login: '',
        password: ''
    };
    $scope.signInData = [];
    $scope.loginData = '';
    $scope.passwordData = '';
    $scope.accountSignIn = false;

    $scope.text = 'Hello World!';

    //take account data
    $scope.signInData = localStorageService.get('accountData');

    $scope.signIn = function () {
        var i = 0;

        angular.forEach($scope.signInData, function (value, key, obj) {
            i++;
            $scope.loginData = $scope.signInData[key].login;
            $scope.passwordData = $scope.signInData[key].password;

            //check validity of data
            if ($scope.loginData === $scope.credentials.login && $scope.passwordData === $scope.credentials.password) {
                $location.path('/account');
                console.log($scope.signInData[key].firstName);
                return $scope.accountSignIn = true;
            } else {
                $scope.accountSignIn = false;
            }
            console.log($scope.accountSignIn);
        });
    };

    $scope.createAccount = function () {
        $location.path('/new-account');
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
app.controller('topBarCtrl', ['$scope', 'MenuHTTP', 'localStorageService', '$rootScope', function ($scope, MenuHTTP, localStorageService, $rootScope) {
    $scope.logoUrl = 'app/image/logo.jpg';

    $scope.menuName = [];
    $scope.accountFirstName = false;
    $scope.accountName = '';

    MenuHTTP.names(function (data) {
        $scope.menuName = data;
    });

    //take account data
    $rootScope.$on('accountLogin', function (event, data) {
        localStorageService.add('accountName', JSON.stringify(data[0].firstName));
    });

    $scope.accountName = localStorageService.get('accountName');

    $scope.$watch('accountName', function (newValue, oldValue) {
        if (localStorageService.get('accountName') === null) {
            return $scope.accountFirstName = false;
        } else {
            return $scope.accountFirstName = true;
        }
    }, true);

    //log Out
    $scope.logOut = function () {
        localStorageService.remove('accountName');
        $scope.accountFirstName = false;
    };

}]);

/**
* Created by v.stokolosa on 12/4/14.
*/
'use strict';

app.directive('topBar', function () {
    return {
        restrict: 'AE',
        templateUrl: 'app/modules/home/top_menu/top_menu.html'
    };
});

/**
 * Scroll
 */
app.directive("scroll", ['$window', function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 20) {
                scope.scrollFun = true;
            } else {
                scope.scrollFun = false;
            }
            scope.$apply();
        });
    };
}]);

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
app.controller('commentsCtrl', ['$scope', '$translate', 'localStorageService', function ($scope, $translate, localStorageService) {
    //fields
    $scope.yourName = '';
    $scope.yourThoughts = '';

    //localStorage
    $scope.commentsData = [];
    $scope.cacheData = 'commentsData';

    //check localStorage 'commentsData'
    if (localStorageService.get($scope.cacheData) !== null) {
        $scope.commentsData = localStorageService.get($scope.cacheData);
    }

    $scope.$watch('commentsData', function (newValue, oldValue) {
        localStorageService.add($scope.cacheData, JSON.stringify($scope.commentsData));
    }, true);

    $scope.addComments = function () {
        $scope.commentDate = new Date();
        $scope.commentsData.unshift({
            name: $scope.yourName,
            thoughts: $scope.yourThoughts,
            date: $scope.commentDate
        });
        $scope.yourName = '';
        $scope.yourThoughts = '';
    };

    $scope.counts = function () {
        var count = 0,
            yesComments = 'YES',
            noComments = 'NO';

        $scope.titleComments = '';

        angular.forEach($scope.commentsData, function (value, key, obj) {
            count = Object.keys(obj).length;
        });

        //change title of comments
        //bug with -  [$rootScope:infdig]
//        if (count == 0) {
//            $translate('COMMENTS.' + noComments).then(function (title) {
//                $scope.titleComments = title;
//            });
//        } else {
//            $translate('COMMENTS.' + yesComments).then(function (title) {
//                $scope.titleComments = title;
//            });
//        }

        return count;
    };

    $scope.deleteComment = function (name) {
        var i, len;

        for (i = 0, len = $scope.commentsData.length; i < len; i++ ) {
            if ($scope.commentsData[i].name === name) {
                $scope.commentsData.splice(i, 1);
            }
        }
    };
}]);
