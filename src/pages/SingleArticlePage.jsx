import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const SingleArticlePage = () => {
  const { article_id } = useParams();
  const [articleDetails, setArticleDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then((res) => {
      const { article } = res.data;
      setArticleDetails(article);
      setIsLoading(false);
    });
  }, []);

  const { title, topic, author, body, comment_count, created_at, votes } =
    articleDetails;

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
        It has {comment_count} comments and {votes} votes
      </p>
      <button>View Comments</button>
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </section>
  );
};

export default SingleArticlePage;
