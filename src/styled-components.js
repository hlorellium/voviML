import styled from 'styled-components';
// import bgPhotoLight from './media/geardark.jpg';
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
    a,
    a:active,
    a:focus {
        outline: none;
    }

    button,
    button:active,
    button:focus {
        outline: none;
    }

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
        opacity: 0.8;
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
        white-space: nowrap;
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
        line-height: 1.2em;
    }

    .changingText {
        color: var(--${(props) => props.textColor});
    }

    .subtitle p {
        font-size: 1em;
        white-space: pre-line;
        color: var(--dark-gray);
        font-weight: 300;
        line-height: 150%;
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
    @media (max-width: 900px) {
        .subtitle p {
            font-size: 1.4em;
        }
    }
    @media (max-width: 400px) {
        .header h1 {
            font-size: 4em;
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
    .aboutBlock {
        margin-top: 5vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1 {
            border-bottom: var(--white);
        }
        p {
            font-weight: 300;
        }
        div {
            margin-right: 5%;
            width: 50%;
        }
        img {
            object-fit: cover;
            width: max(400px, 50%);
            max-height: 100%;
        }
    }
    .contactLink {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button {
        font-size: 1em;
        padding: 15px 20px;
        outline: none;
        transition: 0.2s ease-in-out;
        margin: 20px 0 15px 0;
        border: 1px solid var(--white);
        color: var(--white);
        background-color: var(--bg-gray);
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }

    button:hover {
        color: var(--black);
        background-color: var(--white);
        transition: 0.2s ease-in-out;
    }
    @media (max-width: 1024px) {
        .aboutBlock {
            text-align: left;
            margin-top: 2vh;

            flex-direction: column;
            div {
                width: auto;
            }
            img {
                width: max(300px, 70%);
            }
        }
    }
`;

export const ToolsStyles = styled.div`
    margin-top: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    transition: all 0.3s ease-in-out 0s;

    p {
        font-weight: 300;
    }
    .toolLink {
        position: relative;
        cursor: pointer;
        opacity: 0.5;
        margin-left: 2.5em;
    }
    .lynx,
    .puma {
        display: none;
    }
    .toolLink::before {
        content: '';
        width: 2em;
        height: 2px;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: -2.5em;
        transform: translate(0, -50%);
        background-color: var(--white);
        visibility: hidden;
        transform: scale(0);
        transition: all 0.3s ease-in-out 0s;
    }
    .toolLink:hover::before {
        visibility: visible;
        transform: scale(1);
    }
    .activeLink::before {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
    }
    .activeLink {
        opacity: 1;
    }
    .toolLink:hover {
        opacity: 1;
        transition: all 0.3s ease-in-out 0s;
    }
    div {
        margin-right: 5%;
        width: 50%;
    }
    .tools {
        display: flex;
        place-items: center;
        height: 100%;
        img {
            object-fit: cover;
            height: max(300px, 40vh);
            max-width: 100%;
        }

        ${(props) =>
            props.chosenTool === 'puma'
                ? '.puma { display: block; opacity: 1; }'
                : '.lynx { display: block; opacity: 1; }'}
    }
    @media (max-width: 1024px) {
        text-align: left;

        flex-direction: column;
        div {
            width: auto;
        }
        img {
            width: max(300px, 70%);
        }
    }
`;

export const GalleryGrid = styled.div`
    margin-top: 5vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 400px));
        grid-gap: 10px;
        max-width: 100%;
        align-items: center;
        img {
            object-fit: cover;
            width: 100%;
            max-height: 100%;
        }
    }

    @media (max-width: 1100px) {
        div {
            grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
        }
    }
    @media (max-width: 600px) {
        div {
            grid-template-columns: repeat(auto-fill, minmax(100px, 150px));
        }
    }
`;

export const ContactsStyles = styled.div`
    margin: 3vh 0;
    padding: 0;
    font-size: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    color: var(--white);
    a {
        text-decoration: none;
        color: var(--white);
    }
    a:hover {
        color: var(--blue);
        text-decoration: underline;
    }
    h1,
    h2,
    h3 {
        font-family: Poppins, sans-serif;
    }
    div:first-of-type {
        span {
            font-weight: 500;
        }
    }
    .contacts {
        display: flex;
        align-items: center;

        p {
            color: var(--gray);
            span {
                color: var(--white);
                font-weight: 400;
            }
        }

        p:last-of-type {
            margin-left: 20%;
        }
    }
    span {
        font-weight: bold;
    }
    .locationBlock {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        margin-top: 2vh;
    }

    p {
        white-space: pre-line;
        font-weight: 300;
    }
    .map {
        height: min(500px, 50vh);
        width: 80%;
        margin: 25px 0px;
    }
    .adress {
        margin-left: 10%;
    }
    .pin {
        display: flex;
    }
    .pin-text {
        font-size: 1.5em;
        color: #0b0a0a;
    }
    .mapboxgl-canvas-container {
        height: 100%;
    }
    .mapContainer {
        height: 100%;
        width: 100%;
        overflow: hidden;
        button {
            display: none;
        }
        a {
            font-size: 0.5rem;
        }
        .mapboxgl-control-container {
            display: none;
        }
    }



    @media (max-width: 1024px) {
        .adress {
            margin-left: 0;
        }
        .contacts > p:last-of-type {
            margin-left: 10%;
        }
        .map {
            height: 50vh;

            width: 100%;
            margin: 25px 0px;
        }
        .locationBlock {
            text-align: left;
            align-items: flex-start;

            flex-direction: column;
            div {
                width: auto;
            }
        }
    }
`;

export const ErrorDiv = styled.div`
    position: absolute;
    bottom: -0.1em;
    font-size: 0.8em;
    width: 100%;
    padding: 0;
    color: var(--red);
`;

export const FormStyled = styled.div`
    color: var(--white);
    width: 50%;
    align-self: center;
    margin-top: 5vh;
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    align-items: center;
    h1 {
        margin: 20px;
    }
    input,
    textarea {
        outline: none;
        padding: 10px;
        font-size: 0.9em;
        color: var(--white);
        background-color: var(--bg-gray);
        caret-color: var(--white);
        outline: none;
        border: none;
        border-bottom: 1px solid var(--dark-gray);
        transition: border-bottom var(--animate);
    }
    textarea {
        resize: vertical;
        height: 6em;
    }

    input::placeholder,
    textarea::placeholder {
        color: var(--dark-gray);
        transition: var(--animate);
    }
    input,
    textarea {
        border-bottom: 1px solid var(--gray);
        transition: var(--animate);
    }
    input:focus::placeholder,
    textarea:focus::placeholder {
        color: var(--gray);
        transition: var(--animate);
    }
    label {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0;
        position: relative;
        padding-bottom: 1em;
    }
    span {
        font-size: 0.6em;
        margin: 15px 0 5px 0;
    }
    button {
        font-size: 1em;
        padding: 15px 20px;
        outline: none;
        transition: 0.2s ease-in-out;
        margin: 20px 0 15px 0;
        border: 1px solid var(--white);
        color: var(--white);
        background-color: var(--bg-gray);
        cursor: pointer;
    }
    button:hover {
        color: var(--black);
        background-color: var(--white);
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
        padding: 10px 10px;
    }
`;

export const SwitchButtonStyles = styled.div`
    grid-area: 1/ 4 / 2 / 5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: 300;
    font-size: 0.8em;
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
