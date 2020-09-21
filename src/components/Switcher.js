import React, {useEffect} from 'react';
import { SwitchButtonStyles } from '../styled-components';

export const Switcher = ({
    currentLanguage,
    setCurrentLanguage,
    setIsLightTheme,
    isLightTheme,
}) => {
useEffect(() => {
    localStorage.getItem('lightTheme') === "true" ? setIsLightTheme(true) : setIsLightTheme(false);
})
    return (
        <SwitchButtonStyles isLightTheme={isLightTheme}>
            <ul>
                <li>
                    {' '}
                    <span class="phoneNumber">
                        <a href="tel:+79922971903">+37253450405</a>
                    </span>
                </li>
                <li className={currentLanguage === 'en' ? 'selectedLang' : ''}>
                    {' '}
                    <span
                        onClick={() => {
                            localStorage.setItem('currentLanguage', 'en');
                            setCurrentLanguage('en');
                        }}
                    >
                        EN
                    </span>
                </li>
                <li className={currentLanguage === 'et' ? 'selectedLang' : ''}>
                    {' '}
                    <span
                        onClick={() => {
                            localStorage.setItem('currentLanguage', 'et');
                            setCurrentLanguage('et');
                        }}
                    >
                        ET
                    </span>
                </li>
                <li>
                    {' '}
                    <svg
                        onClick={() => {
                            isLightTheme
                                ? localStorage.setItem('lightTheme', 'false')
                                : localStorage.setItem('lightTheme', 'true');
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
                                stroke-width="5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                d="
		M134.74,156.19c-50.28,0-91.04-40.76-91.04-91.04c0-23.75,9.1-45.38,24-61.59C31.9,18.28,6.61,54.32,6.61,96.45
		c0,55.23,43.47,100,97.09,100c40.44,0,75.1-25.47,89.7-61.68C177.55,148.13,157.09,156.19,134.74,156.19z"
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
                </li>
            </ul>
        </SwitchButtonStyles>
    );
};
