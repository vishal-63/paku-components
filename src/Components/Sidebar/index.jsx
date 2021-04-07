import React from "react";
import Navbar from "../Navbar";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements.jsx";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">About</SidebarLink>
          <SidebarLink to="/">Products</SidebarLink>
          <SidebarLink to="/">Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
