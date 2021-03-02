import React, { useState, useEffect } from "react";
import logo from "../../Images/logo.png";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  NavbarContainer,
  NavWrapper,
  NavTitle,
  NavLogo,
  MobileIcon,
  CloseIcon,
  Icon,
  NavMenu,
  NavLinks,
} from "./NavbarElements";

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
    <NavbarContainer scrollNav={scrollNav}>
      <NavWrapper>
        <NavTitle to="/">
          <NavLogo src={logo} alt="logo" />
        </NavTitle>
        <MobileIcon onClick={toggle} isOpen={isOpen}>
          <GiHamburgerMenu />
        </MobileIcon>
        <CloseIcon onClick={toggle} isOpen={isOpen}>
          <FaTimes />
        </CloseIcon>
        <NavMenu>
          <NavLinks>About</NavLinks>
          <NavLinks>Products</NavLinks>
          <NavLinks>Contact</NavLinks>
        </NavMenu>
      </NavWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
