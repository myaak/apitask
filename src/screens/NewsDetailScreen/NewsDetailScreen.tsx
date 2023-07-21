import { useEffect, useState } from "react";
import { NewsItemInstance } from "../../models/NewsItem.ts";
import axios from "axios";
import Loader from "../../components/Loader/Loader.tsx";
import NewsDetailedItem from "../../components/NewsDetailedItem/NewsDetailedItem.tsx";
import {
  NewsDetailedItemError,
  NewsDetailedItemLoading
} from "../../components/NewsDetailedItem/NewsDetailedItem.styled.ts";

const NewsDetailScreen = () => {
  const [newsDetails, setNewsDetails] = useState<NewsItemInstance>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const itemId = Number(window.location.pathname.slice(1));

    const getNewsDetails = async (id: number) => {
      try {
        setLoading(true);
        const response = await axios.get<NewsItemInstance>(`https://api.hnpwa.com/v0/item/${id}.json`);
        setNewsDetails(response.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };
    void getNewsDetails(itemId);
  }, []);

  if (isLoading) {
    return (
      <NewsDetailedItemLoading>
        <Loader />
      </NewsDetailedItemLoading>
    );
  }

  if (error) {
    return <NewsDetailedItemError>Something went wrong</NewsDetailedItemError>;
  }

  return newsDetails?.id && <NewsDetailedItem newsDetailedItem={newsDetails} />;
};

export default NewsDetailScreen;
