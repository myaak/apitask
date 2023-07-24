import { FetchAlertWindowStyled } from "./FetchAlertWindow.styled.ts";
import useFetchAlert from "../../../hooks/useFetchAlert.ts";
import React, { useEffect } from "react";

const FetchAlertWindow: React.FC<{ callback: Function }> = ({ callback }) => {
  const fetchAlert = useFetchAlert(callback);

  useEffect(() => {
    console.log("RENDERED");
  }, []);

  return fetchAlert && <FetchAlertWindowStyled>Hot refresh after 10 seconds</FetchAlertWindowStyled>;
};

export default React.memo(FetchAlertWindow);
