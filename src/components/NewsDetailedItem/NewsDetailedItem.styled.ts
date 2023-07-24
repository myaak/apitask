import styled from "styled-components";
import { ITheme } from "../../theme/theme.ts";
import { CommentItemReply, CommentItemReplyButton } from "../CommentItem/CommentItem.styled.ts";
import { ReloadButton } from "../NewsList/NewsList.styled.ts";

export const NewsDetailedItemWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  @media (min-width: 799px) {
    width: auto;
  }
`;

export const NewsDetailedItemTitle = styled.h1<ITheme>`
  font-size: 32px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.titleColor};
`;

export const NewsDetailedItemAuthor = styled.p<ITheme>`
  color: ${(props) => props.theme.textColor};
  margin: 0 0 10px;
`;
export const NewsDetailedItemDate = styled.div<ITheme>`
  font-size: 16px;
  margin: 0 0 10px;
  color: ${(props) => props.theme.textColor};
`;

export const NewsDetailedItemContent = styled.div<ITheme>`
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
  line-height: 1.8;
`;

export const NewsDetailedItemTopic = styled.a<ITheme>`
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

export const NewsDetailedItemGoBack = styled(CommentItemReply)`
  position: absolute;
  left: 2rem;
  top: 0;
  user-select: none;
`;

export const NewsDetailedItemLeaveCommentButton = CommentItemReplyButton;

export const NewsDetailedItemUserContent = NewsDetailedItemContent;
export const NewsDetailedItemCommentsReloadButton = ReloadButton;
