/**
* Created by v.stokolosa on 12/19/14.
*/
'use strict';


/**
* LocaleStorage
*/
//    Work on localStorage, below rebuild on Socket.io functionality

//app.controller('commentsCtrl', ['$scope', '$translate', 'localStorageService', function ($scope, $translate, localStorageService) {
//    $scope.yourName = '';
//    $scope.yourThoughts = '';
//
//    //localStorage
//    $scope.commentsData = [];
//    $scope.cacheData = 'commentsData';
//
//    //check localStorage 'commentsData'
//    if (localStorageService.get($scope.cacheData) !== null) {
//        $scope.commentsData = localStorageService.get($scope.cacheData);
//    }
//
//    $scope.$watch('commentsData', function (newValue, oldValue) {
//        localStorageService.add($scope.cacheData, JSON.stringify($scope.commentsData));
//    }, true);
//
//    $scope.addComments = function () {
//        $scope.commentDate = new Date();
//        $scope.commentsData.unshift({
//            name: $scope.yourName,
//            thoughts: $scope.yourThoughts,
//            date: $scope.commentDate
//        });
//        $scope.yourName = '';
//        $scope.yourThoughts = '';
//    };
//
//    $scope.counts = function () {
//        var count = 0,
//            yesComments = 'YES',
//            noComments = 'NO';
//
//        $scope.titleComments = '';
//
//        angular.forEach($scope.commentsData, function (value, key, obj) {
//            count = Object.keys(obj).length;
//        });
//
//        //change title of comments
//        //bug with -  [$rootScope:infdig]
////        if (count == 0) {
////            $translate('COMMENTS.' + noComments).then(function (title) {
////                $scope.titleComments = title;
////            });
////        } else {
////            $translate('COMMENTS.' + yesComments).then(function (title) {
////                $scope.titleComments = title;
////            });
////        }
//
//        return count;
//    };
//
//    $scope.deleteComment = function (name) {
//        var i, len;
//
//        for (i = 0, len = $scope.commentsData.length; i < len; i++ ) {
//            if ($scope.commentsData[i].name === name) {
//                $scope.commentsData.splice(i, 1);
//            }
//        }
//    };
//}]);

/**
* Get data from MongoDB/socket.io
*/
app.controller('commentsCtrl', ['$scope', '$translate', 'CommentsData', function ($scope, $translate, CommentData) {
    var socket = io();

    $scope.yourName = '';
    $scope.yourThoughts = '';
    $scope.commentsData = [];
    $scope.commentsCount = '';

//    CommentData.query(function (data) {
//        if (data && data.result && data.body.length) {
//            $scope.commentsData = data.body;
//            console.log($scope.commentsData);
//        }
//    });
    CommentData.names(function (data) {
        $scope.commentsData = data;
        $scope.commentsCount = $scope.commentsData.length;
        console.log($scope.commentsData);
    });

    $scope.addComments = function () {
        $scope.commentDate = new Date();
        $scope.commentsData.unshift({
            name: $scope.yourName,
            thoughts: $scope.yourThoughts,
            date: $scope.commentDate
        });

        $scope.yourName = '';
        $scope.yourThoughts = '';

        socket.emit('comments', $scope.commentsData);
    };

    socket.on('comments', function (data) {
        $scope.commentsData = data;
    });
}]);
