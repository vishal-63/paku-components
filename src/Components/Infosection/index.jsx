import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../Images/car.svg";
import {
  InfoContainer,
  InfoWrapper,
  InfoHeading,
  InfoContent,
  InfoText,
  InfoList,
  InfoListItems,
  InfoImg,
  InfoBtn,
} from "./InfoElements";
import Products from "./Products";
import UspCards from "./USP";
import Brands from "./Brands";

class Infosection extends Component {
  render() {
    AOS.init({
      duration: 1000,
    });

    return (
      <InfoContainer>
        <InfoWrapper>
          <InfoContent>
            <InfoHeading>ABOUT US</InfoHeading>
            <InfoText data-aos="zoom-in">
              PAKU Components PVT. LTD. was incorporated in 2020 with the main
              purpose of fullfilling the demand of Aluminium Radiators,
              Aluminium Cores, Fibre Top-Bottoms, and various other related
              parts. The Leaders of the company have a collective experience of
              30+ Years in this industry and has knowledge of everything that
              goes on in the industry. PAKU Components focus on providing best
              quality products, keeping consumer satisfaction in mind.
            </InfoText>
            <InfoBtn to="/about">Know More</InfoBtn>
          </InfoContent>
          <InfoImg
            src={img}
            alt="image"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
        </InfoWrapper>

        <Products />

        <UspCards />

        <Brands />
      </InfoContainer>
    );
  }
}

export default Infosection;
