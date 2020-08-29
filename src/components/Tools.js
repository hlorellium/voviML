import React, { useEffect } from 'react';
import { ToolsStyles } from '../styled-components';
import pumaPhoto from '../media/Puma_230B.jpg';
import lynxPhoto from '../media/lynx-210b.jpg';

export const Tools = ({ data, setCurrentPage }) => {
    // eslint-disable-next-line
    useEffect(() => setCurrentPage(data.menu.tools), [data.menu.tools]);

    return (
        <ToolsStyles>
            <div>
                <h3>Daewoo Puma 230B</h3>
                <img src={pumaPhoto} alt="Daewoo Puma 230B" />
            </div>
            <div>
                <h3>Daewoo Lynx 210</h3>
                <img src={lynxPhoto} alt="Daewoo Lynx 210" />
            </div>
        </ToolsStyles>
    );
};
