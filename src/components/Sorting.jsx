import { useState } from "react";
import { getArticles } from "../utils/api";
import { useParams } from "react-router-dom";

const Sorting = ({ setArticles }) => {
  const { topic } = useParams();
  const [sortBy, setSortBy] = useState("");
  const [order, setOrderBy] = useState("");

  const handleSubmit = (e) => {
    getArticles(topic, sortBy, order)
      .then((res) => {
        const { articles } = res.data;
        setArticles(articles);
      })
      .catch();
    e.preventDefault();
  };
  return (
    <form id="sorting-form" onSubmit={handleSubmit}>
      {" "}
      <label>
        Sort by
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="created_at">Date</option>
          <option value="comment_count">Number of Comments</option>
          <option value="votes">Votes</option>
        </select>
      </label>
      <label>
        Order{" "}
        <select value={order} onChange={(e) => setOrderBy(e.target.value)}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
      <button>Sort</button>
    </form>
  );
};

export default Sorting;
