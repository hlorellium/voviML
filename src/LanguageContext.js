import React, { createContext, useState } from 'react';

export const languages = {
    en: {
        menu: {
            about: 'About the company',

            tools: 'Machine tools',

            gallery: 'Gallery',
            contacts: 'Сontacts',
        },
        about: {
            welcome: 'Welcome',
            text: `OÜ VoviML is founded in September 1996, in Tartu. Since October 2004, the main occupation of the company is CNC metalworking.
                We have over fifteen years of experience in metalworking to ensure the highest quality of our work and it allows us to promise our clients high precision in manufacturing of details. We use modern technology for metal cutting, to ensure the highest quality, on modern CNC machines.
                All our metalworking is done individually in prototypes, single quantities, and mass production, based on customer requirements.
                We offer metalworking in such material capabilities as steel, stainless steel, aluminium, copper, bronze, brass, plastic, and etc.
                If You'd like to know more about what our company can do for You, please don't hesitate to contact us.`,
        },
        contact: {},
    },
    et: {
        menu: {
            about: 'ETTEVÕTTEST',

            tools: 'TÖÖPINGID',

            gallery: 'GALERII',
            contacts: 'KONTAKT',
        },
        about: {
            welcome: 'Firmast',
            text: `Osaühing VoviML on asutatud septembris 1996.a. Tartus. Alates oktoober 2004.a.  on  põhitegevusalaks  metallitöötlemine. 
            Meie pikaaegsed kogemused metallitööde vallas lubavad oma  klientidele pakkuda kõrge täpsusega detaile kaasaegsetel  CNC-treimispingil.
            Valmistame tooteid üksiktellimusena kui ka suurte sarjadena vastavalt kliendi poolt ette antud joonistele.
            Meil on kogemus erinevate materjalide töötlemisel:  roostevaba teras, pronks, plastid, alumiinium jne.`,
        },
        contact: {},
    },
    ru: {
        menu: {
            about: 'О компании',

            tools: 'Станки',

            gallery: 'Галерея',
            contacts: 'Контакты',
        },
        about: {
            welcome: 'Добро пожаловать!',
            text: `Osaühing VoviML on asutatud septembris 1996.a. Tartus. Alates oktoober 2004.a.  on  põhitegevusalaks  metallitöötlemine.
            Meie pikaaegsed kogemused metallitööde vallas lubavad oma  klientidele pakkuda kõrge täpsusega detaile kaasaegsetel  CNC-treimispingil.
            Valmistame tooteid üksiktellimusena kui ka suurte sarjadena vastavalt kliendi poolt ette antud joonistele.
            Meil on kogemus erinevate materjalide töötlemisel:  roostevaba teras, pronks, plastid, alumiinium jne.`,
        },
        contact: {},
    },
};

export const LanguageContext = createContext({
    languages,
    currentLanguage: localStorage.getItem('currentLanguage') || 'en',
});

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState(
        localStorage.getItem('currentLanguage') || 'en'
    );
    return (
        <LanguageContext.Provider
            value={{
                languages,
                currentLanguage,
                setCurrentLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
