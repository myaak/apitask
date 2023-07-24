import styled from "styled-components";
import { ITheme } from "../../theme/theme.ts";
import { Link } from "react-router-dom";

export const NewsItemWrapper = styled.div`
  position: relative;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const NewsItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const NewsItemTitle = styled.h2<ITheme>`
  color: ${(props) => props.theme.titleColor};
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const NewsItemAuthor = styled.span`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const NewsItemAuthorWrapper = styled.p`
  color: #888888;
  font-size: 14px;
  margin: 0;
`;

export const NewsItemComments = styled.p`
  color: #888888;
  font-size: 14px;
  margin: 0;
`;

export const NewsItemRating = styled.p`
  font-size: 14px;
  color: #888888;
  margin: 0;
`;

export const NewsItemPublishDate = styled.div`
  position: absolute;
  right: 10px;
  bottom: 15px;
  color: #888888;
  font-size: 14px;
`;

export const NewsItemLink = styled(Link)<ITheme>`
  text-decoration: none;
  color: ${(props) => props.theme.titleColor};
`;
