import styled from "styled-components";

export const ContactPageContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: flex-start;
  padding: 3rem 1.5rem;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 900px) {
    padding: 4rem 0;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    max-width: 80vw;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 900px) {
    max-width: 450px;
  }
`;

export const ContactInfoTitle = styled.h5`
  color: #00030a;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 1.3rem;
  padding: 0;
  margin-top: 1.5rem;
  line-height: 1.35;
  font-weight: 700;

  @media (min-width: 540px) {
    padding: 0 1rem;
  }
`;

export const ContactText = styled.p`
  color: #00030a;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  margin-top: 1rem;
  padding: 0;

  @media (min-width: 540px) {
    padding: 0 1rem;
  }
`;

export const MapWrapper = styled.div`
  max-width: 99vw;
  height: 200px;
  overflow: hidden;

  & .map {
    position: relative;
    max-width: 99vw !important;
    height: 200px !important;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    height: 450px;

    .map {
      height: 450px !important;
    }
  }
`;
