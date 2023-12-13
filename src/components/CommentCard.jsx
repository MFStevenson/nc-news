import { useContext, useState } from "react";
import { deleteComment } from "../utils/api";
import { UserContext } from "../context/UserContext";
import Loading from "./Loading";

const CommentCard = ({ comment }) => {
  const user = { username: "jessjelly" };
  const { comment_id, body, author, votes } = comment;
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteClick = () => {
    if (user.username === author) {
      setIsLoading(true);
      deleteComment(comment_id)
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setErr("Something went wrong, please try again.");
        });
    } else {
      setErr("Something went wrong, you are not the author of the comment");
    }
  };

  if (isLoading) return <Loading />;
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
