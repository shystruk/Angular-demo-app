/**
 * Created by v.stokolosa on 12/19/14.
 */
'use strict';

/**
 * Comments Controller
 */
describe('commentsCtrl', function () {
    var scope,
        commentsStore = '';

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('commentsCtrl', {$scope: scope});

        //add data to array
        scope.yourName = 'Vasyl';
        scope.yourThoughts = 'Awesome app.';
        scope.commentsData.unshift({
            name: scope.yourName,
            thoughts: scope.yourThoughts
        });
    }));

    it('commentsData should have JSON format', function () {
        commentsStore = JSON.stringify(scope.commentsData);

        expect(commentsStore).toBe('[{"name":"Vasyl","thoughts":"Awesome app."}]');
    });

    it('count shouldn"t be ziro', function () {
        var count = 0;

        scope.counts = function () {
            return count = scope.commentsData.length;
        };
        scope.counts();

        expect(count).not.toEqual(0);
    });

    it('should delete comment whick click', function () {
        scope.deleteComment(scope.yourName);

        expect(scope.commentsData.length).toEqual(0);
    });
});

/**
 * Comments Directive
 */
describe('commentsBlock Directive', function () {
    var $compile, $rootScope, element;

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.module('app/modules/comments/comments.html'));
    beforeEach(angular.mock.inject(function (_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    it('should display 1 input and 1 textarea', function () {
        element = angular.element('<comments-block></comments-block>');
        $compile(element)($rootScope);
        $rootScope.$digest();

        expect(element.find('input').length).toEqual(1);
        expect(element.find('textarea').length).toEqual(1);
    });

});
