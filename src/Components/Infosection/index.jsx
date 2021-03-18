import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../Images/img-5.jpg";
import {
  InfoContainer,
  InfoWrapper,
  InfoTitle,
  InfoHeadingShadow,
  InfoHeading,
  InfoContent,
  InfoText,
  InfoList,
  InfoListItems,
  InfoImg,
  InfoBtn,
  InfoBtnSpan1,
  InfoBtnSpan2,
} from "./InfoElements";
import Products from "./Products";
import UspCards from "./USP";
import Brands from "./Brands";

class Infosection extends Component {
  state = {};
  render() {
    AOS.init({
      duration: 1500,
    });

    return (
      <InfoContainer>
        <InfoWrapper>
          <InfoTitle>
            <InfoHeadingShadow data-aos="zoom-in">ABOUT US</InfoHeadingShadow>
            <InfoHeading data-aos="zoom-in">ABOUT US</InfoHeading>
          </InfoTitle>
          <InfoContent>
            <InfoText data-aos="slide-right">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              natus dolorem veritatis asperiores praesentium cumque doloremque
              officia impedit qui ipsum inventore possimus, alias tempore ipsam.
              Aliquid sequi, quia deleniti, fugiat quibusdam iusto doloribus
              cupiditate quaerat praesentium in beatae at sint veniam velit
              animi commodi! Dolore iure quisquam deserunt consequatur.
              Perferendis?
              <InfoList>
                <InfoListItems>Lorem, ipsum.</InfoListItems>
                <InfoListItems>Lorem, ipsum.</InfoListItems>
                <InfoListItems>Lorem, ipsum.</InfoListItems>
              </InfoList>
              <InfoBtn>
                <InfoBtnSpan1>Know More</InfoBtnSpan1>
                <InfoBtnSpan2>Know More</InfoBtnSpan2>
              </InfoBtn>
            </InfoText>
            <InfoImg
              src={img}
              alt="image"
              data-aos="fade-left"
              data-aos-delay="200"
            />
          </InfoContent>
        </InfoWrapper>

        <Products />

        <UspCards />

        <Brands />
      </InfoContainer>
    );
  }
}

export default Infosection;
