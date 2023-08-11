import { CommentListTitle, CommentListWrapper } from "./CommentList.styled.ts";
import { INewsItem } from "../../types/NewsItem.ts";
import CommentItem from "../CommentItem/CommentItem.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.ts";
import FetchAlertWindow from "../PopUps/FetchAlertWindow/FetchAlertWindow.tsx";
import { useCallback, useMemo, useState } from "react";
import { fetchNewsItemComments } from "../../store/Reducers/NewsItemReducer.ts";
import { NewsDetailedItemCommentsReloadButton } from "../NewsDetailedItem/NewsDetailedItem.styled.ts";
import SuccessfulUpdate from "../PopUps/SuccessfulUpdateWindow/SuccessfulUpdate.tsx";

const CommentList = () => {
  const { id, comments } = useAppSelector((state) => state.newsItem.newsDetailsItem);

  const { isCommentsLoading } = useAppSelector((state) => state.newsItem);
  const [isRefreshed, setRefreshed] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const commentsList = useMemo(
    () => comments.map((item: INewsItem) => <CommentItem key={item.id} comment={item} />),
    [comments]
  );

  const fetchNewComments = useCallback(async () => {
    dispatch(fetchNewsItemComments(id));
    setRefreshed(true);

    setTimeout(() => {
      setRefreshed(false);
    }, 3 * 1000);
  }, [id]);

  return (
    <CommentListWrapper>
      {isRefreshed && <SuccessfulUpdate />}
      <NewsDetailedItemCommentsReloadButton onClick={fetchNewComments}>
        Reload comments
      </NewsDetailedItemCommentsReloadButton>
      {!isCommentsLoading && <FetchAlertWindow callback={fetchNewComments} />}
      <CommentListTitle>{commentsList.length ? "Comments" : "No comments yet"}</CommentListTitle>
      {commentsList}
    </CommentListWrapper>
  );
};

export default CommentList;
