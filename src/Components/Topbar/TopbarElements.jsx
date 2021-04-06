import styled from "styled-components";

export const TopbarContainer = styled.div`
  width: 100%;
  height: 35px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopbarContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #00b4d8;
  border-bottom: 1.5px solid #0096c7;
  z-index: 20;
`;

export const TopbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 0 20px;
  height: 100%;
  border-left: 1.5px solid #0096c7;
  border-right: 1.5px solid #0096c7;
  z-index: 20;

  &:nth-child(1) {
    border-right: none;
  }

  @media screen and (max-width: 420px) {
    font-size: 6px;
    padding: 0 10px;
  }
`;

export const TopbarIcons = styled.span`
  padding-top: 4px;
  padding-right: 0px;
  justify-self: flex-start;
  z-index: 20;
`;

export const TopbarText = styled.span`
  font-size: 14px;
  padding-left: 10px;
  z-index: 20;

  @media screen and (max-width: 768px) {
    font-size: 6px;
  }
`;
