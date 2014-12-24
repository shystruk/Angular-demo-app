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
