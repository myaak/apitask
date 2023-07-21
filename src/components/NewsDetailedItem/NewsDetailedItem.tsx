import {
  NewsDetailedItemAuthor,
  NewsDetailedItemContent,
  NewsDetailedItemDate,
  NewsDetailedItemError,
  NewsDetailedItemTitle,
  NewsDetailedItemTopic,
  NewsDetailedItemWrapper
} from "./NewsDetailedItem.styled.ts";
import { NewsItemInstance } from "../../models/NewsItem.ts";
import { getCorrectDate } from "../../utils/getCorrectDate.ts";
import CommentList from "../CommentList/CommentList.tsx";

interface NewsDetailedItemProps {
  newsDetailedItem: NewsItemInstance;
}

const NewsDetailedItem: React.FC<NewsDetailedItemProps> = ({ newsDetailedItem }) => {
  const { title, comments_count, comments, user, url, domain, time, deleted } = newsDetailedItem;

  if (deleted) {
    return <NewsDetailedItemError>Original topic was deleted</NewsDetailedItemError>;
  }

  return (
    <NewsDetailedItemWrapper>
      <NewsDetailedItemTitle>{title}</NewsDetailedItemTitle>
      <NewsDetailedItemAuthor>Author: {user}</NewsDetailedItemAuthor>
      <NewsDetailedItemDate>Publication date: {getCorrectDate(time)}</NewsDetailedItemDate>
      <NewsDetailedItemContent>
        Attached link:
        <NewsDetailedItemTopic href={url} target={"_blank"}>
          [{domain}]
        </NewsDetailedItemTopic>
        <div>Comments here: {comments_count}</div>
      </NewsDetailedItemContent>

      <CommentList comments={comments} />
    </NewsDetailedItemWrapper>
  );
};

export default NewsDetailedItem;
