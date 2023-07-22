import { useState } from "react";
import axios from "axios";
import { NewsItemInstance } from "../models/NewsItem.ts";

const useOpenReplies = (id: number) => {
  const [children, setChildren] = useState<NewsItemInstance[]>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [openedReplies, setOpenedReplies] = useState<boolean>(false);

  const handleOpenReplies = async () => {
    try {
      if (!openedReplies && !children) {
        setLoading(true);
        const response = await axios.get<NewsItemInstance>(`https://api.hnpwa.com/v0/item/${id}.json`);
        setChildren(response.data.comments);
        setLoading(false);
      }
      setOpenedReplies((prev) => !prev);
    } catch (e) {
      setLoading(false);
    }
  };

  return { openedReplies, isLoading, handleOpenReplies, children };
};

export default useOpenReplies;
