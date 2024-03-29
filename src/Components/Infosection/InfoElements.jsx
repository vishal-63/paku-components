import { Link } from "react-router-dom";
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
  max-width: 1200px;
  margin: 3rem auto;
  padding: 36px 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    height: 100%;
    padding: 1rem 1.75rem;
    margin-top: 30px;
    flex-direction: column;
  }
`;

export const InfoHeading = styled.h1`
  font-family: Helvetica, sans-serif;
  font-size: 2.2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #01194f;
  text-align: center;

  @media screen and (max-width: 540px) {
    font-size: 28px;
  }

  &::nth-child(2) {
    color: #00b4d8;
  }
`;

export const InfoSubtitle = styled.p`
  font-size: 1.2rem;
  letter-spacing: 0.3px;
  text-align: center;
  margin: 0.75rem 0 1.2rem;

  @media (max-width: 540px) {
    padding: 0 1.5rem;
    font-size: 1rem;
  }
`;

export const InfoContent = styled.div`
  position: relative;
  margin: 2rem auto 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const InfoText = styled.div`
  color: #020509;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin-top: 1rem;
  word-spacing: 5px;
  position: relative;

  @media screen and (max-width: 540px) {
    font-size: 16px;
    letter-spacing: 0;
  }
`;

export const InfoList = styled.ul`
  margin: 20px 0 0 20px;
  list-style: none url(${arrow});
  position: relative;
`;

export const InfoListItems = styled.li`
  margin-top: 0.5rem;
  padding-left: 1.25rem;
  vertical-align: center;
`;

export const InfoImg = styled.img`
  margin-left: 20px;
  width: 500px;
  position: relative;

  @media screen and (max-width: 900px) {
    width: 100%;
    max-height: 350px;
    margin-top: 30px;
  }
`;

export const InfoBtn = styled(Link)`
  position: relative;
  top: 1.5rem;
  color: #fff;
  background-color: #01194f;
  border-radius: 30px;
  border: 1px solid #01194f;
  font-size: 1.2rem;
  padding: 0.6rem 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: #012883;
    border-color: #012883;
    transition: all 0.2s ease-in-out;
  }
`;

export const ToTopArrow = styled.div`
  background-color: #01194f;
  color: #fff;
  font-size: 2rem;
  padding: 0.75rem;
  border-radius: 50%;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ showToTop }) => (showToTop ? "visible" : "hidden")};
  transition: 0.3s visibility ease-in;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  z-index: 9;

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
  }

  @media (max-width: 540px) {
    font-size: 1.2rem;
    padding: 0.6rem;
  }
`;
