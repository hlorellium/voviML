import React, { useEffect } from 'react';
import { AboutStyles } from '../styled-components';

export const About = ({ setCurrentPage, data } ) => {
    // eslint-disable-next-line
    useEffect(() => setCurrentPage(data.menu.about), [data.menu.about]);

    return (
        <AboutStyles>
            <h3>{data.about.welcome}</h3>
            <p>{data.about.text}</p>
        </AboutStyles>
    );
};
