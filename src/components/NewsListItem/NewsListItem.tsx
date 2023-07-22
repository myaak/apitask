import {
  NewsItemAuthor,
  NewsItemAuthorWrapper,
  NewsItemComments,
  NewsItemInfo,
  NewsItemLink,
  NewsItemPublishDate,
  NewsItemRating,
  NewsItemTitle,
  NewsItemWrapper
} from "./NewsListItem.styled.ts";
import { NewsInstance } from "../../models/News.ts";
import { getCorrectTime } from "../../utils/getCorrectTime.ts";

const NewsListItem: React.FC<NewsInstance> = ({ id, title, user, comments_count, points, time }) => {
  return (
    <NewsItemWrapper>
      <NewsItemLink to={`${id}`}>
        <NewsItemTitle>{title}</NewsItemTitle>
      </NewsItemLink>
      <NewsItemInfo>
        <NewsItemAuthorWrapper>
          Published by:
          <NewsItemAuthor> {user}</NewsItemAuthor>
        </NewsItemAuthorWrapper>
        <NewsItemComments>Comments: {comments_count}</NewsItemComments>
        <NewsItemRating>Points: {points}</NewsItemRating>
      </NewsItemInfo>
      <NewsItemPublishDate>Published: {getCorrectTime(time)}</NewsItemPublishDate>
    </NewsItemWrapper>
  );
};

export default NewsListItem;
