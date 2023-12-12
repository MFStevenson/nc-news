import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const SingleArticlePage = () => {
  const { article_id } = useParams();
  const [articleDetails, setArticleDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getArticleById(article_id).then((res) => {
      const { article } = res.data;
      setArticleDetails(article);
      setIsLoading(false);
    });
  }, []);

  const { title, topic, author, body, comment_count, created_at, votes } =
    articleDetails;

  const handleCommentsClick = () => {
    navigate(`/articles/${article_id}/comments`);
  };

  if (isLoading) return <Loading />;

  return (
    <section id="article-info">
      <h2>{title}</h2>
      <p>{body}</p>
      <hr></hr>
      <p>This article belongs to the topic {topic}.</p>
      <p>
        It was written by {author} at {created_at}
      </p>
      <p>
        {" "}
        It has {comment_count} comment(s) and {votes} vote(s)
      </p>
      <button onClick={handleCommentsClick}>View Comments</button>
      <button>Delete</button>
      <Link to="/articles">
        <button>Back to Articles</button>
      </Link>
    </section>
  );
};

export default SingleArticlePage;
