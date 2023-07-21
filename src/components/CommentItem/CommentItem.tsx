import {
  CommentItemAuthor,
  CommentItemButtonsWrapper,
  CommentItemContent,
  CommentItemRepliesCount,
  CommentItemReply,
  CommentItemWrapper
} from "./CommentItem.styled.ts";
import { NewsItemInstance } from "../../models/NewsItem.ts";
import DOMPurify from "dompurify";
import React, { useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader.tsx";
import CommentItemTextarea from "./CommentItemTextarea.tsx";

interface CommentItemProps {
  comment: NewsItemInstance;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const { id, user, content, deleted, comments_count } = comment;

  const [children, setChildren] = useState<NewsItemInstance[]>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [openedReplies, setOpenedReplies] = useState<boolean>(false);
  const [isReplying, setReplying] = useState<boolean>(false);

  const safeContent = DOMPurify.sanitize(content); //API вернет HTML string, так что нужно проверить чтобы все безопасно было

  const handleOpenReplies = async () => {
    try {
      if (!openedReplies && !children) {
        setLoading(true);
        const response = await axios.get<NewsItemInstance>(`https://api.hnpwa.com/v0/item/${id}.json`);
        setChildren(response.data.comments);
        setLoading(false);
      }
      setOpenedReplies((prev) => !prev);
    } catch (e) {
      setLoading(false);
    }
  };

  const handleClickReply = () => {
    setReplying(true);
  };

  return (
    !deleted && (
      <CommentItemWrapper>
        <CommentItemAuthor>{user}</CommentItemAuthor>
        <CommentItemContent dangerouslySetInnerHTML={{ __html: safeContent }}></CommentItemContent>
        <CommentItemButtonsWrapper>
          {comments_count > 0 ? (
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            <CommentItemRepliesCount onClick={() => handleOpenReplies()}>
              {openedReplies ? "> " : "v "}
              Replies: {comments_count}
            </CommentItemRepliesCount>
          ) : (
            <CommentItemRepliesCount>No replies</CommentItemRepliesCount>
          )}
          <CommentItemReply onClick={handleClickReply}>Reply</CommentItemReply>
        </CommentItemButtonsWrapper>
        {isReplying && <CommentItemTextarea onCancel={() => setReplying(false)} />}
        {isLoading && <Loader />}
        {children &&
          openedReplies &&
          children.map((item: NewsItemInstance) => <CommentItem key={item.id} comment={item} />)}
      </CommentItemWrapper>
    )
  );
};

export default CommentItem;

//TODO: Список комментариев должен автоматически обновляться раз в минуту без участия пользователя
