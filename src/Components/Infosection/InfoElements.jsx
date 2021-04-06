import styled from "styled-components";
import arrow from "../../Images/arrow.svg";

export const InfoContainer = styled.section`
  position: relative;
  top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

export const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 3rem auto;
  padding: 36px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    height: 100%;
    padding: 10px 20px;
    margin-top: 30px;
  }
`;

export const InfoTitle = styled.div`
  text-align: center;
`;

export const InfoHeadingShadow = styled.h1`
  font-size: 45px;
  letter-spacing: 3px;
  opacity: 0.4;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.2);
  /* background: -webkit-linear-gradient(#040d16, #ccc 75%); */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media screen and (max-width: 540px) {
    font-size: 32px;
  }
`;

export const InfoHeading = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #01194f;
  text-align: center;
  position: relative;
  top: -35px;

  @media screen and (max-width: 540px) {
    font-size: 28px;
    top: -24px;
  }
`;

export const InfoContent = styled.div`
  margin: 2rem auto 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const InfoText = styled.div`
  max-width: 600px;
  color: #020509;
  font-weight: 300;
  font-size: 20px;
  /* line-height: 2; */
  letter-spacing: 0.5px;

  @media screen and (max-width: 540px) {
    font-size: 16px;
    letter-spacing: 0;
  }
`;

export const InfoList = styled.ul`
  margin: 20px 0 0 20px;
  list-style: none url(${arrow});
`;

export const InfoListItems = styled.li`
  margin-top: 8px;
  padding-left: 20px;
`;

export const InfoImg = styled.img`
  margin-left: 20px;
  width: 500px;
  height: 300px;
  box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 900px) {
    margin: 30px 0 0 0;
    width: 100%;
  }
`;

export const InfoBtn = styled.div`
  margin-top: 25px;
  padding: 10px 25px;
  width: 150px;
  height: 42.5px;
  font-size: 18px;
  color: #01194f;
  position: relative;
  background: transparent;
  box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  border: none;

  &:hover {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  &:hover span:nth-child(1) {
    transform: scale(0);
    transition-delay: 0s;
  }

  &:hover span:nth-child(2) {
    opacity: 1;
    transform: scale(1);
    transition-delay: 0s;
  }

  &:before,
  &:after {
    content: "";
    width: 5px;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: #caf0f8;
    transition: width 0.5s ease-in-out;
    transition-delay: 0.5s;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }

  &:hover:before,
  &:hover:after {
    transition: width 0.5s ease-in-out;
    transition-delay: 0s;
    width: 51%;
  }
`;

export const InfoBtnSpan1 = styled.span`
  position: absolute;
  z-index: 1;
  transition: 0.5s;
  transition-delay: 0.75s;
`;

export const InfoBtnSpan2 = styled.span`
  position: absolute;
  z-index: 1;
  opacity: 0;
  transition: 0.5s;
  transition-delay: 0.5s;
  transform: scale(3);
  color: #01194f;
`;
