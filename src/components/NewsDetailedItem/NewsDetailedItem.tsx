import {
  NewsDetailedItemAuthor,
  NewsDetailedItemCommentsReloadButton,
  NewsDetailedItemContent,
  NewsDetailedItemDate,
  NewsDetailedItemError,
  NewsDetailedItemGoBack,
  NewsDetailedItemLeaveCommentButton,
  NewsDetailedItemLoading,
  NewsDetailedItemTitle,
  NewsDetailedItemTopic,
  NewsDetailedItemUserContent,
  NewsDetailedItemWrapper
} from "./NewsDetailedItem.styled.ts";
import { getCorrectDate } from "../../utils/getCorrectDate.ts";
import CommentList from "../CommentList/CommentList.tsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CommentItemTextarea from "../CommentItem/CommentItemTextarea.tsx";
import DOMPurify from "dompurify";
import { useAppSelector } from "../../hooks/reduxHooks.ts";
import Loader from "../Loader/Loader.tsx";

const NewsDetailedItem = () => {
  const { title, comments_count, user, url, domain, time, deleted, content } = useAppSelector(
    (state) => state.newsItem.newsDetailsItem
  );
  const { isLoading, error } = useAppSelector((state) => state.newsItem);

  const [isCommenting, setCommenting] = useState<boolean>(false);

  const safeContent = DOMPurify.sanitize(content);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  const handleLeaveComment = () => {
    setCommenting(true);
  };

  if (deleted) {
    return <NewsDetailedItemError>Original topic was deleted</NewsDetailedItemError>;
  }

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

  return (
    <NewsDetailedItemWrapper>
      <NewsDetailedItemGoBack onClick={handleGoBack}>Go back</NewsDetailedItemGoBack>

      <NewsDetailedItemTitle>{title}</NewsDetailedItemTitle>
      <NewsDetailedItemAuthor>Author: {user}</NewsDetailedItemAuthor>
      <NewsDetailedItemDate>Publication date: {getCorrectDate(time)}</NewsDetailedItemDate>

      <NewsDetailedItemContent>
        {url && domain && (
          <NewsDetailedItemTopic href={url} target={"_blank"}>
            Attached Link: [{domain}]
          </NewsDetailedItemTopic>
        )}
        <NewsDetailedItemUserContent dangerouslySetInnerHTML={{ __html: safeContent }}></NewsDetailedItemUserContent>
        <div>Comments here: {comments_count}</div>
      </NewsDetailedItemContent>

      {isCommenting ? (
        <CommentItemTextarea onCancel={() => setCommenting(false)} />
      ) : (
        <NewsDetailedItemLeaveCommentButton onClick={handleLeaveComment}>
          Leave a comment
        </NewsDetailedItemLeaveCommentButton>
      )}

      <CommentList />
    </NewsDetailedItemWrapper>
  );
};

export default NewsDetailedItem;
