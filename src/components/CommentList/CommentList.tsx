import { CommentListTitle, CommentListWrapper } from "./CommentList.styled.ts";
import { NewsItemInstance } from "../../models/NewsItem.ts";
import CommentItem from "../CommentItem/CommentItem.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.ts";
import FetchAlertWindow from "../FetchAlertWindow/FetchAlertWindow.tsx";
import { useCallback } from "react";
import { fetchNewsItemComments } from "../../store/Reducers/NewsItemReducer.ts";

const CommentList = () => {
  const { comments } = useAppSelector((state) => state.newsItem.newsDetailsItem);

  const dispatch = useAppDispatch();

  const commentsList = comments.map((item: NewsItemInstance) => <CommentItem key={item.id} comment={item} />);

  const fetchNewComments = useCallback(async () => {
    const itemId = Number(window.location.pathname.slice(1));
    await dispatch(fetchNewsItemComments(itemId));
  }, []);

  return (
    <CommentListWrapper>
      <FetchAlertWindow callback={fetchNewComments} />
      <CommentListTitle>{commentsList.length > 0 ? "Comments" : "No comments yet"}</CommentListTitle>
      {commentsList}
    </CommentListWrapper>
  );
};

export default CommentList;
