/**
 * Created by v.stokolosa on 12/19/14.
 */
'use strict';

angular.module('commentsService', ['ngResource'])
//    .factory('CommentsData', ['$resource', function ($resource) {
//        return $resource('/comments'), {}, {
//            query: {method: 'GET', isArray: false, cache: true}
//        }
//    }])
    .factory('CommentsData', ['$http', function ($http) {
        //cached request
        function getRequest(callback) {
            $http({
                method: 'GET',
                url: '/comments',
                cache: true
            }).success(callback);
        }
        return {
            get: getRequest
        };
    }])
    .factory('CommentsDelete', ['$http', function ($http) {
        function deleteRequest(id, callback) {
            $http({
                method: 'DELETE',
                url: '/comments/' + id
            }).success(callback);
        }
        return {
            del: deleteRequest
        }
    }]);

