import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  background-color: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
  box-shadow: ${({ isOpen }) =>
    isOpen ? "0 0 0 rgb(255,255,255)" : "0 5px 20px rgba(0,0,0,0.2)"};
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: ${({ scrollNav }) => (scrollNav ? "0" : "")};
  z-index: 20;
  transition: all 0.2s ease;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NavWrapper = styled.div`
  width: 100%;
  margin: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 0 10px;
  }
`;

export const NavTitle = styled.div`
  color: #00b4d8;
  font-size: 2rem;
  font-weight: 600;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease;
`;

export const NavLogo = styled.img`
  width: 80px;
  height: 80px;
`;

export const MobileIcon = styled.div`
  display: none;
  transition: 0.3s all ease-in-out;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "none" : "block")};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #01194f;
    z-index: 10;
    transition: all 0.2s ease;
  }
`;

export const CloseIcon = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 50%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #01194f;
  transition: all 0.2s ease;
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
  color: ${({ scrollNav }) => (scrollNav ? "#01194f" : "#00b4d8")};
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  margin: 0 10px;
  font-weight: 500;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  text-transform: uppercase;

  &:hover {
    border-color: ${({ scrollNav }) => (scrollNav ? "#01194f" : "#00b4d8")};
    transition: all 0.2s ease-in;
  }

  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;
