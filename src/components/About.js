import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AboutStyles } from '../styled-components';

export const About = ({ setCurrentPage, data }) => {
    // eslint-disable-next-line
    useEffect(() => setCurrentPage(''), [data.menu.about]);
    const [epithet, setEpithet] = useState(data.about.your[0]);
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setEpithet(data.about.your[i]);
            i++;
            if (i === data.about.your.length) i = 0;
        }, 2000);
        return () => clearInterval(interval);
    }, [data.about]);
    return (
        <AboutStyles
            textColor={epithet === data.about.your[0] ? 'red' : 'blue'}
        >
            <div className="header">
                <h3 id="above">{data.about.above}</h3>
                <h1>
                    {data.about.header}{' '}
                    <span className="changingText">{epithet}</span>{' '}
                    {data.about.detail}
                </h1>
            </div>
            <div className="subtitle">
                <p>{data.about.subtitle}</p>
            </div>
            <div className="ctaDiv">
                <Link exact to="/contact">
                    <button className="cta">{data.about.cta}</button>
                </Link>
            </div>
        </AboutStyles>
    );
};
