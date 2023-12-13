import { Link, useNavigate } from "react-router-dom";

const ArticleCard = ({
  article_id,
  title,
  topic,
  author,
  votes,
  comment_count,
}) => {
  return (
    <section id="article-card">
      <h3>{title}</h3>
      <p>This article belongs to {topic}</p>
      <p>It was authored by {author}</p>
      <p>
        The article has {votes} votes and {comment_count} comments
      </p>
      <Link to={`/articles/${article_id}`}>View</Link>
    </section>
  );
};
export default ArticleCard;
