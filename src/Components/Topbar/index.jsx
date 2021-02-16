import React from "react";
import {
  TopbarContainer,
  TopbarContent,
  ContactNosWrapper,
  ContactNos,
  PhoneIcon,
  EmailWrapper,
  EmailIcon,
  Email,
} from "./TopbarElements";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Topbar = () => {
  return (
    <TopbarContainer>
      <TopbarContent>
        <ContactNosWrapper>
          <PhoneIcon>
            <FaPhoneAlt />
          </PhoneIcon>
          <ContactNos>+91-8197302228</ContactNos>
          <ContactNos>+91-9023548954</ContactNos>
        </ContactNosWrapper>
        <EmailWrapper>
          <EmailIcon>
            <HiMail />
          </EmailIcon>
          <Email>pakucomponents@gmail.com</Email>
        </EmailWrapper>
      </TopbarContent>
    </TopbarContainer>
  );
};

export default Topbar;
