import { NewsListErrorWrapper, NewsListLoaderWrapper, NewsListWrapper, ReloadButton } from "./NewsList.styled.ts";
import { useCallback, useEffect, useState } from "react";
import NewsListItem from "../NewsListItem/NewsListItem.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.ts";
import { NewsInstance } from "../../types/News.ts";
import Loader from "../Loader/Loader.tsx";
import { fetchNews } from "../../store/Reducers/NewsReducer.ts";
import FetchAlertWindow from "../PopUps/FetchAlertWindow/FetchAlertWindow.tsx";
import SuccessfulUpdate from "../PopUps/SuccessfulUpdateWindow/SuccessfulUpdate.tsx";

export const NewsList = () => {
  const { news, isLoading, error, isFetched } = useAppSelector((state) => state.newsList);

  const [isRefreshed, setRefreshed] = useState<boolean>(false);

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
    setRefreshed(true);

    setTimeout(() => {
      setRefreshed(false);
    }, 3 * 1000);
  }, []);

  useEffect(() => {
    void fetchNewNews();
  }, [fetchNewNews]);

  if (error) {
    return <NewsListErrorWrapper>{error}</NewsListErrorWrapper>;
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
        {isRefreshed && <SuccessfulUpdate />}
        <FetchAlertWindow callback={fetchNewNews} />
        {newsItems}
      </NewsListWrapper>
      <ReloadButton onClick={fetchNewNews}>Reload news</ReloadButton>
    </>
  );
};

export default NewsList;
