/**
* Created by v.stokolosa on 12/4/14.
*/
'use strict';

app.directive('topBar', function () {
    return {
        restrict: 'AE',
        templateUrl: 'app/modules/home/top_menu/top_menu.html'
    };
});

/**
 * Scroll
 */
app.directive("scroll", ['$window', function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 20) {
                scope.scrollFun = true;
            } else {
                scope.scrollFun = false;
            }
            scope.$apply();
        });
    };
}]);
