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
  NavMenu,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ isOpen, toggle, style }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    window.scrollY >= 35 ? setScrollNav(true) : setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <NavbarContainer scrollNav={scrollNav} isOpen={isOpen} style={style}>
      <NavWrapper>
        <NavTitle to="/">
          <NavLogo src={logo}></NavLogo>
        </NavTitle>
        <MobileIcon onClick={toggle} isOpen={isOpen}>
          <GiHamburgerMenu />
        </MobileIcon>
        <CloseIcon onClick={toggle} isOpen={isOpen}>
          <FaTimes />
        </CloseIcon>
        <NavMenu>
          <NavLinks scrollNav={scrollNav} to="/about">
            About
          </NavLinks>
          <NavLinks scrollNav={scrollNav} to="/">
            Products
          </NavLinks>
          <NavLinks scrollNav={scrollNav} to="/blogs">
            Blogs
          </NavLinks>
          <NavLinks scrollNav={scrollNav} to="/contact">
            Contact
          </NavLinks>
        </NavMenu>
      </NavWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
