import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { InfoHeading, InfoHeadingShadow } from "../InfoElements";
import {
  UspContainer,
  UspCardsWrapper,
  UspCard,
  UspCardIcon,
  UspCardTitle,
  UspCardText,
} from "./UspElements";
import { VscFolderOpened } from "react-icons/vsc";
import { BiRupee } from "react-icons/bi";
import { BsStar } from "react-icons/bs";

class UspCards extends Component {
  state = {};
  render() {
    AOS.init({
      duration: 1500,
    });

    return (
      <UspContainer>
        <InfoHeadingShadow data-aos="zoom-in">Why Choose Us?</InfoHeadingShadow>
        <InfoHeading data-aos="zoom-in">Why Choose Us?</InfoHeading>

        <UspCardsWrapper>
          <UspCard data-aos="slide-right">
            <UspCardIcon>
              <VscFolderOpened />
            </UspCardIcon>
            <UspCardTitle>Wide Range of Products</UspCardTitle>
            <UspCardText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              sapiente nam repellendus fugit modi quod!
            </UspCardText>
          </UspCard>

          <UspCard data-aos="slide-right">
            <UspCardIcon>
              <BiRupee />
            </UspCardIcon>
            <UspCardTitle>Best Price</UspCardTitle>
            <UspCardText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              sapiente nam repellendus fugit modi quod!
            </UspCardText>
          </UspCard>

          <UspCard data-aos="slide-right">
            <UspCardIcon>
              <BsStar />
            </UspCardIcon>
            <UspCardTitle>Professional Experience</UspCardTitle>
            <UspCardText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              sapiente nam repellendus fugit modi quod!
            </UspCardText>
          </UspCard>
        </UspCardsWrapper>
      </UspContainer>
    );
  }
}

export default UspCards;
