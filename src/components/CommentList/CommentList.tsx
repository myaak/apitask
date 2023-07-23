import { CommentListTitle, CommentListWrapper } from "./CommentList.styled.ts";
import { NewsItemInstance } from "../../models/NewsItem.ts";
import CommentItem from "../CommentItem/CommentItem.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.ts";
import FetchAlertWindow from "../FetchAlertWindow/FetchAlertWindow.tsx";
import { useCallback } from "react";
import { fetchNewsItemComments } from "../../store/Reducers/NewsItemReducer.ts";
import { NewsDetailedItemCommentsReloadButton } from "../NewsDetailedItem/NewsDetailedItem.styled.ts";

const CommentList = () => {
  const { id, comments } = useAppSelector((state) => state.newsItem.newsDetailsItem);

  const { isCommentsLoading } = useAppSelector((state) => state.newsItem);

  const dispatch = useAppDispatch();

  const commentsList = comments.map((item: NewsItemInstance) => <CommentItem key={item.id} comment={item} />);

  const fetchNewComments = useCallback(async () => {
    dispatch(fetchNewsItemComments(id));
  }, []);

  return (
    <CommentListWrapper>
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
