import styled from 'styled-components';
import bgPhotoLight from './media/geardark.jpg';
import bgPhoto from './media/gearwide.jpg';

export const Wrapper = styled.div`
    min-height: 100vh;

    color: var(--black);
    display: grid;
    grid-template-columns: 0.7fr 1fr repeat(2, 1.3fr) 0.7fr;
    grid-template-rows: 50px 100px 100px 3fr;
    gap: 0px 40px;
    overflow-x: hidden;
    @media (max-width: 1024px) {
        grid-template-columns: 0.1fr 1.6fr repeat(2, 1.6fr) 0.1fr;
    }

    @media (max-width: 900px) {
        grid-template-columns: 0.05fr 2fr repeat(2, 1.3fr) 0.05fr;
        grid-template-rows: 50px 100px 120px 3fr;
        gap: 0px 10px;
    }
`;

export const MainContainer = styled.div`
    background-color: #fff;
    grid-area: 4 / 2 / 5 / 5;
    padding-bottom: 25px;
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
    h3 {
        font-size: 2em;
        color: var(--blue);
    }
    p {
        font-size: 1.5em;
        line-height: 1.6;
        white-space: pre-line;
    }
    @media (max-width: 1100px) {
        p {
            font-size: 1em;
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
    overflow: hidden;
    img {
        object-fit: cover;
        width: 100%;
        max-height: 100%;
    }
    @media (max-width: 1100px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
    }
`;
export const ContactsStyles = styled.div `
margin-top: 5vh;
font-size: 1.5em;
display: flex;
div:first-of-type {
    margin-right: 10%;
}
span {
    font-weight: bold;
}
span:first-of-type {

}
p:first-of-type {
    font-weight: bold;
}
p {
    white-space: pre-line;
}
.map {
    height: 50vh;
     width: 50%;
}
.pin {
    display: flex;
}
.pin-text {
    font-size: 1.5em;
}
@media (max-width: 1100px) {
    flex-direction: column;
    .map {
        width: 100%;
        height: 70vh;
    }
    }

`
export const Sidebar = styled.ul`
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
export const LangSwitch = styled.div`
    grid-area: 1/2;
    display: flex;
    align-items: flex-end;

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
    grid-area: 1 / 1 / 4 / 6;
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
    background-color: rgba(0, 74, 204, 0.8);
    border-bottom: 1px solid var(--white);
`;
export const DarkBg = styled.div`
    grid-area: 3 / 1 / 3 / 6;
    background-color: rgba(11, 10, 10, 0.8);
    border-bottom: 1px solid var(--black);
`;
