import { NewsListLoaderWrapper, NewsListWrapper, ReloadButton } from "./NewsList.styled.ts";
import { useCallback, useEffect } from "react";
import NewsListItem from "../NewsListItem/NewsListItem.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.ts";
import { NewsInstance } from "../../models/News.ts";
import Loader from "../Loader/Loader.tsx";
import { fetchNews } from "../../store/Reducers/NewsReducer.ts";
import FetchAlertWindow from "../FetchAlertWindow/FetchAlertWindow.tsx";

export const NewsList = () => {
  const { news, isLoading, error, isFetched } = useAppSelector((state) => state.newsList);

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
    dispatch(fetchNews());
  }, []);

  useEffect(() => {
    void fetchNewNews();
  }, []);

  if (error) {
    return <NewsListWrapper>{error}</NewsListWrapper>;
  }

  if (isLoading || !isFetched) {
    return (
      <NewsListLoaderWrapper>
        <Loader />
      </NewsListLoaderWrapper>
    );
  }

  return (
    <>
      <NewsListWrapper>
        <FetchAlertWindow callback={fetchNewNews} />
        {newsItems}
      </NewsListWrapper>
      <ReloadButton onClick={fetchNewNews}>Reload news</ReloadButton>
    </>
  );
};

export default NewsList;
