import React from "react";
import Navbar from "../Navbar/index.jsx";
import Topbar from "../Topbar/index.jsx";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements.jsx";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Topbar />
      <Navbar isOpen={isOpen} toggle={toggle} />
      {/* <Icon onClick={toggle}>
        <CloseIcon />
      </Icon> */}
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
