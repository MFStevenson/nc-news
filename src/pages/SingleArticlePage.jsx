import { useEffect, useState } from "react";
import { getArticleById, patchArticleVotes } from "../utils/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
const SingleArticlePage = () => {
  const { article_id } = useParams();
  const [articleDetails, setArticleDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [renderedVotes, setRenderedVotes] = useState(0);
  const [err, setErr] = useState(null);
  const [apiErr, setApiErr] = useState({});

  const handleUpVoteClick = () => {
    setRenderedVotes((currVotes) => {
      return currVotes + 1;
    });
    setErr(null);

    patchArticleVotes(article_id, 1).catch((err) => {
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

    patchArticleVotes(article_id, -1).catch((err) => {
      setRenderedVotes((currVotes) => {
        return currVotes + 1;
      });
      setErr("Something went wrong, please try again.");
    });
  };

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
    votes,
    article_img_url,
  } = articleDetails;

  if (isLoading) return <Loading />
  if (apiErr){
    return <Error msg={apiErr.msg} />
  }else{
    return (
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
        <Link to={`/articles/${article_id}/comments`}>View Comments </Link>
        <button aria-label="up vote" onClick={handleUpVoteClick}>
          +1
        </button>
        <button aria-label="down vote" onClick={handleDownVoteClick}>
          -1
        </button>
        <button>Delete Article </button>
        <Link to="/articles">Back to Articles</Link>
      </section>
    );
  }
  
};

export default SingleArticlePage;
