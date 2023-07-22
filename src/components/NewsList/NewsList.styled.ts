import styled from "styled-components";

export const NewsListWrapper = styled.ul`
  max-width: 800px;
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
