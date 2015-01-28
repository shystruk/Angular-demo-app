/**
 * Created by v.stokolosa on 12/19/14.
 */
'use strict';

app.service('commentsJSON', ['$http', function ($http) {
    return {
        getJSON: function () {
            return $http.get('modules/comments/comments.json');
        }
    };
}]);
