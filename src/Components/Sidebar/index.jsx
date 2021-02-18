import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
  AOS.init({ duration: 2000 });
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
