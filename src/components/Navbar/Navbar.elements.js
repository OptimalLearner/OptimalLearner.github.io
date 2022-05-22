import styled from 'styled-components';
import { FaMarkdown } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: #232323;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 2.4rem;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    display: flex;
    justify-self: flex-start;
    align-items: center;
    text-decoration: none;
    color: #FFF;
    font-size: 2rem;
    margin-left: 24px;
    cursor: pointer;
    text-decoration: none;
`;

export const LogoImg = styled.img`
    width: 60px;
    height: 60px;
`;

export const NavIcon = styled(FaMarkdown)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    height: 100%;
    color: #FFF;
    text-decoration: none;
    padding: 0.5rem 1rem;
    font-family: 'Arimo', sans-serif;
    cursor: pointer;

    &:hover {
        color: #FFD93D;
    }

    @media screen and (max-width: 960px) {
        display: table;
        text-align: center;
        width: 100%;
        padding: 2rem;
    
        &.active {
            color: #FFD93D;
            transition: all 0.3s ease;
        }
    }
`;