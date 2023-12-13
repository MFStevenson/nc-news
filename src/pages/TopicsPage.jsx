import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";
import Loading from "../components/Loading";
import TopicsCard from "../components/TopicsCard";

const TopicsPage = ({ setArticles }) => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((res) => {
      const { topics } = res.data;
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <section id="topics-page">
      <h2>Topics</h2>
      <ul>
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <TopicsCard {...topic} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TopicsPage;
