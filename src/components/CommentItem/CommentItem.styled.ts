import styled from "styled-components";
import { ITheme } from "../../theme/theme.ts";

export const CommentItemWrapper = styled.div`
  padding: 10px;
  padding-left: 20px;
  border-left: 2px solid #444;
  border-bottom: 2px solid #444;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CommentItemMainInfo = styled.div``;

export const CommentItemAuthor = styled.div<ITheme>`
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
`;

export const CommentItemContent = styled.div<ITheme>`
  padding: 5px;
  color: ${(props) => props.theme.textColor};
`;

export const CommentItemButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
  user-select: none;
  margin-top: 5px;
  font-size: 13px;
`;

export const CommentItemRepliesCount = styled.button<ITheme>`
  color: ${(props) => props.theme.textColor};
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;

export const CommentItemReply = styled.button<ITheme>`
  color: ${(props) => props.theme.textColor};
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const CommentItemReplyTextarea = styled.textarea`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  resize: none;
  overflow: hidden;
`;

export const CommentItemReplyButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
`;

export const CommentItemReplyButton = styled.button`
  padding: 5px 15px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const CommentItemCancelButton = CommentItemReplyButton;
export const CommentItemPublishDate = styled(CommentItemReply)`
  position: absolute;
  right: 20px;
  user-select: text;

  &:hover {
    text-decoration: none;
    cursor: auto;
  }
`;
