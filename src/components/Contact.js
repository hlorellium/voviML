import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { ContactsStyles } from '../styled-components';
import { LocationPin } from './LocationPin';
import { ContactUsForm } from './ContactUsForm';

export const Contact = ({ data, setCurrentPage }) => {
    // eslint-disable-next-line
    useEffect(() => setCurrentPage(data.menu.contacts), [data.menu.contacts]);

    const mapProps = {
        center: {
            lat: 58.268758,
            lng: 26.521602,
        },
        zoom: 17,
    };

    return (
        <ContactsStyles>
            <div>
                <h1>{data.menu.contacts}</h1>
                <span>VoviML OÜ (reg.nr 10125228)</span>
                <div className="contacts">
                    <p>
                        {data.contact.phone}: <span>+37253450405</span> <br />{' '}
                        {data.contact.fax}: <span>+3727304202</span>
                    </p>
                    <p>
                        {data.contact.mail}: <span>voviml(ät)hot.ee</span>{' '}
                        <br /> {data.contact.web}: <span>www.voviml.eu</span>
                    </p>
                </div>
            </div>

            <div className="locationBlock">
                <div className="adress">
                    <h2>{data.contact.location}</h2>

                    <p>Nõo, Lao 11A, Tartumaa 61601, Estonia </p>
                </div>

                <div className="map">
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: 'AIzaSyAblU3Umy0cY0Dq-WX6yXtXe4sTuqtGzHc',
                        }}
                        defaultCenter={mapProps.center}
                        defaultZoom={mapProps.zoom}
                    >
                        <LocationPin
                            lat={58.268758}
                            lng={26.521602}
                            text="Nõo, Lao 11A"
                        />
                    </GoogleMapReact>
                </div>
            </div>
            <ContactUsForm contactUs={data.contact.contactUs} />
        </ContactsStyles>
    );
};
