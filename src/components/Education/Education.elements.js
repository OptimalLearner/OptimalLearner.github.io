import styled from 'styled-components';

export const TimeLineContainer = styled.div`
    width: 100vw;
    background-color: #232323;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: 'Ubuntu', sans-serif;
    padding: 1rem 0 5rem 12.5vw;

    @media screen and (max-width: 960px) {
    }
`;

export const Heading = styled.h1`
    color: #F2F2F2;
    font-size: 75px;
    font-weight: 500;
    font-family: 'Bubblegum Sans', cursive;
    text-shadow: 1rem 1rem 0 #232323;
    position: relative;
    margin-bottom: 3.5rem;

    &:after {
        content: attr(data-shadow);
        position: absolute;
        top: 0.3rem; 
        left: 0.3rem;
        z-index: 1;
        text-shadow: none;
        background-image:
        linear-gradient(
            45deg,
            transparent 45%,
            #F2F2F2 45%,
            #F2F2F2 55%,
            transparent 0
        );
        background-size: .05em .05em;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media screen and (max-width: 960px) {
        font-size: 50px;
        margin-right: 5vw;
    }
`;