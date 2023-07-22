import { useEffect } from "react";
import Loader from "../../components/Loader/Loader.tsx";
import NewsDetailedItem from "../../components/NewsDetailedItem/NewsDetailedItem.tsx";
import {
  NewsDetailedItemError,
  NewsDetailedItemLoading
} from "../../components/NewsDetailedItem/NewsDetailedItem.styled.ts";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.ts";
import { fetchNewsItemDetails } from "../../store/Reducers/NewsItemReducer.ts";

const NewsDetailScreen = () => {
  const { newsDetailsItem, isLoading, error } = useAppSelector((state) => state.newsItem);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const itemId = Number(window.location.pathname.slice(1));
    dispatch(fetchNewsItemDetails(itemId));
  }, []);

  useEffect(() => {});

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

  return newsDetailsItem && <NewsDetailedItem />;
};

export default NewsDetailScreen;
