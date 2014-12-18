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
