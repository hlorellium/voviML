import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavbarStyles, NavBtn } from '../styled-components';

export const Sidebar = ({ menu }) => (
    <NavbarStyles>
        <li>
            <NavLink exact to="/">
                <NavBtn>{menu.home}</NavBtn>
            </NavLink>
        </li>
        {/* <li>
            <NavLink exact to="/tools">
                <NavBtn>{menu.tools}</NavBtn>
            </NavLink>
        </li>
        <li>
            <NavLink exact to="/gallery">
                <NavBtn>{menu.gallery}</NavBtn>
            </NavLink>
        </li> */}
        <li>
            <NavLink exact to="/about">
                <NavBtn>{menu.about}</NavBtn>
            </NavLink>
        </li>
        <li>
            <NavLink exact to="/contact">
                <NavBtn>{menu.contacts}</NavBtn>
            </NavLink>
        </li>
    </NavbarStyles>
);
