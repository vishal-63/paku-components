import React, { Component } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import {
  TopbarContainer,
  TopbarContent,
  TopbarIcons,
  TopbarText,
  TopbarWrapper,
} from "./TopbarElements";

class Topbar extends Component {
  render() {
    return (
      <TopbarContainer>
        <TopbarContent color={this.props.color} border={this.props.border}>
          <TopbarWrapper border={this.props.border}>
            <TopbarIcons>
              <FiPhone />
            </TopbarIcons>
            <TopbarText>+91-8197302228</TopbarText>
            <TopbarText border={this.props.border}>+91-9023548954</TopbarText>
          </TopbarWrapper>
          <TopbarWrapper border={this.props.border}>
            <TopbarIcons>
              <FiMail />
            </TopbarIcons>
            <TopbarText>pakucomponents@gmail.com</TopbarText>
          </TopbarWrapper>
        </TopbarContent>
      </TopbarContainer>
    );
  }
}

export default Topbar;
