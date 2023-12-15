import { useContext, useState } from "react";
import { deleteComment } from "../utils/api";
import { UserContext } from "../context/UserContext";
import VoteButtons from "./VoteButtons";

const CommentCard = ({ comment }) => {
  const {user} = useContext(UserContext);
  const { comment_id, body, author, votes } = comment;
  const [err, setErr] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const [renderedVotes, setRenderedVotes] = useState(votes);

  const handleDeleteClick = () => {
    setIsDeleted(true);
    deleteComment(comment_id).catch(() => {
      setIsDeleted(false);
      setErr("Something went wrong, please try again.");
    });
  };

  {
    return isDeleted ? (
      <p>Comment has been deleted</p>
    ) : (
      <div id="comment-card">
        <p>{author} authored:</p>
        <p>{body}</p>
        <p>The comment has {renderedVotes} votes</p>
        <VoteButtons
          comment_id={comment_id}
          setRenderedVotes={setRenderedVotes}
          setErr={setErr}
        />
        {err ? <p>{err}</p> : null}
        {user.username === author ? (
          <button onClick={handleDeleteClick}>Delete Comment</button>
        ) : null}
      </div>
    );
  }
};

export default CommentCard;
