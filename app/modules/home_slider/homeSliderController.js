/**
 * Created by v.stokolosa on 12/16/14.
 */
'use strict';

app.controller('homeSliderCtrl', ['$scope', 'HomeSlider', function ($scope, HomeSlider) {
    $scope.images = [];

    HomeSlider.image(function (data) {
        $scope.images = data;
    });
}]);