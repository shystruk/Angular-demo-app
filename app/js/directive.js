/**
 * Created by v.stokolosa on 12/25/14.
 */
'use strict';

/**
 * Scroll for top-bar
 */
app.directive("scroll", ['$window', function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 50) {
                scope.scrollFun = true;
            } else {
                scope.scrollFun = false;
            }
            scope.$apply();
        });
    };
}]);
