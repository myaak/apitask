import {
  CommentItemAuthor,
  CommentItemButtonsWrapper,
  CommentItemContent,
  CommentItemMainInfo,
  CommentItemPublishDate,
  CommentItemRepliesCount,
  CommentItemReply,
  CommentItemWrapper
} from "./CommentItem.styled.ts";
import { NewsItemInstance } from "../../models/NewsItem.ts";
import DOMPurify from "dompurify";
import React, { useState } from "react";
import Loader from "../Loader/Loader.tsx";
import CommentItemTextarea from "./CommentItemTextarea.tsx";
import { getCorrectTime } from "../../utils/getCorrectTime.ts";
import useOpenReplies from "../../hooks/useOpenReplies.tsx";
import { useAppSelector } from "../../hooks/reduxHooks.ts";

interface CommentItemProps {
  comment: NewsItemInstance;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const { id, user, content, deleted, comments_count, time } = comment;
  const [isReplying, setReplying] = useState<boolean>(false);

  const { isCommentsLoading } = useAppSelector((state) => state.newsItem);

  const { openedReplies, isLoading, handleOpenReplies, children, error } = useOpenReplies(id);

  const safeContent = DOMPurify.sanitize(content); //API вернет HTML string, так что нужно проверить чтобы все безопасно было

  const handleClickReply = () => {
    setReplying(true);
  };

  return (
    !deleted && (
      <CommentItemWrapper>
        <CommentItemMainInfo>
          <CommentItemAuthor>{user}</CommentItemAuthor>
          <CommentItemContent dangerouslySetInnerHTML={{ __html: safeContent }}></CommentItemContent>
          <CommentItemButtonsWrapper>
            {comments_count > 0 ? (
              <CommentItemRepliesCount disabled={isCommentsLoading} onClick={() => void handleOpenReplies()}>
                {openedReplies ? "> " : "v "}
                Replies: {comments_count}
              </CommentItemRepliesCount>
            ) : (
              <CommentItemRepliesCount>No replies</CommentItemRepliesCount>
            )}
            <CommentItemReply onClick={handleClickReply}>Reply</CommentItemReply>
            <CommentItemPublishDate>{getCorrectTime(time)}</CommentItemPublishDate>
          </CommentItemButtonsWrapper>
          {isReplying && <CommentItemTextarea onCancel={() => setReplying(false)} />}
          {isLoading && <Loader />}
        </CommentItemMainInfo>
        {error && <CommentItemWrapper>Something went wrong</CommentItemWrapper>}
        {children &&
          openedReplies &&
          children.map((item: NewsItemInstance) => <CommentItem key={item.id} comment={item} />)}
      </CommentItemWrapper>
    )
  );
};

export default CommentItem;

//TODO: Список комментариев должен автоматически обновляться раз в минуту без участия пользователя
