import { useEffect } from "react";
import NewsDetailedItem from "../../components/NewsDetailedItem/NewsDetailedItem.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.ts";
import { fetchNewsItemDetails } from "../../store/Reducers/NewsItemReducer.ts";
import { useParams } from "react-router-dom";

const NewsDetailScreen = () => {
  const { isFetched } = useAppSelector((state) => state.newsItem);

  const { topicId } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewsItemDetails(Number(topicId)));
  }, []);

  return isFetched ? <NewsDetailedItem /> : null;
};

export default NewsDetailScreen;
