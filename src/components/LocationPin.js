import React from 'react';
import location from '../media/location.svg';
export const LocationPin = ({ text }) => (
    <div className="pin">
        <img
            src={location}
            alt="location-pin"
            className="pin-icon"
            height="35"
            width="35"
        />
        <p className="pin-text">{text}</p>
    </div>
);
