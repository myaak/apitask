import { CommentListWrapper } from "./CommentList.styled.ts";
import { NewsItemInstance } from "../../models/NewsItem.ts";
import CommentItem from "../CommentItem/CommentItem.tsx";

interface CommentListProps {
  comments: NewsItemInstance[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  const commentsList = comments.map((item: NewsItemInstance) => <CommentItem key={item.id} comment={item} />);

  return <CommentListWrapper>{commentsList}</CommentListWrapper>;
};

export default CommentList;
