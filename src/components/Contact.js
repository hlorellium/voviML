import React, { useEffect } from 'react';

export const Contact = ({ data, setCurrentPage }) => {
        // eslint-disable-next-line
        useEffect(() => setCurrentPage(data.menu.contacts), [data.menu.contacts]);

    return (
        <div>
            Contact
        </div>
    )
}
