/**
 * Created by v.stokolosa on 12/16/14.
 */
'use strict';

angular.module('homeSliderService', ['ngResource']).
    factory('HomeSlider', ['$http', function ($http) {
        //cached request
        function getRequest(callback) {
            $http({
                method: 'GET',
                url: 'app/modules/home_slider/home_slider.json',
                cache: true
            }).success(callback);
        }
        return {
            image: getRequest
        };
    }]);