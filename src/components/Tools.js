import React, { useEffect } from 'react';
import { ToolsStyles, ToolCard } from '../styled-components';
import pumaPhoto from '../media/puma_230.jpg';
import lynxPhoto from '../media/lynx-220-01.jpg';

export const Tools = ({ data, setCurrentPage }) => {
    // // eslint-disable-next-line
    // useEffect(() => setCurrentPage(data.menu.tools), [data.menu.tools]);

    return (
        <ToolsStyles>
            <h1>Used machine tools</h1>
            <div className="tools">
                <ToolCard>
                    <h3>Daewoo Puma 230B</h3>
                    <img src={pumaPhoto} alt="Daewoo Puma 230B" />
                </ToolCard>
                <ToolCard>
                    <h3>Daewoo Lynx 210</h3>
                    <img src={lynxPhoto} alt="Daewoo Lynx 210" />
                </ToolCard>
            </div>
        </ToolsStyles>
    );
};
