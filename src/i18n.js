import i18 from 'i18next';
import {initReactI18next} from 'react-i18next';
import i18next from 'i18next';

i18next.use(initReactI18next).init({
    resources:{
        en: {
            translations: {
                'Sign Up' : 'Sign Up',
                'Password mismatch' : 'Password mismatch',
                'Username' : 'Username',
                'Display Name' : 'Display Name',
                'Password' : 'Password',
                'Password Repeat' : 'Password Repeat',
                Login : 'Login'
            }
        },
        tr: {
            translations: {
                'Sign Up' : 'Kayıt Ol',
                'Password mismatch' : 'Şifreler aynı olmalı',
                'Username' : 'Kullanıcı Adı',
                'Display Name' : 'Tercih Edilen İsim',
                'Password' : 'Şifre',
                'Password Repeat' : 'Şifre Tekrar',
                Login : 'Giriş'
            }
        }
    },
    fallbackLng: 'tr',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait: true
    }
});

export default i18next;