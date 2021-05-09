import React, { Component } from "react";
import { InfoHeading, InfoSubtitle } from "../InfoElements";
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
  render() {
    return (
      <UspContainer>
        <InfoHeading>Why Choose Us?</InfoHeading>
        <InfoSubtitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
          facilis.
        </InfoSubtitle>

        <UspCardsWrapper>
          <UspCard data-aos="flip-right">
            <UspCardIcon>
              <VscFolderOpened />
            </UspCardIcon>
            <UspCardTitle>Wide Range of Products</UspCardTitle>
            <UspCardText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              sapiente nam repellendus fugit modi quod!
            </UspCardText>
          </UspCard>

          <UspCard data-aos="flip-right">
            <UspCardIcon>
              <BiRupee />
            </UspCardIcon>
            <UspCardTitle>Best Price</UspCardTitle>
            <UspCardText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              sapiente nam repellendus fugit modi quod!
            </UspCardText>
          </UspCard>

          <UspCard data-aos="flip-right">
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
