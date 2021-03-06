/**
 * Created by v.stokolosa on 12/16/14.
 */
app.controller('loginCtrl', [
    '$scope',
    '$location',
    '$rootScope',
    'localStorageService',
    '$http', function ($scope, $location, $rootScope, localStorageService, $http) {

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
                    $scope.accountSignIn = true;
                } else {
                    $scope.accountSignIn = false;
                }
            });
        };

        $scope.createAccount = function () {
            $location.path('/new-account');
        };
    }
]);

