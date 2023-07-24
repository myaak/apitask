import styled from "styled-components";
import { ITheme } from "../../theme/theme.ts";

export const NewsListWrapper = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NewsListLoaderWrapper = styled(NewsListWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NewsListErrorWrapper = styled(NewsListWrapper)`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;
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
