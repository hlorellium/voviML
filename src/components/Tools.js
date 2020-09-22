import React, { useState } from 'react';
import { ToolsStyles } from '../styled-components';
import pumaPhoto from '../media/puma2.png';
import lynxPhoto from '../media/lynx.png';

export const Tools = ({ data }) => {
    const [chosenTool, setChosenTool] = useState('lynx');
    return (
        <ToolsStyles chosenTool={chosenTool}>
            <div>
                <h1>{data.about.tools}</h1>
                <p>
                    {data.about.toolsSub}
                </p>
                <p
                    className={
                        chosenTool === 'lynx'
                            ? 'activeLink toolLink'
                            : 'toolLink'
                    }
                    onClick={() => {
                        setChosenTool('lynx');
                    }}
                >
                    Daewoo Lynx 210
                </p>
                <p
                    className={
                        chosenTool === 'puma'
                            ? 'activeLink toolLink'
                            : 'toolLink'
                    }
                    onClick={() => {
                        setChosenTool('puma');
                    }}
                >
                    Daewoo Puma 230B
                </p>
            </div>

            <div className="tools">
                <img src={lynxPhoto} className="lynx" alt="Daewoo Lynx 210" />
                <img src={pumaPhoto} className="puma" alt="Daewoo Puma 230B" />
            </div>
        </ToolsStyles>
    );
};
