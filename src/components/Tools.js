import React from 'react';
import { ToolsStyles, ToolCard } from '../styled-components';
import pumaPhoto from '../media/puma_230.jpg';
import lynxPhoto from '../media/lynx-220-01.jpg';

export const Tools = ({ data }) => {

    return (
        <ToolsStyles>
            <h1>Our machine tools</h1>
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
