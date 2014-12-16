/**
 * Created by v.stokolosa on 12/16/14.
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
