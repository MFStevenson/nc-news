const ArticleCard = ({
  title,
  topic,
  author,
  body,
  created_at,
  votes,
  article_img_url,
}) => {
  return (
    <section id="article-card">
      <h3>{title}</h3>
      <p>This article belongs to {topic}</p>
      <button>View</button>
    </section>
  );
};
export default ArticleCard;
