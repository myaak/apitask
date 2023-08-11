import styled from "styled-components";
import { ITheme } from "../../theme/theme.ts";

export const HeaderWrapper = styled.header<ITheme>`
  display: flex;
  justify-content: center;
  background-color: #333333;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  z-index: ${(props) => props.theme.maxZIndex};
`;

export const HeaderTitle = styled.div`
  width: max-content;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    cursor: pointer;
  }
`;
