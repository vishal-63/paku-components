import React, { Component } from "react";
import { InfoHeading, InfoSubtitle } from "../InfoElements";
import {
  BrandsContainer,
  BrandsWrapper,
  BrandsImgWrapper,
  BrandsImg,
} from "./BrandElements";
import img1 from "../../../Images/honda.png";
import img2 from "../../../Images/hyundai.png";
import img3 from "../../../Images/toyota.png";
import img4 from "../../../Images/volkswagen.png";

class Brands extends Component {
  render() {
    return (
      <BrandsContainer>
        <InfoHeading>Our Partners</InfoHeading>
        <InfoSubtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          quasi!
        </InfoSubtitle>

        <BrandsWrapper>
          <BrandsImgWrapper data-aos="zoom-in">
            <BrandsImg src={img1} alt="honda" />
            <BrandsImg src={img2} alt="hyundai" />
            <BrandsImg src={img3} alt="toyota" />
            <BrandsImg src={img4} alt="volkwagen" />
          </BrandsImgWrapper>
        </BrandsWrapper>
      </BrandsContainer>
    );
  }
}

export default Brands;
