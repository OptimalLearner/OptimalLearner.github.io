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
                            <NavLinks to='/' smooth={true} duration={500}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} offset={-150}>About Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='education' smooth={true} duration={500} offset={-80}>Education</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='skills' smooth={true} duration={500} offset={-80}>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects' smooth={true} duration={1000} offset={-80}>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact' smooth={true} duration={1000} offset={-80}>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar;