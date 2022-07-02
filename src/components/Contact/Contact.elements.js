import styled from 'styled-components';

export const ContactContainer = styled.div`
    width: 100vw;
    min-height: 50vh;
    background-color: #232323;
    display: flex;
    flex-direction: column;
    padding: 2rem 0 3rem 12.5vw;

    @media only screen and (max-width: 768px) {
        min-height: 50vh;
        padding: 1rem 2rem 3rem;
    }

    @media only screen and (max-width: 600px) {
        padding-left: 0;
        padding: 1rem 0 3rem;
    }
`;

export const Heading = styled.h1`
    color: #F2F2F2;
    font-size: 75px;
    font-weight: 500;
    font-family: 'Bubblegum Sans', cursive;
    text-shadow: 1rem 1rem 0 #232323;
    position: relative;
    margin-bottom: 1rem;

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
        &:after {
            left: 50%;
            transform: translateX(calc(-50% + 0.3rem));
            width: 100%;
        }
    }

    @media only screen and (max-width: 600px) {
        text-align: center;
        font-size: 70px;
        &:after {
            left: 50%;
            transform: translateX(calc(-50% + 0.3rem));
            width: 100%;
        }
    }
`;

export const ContactPartition = styled.div`
    width: 80%;
    min-height: 20rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    margin: 2rem 0 0 0;

    @media only screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        margin: 0.5rem 0 0;
    }
`;

export const ContactPartitionLeft = styled.div`
    width: 50%;
    height: 20rem;
    margin: 1rem 5.5rem 1rem 0;
    padding: 1rem;
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    @media only screen and (max-width: 600px) {
        width: 90%;
        margin: 1rem 5% 0;
        min-height: 10rem;
        padding: 0 1rem;
        align-items: center;
    }
`;

export const Text1 = styled.p`
    font-size: 21px;
    color: #F2F2F2;
    margin-bottom: 2rem;
    text-align: justify;

    @media only screen and (max-width: 600px) {
        
    }
`;

export const EmailButton = styled.a`
    font-size: 19px;
    font-family: 'Ubuntu', sans-serif;
    padding: 0.4rem 3.5rem;
    border-radius: 0.4rem;
    border: 2px solid #F2F2F2;
    color: #F2F2F2;
    background-color: transparent;
    cursor: pointer;
    text-align: center;
    text-decoration: none;

    &:hover {
        background-color: #FFD93D;
        border-color: #FFD93D;
        color: #232323;
    }
`;

export const HR = styled.hr`
    height: 20rem;
    width: 2px;
    margin: 1rem 0 0 0;

    @media only screen and (max-width: 600px) {
        height: 2px;
        width: 90%;
        margin: 0.5rem 5% 1.5rem;
    }
`;

export const ContactPartitionRight = styled.div`
    width: 50%;
    height: 20rem;
    margin: 1rem;
    padding: 1rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 600px) {
        width: 90%;
        margin: 1rem 5% 0;
        min-height: 10rem;
        padding: 0 1rem;
    }
`;

export const Text2 = styled.p`
    font-size: 23px;
    color: #F2F2F2;
    margin-bottom: 1rem;
    
    @media only screen and (max-width: 600px) {
        text-align: center;
    }
`;

export const ConnectButton = styled.a`
    font-size: 20px;
    font-family: 'Ubuntu', sans-serif;
    padding: 0.3rem 1.2rem;
    border-radius: 0.4rem;
    border: 2px solid #F2F2F2;
    color: #F2F2F2;
    background-color: transparent;
    cursor: pointer;
    width: 10rem;
    text-align: center;
    text-decoration: none;

    &:hover {
        background-color: #FFD93D;
        border-color: #FFD93D;
        color: #232323;
    }
`;

export const OR = styled.h2`
    display: table;
    white-space: nowrap;
    color: #f2f2f2;
    margin: 2rem 0;
    font-size: 19px;

    &:before, &:after {
        border-top: 2px solid #F2F2F2;
        content: '';
        display: table-cell;
        position: relative;
        top: 0.85rem;
        width: 45%;
    }
    &:before {
        right: 2.5%;
    }
    &:after {
        left: 2.5%;
    }
`;