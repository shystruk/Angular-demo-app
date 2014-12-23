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
        'GUEST': 'Guest',
        'SUBMIT': 'Submit',
        'COM_NAME': 'Your Name',
        'COM_TEXTAREA': 'Share your thoughts',
        'COMMENTS': 'All Comments'
    });

    $translateProvider.translations('uk_UA', {
        'PRICE': 'Ціна:',
        'SIGN-IN': 'Увійти',
        'LOGIN': 'Логін',
        'PASSWORD': 'Пароль',
        'WELCOME': 'Вітаємо',
        'GUEST': 'Гостя',
        'TITLE': {
            'V.S.12 | Home': 'V.S.12 | Головна',
            'MacBook': 'МакБук',
            'Login': 'Вхід',
            'MyAccount': 'Мій Кабінет'
        },
        'SUBMIT': 'Відправити',
        'COM_NAME': 'Ваше Ім"я',
        'COM_TEXTAREA': 'Поділіться своєю думкою',
        'COMMENTS': 'Всі коментарі'
    });

    $translateProvider.translations('de', {
        'PRICE': 'Preis:',
        'SIGN-IN': 'Mein Konto',
        'LOGIN': 'Einloggen',
        'PASSWORD': 'Passwort',
        'WELCOME': 'Willkommen',
        'GUEST': 'Gast',
        'TITLE': {
            'V.S.12 | Home': 'V.S.12 | Zuhause',
            'MacBook': 'MacBook',
            'Login': 'Einloggen',
            'MyAccount': 'Mein Konto'
        },
        'SUBMIT': 'Einreichen',
        'COM_NAME': 'Ihren Namen',
        'COM_TEXTAREA': 'Sagen Sie Ihre Meinung',
        'COMMENTS': 'Alle Kommentare Anzeigen'
    });

    $translateProvider.translations('fr', {
        'PRICE': 'Prix:',
        'SIGN-IN': 'Connexion',
        'LOGIN': "S'identifier",
        'PASSWORD': 'Mot de passe',
        'WELCOME': 'Bienvenue',
        'GUEST': 'Invité',
        'TITLE': {
            'V.S.12 | Home': 'V.S.12 | Accueil',
            'MacBook': 'МакБук',
            'Login': 'S"identifier',
            'MyAccount': 'Mon Compte'
        },
        'SUBMIT': 'Soumettre',
        'COM_NAME': 'Votre Nom',
        'COM_TEXTAREA': 'Partagez votre opinion',
        'COMMENTS': 'Tous Les Commentaires'
    });

    $translateProvider.determinePreferredLanguage();
    $translateProvider.useLocalStorage();
}]);
