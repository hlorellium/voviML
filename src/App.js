import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';
import './App.css';
import { Menu } from './components/Menu';
import { LanguageProvider } from './LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <Menu />
            <Router>
                <Route path="/tools">
                    <Menu />
                </Route>
                <Route path="/gallery">
                    <Menu />
                </Route>
                <Route path="/contacts">
                    <Menu />
                </Route>
            </Router>
        </LanguageProvider>
    );
}

export default App;
