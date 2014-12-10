/**
 * Created by v.stokolosa on 12/10/14.
 */
'use strict';

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en_US', {
        'PRICE': 'Price:',
        'SIGN-IN': 'Sign-In'
    });

    $translateProvider.translations('uk_UA', {
        'PRICE': 'Ціна:',
        'SIGN-IN': 'Увійти'
    });

    $translateProvider.translations('de', {
        'PRICE': 'Preis:',
        'SIGN-IN': 'Mein Konto'
    });

    $translateProvider.translations('fr', {
        'PRICE': 'Prix:',
        'SIGN-IN': 'Connexion'
    });

    $translateProvider.determinePreferredLanguage();
}]);
