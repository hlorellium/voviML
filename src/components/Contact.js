import React, { useEffect } from 'react';
import { ContactsStyles } from '../styled-components';

export const Contact = ({ data, setCurrentPage }) => {
    // eslint-disable-next-line
    useEffect(() => setCurrentPage(data.menu.contacts), [data.menu.contacts]);

    return (
        <ContactsStyles>
            <div>
                <h3>VoviML OÜ (reg.nr 10125228)</h3>
                <span>{data.contact.adress}:</span>
                <p>Nõo, Lao 11A, Tartumaa 61601, Estonia </p>
                <p>
                    {data.contact.phone}: <span>+37253302482</span> <br />{' '}
                    {data.contact.fax}: <span>+3727304202</span>
                </p>
                <p>
                    {data.contact.mail}: <span>voviml(ät)hot.ee</span> <br />{' '}
                    {data.contact.web}: <span>www.voviml.eu</span>
                </p>
            </div>
        </ContactsStyles>
    );
};
