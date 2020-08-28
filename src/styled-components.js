import styled from 'styled-components';
import bgPhotoLight from './media/geardark.jpg';
import bgPhoto from './media/gearwide.jpg';

export const Wrapper = styled.div`
    min-height: 100vh;

    color: var(--black);
    display: grid;
    grid-template-columns: 0.7fr 1fr repeat(2, 1.3fr) 0.7fr;
    grid-template-rows: 0.3fr 0.5fr 0.4fr 3fr;
    gap: 0px 40px;
`;

export const MainContainer = styled.div`
    background-color: #fff;
    grid-area: 4 / 3 / 5 / 5;
`;
export const CurrentPage = styled.div `
display: flex;
align-items: center;
    font-size: 3em;
    font-weight: bold;
    grid-area: 3 / 3;
    color: var(--white);
`
export const AboutStyles = styled.div `

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
        text-decoration: underline;
    }
    .active div {
        background-color: var(--black);
        outline: 1px solid var(--white);
    }
`;
export const NavBtn = styled.div`
    background-color: var(--gray);
    padding: 10px 10%;
`;
export const Background = styled.div`
    grid-area: 1 / 1 / 4 / 6;
    background: url(${bgPhoto});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    z-index: -2;
    border-bottom: 1px solid var(--black);
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
