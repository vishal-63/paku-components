import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const Nav = styled.nav`
  background: #f9f8ff;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  padding: 0 96px;

  @media screen and (max-width: 1100px) {
    transition: 0.8s all ease;
    padding: 0 48px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;

  @media screen and (max-width: 768px) {
    position: absolute;
    left: -30px;
  }
`;

// export const NavLogoWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 80px;
//   widtth: 100%;
//   z-index: 1;
// `;

export const NavLogo = styled(LinkR)`
  color: #4b4d80;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 48px;
  text-decoration: none;
  letter-spacing: 3.5px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "none" : "block")};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 140%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #4b4d80;
  }

  @media screen and (max-width: 480px) {
    display: ${({ isOpen }) => (isOpen ? "none" : "block")};
    transform: translate(-100%, 110%);
  }
`;

export const CloseIcon = styled(FaTimes)`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-10%, 160%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #4b4d80;

  @media screen and (max-width: 480px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    transform: translate(-10%, 110%);
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const NavMenu = styled.ul`
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

export const NavItems = styled.li`
  display: flex;
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #4b4d80;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
  height: 100%;
  font-size: 1.3rem;
  margin: 0 10px;
  font-weight: 500;

  &.active {
    border-bottom: 3px solid #4b4d80;
  }

  &:hover {
    transform: scale(1.05);
    color: #7e87f2;
  }
`;
