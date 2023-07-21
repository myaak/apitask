import styled from "styled-components";
import { ITheme } from "../../theme/theme.ts";

export const ReloadButton = styled.button<ITheme>`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  background-color: ${(props) => props.theme.titleColor};
  color: #fff;
  padding: 15px;
  border-radius: 15px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;
