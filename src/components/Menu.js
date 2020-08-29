import React, { useContext, useState, useMemo } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';
import { About } from './About';
import { Tools } from './Tools';
import { Contact } from './Contact';
import { Gallery } from './Gallery';
import {
    MainContainer,
    Sidebar,
    Wrapper,
    NavBtn,
    Background,
    BlueBg,
    CurrentPage,
    LangSwitch,
    DarkBg
} from '../styled-components';

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

    return (
        <Router>
            <Wrapper>
                <BlueBg />
                <DarkBg />
                <Background />
                <LangSwitch>
                    <span
                        onClick={() => {
                            localStorage.setItem('currentLanguage', 'en');
                            setCurrentLanguage('en');
                        }}
                        className={
                            currentLanguage === 'en' ? 'selectedLang' : ''
                        }
                    >
                        EN
                    </span>
                    <span
                        onClick={() => {
                            localStorage.setItem('currentLanguage', 'et');
                            setCurrentLanguage('et');
                        }}
                        className={
                            currentLanguage === 'et' ? 'selectedLang' : ''
                        }
                    >
                        ET
                    </span>
                    <span
                        onClick={() => {
                            localStorage.setItem('currentLanguage', 'ru');
                            setCurrentLanguage('ru');
                        }}
                        className={
                            currentLanguage === 'ru' ? 'selectedLang' : ''
                        }
                    >
                        RU
                    </span>
                </LangSwitch>
                <Sidebar>
                    <li>
                        <NavLink exact to="/">
                            <NavBtn>{data.menu.about}</NavBtn>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/tools">
                            <NavBtn>{data.menu.tools}</NavBtn>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/gallery">
                            <NavBtn>{data.menu.gallery}</NavBtn>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact">
                            <NavBtn>{data.menu.contacts}</NavBtn>
                        </NavLink>
                    </li>
                </Sidebar>
                <CurrentPage> {currentPage}</CurrentPage>
                <MainContainer>
                    <Switch>
                        <Route exact path="/">
                            <About data={data} setCurrentPage={setCurrentPage} />
                        </Route>
                        <Route exact path="/tools">
                            <Tools data={data} setCurrentPage={setCurrentPage}  />
                        </Route>
                        <Route exact path="/gallery">
                            <Gallery data={data} setCurrentPage={setCurrentPage}  />
                        </Route>
                        <Route exact path="/contact">
                            <Contact data={data} setCurrentPage={setCurrentPage}  />
                        </Route>
                    </Switch>
                </MainContainer>
            </Wrapper>
        </Router>
    );
};
