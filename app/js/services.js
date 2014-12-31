///**
// * Created by v.stokolosa on 12/30/14.
// */
//'use strict';
//
//app.factory('loginData', ['$rootScope', 'localStorageService', function ($rootScope, localStorageService) {
//    $rootScope.$on('accountLogin', function (event, data) {
//        localStorageService.add('accountName', JSON.stringify(data[0].firstName));
//    });
//
//    var accountName = localStorageService.get('accountName');
//
//    return {
//        firstName: function () {
//            var accountFirstName;
//
//            $rootScope.$watch('accountName', function (newValue, oldValue) {
//                if (localStorageService.get('accountName') === null) {
//                    return accountFirstName = false;
//                } else {
//                    return accountFirstName = true;
//                }
//            }, true);
//
//            if (localStorageService.get('accountName') === null) {
//                accountFirstName = false;
//            } else {
//                accountFirstName = true;
//            }
//
//            return accountFirstName;
//        },
//        signIn: function () {
//            var signInData = localStorageService.get('accountData');
//
//                var i = 0;
//
//                angular.forEach(signInData, function (value, key, obj) {
//                    i++;
//                    loginData = signInData[key].login;
//                    passwordData = signInData[key].password;
//
//                    //check validity of data
//                    if (loginData === $scope.credentials.login && $scope.passwordData === $scope.credentials.password) {
//                        $location.path('/account');
//                        console.log($scope.signInData[key].firstName);
//                        scope.accountSignIn = true;
//                    } else {
//                        $scope.accountSignIn = false;
//                    }
//                    console.log($scope.accountSignIn);
//                });
//        }
//    };
//}]);
