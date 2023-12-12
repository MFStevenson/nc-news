import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticleComments } from "../utils/api";
import Loading from "../components/Loading";
import CommentCard from "../components/CommentCard";
import CommentForm from "../components/CommentForm";

const CommentsPage = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getArticleComments(article_id).then((res) => {
      const { comments } = res.data;
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  const handleBackToArticle = () => {
    navigate(`/articles/${article_id}`);
  };

  if (isLoading) return <Loading />;

  return (
    <div id="comments-page">
      <h2>Comments</h2>

      {comments.length ? (
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <CommentCard {...comment} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>This article does not have any comments</p>
      )}
      <CommentForm />
      <button onClick={handleBackToArticle}>Back to article</button>
    </div>
  );
};

export default CommentsPage;
