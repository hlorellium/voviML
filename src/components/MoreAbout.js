import React, { useEffect } from 'react';
import { Tools } from './Tools';
import { Gallery } from './Gallery';
import AboutPhoto from '../media/tokar-scaled.jpg';
import { MoreAboutStyles } from '../styled-components';

export const MoreAbout = ({ data, setCurrentPage }) => {
    // eslint-disable-next-line
    useEffect(() => setCurrentPage(data.menu.about), [data.menu.tools]);

    return (
        <MoreAboutStyles>
            <div className="aboutBlock">
                <div>
                    <h1>{data.about.about}</h1>
                    <p>{data.about.text}</p>
                </div>
                <img src={AboutPhoto} alt="Tokar"></img>
            </div>
            <Tools data={data} />
            <Gallery data={data} />
        </MoreAboutStyles>
    );
};
