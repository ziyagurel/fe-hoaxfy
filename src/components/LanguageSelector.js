import React from 'react';
import {withTranslation} from 'react-i18next';
import {changeLanguage} from '../api/apiCalls'

const LanguageSelector = (props) => {
    const onChanceLanguage = language => {
        const {i18n} = props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    }

    return (
        <div className="container">
            <img src="https://www.countryflags.io/tr/flat/24.png" alt="Turks Flag" onClick={() => onChanceLanguage('tr')} style={{cursor:'pointer'}}></img>
            <img src="https://www.countryflags.io/us/flat/24.png" alt="USA Flag" onClick={() => onChanceLanguage('en')} style={{cursor:'pointer'}}></img>
        </div>
    );
};

export default withTranslation()(LanguageSelector);