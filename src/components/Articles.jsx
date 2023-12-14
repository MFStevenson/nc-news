import { useState } from "react";
import ArticleCard from "./ArticleCard";
import Sorting from "./Sorting";
import Loading from "./Loading";

const Articles = ({ articles, setArticles }) => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) return <Loading />;
  return (
    <>
      <h2>Articles</h2>
      <Sorting setArticles={setArticles} setIsLoading = {setIsLoading} />
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
