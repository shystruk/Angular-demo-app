/**
 * Top Menu Ctrl
 */
app.controller('topBarCtrl', function ($scope, $http) {
    $http.get('template/top-bar/top-menu.json').success(function (data) {
        $scope.menuName = data;
    });

    $scope.logoUrl = 'image/logo.jpg';
});


/**
 * Home Ctrl
 */
app.controller('homeCtrl', function() {

});


/**
 * Home Slider Ctrl
 */
app.controller('homeSliderCtrl', function($scope) {
    $scope.currentSliderIndex = 1;

    $scope.images = [
        'image/home-slider/slider-1.jpg',
        'image/home-slider/slider-2.jpg',
        'image/home-slider/slider-3.jpg'
    ];
});
