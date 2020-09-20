import styled from 'styled-components';
import bgPhotoLight from './media/geardark.jpg';
import bgPhoto from './media/gearwide.jpg';

export const Wrapper = styled.div`
    height: 100vh;
    color: var(--black);
    display: grid;
    grid-template-columns: 0.7fr 1.5fr repeat(2, 1.15fr) 0.7fr;
    grid-template-rows: 70px 1fr;
    gap: 0px 40px;
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
    margin-bottom: 30px;
    transition: 0.1s ease-in-out;

    @media (max-width: 1024px) {
        grid-area: 2 / 2 / 3 / 5;
        margin-bottom: 45px;
    }
    place-content: center;
`;

export const NavbarStyles = styled.ul`
    z-index: 3;
    grid-area: 1 / 3 / 2 / 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    font-family: Poppins, sans-serif;
    a {
        font-weight: 500;
        font-size: 1em;
        color: var(--white);
        text-decoration: none;
        border-bottom: 1px solid black;
    }
    a:hover {
        color: var(--blue);
    }
    .active {
        color: var(--blue);
    }

    @media (max-width: 900px) {
        grid-area: 1 / 2 / 2 / 5;
        display: none;
    }
`;

export const HamburgerMenu = styled.div`
    display: none;
    color: #fff;
    grid-area: 1 / 4 / 2 / 5;
    justify-content: flex-end;
    transition: 0.1s ease-in-out;
    margin: 0 25px;

    svg {
        transition: 0.5s ease-in-out;
        height: 40px;
        width: 40px;
        stroke: red;
        z-index: 3;
        align-self: center;
        cursor: pointer;
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
    a {
        font-weight: 500;
        font-size: 1em;
        color: #fff;
        text-decoration: none;
        border-bottom: 1px solid black;
    }
    a:hover {
        color: var(--blue);
    }
    .active {
        color: var(--blue);
    }
    .openedMenu {
        /* display: ${(props) => (props.isOpened ? 'flex' : 'none')}; */
        display: flex;
        opacity: ${(props) => (props.isOpened ? 1 : 0)};

        width: ${(props) => (props.isOpened ? '100vw' : '0')};
        position: fixed;
        flex-direction: column;
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
        height: 100%;
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
    .header {
        display: flex;
        flex-direction: column;
    }

    #above {
        font-size: 1.5em;
        font-weight: lighter;
        margin: 0;
        color: var(--dark-gray);
    }
    .header h1 {
        font-size: 5rem;
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
        font-size: 1em;
        white-space: pre-line;
        color: var(--dark-gray);
    }
    .ctaDiv {
        margin-top: 5%;
        display: flex;
        place-content: center;
    }
    .cta {
        padding: 20px 30px;
        font-size: 1.1em;
        font-weight: bolder;
        cursor: pointer;
        border: none;
        text-transform: uppercase;
        transition: background-color 0.2s ease-in-out;
        background-color: var(--${(props) => props.textColor});
        color: var(--white);
        margin-right: 40px;
    }

    .cta:hover {
        transition: 0.2s ease-in-out;
        color: var(--${(props) => props.textColor});
        background-color: var(--white);
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
    height: 400px;
    margin: 0 25px;

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
    h1 {
        text-align: center;
        font-family: Poppins, sans-serif;
        font-weight: 600;
        font-size: 1.5em;
    }
    h3 {
        font-size: 1.1em;
        margin: 0;
        text-align: center;
    }
`;

export const ContactsStyles = styled.div`
    margin-top: 5vh;
    font-size: 1.5em;
    display: flex;
    justify-content: space-between;
    max-width: 1200px;

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
    background-color: rgba(11, 10, 10, 0.8);
    color: var(--white);
    width: 40%;
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    border: 1px solid var(--black);
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
    grid-area: 1/5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    span {
        margin-right: 10px;
        cursor: pointer;
        color: var(--white);
    }
    span:hover {
        color: var(--grayish);
    }
    .selectedLang {
        display: none;
    }
    svg {
        height: 30px;
        cursor: pointer;
    }
    #Moon path {
        opacity: ${(props) => (props.isOpened ? '0' : '1')};
        transition: 0.3s ease-in-out;
        stroke: none;
        fill: var(--white);

    }
    #Sun circle, line {
        opacity: ${(props) => (props.isOpened ? '1' : '0')};
        transition: 0.3s ease-in-out;
        stroke: var(--white);
        fill: var(--white);
    }

    @media (max-width: 1024px) {
        grid-area: 1 / 2;
        margin-left: 10px;
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
    /* background-color: rgba(0, 74, 204, 0.9); */
`;
export const DarkBg = styled.div`
    grid-area: 1 / 1 / ${(props) => props.rowEnd} / 6;
    transition: 0.2s ease-in-out;

    background-color: var(--black);
    z-index: -1;
    opacity: 0.95;
`;
