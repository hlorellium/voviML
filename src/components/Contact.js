import React, { useEffect, useState, useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import mapboxgl from 'mapbox-gl';
import { ContactsStyles } from '../styled-components';
import { LocationPin } from './LocationPin';
import { ContactUsForm } from './ContactUsForm';

export const Contact = ({ data, setCurrentPage }) => {
    // eslint-disable-next-line
    useEffect(() => setCurrentPage(data.menu.contacts), [data.menu.contacts]);
    const [mapProps, setMapProps] = useState({
        lat: 58.268729,
        lng: 26.521546,
        zoom: 16,
    });

    const mapContainer = useRef();
    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [mapProps.lng, mapProps.lat],
            zoom: mapProps.zoom,
        });

        const marker = new mapboxgl.Marker(mapContainer)
            .setLngLat([mapProps.lng, mapProps.lat])
            .addTo(map);

    }, []);
    // const mapProps = {
    //     center: {

    //     },

    // };

    return (
        <ContactsStyles>
            <div>
                <h1>{data.menu.contacts}</h1>
                <span>VoviML OÜ (reg.nr 10125228)</span>
                <div className="contacts">
                    <p>
                        {data.contact.phone}:{' '}
                        <span>
                            <a href="tel:+37253450405">+37253450405</a>{' '}
                        </span>
                        <br />{' '}
                    </p>
                    <p>
                        {data.contact.mail}:{' '}
                        <span>
                            <a href="mailto:vovimlou@gmail.com">
                                vovimlou@gmail.com
                            </a>
                        </span>{' '}
                        <br /> {data.contact.web}:{' '}
                        <span>
                            <a href="https://www.voviml.eu">www.voviml.eu</a>
                        </span>
                    </p>
                </div>
            </div>

            <div className="locationBlock">
                <div className="adress">
                    <h2>{data.contact.location}</h2>

                    <p>Nõo, Lao 11A, Tartumaa 61601, Estonia </p>
                </div>

                <div  className="map">
                    <div ref={mapContainer} className="mapContainer" />
                </div>
            </div>
            <ContactUsForm contactUs={data.contact.contactUs} />
        </ContactsStyles>
    );
};
