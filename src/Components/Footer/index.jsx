import React, { Component } from "react";
import logo from "../../Images/logo-copy.png";
import { MdLocationOn } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  FooterSectionWrapper,
  FooterIcon,
  FooterText,
  FooterContacts,
  CopyRightWrapper,
  CopyRightText,
} from "./FooterElements";

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <FooterWrapper>
          <FooterLogo src={logo} alt="Paku Components Logo"></FooterLogo>
          <FooterSectionWrapper>
            <FooterIcon>
              <MdLocationOn />
            </FooterIcon>
            <FooterText>
              #96, 1st Floor, 1st Main, 4th Cross, New Timber Yard Layout 560020
            </FooterText>
          </FooterSectionWrapper>
          <FooterSectionWrapper>
            <FooterIcon>
              <BiPhone />
            </FooterIcon>
            <FooterContacts>
              <FooterText href="tel:+91-8197302228">+91-8197302228</FooterText>
              <FooterText href="mailto:pakucomponents@gmail.com">
                pakucomponents@gmail.com
              </FooterText>
            </FooterContacts>
          </FooterSectionWrapper>
          <FooterSectionWrapper>
            <FooterIcon>
              <FaFacebookF />
            </FooterIcon>
            <FooterIcon>
              <FaInstagram />
            </FooterIcon>
            <FooterIcon>
              <FaTwitter />
            </FooterIcon>
            <FooterIcon>
              <FaYoutube />
            </FooterIcon>
          </FooterSectionWrapper>
        </FooterWrapper>
        <CopyRightWrapper>
          <CopyRightText>
            Paku Components &copy; {new Date().getFullYear()} All Rights
            Reserved.
          </CopyRightText>
        </CopyRightWrapper>
      </FooterContainer>
    );
  }
}

export default Footer;
