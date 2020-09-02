import React, { useContext, useState, useMemo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { SwitchComponent } from './components/SwitchComponent';
import { LangSwitch } from './components/LangSwitch';
import { LanguageContext } from './LanguageContext';
import { Sidebar } from './components/Sidebar';
import {
    MainContainer,
    Wrapper,
    Background,
    BlueBg,
    CurrentPage,
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
    const [currentPage, setCurrentPage] = useState('');
    console.log(data);
    return (
        <Router>
            <Wrapper>
                <BlueBg />
                <DarkBg />
                <Background />
                <LangSwitch
                    currentLanguage={currentLanguage}
                    setCurrentLanguage={setCurrentLanguage}
                />
                <Sidebar menu={data.menu} />
                <CurrentPage> {currentPage}</CurrentPage>
                <MainContainer>
                    <SwitchComponent
                        data={data}
                        setCurrentPage={setCurrentPage}
                    />
                </MainContainer>
            </Wrapper>
        </Router>
    );
};
