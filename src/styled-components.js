import styled from 'styled-components';
import bgPhotoLight from './media/geardark.jpg';
import bgPhoto from './media/gearwide.jpg';

export const Wrapper = styled.div`
    height: 100vh;
    color: var(--black);
    display: grid;
    grid-template-columns: 0.7fr 1.5fr repeat(2, 1.15fr) 0.7fr;
    grid-template-rows: 60px 1fr;
    gap: 0px 20px;
    overflow-x: hidden;
    overflow-y: auto;
    @media (max-width: 1024px) {
        grid-template-columns: 0.1fr 1.6fr repeat(2, 1.6fr) 0.1fr;
    }

    @media (max-width: 900px) {
        grid-template-columns: 0.05fr 2fr repeat(2, 1.3fr) 0fr;
        grid-template-rows: 60px 3fr;
        gap: 0px 10px;
    }
`;

export const MainContainer = styled.div`
    grid-area: 2 / 2 / 3 / 5;
    transition: 0.1s ease-in-out;
    padding-top: 30px;
    padding-bottom: 30px;
    @media (max-width: 1024px) {
        grid-area: 2 / 2 / 3 / 5;
        margin-bottom: 45px;
    }
    place-content: center;
`;

export const NavbarStyles = styled.ul`
    z-index: 3;
    grid-area: 1 / 2 / 2 / 4;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    font-family: Poppins, sans-serif;
    a {
        font-weight: 500;
        font-size: 0.8em;
        color: var(--white);
        text-decoration: none;
    }

    li {
        position: relative;
        margin: 0;
        opacity: 0.75;
        transition: all 0.3s ease-in-out 0s;
    }
    li:hover {
        opacity: 1;
        transition: all 0.3s ease-in-out 0s;
    }
    li > a {
        color: var(--white);
        text-decoration: none;
    }
    li > a::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--white);
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
    }
    li > a:hover::before {
        visibility: visible;
        transform: scaleX(1);
    }

    .active::before {
        visibility: visible;
        transform: scaleX(1);
    }
    @media (max-width: 1200px) {
        grid-area: 1 / 1 / 2 / 4;
    }
    @media (max-width: 900px) {
        display: none;
    }
`;

export const HamburgerMenu = styled.div`
    display: none;
    color: #fff;
    grid-area: 1 / 4 / 2 / 5;
    justify-content: flex-end;
    transition: 0.1s ease-in-out;

    svg {
        transition: 0.5s ease-in-out;
        height: 40px;
        width: 40px;
        stroke: red;
        z-index: 3;
        align-self: center;
        cursor: pointer;
        margin: 0 25px;
    }
    #Burger rect {
        opacity: ${(props) => (props.isOpened ? '0' : '1')};
        transition: 0.3s ease-in-out;
        fill: var(--white);
        stroke: var(--white);
    }
    #Cross rect {
        opacity: ${(props) => (props.isOpened ? '1' : '0')};
        transition: 0.3s ease-in-out;
        fill: #fff;
        stroke: #fff;
    }

    .openedMenu {
        display: flex;
        opacity: ${(props) => (props.isOpened ? 1 : 0)};

        width: ${(props) => (props.isOpened ? '100vw' : '0')};
        position: fixed;
        flex-direction: column;
        justify-content: center;
        top: 0;
        left: 0;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.95);
        z-index: 2;
        transition: 0.15s ease-in-out;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        font-family: Poppins, sans-serif;
        height: 50%;
        padding: 0;
    }

    .activity {
        opacity: 1;
    }
 
    li {
        position: relative;
        margin: 0;
        opacity: 0.8;
        transition: all 0.3s ease-in-out 0s;
    }
    li > a {
        font-weight: 500;
        font-size: 2em;
        color: #fff;
        text-decoration: none;
        border-bottom: 1px solid black;
        text-align: center;
        color: #fff;
        text-decoration: none;
    }
    li > a::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #fff;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
    }
    li > a:hover::before {
        visibility: visible;
        transform: scaleX(1);
    }
    .active::before {
        visibility: visible;
        transform: scaleX(1);
    }

    @media (max-width: 900px) {
        display: flex;
        visibility: visible;
    }
`;

export const NavBtn = styled.div`
    padding: 10px;
    transition: 0.1s ease-in-out;
    :hover {
        transition: 0.1s ease-in-out;
    }
`;

export const AboutStyles = styled.div`
    color: var(--white);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .header {
        display: flex;
        flex-direction: column;
    }

    #above {
        font-size: 1.3em;
        font-weight: lighter;
        margin: 0;
        color: var(--dark-gray);
    }
    .header h1 {
        font-size: 4rem;
        color: var(--white);
        font-weight: 800;
        margin: 0;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        font-family: Poppins, sans-serif;
    }

    .changingText {
        color: var(--${(props) => props.textColor});
    }

    .subtitle p {
        font-size: 0.8em;
        white-space: pre-line;
        color: var(--dark-gray);
        font-weight: 300;
    }
    .ctaDiv {
        display: flex;
        place-content: center;
        margin-top: 1em;
    }
    .cta {
        padding: 15px;
        font-size: 1.15em;
        font-weight: 700;
        cursor: pointer;
        border: none;
        text-transform: uppercase;
        transition: background-color 0.1s ease-in-out;
        background-color: var(--${(props) => props.textColor});
        color: #fff;
        font-family: Poppins, sans-serif;
    }
    .ctaDiv a:first-child {
        margin-right: 40px;
    }

    .cta:hover {
        transition: 0.2s ease-in-out;
        color: var(--${(props) => props.textColor});
        background-color: var(--white);
    }
    @media (max-width: 400px) {
        .header h1 {
            font-size: 4em;
        }
    }
`;

export const ToolsStyles = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5vh;

    .tools {
        display: flex;
        justify-content: space-evenly;
    }
    @media (max-width: 900px) {
        .tools {
            flex-direction: column;
        }
    }
`;

export const ToolCard = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.13);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: min(400px, 70%);
    height: 500px;
    margin: 0 25px;
    background-color: #fff;
    color: #000;
    img {
        width: max(200px, 80%);
        height: auto;
    }
    :hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.13),
            0 10px 10px rgba(0, 0, 0, 0.13);
    }
    @media (max-width: 900px) {
        flex-direction: column;
        margin: 0 5px;
        padding: 30px;
        img {
            width: 90%;
        }
    }
`;

export const GalleryGrid = styled.div`
    margin-top: 5vh;
    div {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 400px));
        grid-gap: 10px;

        max-width: 100%;
        img {
            object-fit: cover;
            width: 100%;
            max-height: 100%;
        }
    }

    @media (max-width: 1100px) {
        div {
            grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
        }
    }
`;

export const MoreAboutStyles = styled.div`
    color: var(--white);
    h1 {
        font-family: Poppins, sans-serif;
        font-weight: 600;
        font-size: 1.5em;
    }
    h3 {
        font-size: 1.1em;
        margin: 0;
    }
    .aboutBlock {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1 {
            border-bottom: var(--black);
        }
        div {
            margin-right: 10%;
        }
        img {
            object-fit: cover;
            width: 50%;
            max-height: 100%;
        }
    }
`;

export const ContactsStyles = styled.div`
    margin-top: 5vh;
    font-size: 1em;
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    color: var(--white);
    span {
        font-weight: bold;
    }

    p:first-of-type {
        font-weight: bold;
    }
    p {
        white-space: pre-line;
    }
    .map {
        height: 70%;
        width: 100%;
        border: 1px solid var(--black);
        margin: 25px 0px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.13);
    }
    .adress {
        color: var(--blue);
    }
    .pin {
        display: flex;
    }
    .pin-text {
        font-size: 1.5em;
    }
    @media (max-width: 1100px) {
        flex-direction: column;
        align-self: center;
        .map {
            width: 100%;
            height: 70vh;
        }
    }
`;

export const ErrorDiv = styled.div`
    font-size: 1em;
    width: 100%;
    padding: 5px 0;
    color: var(--red);
`;

export const FormStyled = styled.div`
    background-color: var(--datk-gray);
    color: var(--white);
    width: 40%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.13);

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    padding: 10px 60px;
    align-items: center;
    h1 {
        margin: 20px;
    }
    input,
    textarea {
        outline: none;
        padding: 10px;
        font-size: 1em;
        caret-color: var(--black);
    }
    textarea {
        resize: vertical;
        height: 150px;
    }
    input:focus,
    textarea:focus {
        transition: 0.15s ease-in-out;
        outline: 2px solid var(--black);
    }
    label {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0;
    }
    span {
        font-size: 0.6em;
        margin: 15px 0 5px 0;
    }
    button {
        font-weight: bold;
        font-size: 1em;
        padding: 15px 20px;
        outline: none;
        transition: 0.2s ease-in-out;
        margin: 20px 0 15px 0;
        border: none;
        color: var(--white);
        background-color: var(--blue);
        cursor: pointer;
    }
    button:hover {
        color: var(--white);
        background-color: var(--black);
        transition: 0.2s ease-in-out;
    }
    @media (max-width: 1100px) {
        width: 60%;
        jusctify-self: center;
        align-self: center;
    }
    @media only screen and (max-width: 768px) {
        input {
            width: 100%;
        }
        width: 90%;
        padding: 10px 20px;
    }
`;

export const SwitchButtonStyles = styled.div`
    grid-area: 1/ 4 / 2 / 5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: 300;
    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
    }
    li {
        padding: 10px;
    }
    span {
        cursor: pointer;
    }
    span > a {
        color: var(--white);
        text-decoration: none;
    }
    li > span::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--white);
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
    }
    li > span:hover::before {
        visibility: visible;
        transform: scaleX(1);
    }

    li {
        margin: 0;
        color: var(--white);
        position: relative;
        transition: all 0.3s ease-in-out 0s;
        opacity: 0.8;
    }

    li:hover {
        opacity: 1;
        transition: all 0.3s ease-in-out 0s;
    }
    .selectedLang {
        display: none;
    }
    svg {
        height: 25px;
        cursor: pointer;
        transform: translateY(1px);
    }
    svg:hover {
        filter: invert(60%);
    }

    #Moon path {
        opacity: ${(props) => (props.isLightTheme ? '1' : '0')};
        transition: 0.3s ease-in-out;
        stroke: #0b0a0a;
        fill: #0b0a0a;
    }
    #Moon:hover + #Moon path {
        fill: red;
    }
    #Sun circle,
    line {
        opacity: ${(props) => (props.isLightTheme ? '0' : '1')};
        transition: 0.3s ease-in-out;
        stroke: #fff;
        fill: none;
    }

    @media (max-width: 900px) {
        grid-area: 1 / 1 / 2 / 3;
        justify-content: flex-start;

        margin-left: 10px;
        ul {
            display: flex;
            flex-direction: row-reverse;
        }
    }
`;

export const Background = styled.div`
    grid-area: 1 / 1 / ${(props) => props.rowEnd} / 6;
    background: url(${bgPhoto});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    z-index: -2;
    @media (max-width: 1024px) {
        background: url(${bgPhotoLight});
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
`;
export const BlueBg = styled.div`
    grid-area: 1 / 1 / 2 / 6;
    background-color: var(--black);
    /* background-color: rgba(0, 74, 204, 0.9); */
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
`;
export const DarkBg = styled.div`
    grid-area: 1 / 1 / ${(props) => props.rowEnd} / 6;
    transition: 0.2s ease-in-out;

    background-color: var(--black);
    z-index: -1;
    opacity: 0.95;
`;
