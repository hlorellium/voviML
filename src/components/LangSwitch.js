import React from 'react';

import { LangSwitchStyles } from '../styled-components';

export const LangSwitch = ({ currentLanguage, setCurrentLanguage }) => {
    return (
        <LangSwitchStyles>
            <span
                onClick={() => {
                    localStorage.setItem('currentLanguage', 'en');
                    setCurrentLanguage('en');
                }}
                className={currentLanguage === 'en' ? 'selectedLang' : ''}
            >
                EN
            </span>
            <span
                onClick={() => {
                    localStorage.setItem('currentLanguage', 'et');
                    setCurrentLanguage('et');
                }}
                className={currentLanguage === 'et' ? 'selectedLang' : ''}
            >
                ET
            </span>
        </LangSwitchStyles>
    );
};
