import { useEffect, useState, useCallback } from "react";

const useFetchAlert = (callback: Function) => {
  const [fetchAlert, setFetchAlert] = useState<boolean>(false);

  const fetchWithAlert = useCallback(async () => {
    callback();
    setFetchAlert(false);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(fetchWithAlert, 60 * 1000); // 60 seconds

    return () => {
      clearTimeout(intervalId);
    };
  }, [fetchWithAlert]);

  useEffect(() => {
    const fetchAlertTimeout = setTimeout(() => {
      setFetchAlert(true);
    }, 49 * 1000); // 50 - 1 потому 1 сек анимация

    return () => {
      clearTimeout(fetchAlertTimeout);
    };
  }, [fetchAlert]);

  return fetchAlert;
};

export default useFetchAlert;
