import { useEffect } from "react";
import NewsDetailedItem from "../../components/NewsDetailedItem/NewsDetailedItem.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.ts";
import { fetchNewsItemDetails } from "../../store/Reducers/NewsItemReducer.ts";
import { useParams } from "react-router-dom";

const NewsDetailScreen = () => {
  const { newsDetailsItem } = useAppSelector((state) => state.newsItem);

  const { topicId } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewsItemDetails(Number(topicId)));
  }, []);

  useEffect(() => {});

  return !newsDetailsItem.dead ? <NewsDetailedItem /> : null;
  // тут условие. dead по умолчанию true, потому что рендерится с initialState, а после фетча уже с нормальным. Чтобы избежать два ререндера
};

export default NewsDetailScreen;
