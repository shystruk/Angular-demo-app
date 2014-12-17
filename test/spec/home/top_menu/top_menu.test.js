/**
 * Created by v.stokolosa on 12/17/14.
 */
'use strict';

describe('topBarCtrl', function () {
    var scope, $httpBackend;

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(function ($rootScope, $controller, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.when('GET', 'app/modules/home/top_menu/top_menu.json').respond([
            {
                name: 'Mac',
                id: 'mac'
            }
        ]);

        scope = $rootScope.$new();
        $controller('topBarCtrl', {$scope: scope});
    }));

    it('should get request and first category is "Mac"', function () {
        $httpBackend.flush();
        expect(scope.menuName[0].name).toBe('Mac');
    });
});
