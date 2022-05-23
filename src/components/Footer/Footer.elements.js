import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100vw;
    background-color: #232323;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: 'Ubuntu', sans-serif;
    text-align: center;

    @media screen and (max-width: 960px) {
    }
`;

export const FooterMessage = styled.p`
    color: #F2F2F2;
    font-size: 1.2rem;
    margin: 0.8rem 0;

    @media screen and (max-width: 960px) {
        font-size: 17px;
    }
`;

export const Bio = styled.a`
    color: #FFD93D;
    text-decoration: none;
`;

export const Heart = styled.span`
    color: #FFD93D;
    padding-top: 55px;
`;