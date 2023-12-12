import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import Articles from "../components/Articles";
import Loading from "../components/Loading";

const ArticlesPage = ({ articles, setArticles }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((res) => {
      const { articles } = res.data;
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <Articles articles={articles} />
    </>
  );
};

export default ArticlesPage;
