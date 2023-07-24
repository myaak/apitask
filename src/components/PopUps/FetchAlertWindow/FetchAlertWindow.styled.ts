import styled from "styled-components";

export const FetchAlertWindowStyled = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0.5rem;
  transform: translateX(-50%);
  background-color: #ddd;
  color: #222;
  z-index: 2023;
  max-width: 400px;
  border-radius: 8px;
  font-size: 16px;
  padding: 10px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  animation: slideUp 1s;

  @keyframes slideUp {
    from {
      transform: translateX(-50%) translateY(100%); /* Start position */
    }
    to {
      transform: translateX(-50%) translateY(0); /* End position (at the bottom of the viewport) */
    }
  }
`;
