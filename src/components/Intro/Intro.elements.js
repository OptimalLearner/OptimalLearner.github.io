import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const InfoContainer = styled.div`
    width: 100vw;
    min-height: 120vh;
    background-color: #232323;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 12.5vw;

    @media screen and (max-width: 768px) {
        min-height: 100vh;
        padding-left: 10vw;
    }

    @media only screen and (max-width: 600px) {
        min-height: 100vh;
        padding-left: 1.5rem;
    }
`;

export const Greetings = styled.p`
    color: #FFD93D;
    font-size: 2rem;
    margin: 0.8rem 0;
    margin-top: -10vh;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }

    @media only screen and (max-width: 600px) {
        margin-top: 5vh;
        font-size: 2rem;
    }
`;

export const Name = styled.p`
    color: #F2F2F2;
    font-size: 80px;
    margin: 1rem 0;
    text-shadow: #F2F2F2 1px 0 2px;
    font-weight: 500;
    font-family: 'Bubblegum Sans', cursive;

    @media screen and (max-width: 768px) {
        font-size: 80px;
        margin-right: 10vw;
    }

    @media only screen and (max-width: 600px) {
        font-size: 60px;
    }
`;

export const Message = styled.p`
    color: #F2F2F2;
    font-size: 25px;
    margin: 0.75rem 0;
    width: 45vw;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        font-size: 25px;
        margin-right: 5vw;
        width: 90%;
    }

    @media only screen and (max-width: 600px) {
        font-size: 20px;
    }
`;

export const KnowMoreButton = styled(LinkS)`
    width: 20rem;
    font-size: 22px;
    font-family: 'Ubuntu', sans-serif;
    padding: 0.4rem 1rem;
    margin: 2rem 0;
    border-radius: 0.4rem;
    border: 2px solid #F2F2F2;
    color: #F2F2F2;
    background-color: transparent;
    cursor: pointer;
    text-align: center;

    &:hover {
        background-color: #FFD93D;
        border-color: #FFD93D;
        color: #232323;
    }

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
    
`;

export const Shape = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 30vw;
    height: 120vh;;
    clip-path: polygon(45% 0%,100% 0%,100% 100%,0% 50%);
    background-color: #FFD93D;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;