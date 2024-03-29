import styled, { keyframes } from 'styled-components';

export const LoaderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #232323;

    @media screen and (max-width: 960px) {
        min-height: 100vh;
    }
`;

const stroke = keyframes`
    100% {stroke-dashoffset: -35%;}
`;

export const SVG = styled.svg`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-family: 'Ubuntu', sans-serif;
    font-size: 5.5rem;

    use {
        fill: none;
        stroke: white;
        stroke-dasharray: 5% 30%;
        stroke-width: 3px;
        stroke-dashoffset: 0%;
        animation: ${stroke} 5s infinite linear;

        &:nth-child(1) {
            stroke: #F2F2F2;
            animation-delay: -1s;
        }
        &:nth-child(2) {
            stroke: #FFF04D;
            animation-delay: -2s;
        }
        &:nth-child(3) {
            stroke: #FFFF66;
            animation-delay: -3s;
        }
        &:nth-child(4) {
            stroke: #FFD93D;
            animation-delay: -4s;
        }
        &:nth-child(5) {
            stroke: #FFE019;
            animation-delay: -5s;
        }
    }

    @media only screen and (max-width: 768px) {
        font-size: 10rem;
    }

    @media only screen and (max-width: 600px) {
        font-size: 10rem;
    }
`;