import {
  CommentItemCancelButton,
  CommentItemReplyButton,
  CommentItemReplyButtonsWrapper,
  CommentItemReplyTextarea
} from "./CommentItem.styled.ts";
import { useRef, useState } from "react";

interface CommentItemTextareaProps {
  onCancel: () => void;
}

const CommentItemTextarea: React.FC<CommentItemTextareaProps> = ({ onCancel }) => {
  const [replyMessage, setReplyMessage] = useState<string>("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyMessage(event.target.value);
  };

  const resizeTextarea = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = "auto"; // Reset the height to calculate the new height properly
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <>
      <CommentItemReplyTextarea
        ref={textareaRef}
        placeholder={"Write your comment here..."}
        value={replyMessage}
        onChange={handleTextareaChange}
        onInput={resizeTextarea}
      ></CommentItemReplyTextarea>
      <CommentItemReplyButtonsWrapper>
        <CommentItemReplyButton>Send</CommentItemReplyButton>
        <CommentItemCancelButton onClick={onCancel}>Cancel</CommentItemCancelButton>
      </CommentItemReplyButtonsWrapper>
    </>
  );
};

export default CommentItemTextarea;
