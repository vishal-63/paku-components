import styled from "styled-components";

export const TopbarContainer = styled.section`
  width: 100%;
  height: 35px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fff;
`;

export const TopbarContent = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-right: 1px solid #fff;
  color: #241b64;
`;

export const TopbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 0 20px;
  height: 100%;
  border-left: 1px solid #fff;
  /* border-right: 1px solid #fff; */

  @media screen and (max-width: 420px) {
    font-size: 6px;
    padding: 0 10px;
  }
`;

export const TopbarIcons = styled.span`
  padding-top: 4px;
  padding-right: 0px;
  justify-self: flex-start;
`;

export const TopbarText = styled.span`
  font-size: 14px;
  padding-left: 10px;

  @media screen and (max-width: 768px) {
    font-size: 6px;
  }
`;
