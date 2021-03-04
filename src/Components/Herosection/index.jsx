import React, { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import { FaCircle } from "react-icons/fa";
import {
  HerosectionSlider,
  HeroSlide,
  HeroImage,
  HeroText,
  HeroHeading,
  HeroSubtitle,
  HeroDotsWrapper,
  HeroDot,
  HeroLine,
  HeroCurrentSlideNo,
  HeroSlideNo,
} from "./HeroElements";
import "./Herosection.css";

const Herosection = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const Interval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(Interval);
    };
  }, [nextSlide]);

  const changeSlide = (index) => {
    setCurrent(index);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HerosectionSlider>
      <HeroDotsWrapper>
        <HeroDot onClick={() => changeSlide(0)}>
          <FaCircle />
        </HeroDot>
        <HeroDot onClick={() => changeSlide(1)}>
          <FaCircle />
        </HeroDot>
        <HeroDot onClick={() => changeSlide(2)}>
          <FaCircle />
        </HeroDot>
        <HeroLine></HeroLine>

        <HeroSlideNo>
          <HeroCurrentSlideNo>0{current + 1}</HeroCurrentSlideNo>/03
        </HeroSlideNo>
      </HeroDotsWrapper>

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <HeroSlide key={index}>
                <HeroImage src={slide.image} alt="img1" />
                <HeroText>
                  <HeroHeading>{slide.heading}</HeroHeading>
                  <HeroSubtitle>{slide.subtitle}</HeroSubtitle>
                </HeroText>
              </HeroSlide>
            )}
          </div>
        );
      })}
    </HerosectionSlider>
  );
};

export default Herosection;
