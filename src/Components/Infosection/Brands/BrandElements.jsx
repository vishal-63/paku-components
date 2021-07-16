import styled from "styled-components";

export const BrandsContainer = styled.section`
  width: 100%;
  margin: 3rem auto 2rem;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  background-color: #eff1f7;
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
