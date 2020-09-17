import React, { useEffect } from 'react';
import { Tools } from './Tools';
import { Gallery } from './Gallery';

export const MoreAbout = ({ data, setCurrentPage }) => {
    // eslint-disable-next-line
    useEffect(() => setCurrentPage(data.menu.about), [data.menu.tools]);

    return (
        <div>
            <Tools data={data} />
            <Gallery data={data} />
        </div>
    );
};
