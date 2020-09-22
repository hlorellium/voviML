import React from 'react';
import { GalleryGrid } from '../styled-components';
import photo_0 from '../media/gallery/0.jpg';
import photo_1 from '../media/gallery/1.jpg';
import photo_2 from '../media/gallery/2.jpg';
import photo_3 from '../media/gallery/3.jpg';
import photo_4 from '../media/gallery/4.jpg';
import photo_5 from '../media/gallery/5.jpg';

export const Gallery = ({ data }) => {

    return (
        <GalleryGrid>
            <h1>{data.about.portfolio}</h1>
            <div>
                <img src={photo_0} id="photo_0" alt="Detail" />
                <img src={photo_1} id="photo_1" alt="Detail" />
                <img src={photo_2} id="photo_2" alt="Detail" />
                <img src={photo_3} id="photo_3" alt="Detail" />
                <img src={photo_4} id="photo_4" alt="Detail" />
                <img src={photo_5} id="photo_5" alt="Detail" />
            </div>
        </GalleryGrid>
    );
};
