import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  padding: 3rem 0;
  width: 100%;
  background-color: #dfedfb;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%236c6c6c' fill-opacity='0.38' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");

  @media (max-width: 900px) {
    margin-top: 30px;
  }
`;

export const ProductCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ProductCardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 2rem;
  align-items: center;
  margin-top: 2rem;
  align-items: center;
  max-width: 1000px;
  padding-bottom: 30px;
  justify-content: center;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, auto);
    row-gap: 2rem;
    max-width: 85vw;
  }

  @media (max-width: 540px) {
    grid-template-columns: auto;
    width: 100vw;
    margin-left: 5px;
    margin-right: auto;
  }
`;

export const ProductCard = styled.div`
  background-color: #fff;
  width: 250px;
  height: 350px;
  padding: 1rem 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  &::after {
    content: "";
    background-color: #0077b6;
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: 0;
    transform: translateX(-101%);
  }

  &:hover::after {
    transform: translateX(0);
    transition: 0.5s linear;
  }

  @media (max-width: 1024px) {
    width: 200px;
    height: 300px;
  }

  @media (max-width: 900px) {
    /* width: 250px; */
    height: 300px;
  }
`;

export const ProductCardTitle = styled.h2`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #020509;
`;

export const ProductCardImgWrapper = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductCardImg = styled.img`
  max-width: 200px;
  max-height: 200px;
`;

export const ProductCardLink = styled(Link)`
  padding-top: 20px;
  width: 90%;
  text-align: center;
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    margin-bottom: 0;
  }

  @media (max-width: 900px) {
    padding-top: 15px;
  }
`;
