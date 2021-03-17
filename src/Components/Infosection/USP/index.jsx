import React, { Component } from "react";
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
    return (
      <UspContainer>
        <InfoHeadingShadow>Why Choose Us?</InfoHeadingShadow>
        <InfoHeading>Why Choose Us?</InfoHeading>

        <UspCardsWrapper>
          <UspCard>
            <UspCardIcon>
              <VscFolderOpened />
            </UspCardIcon>
            <UspCardTitle>Wide Range of Products</UspCardTitle>
            <UspCardText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              sapiente nam repellendus fugit modi quod!
            </UspCardText>
          </UspCard>

          <UspCard>
            <UspCardIcon>
              <BiRupee />
            </UspCardIcon>
            <UspCardTitle>Best Price</UspCardTitle>
            <UspCardText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              sapiente nam repellendus fugit modi quod!
            </UspCardText>
          </UspCard>

          <UspCard>
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
