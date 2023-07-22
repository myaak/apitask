import styled from "styled-components";
import { ITheme } from "../../theme/theme.ts";

export const CommentListWrapper = styled.ul`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CommentListTitle = styled.div<ITheme>`
  color: ${(props) => props.theme.titleColor};
  font-size: 22px;
  font-weight: 700;
  margin-bottom: -10px;
`;
