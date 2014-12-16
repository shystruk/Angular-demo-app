'use strict';

describe('loginCtrl', function () {
    var scope;

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('loginCtrl', {$scope: scope});
    }));
    it('should have variable text = "Hello World!"', function () {
        expect(scope.text).toBe('Hello World!');
    });
});