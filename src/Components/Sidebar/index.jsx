import React from "react";
import Navbar from "../Navbar";
import Topbar from "../Topbar";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements.jsx";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Topbar />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink>About</SidebarLink>
          <SidebarLink>Products</SidebarLink>
          <SidebarLink>Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
