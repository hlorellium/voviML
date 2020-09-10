import styled from 'styled-components';
import bgPhotoLight from './media/geardark.jpg';
import bgPhoto from './media/gearwide.jpg';

export const Wrapper = styled.div`
    height: 100vh;
    color: var(--black);
    display: grid;
    grid-template-columns: 0.7fr 1fr repeat(2, 1.3fr) 0.7fr;
    grid-template-rows: 50px 100px 100px 3fr;
    gap: 0px 40px;
    overflow-x: hidden;
    overflow-y: auto;
    @media (max-width: 1024px) {
        grid-template-columns: 0.1fr 1.6fr repeat(2, 1.6fr) 0.1fr;
    }

    @media (max-width: 900px) {
        grid-template-columns: 0.05fr 2fr repeat(2, 1.3fr) 0fr;
        grid-template-rows: 50px 100px 120px 3fr 40px;
        gap: 0px 10px;
    }
`;

export const MainContainer = styled.div`
    grid-area: 4 / 2 / 5 / 5;
    margin-bottom: 30px;
    @media (max-width: 1024px) {
        grid-area: 4 / 2 / 5 / 5;
    }
`;

export const CurrentPage = styled.div`
    display: flex;
    align-items: center;
    font-size: 3em;
    font-weight: bold;
    grid-area: 3 / 3 / 3 / 5;
    color: var(--white);

    @media (max-width: 1024px) {
        font-size: 2.5em;
        margin-left: 10px;
    }
    @media (max-width: 600px) {
        font-size: 2em;
    }
`;

export const AboutStyles = styled.div`
    color: var(--white);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: auto;
    grid-auto-rows: min-content;
    font-family: Tommy, 'Noto Sans', sans-serif;
    gap: 1px 1px;
    height: 100%;
    .header {
        grid-area: 1 / 3 / 2 / 6;
        display: flex;
        flex-direction: column;
    }
    .subtitle {
        grid-area: 2 / 3 / 3 / 6;
    }
    #above {
        font-size: 1.5rem;
        font-weight: bolder;
        margin: 0;
    }
    .header h1 {
        font-size: 6em;
        color: var(--white);
        font-weight: bolder;
        margin: 0;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
    }
    .changingText {
        color: var(--${(props) => props.textColor});
        font-family: 'Tommy Outline', 'Noto Sans', sans-serif;
    }

    .subtitle p {
        line-height: 1.6;
        font-size: 1.2rem;
        white-space: pre-line;
        font-weight: lighter;
        letter-spacing: 0.05rem;
    }
    .ctaDiv {
        grid-area: 3 / 3 / 4 / 6;
        display: grid;
        place-items: center;
    }
    .cta {
        padding: 20px 30px;
        font-size: 1.5em;
        font-weight: bolder;
        color: var(--white);
        cursor: pointer;
        outline: 2px solid var(--${(props) => props.textColor});
        border: none;
        text-transform: uppercase;
        background-color: rgba(11, 10, 10, 0.95);
        transition: background-color 0.2s ease-in-out;
    }
    .cta:hover {
        transition: 0.2s ease-in-out;
        background-color: var(--${(props) => props.textColor});
    }
    @media (max-width: 1100px) {
        .subtitle p {
            font-size: 1rem;
        }
        .header {
            grid-area: 1 / 1 / 2 / 6;
        }
        .header h1 {
            font-size: 5rem;
        }
        .subtitle {
            grid-area: 2 / 1 / 3 / 6;
        }
        .ctaDiv {
            grid-area: 3 / 1 / 4 / 6;
            margin-top: 20px;
        }
        #above {
            margin: 20px 0;
            font-size: 1.3rem;
        }

        .subtitle p {
            font-weight: normal;
            font-family: 'Noto Sans', sans-serif;
        }
    }
    @media (max-width: 700px) {
        .header h1 {
            font-size: 3.8rem;
        }
        .cta {
            font-size: 1.3rem;
        }
    }
    @media (max-width: 400px) {
        .header h1 {
            font-size: 3.4rem;
        }
        .cta {
            font-size: 1.2rem;
        }

    }

`;

export const ToolsStyles = styled.div`
    display: flex;
    justify-content: space-around;
    h3 {
        font-size: 2em;
    }
    img {
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

export const GalleryGrid = styled.div`
    margin-top: 5vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 400px));
    grid-gap: 10px;
    max-width: 100%;
    img {
        object-fit: cover;
        width: 100%;
        max-height: 100%;
    }
    @media (max-width: 1100px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
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
    font-size: 1rem;
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
        font-size: 1rem;
        caret-color: var(--black);
        font-size: 1.2rem;
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
        font-size: 1rem;
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

export const SidebarStyles = styled.ul`
    z-index: 3;
    grid-area: 2 / 2 / 4 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
    a {
        color: var(--blue);
        font-weight: bold;
        text-decoration: none;
        border-bottom: 1px solid black;
    }
    .active {
        color: var(--white);
        /* text-decoration: underline; */
    }
    .active div {
        background-color: var(--black) !important;
        outline: 1px solid var(--white);
    }
`;

export const LangSwitchStyles = styled.div`
    grid-area: 1/2;
    display: flex;
    align-items: flex-end;
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
`;

export const NavBtn = styled.div`
    background-color: var(--gray);
    padding: 10px 10%;

    :hover {
        background-color: var(--grayish);
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
    grid-area: 1 / 1 / 3 / 6;
    background-color: rgba(0, 74, 204, 0.9);
    border-bottom: 1px solid var(--white);
`;
export const DarkBg = styled.div`
    grid-area: 3 / 1 / ${(props) => props.rowEnd} / 6;
    background-color: rgba(11, 10, 10, 0.95);
    border-bottom: 1px solid var(--black);
`;
