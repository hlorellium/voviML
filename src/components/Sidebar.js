import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { NavbarStyles, NavBtn, HamburgerMenu } from '../styled-components';

export const Sidebar = ({ menu }) => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <>
            <NavbarStyles>
                <li>
                    <NavLink exact to="/">
                        <NavBtn>{menu.home}</NavBtn>
                    </NavLink>
                </li>

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
            <HamburgerMenu isOpened={isOpened}>
                {/* <span onClick={() => setIsOpened((isOpened) => !isOpened)}> */}
                {/* <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 480"
                    > */}

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setIsOpened((isOpened) => !isOpened)}
                    viewBox="0 0 640 480"
                >
                    <g id="Cross">
                        <rect
                            x="147.23"
                            y="231.12"
                            width="343.31"
                            height="20"
                            transform="translate(-77.1 296.11) rotate(-45)"
                            fill="#fff"
                            stroke="#fff"
                            stroke-miterlimit="10"
                            stroke-width="5"
                        />
                        <rect
                            x="147.87"
                            y="230"
                            width="339.78"
                            height="20"
                            transform="translate(262.78 -154.4) rotate(45)"
                            fill="#fff"
                            stroke="#fff"
                            stroke-miterlimit="10"
                            stroke-width="5"
                        />
                    </g>
                    <g id="Burger">
                        <rect
                            x="165.68"
                            y="110.28"
                            width="308.64"
                            height="20"
                            fill="#fff"
                            stroke="#fff"
                            stroke-miterlimit="10"
                            stroke-width="5"
                        />
                        <rect
                            x="165.68"
                            y="230"
                            width="308.64"
                            height="20"
                            fill="#fff"
                            stroke="#fff"
                            stroke-miterlimit="10"
                            stroke-width="5"
                        />
                        <rect
                            x="165.68"
                            y="349.72"
                            width="308.64"
                            height="20"
                            fill="#fff"
                            stroke="#fff"
                            stroke-miterlimit="10"
                            stroke-width="5"
                        />
                    </g>
                </svg>
                <div className="openedMenu">
                    <ul>
                        <li>
                            <NavLink
                                exact
                                to="/"
                                onClick={() =>
                                    setIsOpened((isOpened) => !isOpened)
                                }
                            >
                                <NavBtn>{menu.home}</NavBtn>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                exact
                                to="/about"
                                onClick={() =>
                                    setIsOpened((isOpened) => !isOpened)
                                }
                            >
                                <NavBtn>{menu.about}</NavBtn>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                to="/contact"
                                onClick={() =>
                                    setIsOpened((isOpened) => !isOpened)
                                }
                            >
                                <NavBtn>{menu.contacts}</NavBtn>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </HamburgerMenu>
        </>
    );
};
