import React, { useEffect } from 'react';
import { ContactsStyles } from '../styled-components';
import GoogleMapReact from 'google-map-react';
import { LocationPin } from './LocationPin';

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
                <h3>VoviML OÜ (reg.nr 10125228)</h3>
                <span className="adress">{data.contact.adress}:</span>
                <p>Nõo, Lao 11A, Tartumaa 61601, Estonia </p>
                <p>
                    {data.contact.phone}: <span>+37253450405</span> <br />{' '}
                    {data.contact.fax}: <span>+3727304202</span>
                </p>
                <p>
                    {data.contact.mail}: <span>voviml(ät)hot.ee</span> <br />{' '}
                    {data.contact.web}: <span>www.voviml.eu</span>
                </p>
            </div>
            <div className="map">
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: process.env.GOOGLE_API,
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
        </ContactsStyles>
    );
};
