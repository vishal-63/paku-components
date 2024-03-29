import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  display: grid;
  background: #fff;
  align-items: center;
  left: 0;
  transition: 0.5s all ease-in-out;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
`;

export const SidebarWrapper = styled.div`
  color: #4b4d80;
`;

export const SidebarLink = styled(Link)`
  margin-left: 24px;
  color: #01194f;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #7e87f2;
  }
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 45px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 45px);
  }
`;
