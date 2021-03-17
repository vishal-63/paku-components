import styled from "styled-components";

export const BrandsContainer = styled.section`
  width: 100%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
`;

export const BrandsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -1rem auto 0;
`;

export const BrandsText = styled.p`
  font-size: 1.2rem;
  font-family: "Titilium Web";
  line-height: 1;
  letter-spacing: 0.5px;
  color: #000;
`;

export const BrandsImgWrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 5rem;
`;

export const BrandsImg = styled.img`
  max-width: 200px;
  max-height: 100px;
  filter: grayscale(1);
  transition: all 0.4s ease;

  &:hover {
    transition: all 0.4s ease;
    filter: none;
  }
`;
