import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";

const TopicsCard = ({ topic, setArticles }) => {
  const { slug, description } = topic;

  return (
    <div id="topic-card">
      <h3>{slug}</h3>
      <p>{description}</p>
      <Link to='/articles'
        onClick={() => {
          getArticles(slug).then((res) => {
            const { articles } = res.data;
            setArticles(articles);
          });
          
        }}
      >
        View Articles
      </Link>
    </div>
  );
};

export default TopicsCard;
