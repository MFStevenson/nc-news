import { useContext, useState } from "react";
import { deleteComment } from "../utils/api";
import { UserContext } from "../context/UserContext";
import Loading from "./Loading";

const CommentCard = ({ comment }) => {
  const user = { username: "jessjelly" };
  const { comment_id, body, author, votes } = comment;
  const [err, setErr] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDeleteClick = () => {
    if (user.username === author) {
      setIsDeleted(true);
      deleteComment(comment_id).catch(() => {
        setIsDeleted(false)
        setErr("Something went wrong, please try again.");
      });
    }
  };

  {
    return isDeleted ? (
      <p>Comment has been deleted</p>
    ) : (
      <div id="comment-card">
        <p>{author} authored:</p>
        <p>{body}</p>
        <p>The comment has {votes} votes</p>
        <button>+1</button>
        <button>-1</button>
        {err ? <p>{err}</p> : null}
        {user.username === author ? (
          <button onClick={handleDeleteClick}>Delete Comment</button>
        ) : null}
      </div>
    );
  }
};

export default CommentCard;
