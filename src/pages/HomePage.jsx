import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section id="home-page">
      <h2>Choose which page you'd like to visit</h2>
      <Link to="/articles">
        <button>View All Articles</button>
      </Link>
      <Link to="/topics">
        <button>View All Topics</button>
      </Link>
    </section>
  );
};

export default HomePage;
