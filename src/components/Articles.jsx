import ArticleCard from "./ArticleCard";
import Sorting from "./Sorting";

const Articles = ({ articles, setArticles }) => {
  return (
    <>
      <h2>Articles</h2>

      <Sorting setArticles={setArticles} />

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
