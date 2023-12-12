import ArticleCard from "./ArticleCard";

const Articles = ({ articles }) => {

  return (
    <>
      <h2>Articles</h2>

      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleCard {...article} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
