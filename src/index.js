import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from './Menu';
import { LanguageProvider } from './LanguageContext';

ReactDOM.render(
    <React.StrictMode>
        <LanguageProvider>
            <Menu />
        </LanguageProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
