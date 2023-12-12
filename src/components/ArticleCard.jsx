import { useNavigate } from "react-router-dom";
const ArticleCard = ({ article_id, title, topic }) => {
  const navigate = useNavigate();
  const handleViewArticle = () => {
    navigate(`/articles/${article_id}`);
  };
  return (
    <section id="article-card">
      <h3>{title}</h3>
      <p>This article belongs to {topic}</p>
      <button onClick={handleViewArticle}>View</button>
    </section>
  );
};
export default ArticleCard;
