import styled from 'styled-components';

export const SkillsContainer = styled.div`
    width: 100vw;
    min-height: 70vh;
    background-color: #232323;
    display: flex;
    flex-direction: column;
    padding-left: 12.5vw;

    @media screen and (max-width: 960px) {
        min-height: 100vh;
        padding-left: 8vw;
    }
`;

export const Heading = styled.h1`
    color: #F2F2F2;
    font-size: 75px;
    font-weight: 500;
    font-family: 'Bubblegum Sans', cursive;
    text-shadow: 1rem 1rem 0 #232323;
    position: relative;

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

export const SkillsType = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`;

export const SkillsTypeHeading = styled.h3`
    color: #f2f2f2;
    font-size: 22px;
    font-family: 'Ubuntu';
`;

export const SkillsList = styled.div`
    width: 100%;
    
    padding: 0.8rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const SkillsBox = styled.div`
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 10rem;
    margin: 1rem 2.5rem 1.5rem 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    color: #FFD93D;

    &:hover {
        transform: scale(1.1);
    }
`;

export const SkillsLogo = styled.div`
    font-size: 50px;
`;

export const SkillsName = styled.p`
    font-size: 22px;
    text-align: center;
`;