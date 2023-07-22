import { useState } from "react";
import { NewsItemInstance } from "../models/NewsItem.ts";
import { getSingleItem } from "../http/API.ts";

const useOpenReplies = (id: number) => {
  const [children, setChildren] = useState<NewsItemInstance[]>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [openedReplies, setOpenedReplies] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleOpenReplies = async () => {
    try {
      if (error) {
        setError(false);
      }

      if (!openedReplies && !children) {
        setLoading(true);
        const newsItem = await getSingleItem(id);
        if (!(newsItem instanceof Error)) {
          setChildren(newsItem.comments);
        } else {
          setError(true);
        }
        setLoading(false);
      }
      setOpenedReplies((prev) => !prev);
    } catch (e) {
      setLoading(false);
    }
  };

  return { openedReplies, isLoading, handleOpenReplies, children, error };
};

export default useOpenReplies;
