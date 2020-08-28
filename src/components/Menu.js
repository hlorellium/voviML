import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';
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
} from '../styled-components';

export const Menu = () => {
    return (
        <Router>
            <Wrapper>
                <BlueBg />
                <Background />

                <Sidebar>
                    <li>
                        <NavLink exact to="/">
                            <NavBtn>About the company</NavBtn>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/tools">
                            <NavBtn>Machine Tools</NavBtn>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/gallery">
                            <NavBtn>Gallery</NavBtn>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact">
                            <NavBtn>Contact</NavBtn>
                        </NavLink>
                    </li>
                </Sidebar>
                <CurrentPage> About </CurrentPage>
                <MainContainer>
                    <Switch>
                        <Route exact path="/">
                            <About />
                        </Route>
                        <Route exact path="/tools">
                            <Tools />
                        </Route>
                        <Route exact path="/gallery">
                            <Gallery />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </MainContainer>
            </Wrapper>
        </Router>
    );
};
