import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleComments, postComment } from "../utils/api";
import Loading from "../components/Loading";
import CommentCard from "../components/CommentCard";

const CommentsPage = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");
  const [err, setErr] = useState(null);

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const postBody = { username: "jessjelly", comment: input };
    postComment(article_id, postBody)
      .then((res) => {
        const { postedComment } = res.data;
        setComments((currComments) => {
          return [postedComment, ...currComments];
        });
        setIsLoading(false);
      })
      .catch((err) => {
        setErr("Something went wrong, please try again.");
      });

    setInput("");
  };

  useEffect(() => {
    getArticleComments(article_id).then((res) => {
      const { comments } = res.data;
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div id="comments-page">
      <h2>Comments</h2>

      <section id="comment-form">
        <p>Post a comment</p>
        {err ? <p>{err}</p> : null}
        <form onSubmit={handleSubmit}>
          <label>
            Comment{" "}
            <textarea
              required
              type="text"
              placeholder="type comment here"
              value={input}
              onChange={updateInput}
              cols={50}
              rows={8}
            ></textarea>
          </label>
          <button id="comment-btn">Comment</button>
        </form>
      </section>

      {comments.length ? (
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <CommentCard comment={comment} setComments={setComments} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>This article does not have any comments</p>
      )}

      <Link to={`/articles/${article_id}`}>Back to article</Link>
    </div>
  );
};

export default CommentsPage;
