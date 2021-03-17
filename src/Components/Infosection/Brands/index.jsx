import React, { Component } from "react";
import { InfoHeading, InfoHeadingShadow } from "../InfoElements";
import {
  BrandsContainer,
  BrandsWrapper,
  BrandsText,
  BrandsImgWrapper,
  BrandsImg,
} from "./BrandElements";
import img1 from "../../../Images/honda.png";
import img2 from "../../../Images/hyundai.png";
import img3 from "../../../Images/toyota.png";
import img4 from "../../../Images/volkswagen.png";

class Brands extends Component {
  state = {};
  render() {
    return (
      <BrandsContainer>
        <InfoHeadingShadow>Our Partners</InfoHeadingShadow>
        <InfoHeading>Our Partners</InfoHeading>

        <BrandsWrapper>
          <BrandsText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ducimus
            odio unde amet, dolore ipsam.
          </BrandsText>

          <BrandsImgWrapper>
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
