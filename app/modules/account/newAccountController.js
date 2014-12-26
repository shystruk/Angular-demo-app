/**
 * Created by v.stokolosa on 12/26/14.
 */
'use strict';

app.controller('newAccountCtrl', ['$scope', '$location', 'localStorageService', function ($scope, $location, localStorageService) {
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
            $scope.accountData.unshift({
                firstName: $scope.firstNameAccount,
                lastName: $scope.lastNameAccount,
                login: $scope.loginAccount,
                password: $scope.passwordAccount,
                confirmPas: $scope.confirmPasAccount
            });
            $location.path('/new-account');

            $scope.firstNameAccount = '';
            $scope.lastNameAccount = '';
            $scope.loginAccount = '';
            $scope.passwordAccount = '';
            $scope.confirmPasAccount = '';
        }
    };
}]);
