import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './Sidebar.elements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
            <Icon onClick={ toggle }>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='#'> Home </SidebarLink>
                    <SidebarLink to='about'> About Me </SidebarLink>
                    <SidebarLink to='education'> Education </SidebarLink>
                    <SidebarLink to='skills'> Skills </SidebarLink>
                    <SidebarLink to='projects'> Projects </SidebarLink>
                    <SidebarLink to='contact'> Contact Me </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar