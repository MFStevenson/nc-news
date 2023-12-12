const CommentCard = ({ body, author, votes }) => {
  return (
    <div id="comment-card">
      <p>{author} authored:</p>
      <p>{body}</p>
      <p>The comment has {votes} votes</p>
      <button>+1</button>
      <button>-1</button>
      <button>Delete Comment</button>
    </div>
  );
};
export default CommentCard;
