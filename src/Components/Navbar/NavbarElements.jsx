import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
export const NavbarContainer = styled.nav`
  background-color: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  width: 75%;
  margin: 0 auto;
  position: sticky;
  z-index: 20;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    margin: 0 10px;
    width: 100%;
  }
`;

export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavTitle = styled(Link)`
  color: #241b64;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
`;

export const NavLogo = styled.img`
  width: 80px;
  height: 80px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "none" : "block")};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #4b4d80;
  }
`;

export const CloseIcon = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-130%, 50%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #4b4d80;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;
  padding-left: 48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(Link)`
  color: #241b64;
  padding: 0 16px;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  margin: 0 10px;
  font-weight: 500;
`;
