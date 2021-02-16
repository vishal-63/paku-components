import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  background: #f9f8ff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 140%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #4b4d80;
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

export const SidebarWrapper = styled.div`
  color: #4b4d80;
`;

export const SidebarLink = styled(LinkS)`
  margin-left: 24px;
  color: #4b4d80;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #7e87f2;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 60px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;
