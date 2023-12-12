import { useState } from "react";
import { deleteComment } from "../utils/api";

const CommentCard = ({ comment }) => {
  const { comment_id, body, author, votes } = comment;
  const [err, setErr] = useState(null);

  const handleDeleteClick = () => {
    deleteComment(comment_id).catch(() => {
      setErr("Something went wrong, please try again.");
    });
  };
  return (
    <div id="comment-card">
      <p>{author} authored:</p>
      <p>{body}</p>
      <p>The comment has {votes} votes</p>
      <button>+1</button>
      <button>-1</button>
      {err ? <p>{err}</p> : null}
      <button onClick={handleDeleteClick}>Delete Comment</button>
    </div>
  );
};
export default CommentCard;
