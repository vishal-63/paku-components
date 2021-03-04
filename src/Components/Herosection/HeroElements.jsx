import styled from "styled-components";

export const HerosectionSlider = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
`;

export const HeroSlide = styled.div`
  width: 100%;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100vh;
  opacity: 0.5;
  z-index: -1;
  user-select: none;
`;

export const HeroText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: -50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const HeroHeading = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #10375d;
  letter-spacing: 2px;

  @media screen and (max-width: 540px) {
    font-size: 30px;
  }
`;

export const HeroSubtitle = styled.p`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 500;
  color: #040d16;
  font-family: "Titillium Web", sans-serif;

  @media screen and (max-width: 540px) {
    font-size: 16px;
    width: 300px;
    text-align: center;
  }
`;

export const HeroDotsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 20px;
  z-index: 10;
  font-size: 10px;

  @media screen and (max-width: 768px) {
    top: 95%;
    left: 10%;
    flex-direction: row;
    height: 30px;
  }
`;

export const HeroDot = styled.div`
  color: #e0e2d5;
  height: 25px;
  width: 25px;
  display: flex;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid #05647a;
  }
`;

export const HeroLine = styled.div`
  background-color: #040d16;
  height: 100px;
  width: 1.5px;
  margin: 10px 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeroCurrentSlideNo = styled.div`
  color: #10375d;
  font-weight: 500;
  font-size: 26px;
  padding-right: 5px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeroSlideNo = styled.div`
  font-family: "Titillium Web", sans-serif;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #040d16;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
