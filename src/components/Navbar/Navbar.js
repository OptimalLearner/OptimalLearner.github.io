import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, LogoImg, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbar.elements';
// import Logo from '../../images/portfolio_logo1.svg';

const Navbar = ({ toggle }) => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> {/*<LogoImg src={Logo} alt="React Logo" />*/} </NavLogo>
                    <MobileIcon onClick={ toggle }>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='#'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'>About Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='education'>Education</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='skills'>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar;