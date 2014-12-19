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
