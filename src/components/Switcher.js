import React from 'react';
import { SwitchButtonStyles } from '../styled-components';

export const Switcher = ({
    currentLanguage,
    setCurrentLanguage,
    setIsLightTheme,
    isLightTheme
}) => {
    return (
        <SwitchButtonStyles isLightTheme={isLightTheme} >
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


            <svg
                onClick={() => {
                    localStorage.setItem('lightTheme', 'true');
                    setIsLightTheme((prevState) => !prevState);
                }}
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 200 200"
                overflow="visible"
            >
                <g id="Moon">
                    <path
                        fill="none"
                        stroke="#000000"
                        stroke-width="7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        d="
		M127.83,174.64c-48.23,0-87.32-39.09-87.32-87.32c0-44.45,33.22-81.15,76.18-86.62C112.8,0.24,108.84,0,104.83,0
		c-55.23,0-100,44.77-100,100c0,55.23,44.77,100,100,100c39.87,0,74.29-23.34,90.35-57.09
		C179.16,162.29,154.94,174.64,127.83,174.64z"
                    />
                </g>
                <g id="Sun">
                    <circle
                        fill="none"
                        stroke="#000000"
                        stroke-width="7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        cx="100"
                        cy="100"
                        r="46.31"
                    />

                    <line
                        fill="none"
                        stroke="#000000"
                        stroke-width="7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        x1="100"
                        y1="41.47"
                        x2="100"
                        y2="4.31"
                    />

                    <line
                        fill="none"
                        stroke="#000000"
                        stroke-width="7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        x1="58.63"
                        y1="58.63"
                        x2="32.42"
                        y2="32.42"
                    />

                    <line
                        fill="none"
                        stroke="#000000"
                        stroke-width="7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        x1="167.6"
                        y1="167.6"
                        x2="141.39"
                        y2="141.39"
                    />

                    <line
                        fill="none"
                        stroke="#000000"
                        stroke-width="7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        x1="141.39"
                        y1="58.61"
                        x2="167.67"
                        y2="32.33"
                    />

                    <line
                        fill="none"
                        stroke="#000000"
                        stroke-width="7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        x1="32.84"
                        y1="168.16"
                        x2="59.12"
                        y2="141.88"
                    />

                    <line
                        fill="none"
                        stroke="#000000"
                        stroke-width="7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        x1="158.53"
                        y1="100"
                        x2="195.69"
                        y2="100"
                    />

                    <line
                        fill="none"
                        stroke="#000000"
                        stroke-width="7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        x1="100"
                        y1="158.53"
                        x2="100"
                        y2="195.68"
                    />

                    <line
                        fill="none"
                        stroke="#000000"
                        stroke-width="7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        x1="41.47"
                        y1="100"
                        x2="4.31"
                        y2="100"
                    />
                </g>
            </svg>
        </SwitchButtonStyles>
    );
};
