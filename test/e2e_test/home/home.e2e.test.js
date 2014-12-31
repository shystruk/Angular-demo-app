/**
 * Created by v.stokolosa on 12/18/14.
 */
'use strict';

describe('app', function() {
    var ptor;

    beforeEach(function () {
        ptor = protractor;
    });

    //check title
    describe('$routeProvider', function () {
        it('should display correct title on home page', function() {
            browser.get('/#');
            expect(browser.getTitle()).toBe('V.S.12 | Home');
        });
    });

    //check title after click SIGN IN
    describe('loginCtrl', function () {
        var button = element(By.id('protTest'));

        it('should display correct title when we change locale', function () {
            button.click();
            expect(browser.getTitle()).toBe('Login');
        });
    });

    //check change language
    describe('changeLangCtrl', function () {
        var button = element(By.id('protTest2'));

        it('should change language', function () {
            browser.actions().
                mouseMove(browser.findElement(ptor.By.id('protTest1'))).
                perform();
            button.click();

            element(By.id('proTest3')).getText().then(function (new_text) {
                expect(new_text).toBe('Créer Un Compte');
            });
        });
    });

});
