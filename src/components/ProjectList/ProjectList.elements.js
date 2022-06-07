import styled from 'styled-components';

export const ProjectListContainer = styled.div`
    width: 100vw;
    min-height: 70vh;
    background-color: #232323;
    display: flex;
    flex-direction: column;
    padding: 4rem 0 3rem 12.5vw;

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

    @media screen and (max-width: 960px) {
        font-size: 50px;
        margin-right: 5vw;
    }
`;

export const ProjectCard = styled.div`
    width: 80%;
    height: 25rem;
    display: flex;
    justify-content: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row' : 'row-reverse')};
    align-items: center;
    margin: 2.5rem 0;
`;

export const ProjectBanner = styled.div`
    width: 60%;
    height: 100%;
    background: url(${(props)=>props.imgUrl}) no-repeat center center;
    background-size: 100% 100%;
    border-radius: 0.3rem;
`;

export const ProjectBannerOverlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: #00000088;
    transition: all 0.15s ease-in;
    border-radius: 0.3rem;

    &:hover {
        background-color: #00000018;
    }
`;

export const ProjectLinks = styled.div`
    position: relative;
    top: -95%;
    left: 10px;
`;

export const ProjectLinkGitHub = styled.span`
    font-size: 25px;
    background-color: #232323;
    color: #F2F2F2;
    padding: 10px 10px 5px 10px;
    border-radius: 0.3rem;
    cursor: pointer;
`;

export const ProjectLinkLive = styled.span`
    font-size: 25px;
    background-color: #232323;
    color: #F2F2F2;
    padding: 10px 10px 5px 10px;
    border-radius: 0.3rem;
    cursor: pointer;
    position: absolute;
    top: 100%;
`;

export const ProjectInfo = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ProjectTitle = styled.h1`
    font-size: 30px;
    width: 100%;
    padding: 0 0.5rem;
    text-align: ${({imgStart}) => (imgStart ? 'right' : 'left')};
    color: #FFD93D;
`;

export const ProjectDetails = styled.span`
    background-color: #F2F2F2;
    padding: 1.5rem 2.5rem;
    font-size: 15px;
    color: #232323;
    position: relative;
    left: ${({imgStart}) => (imgStart ? '-10%' : '10%')};
    width: 120%;
    text-align: justify;
    border-radius: 0.3rem;
    margin: 1.5rem 0;
    box-shadow: #111 0px 0px 10px, #000 0px 0px 6px;
`;

export const ProjectTech = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: ${({imgStart}) => (imgStart ? 'flex-end' : 'flex-start')};
    width: 100%;
    text-align: right;
`;

export const ProjectTechTag = styled.span`
    padding: 5px 15px;
    background-color: #FFD93D;
    color: #232323;
    margin: 0 3px;
    border-radius: 0.2rem;
`;