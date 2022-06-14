import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, HR, SocialMediaList, SocialMediaIcon } from './Sidebar.elements';
import { FaLinkedinIn, FaGithub, FaCodepen, FaDev } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={ isOpen }>
            <Icon onClick={ toggle }>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' smooth={true} duration={500} onClick={ toggle }> Home </SidebarLink>
                    <SidebarLink to='about' smooth={true} duration={500} offset={-80} onClick={ toggle }> About Me </SidebarLink>
                    <SidebarLink to='education' smooth={true} duration={500} offset={-80} onClick={ toggle }> Education </SidebarLink>
                    <SidebarLink to='skills' smooth={true} duration={500} offset={-80} onClick={ toggle }> Skills </SidebarLink>
                    <SidebarLink to='projects' smooth={true} duration={1000} offset={-80} onClick={ toggle }> Projects </SidebarLink>
                    <SidebarLink to='contact' smooth={true} duration={1000} offset={-80} onClick={ toggle }> Contact Me </SidebarLink>
                    <HR />
                    <SocialMediaList>
                        <a href='https://www.linkedin.com/in/keval-dhanani-01/' target='_blank'> <SocialMediaIcon> <FaLinkedinIn /> </SocialMediaIcon> </a>
                        <a href='https://github.com/OptimalLearner' target='_blank'> <SocialMediaIcon> <FaGithub /> </SocialMediaIcon> </a>
                        <a href='https://codepen.io/OptimalLearner' target='_blank'> <SocialMediaIcon> <FaCodepen /> </SocialMediaIcon> </a>
                        <a href='https://dev.to/optimallearner' target='_blank'> <SocialMediaIcon> <FaDev /> </SocialMediaIcon> </a>
                    </SocialMediaList>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar