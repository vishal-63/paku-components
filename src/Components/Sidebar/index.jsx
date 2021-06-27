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
      <Navbar
        isOpen={isOpen}
        toggle={toggle}
        style={{ position: "relative", boxShadow: "0 0 0" }}
      />
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about">About</SidebarLink>
          <SidebarLink to="/">Products</SidebarLink>
          <SidebarLink to="/blogs">Blogs</SidebarLink>
          <SidebarLink to="/contact">Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
