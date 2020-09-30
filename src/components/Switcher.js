import React, { useEffect } from 'react';
import { SwitchButtonStyles } from '../styled-components';

export const Switcher = ({
    currentLanguage,
    setCurrentLanguage,
    setIsLightTheme,
    isLightTheme,
}) => {
    useEffect(() => {
        localStorage.getItem('lightTheme') === 'true'
            ? setIsLightTheme(true)
            : setIsLightTheme(false);
    }, [setIsLightTheme]);
    return (
        <SwitchButtonStyles isLightTheme={isLightTheme}>
            <ul>
                <li>
                    {' '}
                    <span className="phoneNumber">
                        <a href="tel:+37253450405">+37253450405</a>
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
                <li className={currentLanguage === 'ru' ? 'selectedLang' : ''}>
                    {' '}
                    <span
                        onClick={() => {
                            localStorage.setItem('currentLanguage', 'ru');
                            setCurrentLanguage('ru');
                        }}
                    >
                        RU
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
                                stroke-width="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                d="
		M119.2,155.1C82,136.7,66.7,91.6,85.1,54.4c8.7-17.6,23.3-30.3,40.3-36.8C93.5,15.4,61.6,32.8,46.2,64
		c-20.2,40.9-4.4,89.9,35.3,109.5c29.9,14.8,64.9,8.6,89-12.9C153.9,164.8,135.8,163.2,119.2,155.1z"
                            />
                        </g>
                        <g id="Sun">
                            <circle
                                fill="none"
                                stroke="#000000"
                                stroke-width="10"
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
