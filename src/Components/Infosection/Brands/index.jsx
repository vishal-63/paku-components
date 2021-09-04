import React, { Component } from "react";
import { InfoHeading, InfoSubtitle } from "../InfoElements";
import {
  BrandsContainer,
  BrandsWrapper,
  BrandsImgWrapper,
} from "./BrandElements";
import img1 from "../../../Images/banco.png";
import img2 from "../../../Images/cougar.png";
import img3 from "../../../Images/kcpl.png";
import img4 from "../../../Images/akshay industries.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Brands.css";

class Brands extends Component {
  render() {
    return (
      <BrandsContainer>
        <InfoHeading>Our Partners</InfoHeading>
        <InfoSubtitle>
          The Brands we have partnered to provide BEST Quality Products
        </InfoSubtitle>

        <BrandsWrapper>
          <BrandsImgWrapper data-aos="zoom-in">
            <a
              href="http://www.bancoindia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LazyLoadImage
                src={img1}
                alt="Banco India Logo"
                className="brand-img"
                effect="opacity"
              />
            </a>
            <a
              href="https://www.varunradiators.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LazyLoadImage
                src={img2}
                alt="Cougar Logo"
                className="brand-img"
                effect="opacity"
              />
            </a>
            <a
              href="https://www.karnavatiautomall.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LazyLoadImage
                src={img3}
                alt="Toyota Logo"
                className="brand-img"
                effect="opacity"
              />
            </a>
            <a
              href="http://www.radiatorplastictank.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LazyLoadImage
                src={img4}
                alt="Volkwagen Logo"
                className="brand-img"
                effect="opacity"
              />
            </a>
          </BrandsImgWrapper>
        </BrandsWrapper>
      </BrandsContainer>
    );
  }
}

export default Brands;
