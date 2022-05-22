import styled from 'styled-components';

export const InfoContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #232323;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 10vw;
    font-family: 'Nova Slim', cursive;

    @media screen and (max-width: 960px) {
        min-height: 85vh;
        padding-left: 8vw;
    }
`;

export const Greetings = styled.p`
    color: #FFD93D;
    font-size: 40px;
    margin: 0.8rem 0;

    @media screen and (max-width: 960px) {
        font-size: 25px;
    }
`;

export const Name = styled.p`
    color: #FFF;
    font-size: 80px;
    margin: 1rem 0;
    text-shadow: #FFF 1px 0 2px;
    font-weight: 500;

    @media screen and (max-width: 960px) {
        font-size: 50px;
        margin-right: 5vw;
    }
`;

export const Message = styled.p`
    color: #FFF;
    font-size: 25px;
    margin: 0.75rem 0;
    width: 45vw;

    @media screen and (max-width: 960px) {
        font-size: 20px;
        margin-right: 5vw;
        width: 90%;
    }
`;

export const KnowMoreButton = styled.button`
    width: 20rem;
    font-size: 22px;
    font-family: 'Nova Slim', cursive;
    padding: 0.4rem 1rem;
    margin: 2rem 0;
    border-radius: 0.4rem;
    border: 2px solid #fff;
    color: #fff;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        background-color: #FFD93D;
        border-color: #FFD93D;
        color: #232323;
    }
`;

export const Shape = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 32.5vw;
    height: 100vh;
    clip-path: polygon(50% 0%, 100% 0%, 100% 110%, 0% 50%);
    background-color: #FFD93D;

    @media screen and (max-width: 960px) {
        display: none;
    }
`;