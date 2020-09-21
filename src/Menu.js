import React, { useContext, useState, useMemo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { SwitchComponent } from './components/SwitchComponent';
import { Switcher } from './components/Switcher';
import { LanguageContext } from './LanguageContext';
import { Sidebar } from './components/Sidebar';
import {
    MainContainer,
    Wrapper,
    Background,
    BlueBg,
    DarkBg,
} from './styled-components';

export const Menu = () => {
    const { languages, currentLanguage, setCurrentLanguage } = useContext(
        LanguageContext
    );
    const data = useMemo(
        () =>
            currentLanguage === 'en'
                ? languages.en
                : currentLanguage === 'ru'
                ? languages.ru
                : languages.et,
        // eslint-disable-next-line
        [currentLanguage]
    );
const [isLightTheme, setIsLightTheme] = useState(false);
    const [currentPage, setCurrentPage] = useState('');
    console.log(data);
    return (
        <Router>
            <Wrapper className={isLightTheme ? "lightTheme" : ""}>
                <BlueBg />
                <DarkBg rowEnd={currentPage === '' ? 3 : 3} />
                <Background rowEnd={currentPage === '' ? 3 : 2} />
                <Switcher
                    currentLanguage={currentLanguage}
                    setCurrentLanguage={setCurrentLanguage}
                    setIsLightTheme={setIsLightTheme}
                    isLightTheme={isLightTheme}
                />
                <Sidebar menu={data.menu} />
                <MainContainer >
                    <SwitchComponent
                        data={data}
                        setCurrentPage={setCurrentPage}
                    />
                </MainContainer>
            </Wrapper>
        </Router>
    );
};
