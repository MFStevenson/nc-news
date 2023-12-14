import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { useParams } from "react-router-dom";

const Sorting = ({ setArticles, setIsLoading }) => {
  const { topic } = useParams();
  const [sortBy, setSortBy] = useState("");
  const [order, setOrderBy] = useState("");
  useEffect(() => {
    getArticles(topic, sortBy, order)
      .then((res) => {
        const { articles } = res.data;
        setArticles(articles);
      })
      .catch();
  }, [sortBy, order]);

  return (
    <div>
      <p>Sort by</p>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="created_at">Date</option>
        <option value="comment_count">Number of Comments</option>
        <option value="votes">Votes</option>
      </select>

      <p>Order</p>
      <select value={order} onChange={(e) => setOrderBy(e.target.value)}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
};
export default Sorting;
