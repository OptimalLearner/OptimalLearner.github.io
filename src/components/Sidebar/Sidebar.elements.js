import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #232323;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    font-family: 'Ubuntu', sans-serif;
    display: ${({ isOpen }) => (isOpen ? 'grid': 'none')};
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0') };
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%') };
`;

export const CloseIcon = styled(FaTimes)`
    color: #F2F2F2;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #F2F2F2;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 768px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #F2F2F2;
    cursor: pointer;

    &:hover {
        color: #FFD93D;
        transition: 0.2s ease-in-out;
    }

    @media only screen and (max-width: 768px) {
        font-size: 2rem;
    }

    @media only screen and (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

export const HR = styled.hr`
    height: 20rem;
    width: 2px;
    margin: 2rem 0;
    background-color: #F2F2F2;

    @media only screen and (max-width: 768px) {
        height: 2px;
        width: 70%;
        margin: 2rem 15% 3rem;
    }
`;

export const SocialMediaList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 5%;
`;

export const SocialMediaIcon = styled.span`
    color: #F2F2F2;
    font-size: 2rem;
    margin: 0 1rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        color: #FFD93D;
        transform: scale(1.2);
    }

    
`;