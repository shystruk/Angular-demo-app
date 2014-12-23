/**
 * Created by v.stokolosa on 12/19/14.
 */
'use strict';
/**
 * LocaleStorage
 */
app.controller('commentsCtrl', ['$scope', 'localStorageService', function ($scope, localStorageService) {
    //fields
    $scope.yourName = '';
    $scope.yourThoughts = '';

    //localStorage
    $scope.commentsData = {};
    $scope.cacheData = 'commentsData';

    //check localStorage 'commentsData'
    if (localStorageService.get($scope.cacheData) !== null) {
        $scope.commentsData = localStorageService.get($scope.cacheData);
    }

    $scope.$watch('commentsData', function (newValue, oldValue) {
        localStorageService.add($scope.cacheData, JSON.stringify($scope.commentsData));
    }, true);

    $scope.addComments = function () {
        $scope.commentsData[$scope.yourName] = $scope.yourThoughts;
        $scope.yourName = '';
        $scope.yourThoughts = '';
    };

    $scope.counts = function () {
        var count = 0;

        angular.forEach($scope.commentsData, function (value, key, obj) {
            count = Object.keys(obj).length;
        });

        return count;
    };
}]);
