import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getArticles, getTopics } from "../utils/api";
import Loading from "./Loading";

const Navbar = ({ setArticles }) => {
  const [topic, setTopic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getTopics().then((res) => {
      const { topics } = res.data;
      setTopic(topics);
      setIsLoading(false);
    });
  }, []);

  const handleTopicChange = (topic) => {
    getArticles(topic).then((res) => {
      const {articles} = res.data;
      setArticles(articles);
    });
    navigate("/articles");
  };

  if (isLoading) return <Loading />;
  return (
    <nav>
      <ul>
        <li>
          <button
            className="navbar-btn"
            onClick={() => {
              handleTopicChange(topic[0].slug);
            }}
          >
            {topic[0].slug}
          </button>
        </li>
        <li>
          <button
            className="navbar-btn"
            onClick={() => {
              handleTopicChange(topic[1].slug);
            }}
          >
            {topic[1].slug}
          </button>
        </li>
        <li>
          <button
            className="navbar-btn"
            onClick={() => {
              handleTopicChange(topic[2].slug);
            }}
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
