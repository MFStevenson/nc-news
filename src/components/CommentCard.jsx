import { useContext, useState } from "react";
import { deleteComment } from "../utils/api";
import { UserContext } from "../context/UserContext";
import { patchCommentVotes } from "../utils/api";

const CommentCard = ({ comment }) => {
  const user = useContext(UserContext);
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

  const handleUpVoteClick = () => {
    setRenderedVotes((currVotes) => {
      return currVotes + 1;
    });
    setErr(null);

    patchCommentVotes(comment_id, 1).catch((err) => {
      setRenderedVotes((currVotes) => {
        return currVotes - 1;
      });
      setErr("Something went wrong, please try again.");
    });
  };

  const handleDownVoteClick = () => {
    setRenderedVotes((currVotes) => {
      return currVotes - 1;
    });
    setErr(null);

    patchCommentVotes(comment_id, -1).catch((err) => {
      setRenderedVotes((currVotes) => {
        return currVotes + 1;
      });
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
        <button onClick={handleUpVoteClick}>+1</button>
        <button onClick={handleDownVoteClick}>-1</button>
        {err ? <p>{err}</p> : null}
        {user.username === author ? (
          <button onClick={handleDeleteClick}>Delete Comment</button>
        ) : null}
      </div>
    );
  }
};

export default CommentCard;
