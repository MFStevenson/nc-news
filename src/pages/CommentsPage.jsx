import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleComments } from "../utils/api";
import Loading from "../components/Loading";
import CommentCard from "../components/CommentCard";

import CommentForm from "../components/CommentForm";

const CommentsPage = () => {
  const { article_id } = useParams();
  const [err, setErr] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      {err ? <p>{err}</p> : null}
      <CommentForm
        article_id={article_id}
        setComments={setComments}
        setIsLoading={setIsLoading}
        setErr={setErr}
      />
      

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
