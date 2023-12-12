import { getArticleById } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Articles = ({ articles }) => {
  const [input, setInput] = useState(0);
  const navigate = useNavigate();

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(e);
    navigate(`/articles/${input}`);
  };

  return (
    <>
      <h2>Articles</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Search Article ID:{" "}
          <input
            type="number"
            placeholder="Article ID"
            value={input}
            onChange={updateInput}
          ></input>
        </label>
        <button id="search-article-btn">Search</button>
      </form>

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
