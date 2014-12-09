/**
 * Top Menu Ctrl
 */
app.controller('topBarCtrl', function ($scope, $http) {
    $http.get('app/template/top-bar/top-menu.json').success(function (data) {
        $scope.menuName = data;
    });

    $scope.logoUrl = 'app/image/logo.jpg';
});


/**
 * Home Ctrl
 */
app.controller('homeCtrl', function($scope) {
    $scope.home = this;
});


/**
 * Home Slider Ctrl
 */
app.controller('homeSliderCtrl', function($scope) {
    $scope.currentSliderIndex = 1;

    $scope.images = [
        'app/image/home-slider/slider-1.jpg',
        'app/image/home-slider/slider-2.jpg',
        'app/image/home-slider/slider-3.jpg'
    ];
});
