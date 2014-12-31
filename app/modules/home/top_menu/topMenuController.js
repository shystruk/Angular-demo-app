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
    $scope.accountName = '';
    $scope.accountFirstName = false;

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
