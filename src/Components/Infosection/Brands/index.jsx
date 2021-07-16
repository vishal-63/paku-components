import React, { Component } from "react";
import { InfoHeading, InfoSubtitle } from "../InfoElements";
import {
  BrandsContainer,
  BrandsWrapper,
  BrandsImgWrapper,
} from "./BrandElements";
import img1 from "../../../Images/honda.png";
import img2 from "../../../Images/hyundai.png";
import img3 from "../../../Images/toyota.png";
import img4 from "../../../Images/volkswagen.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Brands.css";

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
            <LazyLoadImage
              src={img1}
              alt="Honda Logo"
              className="brand-img"
              effect="opacity"
            />
            <LazyLoadImage
              src={img2}
              alt="Hyundai Logo"
              className="brand-img"
              effect="opacity"
            />
            <LazyLoadImage
              src={img3}
              alt="Toyota Logo"
              className="brand-img"
              effect="opacity"
            />
            <LazyLoadImage
              src={img4}
              alt="Volkwagen Logo"
              className="brand-img"
              effect="opacity"
            />
          </BrandsImgWrapper>
        </BrandsWrapper>
      </BrandsContainer>
    );
  }
}

export default Brands;
