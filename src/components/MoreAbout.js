import React, { useEffect } from 'react';
import { Tools } from './Tools';
import { Gallery } from './Gallery';
import { MoreAboutStyles } from '../styled-components';

export const MoreAbout = ({ data, setCurrentPage }) => {
    // eslint-disable-next-line
    useEffect(() => setCurrentPage(data.menu.about), [data.menu.tools]);

    return (
        <MoreAboutStyles>
            <Tools data={data} />
            <Gallery data={data} />
        </MoreAboutStyles>
    );
};
