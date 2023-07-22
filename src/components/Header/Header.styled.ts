import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #333333;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  z-index: 2023;
`;

export const HeaderTitle = styled.h1`
  color: #ffffff;
  font-size: 24px;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    cursor: pointer;
  }
`;
