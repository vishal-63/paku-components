import React, { Component } from "react";
import {
  ProductCardsContainer,
  ProductCardsWrapper,
  ProductCard,
  ProductCardTitle,
  ProductCardLink,
  ProductCardImgWrapper,
  ProductCardSection,
} from "./ProductElements";
import img1 from "../../../Images/radiator.jpg";
import img2 from "../../../Images/core.jpg";
import img3 from "../../../Images/condenser.png";
import img4 from "../../../Images/intercooler.jpg";
import { InfoHeading, InfoSubtitle } from "../InfoElements";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Swiper.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
                  <ProductCardImgWrapper>
                    <LazyLoadImage
                      src={img1}
                      alt="radiator"
                      effect="opacity"
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                    ></LazyLoadImage>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Radiator</ProductCardTitle>
                  <ProductCardLink to="/">Show More</ProductCardLink>
                </ProductCard>

                <ProductCard data-aos="flip-right" data-aos-delay="100">
                  <ProductCardImgWrapper>
                    <LazyLoadImage
                      src={img2}
                      alt="core"
                      effect="opacity"
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                    ></LazyLoadImage>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Core</ProductCardTitle>
                  <ProductCardLink to="/">Show More</ProductCardLink>
                </ProductCard>

                <ProductCard data-aos="flip-right" data-aos-delay="200">
                  <ProductCardImgWrapper>
                    <LazyLoadImage
                      src={img3}
                      alt="condenser"
                      effect="opacity"
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                    ></LazyLoadImage>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Top-Bottom</ProductCardTitle>
                  <ProductCardLink to="/">Show More</ProductCardLink>
                </ProductCard>
              </ProductCardSection>
            </SwiperSlide>

            <SwiperSlide>
              <ProductCardSection>
                <ProductCard data-aos="flip-right" data-aos-delay="300">
                  <ProductCardImgWrapper>
                    <LazyLoadImage
                      src={img4}
                      alt="intercooler"
                      effect="opacity"
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                    ></LazyLoadImage>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Condenser</ProductCardTitle>
                  <ProductCardLink to="/">Show More</ProductCardLink>
                </ProductCard>
                <ProductCard data-aos="flip-right" data-aos-delay="300">
                  <ProductCardImgWrapper>
                    <LazyLoadImage
                      src={img4}
                      alt="intercooler"
                      effect="opacity"
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                    ></LazyLoadImage>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Cooler</ProductCardTitle>
                  <ProductCardLink to="/">Show More</ProductCardLink>
                </ProductCard>
                <ProductCard data-aos="flip-right" data-aos-delay="300">
                  <ProductCardImgWrapper>
                    <LazyLoadImage
                      src={img4}
                      alt="intercooler"
                      effect="opacity"
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                    ></LazyLoadImage>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Fan Assembly</ProductCardTitle>
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
