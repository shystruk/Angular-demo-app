/**
 * Created by v.stokolosa on 12/10/14.
 */
'use strict';

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en_US', {
        'PRICE': 'Price:',
        'SIGN-IN': 'Sign-In',
        'LOGIN': 'Login',
        'PASSWORD': 'Password',
        'WELCOME': 'Welcome',
        'GUEST': 'Guest'
    });

    $translateProvider.translations('uk_UA', {
        'PRICE': 'Ціна:',
        'SIGN-IN': 'Увійти',
        'LOGIN': 'Логін',
        'PASSWORD': 'Пароль',
        'WELCOME': 'Вітаємо',
        'GUEST': 'Гостя'
    });

    $translateProvider.translations('de', {
        'PRICE': 'Preis:',
        'SIGN-IN': 'Mein Konto',
        'LOGIN': 'Einloggen',
        'PASSWORD': 'Passwort',
        'WELCOME': 'Willkommen',
        'GUEST': 'Gast'
    });

    $translateProvider.translations('fr', {
        'PRICE': 'Prix:',
        'SIGN-IN': 'Connexion',
        'LOGIN': "S'identifier",
        'PASSWORD': 'Mot de passe',
        'WELCOME': 'Bienvenue',
        'GUEST': 'Invité'
    });

    $translateProvider.determinePreferredLanguage();
    $translateProvider.useLocalStorage();
}]);
