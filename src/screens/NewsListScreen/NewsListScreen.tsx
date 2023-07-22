import NewsList from "../../components/NewsList/NewsList.tsx";
import { useAppDispatch } from "../../hooks/reduxHooks.ts";
import { fetchNews } from "../../store/Reducers/NewsReducer.ts";
import { ReloadButton } from "./NewsListScreen.styled.ts";

const NewsListScreen = () => {
  const dispatch = useAppDispatch();
  const handleRefetchNews = () => {
    void dispatch(fetchNews());
  };

  return (
    <>
      <NewsList />
      <ReloadButton onClick={handleRefetchNews}>Reload news</ReloadButton>
    </>
  );
};

export default NewsListScreen;
