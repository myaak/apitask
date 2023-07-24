import { FetchAlertWindowStyled } from "./FetchAlertWindow.styled.ts";
import useFetchAlert from "../../../hooks/useFetchAlert.ts";
import React from "react";

const FetchAlertWindow: React.FC<{ callback: () => Promise<void> }> = ({ callback }) => {
  const fetchAlert = useFetchAlert(callback);

  return fetchAlert && <FetchAlertWindowStyled>Hot refresh after 10 seconds</FetchAlertWindowStyled>;
};

export default React.memo(FetchAlertWindow);
