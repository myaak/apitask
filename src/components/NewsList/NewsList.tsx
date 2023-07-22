import { NewsListLoaderWrapper, NewsListWrapper } from "./NewsList.styled.ts";
import { useCallback, useEffect } from "react";
import NewsListItem from "../NewsListItem/NewsListItem.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.ts";
import { NewsInstance } from "../../models/News.ts";
import { fetchNews } from "../../store/Reducers/NewsReducer.ts";
import Loader from "../Loader/Loader.tsx";
import FetchAlertWindow from "../FetchAlertWindow/FetchAlertWindow.tsx";

export const NewsList = () => {
  const { news, isLoading, error } = useAppSelector((state) => state.newsList);

  const dispatch = useAppDispatch();

  const newsItems = news.map((item: NewsInstance) => (
    <NewsListItem
      key={item.id}
      title={item.title}
      user={item.user}
      comments_count={item.comments_count}
      points={item.points}
      time={item.time}
      url={item.url}
      id={item.id}
      domain={item.domain}
    />
  ));

  const fetchNewNews = useCallback(async () => {
    await dispatch(fetchNews());
  }, []);

  useEffect(() => {
    void fetchNewNews();
  }, []);

  if (error) {
    return <NewsListWrapper>{error}</NewsListWrapper>;
  }

  if (isLoading) {
    return (
      <NewsListLoaderWrapper>
        <Loader />
      </NewsListLoaderWrapper>
    );
  }

  return (
    <NewsListWrapper>
      <FetchAlertWindow callback={fetchNewNews} />
      {newsItems}
    </NewsListWrapper>
  );
};

export default NewsList;
