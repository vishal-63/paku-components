import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 3.125rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 6.25rem 0;
  }
`;

export const InfoImg = styled.img`
  max-width: 80vw;
  width: auto;
  height: auto;

  @media (min-width: 900px) {
    max-width: 450px;
  }

  @media (min-width: 1100px) {
    max-width: 37.5rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  margin-top: 2rem;
  padding: 0 1rem;

  @media (min-width: 900px) {
    margin-left: 2rem;
    margin-top: 0;
  }

  @media (min-width: 1100px) {
    margin-left: 100px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-self: flex-start;
  }
`;

export const InfoSectionButton = styled.div`
  width: 135px;
  height: 45px;
  color: #444;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 2px solid #e5e7e9;
  transition: transform 0.2s ease;
  overflow: hidden;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  font-weight: 500;
  line-height: 1.2;
  font-family: Lato, "sans serif";
  padding: 0 0.75rem;
  user-select: none;
  cursor: pointer;
  width: calc(100vw - 2rem);

  &::after {
    content: "";
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    position: absolute;
    top: -2px;
    left: -2px;
    z-index: -1;
    background: linear-gradient(to right, #04ccfc, #3a7bd5);
    opacity: 0;
    transition: all 0.2s ease-in;

    @media (min-width: 900px) {
      transform: scaleX(0.4);
    }
  }

  &:hover {
    color: #fff;
    border-color: transparent;
  }

  &:hover::after {
    opacity: 1;

    @media (min-width: 900px) {
      transform: scaleX(1);
    }
  }

  &.active {
    background: linear-gradient(
      120deg,
      rgba(0, 212, 255, 1) 0%,
      rgba(17, 92, 175, 1) 62%,
      rgba(10, 81, 115, 1) 100%
    );
    color: #fff;
    border: none;
  }

  @media (min-width: 768px) {
    margin: 0 1.25rem 0 0;
    width: auto;
  }
`;

export const InfoHeading = styled.h2`
  font-size: 1.3rem;
  color: #000;
  font-weight: 600;
  font-family: Poppins, "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-bottom: 0.625rem;
`;

export const InfoText = styled.div`
  font-size: 0.9rem;
  font-family: lato, "sans-serif";
  font-weight: 400;
  line-height: 1.71429;
  color: #4a4a4a;
  word-spacing: 2px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const TeamTitle = styled.h2`
  font-size: 2.25rem;
  font-family: Poppins, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  color: #000;
  margin-bottom: 2.5rem;
`;

export const TeamWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 3rem;

  @media (min-width: 768px) and (max-width: 900px) {
    grid-gap: 1.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, auto);
  }
`;

export const MemberCard = styled.div`
  background-color: #fff;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) and (max-width: 900px) {
    padding: 1rem 1.5rem;
  }

  &:hover div {
    transform: translateY(0);
  }
`;

export const MemberDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-1.875rem);
  transition: all 0.3s ease-in-out;
`;

export const MemberImage = styled.img`
  max-height: 13.125rem;
  width: auto;
  height: auto;

  @media (min-width: 768px) and (max-width: 900px) {
    max-height: 10rem;
  }
`;

export const MemberName = styled.h3`
  font-family: Poppins, "sans-serif";
  font-size: 1.25rem;
  color: #3a7bd5;
  margin: 0.625rem 0;
`;

export const MemberPosition = styled.p`
  font-family: Poppins, "san serif";
  font-size: 1rem;
  color: #9b9b9b;
  padding-bottom: 0.625rem;
  margin-top: -0.625rem;
  border-bottom: 1px solid #e5e5e5;
`;

export const SocialLinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem 0;
`;

export const SocialLink = styled.div`
  font-size: 1rem;
  color: #434545;
  margin: 0 0.625rem;
`;

export const ClientWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media (min-width: 1100px) {
    max-width: 80vw;
  }
`;

export const ClientCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-shadow: 0 0 29px 0 rgb(0 0 0 / 19%);
  max-width: 80vw;
  margin: 1rem 0;

  @media (min-width: 768px) {
    max-width: 40vw;
  }

  @media (min-width: 1100px) {
    max-width: 475px;
    padding: 1rem 2rem 2rem;
  }
`;

export const ClientHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-self: start;
  transform: translateX(-30px);

  @media (min-width: 768px) and (max-width: 900px) {
    width: 130%;
    transform: translateX(-0px);
  }

  @media (min-width: 900px) {
    transform: translateX(-50px);
  }
`;

export const ClientImg = styled.img`
  max-width: 70px;
  width: auto;
  height: auto;

  @media (min-width: 768px) {
    max-width: 112px;
  }
`;

export const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const ClientName = styled.p`
  font-size: 1.25rem;
  font-family: Poppins, "sans serif";
  color: #151515;
`;

export const ClientSubtitle = styled.p`
  font-size: 1rem;
  font-family: Poppins, "sans serif";
  color: #4a4a4a;
`;

export const ClientContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 1rem;
`;

export const ClientIcon = styled.div`
  transform: rotateY(180deg);
  color: #3a7bd5;
  font-size: 2rem;
  margin-left: 1rem;
`;

export const ClientText = styled.p`
  font-size: 0.875rem;
  font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-left: 1rem;

  @media (min-width: 768px) {
    margin-left: 2rem;
    padding-left: 1rem;
  }
`;
