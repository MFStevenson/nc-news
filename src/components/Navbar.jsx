import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";
import Loading from "./Loading";

const Navbar = () => {
  const [topic, setTopic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getTopics().then((res) => {
      const { topics } = res.data;
      setTopic(topics);
      setIsLoading(false);
    });
  }, []);

  const handleTopicChange = () => {};

  if (isLoading) return <Loading />;
  return (
    <nav>
      <ul>
        <li>
          <button
            className="navbar-btn"
            onClick={handleTopicChange(topic[0].slug)}
          >
            {topic[0].slug}
          </button>
        </li>
        <li>
          <button
            className="navbar-btn"
            onClick={handleTopicChange(topic[0].slug)}
          >
            {topic[1].slug}
          </button>
        </li>
        <li>
          <button
            className="navbar-btn"
            onClick={handleTopicChange(topic[0].slug)}
          >
            {topic[2].slug}
          </button>
        </li>
        <Link to="/topics">
          <li>Topics</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
