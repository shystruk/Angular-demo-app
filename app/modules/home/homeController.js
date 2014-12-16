/**
 * Created by v.stokolosa on 12/16/14.
 */
'use strict';

app.controller('homeCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.logOut = function () {
        $location.path = ('home');
    };
}]);