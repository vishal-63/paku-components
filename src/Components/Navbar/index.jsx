import React, { useState, useEffect } from "react";
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
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
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
