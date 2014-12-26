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
        'COMMENT': 'All Comments',
        'COMMENTS': {
            'YES': 'All Comments',
            'NO': 'No Comments Yet'
        },
        'REMOVE': 'Remove',
        'CREATE': 'Create Account',
        'FIRSTNAME': 'First Name',
        'LASTNAME': 'Last Name',
        'CONFIRMPASSWORD': 'Confirm Password'
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
            'My Account': 'Мій Кабінет',
            'Ne wAccount': 'Новий Профіль'
        },
        'SUBMIT': 'Відправити',
        'COM_NAME': 'Ваше Ім"я',
        'COM_TEXTAREA': 'Поділіться своєю думкою',
        'COMMENT': 'Всі коментарі',
        'REMOVE': 'Видалити',
        'CREATE': 'Створити Профіль',
        'FIRSTNAME': 'Ім"я',
        'LASTNAME': 'Прізвище',
        'CONFIRMPASSWORD': 'Повторіть Пароль'
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
            'My Account': 'Mein Konto',
            'New Account': 'Neuer Kunde'
        },
        'SUBMIT': 'Einreichen',
        'COM_NAME': 'Ihren Namen',
        'COM_TEXTAREA': 'Sagen Sie Ihre Meinung',
        'COMMENT': 'Alle Kommentare Anzeigen',
        'REMOVE': 'Entfernen',
        'CREATE': 'Benutzerkonto Erstellen',
        'FIRSTNAME': 'Vorname',
        'LASTNAME': 'Nachname',
        'CONFIRMPASSWORD': 'Passwort bestätigen'
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
            'My Account': 'Mon Compte',
            'New Account': 'Nouveau compte'
        },
        'SUBMIT': 'Soumettre',
        'COM_NAME': 'Votre Nom',
        'COM_TEXTAREA': 'Partagez votre opinion',
        'COMMENT': 'Tous Les Commentaires',
        'REMOVE': 'Supprimer',
        'CREATE': 'Créer Un Compte',
        'FIRSTNAME': 'Prénom',
        'LASTNAME': 'Nom',
        'CONFIRMPASSWORD': 'Confirmez le mot de passe'
    });

    $translateProvider.determinePreferredLanguage();
    $translateProvider.useLocalStorage();
}]);
