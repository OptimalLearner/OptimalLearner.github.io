import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 100vw;
    min-height: 70vh;
    background-color: #232323;
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding-left: 5vw;
    margin-top: -15vh;

    @media screen and (max-width: 768px) {
        min-height: 80vh;
        padding: 1rem 2rem;
        flex-direction: column;
        margin-top: 0;
    }

    @media only screen and (max-width: 600px) {
        min-height: 100vh;
        padding: 1rem 0;
        flex-direction: column;
        margin-top: 0;
    }
`;

export const AboutVectorContainer = styled.div`
    width: 40vw;
    @media only screen and (max-width: 768px) {
        width: 60vw;
        margin: 0 20vw;
    }

    @media only screen and (max-width: 600px) {
        width: 90vw;
        margin: 0 5vw;
    }
`;

export const AboutVector = styled.img`
    width: 80%;
    height: 80%;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 100%;
    }
`;

export const Heading = styled.h1`
    color: #F2F2F2;
    font-size: 75px;
    font-weight: 500;
    font-family: 'Bubblegum Sans', cursive;
    text-shadow: 1rem 1rem 0 #232323;

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

    @media screen and (max-width: 768px) {
        text-align: center;
        font-size: 60px;
        margin-bottom: 2rem;
        &:after {
            left: 50%;
            transform: translateX(calc(-50% + 0.3rem));
            width: 100%;
        }
    }

    @media only screen and (max-width: 600px) {
        text-align: center;
        font-size: 70px;
        margin-bottom: 2rem;
        &:after {
            left: 50%;
            transform: translateX(calc(-50% + 0.3rem));
            width: 100%;
        }
    }
`;

export const AboutInfo = styled.p`
    color: #F2F2F2;
    font-size: 20px;
    margin: 1.5rem 0 1rem;
    width: 40vw;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    text-align: justify;

    @media screen and (max-width: 768px) {
        font-size: 20px;
        width: 90%;
        margin: 0 5% 1rem;
    }

    @media only screen and (max-width: 600px) {
        width: 90%;
        margin: 0 5% 1rem;
        font-size: 19px;
    }
`;