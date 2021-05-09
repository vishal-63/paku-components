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
        <InfoHeading>Products</InfoHeading>
        <InfoSubtitle>The widest range of products you will find.</InfoSubtitle>

        <ProductCardsWrapper>
          <Swiper navigation={true}>
            <SwiperSlide>
              <ProductCardSection>
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
              </ProductCardSection>
            </SwiperSlide>

            <SwiperSlide>
              <ProductCardSection>
                <ProductCard data-aos="flip-right" data-aos-delay="300">
                  <ProductCardTitle>Intercooler</ProductCardTitle>
                  <ProductCardImgWrapper>
                    <ProductCardImg
                      src={img4}
                      alt="intercooler"
                    ></ProductCardImg>
                  </ProductCardImgWrapper>
                  <ProductCardLink to="/">Show More</ProductCardLink>
                  <ProductCardBottomLine />
                </ProductCard>
                <ProductCard data-aos="flip-right" data-aos-delay="300">
                  <ProductCardTitle>Intercooler</ProductCardTitle>
                  <ProductCardImgWrapper>
                    <ProductCardImg
                      src={img4}
                      alt="intercooler"
                    ></ProductCardImg>
                  </ProductCardImgWrapper>
                  <ProductCardLink to="/">Show More</ProductCardLink>
                  <ProductCardBottomLine />
                </ProductCard>
                <ProductCard data-aos="flip-right" data-aos-delay="300">
                  <ProductCardTitle>Intercooler</ProductCardTitle>
                  <ProductCardImgWrapper>
                    <ProductCardImg
                      src={img4}
                      alt="intercooler"
                    ></ProductCardImg>
                  </ProductCardImgWrapper>
                  <ProductCardLink to="/">Show More</ProductCardLink>
                  <ProductCardBottomLine />
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
