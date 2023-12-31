import { useContext, useEffect, useState } from "react";
import { getArticleById, deleteComment } from "../utils/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { UserContext } from "../context/UserContext";
import VoteButtons from "../components/VoteButtons";

const SingleArticlePage = () => {
  const { article_id } = useParams();
  const { user } = useContext(UserContext);
  const [articleDetails, setArticleDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [renderedVotes, setRenderedVotes] = useState(0);
  const [err, setErr] = useState(null);
  const [apiErr, setApiErr] = useState({});
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    getArticleById(article_id)
      .then((res) => {
        const { article } = res.data;
        setArticleDetails(article);
        setRenderedVotes(article.votes);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setApiErr(err);
      });
  }, []);

  const {
    title,
    topic,
    author,
    body,
    comment_count,
    created_at,
    article_img_url,
  } = articleDetails;

  const handleDeleteClick = () => {
    setIsDeleted(true);
    deleteComment(article_id).catch(() => {
      setIsDeleted(false);
      setErr("Something went wrong, please try again.");
    });
  };

  if (isLoading) return <Loading />;
  if (Object.keys(apiErr).length) {
    return <Error msg={apiErr.msg} status={apiErr.status} />;
  } else {
    return isDeleted ? (
      <p>Article has been deleted </p>
    ) : (
      <section id="article-info">
        <h2>{title}</h2>
        <p>{body}</p>
        <img
          id="single-article-img"
          alt="article image posted by user"
          src={article_img_url}
        ></img>
        <hr></hr>
        <p>This article belongs to the topic {topic}.</p>
        <p>
          It was written by {author} at {created_at}
        </p>
        <p>
          {" "}
          It has {comment_count} comment(s) and {renderedVotes} vote(s)
        </p>
        {err ? <p>{err}</p> : null}
        <VoteButtons
          article_id={article_id}
          setRenderedVotes={setRenderedVotes}
          setErr={setErr}
        />
        {user.username === author ? (
          <button onClick={handleDeleteClick}>Delete Article </button>
        ) : null}
        <section id="links">
          <Link to={`/articles/${article_id}/comments`}>View Comments </Link>
          <Link to="/articles">Back to Articles</Link>
        </section>
      </section>
    );
  }
};

export default SingleArticlePage;
