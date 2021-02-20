import styled from "styled-components";

export const TopbarContainer = styled.div`
  width: 100%;
  height: 44px;
  background-color: #000;
  padding: 10px 32px;
  ${"" /* position: sticky;
  top: 0; */}

  @media screen and (max-width: 960px) {
    padding: 10px 24px;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
    padding: 8px 12px;
  }
`;

export const TopbarContent = styled.div`
  height: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;

export const ContactNosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-right: 16px;
  color: aliceblue;

  @media screen and (max-width: 720px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 6px;
  }
`;

export const PhoneIcon = styled.div`
  margin-top: 8px;
  margin-right: 16px;
  justify-self: flex-start;

  @media screen and (max-width: 720px) {
    margin-top: 6px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 3px;
  }
`;

export const ContactNos = styled.div`
  margin-right: 16px;
`;

export const EmailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  font-size: 16px;

  @media screen and (max-width: 720px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 6px;
  }
`;

export const EmailIcon = styled.div`
  margin-top: 8px;
  margin-right: 16px;
  justify-self: flex-start;

  @media screen and (max-width: 720px) {
    margin-top: 6px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 3px;
  }
`;

export const Email = styled.div`
  margin-right: 16px;
`;
