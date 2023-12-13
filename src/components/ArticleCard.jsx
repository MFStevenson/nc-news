import { Link, useNavigate } from "react-router-dom";

const ArticleCard = ({ article_id, title, topic }) => {
  return (
    <section id="article-card">
      <h3>{title}</h3>
      <p>This article belongs to {topic}</p>
      <Link to={`/articles/${article_id}`}>View</Link>
    </section>
  );
};
export default ArticleCard;
