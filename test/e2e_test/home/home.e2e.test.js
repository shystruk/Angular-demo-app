/**
 * Created by v.stokolosa on 12/18/14.
 */
'use strict';

describe('app', function() {
    var ptor;

    beforeEach(function () {
        ptor = protractor;
    });

    describe('$routeProvider', function () {
        it('should display correct title on home page', function() {
            browser.get('/#');
            expect(browser.getTitle()).toBe('V.S.12 | Home');
        });
    });

    describe('changeLangCtrl', function () {
        ptor = protractor;
        var button = element(by.id('protTest'));
        browser.get('#/login');

        it('should display correct title when we change locale', function () {
            ptor.actions().
                mouseMove(ptor.findElement(protractor.by.id('protTest_1'))).
                perform();
            button.click();
            expect(browser.getTitle()).toBe('Login');
        });
    });

});
