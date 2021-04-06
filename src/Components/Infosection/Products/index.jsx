import React, { Component } from "react";
import {
  ProductCardsContainer,
  ProductCardsWrapper,
  ProductCard,
  ProductCardTitle,
  ProductCardImg,
  ProductCardLink,
  ProductCardBottomLine,
  ProductCardImgWrapper,
} from "./ProductElements";
import img1 from "../../../Images/radiator.jpg";
import img2 from "../../../Images/core.jpg";
import img3 from "../../../Images/condenser.png";
import img4 from "../../../Images/intercooler.jpg";
import { InfoHeading, InfoHeadingShadow } from "../InfoElements";

class Products extends Component {
  state = {};
  render() {
    return (
      <ProductCardsContainer>
        <InfoHeadingShadow data-aos="zoom-in">Products</InfoHeadingShadow>
        <InfoHeading data-aos="zoom-in">Products</InfoHeading>

        <ProductCardsWrapper>
          <ProductCard data-aos="flip-right">
            <ProductCardTitle>Radiator</ProductCardTitle>
            <ProductCardImgWrapper>
              <ProductCardImg src={img1} alt="radiator"></ProductCardImg>
            </ProductCardImgWrapper>
            <ProductCardLink to="/">Show More</ProductCardLink>
            <ProductCardBottomLine />
          </ProductCard>

          <ProductCard data-aos="flip-right" data-aos-delay="100">
            <ProductCardTitle>Core</ProductCardTitle>
            <ProductCardImgWrapper>
              <ProductCardImg src={img2} alt="core"></ProductCardImg>
            </ProductCardImgWrapper>
            <ProductCardLink to="/">Show More</ProductCardLink>
            <ProductCardBottomLine />
          </ProductCard>

          <ProductCard data-aos="flip-right" data-aos-delay="200">
            <ProductCardTitle>Condenser</ProductCardTitle>
            <ProductCardImgWrapper>
              <ProductCardImg src={img3} alt="condenser"></ProductCardImg>
            </ProductCardImgWrapper>
            <ProductCardLink to="/">Show More</ProductCardLink>
            <ProductCardBottomLine />
          </ProductCard>

          <ProductCard data-aos="flip-right" data-aos-delay="300">
            <ProductCardTitle>Intercooler</ProductCardTitle>
            <ProductCardImgWrapper>
              <ProductCardImg src={img4} alt="intercooler"></ProductCardImg>
            </ProductCardImgWrapper>
            <ProductCardLink to="/">Show More</ProductCardLink>
            <ProductCardBottomLine />
          </ProductCard>
        </ProductCardsWrapper>
      </ProductCardsContainer>
    );
  }
}

export default Products;
