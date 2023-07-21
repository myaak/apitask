import styled from "styled-components";
import { ITheme } from "../../theme/theme.ts";

export const NewsDetailedItemWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const NewsDetailedItemTitle = styled.h1<ITheme>`
  font-size: 32px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.titleColor};
`;

export const NewsDetailedItemAuthor = styled.p<ITheme>`
  color: ${(props) => props.theme.textColor};
  margin: 0;
  margin-bottom: 10px;
`;
export const NewsDetailedItemDate = styled.div<ITheme>`
  font-size: 16px;
  margin: 0;
  margin-bottom: 10px;
  color: ${(props) => props.theme.textColor};
`;

export const NewsDetailedItemContent = styled.div<ITheme>`
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
  line-height: 1.8;
`;

export const NewsDetailedItemTopic = styled.a<ITheme>`
  margin-left: 5px;
  color: ${(props) => props.theme.textColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const NewsDetailedItemLoading = styled(NewsDetailedItemWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NewsDetailedItemError = styled(NewsDetailedItemLoading)`
  font-weight: 700;
  font-size: 24px;
`;
