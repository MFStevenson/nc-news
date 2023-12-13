import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import Articles from "../components/Articles";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

const ArticleTopicsPage = ({ articles, setArticles }) => {
  const { topic } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(topic).then((res) => {
      const { articles } = res.data;
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <Loading />;

  return (
    <>
      <Articles articles={articles} />
    </>
  );
};

export default ArticleTopicsPage;
