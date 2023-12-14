import { useEffect, useState } from "react";
import { Link  } from "react-router-dom";
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

  if (isLoading) return <Loading />;
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/articles/topics/${topic[0].slug}`}>{topic[0].slug}</Link>
        </li>
        <li>
          <Link to={`/articles/topics/${topic[1].slug}`}>{topic[1].slug}</Link>
        </li>
        <li>
          <Link to={`/articles/topics/${topic[2].slug}`}>{topic[2].slug}</Link>
        </li>
        <Link to="/topics">
          <li>Topics</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
