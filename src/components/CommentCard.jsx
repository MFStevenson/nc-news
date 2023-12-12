const CommentCard = ({ body, author, votes }) => {
  return (
    <div id="comment-card">
      <p>{author} authored:</p>
      <p>{body}</p>
      <p>The comment has {votes} votes</p>
      <button>+</button>
      <button>-</button>
      <button>Delete</button>
    </div>
  );
};
export default CommentCard;
