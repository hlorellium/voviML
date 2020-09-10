import React from 'react';
import { NavLink } from 'react-router-dom';

import { SidebarStyles, NavBtn } from '../styled-components';

export const Sidebar = ({ menu }) => (
    <SidebarStyles>
        <li>
            <NavLink exact to="/">
                <NavBtn>{menu.about}</NavBtn>
            </NavLink>
        </li>
        <li>
            <NavLink exact to="/tools">
                <NavBtn>{menu.tools}</NavBtn>
            </NavLink>
        </li>
        <li>
            <NavLink exact to="/gallery">
                <NavBtn>{menu.gallery}</NavBtn>
            </NavLink>
        </li>
        <li>
            <NavLink exact to="/contact">
                <NavBtn>{menu.contacts}</NavBtn>
            </NavLink>
        </li>
    </SidebarStyles>
);