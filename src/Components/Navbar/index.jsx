import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogoWrapper,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  Icon,
  CloseIcon,
} from "./NavbarElements.jsx";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ isOpen, toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">PAKU Components</NavLogo>
      </NavbarContainer>
      <MobileIcon onClick={toggle} isOpen={isOpen}>
        <GiHamburgerMenu />
      </MobileIcon>
      <Icon>
        <CloseIcon onClick={toggle} isOpen={isOpen} />
      </Icon>
      <NavMenu>
        <NavItems>
          <NavLinks>About</NavLinks>
          <NavLinks>Products</NavLinks>
          <NavLinks>Contact</NavLinks>
        </NavItems>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
