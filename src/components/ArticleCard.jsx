import { Link } from "react-router-dom";

const ArticleCard = ({
  article_id,
  title,
  topic,
  author,
  votes,
  comment_count,
  created_at,
}) => {
  const date = created_at.split("T")[0];
  return (
    <section id="article-card">
      <h3>{title}</h3>
      <p>This article belongs to {topic}</p>
      <p>
        It was authored by {author} on {date}
      </p>
      <p>
        The article has {votes} votes and {comment_count} comments
      </p>

      <Link to={`/articles/${article_id}`}>View</Link>
    </section>
  );
};
export default ArticleCard;
