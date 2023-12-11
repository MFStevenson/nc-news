import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Articles from "./Articles";
import { getArticles } from "../utils/api";

const ArticleStateWrapper = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((res) => {
      const { articles } = res.data;
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar setArticle={setArticles} />
      {/* need to conditionally render this based on path potentially */}
      <Articles articles={articles} />
    </>
  );
};

export default ArticleStateWrapper;
