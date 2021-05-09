import styled from "styled-components";

export const BrandsContainer = styled.section`
  width: 100%;
  margin: 3rem auto 2rem;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(191, 219, 247, 0.5);
`;

export const BrandsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -1rem auto 0;
`;

export const BrandsImgWrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 5rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-gap: 2rem;
  }

  @media (max-width: 540px) {
    grid-template-columns: auto auto;
  }
`;

export const BrandsImg = styled.img`
  max-width: 200px;
  max-height: 100px;
  filter: grayscale(1) drop-shadow(3px 3px 20px rgba(0, 0, 0, 0.2));
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.4s ease;
    filter: drop-shadow(3px 3px 20px rgba(0, 0, 0, 0.2));
  }

  @media (max-width: 900px) {
    max-width: 150px;
  }

  @media (max-width: 540px) {
    width: 100px;
    height: 100px;
  }
`;
