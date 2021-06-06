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
  ProductCardSection,
} from "./ProductElements";
import img1 from "../../../Images/radiator.jpg";
import img2 from "../../../Images/core.jpg";
import img3 from "../../../Images/condenser.png";
import img4 from "../../../Images/intercooler.jpg";
import { InfoHeading, InfoSubtitle } from "../InfoElements";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Swiper.css";

class Products extends Component {
  render() {
    SwiperCore.use([Navigation]);

    return (
      <ProductCardsContainer>
        <InfoHeading style={{ color: "#3a7bd5" }}>Products</InfoHeading>
        <InfoSubtitle>The widest range of products you will find.</InfoSubtitle>

        <ProductCardsWrapper>
          <Swiper navigation={true}>
            <SwiperSlide>
              <ProductCardSection>
                <ProductCard data-aos="flip-right">
                  <ProductCardImgWrapper>
                    <ProductCardImg src={img1} alt="radiator"></ProductCardImg>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Radiator</ProductCardTitle>
                  <ProductCardLink to="/">Show More</ProductCardLink>
                </ProductCard>

                <ProductCard data-aos="flip-right" data-aos-delay="100">
                  <ProductCardImgWrapper>
                    <ProductCardImg src={img2} alt="core"></ProductCardImg>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Core</ProductCardTitle>
                  <ProductCardLink to="/">Show More</ProductCardLink>
                </ProductCard>

                <ProductCard data-aos="flip-right" data-aos-delay="200">
                  <ProductCardImgWrapper>
                    <ProductCardImg src={img3} alt="condenser"></ProductCardImg>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Condenser</ProductCardTitle>
                  <ProductCardLink to="/">Show More</ProductCardLink>
                </ProductCard>
              </ProductCardSection>
            </SwiperSlide>

            <SwiperSlide>
              <ProductCardSection>
                <ProductCard data-aos="flip-right" data-aos-delay="300">
                  <ProductCardImgWrapper>
                    <ProductCardImg
                      src={img4}
                      alt="intercooler"
                    ></ProductCardImg>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Intercooler</ProductCardTitle>
                  <ProductCardLink to="/">Show More</ProductCardLink>
                </ProductCard>
                <ProductCard data-aos="flip-right" data-aos-delay="300">
                  <ProductCardImgWrapper>
                    <ProductCardImg
                      src={img4}
                      alt="intercooler"
                    ></ProductCardImg>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Intercooler</ProductCardTitle>
                  <ProductCardLink to="/">Show More</ProductCardLink>
                </ProductCard>
                <ProductCard data-aos="flip-right" data-aos-delay="300">
                  <ProductCardImgWrapper>
                    <ProductCardImg
                      src={img4}
                      alt="intercooler"
                    ></ProductCardImg>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Intercooler</ProductCardTitle>
                  <ProductCardLink to="/">Show More</ProductCardLink>
                </ProductCard>
              </ProductCardSection>
            </SwiperSlide>
          </Swiper>
        </ProductCardsWrapper>
      </ProductCardsContainer>
    );
  }
}

export default Products;
