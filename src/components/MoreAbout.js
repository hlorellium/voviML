import React, { useEffect } from 'react';
import { Tools } from './Tools';
import { Gallery } from './Gallery';
import AboutPhoto from '../media/tokar-scaled.jpg';
import { Link } from 'react-router-dom';
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
            <Link exact to="/contact" className="contactLink">
                <button className="cta">{data.about.cta}</button>
            </Link>
        </MoreAboutStyles>
    );
};
