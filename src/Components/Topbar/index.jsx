import React, { Component } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaSearchLocation } from "react-icons/fa";
import {
  TopbarContainer,
  TopbarContent,
  TopbarIcons,
  TopbarText,
  TopbarWrapper,
} from "./TopbarElements";

class Topbar extends Component {
  state = {};
  render() {
    return (
      <TopbarContainer>
        <TopbarContent>
          <TopbarWrapper>
            <TopbarIcons>
              <FaPhoneAlt />
            </TopbarIcons>
            <TopbarText>+91-8197302228</TopbarText>
            <TopbarText>+91-9023548954</TopbarText>
          </TopbarWrapper>
          <TopbarWrapper>
            <TopbarIcons>
              <HiMail />
            </TopbarIcons>
            <TopbarText>pakucomponents@gmail.com</TopbarText>
          </TopbarWrapper>
        </TopbarContent>
      </TopbarContainer>
    );
  }
}

export default Topbar;
