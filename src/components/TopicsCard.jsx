import { Link } from "react-router-dom";

const TopicsCard = ({ slug, description }) => {

  return (
    <div id="topic-card">
      <h3>{slug}</h3>
      <p>{description}</p>
      <Link to={`/articles/topics/${slug}`}
      >
        View Articles
      </Link>
    </div>
  );
};

export default TopicsCard;
