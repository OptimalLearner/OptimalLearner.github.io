import styled from 'styled-components';

export const SocialMediaList = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 3vw;
    margin-bottom: 20vh;
    list-style-type: none;

    &:after {
        content: '';
        position: absolute;
        top: 110%;
        right: 50%;
        height: 100%;
        width: 0.15rem;
        background-color: #F2F2F2;
    }
`;

export const SocialMediaIcon = styled.li`
    color: #F2F2F2;
    font-size: 1.5rem;
    margin: 1rem 0.2rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        color: #FFD93D;
        transform: scale(1.2);
    }

    @media screen and (max-width: 960px) {
        font-size: 25px;
    }
`;