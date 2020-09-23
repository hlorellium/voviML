import React, { createContext, useState } from 'react';

export const languages = {
    en: {
        menu: {
            about: 'About the company',

            tools: 'Machine tools',
            home: 'Home',
            gallery: 'Gallery',
            contacts: 'Contacts',
        },
        about: {
            above: 'VoviML Est. 1996',
            header: 'Let us create ',
            about: 'About',
            portfolio: 'Portfolio',
            your: ['your', 'reliable', 'quality'],
            detail: 'detail',
            cta: 'Contact Us',
            cta2: 'About Us',
            tools: 'The machines we use',
            toolsSub:
                'We use modern technology for metal cutting, to ensure the highest quality, on modern CNC machines.',
            text: `All our metalworking is done individually in prototypes, single quantities, and mass production, based on customer requirements. 
            We offer metalworking in such material capabilities as steel, stainless steel, aluminum, copper, bronze, brass, plastic, etc.`,
            subtitle:
                'We have over fifteen years of experience in metalworking and it allows us to promise our clients high precision in manufacturing of details. ',
        },

        contact: {
            adress: 'Adress',
            phone: 'Phone',
            fax: 'Fax',
            mail: 'Mail',
            web: 'Web',
            location: 'Location',
            contactUs: {
                header: 'Contact Us',
                labelName: 'Your name',
                labelMail: 'Your email',
                labelPhone: 'Your phone',
                labelMessage: 'Your message',
                button: 'Send',
            },
        },
    },
    ru: {
        menu: {
            about: 'О компании',

            tools: 'Станки',
            home: 'Главная',
            gallery: 'Галлерея',
            contacts: 'Контакты',
        },
        about: {
            above: 'VoviML Est. 1996',
            header: 'создадим ',
            about: 'О нас',
            portfolio: 'Портфолио',
            your: ['вашу', 'надёжную', 'качественную'],
            detail: 'деталь',
            cta: 'Связаться с нами',
            cta2: 'О нас',
            tools: 'Используемые станки',
            toolsSub:
                'Для обеспечения высочайшего качества мы используем современные технологии резки металла на современных станках с ЧПУ.',
            text: `Вся наша металлообработка выполняется индивидуально, в виде прототипов, единичных партий или серийного производства, в соответствии с требованиями заказчика.
            Мы предлагаем услуги металлообработки для таких материалов, как сталь, нержавеющая сталь, алюминий, медь, бронза, латунь, пластик и др.`,
            subtitle:
                'Мы обладаем более чем пятнадцатилетним опытом в области металлообработки, что позволяет нам обещать нашим клиентам высокую точность изготовления деталей.',
        },

        contact: {
            adress: 'Адрес',
            phone: 'Телефон',
            fax: 'Факс',
            mail: 'Почта',
            web: 'Веб',
            location: 'Расположение',
            contactUs: {
                header: 'Связаться с нами',
                labelName: 'Ваше имя',
                labelMail: 'Ваш email',
                labelPhone: 'Ваш номер телефона',
                labelMessage: 'Ваше сообщение',
                button: 'Отправить',
            },
        },
    },
    et: {
        menu: {
            about: 'Ettevõttest',
            home: 'Avaleht',

            tools: 'TÖÖPINGID',

            gallery: 'GALERII',
            contacts: 'Kontakt',
        },
        about: {
            above: 'VoviML Est. 1996',
            about: 'Ettevõttest',
            portfolio: 'Tehtud tööd',
            header: 'Toodame ',
            detail: 'detaili',
            cta: 'Võta meiega ühendust',
            cta2: 'Meist',
            tools: 'Meie tööpingid',
            toolsSub:
                'Kõrgema kvaliteedi tagamiseks kasutame kaasaegsetes CNC-masinates metalli lõikamiseks kaasaegset tehnoloogiat.',

            text: `Kogu meie metallitöötlus  toimub individuaalselt prototüüpide, üksikute koguste ja masstoodanguna, lähtudes kliendi soovist.Pakume metallitöötlust selliste materjalide osas nagu teras, roostevaba teras, alumiinium, vask, pronks, messing, plastik jne.`,
            subtitle: `Osaühing VoviML on asutatud septembris 1996.a. Tartus. Alates oktoober 2004.a.  on  põhitegevusalaks  metallitöötlemine. 
 `,
            your: ['Teile', 'töökindel', 'Kvaliteet'],
        },
        //               Meie pikaaegsed kogemused metallitööde vallas lubavad oma  klientidele pakkuda kõrge täpsusega detaile kaasaegsetel  CNC-treimispingil.
        contact: {
            adress: 'Aadress',
            phone: 'Telefon',
            fax: 'Faksimine',
            mail: 'E-post',
            web: 'Web',
            location: 'Asukoht',

            contactUs: {
                header: 'Võta meiega ühendust',
                labelName: 'Sinu nimi',
                labelMail: 'Sinu email',
                labelPhone: 'Sinu telefoninumber',
                labelMessage: 'Sinu sõnum',
                button: 'Saada',
            },
        },
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
