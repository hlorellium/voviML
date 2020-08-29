import React from 'react';
import './App.css';
import { Menu } from './components/Menu';
import { LanguageProvider } from './LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <Menu />
        </LanguageProvider>
    );
}

export default App;
